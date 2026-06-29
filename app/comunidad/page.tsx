import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHead, CtaBand, Photo } from "@/components/ui";
import { PROGRAMAS, TESTIMONIOS, GALERIA } from "@/components/site";

export const metadata: Metadata = {
  title: "Comunidad",
  description: "Talleres, deporte, arte, música y vida estudiantil en el Colegio Jorge Berganza. Conoce la experiencia de las familias de nuestra comunidad.",
};

export default function Comunidad() {
  return (
    <main>
      <PageHero
        eyebrow="Comunidad JB"
        title={<>Vida estudiantil que <span className="serif-green">deja huella</span></>}
        sub="Talleres, deporte, arte y convivencia que complementan la formación y crean momentos que quedan en la memoria de nuestros pequeños."
      />

      {/* Programas / actividades */}
      <section className="wrap" style={{ paddingTop: "clamp(40px,6vw,72px)", paddingBottom: "clamp(40px,6vw,72px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {PROGRAMAS.map((p, i) => (
            <Reveal key={p.title} className="card card-hover">
              <div className={i % 2 ? "icon-chip-green" : "icon-chip"}><Icon name={p.icon as any} size={28} /></div>
              <h3 className="h3" style={{ fontSize: 20, marginTop: 18 }}>{p.title}</h3>
              <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 15 }}>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section className="band-bg2">
        <div className="wrap" style={{ paddingTop: "clamp(44px,6vw,80px)", paddingBottom: "clamp(44px,6vw,80px)" }}>
          <SectionHead center eyebrow="Galería" title="Momentos de nuestra comunidad" />
          <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 40 }}>
            {GALERIA.map((g, i) => (
              <Reveal key={g.label} className={g.span ? "span2" : ""} style={{ gridColumn: g.span ? "span 2" : "auto", boxShadow: "0 2px 8px rgba(20,33,61,.06)", borderRadius: 20 }}>
                <Photo src={g.img} alt={g.label} radius={20} ratio="4/3" icon={["Camera","Baby","Pencil","Users","Palette","Heart"][i % 6] as any} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="wrap section">
        <SectionHead center eyebrow="Testimonios" title="Lo que dicen nuestras familias" sub="Padres y madres que ya forman parte de la comunidad Jorge Berganza comparten su experiencia." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24, marginTop: 44 }}>
          {TESTIMONIOS.map((t) => (
            <Reveal key={t.role} className="card">
              <div style={{ color: "var(--gold)", fontSize: 18, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontFamily: "var(--font-spectral), Georgia, serif", fontStyle: "italic", color: "var(--ink-700)", fontSize: 16.5, lineHeight: 1.5, marginTop: 12 }}>{t.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 18 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--blue-50)", color: "var(--blue-d)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontFamily: "var(--font-display)", fontSize: 14 }}>{t.ini}</div>
                <div style={{ color: "var(--ink-600)", fontSize: 14, fontWeight: 600 }}>{t.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Ven y siente el ambiente JB" sub="Agenda una visita y conoce por qué somos una familia educativa con tradición en Tulancingo." variant="blue" primary="recorrido" />
    </main>
  );
}
