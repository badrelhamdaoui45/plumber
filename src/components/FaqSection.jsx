import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Star, Quote } from 'lucide-react';

export default function FaqSection({ lang }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      qEn: "Is connecting with a plumber through the association free of charge?",
      qFr: "La mise en relation par l'association est-elle gratuite ?",
      qNl: "Is het in contact komen met een loodgieter via de vereniging gratis?",
      aEn: "Yes, 100% free for households. As a non-profit association (ASBL), our role is to connect you directly with registered, ethical plumbing professionals. You pay only for the actual work performed by the plumber with a prior estimate.",
      aFr: "Oui, totalement gratuit pour les particuliers. En tant qu'ASBL d'intérêt général, notre mission est de vous orienter sans commission d'agence vers un artisan vérifié. Vous ne réglez que les travaux convenus selon devis préalable.",
      aNl: "Ja, volledig gratis voor gezinnen. Als vereniging zonder winstoogmerk (VZW) brengen wij u kosteloos in contact met betrouwbare loodgieters. U betaalt uitsluitend de afgesproken werkzaamheden rechtstreeks aan de vakman."
    },
    {
      qEn: "How quickly can a plumber arrive in Brussels for an emergency?",
      qFr: "En combien de temps un plombier intervient-il à Bruxelles pour une urgence ?",
      qNl: "Hoe snel kan een loodgieter in Brussel ter plaatse zijn bij een spoedgeval?",
      aEn: "Our network covers all 19 Brussels municipalities (Ixelles, Schaerbeek, Uccle, etc.) with an average emergency response time of under 45 minutes for critical leaks and drain overflows.",
      aFr: "Notre réseau couvre l'ensemble des 19 communes de Bruxelles (Ixelles, Schaerbeek, Uccle, etc.) avec un délai moyen de 30 à 45 minutes pour les fuites majeures ou canalisations bouchées.",
      aNl: "Ons netwerk bestrijkt alle 19 Brusselse gemeenten met een gemiddelde responstijd van minder dan 45 minuten voor ernstige lekkages en verstoppingen."
    },
    {
      qEn: "How are the member plumbers vetted?",
      qFr: "Comment les plombiers membres sont-ils vérifiés ?",
      qNl: "Hoe worden de aangesloten loodgieters gecontroleerd?",
      aEn: "Every professional must hold an active BCE/KBO enterprise registration in Belgium, provide valid civil liability insurance (RC Professionnelle), sign our transparency charter, and maintain an ongoing customer satisfaction rating above 90%.",
      aFr: "Chaque professionnel doit posséder un numéro BCE actif en Belgique, une assurance Responsabilité Civile Professionnelle à jour, signer notre charte de déontologie et maintenir un score de satisfaction supérieur à 90%.",
      aNl: "Elke loodgieter moet beschikken over een actief Belgisch KBO-nummer, een geldige beroepsaansprakelijkheidsverzekering, ons transparantiehandvest ondertekenen en een klanttevredenheid boven 90% behouden."
    },
    {
      qEn: "Under Belgian law, who pays for plumbing repairs: tenant or landlord?",
      qFr: "Selon la loi belge, qui paie la réparation : locataire ou propriétaire ?",
      qNl: "Wie betaalt volgens de Belgische wet: de huurder of de verhuurder?",
      aEn: "Generally in Belgium, minor routine maintenance and blockages caused by daily use (e.g., tap washers, hair in siphons) are the tenant's responsibility. Structural pipe degradation, boiler replacements, and wear-and-tear fall under the owner's responsibility.",
      aFr: "En règle générale en Belgique, les petits entretiens et débouchages courants relèvent du locataire. Les réparations lourdes (remplacement de chaudière, vétusté des canalisations d'immeuble) incombent au propriétaire.",
      aNl: "Over het algemeen in België zijn klein onderhoud en dagelijkse verstoppingen voor rekening van de huurder. Structurele gebreken, vervanging van boilers en slijtage vallen onder de verantwoordelijkheid van de verhuurder."
    }
  ];

  const testimonials = [
    {
      quote: "A water pipe burst in our apartment in Ixelles on a Sunday evening. Urgence Plomberie Bruxelles connected us with a technician who arrived in 35 minutes and fixed the leak cleanly.",
      author: "Sophie V. & Marc D.",
      commune: "1050 Ixelles",
      rating: 5
    },
    {
      quote: "Clear pricing from the beginning with no nasty surprises. It is reassuring to have an association defending transparency in Brussels plumbing.",
      author: "Thomas B.",
      commune: "1030 Schaerbeek",
      rating: 5
    },
    {
      quote: "Professional boiler maintenance certificate provided on the same day. Great initiative for Belgian households.",
      author: "Elena K.",
      commune: "1180 Uccle",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
              Verified Feedback
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Trusted by Households in Brussels & Belgium
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">{t.author}</span>
                  <span className="text-sky-700 font-medium bg-sky-50 px-2 py-0.5 rounded">
                    {t.commune}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Clear information for peace of mind.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const q = lang === 'fr' ? faq.qFr : lang === 'nl' ? faq.qNl : faq.qEn;
              const a = lang === 'fr' ? faq.aFr : lang === 'nl' ? faq.aNl : faq.aEn;
              const isOpen = openIdx === idx;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-sky-600 transition cursor-pointer"
                  >
                    <span>{q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-sky-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                      {a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

