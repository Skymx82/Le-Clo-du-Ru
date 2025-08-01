/**
 * Schémas structurés JSON-LD pour le SEO
 * Ces schémas aident les moteurs de recherche à mieux comprendre le contenu du site
 */

export const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Le Clos du Ru",
  "description": "Chambres d'hôtes de charme situées au bord du canal d'Orléans dans un cadre naturel et paisible",
  "url": "https://leclosduru.fr",
  "telephone": "+33607840213",
  "email": "fredericduru@orange.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Rue du Ru",
    "addressLocality": "Montmirail",
    "addressRegion": "Grand Est",
    "postalCode": "51210",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.8769",
    "longitude": "3.5394"
  },
  "priceRange": "€€",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4.8",
    "bestRating": "5"
  },
  "image": [
    "https://leclosduru.fr/image/Façade le clos du Ru/10.JPG",
    "https://leclosduru.fr/image/Jardin le clos du Ru/IMG_3636.jpeg",
    "https://leclosduru.fr/image/Chambre N°1/P1090412.jpg"
  ],
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Wi-Fi gratuit",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Jardin",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Petit-déjeuner inclus",
      "value": true
    }
  ]
};

export const roomSchema = (
  name: string,
  description: string,
  image: string,
  capacity: string,
  amenities: string[]
) => ({
  "@context": "https://schema.org",
  "@type": "Room",
  "name": name,
  "description": description,
  "image": image,
  "occupancy": {
    "@type": "QuantitativeValue",
    "value": parseInt(capacity.split(" ")[0], 10)
  },
  "amenityFeature": amenities.map(amenity => ({
    "@type": "LocationFeatureSpecification",
    "name": amenity,
    "value": true
  })),
  "isPartOf": {
    "@type": "LodgingBusiness",
    "name": "Le Clos du Ru"
  }
});

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels sont les horaires d'arrivée et de départ ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le check-in est possible entre 15h00 et 19h00. Le check-out doit être effectué avant 11h00."
      }
    },
    {
      "@type": "Question",
      "name": "Le petit-déjeuner est-il inclus ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, un petit-déjeuner fait maison avec des produits locaux est inclus dans le prix de la chambre."
      }
    },
    {
      "@type": "Question",
      "name": "Y a-t-il un accès Wi-Fi ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, le Wi-Fi gratuit est disponible dans toutes les chambres et les espaces communs."
      }
    },
    {
      "@type": "Question",
      "name": "Les animaux sont-ils acceptés ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les animaux de compagnie peuvent être acceptés sur demande préalable. Veuillez nous contacter avant votre réservation."
      }
    }
  ]
};

export const breadcrumbSchema = (items: {name: string, url: string}[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://leclosduru.fr${item.url}`
  }))
});
