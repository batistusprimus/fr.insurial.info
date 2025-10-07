'use client';

import { useState } from 'react';

interface FormData {
  // Step 1 - Need
  coverageType: string[];
  location: string;
  budget: string;
  timeline: string;
  
  // Step 2 - Profile  
  companySize: string;
  industry: string;
  currentProvider: string;
  
  // Step 3 - Contact
  fullName: string;
  workEmail: string;
  phone: string;
  website: string;
  
  // Step 4 - Consent
  gdprConsent: boolean;
}

const initialFormData: FormData = {
  coverageType: [],
  location: '',
  budget: '',
  timeline: '',
  companySize: '',
  industry: '',
  currentProvider: '',
  fullName: '',
  workEmail: '',
  phone: '',
  website: '',
  gdprConsent: false,
};

export default function LeadForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (field: keyof FormData, value: string | string[] | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (formData.coverageType.length === 0) newErrors.coverageType = 'Veuillez sélectionner au moins un type de couverture';
        if (!formData.location) newErrors.location = 'La localisation est requise';
        if (!formData.budget) newErrors.budget = 'La tranche de budget est requise';
        if (!formData.timeline) newErrors.timeline = 'L’échéance est requise';
        break;
      case 2:
        if (!formData.companySize) newErrors.companySize = 'La taille de l’entreprise est requise';
        if (!formData.industry) newErrors.industry = 'Le secteur d’activité est requis';
        break;
      case 3:
        if (!formData.fullName) newErrors.fullName = 'Le nom complet est requis';
        if (!formData.workEmail) {
          newErrors.workEmail = 'L’email professionnel est requis';
        } else if (!formData.workEmail.includes('@') || formData.workEmail.includes('@gmail.') || formData.workEmail.includes('@yahoo.') || formData.workEmail.includes('@hotmail.')) {
          newErrors.workEmail = 'Veuillez utiliser un email professionnel (ex. nom@entreprise.com)';
        }
        if (!formData.phone) newErrors.phone = 'Le numéro de téléphone est requis';
        break;
      case 4:
        if (!formData.gdprConsent) newErrors.gdprConsent = 'Vous devez accepter la politique de confidentialité pour continuer';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    try {
      // Capture UTM parameters
      const urlParams = new URLSearchParams(window.location.search);
      const utmData = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_adset: urlParams.get('utm_adset') || '',
        utm_ad: urlParams.get('utm_ad') || '',
      };

      const payload = {
        ...formData,
        ...utmData,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        source: 'fr.insurial.info',
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = '/thank-you';
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Une erreur est survenue. Merci de réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleCoverage = (coverage: string) => {
    const current = formData.coverageType;
    const updated = current.includes(coverage)
      ? current.filter(c => c !== coverage)
      : [...current, coverage];
    updateFormData('coverageType', updated);
  };

  return (
    <section id="quote-form" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg border p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step <= currentStep ? 'bg-[#1E3A8A] text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#1E3A8A] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Étape 1 : Besoin */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-archivo-black text-gray-900 mb-6">De quelle couverture avez‑vous besoin ?</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Type de couverture *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['RC Pro (Responsabilité Civile Professionnelle)', 'Multirisque Professionnelle', 'Flotte automobile professionnelle', 'Cyber (Responsabilité cyber)', 'AT/MP (accidents du travail)', 'Protection juridique', 'Autre'].map((coverage) => (
                    <label key={coverage} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={formData.coverageType.includes(coverage)}
                        onChange={() => toggleCoverage(coverage)}
                        className="mr-3 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                      />
                      <span className="text-sm text-gray-900">{coverage}</span>
                    </label>
                  ))}
                </div>
                {errors.coverageType && <p className="text-red-600 text-sm mt-1">{errors.coverageType}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Localisation *</label>
                <select
                  value={formData.location}
                  onChange={(e) => updateFormData('location', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionnez votre localisation</option>
                  <option value="US-Northeast">États‑Unis - Nord‑Est</option>
                  <option value="US-Southeast">États‑Unis - Sud‑Est</option>
                  <option value="US-Midwest">États‑Unis - Midwest</option>
                  <option value="US-West">États‑Unis - Ouest</option>
                  <option value="EU-UK">UE - Royaume‑Uni</option>
                  <option value="EU-France">UE - France</option>
                  <option value="EU-Germany">UE - Allemagne</option>
                  <option value="EU-Other">UE - Autre</option>
                </select>
                {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget annuel *</label>
                <select
                  value={formData.budget}
                  onChange={(e) => updateFormData('budget', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionnez une tranche</option>
                  <option value="<$5K">&lt; 5 000 €</option>
                  <option value="$5K-$15K">5 000 € - 15 000 €</option>
                  <option value="$15K-$50K">15 000 € - 50 000 €</option>
                  <option value="$50K+">50 000 €+</option>
                </select>
                {errors.budget && <p className="text-red-600 text-sm mt-1">{errors.budget}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pour quand avez‑vous besoin de la couverture ? *</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => updateFormData('timeline', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionnez une échéance</option>
                  <option value="ASAP">Dès que possible</option>
                  <option value="1-month">Sous 1 mois</option>
                  <option value="3-months">Sous 3 mois</option>
                  <option value="renewal">Au renouvellement</option>
                </select>
                {errors.timeline && <p className="text-red-600 text-sm mt-1">{errors.timeline}</p>}
              </div>
            </div>
          )}

          {/* Étape 2 : Profil */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-archivo-black text-gray-900 mb-6">Parlez‑nous de votre entreprise</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Taille de l’entreprise *</label>
                <select
                  value={formData.companySize}
                  onChange={(e) => updateFormData('companySize', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionnez la taille</option>
                  <option value="1-10">1-10 salariés</option>
                  <option value="11-50">11-50 salariés</option>
                  <option value="51-200">51-200 salariés</option>
                  <option value="200+">200+ salariés</option>
                </select>
                {errors.companySize && <p className="text-red-600 text-sm mt-1">{errors.companySize}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Secteur d’activité *</label>
                <select
                  value={formData.industry}
                  onChange={(e) => updateFormData('industry', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionnez un secteur</option>
                  <option value="Technology">Technologie</option>
                  <option value="Healthcare">Santé</option>
                  <option value="Finance">Finance</option>
                  <option value="Manufacturing">Industrie</option>
                  <option value="Retail">Commerce</option>
                  <option value="Construction">Construction</option>
                  <option value="Professional Services">Services professionnels</option>
                  <option value="Other">Autre</option>
                </select>
                {errors.industry && <p className="text-red-600 text-sm mt-1">{errors.industry}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Assureur actuel (optionnel)</label>
                <input
                  type="text"
                  value={formData.currentProvider}
                  onChange={(e) => updateFormData('currentProvider', e.target.value)}
                  placeholder="ex. State Farm, AXA, Allianz..."
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
              </div>
            </div>
          )}

          {/* Étape 3 : Contact */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-archivo-black text-gray-900 mb-6">Informations de contact</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
                {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email professionnel *</label>
                <input
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) => updateFormData('workEmail', e.target.value)}
                  placeholder="nom@entreprise.com"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
                {errors.workEmail && <p className="text-red-600 text-sm mt-1">{errors.workEmail}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Numéro de téléphone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="+33 6 12 34 56 78"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Site web de l’entreprise (optionnel)</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => updateFormData('website', e.target.value)}
                  placeholder="https://www.entreprise.com"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                />
              </div>
            </div>
          )}

          {/* Étape 4 : Consentement */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-archivo-black text-gray-900 mb-6">Étape finale</h2>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Vérifiez votre demande :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Couverture : {formData.coverageType.join(', ')}</li>
                  <li>• Localisation : {formData.location}</li>
                  <li>• Budget : {formData.budget}</li>
                  <li>• Entreprise : {formData.companySize} en {formData.industry}</li>
                  <li>• Contact : {formData.workEmail}</li>
                </ul>
              </div>

              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.gdprConsent}
                    onChange={(e) => updateFormData('gdprConsent', e.target.checked)}
                    className="mt-1 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span className="text-sm text-gray-600">
                    J’accepte la{' '}
                    <a href="/privacy" className="text-[#1E3A8A] hover:underline">Politique de confidentialité</a> et j’autorise{' '}
                    <strong>Insurial</strong> à traiter mes données pour fournir un devis. *
                  </span>
                </label>
                {errors.gdprConsent && <p className="text-red-600 text-sm">{errors.gdprConsent}</p>}

                <p className="text-xs text-gray-500">
                  Gratuit & sans obligation • Devis sous 24h • Conforme RGPD
                </p>
              </div>

              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm">{errors.submit}</p>
                </div>
              )}
            </div>
          )}

          {/* Boutons de navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Retour
              </button>
            )}
            
            <div className="ml-auto">
              {currentStep < 4 ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
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

        {/* Microcopy sous le formulaire */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Gratuit & sans obligation • Devis sous 24h • Conforme RGPD
        </p>
      </div>
    </section>
  );
}
