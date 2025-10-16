import type { Metadata } from "next";
import { Inter, Montserrat, Archivo_Black } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import RotatingRiskBadge from "@/components/RotatingRiskBadge";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const archivoBlack = Archivo_Black({ weight: ["400"], subsets: ["latin"], variable: "--font-archivo-black" });

export const metadata: Metadata = {
  title: "Insurial – Éducation à l’assurance entreprise + questionnaire gratuit",
  description: "Une information claire et fiable sur l’assurance des entreprises. Complétez votre questionnaire gratuit selon votre secteur, taille, localisation et chiffre d’affaires.",
  keywords: "assurance entreprise, éducation, questionnaire, responsabilité civile, accidents du travail, biens commerciaux, auto commerciale, BOP",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Insurial – Éducation à l’assurance entreprise + questionnaire gratuit",
    description: "Comprenez vos options d’assurance avec des ressources claires et fiables. Complétez votre questionnaire gratuit.",
    url: "https://fr.insurial.info",
    siteName: "Insurial",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurial – Éducation à l’assurance entreprise + questionnaire gratuit",
    description: "Complétez votre questionnaire gratuit et comprenez vos options d’assurance.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${montserrat.variable} ${archivoBlack.variable}`}>
        <Header />
        {children}
        <RotatingRiskBadge />
        <Analytics />
      </body>
    </html>
  );
}
