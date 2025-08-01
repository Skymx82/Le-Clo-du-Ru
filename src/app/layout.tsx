import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import "../components/Layout/styles.css";
import "../styles/animations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Le Clos du Ru - Chambres d'hôtes de charme au bord du canal d'Orléans",
  description: "Découvrez Le Clos du Ru, chambres d'hôtes de charme situées au bord du canal d'Orléans dans un cadre naturel et paisible. Profitez de nos chambres confortables, de notre jardin verdoyant et d'un petit-déjeuner fait maison.",
  keywords: ["chambres d'hôtes", "canal d'Orléans", "Le Clos du Ru", "hébergement", "Loiret", "nature", "séjour", "vacances", "chambre avec vue", "petit-déjeuner maison"],
  authors: [{ name: "Le Clos du Ru" }],
  creator: "Le Clos du Ru",
  publisher: "Le Clos du Ru",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://leclosduru.fr"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Le Clos du Ru - Chambres d'hôtes de charme au bord du canal d'Orléans",
    description: "Découvrez Le Clos du Ru, chambres d'hôtes de charme situées au bord du canal d'Orléans dans un cadre naturel et paisible.",
    url: "https://leclosduru.fr",
    siteName: "Le Clos du Ru",
    images: [
      {
        url: "/image/Façade le clos du Ru/10.JPG",
        width: 1200,
        height: 630,
        alt: "Le Clos du Ru - Vue extérieure",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Clos du Ru - Chambres d'hôtes de charme",
    description: "Découvrez nos chambres d'hôtes au bord du canal d'Orléans dans un cadre naturel et paisible.",
    images: ["/image/Façade le clos du Ru/10.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-[#F5F1E8]`}
      >
        <div className="texture-bg min-h-screen flex flex-col">
          {/* Le Layout est intégré directement dans les pages individuelles pour permettre
              l'utilisation des animations de Framer Motion avec le App Router */}
          {children}
        </div>
      </body>
    </html>
  );
}
