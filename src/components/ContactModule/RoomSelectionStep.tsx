"use client";

import { RoomType, DateRangeType } from "./types";

interface RoomSelectionStepProps {
  roomTypes: RoomType[];
  selectedRoom: RoomType | null;
  setSelectedRoom: (room: RoomType) => void;
  dateRange: DateRangeType;
}

export default function RoomSelectionStep({ 
  roomTypes, 
  selectedRoom, 
  setSelectedRoom,
  dateRange 
}: RoomSelectionStepProps) {
  const nights = dateRange.startDate && dateRange.endDate ? Math.ceil(
    (dateRange.endDate.getTime() - dateRange.startDate.getTime()) / (1000 * 60 * 60 * 24)
  ) : 0;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Choisissez votre chambre</h3>
      <div className="space-y-4">
        {roomTypes.map((room) => (
          <div 
            key={room.id}
            className={`border ${selectedRoom?.id === room.id ? 'border-[#7A9E7E] bg-[#E8F1E4]' : 'border-gray-200'} rounded-lg p-3 hover:border-[#A0C1A7] transition-all`}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-24 h-32 sm:h-24 overflow-hidden rounded-md sm:mr-4 mb-3 sm:mb-0">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 text-center sm:text-left">{room.name}</h4>
                <p className="text-sm text-gray-600 text-center sm:text-left">{room.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-2 gap-2 sm:gap-0">
                  <span className="text-sm">{room.capacity} personnes</span>
                  <span className="font-medium text-[#5B7B5E] text-lg">{room.price}€ / nuit</span>
                </div>
              </div>
            </div>
            
            <div className="mt-3 flex justify-between items-center">
              <button 
                onClick={(e) => {
                  e.preventDefault(); // Éviter le comportement par défaut
                  // Ne rien faire pour l'instant, on pourrait implémenter un modal de détails plus tard
                }}
                className="text-sm text-[#5B7B5E] hover:underline"
              >
                Plus de détails
              </button>
              
              <button 
                onClick={(e) => {
                  e.preventDefault(); // Éviter le comportement par défaut
                  setSelectedRoom(room); // Sélectionner la chambre sans effets secondaires
                }}
                className={`px-4 py-1.5 rounded-md transition-colors ${selectedRoom?.id === room.id 
                  ? 'bg-[#5B7B5E] text-white' 
                  : 'bg-[#E8F1E4] text-[#5B7B5E] hover:bg-[#5B7B5E] hover:text-white'}`}
              >
                {selectedRoom?.id === room.id ? '✓ Sélectionnée' : 'Sélectionner'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-[#F7F4EF] rounded-lg shadow-sm">
        <div className="flex justify-between">
          <span>Prix par nuit:</span>
          <span className="font-medium">{selectedRoom ? `${selectedRoom.price}€` : '-'}</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Nombre de nuits:</span>
          <span className="font-medium">{nights}</span>
        </div>
        <div className="flex justify-between mt-2 text-lg font-medium">
          <span>Total:</span>
          <span className="text-[#5B7B5E]">
            {selectedRoom ? 
              `${selectedRoom.price * nights}€` : 
              '-'}
          </span>
        </div>
        
        {selectedRoom && (
          <div className="mt-4 pt-3 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-600">Chambre sélectionnée:</p>
              <p className="font-medium">{selectedRoom.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
