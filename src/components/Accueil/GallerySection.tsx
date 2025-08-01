"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const GallerySection = () => {
  // État pour suivre si la galerie est développée ou non
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Images initiales (visibles par défaut)
  const initialImages = [
    "/image/Façade le clos du Ru/DSCF9814.jpg",
    "/image/Jardin le clos du Ru/IMG_3595.jpeg",
    "/image/Chambre N°1/7544E1C4-8274-4C26-BC2C-F644F2CF1A13-1441-000000A6248AA623.jpg",
    "/image/Salon cuisine SàM/IMG_3624.jpeg",
    "/image/Petits déjeuners/acceuil3.JPG",
    "/image/Chambre N°2/P1090414.jpg",
  ];
  
  // Images supplémentaires (visibles uniquement après expansion)
  const additionalImages = [
    "/image/Jardin le clos du Ru/DSCF9836.jpg",
    "/image/Chambre N°3/IMG_3655.jpeg",
    "/image/Salon cuisine SàM/IMG_3619.jpeg",
    "/image/Façade le clos du Ru/IMG_3628.jpeg",
    "/image/Jardin le clos du Ru/IMG_3636.jpeg",
    "/image/Chambre N°3/IMG_3670.jpeg",
  ];

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="galerie" className="py-16 bg-white">
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
              Galerie
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Découvrez notre gîte en images et laissez-vous séduire par son charme authentique.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Images initiales toujours visibles */}
            {initialImages.map((image, index) => (
              <motion.div
                key={`initial-${index}`}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={image}
                  alt={`Le Clos du Ru - Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
            
            {/* Images supplémentaires avec animation */}
            <AnimatePresence>
              {isExpanded && additionalImages.map((image, index) => (
                <motion.div
                  key={`additional-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-md"
                >
                  <Image
                    src={image}
                    alt={`Le Clos du Ru - Image supplémentaire ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-2 border-2 border-[#5B7B5E] text-[#5B7B5E] hover:bg-[#5B7B5E] hover:text-white rounded-lg transition-colors duration-300"
            >
              {isExpanded ? "Voir moins" : "Voir plus"}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
