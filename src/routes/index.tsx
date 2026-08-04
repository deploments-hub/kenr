import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, ShieldCheck, Phone, MessageCircle, Star, ArrowRight, Check, Droplets } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { QuoteForm } from "@/components/QuoteForm";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const PHONE = "+254 762 572 556";
const PHONE_TEL = "+254762572556";
const HERO_IMAGE = "/khero.jpg";
const ABOUT_IMAGE = "/kabout.jpg";
const WA_MSG = encodeURIComponent("Hi, I am interested in buying a Kentank water tank. Please send me prices and available sizes.");
const WA = `https://wa.me/254762572556?text=${WA_MSG}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kentank Water Tanks Kenya | Best Prices, Free Delivery" },
      { name: "description", content: "Buy Kentank water tanks in Kenya. 1000L from Ksh. 6,500. 3000L, 5000L, 10000L plastic water storage tanks. Add to cart or WhatsApp +254 762 572 556." },
      { property: "og:title", content: "Kentank Water Tanks Kenya | Best Prices" },
      { property: "og:description", content: "Kentank plastic water tanks 1000L to 24000L. Add to cart or WhatsApp +254 762 572 556 for free countrywide delivery." },
      { property: "og:image", content: HERO_IMAGE },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.filter((p) => [1000, 2000, 3000, 5000, 10000, 20000].includes(p.litres));
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Featured products={featured} />
        <WhyBand />
        <QuoteBanner />
        <AboutStrip />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-brand-yellow overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-brand-navy text-brand-yellow text-xs font-black px-3 py-1.5 uppercase tracking-widest">
            Kentank Supplier - Kenya
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-black uppercase leading-[0.95] text-brand-navy">
            Kentank<br/>Water Tanks<br/><span className="text-brand-navy/70">Best Price in Kenya</span>
          </h1>
          <p className="mt-6 text-lg text-brand-navy/85 max-w-xl font-medium">
            Genuine Kentank plastic water storage tanks from 500L to 24,000L. UV-resistant, food-grade, built to last. Free countrywide delivery.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/products" className="bg-brand-navy text-white px-7 py-4 font-black uppercase tracking-wide hover:bg-brand-navy-dark inline-flex items-center gap-2">
              Shop Tanks <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-7 py-4 font-black uppercase tracking-wide hover:brightness-110 inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={`tel:${PHONE_TEL}`} className="bg-white text-brand-navy px-7 py-4 font-black uppercase tracking-wide border-2 border-brand-navy hover:bg-brand-navy hover:text-white inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
            {[["500L-24,000L", "All Sizes"], ["From Ksh. 6,500", "1000L Tank"], ["Free Delivery", "Countrywide"]].map(([a, b]) => (
              <div key={b} className="border-l-4 border-brand-navy pl-3">
                <div className="font-black text-lg text-brand-navy">{a}</div>
                <div className="text-xs uppercase text-brand-navy/70 tracking-wider font-bold">{b}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={HERO_IMAGE} alt="Kentank water tanks range" className="w-full h-72 md:h-[500px] object-contain drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Truck, label: "Free Countrywide Delivery" },
    { icon: ShieldCheck, label: "Genuine Kentank" },
    { icon: Droplets, label: "Food-Grade Plastic" },
    { icon: Star, label: "Trusted by 1000+ Customers" },
  ];
  return (
    <section className="bg-brand-navy text-white py-5">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3 justify-center md:justify-start">
            <it.icon className="h-6 w-6 text-brand-yellow shrink-0" />
            <span className="font-bold text-sm uppercase tracking-wide">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Featured({ products }: { products: typeof import("@/data/products").products }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.25em] text-brand-yellow-dark">Popular Sizes</div>
            <h2 className="mt-1 font-display text-4xl md:text-5xl font-black uppercase text-brand-navy">Best-Selling Water Tanks</h2>
          </div>
          <Link to="/products" className="text-brand-navy font-black uppercase text-sm hover:underline inline-flex items-center gap-1">
            View all tanks <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}

function WhyBand() {
  const points = [
    ["UV Resistant", "Withstands the harsh Kenyan sun without cracking or fading."],
    ["Food Grade", "Safe inner surface for potable drinking water storage."],
    ["Ribbed Walls", "Extra-strong ribbed design that lasts for years."],
    ["All Sizes", "500L to 24,000L - one size for every need."],
    ["Best Prices", "Direct supplier prices with no hidden fees."],
    ["Fast Delivery", "Free countrywide delivery - Nairobi, Mombasa, Kisumu & more."],
  ];
  return (
    <section className="bg-surface py-16 md:py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <div className="text-xs font-black uppercase tracking-[0.25em] text-brand-yellow-dark">Why Kentank</div>
          <h2 className="mt-1 font-display text-4xl md:text-5xl font-black uppercase text-brand-navy">Built for Kenya</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map(([t, d]) => (
            <div key={t} className="bg-white p-6 border border-border hover:border-brand-navy transition">
              <div className="bg-brand-yellow text-brand-navy h-10 w-10 flex items-center justify-center font-black text-lg">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-black uppercase text-brand-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-6xl font-black uppercase">
          Get Today's <span className="text-brand-yellow">Kentank</span> Price
        </h2>
        <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
          Send us your location and preferred tank size. We confirm availability, price and free delivery within minutes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-8 py-4 font-black uppercase hover:brightness-110 inline-flex items-center gap-2">
            <MessageCircle className="h-5 w-5" /> WhatsApp {PHONE}
          </a>
          <a href={`tel:${PHONE_TEL}`} className="bg-brand-yellow text-brand-navy px-8 py-4 font-black uppercase hover:bg-brand-yellow-dark inline-flex items-center gap-2">
            <Phone className="h-5 w-5" /> Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutStrip() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <img src={ABOUT_IMAGE} alt="Kentank tank range" className="w-full h-72 md:h-96 object-contain bg-surface p-6" />
        <div>
          <div className="text-xs font-black uppercase tracking-[0.25em] text-brand-yellow-dark">About Us</div>
          <h2 className="mt-1 font-display text-4xl md:text-5xl font-black uppercase text-brand-navy">Your Trusted Kentank Supplier</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We supply the full range of Kentank plastic water storage tanks to homes, farms, schools, businesses and construction sites across Kenya. Fair prices, free countrywide delivery and honest advice.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 font-black uppercase hover:bg-brand-navy-dark">
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { q: "Ordered a 5000L tank on WhatsApp and it was delivered the next day. Great price too.", n: "Peter M.", l: "Nairobi" },
    { q: "Excellent service. The 10,000L tank has been perfect for our farm irrigation.", n: "Grace W.", l: "Nakuru" },
    { q: "Genuine Kentank quality. I've bought two 3000L tanks for my rentals - no leaks.", n: "James O.", l: "Kisumu" },
  ];
  return (
    <section className="bg-surface py-16 md:py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <div className="text-xs font-black uppercase tracking-[0.25em] text-brand-yellow-dark">Reviews</div>
          <h2 className="mt-1 font-display text-4xl md:text-5xl font-black uppercase text-brand-navy">What Customers Say</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {t.map((x) => (
            <div key={x.n} className="bg-white p-6 border-t-4 border-brand-yellow">
              <div className="flex gap-0.5 text-brand-yellow-dark">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 text-foreground/85 italic">"{x.q}"</p>
              <div className="mt-4 font-black text-brand-navy">{x.n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{x.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["What Kentank sizes do you have?", "We stock all sizes from 500 litres up to 24,000 litres including popular 1000L, 3000L, 5000L and 10,000L."],
    ["What is the price of a Kentank water tank?", "Prices start from Ksh. 6,500 for a 1000L tank. See our Products page for full pricing or WhatsApp us for the latest quote."],
    ["Do you deliver countrywide?", "Yes, free delivery countrywide. Share your location on WhatsApp and we confirm availability and timing."],
    ["Are Kentank tanks safe for drinking water?", "Yes. They are made from food-grade UV-resistant plastic and are safe for potable water storage."],
    ["Can I pay on delivery?", "Payment terms are agreed once we confirm your order. Contact us and we'll walk you through the options."],
  ];
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <div className="text-xs font-black uppercase tracking-[0.25em] text-brand-yellow-dark">FAQ</div>
          <h2 className="mt-1 font-display text-4xl md:text-5xl font-black uppercase text-brand-navy">Frequently Asked</h2>
        </div>
        <div className="mt-10 border border-border bg-white">
          {faqs.map(([q, a], i) => (
            <details key={q} className="border-b border-border last:border-b-0 group" open={i === 0}>
              <summary className="cursor-pointer flex items-center justify-between px-5 py-4 font-bold text-lg text-brand-navy hover:bg-surface list-none">
                {q}
                <span className="text-2xl text-brand-yellow-dark font-black group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-5 text-muted-foreground">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.25em] text-brand-yellow-dark">Contact</div>
          <h2 className="mt-1 font-display text-4xl md:text-5xl font-black uppercase text-brand-navy">Talk to Us Now</h2>
          <p className="mt-4 text-muted-foreground text-lg">Ready to buy? We respond fast on calls and WhatsApp.</p>
          <div className="mt-8 space-y-4">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-4 bg-white border-l-4 border-brand-navy p-5 hover:shadow-md">
              <div className="bg-brand-navy text-white h-12 w-12 flex items-center justify-center"><Phone className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-wider font-bold">Phone</div>
                <div className="font-black text-xl text-brand-navy">{PHONE}</div>
              </div>
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white border-l-4 border-whatsapp p-5 hover:shadow-md">
              <div className="bg-whatsapp text-white h-12 w-12 flex items-center justify-center"><MessageCircle className="h-6 w-6" /></div>
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-wider font-bold">WhatsApp</div>
                <div className="font-black text-xl text-brand-navy">{PHONE}</div>
              </div>
            </a>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
