"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { openContactModule } from '@/utils/contactModule';

interface RoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: {
    id: number;
    name: string;
    description: string;
    image: string;
    capacity: string;
    amenities: string[];
    // Ajout des images supplémentaires pour la galerie
    gallery?: string[];
  } | null;
}

const RoomModal = ({ isOpen, onClose, room }: RoomModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Réinitialiser l'index de l'image lorsque la chambre change
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [room]);
  
  // Si aucune chambre n'est sélectionnée ou si le modal est fermé, ne rien afficher
  if (!isOpen || !room) return null;
  
  // Combiner l'image principale avec la galerie pour la navigation
  const allImages = [room.image, ...(room.gallery || [])];
  
  // Passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Passer à l'image précédente
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête du modal */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 text-gray-800">
              <h3 className="text-xl font-semibold text-[#5B7B5E]">{room.name}</h3>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Corps du modal avec galerie d'images */}
            <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
              <div className="relative h-64 sm:h-96 bg-gray-100">
                <Image
                  src={allImages[currentImageIndex]}
                  alt={`${room.name} - Photo ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
                
                {/* Boutons de navigation */}
                {allImages.length > 1 && (
                  <>
                    <button 
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
                
                {/* Indicateur de position */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 px-2 py-1 rounded-full text-xs">
                    {currentImageIndex + 1} / {allImages.length}
                  </div>
                )}
              </div>
              
              {/* Miniatures */}
              {allImages.length > 1 && (
                <div className="flex overflow-x-auto p-2 space-x-2 bg-[#F7F4EF]">
                  {allImages.map((img, index) => (
                    <div 
                      key={index}
                      className={`relative w-16 h-16 flex-shrink-0 cursor-pointer ${index === currentImageIndex ? 'ring-2 ring-[#5B7B5E]' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <Image
                        src={img}
                        alt={`${room.name} - Miniature ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
              
              {/* Informations sur la chambre */}
              <div className="p-4">
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-[#5B7B5E] mb-2">Caractéristiques</h4>
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7A9E7E] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-600">{room.capacity}</span>
                    </div>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {room.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#A0C1A7] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-[#5B7B5E] mb-2">Informations complémentaires</h4>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#A0C1A7] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Check-in: à partir de 15h00
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#A0C1A7] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Check-out: jusqu'à 11h00
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#A0C1A7] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Petit-déjeuner inclus
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#A0C1A7] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Annulation gratuite jusqu'à 48h avant
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pied du modal avec bouton de réservation */}
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button 
                className="px-6 py-2 bg-[#5B7B5E] text-white rounded-md hover:bg-[#4A6A4D] transition-colors flex items-center"
                onClick={() => {
                  onClose();
                  // Ouvrir le module de contact avec la chambre pré-sélectionnée
                  openContactModule(room.id);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Réserver cette chambre
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoomModal;
