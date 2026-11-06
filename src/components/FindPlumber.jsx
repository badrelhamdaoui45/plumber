import React, { useState, useRef, useEffect } from 'react';
import { 
  CheckCircle2, 
  UploadCloud, 
  X, 
  MapPin, 
  AlertTriangle, 
  PhoneCall, 
  Send, 
  FileText, 
  Image as ImageIcon,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { BRUSSELS_COMMUNES, PLUMBING_SERVICES } from '../data/communes';

export default function FindPlumber({ t, lang, preselectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    problemType: preselectedService || 'leak-detection',
    urgencyLevel: 'urgent',
    description: '',
    contactMethod: 'phone',
  });

  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errors, setErrors] = useState({});

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, problemType: preselectedService }));
    }
  }, [preselectedService]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCommuneClick = (commune) => {
    setFormData((prev) => ({
      ...prev,
      location: `${commune.zip} ${commune.name.split('/')[0].trim()}`
    }));
    if (errors.location) {
      setErrors((prev) => ({ ...prev, location: null }));
    }
  };

  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit.");
        return;
      }
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.location.trim()) {
      newErrors.location = "Please enter your city or postal code in Belgium.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please provide a brief description of the plumbing issue.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      // scroll to first error
      window.scrollTo({ top: document.getElementById('find-a-plumber').offsetTop - 80, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    // Simulate association matching request processing
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setTicketId(`UPB-${new Date().getFullYear()}-${randomCode}`);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      location: '',
      problemType: 'leak-detection',
      urgencyLevel: 'urgent',
      description: '',
      contactMethod: 'phone',
    });
    setPhoto(null);
    setPhotoPreview(null);
    setSubmitted(false);
    setTicketId('');
    setErrors({});
  };

  return (
    <section id="find-a-plumber" className="py-20 bg-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header from user specs */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-200 text-sky-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-sky-700" />
            <span>Association Free Matching Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.findPlumber.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            {t.findPlumber.subtitle}
          </p>
        </div>

        {/* Confirmation State Card */}
        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t.findPlumber.confirmation.title}
              </h3>
              {/* Exact user-requested confirmation sentence */}
              <p className="text-slate-700 text-base sm:text-lg max-w-xl mx-auto font-medium">
                {t.findPlumber.confirmation.message}
              </p>
            </div>

            {/* Generated Ticket Reference Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-lg mx-auto text-left space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs uppercase font-bold text-slate-500">
                  {t.findPlumber.confirmation.ticketLabel}
                </span>
                <span className="font-mono text-base font-black text-sky-700 bg-sky-100 px-3 py-1 rounded-md">
                  {ticketId}
                </span>
              </div>

              <div className="text-xs text-slate-600 space-y-1.5">
                <p>
                  <strong className="text-slate-800">Requester:</strong> {formData.fullName} ({formData.phone})
                </p>
                <p>
                  <strong className="text-slate-800">Location:</strong> {formData.location}
                </p>
                <p>
                  <strong className="text-slate-800">Preferred Contact:</strong>{' '}
                  <span className="capitalize">{formData.contactMethod}</span>
                </p>
                {photo && (
                  <p className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Photo attached for visual diagnostics ({photo.name})</span>
                  </p>
                )}
              </div>
            </div>

            {/* Next Steps Guidance */}
            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 max-w-lg mx-auto text-left">
              <h4 className="font-bold text-sky-950 text-sm mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>{t.findPlumber.confirmation.nextStepTitle}</span>
              </h4>
              <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
                <li>{t.findPlumber.confirmation.step1}</li>
                <li>{t.findPlumber.confirmation.step2}</li>
                <li>{t.findPlumber.confirmation.step3}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-sky-200/60 text-[11px] text-amber-900 font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{t.findPlumber.confirmation.emergencyNote}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={resetForm}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl text-sm transition"
              >
                {t.findPlumber.confirmation.newRequestBtn}
              </button>
            </div>
          </div>
        ) : (
          /* Request Form */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.findPlumber.form.fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={t.findPlumber.form.fullNamePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-hidden ${
                      errors.fullName
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.findPlumber.form.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t.findPlumber.form.phonePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-hidden ${
                      errors.phone
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.findPlumber.form.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.findPlumber.form.emailPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-hidden ${
                      errors.email
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.findPlumber.form.location} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder={t.findPlumber.form.locationPlaceholder}
                      className={`w-full px-4 py-3 pr-10 rounded-xl border text-sm transition focus:outline-hidden ${
                        errors.location
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                      }`}
                    />
                    <MapPin className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.location && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.location}</p>
                  )}
                </div>
              </div>

              {/* Quick Commune Selector Pills */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <p className="text-xs font-bold text-slate-700 mb-2">
                  {t.findPlumber.form.quickSelectCommunes}
                </p>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                  {BRUSSELS_COMMUNES.slice(0, 10).map((commune) => (
                    <button
                      key={commune.zip}
                      type="button"
                      onClick={() => handleCommuneClick(commune)}
                      className="px-2.5 py-1 text-xs bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 rounded-lg text-slate-700 transition"
                    >
                      {commune.zip} {commune.name.split('/')[0].trim()}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleCommuneClick({ zip: '1180', name: 'Uccle' })}
                    className="px-2.5 py-1 text-xs bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 rounded-lg text-slate-700 transition"
                  >
                    1180 Uccle
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCommuneClick({ zip: '1200', name: 'Woluwe-St-Lambert' })}
                    className="px-2.5 py-1 text-xs bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 rounded-lg text-slate-700 transition"
                  >
                    1200 Woluwe-St-Lambert
                  </button>
                </div>
              </div>

              {/* Problem Type & Urgency Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.findPlumber.form.problemType}
                  </label>
                  <select
                    name="problemType"
                    value={formData.problemType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition bg-white"
                  >
                    {PLUMBING_SERVICES.map((svc) => (
                      <option key={svc.id} value={svc.id}>
                        {lang === 'fr' ? svc.titleFr : lang === 'nl' ? svc.titleNl : svc.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {t.findPlumber.form.urgencyLevel}
                  </label>
                  <select
                    name="urgencyLevel"
                    value={formData.urgencyLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition bg-white"
                  >
                    <option value="urgent">{t.findPlumber.form.urgencyUrgent}</option>
                    <option value="today">{t.findPlumber.form.urgencyToday}</option>
                    <option value="standard">{t.findPlumber.form.urgencyStandard}</option>
                    <option value="quote">{t.findPlumber.form.urgencyQuote}</option>
                  </select>
                </div>
              </div>

              {/* Describe Your Problem */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  {t.findPlumber.form.description} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder={t.findPlumber.form.descriptionPlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-hidden ${
                    errors.description
                      ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                      : 'border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                  }`}
                />
                {errors.description && (
                  <p className="mt-1.5 text-xs text-red-600">{errors.description}</p>
                )}
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  {t.findPlumber.form.contactMethod}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['phone', 'whatsapp', 'email', 'sms'].map((method) => (
                    <label
                      key={method}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold cursor-pointer transition ${
                        formData.contactMethod === method
                          ? 'border-sky-600 bg-sky-50 text-sky-700 shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="capitalize">
                        {t.findPlumber.form.contactOptions[method]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Upload a Photo (Optional) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  {t.findPlumber.form.uploadPhoto}
                </label>
                <p className="text-xs text-slate-500 mb-3">
                  {t.findPlumber.form.uploadPhotoHint}
                </p>

                {photoPreview ? (
                  <div className="relative rounded-2xl border border-sky-200 bg-sky-50/50 p-4 flex items-center gap-4">
                    <img
                      src={photoPreview}
                      alt="Uploaded preview"
                      className="w-20 h-20 object-cover rounded-xl border border-sky-300 shadow-xs"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">{photo?.name}</p>
                      <p className="text-xs text-slate-500">
                        {(photo?.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemovePhoto}
                      className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                      title={t.findPlumber.form.removeFile}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-sky-400 rounded-2xl p-6 text-center cursor-pointer transition hover:bg-sky-50/30"
                  >
                    <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-slate-700">
                      {t.findPlumber.form.dropFile}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">PNG, JPG, HEIC up to 10MB</p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoSelect}
                      className="hidden"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-extrabold py-4 px-8 rounded-xl shadow-lg shadow-sky-600/25 transition-all text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>{t.findPlumber.form.submitting}</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t.findPlumber.form.submit}</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-3">
                  Urgence Plomberie Bruxelles is a non-profit association. Connecting you with a professional is 100% free of agency commission.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
