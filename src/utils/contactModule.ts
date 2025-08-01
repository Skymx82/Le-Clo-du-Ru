/**
 * Utilitaire pour ouvrir le module de contact depuis n'importe quel composant
 */

/**
 * Ouvre le module de contact en cliquant sur son bouton
 * @param roomId Optionnel: ID de la chambre à présélectionner
 */
export const openContactModule = (roomId?: number): void => {
  const contactModuleButton = document.getElementById('contact-module-button');
  if (contactModuleButton) {
    // Stocke l'ID de la chambre dans le localStorage si fourni
    if (roomId) {
      localStorage.setItem('selectedRoomId', roomId.toString());
    } else {
      localStorage.removeItem('selectedRoomId');
    }
    
    // Déclenche un clic sur le bouton du module de contact
    contactModuleButton.click();
  }
};
