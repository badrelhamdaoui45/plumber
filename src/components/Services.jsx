import React from 'react';
import { Droplets, ShieldAlert, Wrench, Flame, Sliders, CheckCircle, ArrowRight } from 'lucide-react';
import { PLUMBING_SERVICES } from '../data/communes';

export default function Services({ t, lang, onSelectService }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Droplets':
        return <Droplets className="w-7 h-7 text-sky-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-7 h-7 text-amber-500" />;
      case 'Wrench':
        return <Wrench className="w-7 h-7 text-blue-500" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-red-500" />;
      case 'Sliders':
        return <Sliders className="w-7 h-7 text-emerald-500" />;
      case 'CheckCircle':
        return <CheckCircle className="w-7 h-7 text-indigo-500" />;
      default:
        return <Wrench className="w-7 h-7 text-sky-500" />;
    }
  };

  const getServiceTitle = (svc) => {
    if (lang === 'fr') return svc.titleFr;
    if (lang === 'nl') return svc.titleNl;
    return svc.title;
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Specialized Assistance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.servicesSection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLUMBING_SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-50 transition-all duration-300">
                    {getIcon(svc.icon)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-sky-100 group-hover:text-sky-800 transition">
                    {svc.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {getServiceTitle(svc)}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectService(svc.id)}
                  className="w-full inline-flex items-center justify-between text-sm font-bold text-sky-600 hover:text-sky-700 group-hover:translate-x-0.5 transition py-1 cursor-pointer"
                >
                  <span>{t.servicesSection.ctaRequest}</span>
                  <ArrowRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Helpdesk Advice Card */}
        <div className="mt-14 bg-gradient-to-r from-sky-900 to-blue-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold">Unsure which category matches your problem?</h4>
            <p className="text-slate-300 text-sm">
              Our central Brussels coordination desk will assess your issue and assign the most competent specialist.
            </p>
          </div>
          <button
            onClick={() => onSelectService('general-repairs')}
            className="whitespace-nowrap bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-sm transition shadow-sm hover:shadow"
          >
            Describe Your Problem
          </button>
        </div>
      </div>
    </section>
  );
}
