import { WA, WA_VISITA } from "./site";
export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="flex items-center gap-2.5 border-t border-line bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(21,41,107,.12)] backdrop-blur-md [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
        <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Informes por WhatsApp"
          className="grid h-12 w-12 flex-none place-items-center rounded-full bg-[#25D366] text-white">
          <svg viewBox="0 0 32 32" className="h-6 w-6 fill-white"><path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.8L.5 31.5l7.9-2c2.3 1.2 4.9 1.9 7.6 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm7.2 19.1c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.7.2-.2.2-.4.4-.6.1-.3 0-.5 0-.7s-.9-2.1-1.2-2.9c-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.3 2.6 4 6.3 5.5.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z"/></svg>
        </a>
        <a href={WA_VISITA} target="_blank" rel="noopener noreferrer" className="btn btn-gold flex-1 !py-3.5 text-[15px]">Agendar visita</a>
      </div>
    </div>
  );
}
