import Image from "next/image";
import ContactModule from "../components/ContactModule";
import { Navbar, Footer } from "../components/Layout";
import { HeroSection, GitePresentation, RoomSection, SurroundingsSection, GallerySection, ContactSection } from "../components/Accueil";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Le Clos du Ru - Chambres d'hôtes de charme au bord du canal d'Orléans",
  description: "Bienvenue au Clos du Ru, chambres d'hôtes de charme situées au bord du canal d'Orléans. Profitez d'un séjour paisible dans un cadre naturel exceptionnel avec jardin, terrasse et petit-déjeuner fait maison.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />

      <HeroSection />

      <GitePresentation />
      
      <RoomSection />
      
      <SurroundingsSection />
      
      <GallerySection />
      
      <ContactSection />

      <Footer />
      
      {/* Module de contact flottant */}
      <ContactModule />
      
      {/* Données structurées JSON-LD pour les moteurs de recherche */}
      <Script
        id="json-ld-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Le Clos du Ru",
            "description": "Chambres d'hôtes de charme situées au bord du canal d'Orléans dans un cadre naturel et paisible",
            "url": "https://leclosduru.fr",
            "telephone": "+33612345678",
            "email": "contact@leclosduru.fr",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "12 rue du Canal",
              "addressLocality": "Orléans",
              "addressRegion": "Centre-Val de Loire",
              "postalCode": "45000",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "47.9027336",
              "longitude": "1.9086044"
            },
            "priceRange": "€€",
            "starRating": {
              "@type": "Rating",
              "ratingValue": "4.8",
              "bestRating": "5"
            },
            "image": [
              "https://leclosduru.fr/image/Façade le clos du Ru/10.JPG",
              "https://leclosduru.fr/image/Jardin le clos du Ru/IMG_3636.jpeg",
              "https://leclosduru.fr/image/Chambre N°1/P1090412.jpg"
            ],
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Wi-Fi gratuit",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Jardin",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Petit-déjeuner inclus",
                "value": true
              }
            ],
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://leclosduru.fr/#contact",
                "inLanguage": "fr-FR",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              },
              "result": {
                "@type": "LodgingReservation",
                "name": "Réservation de chambre d'hôtes"
              }
            }
          })
        }}
      />
    </div>
  );
}
