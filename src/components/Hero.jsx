import React from 'react';
import { ArrowRight, ShieldCheck, Clock, MapPin, Users, CheckCircle2, PhoneCall } from 'lucide-react';

export default function Hero({ t, onNavigate }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Grid and Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Belgian Association Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-sky-400"></span>
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              {t.hero.headline}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('find-a-plumber')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{t.hero.mainCta}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('for-plumbers')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold px-7 py-4 rounded-xl text-base border border-slate-700/80 transition-all hover:border-slate-500 cursor-pointer"
              >
                <span>{t.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>BCE / KBO Registered Pros</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent Pricing Charter</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Free Household Service</span>
              </span>
            </div>
          </div>

          {/* Right Card: Emergency Hotline & Real-time Dispatch Preview */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-full pointer-events-none"></div>

              {/* Status Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                    <PhoneCall className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      Brussels Emergency Dispatch
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      Technicians on Standby
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-sky-950 text-sky-400 border border-sky-800 px-2.5 py-1 rounded-md">
                  24h / 7j
                </span>
              </div>

              {/* Quick dispatch phone trigger */}
              <div className="my-6 bg-slate-900/90 rounded-2xl p-4 border border-slate-700/60 text-center">
                <p className="text-xs text-slate-400 mb-1">Direct Assistance Coordinator</p>
                <a
                  href="tel:+3228804577"
                  className="text-2xl sm:text-3xl font-black text-white hover:text-sky-400 tracking-tight transition"
                >
                  +32 (0)2 880 45 77
                </a>
                <p className="text-[11px] text-slate-400 mt-1">
                  Brussels Capital & Belgian Regional Coverage
                </p>
              </div>

              {/* Fast Emergency Selector Form Trigger */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Select your urgent need:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => onNavigate('find-a-plumber', 'leak-detection')}
                    className="p-3 bg-slate-700/50 hover:bg-sky-600/30 border border-slate-600/60 hover:border-sky-400 rounded-xl text-left transition flex items-center justify-between group"
                  >
                    <span className="font-semibold text-slate-200 group-hover:text-white">Water Leak</span>
                    <span className="text-sky-400">→</span>
                  </button>
                  <button
                    onClick={() => onNavigate('find-a-plumber', 'blocked-pipes')}
                    className="p-3 bg-slate-700/50 hover:bg-sky-600/30 border border-slate-600/60 hover:border-sky-400 rounded-xl text-left transition flex items-center justify-between group"
                  >
                    <span className="font-semibold text-slate-200 group-hover:text-white">Blocked Drain</span>
                    <span className="text-sky-400">→</span>
                  </button>
                  <button
                    onClick={() => onNavigate('find-a-plumber', 'water-heaters')}
                    className="p-3 bg-slate-700/50 hover:bg-sky-600/30 border border-slate-600/60 hover:border-sky-400 rounded-xl text-left transition flex items-center justify-between group"
                  >
                    <span className="font-semibold text-slate-200 group-hover:text-white">Boiler Breakdown</span>
                    <span className="text-sky-400">→</span>
                  </button>
                  <button
                    onClick={() => onNavigate('find-a-plumber', 'general-repairs')}
                    className="p-3 bg-slate-700/50 hover:bg-sky-600/30 border border-slate-600/60 hover:border-sky-400 rounded-xl text-left transition flex items-center justify-between group"
                  >
                    <span className="font-semibold text-slate-200 group-hover:text-white">All Other Needs</span>
                    <span className="text-sky-400">→</span>
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => onNavigate('find-a-plumber')}
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-xl shadow-md text-sm transition-all"
                  >
                    Start Plumber Matching Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/80">
            <div className="text-3xl sm:text-4xl font-extrabold text-sky-400">{t.hero.stat1Number}</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">{t.hero.stat1Label}</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/80">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">{t.hero.stat2Number}</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">{t.hero.stat2Label}</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/80">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">{t.hero.stat3Number}</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">{t.hero.stat3Label}</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/80">
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-400">{t.hero.stat4Number}</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">{t.hero.stat4Label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

