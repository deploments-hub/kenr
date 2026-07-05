const MSG = encodeURIComponent(
  "Hi, I am interested in buying a Kentanks water tank. Please send me prices and available sizes."
);
const HREF = `https://wa.me/254732074700?text=${MSG}`;

export function WhatsAppFloat() {
  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-whatsapp px-4 py-3 text-white shadow-lg hover:brightness-110 transition"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.65 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.39-8.43zM12.06 21.5h-.01a9.65 9.65 0 0 1-4.92-1.35l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.62 9.62 0 0 1-1.48-5.12c0-5.32 4.33-9.65 9.66-9.65 2.58 0 5 1 6.83 2.83a9.6 9.6 0 0 1 2.83 6.83c0 5.33-4.33 9.65-9.65 9.65zm5.29-7.23c-.29-.14-1.71-.85-1.98-.94-.27-.1-.46-.14-.66.14-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.66-1.58-.9-2.17-.24-.57-.48-.5-.66-.51l-.56-.01c-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.39s1.03 2.77 1.17 2.96c.14.19 2.02 3.08 4.9 4.32.69.3 1.22.48 1.63.61.69.22 1.31.19 1.81.11.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.2-.55-.35z" />
      </svg>
      <span className="hidden sm:inline font-semibold">WhatsApp Us</span>
    </a>
  );
}
