/**
 * Schémas structurés JSON-LD pour le SEO
 * Ces schémas aident les moteurs de recherche à mieux comprendre le contenu du site
 */

export const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Le Clos du Ru",
  "description": "Chambres d'hôtes de charme situées au bord du canal d'Orléans dans un cadre naturel et paisible",
  "url": "https://www.leclosduru.com",
  "telephone": "+33607840213",
  "email": "fredericduru@orange.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "49 Les Landois",
    "addressLocality": "Presnoy",
    "addressRegion": "Centre-Val de Loire",
    "postalCode": "45260",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "47.9027336",
    "longitude": "2.5086044"
  },
  "priceRange": "€€",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4.8",
    "bestRating": "5"
  },
  "image": [
    "https://www.leclosduru.com/image/Façade le clos du Ru/10.JPG",
    "https://www.leclosduru.com/image/Jardin le clos du Ru/IMG_3636.jpeg",
    "https://www.leclosduru.com/image/Chambre N°1/P1090412.jpg"
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
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Table d'hôtes sur demande",
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
        "text": "Le check-in est possible entre 17h30 et 21h00. Le check-out doit être effectué avant 11h00."
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
    "item": `https://www.leclosduru.com${item.url}`
  }))
});
