import type { Metadata } from "next";
import { PageHero, SectionHead, CtaBand } from "@/components/ui";
import { WA_VISITA } from "@/components/site";
import { Music, Palette, Dumbbell, Utensils, Star, Camera, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Comunidad",
  description: "Testimonios, vida estudiantil, talleres, deporte y servicios del Colegio Jorge Berganza en Tulancingo.",
};

const actividades = [
  { icon: Palette, t: "Arte y talleres" },
  { icon: Music, t: "Música" },
  { icon: Dumbbell, t: "Deporte" },
  { icon: Utensils, t: "Servicio de alimentos" },
];
const testimonios = [
  { quote: "Mi esposo y yo estamos muy contentos con el desempeño de nuestro hijo. Las maestras están capacitadas; mi hijo ha cambiado mucho y está mucho más feliz.", role: "Mamá de 1º de Secundaria" },
  { quote: "Disfrutamos mucho esos momentos que quedan en la memoria de nuestros pequeños. Agradezco a las maestras el enorme esfuerzo por mantener la sonrisa de los niños.", role: "Mamá de 2º de Primaria" },
  { quote: "Me gustó mucho mi primera experiencia en algo así. Gracias Miss por las atenciones y por cuidar de mi bebé.", role: "Mamá de 2º de Preescolar" },
];

export default function Comunidad() {
  return (
    <main>
      <PageHero kicker="Comunidad" title={<>Lo que dicen <span className="grad-text">nuestras familias</span></>}
        sub="Padres y madres que ya forman parte de la comunidad Jorge Berganza comparten su experiencia." />

      <section className="py-20 md:py-24">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonios.map((t, i) => (
              <div key={i} className="rounded-xl2 border border-line bg-white p-7 shadow-soft">
                <div className="mb-3 flex gap-0.5 text-gold">
                  {[0,1,2,3,4].map((s) => (<Star key={s} className="h-4 w-4 fill-gold" aria-hidden />))}
                </div>
                <p className="font-display text-[16px] leading-relaxed text-ink">“{t.quote}”</p>
                <div className="mt-4 text-[13.5px] font-semibold text-royal">— {t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Vida estudiantil" title="Aprender, crear y convivir" sub="Actividades y servicios que forman al alumno por completo." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {actividades.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.t} className="rounded-xl2 border border-line bg-white p-7 text-center">
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gradient-to-br from-royal to-royal-2 text-white"><Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden /></div>
                  <h3 className="font-display text-[16px] font-semibold text-royal">{a.t}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="wrap grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHead kicker="Nuestra familia JB" title="Una comunidad que acompaña" />
            <p className="text-[16px] text-muted">Más que una escuela, somos una familia educativa con tradición en Tulancingo. Acompañamos a cada alumno y a cada familia con cariño, cuidado y un ambiente cálido en cada etapa.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13.5px] font-medium text-royal ring-1 ring-line"><Heart className="h-4 w-4 text-gold" aria-hidden /> Cariño y cuidado</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13.5px] font-medium text-royal ring-1 ring-line"><Users className="h-4 w-4 text-gold" aria-hidden /> Comunidad</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13.5px] font-medium text-royal ring-1 ring-line"><Camera className="h-4 w-4 text-gold" aria-hidden /> Momentos memorables</span>
            </div>
          </div>
          <div className="relative h-[280px] overflow-hidden rounded-3xl bg-gradient-to-br from-royal to-royal-2 shadow-soft">
            <div className="grid h-full place-items-center text-center font-display text-3xl font-bold text-gold">#EducaciónConValores</div>
          </div>
        </div>
      </section>

      <CtaBand title="Vive la comunidad Jorge Berganza" sub="Agenda una visita y siente el ambiente que hace de JB una familia." href={WA_VISITA} label="Agendar una visita" />
    </main>
  );
}
