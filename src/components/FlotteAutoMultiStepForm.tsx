'use client';

import { useMemo, useState } from 'react';

interface FlotteAutoLeadData {
  // Step 1 — Profil
  companySize: string;
  industry: string;
  location: string;
  annualRevenue: string;

  // Step 2 — Parc véhicules
  numberOfVehicles: string;
  vehicleTypes: string[]; // VP, VUL, PL, Moto, Autre
  vehicleUsage: string; // Livraison, Commercial, Transport passagers, Chantier
  averageVehicleAge: string;

  // Step 3 — Conducteurs
  numberOfDrivers: string;
  driverProfile: string; // Nommés, Tous conducteurs
  youngestDriverAge: string;
  hasDriverTraining: string; // yes/no

  // Step 4 — Couverture actuelle
  hasCurrentFleetInsurance: string; // yes/no
  currentProvider?: string;
  currentCoverageLevel?: string; // RC seule, Tiers+, Tous risques
  priorClaims: string; // yes/no
  claimDetails?: string;

  // Step 5 — Contact
  fullName: string;
  workEmail: string;
  phone: string;
  website: string;
  gdprConsent: boolean;
}

const initialData: FlotteAutoLeadData = {
  companySize: '',
  industry: '',
  location: '',
  annualRevenue: '',

  numberOfVehicles: '',
  vehicleTypes: [],
  vehicleUsage: '',
  averageVehicleAge: '',

  numberOfDrivers: '',
  driverProfile: '',
  youngestDriverAge: '',
  hasDriverTraining: '',

  hasCurrentFleetInsurance: '',
  currentProvider: '',
  currentCoverageLevel: '',
  priorClaims: '',
  claimDetails: '',

  fullName: '',
  workEmail: '',
  phone: '',
  website: '',
  gdprConsent: false,
};

export default function FlotteAutoMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<FlotteAutoLeadData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;
  const progress = useMemo(() => Math.round((currentStep / totalSteps) * 100), [currentStep]);

  const update = (field: keyof FlotteAutoLeadData, value: string | string[] | boolean) => {
    setForm(prev => ({ ...prev, [field]: value as any }));
    if (errors[field as string]) {
      setErrors(prev => ({ ...prev, [field as string]: '' }));
    }
  };

  const toggleMulti = (field: keyof FlotteAutoLeadData, value: string) => {
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
      if (!form.numberOfVehicles) e.numberOfVehicles = 'Requis';
      if (!form.vehicleTypes.length) e.vehicleTypes = 'Sélectionnez au moins un type';
      if (!form.vehicleUsage) e.vehicleUsage = 'Requis';
      if (!form.averageVehicleAge) e.averageVehicleAge = 'Requis';
    }
    if (step === 3) {
      if (!form.numberOfDrivers) e.numberOfDrivers = 'Requis';
      if (!form.driverProfile) e.driverProfile = 'Requis';
      if (!form.youngestDriverAge) e.youngestDriverAge = 'Requis';
      if (!form.hasDriverTraining) e.hasDriverTraining = 'Requis';
    }
    if (step === 4) {
      if (!form.hasCurrentFleetInsurance) e.hasCurrentFleetInsurance = 'Requis';
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
        coverageType: ['Flotte automobile professionnelle'],
        source: 'fr.insurial.info/flotte-automobile',
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
              <option value="Transport">Transport / Logistique</option>
              <option value="Livraison">Livraison / Coursiers</option>
              <option value="Commercial">Commercial / VRP</option>
              <option value="Services">Services / Intervention</option>
              <option value="BTP">BTP / Chantiers</option>
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

      {/* Step 2 — Parc véhicules */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Votre parc de véhicules</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre de véhicules *</label>
            <select
              value={form.numberOfVehicles}
              onChange={e => update('numberOfVehicles', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="3-5">3-5 véhicules</option>
              <option value="6-10">6-10 véhicules</option>
              <option value="11-20">11-20 véhicules</option>
              <option value="20+">Plus de 20 véhicules</option>
            </select>
            {errors.numberOfVehicles && <p className="text-red-600 text-sm mt-1">{errors.numberOfVehicles}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Types de véhicules *</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Voitures (VP)', 'Utilitaires (VUL)', 'Poids lourds (PL)', 'Motos / 2 roues', 'Engins de chantier'].map(opt => (
                <label key={opt} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={form.vehicleTypes.includes(opt)}
                    onChange={() => toggleMulti('vehicleTypes', opt)}
                    className="mr-3 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span className="text-sm text-gray-900">{opt}</span>
                </label>
              ))}
            </div>
            {errors.vehicleTypes && <p className="text-red-600 text-sm mt-1">{errors.vehicleTypes}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Usage principal *</label>
            <select
              value={form.vehicleUsage}
              onChange={e => update('vehicleUsage', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="Livraison">Livraison / Coursier</option>
              <option value="Commercial">Commercial / VRP</option>
              <option value="Transport">Transport de marchandises</option>
              <option value="Passengers">Transport de passagers</option>
              <option value="Chantier">Intervention chantiers</option>
              <option value="Autre">Autre</option>
            </select>
            {errors.vehicleUsage && <p className="text-red-600 text-sm mt-1">{errors.vehicleUsage}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Âge moyen des véhicules *</label>
            <select
              value={form.averageVehicleAge}
              onChange={e => update('averageVehicleAge', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="<2ans">Moins de 2 ans</option>
              <option value="2-5ans">2-5 ans</option>
              <option value="5-10ans">5-10 ans</option>
              <option value=">10ans">Plus de 10 ans</option>
            </select>
            {errors.averageVehicleAge && <p className="text-red-600 text-sm mt-1">{errors.averageVehicleAge}</p>}
          </div>
        </div>
      )}

      {/* Step 3 — Conducteurs */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Conducteurs</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre de conducteurs *</label>
            <select
              value={form.numberOfDrivers}
              onChange={e => update('numberOfDrivers', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="1-5">1-5 conducteurs</option>
              <option value="6-15">6-15 conducteurs</option>
              <option value="16-50">16-50 conducteurs</option>
              <option value="50+">Plus de 50 conducteurs</option>
            </select>
            {errors.numberOfDrivers && <p className="text-red-600 text-sm mt-1">{errors.numberOfDrivers}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Profil de conduite *</label>
            <select
              value={form.driverProfile}
              onChange={e => update('driverProfile', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="named">Conducteurs nommés (liste déclarée)</option>
              <option value="all">Tous conducteurs</option>
            </select>
            {errors.driverProfile && <p className="text-red-600 text-sm mt-1">{errors.driverProfile}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Âge du plus jeune conducteur *</label>
            <select
              value={form.youngestDriverAge}
              onChange={e => update('youngestDriverAge', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="18-21">18-21 ans</option>
              <option value="22-25">22-25 ans</option>
              <option value="26-30">26-30 ans</option>
              <option value="30+">Plus de 30 ans</option>
            </select>
            {errors.youngestDriverAge && <p className="text-red-600 text-sm mt-1">{errors.youngestDriverAge}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Formations à la conduite pro ? *</label>
            <select
              value={form.hasDriverTraining}
              onChange={e => update('hasDriverTraining', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.hasDriverTraining && <p className="text-red-600 text-sm mt-1">{errors.hasDriverTraining}</p>}
          </div>
        </div>
      )}

      {/* Step 4 — Couverture actuelle */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-archivo-black text-gray-900">Couverture actuelle</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Assurance flotte actuelle ? *</label>
            <select
              value={form.hasCurrentFleetInsurance}
              onChange={e => update('hasCurrentFleetInsurance', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionner</option>
              <option value="yes">Oui</option>
              <option value="no">Non (contrats individuels ou rien)</option>
            </select>
            {errors.hasCurrentFleetInsurance && <p className="text-red-600 text-sm mt-1">{errors.hasCurrentFleetInsurance}</p>}
          </div>
          {form.hasCurrentFleetInsurance === 'yes' && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Assureur actuel (optionnel)</label>
                <input
                  type="text"
                  value={form.currentProvider || ''}
                  onChange={e => update('currentProvider', e.target.value)}
                  placeholder="ex. MMA, Generali"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Niveau de couverture actuel (optionnel)</label>
                <select
                  value={form.currentCoverageLevel || ''}
                  onChange={e => update('currentCoverageLevel', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionner</option>
                  <option value="RC">RC seule</option>
                  <option value="Tiers+">Tiers étendu (vol, incendie, bris de glace)</option>
                  <option value="AllRisks">Tous risques</option>
                </select>
              </div>
            </>
          )}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sinistres passés (3 dernières années) ? *</label>
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
                placeholder="Accident responsable, vol, bris de glace..."
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

