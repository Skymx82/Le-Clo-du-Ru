"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SurroundingsSection = () => {
  // Points d'intérêt à proximité
  const attractions = [
    {
      id: 1,
      name: "Canal de la Marne",
      description: "Profitez de balades paisibles le long du canal et découvrez la beauté des paysages champenois.",
      image: "/image/Photos Canal/IMG_8917.JPG",
      distance: "5 min à pied"
    },
    {
      id: 2,
      name: "Vignobles de Champagne",
      description: "Visitez les célèbres vignobles de la région et dégustez le champagne directement chez les producteurs.",
      image: "/image/Photos Canal/IMG_8915.JPG",
      distance: "15 min en voiture"
    },
    {
      id: 3,
      name: "Lac du Der",
      description: "Plus grand lac artificiel d'Europe, idéal pour les activités nautiques et l'observation des oiseaux.",
      image: "/image/Photos Canal/IMG_8918.JPG",
      distance: "30 min en voiture"
    }
  ];

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
    <section className="py-16 bg-[#E8F1E4]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#5B7B5E] mb-4">
              Découvrez les Environs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Le Clos du Ru est idéalement situé pour explorer les trésors de la Champagne. 
              Entre nature, patrimoine et gastronomie, laissez-vous séduire par notre région.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <motion.div
                key={attraction.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-medium">{attraction.name}</h3>
                    <span className="text-white/80 text-sm">{attraction.distance}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default SurroundingsSection;
