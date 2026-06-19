import type { Metadata } from "next";
import { PageHero, SectionHead, StatsBar, CtaBand } from "@/components/ui";
import { WA_VISITA } from "@/components/site";
import { Heart, ShieldCheck, Lightbulb, Users, Compass, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestra esencia",
  description: "Conoce el modelo educativo, la misión y los valores del Colegio Jorge Berganza en Tulancingo, Hidalgo.",
};

const valores = [
  { icon: Heart, t: "Cariño y cuidado", d: "Atención y cuidado para cada alumno, en un ambiente cálido." },
  { icon: ShieldCheck, t: "Ambiente seguro", d: "Un entorno seguro que propicia el aprendizaje y la confianza." },
  { icon: Lightbulb, t: "Innovación", d: "Mejores prácticas pedagógicas y elementos tecnológicos." },
  { icon: Users, t: "Comunidad", d: "Socialización y desarrollo integral junto a sus compañeros." },
];

export default function Esencia() {
  return (
    <main>
      <PageHero kicker="Nuestra esencia" title={<>El mejor ambiente del que <span className="grad-text">somos capaces</span></>}
        sub="Estamos comprometidos a ofrecer a cada estudiante el mejor ambiente posible, con una mejora continua, integral y permanente." />

      <section className="py-20 md:py-24">
        <div className="wrap grid items-center gap-14 md:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-royal to-royal-2 shadow-soft">
            <div className="grid h-full place-items-center p-8 text-center font-display text-2xl font-bold text-white/90">
              Colegio Jorge Berganza<br /><span className="mt-2 text-base font-medium text-[#cdd9ef]">Tradición e innovación</span>
            </div>
          </div>
          <div>
            <SectionHead kicker="Mejora continua" title="Profesores excepcionales, atención real" />
            <p className="text-[16.5px] text-muted">Nuestro extraordinario personal cree en la educación junto con la socialización de los niños al interactuar unos con otros. Estamos comprometidos a proporcionar a su hijo la atención y el cuidado que merece.</p>
            <p className="mt-4 text-[16.5px] text-muted">Valoramos la individualidad de cada niño y apoyamos su desarrollo intelectual, social y emocional, acompañando cada etapa con un proyecto educativo coherente y centrado en la persona.</p>
          </div>
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap grid gap-8 md:grid-cols-2">
          <div className="rounded-xl2 border border-line bg-white p-8">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-[13px] bg-royal-soft text-royal"><Compass className="h-6 w-6" aria-hidden /></div>
            <h3 className="font-display text-xl font-semibold text-royal">Misión</h3>
            <p className="mt-3 text-[15.5px] text-muted">Brindar una educación integral de calidad, con valores y mejores prácticas pedagógicas, que apoye el desarrollo intelectual, social y emocional de cada estudiante.</p>
          </div>
          <div className="rounded-xl2 border border-line bg-white p-8">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-[13px] bg-gold-soft text-gold"><Sparkles className="h-6 w-6" aria-hidden /></div>
            <h3 className="font-display text-xl font-semibold text-royal">Visión</h3>
            <p className="mt-3 text-[15.5px] text-muted">Ser un colegio de referencia en Tulancingo por la calidad humana de su comunidad, su ambiente seguro y cálido, y su compromiso con la innovación educativa.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Nuestros valores" title="Lo que vivimos cada día" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.t} className="rounded-xl2 border border-line bg-white p-7 text-center">
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gradient-to-br from-royal to-royal-2 text-white"><Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden /></div>
                  <h3 className="font-display text-[17px] font-semibold text-royal">{v.t}</h3>
                  <p className="mt-2 text-[14px] text-muted">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <StatsBar items={[
        { n: "3", l: "Niveles educativos" },
        { n: "100%", l: "Validez oficial SEP" },
        { n: "+20", l: "Años formando" },
        { n: "JB", l: "Comunidad con valores" },
      ]} />

      <CtaBand title="Conócenos de cerca" sub="Te invitamos a una visita guiada para vivir el ambiente Jorge Berganza." href={WA_VISITA} label="Agendar una visita" />
    </main>
  );
}
