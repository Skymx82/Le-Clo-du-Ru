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
  title: "Le Clos du Ru - Chambres d'hôtes au bord du canal d'Orléans",
  description: "Découvrez Le Clos du Ru, chambres d'hôtes de charme situées au bord du canal d'Orléans dans un cadre naturel et paisible.",
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
