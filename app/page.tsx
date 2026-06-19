import Link from "next/link";
import { SectionHead, StatsBar, CtaBand } from "@/components/ui";
import { WA, WA_VISITA } from "@/components/site";
import { Blocks, Pencil, FlaskConical, Palette, School, Rocket, Apple, Sparkles } from "lucide-react";

const niveles = [
  { icon: Blocks, t: "Preescolar", d: "Primeros pasos con cariño, juego y valores.", href: "/niveles#preescolar" },
  { icon: Pencil, t: "Primaria", d: "Bases sólidas en lectura, matemáticas y convivencia.", href: "/niveles#primaria" },
  { icon: FlaskConical, t: "Secundaria", d: "Pensamiento crítico, disciplina y acompañamiento.", href: "/niveles#secundaria" },
  { icon: Palette, t: "Extra académicas", d: "Talleres, deporte y arte para un desarrollo integral.", href: "/niveles#extra" },
];
const pilares = [
  { icon: School, t: "Ambiente adecuado", d: "Nuestros docentes ofrecen un ambiente seguro y cálido que propicia el aprendizaje en cada experiencia cotidiana." },
  { icon: Rocket, t: "Innovación pedagógica", d: "Integramos elementos tecnológicos que permiten a cada estudiante aprender y crecer de forma competente y capaz." },
  { icon: Apple, t: "Servicios adicionales", d: "Ofrecemos alimentos diariamente y actividades extra académicas. Pregunta por lo que más te interese." },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-2 to-white">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full bg-[#cfe0fb] opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-[#f6edd7] opacity-70 blur-3xl" />
        <div className="wrap relative z-10 grid items-center gap-12 py-16 md:grid-cols-[1.08fr_.92fr] md:py-24">
          <div>
            <span className="fade-up inline-flex items-center gap-2 rounded-full bg-royal-soft px-4 py-2 text-[12.5px] font-semibold text-royal">
              <span className="h-2 w-2 rounded-full bg-gold" /> Educación con valores · Preescolar a Secundaria
            </span>
            <h1 className="fade-up-1 mt-5 font-display text-[clamp(33px,5vw,54px)] font-extrabold leading-[1.06] text-royal">
              Tradición e innovación para una <span className="grad-text">buena educación</span>
            </h1>
            <p className="fade-up-2 mt-5 max-w-xl text-lg text-muted">
              En el Colegio Jorge Berganza valoramos la individualidad de cada niño y apoyamos su desarrollo intelectual, social y emocional en un ambiente seguro y cálido.
            </p>
            <div className="fade-up-3 mt-8 flex flex-wrap gap-3.5">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Solicitar informes</a>
              <Link href="/niveles" className="btn btn-ghost">Conoce los niveles</Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-6">
              {["Incorporado a la SEP", "+20 años formando", "Ambiente seguro"].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-[13.5px] font-medium text-muted">
                  <Sparkles className="h-4 w-4 text-gold" aria-hidden /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid h-[420px] place-items-center rounded-3xl bg-gradient-to-br from-royal to-royal-2 text-center text-white shadow-soft">
              <div>
                <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-2xl bg-white/10 font-display text-3xl font-bold text-gold ring-1 ring-white/20">JB</div>
                <div className="font-display text-2xl font-bold">Colegio Jorge Berganza</div>
                <div className="mt-1 text-sm text-[#cdd9ef]">#EducaciónConValores · Tulancingo</div>
              </div>
            </div>
            <div className="absolute -left-5 -top-4 hidden animate-floaty items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-soft sm:flex">
              <School className="h-5 w-5 text-gold" aria-hidden /><span className="font-display text-[13px] font-semibold text-royal">Ambiente seguro y cálido</span>
            </div>
          </div>
        </div>
      </section>

      <StatsBar items={[
        { n: "3", l: "Niveles educativos" },
        { n: "100%", l: "Validez oficial SEP" },
        { n: "+20", l: "Años formando" },
        { n: "JB", l: "Comunidad con valores" },
      ]} />

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Modelo educativo" title="Un camino completo para tu hijo" sub="Acompañamos cada etapa con un proyecto educativo coherente y centrado en la persona." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {niveles.map((n) => {
              const Icon = n.icon;
              return (
                <Link key={n.t} href={n.href} className="group rounded-xl2 border border-line bg-white p-7 transition hover:-translate-y-1.5 hover:border-[#c7d6f3] hover:shadow-soft">
                  <div className="mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gradient-to-br from-royal to-royal-2 text-white"><Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden /></div>
                  <h3 className="font-display text-[19px] font-semibold text-royal">{n.t}</h3>
                  <p className="mt-2 text-[14.5px] text-muted">{n.d}</p>
                  <span className="mt-3 inline-block text-[13.5px] font-semibold text-royal group-hover:underline">Conocer más →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Por qué elegirnos" title="Formamos para la vida, no solo para el examen" sub="Nuestros programas utilizan las mejores prácticas educativas, centradas en cada estudiante." />
          <div className="grid gap-6 md:grid-cols-3">
            {pilares.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.t} className="rounded-xl2 border border-line bg-white p-8">
                  <div className="mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gold-soft text-gold"><Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden /></div>
                  <h3 className="font-display text-[19px] font-semibold text-royal">{p.t}</h3>
                  <p className="mt-2 text-[14.5px] text-muted">{p.d}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center"><Link href="/nuestra-esencia" className="font-semibold text-royal hover:underline">Conoce nuestra esencia →</Link></div>
        </div>
      </section>

      <CtaBand title="Inscripciones y reinscripciones abiertas" sub="Agenda una visita guiada y conoce por qué somos una familia educativa con tradición en Tulancingo." href={WA_VISITA} label="Agendar una visita" />
    </main>
  );
}
