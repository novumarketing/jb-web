import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHead } from "@/components/ui";
import { WA } from "@/components/site";

export const metadata: Metadata = {
  title: "Inscripciones",
  description: "Inscripciones y reinscripciones abiertas en el Colegio Jorge Berganza, Tulancingo. Proceso, requisitos y visita guiada.",
};

const pasos = [
  { n: 1, t: "Solicita informes", d: "Escríbenos por WhatsApp o llámanos y agenda una visita guiada." },
  { n: 2, t: "Visita el colegio", d: "Conoce las instalaciones y resuelve tus dudas con el equipo." },
  { n: 3, t: "Entrega de documentos", d: "Reúnes la documentación requerida para tu nivel de interés." },
  { n: 4, t: "¡Bienvenido a JB!", d: "Inscripción, asignación de grupo y bienvenida a la comunidad." },
];
const requisitos = ["Acta de nacimiento (original y copia)", "CURP del aspirante", "Boleta o certificado del grado anterior", "4 fotografías tamaño infantil", "Comprobante de domicilio", "Identificación del padre o tutor"];

export default function Inscripciones() {
  return (
    <main>
      <PageHero kicker="Inscripciones" title={<>Inscripciones y reinscripciones <span className="grad-text">abiertas</span></>}
        sub="Agenda una visita guiada y conoce por qué somos una familia educativa con tradición en Tulancingo. Con gusto resolvemos todas tus dudas." />

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Proceso" title="Inscribir a tu hijo es muy sencillo" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((p) => (
              <div key={p.n} className="rounded-xl2 border border-line bg-white p-7">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-[#b9913a] font-display text-lg font-bold text-royal-2">{p.n}</div>
                <h4 className="font-display text-[17px] font-semibold text-royal">{p.t}</h4>
                <p className="mt-1.5 text-sm text-muted">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <SectionHead kicker="Requisitos" title="Documentación general" />
            <ul className="grid gap-3">
              {requisitos.map((r) => (
                <li key={r} className="flex items-center gap-3 rounded-xl border border-line bg-white px-5 py-4 text-[14.5px] text-ink"><span className="font-bold text-gold">✓</span> {r}</li>
              ))}
            </ul>
            <p className="mt-3 text-[13px] text-muted">* Los requisitos pueden variar según el nivel. Confírmalos al solicitar informes.</p>
          </div>
          <div>
            <SectionHead kicker="Apoyos" title="Facilidades para las familias" />
            <div className="rounded-xl2 border border-line bg-white p-8">
              <p className="text-[15.5px] text-muted">Ofrecemos un proceso de inscripción sencillo y cercano, además de servicios adicionales como alimentos y actividades extra académicas. Pregunta por los apoyos y facilidades de pago disponibles.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-bg-2 p-5 text-center"><div className="font-display text-2xl font-bold text-royal">Alimentos</div><div className="mt-1 text-[13px] text-muted">servicio diario</div></div>
                <div className="rounded-xl bg-bg-2 p-5 text-center"><div className="font-display text-2xl font-bold text-royal">Talleres</div><div className="mt-1 text-[13px] text-muted">extra académicas</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-royal to-royal-2 px-8 py-16 text-center">
            <div className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
            <h2 className="relative font-display text-[clamp(27px,3.8vw,38px)] font-bold text-white">Empieza el proceso hoy</h2>
            <p className="relative mx-auto mt-3.5 max-w-xl text-[17px] text-[#cdd9ef]">Solicita informes y agenda tu visita guiada. Con gusto te acompañamos.</p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3.5">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Solicitar informes</a>
              <Link href="/contacto" className="btn btn-ghost">Ir a contacto</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
