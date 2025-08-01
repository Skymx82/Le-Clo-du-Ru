"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RoomModal from './RoomModal';
import { openContactModule } from '@/utils/contactModule';
import Script from 'next/script';
import { roomSchema } from '@/utils/schema';

// Interface pour le type de chambre
interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
  gallery?: string[];
  capacity: string;
  amenities: string[];
}

const RoomSection = () => {
  // État pour gérer l'ouverture du modal et la chambre sélectionnée
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // Ouvrir le modal avec la chambre sélectionnée
  const openModal = (room: Room) => {
    setSelectedRoom(room);
    setModalOpen(true);
  };

  // Fermer le modal
  const closeModal = () => {
    setModalOpen(false);
  };
  
  // Données des chambres avec galeries d'images
  const rooms = [
    {
      id: 1,
      name: "Chambre Double 1",
      description: "Chambre de 18 m² avec lit double de 160x200cm et vue sur le jardin. Salle d'eau de 4 m² avec douche à l'italienne et toilettes indépendantes.",
      image: "/image/Chambre N°1/7544E1C4-8274-4C26-BC2C-F644F2CF1A13-1441-000000A6248AA623.jpg",
      gallery: [
        "/image/Chambre N°1/P1090412.jpg",
        "/image/Chambre N°1/P1090413.jpg",
        "/image/Chambre N°1/P1090415.jpg",
        "/image/Chambre N°1/P1090416.jpg"
      ],
      capacity: "2 personnes",
      amenities: ["Wi-Fi gratuit", "Bureau", "Douche à l'italienne", "Vue sur jardin", "Lit bébé sur demande"]
    },
    {
      id: 2,
      name: "Chambre Double 2",
      description: "Chambre de 20 m² avec lit double de 160x200cm et lit d'appoint. Salle d'eau de 7 m² avec douche à l'italienne et double vasque.",
      image: "/image/Chambre N°2/P1090414.jpg",
      gallery: [
        "/image/Chambre N°2/P1090386.JPG",
        "/image/Chambre N°2/P1090389.JPG",
        "/image/Chambre N°2/P1090394.JPG"
      ],
      capacity: "3 personnes",
      amenities: ["Wi-Fi gratuit", "Douche à l'italienne", "Penderie", "Bureau", "Lit bébé sur demande", "Double vue jardin"]
    },
    {
      id: 3,
      name: "Chambre Double 3",
      description: "Chambre spacieuse de 40 m² avec un lit king-size et deux lits simples dans une pièce séparée. Idéale pour les familles ou petits groupes.",
      image: "/image/Chambre N°3/IMG_3655.jpeg",
      gallery: [
        "/image/Chambre N°3/IMG_3656.jpeg",
        "/image/Chambre N°3/IMG_3657.jpeg",
        "/image/Chambre N°3/IMG_3658.jpeg",
        "/image/Chambre N°3/IMG_3670.jpeg"
      ],
      capacity: "4 personnes",
      amenities: ["Wi-Fi gratuit", "Douche", "Bureau", "TV écran plat", "Sèche-cheveux", "Ventilateur", "Penderie"]
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
    <section id="chambres" className="py-12 bg-white">
      {/* Schémas structurés JSON-LD pour chaque chambre */}
      {rooms.map((room) => (
        <Script
          key={`room-schema-${room.id}`}
          id={`room-schema-${room.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              roomSchema(
                room.name,
                room.description,
                `https://leclosduru.fr${room.image}`,
                room.capacity,
                room.amenities
              )
            )
          }}
        />
      ))}
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-[#5B7B5E] mb-2">
              Nos Chambres
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos trois chambres confortables, chacune avec son propre caractère et sa décoration soignée.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                variants={itemVariants}
                className="bg-[#F7F4EF] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium text-[#5B7B5E] mb-2">{room.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{room.description}</p>
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7A9E7E] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm text-gray-600">{room.capacity}</span>
                  </div>
                  <ul className="text-sm text-gray-500 space-y-1 mb-4">
                    {room.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#A0C1A7] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col space-y-2 mt-auto pt-2 border-t border-gray-200">
                    <button 
                      className="w-full py-2 bg-[#5B7B5E] text-white rounded-md hover:bg-[#4A6A4D] transition-colors flex items-center justify-center"
                      onClick={() => openContactModule(room.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Réserver
                    </button>
                    
                    <button 
                      className="w-full py-2 border border-[#5B7B5E] text-[#5B7B5E] rounded-md hover:bg-[#E8F1E4] transition-colors flex items-center justify-center"
                      onClick={() => openModal(room)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Voir détails
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Modal pour afficher les détails de la chambre */}
      <RoomModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        room={selectedRoom} 
      />
    </section>
  );
};

export default RoomSection;
