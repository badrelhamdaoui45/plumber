import React, { useState, useEffect } from 'react';
import { content } from './data/translations';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Mission from './components/Mission';
import FindPlumber from './components/FindPlumber';
import ForPlumbers from './components/ForPlumbers';
import AboutUs from './components/AboutUs';
import CoverageMap from './components/CoverageMap';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';

export default function App() {
  const [lang, setLang] = useState('en');
  const [preselectedService, setPreselectedService] = useState('leak-detection');
  const [activeModal, setActiveModal] = useState(null);

  const t = content[lang] || content.en;

  // Navigation helper
  const navigateTo = (sectionId, serviceId = null) => {
    if (serviceId) {
      setPreselectedService(serviceId);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId) => {
    setPreselectedService(serviceId);
    navigateTo('find-a-plumber', serviceId);
  };

  const handleSelectLocation = (locationString) => {
    navigateTo('find-a-plumber');
    // Find location input and populate
    setTimeout(() => {
      const locInput = document.querySelector('input[name="location"]');
      if (locInput) {
        locInput.value = locationString;
        locInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans selection:bg-sky-500 selection:text-white">
      {/* Sticky Header with 24/7 hotline and language switcher */}
      <Header
        lang={lang}
        setLang={setLang}
        t={t}
        onNavigate={navigateTo}
      />

      <main className="flex-grow">
        {/* HOME SECTION: Hero */}
        <div id="home">
          <Hero
            t={t}
            onNavigate={navigateTo}
          />
        </div>

        {/* HOME SECTION: What plumbing help do you need? */}
        <Services
          t={t}
          lang={lang}
          onSelectService={handleSelectService}
        />

        {/* HOME SECTION: How does it work? */}
        <HowItWorks
          t={t}
          onNavigate={navigateTo}
        />

        {/* HOME SECTION: Our mission & For plumbing professionals Teaser */}
        <Mission
          t={t}
          onNavigate={navigateTo}
        />

        {/* FIND A PLUMBER SECTION */}
        <FindPlumber
          t={t}
          lang={lang}
          preselectedService={preselectedService}
        />

        {/* FOR PLUMBERS SECTION */}
        <ForPlumbers
          t={t}
          lang={lang}
        />

        {/* ABOUT US SECTION */}
        <AboutUs
          t={t}
          lang={lang}
        />

        {/* BRUSSELS & BELGIUM COVERAGE ZONE GUIDE */}
        <CoverageMap
          onSelectLocation={handleSelectLocation}
        />

        {/* VERIFIED TESTIMONIALS & FAQ */}
        <FaqSection
          lang={lang}
        />

        {/* CONTACT SECTION */}
        <ContactSection
          t={t}
        />
      </main>

      {/* FOOTER */}
      <Footer
        t={t}
        onNavigate={navigateTo}
        onOpenModal={(modalType) => setActiveModal(modalType)}
      />

      {/* GDPR Privacy Policy & Belgian ASBL Legal Notice Modals */}
      <LegalModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
