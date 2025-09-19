import Image from "next/image";
import ContactModule from "../components/ContactModule";
import { Navbar, Footer } from "../components/Layout";
import { HeroSection, MaisonHotesPresentation, RoomSection, SurroundingsSection, GallerySection, ContactSection } from "../components/Accueil";
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

      <MaisonHotesPresentation />
      
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
            "url": "https://www.leclosduru.com",
            "telephone": "+33612345678",
            "email": "contact@leclosduru.fr",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "49 Les Landois",
              "addressLocality": "Presnoy",
              "addressRegion": "Centre-Val de Loire",
              "postalCode": "45260",
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
              "https://www.leclosduru.com/image/Façade le clos du Ru/10.JPG",
              "https://www.leclosduru.com/image/Jardin le clos du Ru/IMG_3636.jpeg",
              "https://www.leclosduru.com/image/Chambre N°1/P1090412.jpg"
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
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Table d'hôtes sur demande",
                "value": true
              }
            ],
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.leclosduru.com/#contact",
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
