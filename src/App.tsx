import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/Composant/layout/Navbar';
import HeroSection from '@/Composant/sections/HeroSection';
import AboutSection from '@/Composant/sections/AboutSection';
import StatsSection from '@/Composant/sections/StatsSection';
import ServicesSection from '@/Composant/sections/ServicesSection';
import PastorsSection from '@/Composant/sections/PastorsSection';
import ContactSection from '@/Composant/sections/ContactSection';
import Footer from '@/Composant/layout/Footer';
import DailyVerse from '@/Composant/sections/DailyVerse';
import SermonsSection from '@/Composant/sections/SermonsSection';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 4000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <DailyVerse />
        <ServicesSection />
        <SermonsSection />
        <PastorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;