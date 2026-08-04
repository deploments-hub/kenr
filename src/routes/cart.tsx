import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2, Plus, Minus, ShoppingCart, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useCart } from "@/lib/cart";
import { formatKES } from "@/data/products";

const PHONE_TEL = "+254762572556";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | Kentanks Kenya" },
      { name: "description", content: "Review your Kentank water tank order and checkout via WhatsApp." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { detailed, total, setQty, remove, clear } = useCart();

  const checkoutMsg = () => {
    const lines = detailed.map((d) => `- ${d.qty} x ${d.product.litres.toLocaleString()}L Kentank${d.subtotal ? ` - ${formatKES(d.subtotal)}` : " - price on request"}`).join("%0A");
    const totalLine = total > 0 ? `%0A%0ATotal: ${formatKES(total)}` : "";
    return `Hi, I would like to order the following Kentank water tanks:%0A%0A${lines}${totalLine}%0A%0APlease confirm price, availability and free countrywide delivery.`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-yellow py-10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-xs font-black uppercase tracking-[0.25em] text-brand-navy">Cart</div>
            <h1 className="mt-1 font-display text-4xl md:text-5xl font-black uppercase text-brand-navy">Your Order</h1>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4">
            {detailed.length === 0 ? (
              <div className="bg-white border border-border p-12 text-center">
                <ShoppingCart className="h-16 w-16 mx-auto text-brand-navy/30" />
                <h2 className="mt-4 font-display text-3xl font-black uppercase text-brand-navy">Your cart is empty</h2>
                <p className="mt-2 text-muted-foreground">Browse our Kentank water tanks and add your first item.</p>
                <Link to="/products" className="mt-6 inline-block bg-brand-navy text-white px-8 py-4 font-black uppercase hover:bg-brand-navy-dark">
                  Shop Tanks
                </Link>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white border border-border">
                  {detailed.map((d) => (
                    <div key={d.product.id} className="flex gap-4 p-4 border-b border-border last:border-b-0">
                      <img src={d.product.image} alt="" className="h-24 w-24 object-contain bg-surface p-2 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="font-display text-xl font-black text-brand-navy">{d.product.litres.toLocaleString()}L Kentank</div>
                            <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{d.product.category}</div>
                          </div>
                          <button onClick={() => remove(d.product.id)} className="text-muted-foreground hover:text-destructive p-1" aria-label="Remove">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between gap-2">
                          <div className="flex items-center border-2 border-border">
                            <button onClick={() => setQty(d.product.id, d.qty - 1)} className="p-2 hover:bg-surface" aria-label="Decrease"><Minus className="h-4 w-4" /></button>
                            <span className="px-4 font-black text-brand-navy min-w-10 text-center">{d.qty}</span>
                            <button onClick={() => setQty(d.product.id, d.qty + 1)} className="p-2 hover:bg-surface" aria-label="Increase"><Plus className="h-4 w-4" /></button>
                          </div>
                          <div className="text-right">
                            {d.subtotal !== null ? (
                              <div className="font-display text-xl font-black text-brand-navy">{formatKES(d.subtotal)}</div>
                            ) : (
                              <div className="text-sm font-bold text-brand-navy">Price on request</div>
                            )}
                            {d.product.price && (
                              <div className="text-xs text-muted-foreground">{formatKES(d.product.price)} each</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-4 border-t border-border flex justify-between">
                    <button onClick={clear} className="text-sm text-muted-foreground hover:text-destructive uppercase font-bold tracking-wide">Clear cart</button>
                    <Link to="/products" className="text-sm text-brand-navy hover:underline uppercase font-bold tracking-wide">Continue shopping</Link>
                  </div>
                </div>

                <aside className="bg-white border-t-4 border-brand-yellow p-6 h-fit">
                  <h2 className="font-display text-2xl font-black uppercase text-brand-navy">Order Summary</h2>
                  <div className="mt-4 space-y-2 text-sm">
                    {detailed.map((d) => (
                      <div key={d.product.id} className="flex justify-between text-muted-foreground">
                        <span>{d.qty} × {d.product.litres.toLocaleString()}L</span>
                        <span className="font-bold text-foreground">{d.subtotal !== null ? formatKES(d.subtotal) : "—"}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-border flex justify-between items-baseline">
                    <span className="font-bold uppercase text-sm tracking-wide text-brand-navy">Subtotal</span>
                    <span className="font-display text-3xl font-black text-brand-navy">{formatKES(total)}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Free delivery countrywide.</p>

                  <a href={`https://wa.me/254762572556?text=${checkoutMsg()}`} target="_blank" rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 bg-whatsapp text-white px-5 py-4 font-black uppercase tracking-wide hover:brightness-110">
                    <MessageCircle className="h-5 w-5" /> Checkout on WhatsApp
                  </a>
                  <a href={`tel:${PHONE_TEL}`} className="mt-2 flex items-center justify-center gap-2 bg-brand-navy text-white px-5 py-4 font-black uppercase tracking-wide hover:bg-brand-navy-dark">
                    <Phone className="h-5 w-5" /> Call to Order
                  </a>
                  <p className="mt-4 text-xs text-muted-foreground text-center">
                    We confirm final price, availability and free countrywide delivery before payment.
                  </p>
                </aside>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
