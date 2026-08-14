import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { QuoteForm } from "@/components/QuoteForm";

const PHONE = "+254735269879";
const PHONE_TEL = "+254735269879";
const WA_MSG = encodeURIComponent("Hi, I am interested in buying a Kentank water tank. Please send me prices and available sizes.");
const WA = `https://wa.me/254735269879?text=${WA_MSG}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kentanks Kenya | Call or WhatsApp +254735269879" },
      { name: "description", content: "Contact Kentanks Kenya for water tank prices, orders and free countrywide delivery. Call or WhatsApp +254735269879. Fast response guaranteed." },
      { property: "og:title", content: "Contact Kentanks Kenya" },
      { property: "og:description", content: "Call or WhatsApp +254735269879 for Kentank water tanks in Kenya." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-yellow py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="text-xs font-black uppercase tracking-[0.25em] text-brand-navy">Contact</div>
            <h1 className="mt-1 font-display text-5xl md:text-6xl font-black uppercase text-brand-navy">Get in Touch</h1>
            <p className="mt-4 text-lg text-brand-navy/85 max-w-2xl mx-auto">We reply fast on calls and WhatsApp. Send your location and preferred tank size to get today's price.</p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black uppercase text-brand-navy">Reach Us Directly</h2>
              <div className="mt-8 space-y-4">
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-4 bg-white border-l-4 border-brand-navy p-5 hover:shadow-md transition">
                  <div className="bg-brand-navy text-white h-14 w-14 flex items-center justify-center"><Phone className="h-6 w-6" /></div>
                  <div>
                    <div className="text-xs uppercase text-muted-foreground tracking-wider font-bold">Call Us</div>
                    <div className="font-black text-2xl text-brand-navy">{PHONE}</div>
                  </div>
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white border-l-4 border-whatsapp p-5 hover:shadow-md transition">
                  <div className="bg-whatsapp text-white h-14 w-14 flex items-center justify-center"><MessageCircle className="h-6 w-6" /></div>
                  <div>
                    <div className="text-xs uppercase text-muted-foreground tracking-wider font-bold">WhatsApp</div>
                    <div className="font-black text-2xl text-brand-navy">{PHONE}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 bg-white border-l-4 border-brand-yellow p-5">
                  <div className="bg-brand-yellow text-brand-navy h-14 w-14 flex items-center justify-center"><Clock className="h-6 w-6" /></div>
                  <div>
                    <div className="text-xs uppercase text-muted-foreground tracking-wider font-bold">Hours</div>
                    <div className="font-black text-lg text-brand-navy">Mon–Sat · 7:00 AM – 7:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white border-l-4 border-brand-yellow p-5">
                  <div className="bg-brand-yellow text-brand-navy h-14 w-14 flex items-center justify-center"><MapPin className="h-6 w-6" /></div>
                  <div>
                    <div className="text-xs uppercase text-muted-foreground tracking-wider font-bold">Service Area</div>
                    <div className="font-black text-lg text-brand-navy">Free countrywide delivery across Kenya</div>
                  </div>
                </div>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
