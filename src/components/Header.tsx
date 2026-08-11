import { Link } from "@tanstack/react-router";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const PHONE = "+254733618385";
const LOGO_IMAGE = "/klogo2.jpg";

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-white border-b-4 border-brand-yellow shadow-sm">
      <div className="mx-auto max-w-7xl px-4 h-16 md:h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={LOGO_IMAGE} alt="Kentank" className="h-10 md:h-12 w-auto object-contain" />
          <span className="hidden sm:block font-display text-lg md:text-xl font-black text-brand-navy tracking-wide leading-none">
            KENYA<br/><span className="text-xs font-bold text-muted-foreground tracking-widest">SUPPLIER</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-bold uppercase tracking-wide">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-brand-navy hover:text-brand-yellow-dark [&.active]:text-brand-yellow-dark" activeOptions={{ exact: n.to === "/" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${PHONE}`} className="hidden lg:inline-flex bg-brand-navy text-white px-4 py-2 font-bold text-sm hover:bg-brand-navy-dark">
            Call {PHONE}
          </a>
          <Link to="/cart" className="relative bg-brand-yellow text-brand-navy p-3 hover:bg-brand-yellow-dark" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-navy text-white text-[10px] font-black h-5 min-w-5 px-1 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2 text-brand-navy" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-white">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block px-4 py-3 border-b border-border font-bold uppercase text-sm text-brand-navy">
              {n.label}
            </Link>
          ))}
          <a href={`tel:${PHONE}`} className="block px-4 py-3 bg-brand-navy text-white font-bold uppercase text-sm">Call {PHONE}</a>
        </nav>
      )}
    </header>
  );
}
