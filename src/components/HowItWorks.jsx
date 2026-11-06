import React from 'react';
import { MessageSquareText, Search, UserCheck, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

export default function HowItWorks({ t, onNavigate }) {
  const steps = [
    {
      icon: <MessageSquareText className="w-8 h-8 text-sky-600" />,
      number: "1",
      title: t.howItWorks.steps[0].title,
      desc: t.howItWorks.steps[0].desc,
      detail: "Fast online form or quick phone call with your Brussels/Belgian postal code."
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      number: "2",
      title: t.howItWorks.steps[1].title,
      desc: t.howItWorks.steps[1].desc,
      detail: "Matching according to distance, required certification (gas, heating, sanitation), and availability."
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-emerald-600" />,
      number: "3",
      title: t.howItWorks.steps[2].title,
      desc: t.howItWorks.steps[2].desc,
      detail: "Direct connection with transparent estimate and agreement before any work begins."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Simple & Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-sky-300 via-blue-300 to-emerald-300 -z-0"></div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 bg-slate-50/90 rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-300 group-hover:text-sky-500 transition-colors">
                    0{step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {step.title}
                </h3>

                {/* Main Desc from prompt */}
                <p className="text-slate-700 font-medium text-base leading-relaxed mb-4">
                  {step.desc}
                </p>

                {/* Practical note */}
                <p className="text-slate-500 text-xs leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Association Charter Guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate('find-a-plumber')}
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-sky-600/20 text-base transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>{t.hero.mainCta}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
