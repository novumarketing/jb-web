// Datos del Colegio Jorge Berganza (JB)
export const PHONE = "775 755 0729";
export const PHONE2 = "775 755 1620";
export const WA_RAW = "527713964832";
export const EMAIL = "contacto@colegiojorgeberganza.mx";
export const ADDRESS = "Calle Cerrada Rodolfo Guzmán Huerta, Col. Álamos, CP 43640, Tulancingo de Bravo, Hidalgo.";

const wa = (msg: string) => `https://wa.me/${WA_RAW}?text=${encodeURIComponent(msg)}`;
export const WA = wa("Hola, me interesa recibir informes sobre admisiones en el Colegio Jorge Berganza.");
export const WA_VISITA = wa("Hola, me gustaría agendar una visita e información de inscripciones en el Colegio Jorge Berganza.");

export const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/ColegioJorgeBerganza", key: "facebook" },
];

export const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Col. Álamos, 43640 Tulancingo de Bravo, Hidalgo") + "&output=embed";
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Colegio Jorge Berganza, Tulancingo, Hidalgo");

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/nuestra-esencia", label: "Nuestra esencia" },
  { href: "/niveles", label: "Niveles" },
  { href: "/inscripciones", label: "Inscripciones" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/contacto", label: "Contacto" },
];
