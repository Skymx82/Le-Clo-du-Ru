import Image from "next/image";
import ContactModule from "../components/ContactModule";
import { Navbar, Footer } from "../components/Layout";
import { HeroSection, GitePresentation, RoomSection, SurroundingsSection, GallerySection, ContactSection } from "../components/Accueil";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />

      <HeroSection />

      <GitePresentation />
      
      <RoomSection />
      
      <SurroundingsSection />
      
      <GallerySection />
      
      <ContactSection />

      <Footer />
      
      {/* Module de contact flottant */}
      <ContactModule />
    </div>
  );
}
