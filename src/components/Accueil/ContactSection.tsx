"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#F7F4EF]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="text-center mb-10"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-semibold text-[#5B7B5E] mb-4"
            >
              Nous Contacter
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              N'hésitez pas à nous contacter pour toute question ou pour réserver votre séjour au Clos du Ru.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <motion.h3
                variants={itemVariants}
                className="text-xl font-medium text-[#5B7B5E] mb-4"
              >
                Coordonnées
              </motion.h3>
              
              <div className="space-y-4">
                <motion.div variants={itemVariants} className="flex items-start">
                  <div className="bg-[#E8F1E4] p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Adresse</h4>
                    <p className="text-gray-600">Le Clos du Ru<br />12 Rue du Ru<br />51210 Montmirail<br />France</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start">
                  <div className="bg-[#E8F1E4] p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a href="mailto:fredericduru@orange.fr" className="text-[#5B7B5E] hover:underline">fredericduru@orange.fr</a>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start">
                  <div className="bg-[#E8F1E4] p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Téléphone</h4>
                    <a href="tel:+33607840213" className="text-[#5B7B5E] hover:underline">+33 6 07 84 02 13</a>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start">
                  <div className="bg-[#E8F1E4] p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Horaires</h4>
                    <p className="text-gray-600">Check-in: 15h00 - 19h00<br />Check-out: avant 11h00</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Carte OpenStreetMap */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              className="rounded-lg overflow-hidden shadow-md h-96"
            >
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.5294,48.8719,3.5494,48.8819&amp;layer=mapnik&amp;marker=48.8769,3.5394" 
                title="Le Clos du Ru - Carte"
                className="border-0"
              ></iframe>
              <div className="bg-white p-2 text-center text-sm">
                <a 
                  href="https://www.openstreetmap.org/?mlat=48.8769&amp;mlon=3.5394#map=15/48.8769/3.5394" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#5B7B5E] hover:underline"
                >
                  Voir sur OpenStreetMap
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
