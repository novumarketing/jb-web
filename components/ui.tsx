import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import type { IconName } from "./Icon";
import { WA_INFORMES, WA_RECORRIDO } from "./site";

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub: string }) {
  return (
    <section style={{ background: "radial-gradient(1000px 480px at 80% -20%,rgba(30,58,143,.12),transparent 60%),radial-gradient(700px 380px at 0% 120%,rgba(214,169,59,.10),transparent 55%),var(--bg)" }}>
      <div className="wrap" style={{ paddingTop: "clamp(44px,6vw,80px)", paddingBottom: "clamp(28px,4vw,48px)" }}>
        <Reveal style={{ maxWidth: 760 }}>
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="h1" style={{ marginTop: 14 }}>{title}</h1>
          <p className="lead" style={{ marginTop: 18, maxWidth: 620 }}>{sub}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, sub, center, light }: { eyebrow: string; title: string; sub?: string; center?: boolean; light?: boolean }) {
  return (
    <Reveal style={{ maxWidth: center ? 760 : 680, marginLeft: center ? "auto" : undefined, marginRight: center ? "auto" : undefined, textAlign: center ? "center" : "left" }}>
      <div className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</div>
      <h2 className="h2" style={{ marginTop: 12, color: light ? "#fff" : undefined }}>{title}</h2>
      {sub && <p style={{ marginTop: 16, fontSize: 18, color: light ? "#cfe0f2" : "var(--ink-600)" }}>{sub}</p>}
    </Reveal>
  );
}

export function CtaBand({ title, sub, variant = "ink", primary = "informes", showSecondary = true }: { title: string; sub: string; variant?: "ink" | "blue"; primary?: "informes" | "recorrido"; showSecondary?: boolean }) {
  const bg = variant === "ink"
    ? "linear-gradient(120deg,var(--ink),var(--blue-d))"
    : "linear-gradient(120deg,var(--blue),var(--blue-dd))";
  return (
    <section style={{ background: bg }}>
      <Reveal style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(48px,7vw,100px) clamp(20px,4vw,48px)", textAlign: "center" }}>
        <h2 className="h2" style={{ color: "#fff", fontSize: "clamp(28px,4vw,48px)" }}>{title}</h2>
        <p style={{ color: "#cfe0f2", fontSize: 18, margin: "16px auto 0", maxWidth: 560 }}>{sub}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 32 }}>
          <a href={primary === "informes" ? WA_INFORMES : WA_RECORRIDO} target="_blank" rel="noopener noreferrer" className="btn btn-white">
            {primary === "informes" ? "Solicitar informes" : "Agendar visita"}
          </a>
          {showSecondary && (
            <a href={primary === "informes" ? WA_RECORRIDO : WA_INFORMES} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              {primary === "informes" ? "Agendar visita" : "Solicitar informes"}
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}

/* Photo: usa imagen real si hay src; si no, placeholder elegante royal+dorado */
export function Photo({ src, alt, radius = 24, ratio = "4/5", icon = "Sparkles" }: { src?: string; alt: string; radius?: number; ratio?: string; icon?: IconName }) {
  if (src) {
    return (
      <div style={{ borderRadius: radius, overflow: "hidden", aspectRatio: ratio, background: "var(--bg2)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }
  return (
    <div style={{ borderRadius: radius, overflow: "hidden", aspectRatio: ratio, position: "relative", background: "linear-gradient(135deg,var(--blue) 0%,var(--blue-dd) 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(420px 260px at 75% 15%,rgba(214,169,59,.28),transparent 60%)" }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, color: "#fff", textAlign: "center", padding: 24 }}>
        <span style={{ width: 64, height: 64, borderRadius: 18, background: "rgba(255,255,255,.12)", border: "1px solid rgba(214,169,59,.5)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold)" }}>
          <Icon name={icon} size={30} />
        </span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>{alt}</span>
      </div>
    </div>
  );
}
