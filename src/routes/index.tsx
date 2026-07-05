import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroTank from "@/assets/hero-tank.jpg";
import tanksRow from "@/assets/tanks-row.jpg";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const PHONE = "+254732074700";
const PHONE_TEL = "+254732074700";
const WA_MSG = encodeURIComponent(
  "Hi, I am interested in buying a Kentanks water tank. Please send me prices and available sizes."
);
const WA = `https://wa.me/254732074700?text=${WA_MSG}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kentanks Water Tanks in Kenya | Prices & Delivery" },
      {
        name: "description",
        content:
          "Buy Kentanks water tanks in Kenya — 500L, 1000L, 3000L, 5000L, 10000L plastic water storage tanks. Call or WhatsApp +254 732 074 700 for today's price and delivery.",
      },
      { property: "og:title", content: "Kentanks Water Tanks in Kenya | Prices & Delivery" },
      {
        property: "og:description",
        content:
          "Durable Kentanks plastic water storage tanks for homes, farms, schools & construction. Best prices in Kenya. WhatsApp +254 732 074 700.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Categories />
      <Sizes />
      <WhyUs />
      <QuoteBanner />
      <TanksBand />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="bg-brand-blue text-white font-black px-2 py-1 text-lg">KT</span>
          <span className="font-display text-xl font-bold tracking-wide">KENTANKS KENYA</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#categories" className="hover:text-brand-blue">Tanks</a>
          <a href="#sizes" className="hover:text-brand-blue">Sizes</a>
          <a href="#why" className="hover:text-brand-blue">Why Us</a>
          <a href="#faq" className="hover:text-brand-blue">FAQ</a>
          <a href="#contact" className="hover:text-brand-blue">Contact</a>
        </nav>
        <a
          href={`tel:${PHONE_TEL}`}
          className="bg-brand-red text-white px-4 py-2 font-bold text-sm hover:bg-brand-red-dark"
        >
          Call {PHONE}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-surface border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
            Kentanks Supplier · Kenya-wide delivery
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-black uppercase leading-[1.05] text-foreground">
            Quality <span className="text-brand-blue">Kentanks</span> Water Tanks in Kenya
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Durable water storage tanks for homes, farms, schools, construction sites, and businesses.
            UV-resistant, safe, and available in all sizes from 500 litres to 20,000 litres.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${PHONE_TEL}`} className="bg-brand-blue text-white px-6 py-4 font-bold uppercase tracking-wide hover:bg-brand-blue-dark">
              Call Now
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-6 py-4 font-bold uppercase tracking-wide hover:brightness-110">
              WhatsApp for Price
            </a>
            <a href="#quote" className="bg-brand-red text-white px-6 py-4 font-bold uppercase tracking-wide hover:bg-brand-red-dark">
              Request Quote
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              ["500L–20,000L", "Sizes"],
              ["UV Safe", "Grade"],
              ["Nationwide", "Delivery"],
            ].map(([a, b]) => (
              <div key={b} className="border-l-4 border-brand-blue pl-3">
                <div className="font-black text-lg">{a}</div>
                <div className="text-xs uppercase text-muted-foreground tracking-wider">{b}</div>
              </div>
            ))}
          </div>
        </div>
        <div id="quote" className="relative">
          <img
            src={heroTank}
            alt="Kentanks water tank installed at a Kenyan home"
            width={1600}
            height={1100}
            className="w-full h-64 md:h-80 object-cover border border-border"
          />
          <div className="mt-6">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const items = [
    ["Domestic Water Tanks", "Reliable home water storage for daily family use."],
    ["Farm Water Tanks", "For irrigation, livestock and agricultural water storage."],
    ["Commercial Water Tanks", "Hotels, offices, apartments and business premises."],
    ["Construction Water Tanks", "Rugged tanks for building sites and contractors."],
    ["Overhead Water Tanks", "Elevated tanks for gravity-fed water systems."],
    ["Large Capacity Water Tanks", "Bulk storage from 10,000L up to 20,000L and more."],
  ];
  return (
    <section id="categories" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Our Products" title="Water Tanks by Use" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(([t, d]) => (
            <div key={t} className="group bg-white border border-border p-6 hover:border-brand-blue hover:shadow-md transition">
              <div className="w-10 h-1 bg-brand-red mb-4 group-hover:w-16 transition-all" />
              <h3 className="text-xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{d}</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-brand-blue font-semibold text-sm hover:underline">
                Get price →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sizes() {
  const sizes = ["500", "1000", "2000", "3000", "4000", "5000", "10000", "20000"];
  return (
    <section id="sizes" className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Available Sizes" title="Common Kentanks Tank Sizes" />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {sizes.map((s) => (
            <a
              key={s}
              href={`https://wa.me/254732074700?text=${encodeURIComponent(`Hi, please send me the price for a ${s} litre Kentanks water tank.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-border p-5 text-center hover:border-brand-blue hover:bg-brand-blue hover:text-white transition group"
            >
              <div className="font-black text-3xl">{Number(s).toLocaleString()}</div>
              <div className="text-xs uppercase tracking-wider mt-1 text-muted-foreground group-hover:text-white/80">Litres</div>
              <div className="mt-3 text-xs font-semibold uppercase text-brand-red group-hover:text-white">Get price</div>
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">
          Not sure what size you need?{" "}
          <a href={`tel:${PHONE_TEL}`} className="text-brand-blue font-semibold">Contact us</a>{" "}
          and we will help you choose the right tank.
        </p>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    "Durable and UV resistant tanks",
    "Safe for water storage",
    "Different sizes available",
    "Fast customer support",
    "Delivery support available",
    "Good prices",
  ];
  return (
    <section id="why" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Why Choose Us" title="Trusted Kentanks Supplier" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((p) => (
            <div key={p} className="flex items-start gap-3 bg-white border border-border p-5">
              <div className="mt-1 h-6 w-6 bg-brand-blue text-white flex items-center justify-center font-bold shrink-0">✓</div>
              <span className="font-semibold text-lg">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <section className="bg-brand-blue text-white py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase">Get Today's Price</h2>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          Send us your location and preferred tank size. We will confirm availability, price, and delivery options.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-8 py-4 font-bold uppercase hover:brightness-110">
            WhatsApp {PHONE}
          </a>
          <a href={`tel:${PHONE_TEL}`} className="bg-brand-red text-white px-8 py-4 font-bold uppercase hover:bg-brand-red-dark">
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function TanksBand() {
  return (
    <section className="relative">
      <img src={tanksRow} alt="Kentanks water tanks available at our yard" width={1400} height={900} loading="lazy" className="w-full h-56 md:h-72 object-cover" />
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["What tank sizes are available?", "We stock Kentanks water tanks from 500 litres up to 20,000 litres, including popular sizes 1000L, 3000L, 5000L and 10,000L."],
    ["Do you deliver?", "Yes, we offer delivery support across Kenya. Share your location on WhatsApp and we will confirm the delivery cost."],
    ["Can I get a price before ordering?", "Absolutely. Call or WhatsApp us on +254 732 074 700 and we will send today's price and availability right away."],
    ["Are the tanks suitable for drinking water?", "Yes. Kentanks water tanks are made from food-grade, UV-resistant plastic and are safe for domestic drinking water storage."],
    ["Can you help me choose the right size?", "Yes — tell us how many people or what the tank is for and we will recommend the correct capacity."],
  ];
  return (
    <section id="faq" className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-10 divide-y divide-border border border-border bg-white">
          {faqs.map(([q, a], i) => (
            <FaqItem key={q} q={q} a={a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-surface">
        <span className="font-bold text-lg">{q}</span>
        <span className="text-2xl text-brand-blue font-black">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-5 pb-5 text-muted-foreground">{a}</div>}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <SectionHead eyebrow="Contact" title="Talk to a Kentanks Specialist" />
          <p className="mt-4 text-muted-foreground text-lg">
            Ready to buy a water tank in Kenya? Reach out any time — we respond fast on calls and WhatsApp.
          </p>
          <div className="mt-8 space-y-4">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-4 bg-white border border-border p-5 hover:border-brand-blue">
              <div className="bg-brand-blue text-white h-12 w-12 flex items-center justify-center font-bold">☎</div>
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-wider">Phone</div>
                <div className="font-bold text-xl">{PHONE}</div>
              </div>
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white border border-border p-5 hover:border-whatsapp">
              <div className="bg-whatsapp text-white h-12 w-12 flex items-center justify-center font-bold">W</div>
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-wider">WhatsApp</div>
                <div className="font-bold text-xl">{PHONE}</div>
              </div>
            </a>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white/80 py-10">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-brand-blue text-white font-black px-2 py-1">KT</span>
            <span className="font-display text-xl font-bold text-white">KENTANKS KENYA</span>
          </div>
          <p className="mt-2 text-sm max-w-md">
            Kentanks water tanks supplier in Kenya. Plastic water storage tanks for homes, farms, schools, and businesses.
          </p>
        </div>
        <div className="text-sm">
          <div>Call / WhatsApp: <a className="text-white font-semibold" href={`tel:${PHONE_TEL}`}>{PHONE}</a></div>
          <div className="mt-1">© {new Date().getFullYear()} Kentanks Kenya Supplier. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{eyebrow}</div>
      <h2 className="mt-2 text-3xl md:text-5xl font-black uppercase">{title}</h2>
      <div className="mt-4 h-1 w-16 bg-brand-blue mx-auto" />
    </div>
  );
}
