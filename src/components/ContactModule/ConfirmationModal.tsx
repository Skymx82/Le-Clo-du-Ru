"use client";

import { useEffect } from "react";

interface ConfirmationModalProps {
  isVisible: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  title: string;
  message: string;
}

export default function ConfirmationModal({ 
  isVisible, 
  onClose, 
  type, 
  title, 
  message 
}: ConfirmationModalProps) {
  
  // Auto-fermeture après 4 secondes pour le succès
  useEffect(() => {
    if (isVisible && type === 'success') {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, type, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-white rounded-2xl shadow-2xl p-8 mx-4 max-w-md w-full transform transition-all duration-300 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        
        {/* Icône */}
        <div className="flex justify-center mb-6">
          {type === 'success' ? (
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ) : (
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}
        </div>

        {/* Titre */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
          {title}
        </h3>

        {/* Message */}
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          {message}
        </p>

        {/* Bouton de fermeture */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              type === 'success' 
                ? 'bg-[#7A9E7E] hover:bg-[#5B7B5E] text-white' 
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            Fermer
          </button>
        </div>

        {/* Barre de progression pour auto-fermeture (succès seulement) */}
        {type === 'success' && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-[#7A9E7E] h-1 rounded-full animate-progress"
                style={{
                  animation: 'progress 4s linear forwards'
                }}
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
        .animate-progress {
          animation: progress 4s linear forwards;
        }
      `}</style>
    </div>
  );
}
