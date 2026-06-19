"use client";
import { useEffect, useState } from "react";
import { X, GraduationCap } from "lucide-react";
import { WA } from "./site";

export default function AdmissionsPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("jb_adm_popup") === "1") return;
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  const close = () => { setOpen(false); try { localStorage.setItem("jb_adm_popup", "1"); } catch {} };
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="adm-title" className="fixed inset-0 z-[60] grid place-items-center p-4">
      <div className="absolute inset-0 bg-royal-2/60 backdrop-blur-sm" onClick={close} />
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-soft">
        <div className="bg-gradient-to-br from-royal to-royal-2 px-7 py-8 text-center text-white">
          <button onClick={close} aria-label="Cerrar" className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25">
            <X className="h-4 w-4" aria-hidden />
          </button>
          <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl bg-white/15">
            <GraduationCap className="h-8 w-8 text-gold" aria-hidden />
          </div>
          <div className="font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">Inscripciones abiertas</div>
          <h2 id="adm-title" className="mt-2 font-display text-2xl font-bold">Inscripciones y reinscripciones abiertas</h2>
        </div>
        <div className="px-7 py-6 text-center">
          <p className="text-[15px] text-muted">Asegura el lugar de tu hijo en el Colegio Jorge Berganza. Cupo limitado por grupo.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" onClick={close} className="btn btn-primary mt-5 w-full">Solicitar informes ahora</a>
          <button onClick={close} className="mt-3 text-[13px] font-medium text-muted underline">Ahora no, gracias</button>
        </div>
      </div>
    </div>
  );
}
