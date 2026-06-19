import Link from "next/link";
import { Facebook } from "lucide-react";
import { NAV, PHONE, PHONE2, EMAIL, ADDRESS, SOCIALS } from "./site";
const ICONS: Record<string, typeof Facebook> = { facebook: Facebook };

export default function Footer() {
  return (
    <footer className="bg-royal-2 pt-16 pb-7 text-[#cdd9ef]">
      <div className="wrap">
        <div className="grid gap-10 border-b border-white/10 pb-9 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal to-royal-2 font-display text-lg font-bold text-white ring-1 ring-white/20">JB</div>
              <div className="leading-tight"><b className="block font-display text-[17px] font-bold text-white">Jorge Berganza</b><span className="text-[10.5px] uppercase tracking-[0.16em] text-[#9fb3d6]">Colegio · Tulancingo</span></div>
            </div>
            <p className="max-w-xs text-sm text-[#9fb3d6]">Tradición e innovación para una buena educación. Valoramos la individualidad de cada niño y apoyamos su desarrollo intelectual, social y emocional.</p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.filter((s) => ICONS[s.key]).map((s) => { const Icon = ICONS[s.key]; return (
                <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><Icon className="h-4 w-4" aria-hidden /></a>
              ); })}
            </div>
          </div>
          <div>
            <h5 className="mb-4 font-display text-sm uppercase tracking-wide text-white">Navegación</h5>
            <ul className="grid gap-2.5">{NAV.map((n) => (<li key={n.href}><Link href={n.href} className="text-sm text-[#9fb3d6] transition hover:text-white">{n.label}</Link></li>))}</ul>
          </div>
          <div>
            <h5 className="mb-4 font-display text-sm uppercase tracking-wide text-white">Contacto</h5>
            <ul className="grid gap-2.5 text-sm text-[#9fb3d6]">
              <li>{PHONE} · {PHONE2}</li><li>{EMAIL}</li><li>{ADDRESS}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-6 text-[13px] text-[#7e93bb]">
          <span>© {new Date().getFullYear()} Colegio Jorge Berganza. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <Link href="/aviso-de-privacidad" className="transition hover:text-white">Aviso de Privacidad</Link>
            <span>Desarrollado por <a href="https://novu-web-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold">NOVU</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
