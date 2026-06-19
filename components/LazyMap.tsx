"use client";
import { useEffect, useRef, useState } from "react";
import { MAPS_EMBED, MAPS_LINK } from "./site";
export default function LazyMap({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el || show) return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setShow(true); io.disconnect(); } }, { rootMargin: "200px" });
    io.observe(el); return () => io.disconnect();
  }, [show]);
  return (
    <div ref={ref} className={`relative h-[320px] w-full overflow-hidden rounded-xl2 border border-line bg-bg-2 ${className}`}>
      {show ? (
        <iframe title="Ubicación del Colegio Jorge Berganza" src={MAPS_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full border-0" />
      ) : (
        <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
          <span className="text-3xl">📍</span>
          <span className="font-display text-sm font-semibold text-royal">Ver ubicación en Google Maps</span>
          <span className="text-[13px]">Col. Álamos · Tulancingo, Hidalgo</span>
        </a>
      )}
    </div>
  );
}
