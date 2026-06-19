"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, WA } from "./site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="wrap flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-royal to-royal-2 font-display text-xl font-bold text-white shadow-[0_6px_18px_rgba(30,58,143,.35)]">JB</div>
          <div className="leading-tight">
            <b className="block font-display text-[18px] font-bold text-royal">Jorge Berganza</b>
            <span className="text-[10.5px] uppercase tracking-[0.16em] text-muted">Colegio · Tulancingo</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => {
            const active = path === n.href;
            return (
              <Link key={n.href} href={n.href} className={`text-[14.5px] font-medium transition hover:text-royal ${active ? "text-royal" : "text-ink"}`}>
                {n.label}
              </Link>
            );
          })}
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-5 !py-2.5">Informes</a>
        </nav>
        <button aria-label="Menú" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex flex-col gap-[5px] lg:hidden">
          <span className="h-[2.5px] w-6 rounded bg-royal" /><span className="h-[2.5px] w-6 rounded bg-royal" /><span className="h-[2.5px] w-6 rounded bg-royal" />
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`font-medium ${path === n.href ? "text-royal" : "text-ink"}`}>{n.label}</Link>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn btn-primary">Informes</a>
          </div>
        </div>
      )}
    </header>
  );
}
