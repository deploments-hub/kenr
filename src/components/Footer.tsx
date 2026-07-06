import { Link } from "@tanstack/react-router";

const PHONE = "+254 732 074 700";
const PHONE_TEL = "+254732074700";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/85 py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="bg-brand-yellow text-brand-navy font-black px-3 py-1 text-xl tracking-wider">KENTANK</span>
          </div>
          <p className="mt-4 text-sm max-w-md">
            Kentanks water tanks supplier in Kenya. Quality plastic water storage tanks for homes, farms, schools, and businesses. Nationwide delivery.
          </p>
          <div className="mt-4 text-sm">
            <a className="text-brand-yellow font-bold" href={`tel:${PHONE_TEL}`}>{PHONE}</a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-black uppercase mb-3 text-sm tracking-widest">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-brand-yellow">All Tanks</Link></li>
            <li><Link to="/cart" className="hover:text-brand-yellow">Cart</Link></li>
            <li><Link to="/contact" className="hover:text-brand-yellow">Request Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase mb-3 text-sm tracking-widest">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-brand-yellow">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-yellow">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-10 pt-6 border-t border-white/10 text-xs text-white/60">
        © {new Date().getFullYear()} Kentanks Kenya Supplier. All rights reserved.
      </div>
    </footer>
  );
}
