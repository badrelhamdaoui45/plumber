import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export default function ContactSection({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'assistance',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-200 text-sky-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-sky-700" />
            <span>Association Helpdesk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.contact.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {t.contact.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Urgence Plomberie Bruxelles
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href={`mailto:${t.contact.emailValue}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-sky-600 transition break-all"
                  >
                    {t.contact.emailValue}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Average response: within 2 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t.contact.phoneLabel}
                  </p>
                  <a
                    href="tel:+3228804577"
                    className="text-base font-extrabold text-slate-900 hover:text-red-600 transition"
                  >
                    {t.contact.phoneValue}
                  </a>
                  <p className="text-xs text-red-600 font-semibold mt-0.5">
                    {t.contact.emergencyPhoneValue}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t.contact.addressLabel}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 leading-snug">
                    {t.contact.addressValue}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    European Quarter / Schuman • 1040 Bruxelles
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t.contact.hoursLabel}
                  </p>
                  <p className="text-xs font-medium text-slate-700 mt-1">
                    {t.contact.hoursOffice}
                  </p>
                  <p className="text-xs font-bold text-emerald-700 mt-1">
                    {t.contact.hoursEmergency}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Map preview representation */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Brussels Capital Office
                </span>
                <span className="text-xs text-slate-400 font-mono">1040 Etterbeek / Bruxelles</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Our central association office coordinates plumbing dispatch for all 19 Brussels municipalities and neighboring Brabant regions.
              </p>
              <a
                href="https://maps.google.com/?q=Rue+de+la+Loi+155+1040+Bruxelles"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-white transition"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Our Team Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {t.contact.cta}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Send us an inquiry and our coordinators will reach out immediately.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-950">
                  {t.contact.formSuccess}
                </h4>
                <p className="text-xs text-emerald-800">
                  We have forwarded your note to the Brussels secretariat. We will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'assistance', message: '' });
                  }}
                  className="mt-3 px-4 py-2 bg-white text-emerald-800 font-bold text-xs rounded-lg border border-emerald-300 shadow-xs hover:bg-emerald-100 transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t.contact.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Pierre Lambert"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t.contact.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. p.lambert@example.be"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.contact.formSubject}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition bg-white"
                  >
                    <option value="assistance">Need assistance finding a plumber</option>
                    <option value="membership">Want to become a member plumber</option>
                    <option value="question">General question or feedback</option>
                    <option value="partnership">Association partnership / Commune request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.contact.formMessage} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you today?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-sky-600/20 text-sm transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : t.contact.cta}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
