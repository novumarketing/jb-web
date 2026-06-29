import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHead, CtaBand, Photo } from "@/components/ui";
import { VALORES } from "@/components/site";

export const metadata: Metadata = {
  title: "Nuestra esencia",
  description: "Más que una escuela, una familia educativa con más de 20 años de tradición en Tulancingo. Conoce la esencia y los valores del Colegio Jorge Berganza.",
};

export default function Esencia() {
  return (
    <main>
      <PageHero
        eyebrow="Nuestra esencia"
        title={<>Más que una escuela, una <span className="serif-green">familia educativa</span></>}
        sub="Con más de 20 años de tradición en Tulancingo, acompañamos a cada alumno y a cada familia con cariño, cuidado y un ambiente cálido en cada etapa."
      />

      <section className="wrap two-col" style={{ paddingTop: "clamp(40px,6vw,80px)", paddingBottom: "clamp(40px,6vw,80px)", display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
        <Reveal style={{ boxShadow: "0 24px 60px rgba(20,33,61,.18)", borderRadius: 24 }}>
          <Photo alt="Comunidad Jorge Berganza" radius={24} ratio="4/3" icon="Heart" />
        </Reveal>
        <Reveal>
          <div className="eyebrow-green">Quiénes somos</div>
          <h2 className="h2" style={{ fontSize: "clamp(26px,3.4vw,40px)", marginTop: 12 }}>Tradición que forma personas</h2>
          <p style={{ fontSize: 16.5, color: "var(--ink-600)", marginTop: 18 }}>
            El Colegio Jorge Berganza nació hace más de dos décadas con una convicción clara: educar no es solo enseñar, es formar para la vida. Nuestros docentes ofrecen un ambiente seguro y cálido que propicia el aprendizaje en cada experiencia cotidiana.
          </p>
          <p style={{ fontSize: 16.5, color: "var(--ink-600)", marginTop: 14 }}>
            Integramos elementos tecnológicos que permiten a cada estudiante aprender y crecer de forma competente y capaz, acompañando cada etapa con un proyecto educativo coherente y centrado en la persona.
          </p>
          <p style={{ fontFamily: "var(--font-spectral), Georgia, serif", fontStyle: "italic", fontSize: 22, color: "var(--green-d)", marginTop: 22 }}>
            “Formamos para la vida, no solo para el examen.”
          </p>
        </Reveal>
      </section>

      <section className="wrap" style={{ paddingTop: "clamp(20px,3vw,40px)", paddingBottom: "clamp(48px,7vw,90px)" }}>
        <SectionHead eyebrow="Nuestros valores" title="Lo que nos distingue" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 20, marginTop: 36 }}>
          {VALORES.map((v, i) => (
            <Reveal key={v.title} className="card-hover" style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderLeft: `5px solid ${i % 2 ? "var(--green)" : "var(--blue)"}`, borderRadius: 18, padding: 26 }}>
              <div style={{ fontSize: 26, color: i % 2 ? "var(--green-d)" : "var(--blue-d)" }}><Icon name={v.icon as any} size={26} /></div>
              <h3 className="h3" style={{ fontSize: 19, marginTop: 14 }}>{v.title}</h3>
              <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 14.5 }}>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Conoce el colegio por dentro" sub="Agenda una visita y siente el ambiente que hace de JB una familia." variant="blue" primary="recorrido" showSecondary={false} />
    </main>
  );
}
