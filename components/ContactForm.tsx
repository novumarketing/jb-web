"use client";
import { useState } from "react";

const inputCls = "w-full rounded-[11px] border-[1.5px] border-line bg-[#fffdfb] px-3.5 py-3 text-[14.5px] text-ink outline-none transition focus:border-royal";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (<div className="mb-4"><label className="mb-1.5 block text-[13px] font-semibold text-royal">{label}</label>{children}</div>);
}
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-xl2 border border-line bg-white p-7 shadow-soft">
      {sent ? (
        <div className="py-10 text-center">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-royal-soft text-2xl">✓</div>
          <h3 className="font-display text-xl font-semibold text-royal">¡Gracias!</h3>
          <p className="mt-2 text-[14.5px] text-muted">Recibimos tus datos. Un asesor de admisiones te contactará muy pronto.</p>
        </div>
      ) : (
        <>
          <Field label="Nombre del padre o tutor"><input required type="text" placeholder="Tu nombre completo" className={inputCls} /></Field>
          <div className="grid gap-0 sm:grid-cols-2 sm:gap-4">
            <Field label="Teléfono"><input required type="tel" placeholder="10 dígitos" className={inputCls} /></Field>
            <Field label="Correo electrónico"><input required type="email" placeholder="correo@ejemplo.com" className={inputCls} /></Field>
          </div>
          <Field label="Nivel de interés">
            <select className={inputCls}><option>Preescolar</option><option>Primaria</option><option>Secundaria</option><option>Extra acad&eacute;micas</option></select>
          </Field>
          <Field label="Mensaje (opcional)"><textarea placeholder="Cuéntanos en qué podemos ayudarte" className={`${inputCls} min-h-[90px] resize-y`} /></Field>
          <button type="submit" className="btn btn-primary mt-1.5 w-full">Solicitar informes</button>
        </>
      )}
    </form>
  );
}
