import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

type Msg = { role: "user" | "assistant"; text: string };

const SYSTEM = `Eres el asistente virtual del Colegio Jorge Berganza (JB), un colegio privado en Tulancingo de Bravo, Hidalgo, México, con más de 20 años de tradición. Atiendes a padres y madres de familia. Responde SIEMPRE en español de México, con trato de "tú", tono cálido, cercano y familiar. Sé breve: 2 a 4 frases. No uses emojis ni markdown. Usa el historial: NO repitas información ni vuelvas a hacer la misma pregunta; si el padre ya dijo el nivel que le interesa, responde específicamente sobre ese nivel.
DATOS DEL COLEGIO:
- Lema: "Tradición e innovación para una buena educación". Más que una escuela, una familia educativa.
- Niveles: preescolar, primaria y secundaria, además de actividades extra académicas (talleres, deporte y arte).
  · Preescolar: primeros pasos con cariño, juego y valores, en un entorno seguro.
  · Primaria: bases sólidas en lectura, matemáticas y convivencia, con acompañamiento cercano.
  · Secundaria: pensamiento crítico, disciplina y acompañamiento en una etapa decisiva.
- Ambiente seguro y cálido, tecnología integrada en el aula, alimentos diariamente y más de 20 años de tradición en Tulancingo.
- Dirección: Calle Cerrada Rodolfo Guzmán Huerta, Col. Álamos, C.P. 43640, Tulancingo de Bravo, Hidalgo.
- WhatsApp 771 396 4832. Teléfono 775 755 0729. Correo: contacto@colegiojorgeberganza.mx.
REGLAS:
- NO inventes precios exactos. Si preguntan por costos, di que la información de inscripción y colegiatura se envía el mismo día por WhatsApp al 771 396 4832.
- Cuando sea oportuno, invita a solicitar informes o agendar una visita por WhatsApp (771 396 4832).
- Si no sabes algo, sugiere contactar por WhatsApp.`;

function localAnswer(text: string): string {
  const t = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const has = (...k: string[]) => k.some((w) => t.includes(w));

  if (has("preescolar", "kinder", "kínder", "maternal", "preescolar"))
    return "En preescolar damos los primeros pasos con cariño, juego y valores, en un entorno seguro que despierta la curiosidad de los pequeños. ¿Te gustaría agendar una visita o recibir informes por WhatsApp al 771 396 4832?";
  if (has("primaria"))
    return "En primaria construimos bases sólidas en lectura, matemáticas y convivencia, con un acompañamiento cercano a cada niño. ¿Quieres que te enviemos la información por WhatsApp al 771 396 4832 o prefieres agendar una visita?";
  if (has("secundaria"))
    return "En secundaria fortalecemos el pensamiento crítico, la disciplina y el acompañamiento en una etapa decisiva. ¿Te gustaría agendar una visita o recibir informes por WhatsApp al 771 396 4832?";

  if (has("hola", "buenas", "buenos dias", "buenas tardes", "que tal") && t.length < 30)
    return "¡Hola! Con gusto te ayudo. Puedo darte información sobre niveles, costos, actividades o agendar tu visita. ¿Qué te gustaría saber?";

  if (has("nivel", "grado", "ofrecen", "tienen"))
    return "Atendemos preescolar, primaria y secundaria, además de actividades extra académicas como talleres, deporte y arte. ¿De qué nivel te gustaría más información?";

  if (has("costo", "precio", "cuanto cuesta", "colegiatura", "inscripcion", "mensualidad", "pago", "cuesta"))
    return "Los costos de inscripción y colegiatura varían por nivel. Con gusto te enviamos la información vigente el mismo día por WhatsApp al 771 396 4832. ¿Quieres que te la mandemos?";

  if (has("actividad", "taller", "deporte", "arte", "musica", "extra"))
    return "Ofrecemos actividades extra académicas como talleres, deporte, arte y música, además de alimentos diariamente. Pregunta por la que más te interese por WhatsApp al 771 396 4832.";

  if (has("alimento", "comida", "comedor"))
    return "Sí, ofrecemos alimentos diariamente para el bienestar de los estudiantes. ¿Quieres más detalles por WhatsApp al 771 396 4832?";

  if (has("inscrib", "admision", "proceso", "como le hago", "ingreso", "requisito", "documento"))
    return "El proceso es sencillo: solicitas informes y agendas tu visita, conoces el colegio, entregas la documentación del nivel y formalizas la inscripción. ¿Te ayudo a iniciarlo por WhatsApp al 771 396 4832?";

  if (has("visita", "recorrido", "conocer", "instalacion", "cita"))
    return "¡Claro! Con gusto agendamos una visita para que conozcas el colegio y sientas el ambiente. Escríbenos por WhatsApp al 771 396 4832 y coordinamos el día y la hora.";

  if (has("direccion", "ubicacion", "donde estan", "como llego", "mapa", "lugar"))
    return "Estamos en Calle Cerrada Rodolfo Guzmán Huerta, Col. Álamos, C.P. 43640, Tulancingo de Bravo, Hidalgo. Si quieres te compartimos la ubicación en Google Maps por WhatsApp al 771 396 4832.";

  if (has("telefono", "whatsapp", "contacto", "numero", "correo", "email", "llamar"))
    return "Puedes contactarnos por WhatsApp al 771 396 4832, por teléfono al 775 755 0729, o por correo a contacto@colegiojorgeberganza.mx. Te respondemos el mismo día.";

  if (has("tradicion", "anos", "historia", "lema", "familia", "valores"))
    return "Somos una familia educativa con más de 20 años de tradición en Tulancingo. Nuestro lema es 'Tradición e innovación para una buena educación' y acompañamos a cada alumno con cariño.";

  if (has("gracias", "perfecto", "excelente", "ok", "vale"))
    return "¡Con mucho gusto! Si necesitas algo más sobre el colegio, aquí estoy. Y cuando quieras, agenda tu visita por WhatsApp al 771 396 4832.";

  return "Con gusto te ayudo con eso. Para darte la información más precisa, escríbenos por WhatsApp al 771 396 4832 y te atendemos el mismo día. ¿Te puedo ayudar con un nivel en particular, costos o actividades?";
}

async function tryOpenAI(messages: Msg[], key: string): Promise<string | null> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
    body: JSON.stringify({ model: "gpt-4o-mini", max_tokens: 320, temperature: 0.5, messages: [{ role: "system", content: SYSTEM }, ...messages.map((m) => ({ role: m.role, content: m.text }))] }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.choices?.[0]?.message?.content?.trim() || null;
}

async function tryAnthropic(messages: Msg[], key: string): Promise<string | null> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 320, system: SYSTEM, messages: messages.map((m) => ({ role: m.role, content: m.text })) }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.content?.[0]?.text?.trim() || null;
}

export async function POST(req: NextRequest) {
  let messages: Msg[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ reply: "Disculpa, no entendí tu mensaje. ¿Puedes repetirlo?", source: "error" });
  }
  const convo = messages.filter((m) => m.role === "user" || m.role === "assistant");
  const lastUser = [...convo].reverse().find((m) => m.role === "user")?.text || "";
  try {
    const openai = process.env.OPENAI_API_KEY;
    const anthropic = process.env.ANTHROPIC_API_KEY;
    if (openai) { const r = await tryOpenAI(convo, openai); if (r) return NextResponse.json({ reply: r, source: "openai" }); }
    if (anthropic) { const r = await tryAnthropic(convo, anthropic); if (r) return NextResponse.json({ reply: r, source: "anthropic" }); }
  } catch { /* fallback local */ }
  return NextResponse.json({ reply: localAnswer(lastUser), source: "local" });
}
