import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Spectral } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-display", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-hanken", display: "swap" });
const spectral = Spectral({ subsets: ["latin"], weight: ["500"], style: ["italic"], variable: "--font-spectral", display: "swap" });

const SITE = "https://jb-web-three.vercel.app";
const OG_DESC = "Colegio Jorge Berganza: preescolar, primaria y secundaria en Tulancingo, Hidalgo. Más de 20 años de tradición e innovación para una buena educación.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Colegio Jorge Berganza | Escuela en Tulancingo, Hidalgo",
    template: "%s | Colegio Jorge Berganza",
  },
  description: OG_DESC,
  keywords: [
    "colegio en Tulancingo",
    "escuela privada Tulancingo Hidalgo",
    "preescolar Tulancingo",
    "primaria Tulancingo",
    "secundaria Tulancingo",
    "Colegio Jorge Berganza",
  ],
  alternates: { canonical: SITE },
  openGraph: {
    title: "Colegio Jorge Berganza | Escuela en Tulancingo, Hidalgo",
    description: OG_DESC,
    url: SITE,
    siteName: "Colegio Jorge Berganza",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/og-jb.png", width: 1200, height: 630, alt: "Colegio Jorge Berganza — Tradición e innovación para una buena educación" }],
  },
  twitter: { card: "summary_large_image", title: "Colegio Jorge Berganza | Tulancingo, Hidalgo", description: OG_DESC, images: ["/og-jb.png"] },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Colegio Jorge Berganza",
  url: SITE,
  telephone: "+52-775-755-0729",
  email: "contacto@colegiojorgeberganza.mx",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Cerrada Rodolfo Guzmán Huerta, Col. Álamos",
    addressLocality: "Tulancingo de Bravo",
    addressRegion: "Hidalgo",
    postalCode: "43640",
    addressCountry: "MX",
  },
  areaServed: "Tulancingo de Bravo, Hidalgo",
  description: "Colegio con preescolar, primaria y secundaria en Tulancingo, Hidalgo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${hanken.variable} ${spectral.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <ChatAssistant />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
