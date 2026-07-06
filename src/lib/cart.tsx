import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products, type Product } from "@/data/products";

export type CartItem = { id: string; qty: number };

type CartCtx = {
  items: CartItem[];
  count: number;
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  detailed: Array<{ product: Product; qty: number; subtotal: number | null }>;
  total: number;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "kentanks-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add: CartCtx["add"] = (id, qty = 1) =>
    setItems((prev) => {
      const ex = prev.find((i) => i.id === id);
      if (ex) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { id, qty }];
    });
  const remove: CartCtx["remove"] = (id) => setItems((p) => p.filter((i) => i.id !== id));
  const setQty: CartCtx["setQty"] = (id, qty) =>
    setItems((p) => (qty <= 0 ? p.filter((i) => i.id !== id) : p.map((i) => (i.id === id ? { ...i, qty } : i))));
  const clear = () => setItems([]);

  const detailed = items
    .map((i) => {
      const product = products.find((p) => p.id === i.id);
      if (!product) return null;
      return { product, qty: i.qty, subtotal: product.price ? product.price * i.qty : null };
    })
    .filter(Boolean) as CartCtx["detailed"];

  const total = detailed.reduce((s, d) => s + (d.subtotal ?? 0), 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return <Ctx.Provider value={{ items, count, add, remove, setQty, clear, detailed, total }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
}
