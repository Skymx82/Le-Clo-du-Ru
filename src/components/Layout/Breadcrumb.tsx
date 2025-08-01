"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { breadcrumbSchema } from '@/utils/schema';

interface BreadcrumbProps {
  customItems?: {name: string, url: string}[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ customItems }) => {
  const pathname = usePathname();
  
  // Si des éléments personnalisés sont fournis, les utiliser
  // Sinon, générer automatiquement à partir du chemin
  const items = customItems || generateBreadcrumbItems(pathname);
  
  return (
    <>
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-[#F7F4EF] bg-opacity-70">
        <ol className="flex flex-wrap items-center text-sm">
          <li className="flex items-center">
            <Link href="/" className="text-[#5B7B5E] hover:text-[#7A9E7E] transition-colors">
              Accueil
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {index === items.length - 1 ? (
                <span className="text-gray-600 font-medium">{item.name}</span>
              ) : (
                <Link 
                  href={item.url} 
                  className="text-[#5B7B5E] hover:text-[#7A9E7E] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      
      {/* Données structurées JSON-LD pour le fil d'Ariane */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Accueil', url: '/' },
              ...items
            ])
          )
        }}
      />
    </>
  );
};

// Fonction pour générer automatiquement les éléments du fil d'Ariane à partir du chemin
function generateBreadcrumbItems(pathname: string): {name: string, url: string}[] {
  if (pathname === '/') return [];
  
  // Supprimer le premier slash et diviser le chemin
  const pathSegments = pathname.split('/').filter(segment => segment);
  const breadcrumbItems: {name: string, url: string}[] = [];
  
  // Construire les éléments du fil d'Ariane
  let currentPath = '';
  
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    
    // Convertir le segment en nom lisible
    let name = segment.replace(/-/g, ' ');
    // Mettre en majuscule la première lettre de chaque mot
    name = name.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Cas spéciaux
    if (segment === 'faq') name = 'FAQ';
    if (segment === 'mentions-legales') name = 'Mentions Légales';
    if (segment === 'confidentialite') name = 'Politique de Confidentialité';
    
    breadcrumbItems.push({
      name,
      url: currentPath
    });
  });
  
  return breadcrumbItems;
}

export default Breadcrumb;
