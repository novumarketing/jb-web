import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHead, CtaBand } from "@/components/ui";
import { PASOS } from "@/components/site";

export const metadata: Metadata = {
  title: "Inscripciones",
  description: "Inscripciones abiertas en el Colegio Jorge Berganza, Tulancingo. Proceso sencillo en cuatro pasos y requisitos por nivel.",
};

const REQUISITOS = [
  "Acta de nacimiento (original y copia)",
  "CURP del aspirante",
  "Boleta o certificado del nivel anterior",
  "Comprobante de domicilio",
  "Identificación oficial del padre o tutor",
  "Fotografías tamaño infantil",
];

export default function Inscripciones() {
  return (
    <main>
      <PageHero
        eyebrow="Inscripciones abiertas"
        title={<>Inscríbete en <span className="serif-green">cuatro pasos</span></>}
        sub="Te acompañamos en todo el proceso para que tu hijo forme parte de la familia Jorge Berganza, sin complicaciones."
      />

      <section className="wrap" style={{ paddingTop: "clamp(40px,6vw,72px)", paddingBottom: "clamp(40px,6vw,72px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 22 }}>
          {PASOS.map((s) => (
            <Reveal key={s.n} style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 22, padding: 28 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 40, color: "var(--green-100)", lineHeight: 1 }}>{s.n}</div>
              <h3 className="h3" style={{ fontSize: 19, marginTop: 10 }}>{s.title}</h3>
              <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 14.5 }}>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band-bg2">
        <div className="wrap-narrow" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)" }}>
          <SectionHead center eyebrow="Requisitos" title="Lo que necesitas para inscribir" sub="La documentación puede variar ligeramente según el nivel. Con gusto te orientamos." />
          <div style={{ maxWidth: 640, margin: "36px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {REQUISITOS.map((r) => (
              <Reveal key={r} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 14, padding: "16px 18px" }}>
                <span style={{ flex: "none", width: 26, height: 26, borderRadius: "50%", background: "var(--green-50)", color: "var(--green-d)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}><Icon name="Check" size={15} /></span>
                <span style={{ color: "var(--ink-700)", fontSize: 14.5 }}>{r}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Comienza tu inscripción hoy" sub="Escríbenos y te enviamos costos, disponibilidad y agendamos tu visita el mismo día." variant="ink" primary="informes" />
    </main>
  );
}
