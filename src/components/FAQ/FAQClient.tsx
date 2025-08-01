"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { openContactModule } from '@/utils/contactModule';

// Catégories de FAQ
const categories = [
  { id: 'sejour', name: 'Votre séjour' },
  { id: 'services', name: 'Services et commodités' },
  { id: 'paiement', name: 'Réservation et paiement' },
  { id: 'region', name: 'La région' },
];

// Types pour les FAQs
interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const FAQClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('sejour');
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);
  
  const toggleQuestion = (id: number) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };
  
  const faqs: FAQ[] = [
    // Catégorie: Votre séjour
    {
      id: 1,
      category: 'sejour',
      question: "Quels sont les horaires d'arrivée et de départ ?",
      answer: "Le check-in est possible entre 15h00 et 19h00. Le check-out doit être effectué avant 11h00. Si vous avez besoin d'horaires différents, n'hésitez pas à nous contacter à l'avance pour voir si un arrangement est possible."
    },
    {
      id: 2,
      category: 'sejour',
      question: "Le petit-déjeuner est-il inclus ?",
      answer: "Oui, un petit-déjeuner fait maison avec des produits locaux est inclus dans le prix de la chambre. Nous proposons des viennoiseries fraîches, du pain, des confitures maison, des fruits frais, des yaourts, et des boissons chaudes."
    },
    {
      id: 3,
      category: 'sejour',
      question: "Proposez-vous des repas autres que le petit-déjeuner ?",
      answer: "Nous ne proposons pas de repas sur place autres que le petit-déjeuner, mais nous serons ravis de vous recommander d'excellents restaurants dans les environs."
    },
    
    // Catégorie: Services et commodités
    {
      id: 4,
      category: 'services',
      question: "Y a-t-il un accès Wi-Fi ?",
      answer: "Oui, le Wi-Fi gratuit est disponible dans toutes les chambres et les espaces communs. Le code d'accès vous sera communiqué à votre arrivée."
    },
    {
      id: 5,
      category: 'services',
      question: "Les animaux sont-ils acceptés ?",
      answer: "Les animaux de compagnie peuvent être acceptés sur demande préalable. Veuillez nous contacter avant votre réservation pour que nous puissions évaluer votre demande en fonction de la taille et du comportement de votre animal."
    },
    {
      id: 6,
      category: 'services',
      question: "Y a-t-il un parking sur place ?",
      answer: "Oui, nous disposons d'un parking gratuit sur place pour nos hôtes. Vous pouvez vous garer en toute sécurité dans notre propriété."
    },
    
    // Catégorie: Réservation et paiement
    {
      id: 7,
      category: 'paiement',
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons les paiements par carte bancaire, espèces et chèques. Un acompte peut être demandé lors de la réservation."
    },
    {
      id: 8,
      category: 'paiement',
      question: "Quelle est votre politique d'annulation ?",
      answer: "Les annulations effectuées jusqu'à 7 jours avant la date d'arrivée sont remboursées à 100%. Pour les annulations effectuées moins de 7 jours avant l'arrivée, le premier jour est facturé. En cas de non-présentation, le montant total de la réservation sera facturé."
    },
    {
      id: 9,
      category: 'paiement',
      question: "Puis-je modifier ma réservation ?",
      answer: "Oui, vous pouvez modifier votre réservation jusqu'à 7 jours avant votre arrivée, sous réserve de disponibilité. Veuillez nous contacter directement pour toute modification."
    },
    
    // Catégorie: La région
    {
      id: 10,
      category: 'region',
      question: "Quelles sont les attractions touristiques à proximité ?",
      answer: "Notre région regorge d'attractions : le canal d'Orléans pour des balades à pied ou à vélo, des châteaux historiques, des vignobles, des musées locaux et des marchés traditionnels. Nous vous fournirons toutes les informations nécessaires à votre arrivée."
    },
    {
      id: 11,
      category: 'region',
      question: "Y a-t-il des restaurants recommandés dans les environs ?",
      answer: "Plusieurs excellents restaurants se trouvent à moins de 10 minutes en voiture. Nous avons préparé une liste de nos recommandations que nous partageons volontiers avec nos hôtes, avec des options pour tous les budgets et toutes les préférences culinaires."
    },
    {
      id: 12,
      category: 'region',
      question: "Comment se rendre au Clos du Ru en transports en commun ?",
      answer: "La gare la plus proche se trouve à Montmirail, à environ 5 km. Un service de taxi est disponible depuis la gare. Si vous nous informez de votre heure d'arrivée, nous pouvons organiser votre transfert (service payant)."
    }
  ];

  // Filtrer les FAQs par catégorie active
  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);
  
  return (
    <>
      {/* Hero section avec image de fond */}
      <div className="relative bg-[#5B7B5E] h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/image/Jardin le clos du Ru/IMG_3636.jpeg')" }}
        ></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            >
              Questions fréquentes
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white max-w-2xl mx-auto drop-shadow-md"
            >
              Tout ce que vous devez savoir pour préparer votre séjour au Clos du Ru
            </motion.p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-5xl mx-auto">
          {/* Navigation par catégories */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all ${activeCategory === category.id 
                    ? 'bg-[#5B7B5E] text-white shadow-md' 
                    : 'bg-[#F7F4EF] text-[#5B7B5E] hover:bg-[#E8F1E4]'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Questions et réponses */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredFaqs.map((faq) => (
                  <div 
                    key={faq.id} 
                    className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                  >
                    <button
                      onClick={() => toggleQuestion(faq.id)}
                      className="w-full text-left flex justify-between items-center py-3 focus:outline-none group"
                    >
                      <h3 className="text-lg font-medium text-[#5B7B5E] group-hover:text-[#7A9E7E] transition-colors">
                        {faq.question}
                      </h3>
                      <span className={`text-[#7A9E7E] transition-transform duration-300 ${openQuestionId === faq.id ? 'transform rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {openQuestionId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-4 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Section contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#F7F4EF] rounded-xl shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-[#5B7B5E] mb-4">Vous avez d'autres questions ?</h2>
                <p className="text-gray-600 mb-6">Nous sommes là pour vous aider à préparer votre séjour au Clos du Ru. N'hésitez pas à nous contacter directement.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#5B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#5B7B5E]">Par téléphone</h4>
                      <a href="tel:+33607840213" className="text-gray-600 hover:text-[#7A9E7E]">+33 6 07 84 02 13</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#5B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#5B7B5E]">Par email</h4>
                      <a href="mailto:fredericduru@orange.fr" className="text-gray-600 hover:text-[#7A9E7E]">fredericduru@orange.fr</a>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => openContactModule()}
                  className="mt-6 px-6 py-3 bg-[#7A9E7E] text-white rounded-md hover:bg-[#5B7B5E] transition-colors inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Nous contacter
                </button>
              </div>
              
              <div className="md:w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: "url('/image/Façade le clos du Ru/10.JPG')" }}>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQClient;
