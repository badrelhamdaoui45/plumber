import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Heart, ChevronRight } from 'lucide-react';

export default function Footer({ t, onNavigate, onOpenModal }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Association Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  {t.footer.associationName}
                </span>
                <p className="text-[11px] text-sky-400 font-medium uppercase tracking-wider">
                  Association ASBL • Bruxelles & Belgique
                </p>
              </div>
            </div>

            {/* Exact Subtitle from user specification */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="text-xs text-slate-400 space-y-1.5 pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Rue de la Loi 155, 1040 Bruxelles</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>+32 (0)2 880 45 77 (Office) • 24/7 Urgence</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>contact@urgenceplomberiebruxelles.be</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {t.footer.links.map((link, idx) => (
                <li key={idx}>
                  {link.modal ? (
                    <button
                      type="button"
                      onClick={() => onOpenModal(link.modal)}
                      className="text-slate-400 hover:text-white transition flex items-center gap-1.5 text-left cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                      <span>{link.label}</span>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(link.href.replace('#', ''));
                      }}
                      className="text-slate-400 hover:text-white transition flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                      <span>{link.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Emergency Dispatch & Belgian Registration */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              24/7 Rapid Helpdesk
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available 24 hours a day, 7 days a week for burst pipes, unblocking, and water damage in the 19 Brussels municipalities and surrounding regions.
            </p>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
              <span className="text-[11px] text-slate-400 block mb-1">Direct Emergency Hotline</span>
              <a
                href="tel:+3228804577"
                className="text-lg font-black text-white hover:text-sky-400 transition"
              >
                +32 (0)2 880 45 77
              </a>
            </div>
            <p className="text-[11px] text-slate-400">
              {t.footer.asblNotice}
            </p>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.footer.copyright}</p>
          <p className="flex items-center gap-1">
            <span>Non-profit public interest service for Belgian residents</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

