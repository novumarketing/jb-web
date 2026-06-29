import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import { SectionHead, CtaBand, Photo } from "@/components/ui";
import { WA_INFORMES, TRUST, STATS, PILLARS, NIVELES, TESTIMONIOS } from "@/components/site";

export default function Home() {
  const tst = TESTIMONIOS[0];
  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(1200px 600px at 80% -10%,rgba(30,58,143,.14),transparent 60%),radial-gradient(900px 520px at 0% 110%,rgba(214,169,59,.10),transparent 55%),var(--bg)" }}>
        <div className="wrap hero-grid" style={{ paddingTop: "clamp(48px,7vw,96px)", paddingBottom: "clamp(48px,7vw,96px)", display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
          <div>
            <Reveal style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#fff", border: "1px solid var(--bd)", padding: "7px 15px", borderRadius: 999, fontSize: 13, fontWeight: 600, color: "var(--ink-700)", boxShadow: "0 2px 10px rgba(20,33,61,.05)" }}>
              <span className="dot-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)" }} />
              Colegio en Tulancingo, Hidalgo · Inscripciones abiertas
            </Reveal>
            <h1 className="h1-hero" style={{ marginTop: 20 }}>
              Tradición e innovación para una <span className="serif-green">buena educación</span>
            </h1>
            <p className="lead" style={{ maxWidth: 560, marginTop: 22 }}>
              En el Colegio Jorge Berganza somos más que una escuela: una familia educativa con más de 20 años de tradición en Tulancingo, que acompaña a cada alumno con cariño y un ambiente seguro.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 13, marginTop: 32 }}>
              <a href={WA_INFORMES} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Icon name="FileText" size={19} />Solicitar informes</a>
              <Link href="/niveles" className="btn btn-ghost">Conoce los niveles<Icon name="ArrowRight" size={18} /></Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 30 }}>
              {TRUST.map((t) => (
                <span key={t.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "var(--ink-700)" }}>
                  <Icon name={t.icon as any} size={17} style={{ color: "var(--blue)" }} />{t.label}
                </span>
              ))}
            </div>
          </div>

          <Reveal style={{ position: "relative" }}>
            <div style={{ boxShadow: "0 30px 70px rgba(20,33,61,.22)", borderRadius: 32 }}>
              <Photo alt="Comunidad Jorge Berganza" radius={32} ratio="4/5" icon="GraduationCap" />
            </div>
            <div style={{ position: "absolute", left: -18, bottom: 34, background: "#fff", border: "1px solid var(--bd)", borderRadius: 20, padding: "18px 22px", boxShadow: "0 18px 48px rgba(20,33,61,.16)", maxWidth: 230 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 34, color: "var(--green-d)", lineHeight: 1 }}>+20</div>
              <div style={{ fontSize: 13, color: "var(--ink-600)", fontWeight: 600, marginTop: 2 }}>años de tradición en Tulancingo</div>
            </div>
            <div style={{ position: "absolute", right: -14, top: 26, background: "var(--ink)", color: "#fff", borderRadius: 16, padding: "13px 17px", boxShadow: "0 14px 34px rgba(20,33,61,.25)", display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="HeartHandshake" size={22} style={{ color: "var(--gold)" }} />
              <div><div style={{ fontWeight: 800, fontSize: 14, lineHeight: 1.1 }}>Ambiente</div><div style={{ fontSize: 12, color: "#aab6c8" }}>seguro y cálido</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "var(--ink)" }}>
        <div className="wrap" style={{ paddingTop: "clamp(34px,4vw,52px)", paddingBottom: "clamp(34px,4vw,52px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 28 }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4vw,46px)", color: "#fff", lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "#aab6c8", fontSize: 14, fontWeight: 500, marginTop: 6, maxWidth: 180, marginInline: "auto" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PILARES */}
      <section className="wrap section">
        <SectionHead eyebrow="Por qué Jorge Berganza" title="Un colegio que forma personas, no solo alumnos" sub="Tres pilares que distinguen la experiencia educativa de nuestra familia JB." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginTop: 44 }}>
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} className="card card-hover">
              <div className={i === 1 ? "icon-chip-green" : "icon-chip"}><Icon name={p.icon as any} size={28} /></div>
              <h3 className="h3" style={{ fontSize: 22, marginTop: 20 }}>{p.title}</h3>
              <p style={{ color: "var(--ink-600)", marginTop: 10, fontSize: 15.5 }}>{p.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: 34 }}>
          <Link href="/nuestra-esencia" className="link-arrow">Conoce nuestra esencia<Icon name="ArrowRight" size={18} /></Link>
        </Reveal>
      </section>

      {/* NIVELES preview */}
      <section className="band-bg2">
        <div className="wrap section">
          <SectionHead eyebrow="Niveles educativos" title="Acompañamos cada etapa de tu hijo" sub="Preescolar, primaria y secundaria, además de actividades extra académicas." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24, marginTop: 44 }}>
            {NIVELES.map((n) => (
              <Reveal key={n.title} className="card-hover" style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 22, overflow: "hidden", boxShadow: "0 2px 6px rgba(20,33,61,.05)" }}>
                <Photo src={n.img} alt={n.title} radius={0} ratio="1/1" icon={n.icon as any} />
                <div style={{ padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "var(--green-d)", display: "flex" }}><Icon name={n.icon as any} size={22} /></span>
                    <h3 className="h3" style={{ fontSize: 18 }}>{n.title}</h3>
                  </div>
                  <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 14 }}>{n.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: 34, textAlign: "center" }}>
            <Link href="/niveles" className="link-arrow" style={{ justifyContent: "center" }}>Ver todos los niveles<Icon name="ArrowRight" size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="wrap section">
        <SectionHead center eyebrow="Comunidad JB" title="Familias que ya son parte de la familia" />
        <Reveal style={{ maxWidth: 820, margin: "44px auto 0", background: "var(--ink)", borderRadius: 28, padding: "clamp(32px,5vw,56px)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -30, left: 30, fontFamily: "var(--font-spectral), Georgia, serif", fontStyle: "italic", fontSize: 180, color: "rgba(214,169,59,.18)", lineHeight: 1 }}>“</div>
          <p style={{ position: "relative", fontFamily: "var(--font-spectral), Georgia, serif", fontStyle: "italic", fontSize: "clamp(20px,2.4vw,28px)", color: "#fff", lineHeight: 1.4, margin: 0 }}>
            {tst.text}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 28 }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--gold)", color: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontFamily: "var(--font-display)", fontSize: 16 }}>{tst.ini}</div>
            <div><div style={{ color: "#fff", fontWeight: 700 }}>{tst.name}</div><div style={{ color: "#aab6c8", fontSize: 14 }}>{tst.role}</div></div>
            <div style={{ marginLeft: "auto", color: "var(--gold)", fontSize: 18, letterSpacing: 2 }}>★★★★★</div>
          </div>
        </Reveal>
        <Reveal style={{ marginTop: 28, textAlign: "center" }}>
          <Link href="/comunidad" className="link-arrow" style={{ justifyContent: "center" }}>Ver más de la comunidad<Icon name="ArrowRight" size={18} /></Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="wrap-narrow section">
        <SectionHead center eyebrow="Preguntas frecuentes" title="Resuelve tus dudas antes de inscribir" />
        <Faq />
      </section>

      <CtaBand title="Conoce la familia Jorge Berganza" sub="Agenda una visita y siente el ambiente cálido que nos distingue. Te esperamos." variant="ink" primary="informes" />
    </main>
  );
}
