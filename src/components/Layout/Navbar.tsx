"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { openContactModule } from '@/utils/contactModule';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effet pour détecter le scroll et changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation pour les liens du menu - simplifiée pour éviter les erreurs de typage
  const staggerDelay = 0.1;

  // Liens de navigation
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Chambres', href: '/#chambres' },
    { name: 'À propos', href: '/#about' },
    { name: 'Galerie', href: '/#galerie' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F7F4EF] bg-opacity-95 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`font-serif text-2xl font-bold ${
              scrolled ? 'text-[#7A9E7E]' : 'text-white'
            }`}
          >
            Le Clos du Ru
          </motion.div>
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * staggerDelay, duration: 0.5 }}
            >
              <Link 
                href={link.href}
                className={`relative font-medium text-sm tracking-wide hover:text-[#A0C1A7] transition-colors ${
                  scrolled ? 'text-[#5B7B5E]' : 'text-white'
                }`}
              >
                <span className="relative">
                  {link.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A0C1A7]"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bouton réserver */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#A0C1A7] hover:bg-[#7A9E7E] text-white px-6 py-2 rounded-md font-medium text-sm transition-colors shadow-sm"
          onClick={() => openContactModule()}
        >
          Réserver
        </motion.button>

        {/* Menu mobile burger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${
              scrolled ? 'text-green-800' : 'text-white'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white bg-opacity-95 shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-green-900 hover:text-green-700 font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              className="w-full mt-4 bg-[#A0C1A7] hover:bg-[#7A9E7E] text-white px-6 py-3 rounded-md font-medium text-sm transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                openContactModule();
              }}
            >
              Réserver
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
