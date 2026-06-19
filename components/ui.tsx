import Link from "next/link";
import type { ReactNode } from "react";

export function SectionHead({ kicker, title, sub, center, light }:
  { kicker: string; title: string; sub?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className={light ? "kicker" : "kicker-ink"}>{kicker}</span>
      <h2 className={`mt-3.5 font-display text-[clamp(28px,3.6vw,42px)] font-bold ${light ? "text-white" : "text-royal"}`}>{title}</h2>
      {sub && <p className={`mt-3.5 text-[17px] ${light ? "text-[#cdd9ef]" : "text-muted"}`}>{sub}</p>}
    </div>
  );
}

export function PageHero({ kicker, title, sub }: { kicker: string; title: ReactNode; sub: string }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-bg-2 to-white">
      <div className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#cfe0fb] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-44 -left-32 h-[360px] w-[360px] rounded-full bg-[#f4ecdd] opacity-60 blur-3xl" />
      <div className="wrap relative z-10 py-16 text-center md:py-20">
        <span className="kicker-ink">{kicker}</span>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(32px,4.6vw,52px)] font-extrabold leading-[1.1] text-royal">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{sub}</p>
      </div>
    </section>
  );
}

export function StatsBar({ items }: { items: { n: string; l: string }[] }) {
  return (
    <section className="bg-royal">
      <div className="wrap grid grid-cols-2 gap-6 py-10 text-center md:grid-cols-4">
        {items.map((s) => (
          <div key={s.l}>
            <div className="bg-gradient-to-r from-[#cfe0fb] to-gold bg-clip-text font-display text-[40px] font-extrabold text-transparent">{s.n}</div>
            <div className="mt-1 text-[13.5px] text-[#cdd9ef]">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ title, sub, href, label }: { title: string; sub: string; href: string; label: string }) {
  return (
    <section className="py-20">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-royal to-royal-2 px-8 py-16 text-center">
          <div className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
          <h2 className="relative font-display text-[clamp(27px,3.8vw,38px)] font-bold text-white">{title}</h2>
          <p className="relative mx-auto mt-3.5 max-w-xl text-[17px] text-[#cdd9ef]">{sub}</p>
          <div className="relative mt-7"><a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-gold">{label}</a></div>
        </div>
      </div>
    </section>
  );
}
