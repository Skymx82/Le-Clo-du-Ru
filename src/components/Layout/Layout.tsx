"use client";

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F1E8]">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex-grow pt-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Layout;
