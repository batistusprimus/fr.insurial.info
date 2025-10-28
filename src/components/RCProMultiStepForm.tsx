'use client';

import { useMemo, useState } from 'react';

interface RCProLeadData {
  // Step 1 — Profil
  companySize: string;
  industry: string;
  location: string;
  annualRevenue: string;

  // Step 2 — Activité
  mainActivity: string;
  clientTypes: string[]; // B2B, B2C, B2G
  hasContractsRequiringRCPro: string; // yes/no
  averageContractValue: string;

  // Step 3 — Exposition
  handlesClientData: string; // yes/no
  providesAdvice: string; // yes/no
  workOnClientPremises: string; // yes/no
  hasSubcontractors: string; // yes/no

  // Step 4 — Couverture actuelle
  hasCurrentRCPro: string; // yes/no
  currentProvider?: string;
  currentCoverage?: string;
  priorClaims: string; // yes/no
  claimDetails?: string;

  // Step 5 — Contact
  fullName: string;
  workEmail: string;
  phone: string;
  website: string;
  gdprConsent: boolean;
}

const initialData: RCProLeadData = {
  companySize: '',
  industry: '',
  location: 'FR',
  annualRevenue: '',

  mainActivity: '',
  clientTypes: [],
  hasContractsRequiringRCPro: '',
  averageContractValue: '',

  handlesClientData: '',
  providesAdvice: '',
  workOnClientPremises: '',
  hasSubcontractors: '',

  hasCurrentRCPro: '',
  currentProvider: '',
  currentCoverage: '',
  priorClaims: '',
  claimDetails: '',

  fullName: '',
  workEmail: '',
  phone: '',
  website: '',
  gdprConsent: false,
};

export default function RCProMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<RCProLeadData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;
  const progress = useMemo(() => Math.round((currentStep / totalSteps) * 100), [currentStep]);

  const update = (field: keyof RCProLeadData, value: string | string[] | boolean) => {
    setForm(prev => ({ ...prev, [field]: value as any }));
    if (errors[field as string]) {
      setErrors(prev => ({ ...prev, [field as string]: '' }));
    }
  };

  const toggleMulti = (field: keyof RCProLeadData, value: string) => {
    const current = (form[field] as string[]) || [];
    const updated = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
    update(field, updated);
  };

  const validateStep = (step: number): boolean => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!form.companySize) e.companySize = 'Requis';
      if (!form.industry) e.industry = 'Requis';
      if (!form.annualRevenue) e.annualRevenue = 'Requis';
    }
    if (step === 2) {
      if (!form.mainActivity) e.mainActivity = 'Requis';
      if (!form.clientTypes.length) e.clientTypes = 'Sélectionnez au moins un type';
      if (!form.hasContractsRequiringRCPro) e.hasContractsRequiringRCPro = 'Requis';
      if (!form.averageContractValue) e.averageContractValue = 'Requis';
    }
    if (step === 3) {
      if (!form.handlesClientData) e.handlesClientData = 'Requis';
      if (!form.providesAdvice) e.providesAdvice = 'Requis';
      if (!form.workOnClientPremises) e.workOnClientPremises = 'Requis';
      if (!form.hasSubcontractors) e.hasSubcontractors = 'Requis';
    }
    if (step === 4) {
      if (!form.hasCurrentRCPro) e.hasCurrentRCPro = 'Requis';
      if (!form.priorClaims) e.priorClaims = 'Requis';
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
        coverageType: ['RC Pro (Responsabilité Civile Professionnelle)'],
        source: 'fr.insurial.info/rc-pro',
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
              <option value="Technologie">Technologie</option>
              <option value="Santé">Santé</option>
              <option value="Finance">Finance</option>
              <option value="Industrie">Industrie</option>
              <option value="Commerce">Commerce</option>
              <option value="Services professionnels">Services professionnels</option>
              <option value="Conseil">Conseil</option>
              <option value="Autre">Autre</option>
            </select>
            {errors.industry && <p className="text-red-600 text-sm mt-1">{errors.industry}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Chiffre d\'affaires annuel *</label>
            <select
              value={form.annualRevenue}
              onChange={e => update('annualRevenue', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="<500K">Moins de 500 K€</option>
              <option value="500K-2M">500 K€ - 2 M€</option>
              <option value="2M-10M">2 M€ - 10 M€</option>
              <option value=">10M">Plus de 10 M€</option>
            </select>
            {errors.annualRevenue && <p className="text-red-600 text-sm mt-1">{errors.annualRevenue}</p>}
          </div>
        </div>
      )}

      {/* Step 2 — Activité */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Votre activité</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Activité principale *</label>
            <input
              type="text"
              value={form.mainActivity}
              onChange={e => update('mainActivity', e.target.value)}
              placeholder="ex. Conseil en stratégie, Développement web..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            />
            {errors.mainActivity && <p className="text-red-600 text-sm mt-1">{errors.mainActivity}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Types de clients *</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {['B2B (Entreprises)', 'B2C (Particuliers)', 'B2G (Administration)'].map(opt => (
                <label key={opt} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={form.clientTypes.includes(opt)}
                    onChange={() => toggleMulti('clientTypes', opt)}
                    className="mr-3 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span className="text-sm text-gray-900">{opt}</span>
                </label>
              ))}
            </div>
            {errors.clientTypes && <p className="text-red-600 text-sm mt-1">{errors.clientTypes}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Contrats exigeant RC Pro ? *</label>
            <select
              value={form.hasContractsRequiringRCPro}
              onChange={e => update('hasContractsRequiringRCPro', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.hasContractsRequiringRCPro && <p className="text-red-600 text-sm mt-1">{errors.hasContractsRequiringRCPro}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Valeur moyenne des contrats *</label>
            <select
              value={form.averageContractValue}
              onChange={e => update('averageContractValue', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="<10K">Moins de 10 K€</option>
              <option value="10K-50K">10 K€ - 50 K€</option>
              <option value="50K-200K">50 K€ - 200 K€</option>
              <option value=">200K">Plus de 200 K€</option>
            </select>
            {errors.averageContractValue && <p className="text-red-600 text-sm mt-1">{errors.averageContractValue}</p>}
          </div>
        </div>
      )}

      {/* Step 3 — Exposition */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Niveau d\'exposition</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Manipulez-vous des données clients sensibles ? *</label>
            <select
              value={form.handlesClientData}
              onChange={e => update('handlesClientData', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.handlesClientData && <p className="text-red-600 text-sm mt-1">{errors.handlesClientData}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Fournissez-vous des conseils ou préconisations ? *</label>
            <select
              value={form.providesAdvice}
              onChange={e => update('providesAdvice', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.providesAdvice && <p className="text-red-600 text-sm mt-1">{errors.providesAdvice}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Travaillez-vous dans les locaux de vos clients ? *</label>
            <select
              value={form.workOnClientPremises}
              onChange={e => update('workOnClientPremises', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.workOnClientPremises && <p className="text-red-600 text-sm mt-1">{errors.workOnClientPremises}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Avez-vous des sous-traitants ? *</label>
            <select
              value={form.hasSubcontractors}
              onChange={e => update('hasSubcontractors', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.hasSubcontractors && <p className="text-red-600 text-sm mt-1">{errors.hasSubcontractors}</p>}
          </div>
        </div>
      )}

      {/* Step 4 — Couverture actuelle */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Couverture actuelle</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">RC Pro actuelle ? *</label>
            <select
              value={form.hasCurrentRCPro}
              onChange={e => update('hasCurrentRCPro', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.hasCurrentRCPro && <p className="text-red-600 text-sm mt-1">{errors.hasCurrentRCPro}</p>}
          </div>
          {form.hasCurrentRCPro === 'yes' && (
            <>
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
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Montant de garantie actuel (optionnel)</label>
                <input
                  type="text"
                  value={form.currentCoverage || ''}
                  onChange={e => update('currentCoverage', e.target.value)}
                  placeholder="ex. 500 000 €"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
              </div>
            </>
          )}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sinistres passés (5 dernières années) ? *</label>
            <select
              value={form.priorClaims}
              onChange={e => update('priorClaims', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.priorClaims && <p className="text-red-600 text-sm mt-1">{errors.priorClaims}</p>}
          </div>
          {form.priorClaims === 'yes' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Détails (optionnel)</label>
              <textarea
                value={form.claimDetails || ''}
                onChange={e => update('claimDetails', e.target.value)}
                placeholder="Nature du sinistre, montant..."
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

