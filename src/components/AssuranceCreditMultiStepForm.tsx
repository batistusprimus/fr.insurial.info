'use client';

import { useMemo, useState } from 'react';

interface AssuranceCreditLeadData {
  // Step 1 — Profil
  companySize: string;
  industry: string;
  location: string;
  annualRevenue: string;

  // Step 2 — Activité commerciale
  salesType: string[]; // France, Export UE, Export hors UE
  averageInvoiceValue: string;
  paymentTerms: string; // 30j, 60j, 90j+
  topClientsConcentration: string; // <20%, 20-50%, >50%

  // Step 3 — Exposition
  annualCreditVolume: string;
  hasExportSales: string; // yes/no
  exportCountries?: string;
  hasPoliticalRiskExposure: string; // yes/no
  facesLatePayments: string; // yes/no

  // Step 4 — Couverture actuelle
  hasCurrentCreditInsurance: string; // yes/no
  currentProvider?: string;
  currentCoverageRate?: string; // % du CA assuré
  priorBadDebts: string; // yes/no
  badDebtDetails?: string;

  // Step 5 — Contact
  fullName: string;
  workEmail: string;
  phone: string;
  website: string;
  gdprConsent: boolean;
}

const initialData: AssuranceCreditLeadData = {
  companySize: '',
  industry: '',
  location: '',
  annualRevenue: '',

  salesType: [],
  averageInvoiceValue: '',
  paymentTerms: '',
  topClientsConcentration: '',

  annualCreditVolume: '',
  hasExportSales: '',
  exportCountries: '',
  hasPoliticalRiskExposure: '',
  facesLatePayments: '',

  hasCurrentCreditInsurance: '',
  currentProvider: '',
  currentCoverageRate: '',
  priorBadDebts: '',
  badDebtDetails: '',

  fullName: '',
  workEmail: '',
  phone: '',
  website: '',
  gdprConsent: false,
};

export default function AssuranceCreditMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<AssuranceCreditLeadData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;
  const progress = useMemo(() => Math.round((currentStep / totalSteps) * 100), [currentStep]);

  const update = (field: keyof AssuranceCreditLeadData, value: string | string[] | boolean) => {
    setForm(prev => ({ ...prev, [field]: value as any }));
    if (errors[field as string]) {
      setErrors(prev => ({ ...prev, [field as string]: '' }));
    }
  };

  const toggleMulti = (field: keyof AssuranceCreditLeadData, value: string) => {
    const current = (form[field] as string[]) || [];
    const updated = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
    update(field, updated);
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
      if (!form.salesType.length) e.salesType = 'Sélectionnez au moins un type';
      if (!form.averageInvoiceValue) e.averageInvoiceValue = 'Requis';
      if (!form.paymentTerms) e.paymentTerms = 'Requis';
      if (!form.topClientsConcentration) e.topClientsConcentration = 'Requis';
    }
    if (step === 3) {
      if (!form.annualCreditVolume) e.annualCreditVolume = 'Requis';
      if (!form.hasExportSales) e.hasExportSales = 'Requis';
      if (!form.hasPoliticalRiskExposure) e.hasPoliticalRiskExposure = 'Requis';
      if (!form.facesLatePayments) e.facesLatePayments = 'Requis';
    }
    if (step === 4) {
      if (!form.hasCurrentCreditInsurance) e.hasCurrentCreditInsurance = 'Requis';
      if (!form.priorBadDebts) e.priorBadDebts = 'Requis';
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
        coverageType: ['Assurance-crédit'],
        source: 'fr.insurial.info/assurance-credit',
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
              <option value="1-10">1-10 salariés</option>
              <option value="11-50">11-50 salariés</option>
              <option value="51-200">51-200 salariés</option>
              <option value="200+">200+ salariés</option>
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
              <option value="Manufacturing">Industrie / Fabrication</option>
              <option value="Wholesale">Commerce de gros</option>
              <option value="Services">Services B2B</option>
              <option value="Technology">Technologie</option>
              <option value="Export">Import-Export</option>
              <option value="Other">Autre</option>
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
              <option value="US">États‑Unis</option>
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
              <option value="<1M">Moins de 1 M€</option>
              <option value="1-5M">1‑5 M€</option>
              <option value="5-20M">5‑20 M€</option>
              <option value=">20M">Plus de 20 M€</option>
            </select>
            {errors.annualRevenue && <p className="text-red-600 text-sm mt-1">{errors.annualRevenue}</p>}
          </div>
        </div>
      )}

      {/* Step 2 — Activité commerciale */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Activité commerciale</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Type de ventes *</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {['Ventes France', 'Export UE', 'Export hors UE'].map(opt => (
                <label key={opt} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={form.salesType.includes(opt)}
                    onChange={() => toggleMulti('salesType', opt)}
                    className="mr-3 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span className="text-sm text-gray-900">{opt}</span>
                </label>
              ))}
            </div>
            {errors.salesType && <p className="text-red-600 text-sm mt-1">{errors.salesType}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Montant moyen des factures *</label>
            <select
              value={form.averageInvoiceValue}
              onChange={e => update('averageInvoiceValue', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="<5K">Moins de 5 K€</option>
              <option value="5K-20K">5 K€ - 20 K€</option>
              <option value="20K-100K">20 K€ - 100 K€</option>
              <option value=">100K">Plus de 100 K€</option>
            </select>
            {errors.averageInvoiceValue && <p className="text-red-600 text-sm mt-1">{errors.averageInvoiceValue}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Délais de paiement accordés *</label>
            <select
              value={form.paymentTerms}
              onChange={e => update('paymentTerms', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="30j">30 jours</option>
              <option value="60j">60 jours</option>
              <option value="90j+">90 jours ou plus</option>
            </select>
            {errors.paymentTerms && <p className="text-red-600 text-sm mt-1">{errors.paymentTerms}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Concentration clients (top 3 clients) *</label>
            <select
              value={form.topClientsConcentration}
              onChange={e => update('topClientsConcentration', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="<20%">Moins de 20% du CA</option>
              <option value="20-50%">20% - 50% du CA</option>
              <option value=">50%">Plus de 50% du CA</option>
            </select>
            {errors.topClientsConcentration && <p className="text-red-600 text-sm mt-1">{errors.topClientsConcentration}</p>}
          </div>
        </div>
      )}

      {/* Step 3 — Exposition */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Exposition au risque</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Volume de crédit client annuel *</label>
            <select
              value={form.annualCreditVolume}
              onChange={e => update('annualCreditVolume', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="<500K">Moins de 500 K€</option>
              <option value="500K-2M">500 K€ - 2 M€</option>
              <option value="2M-10M">2 M€ - 10 M€</option>
              <option value=">10M">Plus de 10 M€</option>
            </select>
            {errors.annualCreditVolume && <p className="text-red-600 text-sm mt-1">{errors.annualCreditVolume}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ventes à l\'export ? *</label>
            <select
              value={form.hasExportSales}
              onChange={e => update('hasExportSales', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non, uniquement France</option>
            </select>
            {errors.hasExportSales && <p className="text-red-600 text-sm mt-1">{errors.hasExportSales}</p>}
          </div>
          {form.hasExportSales === 'yes' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Principaux pays export (optionnel)</label>
              <input
                type="text"
                value={form.exportCountries || ''}
                onChange={e => update('exportCountries', e.target.value)}
                placeholder="ex. Allemagne, Italie, États-Unis"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Exposition à des risques politiques ? *</label>
            <select
              value={form.hasPoliticalRiskExposure}
              onChange={e => update('hasPoliticalRiskExposure', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui (pays instables, sanctions)</option>
              <option value="no">Non</option>
              <option value="unsure">Je ne sais pas</option>
            </select>
            {errors.hasPoliticalRiskExposure && <p className="text-red-600 text-sm mt-1">{errors.hasPoliticalRiskExposure}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Retards de paiement fréquents ? *</label>
            <select
              value={form.facesLatePayments}
              onChange={e => update('facesLatePayments', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui, régulièrement</option>
              <option value="occasional">Occasionnellement</option>
              <option value="no">Non, rarement</option>
            </select>
            {errors.facesLatePayments && <p className="text-red-600 text-sm mt-1">{errors.facesLatePayments}</p>}
          </div>
        </div>
      )}

      {/* Step 4 — Couverture actuelle */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Couverture actuelle</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Assurance-crédit actuelle ? *</label>
            <select
              value={form.hasCurrentCreditInsurance}
              onChange={e => update('hasCurrentCreditInsurance', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.hasCurrentCreditInsurance && <p className="text-red-600 text-sm mt-1">{errors.hasCurrentCreditInsurance}</p>}
          </div>
          {form.hasCurrentCreditInsurance === 'yes' && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Assureur actuel (optionnel)</label>
                <input
                  type="text"
                  value={form.currentProvider || ''}
                  onChange={e => update('currentProvider', e.target.value)}
                  placeholder="ex. Euler Hermes, Coface, Atradius"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">% du CA assuré (optionnel)</label>
                <input
                  type="text"
                  value={form.currentCoverageRate || ''}
                  onChange={e => update('currentCoverageRate', e.target.value)}
                  placeholder="ex. 80%"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
              </div>
            </>
          )}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Impayés passés (3 dernières années) ? *</label>
            <select
              value={form.priorBadDebts}
              onChange={e => update('priorBadDebts', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.priorBadDebts && <p className="text-red-600 text-sm mt-1">{errors.priorBadDebts}</p>}
          </div>
          {form.priorBadDebts === 'yes' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Détails (optionnel)</label>
              <textarea
                value={form.badDebtDetails || ''}
                onChange={e => update('badDebtDetails', e.target.value)}
                placeholder="Montant, contexte..."
                rows={3}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
            </div>
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

