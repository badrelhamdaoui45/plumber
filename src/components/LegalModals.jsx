import React from 'react';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';

export default function LegalModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {activeModal === 'privacy' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Privacy Policy (RGPD / GDPR)</h3>
                <p className="text-xs text-slate-500">Urgence Plomberie Bruxelles ASBL • Updated 2026</p>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-3 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              <h4 className="font-bold text-slate-900 text-sm">1. Data Controller</h4>
              <p>
                The data controller is the non-profit association <strong>Urgence Plomberie Bruxelles (ASBL)</strong>, 
                having its registered office at Rue de la Loi 155, 1040 Bruxelles, registered under BCE / CBE number BE 0798.541.229.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">2. Purpose of Personal Data Collection</h4>
              <p>
                Personal information collected through the "Find a Plumber" request form (full name, phone number, email address, postal code, description, and optional photo) is strictly processed to connect you with an available plumbing professional in Belgium and coordinate emergency or scheduled interventions.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">3. Legal Basis</h4>
              <p>
                Processing is based on your explicit consent and pre-contractual steps taken at your request (Art. 6(1)(b) of the GDPR).
              </p>

              <h4 className="font-bold text-slate-900 text-sm">4. Data Sharing & Security</h4>
              <p>
                Your contact details are solely communicated to the verified member plumber assigned to your request. We never sell, rent, or monetize personal data for marketing purposes.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">5. Your Rights</h4>
              <p>
                In accordance with Belgian and EU regulations, you have the right to access, rectify, or request deletion of your personal data at any time by contacting our Data Protection Officer at: <strong>privacy@urgenceplomberiebruxelles.be</strong>.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition"
              >
                Close Privacy Policy
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Legal Notice (Mentions Légales)</h3>
                <p className="text-xs text-slate-500">Statuts & Mentions Réglementaires Belges</p>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-3 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              <h4 className="font-bold text-slate-900 text-sm">1. Identification of the Association</h4>
              <p>
                <strong>Name:</strong> Urgence Plomberie Bruxelles<br />
                <strong>Legal Form:</strong> Association Sans But Lucratif (ASBL) / Vereniging Zonder Winstoogmerk (VZW)<br />
                <strong>Registered Office:</strong> Rue de la Loi 155, 1040 Bruxelles, Belgium<br />
                <strong>Company Register (BCE / KBO):</strong> BE 0798.541.229<br />
                <strong>Competent Enterprise Court:</strong> Tribunal de l'entreprise francophone de Bruxelles
              </p>

              <h4 className="font-bold text-slate-900 text-sm">2. Purpose & Status</h4>
              <p>
                Urgence Plomberie Bruxelles is a non-profit association operating to facilitate communication, transparency, and reliable connections between Belgian residents and registered plumbing professionals. The association does not act as a commercial middleman or subcontractor.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">3. Independence of Craftspeople</h4>
              <p>
                Plumbers affiliated with the network are independent registered professionals (SRL, BV, or independent sole proprietors) operating under their own professional civil liability insurance and BCE registrations.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">4. Contact & Editorial Responsibility</h4>
              <p>
                Responsible publisher: Secretariat Urgence Plomberie Bruxelles ASBL<br />
                Contact: contact@urgenceplomberiebruxelles.be | Phone: +32 (0)2 880 45 77
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition"
              >
                Close Legal Notice
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

