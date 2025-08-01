"use client";

import { useState, useEffect } from "react";
import { addDays } from "date-fns";

import DateSelectionStep from "./DateSelectionStep";
import RoomSelectionStep from "./RoomSelectionStep";
import ContactFormStep from "./ContactFormStep";
import StepIndicator from "./StepIndicator";
import GuestCountStep from "./GuestCountStep";
import { roomTypes } from "./roomData";
import { FormData, RoomType, DateRangeType } from "./types";

export default function ContactModule() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1: Dates, 2: Nombre de personnes, 3: Chambre, 4: Coordonnées
  const [dateRange, setDateRange] = useState<DateRangeType>({
    startDate: null,
    endDate: null,
    key: "selection",
  });
  const [guestCount, setGuestCount] = useState(2); // Nombre de personnes par défaut
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    country: "France",
    email: "",
    phoneCode: "+33",
    phone: "",
    comment: "",
  });

  // Vérifier s'il y a une chambre présélectionnée lors de l'ouverture du module
  useEffect(() => {
    if (isOpen) {
      const selectedRoomIdStr = localStorage.getItem('selectedRoomId');
      if (selectedRoomIdStr) {
        const selectedRoomId = parseInt(selectedRoomIdStr, 10);
        const room = roomTypes.find(r => r.id === selectedRoomId);
        if (room) {
          // Présélectionner la chambre mais rester à l'étape 1 (sélection des dates)
          setSelectedRoom(room);
          
          // Afficher un message pour informer l'utilisateur qu'une chambre a été présélectionnée
          const messageElement = document.createElement('div');
          messageElement.className = 'fixed top-4 right-4 bg-[#E8F1E4] text-[#5B7B5E] p-4 rounded-md shadow-md z-50 animate-fade-in flex items-center';
          messageElement.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#5B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p>Chambre "${room.name}" présélectionnée</p>
          `;
          document.body.appendChild(messageElement);
          
          // Ajouter la classe pour faire disparaitre le message après 3 secondes
          setTimeout(() => {
            messageElement.classList.remove('animate-fade-in');
            messageElement.classList.add('animate-fade-out');
            
            // Supprimer l'élément après la fin de l'animation
            setTimeout(() => {
              if (messageElement.parentNode) {
                messageElement.parentNode.removeChild(messageElement);
              }
            }, 500); // Durée de l'animation de sortie
          }, 3000);
        }
        // Supprimer l'ID de la chambre du localStorage après l'avoir utilisé
        localStorage.removeItem('selectedRoomId');
      }
    }
  }, [isOpen, roomTypes]);

  const toggleModule = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setCurrentStep(1); // Réinitialiser à l'étape 1 lors de l'ouverture
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Filtrer les chambres en fonction du nombre de personnes
  const availableRooms = roomTypes.filter(room => room.capacity >= guestCount);

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    if (dateRange.startDate && dateRange.endDate) {
      console.log("Réservation soumise:", {
        ...formData,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        room: selectedRoom,
        nights: Math.ceil((dateRange.endDate.getTime() - dateRange.startDate.getTime()) / (1000 * 60 * 60 * 24))
      });
      alert("Merci pour votre réservation ! Nous vous contacterons bientôt pour la confirmation.");
      setIsOpen(false);
      setCurrentStep(1);
      setSelectedRoom(null);
      setDateRange({
        startDate: null,
        endDate: null,
        key: "selection",
      });
      setGuestCount(2);
    }
    setFormData({
      firstName: "",
      lastName: "",
      country: "France",
      email: "",
      phoneCode: "+33",
      phone: "",
      comment: "",
    });
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        id="contact-module-button"
        onClick={toggleModule}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#7A9E7E] text-white shadow-lg flex items-center justify-center hover:bg-[#5B7B5E] focus:outline-none focus:ring-2 focus:ring-[#A0C1A7] focus:ring-opacity-50 z-40 transition-all"
        aria-label="Réserver"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </button>

      {/* Overlay flou très clair */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleModule}
        style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(247, 244, 239, 0.7)' }}
      />

      {/* Module de réservation */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[600px] lg:w-[700px] bg-[#F7F4EF] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-6 text-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#5B7B5E]">Réservation</h2>
            <button
              onClick={toggleModule}
              className="text-[#7A9E7E] hover:text-[#5B7B5E]"
              aria-label="Fermer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Indicateur d'étapes */}
          <StepIndicator currentStep={currentStep} totalSteps={4} />

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Étape 1: Sélection des dates */}
            {currentStep === 1 && (
              <DateSelectionStep 
                dateRange={dateRange} 
                setDateRange={setDateRange} 
              />
            )}
            
            {/* Étape 2: Sélection du nombre de personnes */}
            {currentStep === 2 && (
              <GuestCountStep
                guestCount={guestCount}
                setGuestCount={setGuestCount}
              />
            )}

            {/* Étape 3: Sélection de la chambre */}
            {currentStep === 3 && (
              <RoomSelectionStep 
                roomTypes={availableRooms.length > 0 ? availableRooms : roomTypes} 
                selectedRoom={selectedRoom} 
                setSelectedRoom={setSelectedRoom}
                dateRange={dateRange}
              />
            )}

            {/* Étape 4: Coordonnées */}
            {currentStep === 4 && (
              <ContactFormStep 
                formData={formData} 
                handleChange={handleChange} 
              />
            )}

            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-6 py-2 border border-[#D8E8D5] text-[#5B7B5E] rounded-md hover:bg-[#E8F1E4] focus:outline-none focus:ring-2 focus:ring-[#A0C1A7] focus:ring-opacity-50 transition-colors"
                >
                  Précédent
                </button>
              )}
              
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={(currentStep === 2 && guestCount < 1) || (currentStep === 3 && !selectedRoom) || (currentStep === 1 && (!dateRange.startDate || !dateRange.endDate))}
                  className={`px-6 py-2 bg-[#7A9E7E] text-white rounded-md hover:bg-[#5B7B5E] focus:outline-none focus:ring-2 focus:ring-[#A0C1A7] focus:ring-opacity-50 transition-colors ${(currentStep === 2 && guestCount < 1) || (currentStep === 3 && !selectedRoom) || (currentStep === 1 && (!dateRange.startDate || !dateRange.endDate)) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Suivant
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#7A9E7E] text-white rounded-md hover:bg-[#5B7B5E] focus:outline-none focus:ring-2 focus:ring-[#A0C1A7] focus:ring-opacity-50 transition-colors"
                >
                  Réserver
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
