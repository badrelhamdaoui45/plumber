import React from 'react';
import { 
  ShieldCheck, 
  Eye, 
  Globe2, 
  Briefcase, 
  Users, 
  Heart, 
  CheckCircle, 
  Scale, 
  FileCheck2,
  Building
} from 'lucide-react';

export default function AboutUs({ t, lang }) {
  const valueIcons = {
    Trust: <ShieldCheck className="w-8 h-8 text-sky-600" />,
    Transparency: <Eye className="w-8 h-8 text-blue-600" />,
    Accessibility: <Globe2 className="w-8 h-8 text-emerald-600" />,
    Professionalism: <Briefcase className="w-8 h-8 text-amber-600" />,
    'Community support': <Users className="w-8 h-8 text-purple-600" />
  };

  return (
    <section id="about-us" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-sky-600" />
            <span>Association Identity & Commitments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.aboutUs.headline}
          </h2>
        </div>

        {/* Association Narrative Cards */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-16 space-y-6">
          <div className="border-l-4 border-sky-600 pl-6 py-2">
            <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed">
              {t.aboutUs.p1}
            </p>
          </div>

          <p className="text-base text-slate-600 leading-relaxed pl-7">
            {t.aboutUs.p2}
          </p>

          <p className="text-base text-slate-600 leading-relaxed pl-7">
            {t.aboutUs.p3}
          </p>

          {/* Belgian ASBL Registration Info Banner */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-sky-600 shrink-0" />
              <span>
                <strong>Headquarters:</strong> Rue de la Loi 155, 1040 Bruxelles
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Registration:</strong> ASBL / VZW • BCE BE 0798.541.229
              </span>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              {t.aboutUs.valuesTitle}
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              {t.aboutUs.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.aboutUs.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-sky-50 flex items-center justify-center mb-5 transition-colors">
                    {valueIcons[val.name] || <ShieldCheck className="w-7 h-7 text-sky-600" />}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {lang === 'fr' ? val.nameFr : val.name}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
