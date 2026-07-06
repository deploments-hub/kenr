import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ProductCard } from "@/components/ProductCard";
import { products, CATEGORIES } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "All Kentank Water Tanks | Prices & Sizes | Kentanks Kenya" },
      { name: "description", content: "Full range of Kentank water tanks in Kenya — 500L, 1000L, 2000L, 3000L, 5000L, 10000L, 20000L, 24000L. See prices and add to cart." },
      { property: "og:title", content: "All Kentank Water Tanks | Prices & Sizes" },
      { property: "og:description", content: "Full range of Kentank plastic water storage tanks in Kenya with prices." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState<"size-asc" | "size-desc" | "price-asc" | "price-desc">("size-asc");

  const list = useMemo(() => {
    let arr = cat === "All" ? [...products] : products.filter((p) => p.category === cat);
    arr.sort((a, b) => {
      if (sort === "size-asc") return a.litres - b.litres;
      if (sort === "size-desc") return b.litres - a.litres;
      if (sort === "price-asc") return (a.price ?? Infinity) - (b.price ?? Infinity);
      return (b.price ?? -Infinity) - (a.price ?? -Infinity);
    });
    return arr;
  }, [cat, sort]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-yellow py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-xs font-black uppercase tracking-[0.25em] text-brand-navy">Shop</div>
            <h1 className="mt-1 font-display text-5xl md:text-6xl font-black uppercase text-brand-navy">All Kentank Water Tanks</h1>
            <p className="mt-3 text-lg text-brand-navy/80 max-w-2xl">Choose from 500 litres up to 24,000 litres. Add to cart or contact us for delivery.</p>
          </div>
        </section>

        <section className="border-b border-border bg-white sticky top-16 md:top-20 z-30">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {["All", ...CATEGORIES].map((c) => (
                <button key={c} onClick={() => setCat(c)}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wide border-2 transition ${cat === c ? "bg-brand-navy text-white border-brand-navy" : "bg-white text-brand-navy border-border hover:border-brand-navy"}`}>
                  {c}
                </button>
              ))}
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} className="border-2 border-border px-3 py-2 text-sm font-bold text-brand-navy focus:border-brand-navy outline-none">
              <option value="size-asc">Size: Small to Large</option>
              <option value="size-desc">Size: Large to Small</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {list.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
