import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Truck, ShieldCheck, Droplets, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const ABOUT_IMAGE = "/kabout.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Kentanks Kenya | Trusted Water Tank Supplier" },
      { name: "description", content: "Kentanks Kenya is a trusted supplier of Kentank plastic water storage tanks nationwide. Learn about our mission, values and service." },
      { property: "og:title", content: "About Kentanks Kenya" },
      { property: "og:description", content: "Trusted supplier of Kentank plastic water storage tanks in Kenya." },
      { property: "og:image", content: ABOUT_IMAGE },
    ],
  }),
  component: About,
});

function About() {
  const values = [
    { icon: ShieldCheck, t: "Genuine Products", d: "We only supply authentic Kentank plastic water storage tanks." },
    { icon: Truck, t: "Free Countrywide Delivery", d: "We deliver to every county in Kenya at no extra delivery cost." },
    { icon: Droplets, t: "Water Safety First", d: "Food-grade, UV-resistant tanks safe for drinking water storage." },
    { icon: Users, t: "Customer Care", d: "Honest advice - we help you choose the right size for your needs." },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-yellow py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.25em] text-brand-navy">About Us</div>
              <h1 className="mt-1 font-display text-5xl md:text-6xl font-black uppercase text-brand-navy">Water Storage Done Right</h1>
              <p className="mt-4 text-lg text-brand-navy/85">
                Kentanks Kenya is a dedicated supplier of Kentank plastic water storage tanks. From small homes to large estates and farms, we make it simple to buy the right tank at a fair price.
              </p>
            </div>
            <img src={ABOUT_IMAGE} alt="Kentank water tanks lineup" className="w-full h-72 md:h-96 object-contain" />
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black uppercase text-brand-navy">Our Mission</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Give every home, farm, school and business in Kenya reliable water storage they can trust. We do this by supplying only genuine Kentank tanks, offering honest advice, and backing every order with fast customer service.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black uppercase text-brand-navy">Why People Choose Us</h2>
              <ul className="mt-4 space-y-3">
                {["Full Kentank range - 500L to 24,000L","Best prices with no hidden fees","Free countrywide delivery","Fast WhatsApp response","Honest sizing advice for your needs","Backed by real customer reviews"].map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <div className="bg-brand-yellow text-brand-navy h-6 w-6 flex items-center justify-center mt-0.5 shrink-0"><Check className="h-4 w-4" /></div>
                    <span className="text-foreground/85">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-surface py-16 md:py-24 border-y border-border">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="text-xs font-black uppercase tracking-[0.25em] text-brand-yellow-dark">Our Values</div>
              <h2 className="mt-1 font-display text-4xl md:text-5xl font-black uppercase text-brand-navy">What We Stand For</h2>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((v) => (
                <div key={v.t} className="bg-white p-6 border-t-4 border-brand-yellow">
                  <v.icon className="h-8 w-8 text-brand-navy" />
                  <h3 className="mt-4 font-display text-xl font-black uppercase text-brand-navy">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-brand-navy text-white text-center">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase">Ready to Order?</h2>
            <p className="mt-4 text-white/85 text-lg">Browse our full range of Kentank water tanks and get today's price.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/products" className="bg-brand-yellow text-brand-navy px-8 py-4 font-black uppercase hover:bg-brand-yellow-dark">Shop Tanks</Link>
              <Link to="/contact" className="border-2 border-brand-yellow text-brand-yellow px-8 py-4 font-black uppercase hover:bg-brand-yellow hover:text-brand-navy">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
