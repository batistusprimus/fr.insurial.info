'use client';

import { useMemo, useState } from 'react';

interface CyberLeadData {
  // Step 1 — Profil
  companySize: string;
  industry: string;
  location: string;
  annualRevenue: string;

  // Step 2 — Surface d'attaque
  infraCriticalSystems: string[]; // e-commerce, ERP/CRM, données sensibles, OT, etc.
  infraCloud: string[]; // AWS, Azure, GCP, OVH, On‑prem
  emailProvider: string; // Microsoft 365, Google Workspace, Autre

  // Step 3 — Mesures de sécurité
  securityMfa: string; // yes/no/partial
  securityBackupFrequency: string; // daily/weekly/monthly
  securityEndpointProtection: string; // EDR/Antivirus/Aucun
  securityEmailProtection: string; // Avancé/Basique/Aucun

  // Step 4 — Antécédents
  priorIncidents: string; // yes/no
  incidentYear?: string;
  incidentDetails?: string;
  hasIncidentResponsePlan: string; // yes/no
  currentCoverageCyber: string; // yes/no
  currentProvider?: string;

  // Step 5 — Contact
  fullName: string;
  workEmail: string;
  phone: string;
  website: string;
  gdprConsent: boolean;
}

const initialData: CyberLeadData = {
  companySize: '',
  industry: '',
  location: '',
  annualRevenue: '',

  infraCriticalSystems: [],
  infraCloud: [],
  emailProvider: '',

  securityMfa: '',
  securityBackupFrequency: '',
  securityEndpointProtection: '',
  securityEmailProtection: '',

  priorIncidents: '',
  incidentYear: '',
  incidentDetails: '',
  hasIncidentResponsePlan: '',
  currentCoverageCyber: '',
  currentProvider: '',

  fullName: '',
  workEmail: '',
  phone: '',
  website: '',
  gdprConsent: false,
};

export default function CyberMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<CyberLeadData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;
  const progress = useMemo(() => Math.round((currentStep / totalSteps) * 100), [currentStep]);

  const update = (field: keyof CyberLeadData, value: string | string[] | boolean) => {
    setForm(prev => ({ ...prev, [field]: value as any }));
    if (errors[field as string]) {
      setErrors(prev => ({ ...prev, [field as string]: '' }));
    }
  };

  const toggleMulti = (field: keyof CyberLeadData, value: string) => {
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
      if (!form.infraCriticalSystems.length) e.infraCriticalSystems = 'Sélectionnez au moins un système critique';
      if (!form.infraCloud.length) e.infraCloud = 'Sélectionnez au moins un environnement';
      if (!form.emailProvider) e.emailProvider = 'Requis';
    }
    if (step === 3) {
      if (!form.securityMfa) e.securityMfa = 'Requis';
      if (!form.securityBackupFrequency) e.securityBackupFrequency = 'Requis';
      if (!form.securityEndpointProtection) e.securityEndpointProtection = 'Requis';
      if (!form.securityEmailProtection) e.securityEmailProtection = 'Requis';
    }
    if (step === 4) {
      if (!form.priorIncidents) e.priorIncidents = 'Requis';
      if (!form.hasIncidentResponsePlan) e.hasIncidentResponsePlan = 'Requis';
      if (!form.currentCoverageCyber) e.currentCoverageCyber = 'Requis';
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
        coverageType: ['Cyber (Responsabilité cyber)'],
        source: 'fr.insurial.info/cyber',
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
    <section id="cyber-quote" className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
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
              <h2 className="text-2xl font-archivo-black text-gray-900">Profil de l’entreprise</h2>
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
                  <option value="Technologie">Technologie</option>
                  <option value="Santé">Santé</option>
                  <option value="Finance">Finance</option>
                  <option value="Industrie">Industrie</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Services professionnels">Services professionnels</option>
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
                  <option value="US">États‑Unis</option>
                  <option value="Other">Autre</option>
                </select>
                {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Chiffre d’affaires annuel *</label>
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

          {/* Step 2 — Surface d'attaque */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-archivo-black text-gray-900">Systèmes et environnements</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Systèmes critiques *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Site e‑commerce',
                    'ERP / CRM',
                    'Données clients sensibles',
                    'Données santé',
                    'Industriel / OT',
                    'Télétravail étendu',
                  ].map(opt => (
                    <label key={opt} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={form.infraCriticalSystems.includes(opt)}
                        onChange={() => toggleMulti('infraCriticalSystems', opt)}
                        className="mr-3 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                      />
                      <span className="text-sm text-gray-900">{opt}</span>
                    </label>
                  ))}
                </div>
                {errors.infraCriticalSystems && <p className="text-red-600 text-sm mt-1">{errors.infraCriticalSystems}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Cloud / Hébergement *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['AWS', 'Azure', 'GCP', 'OVH', 'On‑premise', 'Autre'].map(opt => (
                    <label key={opt} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={form.infraCloud.includes(opt)}
                        onChange={() => toggleMulti('infraCloud', opt)}
                        className="mr-3 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                      />
                      <span className="text-sm text-gray-900">{opt}</span>
                    </label>
                  ))}
                </div>
                {errors.infraCloud && <p className="text-red-600 text-sm mt-1">{errors.infraCloud}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Messagerie *</label>
                <select
                  value={form.emailProvider}
                  onChange={e => update('emailProvider', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionner</option>
                  <option value="Microsoft 365">Microsoft 365</option>
                  <option value="Google Workspace">Google Workspace</option>
                  <option value="Autre">Autre</option>
                </select>
                {errors.emailProvider && <p className="text-red-600 text-sm mt-1">{errors.emailProvider}</p>}
              </div>
            </div>
          )}

          {/* Step 3 — Mesures de sécurité */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-archivo-black text-gray-900">Mesures de sécurité</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">MFA activée pour les comptes sensibles? *</label>
                <select
                  value={form.securityMfa}
                  onChange={e => update('securityMfa', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionner</option>
                  <option value="yes">Oui</option>
                  <option value="partial">Partiellement</option>
                  <option value="no">Non</option>
                </select>
                {errors.securityMfa && <p className="text-red-600 text-sm mt-1">{errors.securityMfa}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Fréquence des sauvegardes *</label>
                <select
                  value={form.securityBackupFrequency}
                  onChange={e => update('securityBackupFrequency', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionner</option>
                  <option value="daily">Quotidienne</option>
                  <option value="weekly">Hebdomadaire</option>
                  <option value="monthly">Mensuelle</option>
                </select>
                {errors.securityBackupFrequency && <p className="text-red-600 text-sm mt-1">{errors.securityBackupFrequency}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Protection des postes *</label>
                <select
                  value={form.securityEndpointProtection}
                  onChange={e => update('securityEndpointProtection', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionner</option>
                  <option value="EDR">EDR</option>
                  <option value="Antivirus">Antivirus</option>
                  <option value="None">Aucune</option>
                </select>
                {errors.securityEndpointProtection && <p className="text-red-600 text-sm mt-1">{errors.securityEndpointProtection}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Sécurité email *</label>
                <select
                  value={form.securityEmailProtection}
                  onChange={e => update('securityEmailProtection', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionner</option>
                  <option value="Advanced">Avancée (DMARC aligné, filtrage dédié)</option>
                  <option value="Basic">Basique</option>
                  <option value="None">Aucune</option>
                </select>
                {errors.securityEmailProtection && <p className="text-red-600 text-sm mt-1">{errors.securityEmailProtection}</p>}
              </div>
            </div>
          )}

          {/* Step 4 — Antécédents */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-archivo-black text-gray-900">Antécédents et préparation</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Incidents cyber passés? *</label>
                <select
                  value={form.priorIncidents}
                  onChange={e => update('priorIncidents', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionner</option>
                  <option value="yes">Oui</option>
                  <option value="no">Non</option>
                </select>
                {errors.priorIncidents && <p className="text-red-600 text-sm mt-1">{errors.priorIncidents}</p>}
              </div>
              {form.priorIncidents === 'yes' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Année</label>
                    <input
                      type="text"
                      value={form.incidentYear || ''}
                      onChange={e => update('incidentYear', e.target.value)}
                      placeholder="ex. 2023"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Détails (optionnel)</label>
                    <input
                      type="text"
                      value={form.incidentDetails || ''}
                      onChange={e => update('incidentDetails', e.target.value)}
                      placeholder="Ransomware, fuite de données, etc."
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Plan de réponse à incident? *</label>
                <select
                  value={form.hasIncidentResponsePlan}
                  onChange={e => update('hasIncidentResponsePlan', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionner</option>
                  <option value="yes">Oui</option>
                  <option value="no">Non</option>
                </select>
                {errors.hasIncidentResponsePlan && <p className="text-red-600 text-sm mt-1">{errors.hasIncidentResponsePlan}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Couverture cyber actuelle? *</label>
                <select
                  value={form.currentCoverageCyber}
                  onChange={e => update('currentCoverageCyber', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionner</option>
                  <option value="yes">Oui</option>
                  <option value="no">Non</option>
                </select>
                {errors.currentCoverageCyber && <p className="text-red-600 text-sm mt-1">{errors.currentCoverageCyber}</p>}
              </div>
              {form.currentCoverageCyber === 'yes' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Assureur actuel (optionnel)</label>
                  <input
                    type="text"
                    value={form.currentProvider || ''}
                    onChange={e => update('currentProvider', e.target.value)}
                    placeholder="ex. AXA, Allianz"
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
                    J’accepte la <a href="/privacy" className="text-[#1E3A8A] hover:underline">Politique de confidentialité</a> et j’autorise Insurial à me contacter ainsi que ses partenaires (courtiers/assureurs) pour des offres adaptées.
                  </span>
                </label>
                {errors.gdprConsent && <p className="text-red-600 text-sm">{errors.gdprConsent}</p>}
                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600 text-sm">{errors.submit}</p>
                  </div>
                )}
                <p className="text-xs text-gray-500">Gratuit & sans obligation • Devis sous 24h • Conforme RGPD</p>
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
                  {isSubmitting ? 'Envoi…' : 'Obtenir mon devis gratuit'}
                </button>
              )}
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">Sécurisé • Rapide • Sans engagement</p>
      </div>
    </section>
  );
}


