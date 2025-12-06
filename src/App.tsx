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

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdminPage from '@/Composant/Admin/AdminPage';
import LoginPage from '@/Composant/login/LoginPage';
import ProtectedRoute from '@/Composant/login/protectionRoute/ProtectedRoute';
import EventsPage from './Composant/sections/EventsPage';

// ------------------ PAGE D'ACCUEIL ------------------

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DailyVerse />
      <ServicesSection />
      <SermonsSection />
      <PastorsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

// ------------------ APP PRINCIPALE (ROUTER) ------------------

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<HomePage />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Admin protégée */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      
        {/* Pages simples */}
        <Route path="/about" element={<AboutSection />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
}

export default App;
