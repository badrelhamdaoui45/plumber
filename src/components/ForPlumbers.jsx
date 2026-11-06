import React, { useState } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Target, 
  MapPin, 
  Users2, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Award,
  Sparkles
} from 'lucide-react';
import { PLUMBING_SERVICES } from '../data/communes';

export default function ForPlumbers({ t, lang }) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    businessLocation: '',
    companyNumber: '',
    yearsExperience: '5-10',
    website: '',
    servicesOffered: [
      'leak-detection',
      'blocked-pipes',
      'general-repairs'
    ]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => {
      const exists = prev.servicesOffered.includes(serviceId);
      return {
        ...prev,
        servicesOffered: exists
          ? prev.servicesOffered.filter((id) => id !== serviceId)
          : [...prev.servicesOffered, serviceId]
      };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required.";
    if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact person is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.businessLocation.trim()) newErrors.businessLocation = "Business location is required.";
    if (!formData.companyNumber.trim()) newErrors.companyNumber = "Belgian BCE/KBO number is required.";
    if (formData.servicesOffered.length === 0) newErrors.servicesOffered = "Please select at least one service offered.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const benefitIcons = [
    <TrendingUp className="w-7 h-7 text-sky-500" key="1" />,
    <Target className="w-7 h-7 text-blue-500" key="2" />,
    <MapPin className="w-7 h-7 text-emerald-500" key="3" />,
    <Users2 className="w-7 h-7 text-amber-500" key="4" />
  ];

  return (
    <section id="for-plumbers" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>Tradespeople & Installers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.forPlumbers.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.forPlumbers.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-8">
            {t.forPlumbers.benefitsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.forPlumbers.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-xs flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {benefitIcons[idx]}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Container */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-slate-50 to-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
              Charter Agreement
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-2">
              {t.forPlumbers.form.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Join Urgence Plomberie Bruxelles network. Vetted membership requires valid Belgian BCE/KBO registration.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                {t.forPlumbers.form.successTitle}
              </h4>
              <p className="text-slate-600 text-sm max-w-lg mx-auto">
                {t.forPlumbers.form.successMessage}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 underline"
                >
                  Submit another application or update information
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Name & Contact Person */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.forPlumbers.form.businessName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder={t.forPlumbers.form.businessNamePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-hidden ${
                      errors.businessName
                        ? 'border-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                    }`}
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-xs text-red-600">{errors.businessName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.forPlumbers.form.contactPerson} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    placeholder={t.forPlumbers.form.contactPersonPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-hidden ${
                      errors.contactPerson
                        ? 'border-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                    }`}
                  />
                  {errors.contactPerson && (
                    <p className="mt-1 text-xs text-red-600">{errors.contactPerson}</p>
                  )}
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.forPlumbers.form.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t.forPlumbers.form.phonePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-hidden ${
                      errors.phone
                        ? 'border-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.forPlumbers.form.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.forPlumbers.form.emailPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-hidden ${
                      errors.email
                        ? 'border-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Business Location & Company Number (BCE/KBO) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.forPlumbers.form.businessLocation} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessLocation"
                    value={formData.businessLocation}
                    onChange={handleInputChange}
                    placeholder={t.forPlumbers.form.businessLocationPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-hidden ${
                      errors.businessLocation
                        ? 'border-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                    }`}
                  />
                  {errors.businessLocation && (
                    <p className="mt-1 text-xs text-red-600">{errors.businessLocation}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.forPlumbers.form.companyNumber} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyNumber"
                    value={formData.companyNumber}
                    onChange={handleInputChange}
                    placeholder={t.forPlumbers.form.companyNumberPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-hidden ${
                      errors.companyNumber
                        ? 'border-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                    }`}
                  />
                  {errors.companyNumber && (
                    <p className="mt-1 text-xs text-red-600">{errors.companyNumber}</p>
                  )}
                </div>
              </div>

              {/* Years of Experience & Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.forPlumbers.form.yearsExperience}
                  </label>
                  <select
                    name="yearsExperience"
                    value={formData.yearsExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:border-sky-500 focus:ring-2 focus:ring-sky-200 bg-white"
                  >
                    <option value="1-3">1 - 3 years</option>
                    <option value="3-5">3 - 5 years</option>
                    <option value="5-10">5 - 10 years</option>
                    <option value="10+">Over 10 years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.forPlumbers.form.website}
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder={t.forPlumbers.form.websitePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition"
                  >
                  </input>
                </div>
              </div>

              {/* Services Offered Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  {t.forPlumbers.form.servicesOffered} <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {PLUMBING_SERVICES.map((svc) => (
                    <label
                      key={svc.id}
                      className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold cursor-pointer hover:text-sky-600 transition"
                    >
                      <input
                        type="checkbox"
                        checked={formData.servicesOffered.includes(svc.id)}
                        onChange={() => handleServiceToggle(svc.id)}
                        className="rounded border-slate-300 text-sky-600 focus:ring-sky-500 w-4 h-4 cursor-pointer"
                      />
                      <span>{lang === 'fr' ? svc.titleFr : lang === 'nl' ? svc.titleNl : svc.title}</span>
                    </label>
                  ))}
                </div>
                {errors.servicesOffered && (
                  <p className="mt-1 text-xs text-red-600">{errors.servicesOffered}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>{t.forPlumbers.form.submitting}</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>{t.forPlumbers.cta}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
