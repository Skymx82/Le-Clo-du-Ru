"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MaisonHotesPresentation = () => {
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
    <section id="about" className="py-16 bg-[#F7F4EF]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Titre et introduction */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#5B7B5E] mb-4">
              Bienvenue au Clos du Ru
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Un havre de paix niché au cœur du Loiret, où le temps s'arrête pour vous offrir un séjour ressourçant.
            </p>
          </motion.div>
          
          {/* Section principale avec image et texte */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-8 mb-16"
          >
            <div className="w-full md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/image/Façade le clos du Ru/10.JPG"
                alt="Le Clos du Ru - Façade"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-medium text-[#5B7B5E]">
                Une maison de caractère
              </h3>
              <p className="text-gray-600">
                Le Clos du Ru est une maison de caractère datant du XIXème siècle, entièrement rénovée pour vous offrir confort et authenticité. Située en pleine campagne, elle vous accueille pour un séjour en famille ou entre amis.
              </p>
              <p className="text-gray-600">
                Avec son grand jardin arboré de 9500m², ses espaces de vie chaleureux et ses chambres confortables, Le Clos du Ru est l'endroit idéal pour se ressourcer et découvrir les richesses de notre région.
              </p>
              <p className="text-gray-600">
                Pour votre confort, nous mettons à votre disposition un parking gratuit et sécurisé au sein de la propriété.
              </p>
              <p className="text-gray-600">
                Les animaux de compagnie sont les bienvenus moyennant un supplément.
              </p>
              <p className="text-gray-600">
                Le Clos du Ru accueille également les cyclistes et dispose d'un espace sécurisé pour ranger vos vélos.
              </p>
            </div>
          </motion.div>
          
          {/* Section jardin */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16"
          >
            <div className="w-full md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/image/Jardin le clos du Ru/IMG_3636.jpeg"
                alt="Le Clos du Ru - Jardin"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-medium text-[#5B7B5E]">
                Un écrin de verdure
              </h3>
              <p className="text-gray-600">
                Profitez d'un jardin luxuriant où règnent calme et sérénité. Les beaux arbres vous offrent leur ombre en été, tandis que les espaces fleuris invitent à la contemplation.
              </p>
              <p className="text-gray-600">
                Le jardin dispose de plusieurs espaces de détente : terrasse ensoleillée, coins ombragés, un potager où nous cultivons des légumes, ainsi qu'un verger dont vous pourrez déguster les fruits selon la saison.
              </p>
            </div>
          </motion.div>
          
          {/* Section petit déjeuner */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-full md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/image/Petits déjeuners/acceuil3.JPG"
                alt="Le Clos du Ru - Petit déjeuner"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-medium text-[#5B7B5E]">
                Des moments de partage
              </h3>
              <p className="text-gray-600">
                Chaque matin, savourez un petit déjeuner gourmand composé de produits frais et locaux. Pains et viennoiseries, confitures maison et fruits de saison raviront vos papilles.
              </p>
              <p className="text-gray-600">
                Nous accordons une attention particulière à la qualité de nos produits et privilégions les circuits courts pour vous offrir une expérience authentique et respectueuse de l'environnement.
              </p>
              <p className="text-gray-600">
                <strong>Table d'hôtes sur demande</strong> : Pour déguster un dîner fait maison avec des produits locaux, n'hésitez pas à nous contacter lors de votre réservation ou avant votre séjour.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaisonHotesPresentation;
