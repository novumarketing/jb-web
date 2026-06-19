import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import StickyCTA from "@/components/StickyCTA";
import AdmissionsPopup from "@/components/AdmissionsPopup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500","600","700","800"], variable: "--font-poppins" });

const SITE = "https://jb-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Colegio Jorge Berganza | Preescolar a Secundaria en Tulancingo",
    template: "%s | Colegio Jorge Berganza",
  },
  description:
    "Colegio Jorge Berganza en Tulancingo, Hidalgo: educación con valores de preescolar a secundaria. Ambiente seguro, innovación pedagógica y profesores excepcionales. Inscripciones abiertas.",
  keywords: ["Colegio Jorge Berganza","escuela en Tulancingo","preescolar Tulancingo","primaria Tulancingo","secundaria Tulancingo","escuela privada Hidalgo"],
  alternates: { canonical: SITE },
  openGraph: {
    title: "Colegio Jorge Berganza | Tradición e innovación",
    description: "Educación con valores, de preescolar a secundaria en Tulancingo, Hidalgo.",
    url: SITE, siteName: "Colegio Jorge Berganza", locale: "es_MX", type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Colegio Jorge Berganza — Tradición e innovación" }],
  },
  twitter: { card: "summary_large_image", title: "Colegio Jorge Berganza | Tulancingo", description: "Educación con valores, de preescolar a secundaria.", images: ["/og-image.png"] },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "EducationalOrganization",
  name: "Colegio Jorge Berganza", alternateName: "JB", url: SITE,
  telephone: "+52-775-755-0729",
  address: { "@type": "PostalAddress", streetAddress: "Calle Cerrada Rodolfo Guzmán Huerta, Col. Álamos", postalCode: "43640", addressLocality: "Tulancingo de Bravo", addressRegion: "Hidalgo", addressCountry: "MX" },
  description: "Colegio con educación en valores de preescolar a secundaria en Tulancingo, Hidalgo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <TopBar />
        <Nav />
        {children}
        <Footer />
        <WhatsApp />
        <StickyCTA />
        <AdmissionsPopup />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
