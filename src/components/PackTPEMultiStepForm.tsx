'use client';

import { useMemo, useState } from 'react';

interface PackTPELeadData {
  // Step 1 — Profil
  companySize: string;
  industry: string;
  location: string;
  annualRevenue: string;

  // Step 2 — Besoins
  needsRCPro: string; // yes/no
  needsMultirisque: string; // yes/no
  needsCyber: string; // yes/no
  needsFlotte: string; // yes/no
  otherNeeds: string;

  // Step 3 — Situation actuelle
  hasPhysicalPremises: string; // yes/no
  numberOfEmployees: string;
  hasVehicles: string; // yes/no
  numberOfVehicles?: string;

  // Step 4 — Couverture actuelle
  hasCurrentInsurance: string; // yes/no
  currentProvider?: string;
  renewalDate?: string;
  currentBudget?: string;

  // Step 5 — Contact
  fullName: string;
  workEmail: string;
  phone: string;
  website: string;
  gdprConsent: boolean;
}

const initialData: PackTPELeadData = {
  companySize: '',
  industry: '',
  location: '',
  annualRevenue: '',

  needsRCPro: '',
  needsMultirisque: '',
  needsCyber: '',
  needsFlotte: '',
  otherNeeds: '',

  hasPhysicalPremises: '',
  numberOfEmployees: '',
  hasVehicles: '',
  numberOfVehicles: '',

  hasCurrentInsurance: '',
  currentProvider: '',
  renewalDate: '',
  currentBudget: '',

  fullName: '',
  workEmail: '',
  phone: '',
  website: '',
  gdprConsent: false,
};

export default function PackTPEMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<PackTPELeadData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;
  const progress = useMemo(() => Math.round((currentStep / totalSteps) * 100), [currentStep]);

  const update = (field: keyof PackTPELeadData, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field as string]) {
      setErrors(prev => ({ ...prev, [field as string]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!form.companySize) e.companySize = 'Requis';
      if (!form.industry) e.industry = 'Requis';
      if (!form.location) e.location = 'Requis';
      if (!form.annualRevenue) e.annualRevenue = 'Requis';
    }
    if (step === 2) {
      if (!form.needsRCPro) e.needsRCPro = 'Requis';
      if (!form.needsMultirisque) e.needsMultirisque = 'Requis';
      if (!form.needsCyber) e.needsCyber = 'Requis';
      if (!form.needsFlotte) e.needsFlotte = 'Requis';
    }
    if (step === 3) {
      if (!form.hasPhysicalPremises) e.hasPhysicalPremises = 'Requis';
      if (!form.numberOfEmployees) e.numberOfEmployees = 'Requis';
      if (!form.hasVehicles) e.hasVehicles = 'Requis';
    }
    if (step === 4) {
      if (!form.hasCurrentInsurance) e.hasCurrentInsurance = 'Requis';
    }
    if (step === 5) {
      if (!form.fullName) e.fullName = 'Requis';
      if (!form.workEmail) {
        e.workEmail = 'Requis';
      } else if (
        !form.workEmail.includes('@') ||
        form.workEmail.includes('@gmail.') ||
        form.workEmail.includes('@yahoo.') ||
        form.workEmail.includes('@hotmail.') ||
        form.workEmail.includes('@outlook.')
      ) {
        e.workEmail = 'Utilisez un email professionnel';
      }
      if (!form.phone) e.phone = 'Requis';
      if (!form.gdprConsent) e.gdprConsent = 'Consentement requis';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep(currentStep)) setCurrentStep(s => s + 1);
  };
  const back = () => setCurrentStep(s => s - 1);

  const handleSubmit = async () => {
    if (!validateStep(5)) return;
    setIsSubmitting(true);
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utm = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_adset: urlParams.get('utm_adset') || '',
        utm_ad: urlParams.get('utm_ad') || '',
      };

      const payload = {
        ...form,
        coverageType: ['Pack TPE / Multirisque Pro complète'],
        source: 'fr.insurial.info/pack-tpe',
        ...utm,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      };

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Submit failed');
      window.location.href = '/thank-you';
    } catch (err) {
      setErrors(prev => ({ ...prev, submit: "Une erreur est survenue. Merci de réessayer." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border p-6 md:p-8">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3, 4, 5].map(step => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step <= currentStep ? 'bg-[#1E3A8A] text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-[#1E3A8A] h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Step 1 — Profil */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Profil de l\'entreprise</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Taille *</label>
            <select
              value={form.companySize}
              onChange={e => update('companySize', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="1-3">1-3 salariés</option>
              <option value="4-9">4-9 salariés</option>
              <option value="10-20">10-20 salariés</option>
            </select>
            {errors.companySize && <p className="text-red-600 text-sm mt-1">{errors.companySize}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Secteur *</label>
            <select
              value={form.industry}
              onChange={e => update('industry', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="Commerce">Commerce / Retail</option>
              <option value="Services">Services professionnels</option>
              <option value="Artisanat">Artisanat</option>
              <option value="Restauration">Restauration</option>
              <option value="Santé">Santé / Bien-être</option>
              <option value="Autre">Autre</option>
            </select>
            {errors.industry && <p className="text-red-600 text-sm mt-1">{errors.industry}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Localisation *</label>
            <select
              value={form.location}
              onChange={e => update('location', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="FR">France</option>
              <option value="EU">Union européenne (hors FR)</option>
              <option value="UK">Royaume‑Uni</option>
              <option value="Other">Autre</option>
            </select>
            {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Chiffre d\'affaires annuel *</label>
            <select
              value={form.annualRevenue}
              onChange={e => update('annualRevenue', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="<100K">Moins de 100 K€</option>
              <option value="100K-500K">100 K€ - 500 K€</option>
              <option value="500K-1M">500 K€ - 1 M€</option>
              <option value="1M-2M">1 M€ - 2 M€</option>
            </select>
            {errors.annualRevenue && <p className="text-red-600 text-sm mt-1">{errors.annualRevenue}</p>}
          </div>
        </div>
      )}

      {/* Step 2 — Besoins */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Vos besoins de couverture</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">RC Professionnelle *</label>
            <select
              value={form.needsRCPro}
              onChange={e => update('needsRCPro', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui, essentiel</option>
              <option value="no">Non nécessaire</option>
              <option value="unsure">Je ne sais pas</option>
            </select>
            {errors.needsRCPro && <p className="text-red-600 text-sm mt-1">{errors.needsRCPro}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Multirisque (locaux, biens) *</label>
            <select
              value={form.needsMultirisque}
              onChange={e => update('needsMultirisque', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui, essentiel</option>
              <option value="no">Non nécessaire</option>
              <option value="unsure">Je ne sais pas</option>
            </select>
            {errors.needsMultirisque && <p className="text-red-600 text-sm mt-1">{errors.needsMultirisque}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Cyber-risques *</label>
            <select
              value={form.needsCyber}
              onChange={e => update('needsCyber', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui, important</option>
              <option value="no">Non nécessaire</option>
              <option value="unsure">Je ne sais pas</option>
            </select>
            {errors.needsCyber && <p className="text-red-600 text-sm mt-1">{errors.needsCyber}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Flotte automobile *</label>
            <select
              value={form.needsFlotte}
              onChange={e => update('needsFlotte', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui, j\'ai des véhicules pros</option>
              <option value="no">Non</option>
            </select>
            {errors.needsFlotte && <p className="text-red-600 text-sm mt-1">{errors.needsFlotte}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Autres besoins spécifiques (optionnel)</label>
            <textarea
              value={form.otherNeeds}
              onChange={e => update('otherNeeds', e.target.value)}
              placeholder="ex. Protection juridique, marchandises transportées..."
              rows={2}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            />
          </div>
        </div>
      )}

      {/* Step 3 — Situation actuelle */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Votre situation</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Locaux physiques ? *</label>
            <select
              value={form.hasPhysicalPremises}
              onChange={e => update('hasPhysicalPremises', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non (100% remote/domicile)</option>
            </select>
            {errors.hasPhysicalPremises && <p className="text-red-600 text-sm mt-1">{errors.hasPhysicalPremises}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre de salariés *</label>
            <select
              value={form.numberOfEmployees}
              onChange={e => update('numberOfEmployees', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="0">0 (indépendant)</option>
              <option value="1-3">1-3 salariés</option>
              <option value="4-9">4-9 salariés</option>
              <option value="10+">10+ salariés</option>
            </select>
            {errors.numberOfEmployees && <p className="text-red-600 text-sm mt-1">{errors.numberOfEmployees}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Véhicules professionnels ? *</label>
            <select
              value={form.hasVehicles}
              onChange={e => update('hasVehicles', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.hasVehicles && <p className="text-red-600 text-sm mt-1">{errors.hasVehicles}</p>}
          </div>
          {form.hasVehicles === 'yes' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre de véhicules (optionnel)</label>
              <input
                type="text"
                value={form.numberOfVehicles || ''}
                onChange={e => update('numberOfVehicles', e.target.value)}
                placeholder="ex. 2"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
            </div>
          )}
        </div>
      )}

      {/* Step 4 — Couverture actuelle */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Couverture actuelle</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Assurance(s) actuelle(s) ? *</label>
            <select
              value={form.hasCurrentInsurance}
              onChange={e => update('hasCurrentInsurance', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non, première souscription</option>
            </select>
            {errors.hasCurrentInsurance && <p className="text-red-600 text-sm mt-1">{errors.hasCurrentInsurance}</p>}
          </div>
          {form.hasCurrentInsurance === 'yes' && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Assureur(s) actuel(s) (optionnel)</label>
                <input
                  type="text"
                  value={form.currentProvider || ''}
                  onChange={e => update('currentProvider', e.target.value)}
                  placeholder="ex. AXA, Allianz"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date de renouvellement (optionnel)</label>
                <input
                  type="text"
                  value={form.renewalDate || ''}
                  onChange={e => update('renewalDate', e.target.value)}
                  placeholder="ex. Mars 2025"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget actuel total (optionnel)</label>
                <input
                  type="text"
                  value={form.currentBudget || ''}
                  onChange={e => update('currentBudget', e.target.value)}
                  placeholder="ex. 3 000 € / an"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
              </div>
            </>
          )}
        </div>
      )}

      {/* Step 5 — Contact */}
      {currentStep === 5 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Contact et consentement</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
            <input
              type="text"
              value={form.fullName}
              onChange={e => update('fullName', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            />
            {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email professionnel *</label>
            <input
              type="email"
              value={form.workEmail}
              onChange={e => update('workEmail', e.target.value)}
              placeholder="nom@entreprise.com"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            />
            {errors.workEmail && <p className="text-red-600 text-sm mt-1">{errors.workEmail}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
            <input
              type="tel"
              value={form.phone}
              onChange={e => update('phone', e.target.value)}
              placeholder="+33 6 12 34 56 78"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Site web (optionnel)</label>
            <input
              type="url"
              value={form.website}
              onChange={e => update('website', e.target.value)}
              placeholder="https://votre-entreprise.com"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={form.gdprConsent}
                onChange={e => update('gdprConsent', e.target.checked)}
                className="mt-1 text-[#1E3A8A] focus:ring-[#1E3A8A]"
              />
              <span className="text-sm text-gray-600">
                J\'accepte la <a href="/privacy" className="text-[#1E3A8A] hover:underline">Politique de confidentialité</a> et j\'autorise Insurial à :
                <br />• Me fournir des informations adaptées à mon profil
                <br />• Transmettre mes coordonnées à des partenaires (courtiers, assureurs) pour qu\'ils me contactent avec des propositions commerciales
                <br />• M\'envoyer des ressources pédagogiques par email *
              </span>
            </label>
            {errors.gdprConsent && <p className="text-red-600 text-sm">{errors.gdprConsent}</p>}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{errors.submit}</p>
              </div>
            )}
            <p className="text-xs text-gray-500">Gratuit & sans obligation • Mise en relation sous 24h • Conforme RGPD</p>
          </div>
        </div>
      )}

      {/* Nav */}
      <div className="flex justify-between mt-8 pt-6 border-t">
        {currentStep > 1 && (
          <button onClick={back} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Retour
          </button>
        )}
        <div className="ml-auto">
          {currentStep < totalSteps ? (
            <button onClick={next} className="px-6 py-2 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800 transition-colors">
              Continuer
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-8 py-3 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {isSubmitting ? 'Envoi…' : 'Envoyer mon questionnaire'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

