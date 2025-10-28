'use client';

import { useMemo, useState } from 'react';

interface ATMPLeadData {
  // Step 1 — Profil
  companySize: string;
  industry: string;
  location: string;
  numberOfEmployees: string;

  // Step 2 — Activité & risques
  activityType: string;
  hasManualWork: string; // yes/no
  hasHeavyMachinery: string; // yes/no
  hasChemicalProducts: string; // yes/no
  workEnvironment: string[]; // Bureau, Chantier, Atelier, Route, Client

  // Step 3 — Prévention
  hasDUERP: string; // yes/no (Document Unique d'Évaluation des Risques)
  hasWorkAccidentTraining: string; // yes/no
  providesProtectiveEquipment: string; // yes/no
  hasOccupationalHealthService: string; // yes/no

  // Step 4 — Historique
  priorWorkAccidents: string; // yes/no
  accidentDetails?: string;
  hasCurrentATMP: string; // yes/no
  currentProvider?: string;

  // Step 5 — Contact
  fullName: string;
  workEmail: string;
  phone: string;
  website: string;
  gdprConsent: boolean;
}

const initialData: ATMPLeadData = {
  companySize: '',
  industry: '',
  location: 'FR',
  numberOfEmployees: '',

  activityType: '',
  hasManualWork: '',
  hasHeavyMachinery: '',
  hasChemicalProducts: '',
  workEnvironment: [],

  hasDUERP: '',
  hasWorkAccidentTraining: '',
  providesProtectiveEquipment: '',
  hasOccupationalHealthService: '',

  priorWorkAccidents: '',
  accidentDetails: '',
  hasCurrentATMP: '',
  currentProvider: '',

  fullName: '',
  workEmail: '',
  phone: '',
  website: '',
  gdprConsent: false,
};

export default function ATMPMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<ATMPLeadData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;
  const progress = useMemo(() => Math.round((currentStep / totalSteps) * 100), [currentStep]);

  const update = (field: keyof ATMPLeadData, value: string | string[] | boolean) => {
    setForm(prev => ({ ...prev, [field]: value as any }));
    if (errors[field as string]) {
      setErrors(prev => ({ ...prev, [field as string]: '' }));
    }
  };

  const toggleMulti = (field: keyof ATMPLeadData, value: string) => {
    const current = (form[field] as string[]) || [];
    const updated = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
    update(field, updated);
  };

  const validateStep = (step: number): boolean => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!form.companySize) e.companySize = 'Requis';
      if (!form.industry) e.industry = 'Requis';
      if (!form.numberOfEmployees) e.numberOfEmployees = 'Requis';
    }
    if (step === 2) {
      if (!form.activityType) e.activityType = 'Requis';
      if (!form.hasManualWork) e.hasManualWork = 'Requis';
      if (!form.hasHeavyMachinery) e.hasHeavyMachinery = 'Requis';
      if (!form.hasChemicalProducts) e.hasChemicalProducts = 'Requis';
      if (!form.workEnvironment.length) e.workEnvironment = 'Sélectionnez au moins un environnement';
    }
    if (step === 3) {
      if (!form.hasDUERP) e.hasDUERP = 'Requis';
      if (!form.hasWorkAccidentTraining) e.hasWorkAccidentTraining = 'Requis';
      if (!form.providesProtectiveEquipment) e.providesProtectiveEquipment = 'Requis';
      if (!form.hasOccupationalHealthService) e.hasOccupationalHealthService = 'Requis';
    }
    if (step === 4) {
      if (!form.priorWorkAccidents) e.priorWorkAccidents = 'Requis';
      if (!form.hasCurrentATMP) e.hasCurrentATMP = 'Requis';
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
        coverageType: ['AT/MP (accidents du travail)'],
        source: 'fr.insurial.info/at-mp',
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
              <option value="Construction">Construction / BTP</option>
              <option value="Industrie">Industrie / Fabrication</option>
              <option value="Transport">Transport / Logistique</option>
              <option value="Services">Services</option>
              <option value="Santé">Santé / Médical</option>
              <option value="Autre">Autre</option>
            </select>
            {errors.industry && <p className="text-red-600 text-sm mt-1">{errors.industry}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre de salariés *</label>
            <select
              value={form.numberOfEmployees}
              onChange={e => update('numberOfEmployees', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="1-5">1-5 salariés</option>
              <option value="6-20">6-20 salariés</option>
              <option value="21-50">21-50 salariés</option>
              <option value="50+">Plus de 50 salariés</option>
            </select>
            {errors.numberOfEmployees && <p className="text-red-600 text-sm mt-1">{errors.numberOfEmployees}</p>}
          </div>
        </div>
      )}

      {/* Step 2 — Activité & risques */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Nature de l\'activité</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Type d\'activité *</label>
            <select
              value={form.activityType}
              onChange={e => update('activityType', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="Bureautique">Bureautique (faible risque)</option>
              <option value="Commercial">Commercial / Vente</option>
              <option value="Manuel">Manuel / Artisanat</option>
              <option value="Industriel">Industriel / Production</option>
              <option value="BTP">BTP / Chantiers</option>
            </select>
            {errors.activityType && <p className="text-red-600 text-sm mt-1">{errors.activityType}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Travail manuel répétitif ? *</label>
            <select
              value={form.hasManualWork}
              onChange={e => update('hasManualWork', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.hasManualWork && <p className="text-red-600 text-sm mt-1">{errors.hasManualWork}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Utilisation de machines lourdes ? *</label>
            <select
              value={form.hasHeavyMachinery}
              onChange={e => update('hasHeavyMachinery', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.hasHeavyMachinery && <p className="text-red-600 text-sm mt-1">{errors.hasHeavyMachinery}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Manipulation de produits chimiques ? *</label>
            <select
              value={form.hasChemicalProducts}
              onChange={e => update('hasChemicalProducts', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.hasChemicalProducts && <p className="text-red-600 text-sm mt-1">{errors.hasChemicalProducts}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Environnements de travail *</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Bureau', 'Chantier', 'Atelier', 'Route', 'Chez le client'].map(opt => (
                <label key={opt} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={form.workEnvironment.includes(opt)}
                    onChange={() => toggleMulti('workEnvironment', opt)}
                    className="mr-3 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span className="text-sm text-gray-900">{opt}</span>
                </label>
              ))}
            </div>
            {errors.workEnvironment && <p className="text-red-600 text-sm mt-1">{errors.workEnvironment}</p>}
          </div>
        </div>
      )}

      {/* Step 3 — Prévention */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Mesures de prévention</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">DUERP à jour ? *</label>
            <select
              value={form.hasDUERP}
              onChange={e => update('hasDUERP', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
              <option value="unsure">Je ne sais pas</option>
            </select>
            {errors.hasDUERP && <p className="text-red-600 text-sm mt-1">{errors.hasDUERP}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Formations sécurité au travail ? *</label>
            <select
              value={form.hasWorkAccidentTraining}
              onChange={e => update('hasWorkAccidentTraining', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui, régulièrement</option>
              <option value="partial">Partiellement</option>
              <option value="no">Non</option>
            </select>
            {errors.hasWorkAccidentTraining && <p className="text-red-600 text-sm mt-1">{errors.hasWorkAccidentTraining}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">EPI fournis aux salariés ? *</label>
            <select
              value={form.providesProtectiveEquipment}
              onChange={e => update('providesProtectiveEquipment', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.providesProtectiveEquipment && <p className="text-red-600 text-sm mt-1">{errors.providesProtectiveEquipment}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service de santé au travail ? *</label>
            <select
              value={form.hasOccupationalHealthService}
              onChange={e => update('hasOccupationalHealthService', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.hasOccupationalHealthService && <p className="text-red-600 text-sm mt-1">{errors.hasOccupationalHealthService}</p>}
          </div>
        </div>
      )}

      {/* Step 4 — Historique */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Historique et couverture</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Accidents du travail passés (3 dernières années) ? *</label>
            <select
              value={form.priorWorkAccidents}
              onChange={e => update('priorWorkAccidents', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.priorWorkAccidents && <p className="text-red-600 text-sm mt-1">{errors.priorWorkAccidents}</p>}
          </div>
          {form.priorWorkAccidents === 'yes' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Détails (optionnel)</label>
              <textarea
                value={form.accidentDetails || ''}
                onChange={e => update('accidentDetails', e.target.value)}
                placeholder="Nature, gravité..."
                rows={3}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Couverture AT/MP actuelle ? *</label>
            <select
              value={form.hasCurrentATMP}
              onChange={e => update('hasCurrentATMP', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.hasCurrentATMP && <p className="text-red-600 text-sm mt-1">{errors.hasCurrentATMP}</p>}
          </div>
          {form.hasCurrentATMP === 'yes' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Assureur actuel (optionnel)</label>
              <input
                type="text"
                value={form.currentProvider || ''}
                onChange={e => update('currentProvider', e.target.value)}
                placeholder="ex. Malakoff Humanis, AG2R"
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

