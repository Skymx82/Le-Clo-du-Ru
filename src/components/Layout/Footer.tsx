"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { openContactModule } from '@/utils/contactModule';

const Footer = () => {
  // Animation pour les éléments du footer
  const footerItemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <footer className="bg-[#5B7B5E] bg-opacity-90 text-white relative overflow-hidden">
      {/* Séparateur organique */}

<div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerItemVariants}
            className="space-y-4"
          >
            <h3 className="text-2xl font-serif font-bold mb-4 text-[#E8F1E4]">Le Clos du Ru</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Sur un terrain clos, arboré et fleuri, en pleine campagne, le Clos du Ru est bordé par le canal d'Orléans. 
              La maison est une longère, bâtisse typique du Gâtinais, ancienne ferme rénovée avec ses dépendances.
            </p>
            <div className="pt-4 flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-[#D8E8D5] hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-[#D8E8D5] hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerItemVariants}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4 text-[#E8F1E4]">Liens rapides</h4>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Chambres', href: '/#chambres' },
                { name: 'À propos', href: '/#about' },
                { name: 'Galerie', href: '/#galerie' },
                { name: 'Contact', href: '/#contact' },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-sm flex items-center hover:text-[#A0C1A7] transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => openContactModule()} 
                  className="text-sm flex items-center hover:text-[#A0C1A7] transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Réserver
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerItemVariants}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4 text-[#E8F1E4]">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Le Clos du Ru, 45290 Varennes-Changy, France</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">contact@leclosduru.fr</span>
              </div>
              <button 
                onClick={() => openContactModule()} 
                className="mt-4 px-4 py-2 bg-[#A0C1A7] hover:bg-[#7A9E7E] text-white rounded-md text-sm transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Nous contacter
              </button>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+33 6 07 84 02 13</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerItemVariants}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4 text-[#E8F1E4]">Newsletter</h4>
            <p className="text-sm leading-relaxed opacity-80 mb-4">
              Recevez nos offres spéciales et actualités
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 bg-[#F5F1E8] bg-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#A0C1A7] hover:bg-[#7A9E7E] px-4 py-2 rounded-r transition-colors"
              >
                S'inscrire
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#4A6A4D] mt-8 pt-8 text-center text-[#D8E8D5]">
          <p> {new Date().getFullYear()} Le Clos du Ru. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <span>|</span>
            <Link href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <span>|</span>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
