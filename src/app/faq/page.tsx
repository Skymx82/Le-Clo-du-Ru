"use client";

import { Metadata } from 'next';
import { Navbar, Footer } from "../../components/Layout";
import Script from "next/script";
import { faqSchema } from '@/utils/schema';
import dynamic from 'next/dynamic';
import ContactModule from '@/components/ContactModule';

// Import dynamique du composant client pour éviter les erreurs de SSR
const FAQClient = dynamic(() => import('@/components/FAQ/FAQClient'), { ssr: false });


// Catégories de FAQ
const categories = [
  { id: 'sejour', name: 'Votre séjour' },
  { id: 'services', name: 'Services et commodités' },
  { id: 'paiement', name: 'Réservation et paiement' },
  { id: 'region', name: 'La région' },
];

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Composant client pour la partie interactive */}
      <FAQClient />

      <Footer />
      
      {/* Données structurées JSON-LD pour les moteurs de recherche */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      {/* Script pour le scroll fluide vers les ancres */}
      <Script id="smooth-scroll">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(link => {
              link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
              });
            });
          });
        `}
      </Script>
      <ContactModule />
    </div>
  );
}
