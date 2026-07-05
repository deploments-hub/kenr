import { useState, type FormEvent } from "react";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hi, I would like a quote for a Kentanks water tank.%0A%0AName: ${f.get("name")}%0APhone: ${f.get("phone")}%0ALocation: ${f.get("location")}%0ATank size: ${f.get("size")}%0AMessage: ${f.get("message")}`;
    window.open(`https://wa.me/254732074700?text=${msg}`, "_blank");
    setSent(true);
  }

  const field =
    "w-full border border-border bg-white px-4 py-3 text-base outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition";

  return (
    <form onSubmit={onSubmit} className="grid gap-3 bg-white p-6 border border-border shadow-sm">
      <h3 className="text-2xl font-bold text-foreground">Request a Free Quote</h3>
      <p className="text-sm text-muted-foreground -mt-1">Get today's price in minutes.</p>
      <input required name="name" placeholder="Full name" className={field} />
      <input required name="phone" placeholder="Phone number" className={field} />
      <input required name="location" placeholder="Location (town / county)" className={field} />
      <select required name="size" defaultValue="" className={field}>
        <option value="" disabled>Select tank size</option>
        {["500 litre","1000 litre","2000 litre","3000 litre","4000 litre","5000 litre","10000 litre","20000 litre","Not sure — help me choose"].map(s => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <textarea name="message" rows={3} placeholder="Message (optional)" className={field} />
      <button
        type="submit"
        className="bg-brand-red text-white px-6 py-3 font-bold uppercase tracking-wide hover:bg-brand-red-dark transition"
      >
        {sent ? "Sent — opening WhatsApp" : "Send Quote Request"}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Or call directly: <a href="tel:+254732074700" className="text-brand-blue font-semibold">+254 732 074 700</a>
      </p>
    </form>
  );
}
