import React from 'react';
import { HeartHandshake, ShieldCheck, Scale, Award, ArrowRight, UserPlus, Users } from 'lucide-react';

export default function Mission({ t, onNavigate }) {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mission Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              <span>Non-Profit Commitment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t.mission.title}
            </h2>

            {/* Core exact mission statement from user specification */}
            <p className="text-xl text-sky-100 font-medium leading-relaxed bg-slate-800/60 p-6 rounded-2xl border-l-4 border-sky-500 shadow-md">
              "{t.mission.text}"
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="font-bold text-white text-sm mb-1">{t.mission.points[0].title}</h4>
                <p className="text-xs text-slate-400 leading-normal">{t.mission.points[0].desc}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <Scale className="w-6 h-6 text-sky-400 mb-2" />
                <h4 className="font-bold text-white text-sm mb-1">{t.mission.points[1].title}</h4>
                <p className="text-xs text-slate-400 leading-normal">{t.mission.points[1].desc}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <Award className="w-6 h-6 text-amber-400 mb-2" />
                <h4 className="font-bold text-white text-sm mb-1">{t.mission.points[2].title}</h4>
                <p className="text-xs text-slate-400 leading-normal">{t.mission.points[2].desc}</p>
              </div>
            </div>
          </div>

          {/* Section: For plumbing professionals Teaser */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-sky-900/90 to-blue-950/90 p-8 rounded-3xl border border-sky-700/50 shadow-2xl relative">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>

              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                {t.forPlumbersTeaser.title}
              </h3>

              <h4 className="text-2xl font-extrabold text-white mb-4">
                {t.forPlumbersTeaser.question}
              </h4>

              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                {t.forPlumbersTeaser.desc}
              </p>

              <button
                onClick={() => onNavigate('for-plumbers')}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg hover:shadow cursor-pointer"
              >
                <span>{t.forPlumbersTeaser.cta}</span>
                <ArrowRight className="w-4 h-4 text-sky-600" />
              </button>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-slate-400">
                  Strict charter: BCE/KBO registration & insurance required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

