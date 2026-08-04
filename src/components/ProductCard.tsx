import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatKES, type Product } from "@/data/products";

const PHONE_TEL = "+254762572556";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const waMsg = encodeURIComponent(
    `Hi, please send me the price and availability for a ${product.litres.toLocaleString()} litre Kentank water tank.`
  );

  return (
    <div className="group bg-white border border-border hover:border-brand-navy hover:shadow-lg transition flex flex-col">
      <div className="relative bg-surface aspect-square overflow-hidden">
        <img src={product.image} alt={`${product.litres} litre Kentank water tank`} loading="lazy" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-brand-yellow text-brand-navy text-xs font-black px-2 py-1 uppercase tracking-wider">
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-brand-navy text-white text-xs font-bold px-2 py-1">
          {product.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="font-display text-3xl font-black text-brand-navy leading-none">
          {product.litres.toLocaleString()}<span className="text-lg text-muted-foreground font-bold ml-1">L</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.use}</p>
        <ul className="mt-3 space-y-1 text-xs text-foreground/80">
          {product.benefits.slice(0, 2).map((b) => (
            <li key={b} className="flex gap-1.5"><Check className="h-3.5 w-3.5 text-brand-yellow-dark shrink-0 mt-0.5" />{b}</li>
          ))}
        </ul>
        <div className="mt-4 flex items-end justify-between">
          <div>
            {product.price ? (
              <div className="font-display text-2xl font-black text-brand-navy">{formatKES(product.price)}</div>
            ) : (
              <div className="text-sm font-bold text-brand-navy">Ask for price</div>
            )}
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{product.leadTime}</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {product.price ? (
            <button
              onClick={onAdd}
              className="col-span-2 flex items-center justify-center gap-2 bg-brand-navy text-white px-4 py-3 font-bold uppercase text-sm tracking-wide hover:bg-brand-navy-dark transition"
            >
              {added ? <><Check className="h-4 w-4" /> Added</> : <><ShoppingCart className="h-4 w-4" /> Add to Cart</>}
            </button>
          ) : (
            <a
              href={`https://wa.me/254762572556?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 flex items-center justify-center gap-2 bg-brand-navy text-white px-4 py-3 font-bold uppercase text-sm tracking-wide hover:bg-brand-navy-dark"
            >
              Get Price
            </a>
          )}
          <a href={`tel:${PHONE_TEL}`} className="text-center bg-white border border-brand-navy text-brand-navy px-3 py-2 font-bold uppercase text-xs hover:bg-brand-navy hover:text-white">Call</a>
          <a href={`https://wa.me/254762572556?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="text-center bg-whatsapp text-white px-3 py-2 font-bold uppercase text-xs hover:brightness-110">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
