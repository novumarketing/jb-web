// Datos centrales del Colegio Jorge Berganza (JB)
export const PHONE = "775 755 0729";
export const PHONE2 = "775 755 1620";
export const PHONE_HREF = "tel:+527757550729";
export const EMAIL = "contacto@colegiojorgeberganza.mx";
export const ADDRESS = "Calle Cerrada Rodolfo Guzmán Huerta, Col. Álamos, C.P. 43640, Tulancingo de Bravo, Hidalgo";
export const ADDRESS_SHORT = "Col. Álamos · Tulancingo de Bravo, Hidalgo";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Colegio Jorge Berganza, Tulancingo, Hidalgo");
export const FACEBOOK = "https://www.facebook.com/ColegioJorgeBerganza";
export const INSTAGRAM = "";

const wa = (m: string) => "https://wa.me/527713964832?text=" + encodeURIComponent(m);
export const WA_INFORMES = wa("Hola, me interesa recibir informes e inscripciones en el Colegio Jorge Berganza.");
export const WA_RECORRIDO = wa("Hola, me gustaría agendar una visita por el Colegio Jorge Berganza.");

export const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Nuestra esencia", href: "/nuestra-esencia" },
  { label: "Niveles", href: "/niveles" },
  { label: "Inscripciones", href: "/inscripciones" },
  { label: "Comunidad", href: "/comunidad" },
  { label: "Contacto", href: "/contacto" },
];

export const TRUST = [
  { icon: "HeartHandshake", label: "Ambiente seguro y cálido" },
  { icon: "CalendarDays", label: "Más de 20 años de tradición" },
  { icon: "Sparkles", label: "Innovación y tecnología" },
];

export const STATS = [
  { value: "+20", label: "años de tradición en Tulancingo" },
  { value: "3", label: "niveles educativos" },
  { value: "+10", label: "talleres y actividades" },
  { value: "100%", label: "acompañamiento humano" },
];

export const PILLARS = [
  { icon: "HeartHandshake", title: "Ambiente seguro y cálido", desc: "Nuestros docentes ofrecen un ambiente seguro y cálido que propicia el aprendizaje en cada experiencia cotidiana." },
  { icon: "Sparkles", title: "Innovación y tecnología", desc: "Integramos elementos tecnológicos que permiten a cada estudiante aprender y crecer de forma competente y capaz." },
  { icon: "Compass", title: "Formación para la vida", desc: "Formamos para la vida, no solo para el examen: acompañamos cada etapa con un proyecto educativo centrado en la persona." },
];

export const NIVELES = [
  { icon: "Baby", title: "Preescolar", img: "", desc: "Primeros pasos con cariño, juego y valores, en un entorno seguro que despierta la curiosidad." },
  { icon: "Pencil", title: "Primaria", img: "", desc: "Bases sólidas en lectura, matemáticas y convivencia, con acompañamiento cercano." },
  { icon: "Users", title: "Secundaria", img: "", desc: "Pensamiento crítico, disciplina y acompañamiento para una etapa decisiva." },
  { icon: "Palette", title: "Actividades extra académicas", img: "", desc: "Talleres, deporte y arte para un desarrollo integral más allá del aula." },
];

export const PROGRAMAS = [
  { icon: "Palette", title: "Talleres y arte", desc: "Pintura, manualidades y expresión para despertar la creatividad de cada alumno." },
  { icon: "Dumbbell", title: "Deporte", desc: "Activación física y juego que fomentan disciplina, salud y trabajo en equipo." },
  { icon: "Music", title: "Música", desc: "Desarrollo artístico y sensibilidad a través de la expresión musical." },
  { icon: "Utensils", title: "Alimentos diarios", desc: "Ofrecemos alimentos todos los días para el bienestar de los estudiantes." },
  { icon: "Sparkles", title: "Tecnología en el aula", desc: "Herramientas tecnológicas integradas para aprender de forma competente." },
  { icon: "Camera", title: "Eventos y convivencia", desc: "Momentos que quedan en la memoria de nuestros pequeños y sus familias." },
];

export const VALORES = [
  { icon: "Heart", title: "Familia educativa", desc: "Más que una escuela, somos una familia con tradición que acompaña a cada alumno con cariño." },
  { icon: "ShieldCheck", title: "Cuidado y cercanía", desc: "Un ambiente seguro y cálido en cada etapa, centrado en el bienestar de los niños." },
  { icon: "Sparkles", title: "Tradición e innovación", desc: "Unimos la experiencia de más de 20 años con prácticas educativas modernas." },
  { icon: "Compass", title: "Formación integral", desc: "Educamos para la vida, desarrollando lo académico, lo humano y lo creativo." },
];

export const TESTIMONIOS = [
  { text: "Mi esposo y yo estamos muy contentos con el desempeño de nuestro hijo. Las maestras están capacitadas; mi hijo ha cambiado mucho y está mucho más feliz.", name: "Familia de Secundaria", role: "Mamá de 1º de Secundaria", ini: "FS" },
  { text: "Disfrutamos mucho esos momentos que quedan en la memoria de nuestros pequeños. Agradezco a las maestras el enorme esfuerzo por mantener la sonrisa de los niños.", name: "Familia de Primaria", role: "Mamá de 2º de Primaria", ini: "FP" },
  { text: "Me gustó mucho mi primera experiencia en algo así. Gracias Miss por las atenciones y por cuidar de mi bebé.", name: "Familia de Preescolar", role: "Mamá de 2º de Preescolar", ini: "FP" },
];

export const PASOS = [
  { n: "01", title: "Solicita informes", desc: "Escríbenos por WhatsApp o llámanos; te compartimos costos, niveles y agendamos tu visita." },
  { n: "02", title: "Conoce el colegio", desc: "Visita guiada por las instalaciones para sentir el ambiente cálido de la comunidad JB." },
  { n: "03", title: "Entrega de documentos", desc: "Reúnes la documentación del nivel: acta, CURP, boleta o certificado y comprobantes." },
  { n: "04", title: "Inscripción y bienvenida", desc: "Formalizas la inscripción y damos la bienvenida a tu hijo a la familia Jorge Berganza." },
];

export const FAQS = [
  { q: "¿Qué niveles educativos ofrece el colegio?", a: "Atendemos preescolar, primaria y secundaria, además de actividades extra académicas como talleres, deporte y arte." },
  { q: "¿Cuáles son los costos de inscripción y colegiatura?", a: "Los costos varían por nivel. Con gusto te enviamos la información vigente por WhatsApp el mismo día." },
  { q: "¿Ofrecen alimentos y actividades adicionales?", a: "Sí. Ofrecemos alimentos diariamente y diversas actividades extra académicas. Pregunta por la que más te interese." },
  { q: "¿Cómo agendo una visita?", a: "Escríbenos por WhatsApp o llámanos y coordinamos una visita guiada para que conozcas el colegio." },
];

export const GALERIA = [
  { label: "Vida estudiantil", span: true, img: "" },
  { label: "Preescolar", span: false, img: "" },
  { label: "Primaria", span: false, img: "" },
  { label: "Secundaria", span: false, img: "" },
  { label: "Talleres y arte", span: false, img: "" },
  { label: "Comunidad JB", span: true, img: "" },
];
