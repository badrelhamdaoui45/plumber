import React, { useState } from 'react';
import { Phone, AlertCircle, Clock, MapPin, Globe, Menu, X, ShieldCheck } from 'lucide-react';

export default function Header({ lang, setLang, t, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Emergency Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-sky-900 to-slate-900 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="font-semibold text-amber-300 uppercase tracking-wide text-[11px] bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30">
              24/7 Urgence
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="text-slate-200 font-medium">{t.topBar.emergencyNotice}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300 text-xs">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              {t.topBar.officeHours}
            </span>
            <a
              href="tel:+3228804577"
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white font-bold px-3 py-1 rounded-full text-xs transition shadow-sm hover:shadow"
            >
              <Phone className="w-3 h-3 animate-bounce" />
              <span>+32 (0)2 880 45 77</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="relative">
                <ShieldCheck className="w-7 h-7 text-white" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-none group-hover:text-sky-600 transition-colors">
                  Urgence Plomberie
                </span>
                <span className="font-extrabold text-lg sm:text-xl text-sky-600 tracking-tight leading-none">
                  Bruxelles
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-1 flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                Association Sans But Lucratif • Belgique
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="hover:text-sky-600 transition-colors"
            >
              {t.nav.home}
            </a>
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, 'services')}
              className="hover:text-sky-600 transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleLinkClick(e, 'how-it-works')}
              className="hover:text-sky-600 transition-colors"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#find-a-plumber"
              onClick={(e) => handleLinkClick(e, 'find-a-plumber')}
              className="hover:text-sky-600 transition-colors text-sky-700 font-bold"
            >
              {t.nav.findPlumber}
            </a>
            <a
              href="#for-plumbers"
              onClick={(e) => handleLinkClick(e, 'for-plumbers')}
              className="hover:text-sky-600 transition-colors"
            >
              {t.nav.forPlumbers}
            </a>
            <a
              href="#about-us"
              onClick={(e) => handleLinkClick(e, 'about-us')}
              className="hover:text-sky-600 transition-colors"
            >
              {t.nav.aboutUs}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="hover:text-sky-600 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector */}
            <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200 text-xs font-bold text-slate-600">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded transition ${
                  lang === 'en' ? 'bg-white text-sky-700 shadow-xs' : 'hover:text-slate-900'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`px-2 py-1 rounded transition ${
                  lang === 'fr' ? 'bg-white text-sky-700 shadow-xs' : 'hover:text-slate-900'
                }`}
                title="Français"
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLang('nl')}
                className={`px-2 py-1 rounded transition ${
                  lang === 'nl' ? 'bg-white text-sky-700 shadow-xs' : 'hover:text-slate-900'
                }`}
                title="Nederlands"
              >
                NL
              </button>
            </div>

            <button
              onClick={() => onNavigate('find-a-plumber')}
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-sky-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
            >
              <span>{t.nav.requestPlumber}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Lang Switch */}
            <div className="flex items-center bg-slate-100 rounded-md p-0.5 text-xs font-semibold">
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded ${lang === 'en' ? 'bg-white text-sky-600 font-bold' : ''}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-1.5 py-0.5 rounded ${lang === 'fr' ? 'bg-white text-sky-600 font-bold' : ''}`}
              >
                FR
              </button>
              <button
                onClick={() => setLang('nl')}
                className={`px-1.5 py-0.5 rounded ${lang === 'nl' ? 'bg-white text-sky-600 font-bold' : ''}`}
              >
                NL
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 text-base font-medium text-slate-800">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              {t.nav.home}
            </a>
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, 'services')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              {t.nav.services}
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleLinkClick(e, 'how-it-works')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#find-a-plumber"
              onClick={(e) => handleLinkClick(e, 'find-a-plumber')}
              className="px-3 py-2 rounded-lg bg-sky-50 text-sky-700 font-semibold"
            >
              {t.nav.findPlumber}
            </a>
            <a
              href="#for-plumbers"
              onClick={(e) => handleLinkClick(e, 'for-plumbers')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              {t.nav.forPlumbers}
            </a>
            <a
              href="#about-us"
              onClick={(e) => handleLinkClick(e, 'about-us')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              {t.nav.aboutUs}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('find-a-plumber');
              }}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl text-center shadow-md cursor-pointer"
            >
              {t.nav.requestPlumber}
            </button>
            <a
              href="tel:+3228804577"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Urgence: +32 (0)2 880 45 77</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
