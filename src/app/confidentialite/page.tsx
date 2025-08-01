import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Tolarys',
  description: 'Politique de confidentialité et traitement des données personnelles du site Tolarys',
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-[#5B7B5E] mb-6">Politique de Confidentialité</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            La présente politique de confidentialité a pour but d'informer les utilisateurs du site <span className="font-medium">www.tolarys.com</span> (ci-après le « Site ») de la manière dont leurs informations personnelles sont collectées et traitées par Tolarys.
          </p>
          <p className="text-gray-700 mb-2">
            En vertu du Règlement Général sur la Protection des Données (RGPD), Tolarys s'engage à respecter la confidentialité des données personnelles des utilisateurs et à les traiter dans le respect de leurs droits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">2. Responsable du traitement</h2>
          <p className="text-gray-700 mb-2">
            Le responsable du traitement des données à caractère personnel est :
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Tolarys</span><br />
            Adresse : Le Clos du Ru, 45290 Varennes-Changy, France<br />
            Email : tolarystoulouse@gmail.com<br />
            SIRET : 94208529100014
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">3. Données collectées</h2>
          <p className="text-gray-700 mb-4">
            Nous collectons les données suivantes :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Données d'identification : nom, prénom, adresse email, numéro de téléphone</li>
            <li>Données de réservation : dates de séjour, type de chambre, nombre de personnes</li>
            <li>Données de connexion : adresse IP, données de navigation, historique de consultation</li>
            <li>Données de paiement : ces données sont collectées et traitées directement par notre prestataire de paiement sécurisé</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">4. Finalités du traitement</h2>
          <p className="text-gray-700 mb-4">
            Vos données sont collectées et traitées pour les finalités suivantes :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Gestion des réservations et des séjours</li>
            <li>Communication relative à votre réservation ou à votre séjour</li>
            <li>Amélioration de nos services et de votre expérience utilisateur</li>
            <li>Envoi de newsletters et d'offres promotionnelles (sous réserve de votre consentement)</li>
            <li>Respect de nos obligations légales et réglementaires</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">5. Base légale du traitement</h2>
          <p className="text-gray-700 mb-4">
            Le traitement de vos données personnelles est fondé sur :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>L'exécution du contrat pour la gestion des réservations</li>
            <li>Votre consentement pour l'envoi de communications commerciales</li>
            <li>Notre intérêt légitime pour l'amélioration de nos services</li>
            <li>Le respect de nos obligations légales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">6. Destinataires des données</h2>
          <p className="text-gray-700 mb-4">
            Vos données personnelles sont destinées à :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Notre personnel habilité</li>
            <li>Nos sous-traitants (hébergeur, prestataire de paiement, etc.)</li>
            <li>Prestacomm, notre prestataire de gestion du site</li>
            <li>Les autorités administratives ou judiciaires lorsque la loi l'exige</li>
          </ul>
          <p className="text-gray-700 mb-2">
            Nous ne vendons ni ne louons vos données personnelles à des tiers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">7. Durée de conservation</h2>
          <p className="text-gray-700 mb-4">
            Nous conservons vos données personnelles pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées, dans le respect de la législation en vigueur :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Données de réservation : 3 ans à compter de la fin de la relation commerciale</li>
            <li>Données de paiement : supprimées après la transaction (conservées par notre prestataire de paiement selon ses propres conditions)</li>
            <li>Données de connexion : 13 mois maximum</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">8. Vos droits</h2>
          <p className="text-gray-700 mb-4">
            Conformément à la réglementation en vigueur, vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification de vos données</li>
            <li>Droit à l'effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d'opposition au traitement</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit de retirer votre consentement à tout moment</li>
            <li>Droit d'introduire une réclamation auprès de la CNIL</li>
          </ul>
          <p className="text-gray-700 mb-2">
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante : tolarystoulouse@gmail.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">9. Cookies</h2>
          <p className="text-gray-700 mb-4">
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Un cookie est un petit fichier texte déposé sur votre terminal lors de votre visite sur notre site.
          </p>
          <p className="text-gray-700 mb-4">
            Les cookies que nous utilisons nous permettent de :
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Assurer le bon fonctionnement du site</li>
            <li>Mesurer l'audience du site</li>
            <li>Améliorer votre expérience utilisateur</li>
            <li>Personnaliser les contenus qui vous sont proposés</li>
          </ul>
          <p className="text-gray-700 mb-2">
            Vous pouvez configurer votre navigateur pour refuser l'installation de cookies ou supprimer les cookies déjà installés. Toutefois, le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certaines fonctionnalités du site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">10. Sécurité des données</h2>
          <p className="text-gray-700 mb-2">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles, leur intégrité et leur confidentialité. Toutefois, aucune transmission de données sur Internet ou système de stockage électronique n'est totalement sécurisé, et nous ne pouvons garantir une sécurité absolue.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-[#5B7B5E] mb-3">11. Modification de la politique de confidentialité</h2>
          <p className="text-gray-700 mb-2">
            Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée sur cette page. Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la manière dont nous protégeons vos données personnelles.
          </p>
        </section>

        <div className="text-gray-500 text-sm mt-10">
          <p>Dernière mise à jour : 01/08/2025</p>
        </div>
      </div>
    </div>
  );
}
