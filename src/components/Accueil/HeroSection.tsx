"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { openContactModule } from '@/utils/contactModule';

const HeroSection = () => {
  // Images pour le carrousel
  const images = [
    {
      src: "/image/Façade le clos du Ru/10.JPG",
      alt: "Façade du Clos du Ru",
      title: "Bienvenue au Clos du Ru",
      subtitle: "Une pause nature au cœur de la campagne"
    },
    {
      src: "/image/Jardin le clos du Ru/IMG_3636.jpeg",
      alt: "Jardin du Clos du Ru",
      title: "Un cadre verdoyant",
      subtitle: "Découvrez la sérénité des lieux"
    },
    {
      src: "/image/Petits déjeuners/acceuil3.JPG",
      alt: "Petit déjeuner au Clos du Ru",
      title: "Confort & Authenticité",
      subtitle: "Des prestations de qualité"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Effet pour changer automatiquement l'image toutes les 6 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carrousel d'images */}
      <AnimatePresence mode="wait">
        {images.map((image, index) => (
          index === currentImage && (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Contenu texte */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg">
              {images[currentImage].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-[#E8F1E4] drop-shadow-md">
              {images[currentImage].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <motion.button 
                onClick={() => openContactModule()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#A0C1A7] hover:bg-[#7A9E7E] text-white font-bold py-3 px-8 rounded-md text-lg transition-colors shadow-lg w-full sm:w-auto"
              >
                Réserver votre séjour
              </motion.button>
              <motion.a 
                href="#chambres"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold py-3 px-8 rounded-md text-lg transition-colors shadow-lg w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center cursor-pointer"
              >
                Découvrir nos chambres
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Éléments décoratifs - feuilles stylisées */}
      <div className="absolute bottom-12 left-12 z-20 opacity-70 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 3L3 21M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12" 
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17" 
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="absolute top-12 right-12 z-20 opacity-70 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 3L3 21M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12" 
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17" 
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
