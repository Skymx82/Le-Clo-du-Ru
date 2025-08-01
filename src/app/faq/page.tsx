import React from 'react';
import { Metadata } from 'next';
import { Navbar, Footer } from "../../components/Layout";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import Script from "next/script";
import { faqSchema } from '@/utils/schema';

export const metadata: Metadata = {
  title: 'Questions fréquentes | Le Clos du Ru',
  description: 'Trouvez les réponses à vos questions sur Le Clos du Ru, chambres d\'hôtes de charme au bord du canal d\'Orléans',
  alternates: {
    canonical: "/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQ() {
  const faqs = [
    {
      question: "Quels sont les horaires d'arrivée et de départ ?",
      answer: "Le check-in est possible entre 15h00 et 19h00. Le check-out doit être effectué avant 11h00. Si vous avez besoin d'horaires différents, n'hésitez pas à nous contacter à l'avance pour voir si un arrangement est possible."
    },
    {
      question: "Le petit-déjeuner est-il inclus ?",
      answer: "Oui, un petit-déjeuner fait maison avec des produits locaux est inclus dans le prix de la chambre. Nous proposons des viennoiseries fraîches, du pain, des confitures maison, des fruits frais, des yaourts, et des boissons chaudes."
    },
    {
      question: "Y a-t-il un accès Wi-Fi ?",
      answer: "Oui, le Wi-Fi gratuit est disponible dans toutes les chambres et les espaces communs. Le code d'accès vous sera communiqué à votre arrivée."
    },
    {
      question: "Les animaux sont-ils acceptés ?",
      answer: "Les animaux de compagnie peuvent être acceptés sur demande préalable. Veuillez nous contacter avant votre réservation pour que nous puissions évaluer votre demande en fonction de la taille et du comportement de votre animal."
    },
    {
      question: "Y a-t-il un parking sur place ?",
      answer: "Oui, nous disposons d'un parking gratuit sur place pour nos hôtes. Vous pouvez vous garer en toute sécurité dans notre propriété."
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons les paiements par carte bancaire, espèces et chèques. Un acompte peut être demandé lors de la réservation."
    },
    {
      question: "Proposez-vous des repas autres que le petit-déjeuner ?",
      answer: "Nous ne proposons pas de repas sur place autres que le petit-déjeuner, mais nous serons ravis de vous recommander d'excellents restaurants dans les environs."
    },
    {
      question: "Quelles sont les attractions touristiques à proximité ?",
      answer: "Notre région regorge d'attractions : le canal d'Orléans pour des balades à pied ou à vélo, des châteaux historiques, des vignobles, des musées locaux et des marchés traditionnels. Nous vous fournirons toutes les informations nécessaires à votre arrivée."
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumb />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-[#5B7B5E] mb-6">Questions fréquentes</h1>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <h2 className="text-xl font-medium text-[#5B7B5E] mb-2">{faq.question}</h2>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-[#F7F4EF] rounded-lg">
            <h2 className="text-xl font-medium text-[#5B7B5E] mb-2">Vous avez d'autres questions ?</h2>
            <p className="text-gray-700 mb-4">N'hésitez pas à nous contacter directement par téléphone ou par email. Nous serons ravis de vous aider à préparer votre séjour.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="tel:+33607840213" 
                className="px-6 py-2 bg-[#7A9E7E] text-white rounded-md hover:bg-[#5B7B5E] inline-flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Nous appeler
              </a>
              <a 
                href="mailto:fredericduru@orange.fr" 
                className="px-6 py-2 border border-[#7A9E7E] text-[#5B7B5E] rounded-md hover:bg-[#E8F1E4] inline-flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Nous écrire
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Données structurées JSON-LD pour les moteurs de recherche */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </div>
  );
}
