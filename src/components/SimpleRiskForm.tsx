'use client';

import { useState } from 'react';

interface FormData {
  businessName: string;
  fullName: string;
  workEmail: string;
  phone: string;
  zipCode: string;
  industry: string;
  annualRevenue: string; // CA annuel
  isCurrentlyInsured: string; // 'oui' | 'non'
  currentInsurer: string; // optionnel
  currentPremium: string; // optionnel
  notes: string; // optionnel
  gdprConsent: boolean;
}

const initialFormData: FormData = {
  businessName: '',
  fullName: '',
  workEmail: '',
  phone: '',
  zipCode: '',
  industry: '',
  annualRevenue: '',
  isCurrentlyInsured: '',
  currentInsurer: '',
  currentPremium: '',
  notes: '',
  gdprConsent: false,
};

export default function SimpleRiskForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName.trim()) newErrors.businessName = "Le nom de l’entreprise est requis";
    if (!formData.fullName.trim()) newErrors.fullName = "Le nom complet est requis";
    if (!formData.workEmail) {
      newErrors.workEmail = "L’email professionnel est requis";
    } else if (!formData.workEmail.includes('@') || formData.workEmail.includes('@gmail.') || formData.workEmail.includes('@yahoo.') || formData.workEmail.includes('@hotmail.')) {
      newErrors.workEmail = "Merci d’utiliser un email professionnel (ex. nom@entreprise.com)";
    }
    if (!formData.phone.trim()) newErrors.phone = "Le numéro de téléphone est requis";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Le code postal est requis";
    if (!formData.industry) newErrors.industry = "Le secteur d’activité est requis";
    if (!formData.annualRevenue) newErrors.annualRevenue = "Le chiffre d’affaires annuel est requis";
    if (!formData.isCurrentlyInsured) newErrors.isCurrentlyInsured = "Merci d’indiquer si vous êtes déjà assuré";
    if (formData.isCurrentlyInsured === 'oui' && !formData.currentInsurer.trim()) newErrors.currentInsurer = "Nom de l’assureur requis";
    if (!formData.gdprConsent) newErrors.gdprConsent = "Vous devez accepter la politique de confidentialité pour continuer";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

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
        formType: 'diagnostic_form_v1'
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

  return (
    <section id="diagnostic" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Obtenez votre <span className="text-[#1E3A8A]">diagnostic gratuit</span>
          </h2>
          <p className="text-lg text-gray-600">
            Répondez à quelques questions pour évaluer vos besoins de couverture et recevoir des conseils clairs.
          </p>
        </div>

          <div className="bg-white rounded-xl shadow-lg border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                1. Nom de l’entreprise *
              </label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => updateFormData('businessName', e.target.value)}
                placeholder="ex. Acme SAS"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
              {errors.businessName && <p className="text-red-600 text-sm mt-1">{errors.businessName}</p>}
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                2. Nom complet *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => updateFormData('fullName', e.target.value)}
                placeholder="ex. Jean Dupont"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
              {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                3. Email professionnel *
              </label>
              <input
                type="email"
                value={formData.workEmail}
                onChange={(e) => updateFormData('workEmail', e.target.value)}
                placeholder="nom@entreprise.com"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
              {errors.workEmail && <p className="text-red-600 text-sm mt-1">{errors.workEmail}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                4. Numéro de téléphone *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="+33 6 12 34 56 78"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* ZIP Code */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                5. Code postal (siège) *
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => updateFormData('zipCode', e.target.value)}
                placeholder="ex. 75002 (Paris)"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
              {errors.zipCode && <p className="text-red-600 text-sm mt-1">{errors.zipCode}</p>}
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                6. Secteur d’activité *
              </label>
              <select
                value={formData.industry}
                onChange={(e) => updateFormData('industry', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              >
                <option value="">Sélectionnez votre secteur</option>
                <option value="Technology">Technologie</option>
                <option value="Healthcare">Santé</option>
                <option value="Finance">Finance</option>
                <option value="Manufacturing">Industrie</option>
                <option value="Retail">Commerce</option>
                <option value="Construction">Construction</option>
                <option value="Professional Services">Services professionnels</option>
                <option value="Restaurant">Restauration</option>
                <option value="Real Estate">Immobilier</option>
                <option value="Education">Éducation</option>
                <option value="Transportation">Transport</option>
                <option value="Other">Autre</option>
              </select>
              {errors.industry && <p className="text-red-600 text-sm mt-1">{errors.industry}</p>}
            </div>

          {/* Chiffre d'affaires annuel */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">7. Chiffre d’affaires annuel (HT) *</label>
            <select
              value={formData.annualRevenue}
              onChange={(e) => updateFormData('annualRevenue', e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            >
              <option value="">Sélectionnez une tranche</option>
              <option value="<100k">Moins de 100 000 €</option>
              <option value="100k-500k">100 000 € – 500 000 €</option>
              <option value="500k-1m">500 000 € – 1 M€</option>
              <option value="1m-5m">1 M€ – 5 M€</option>
              <option value=">5m">Plus de 5 M€</option>
            </select>
            {errors.annualRevenue && <p className="text-red-600 text-sm mt-1">{errors.annualRevenue}</p>}
          </div>

          {/* Assurance actuelle et contexte */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">8. Êtes‑vous déjà assuré ? *</label>
              <select
                value={formData.isCurrentlyInsured}
                onChange={(e) => updateFormData('isCurrentlyInsured', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              >
                <option value="">Sélectionnez une option</option>
                <option value="oui">Oui</option>
                <option value="non">Non</option>
              </select>
              {errors.isCurrentlyInsured && <p className="text-red-600 text-sm mt-1">{errors.isCurrentlyInsured}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">9. Chez qui ? {formData.isCurrentlyInsured === 'oui' ? '*' : '(optionnel)'} </label>
              <input
                type="text"
                value={formData.currentInsurer}
                onChange={(e) => updateFormData('currentInsurer', e.target.value)}
                placeholder="Nom de l’assureur actuel"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
              {errors.currentInsurer && <p className="text-red-600 text-sm mt-1">{errors.currentInsurer}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">10. Combien cela vous coûte par an ? (optionnel)</label>
            <input
              type="text"
              value={formData.currentPremium}
              onChange={(e) => updateFormData('currentPremium', e.target.value)}
              placeholder="ex. 1 200 € / an"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">11. Notes / contexte (optionnel)</label>
            <textarea
              value={formData.notes}
              onChange={(e) => updateFormData('notes', e.target.value)}
              placeholder="Objectifs, échéance de renouvellement, sinistres récents, etc."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900 min-h-[100px]"
            />
          </div>

            {/* GDPR Consent */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.gdprConsent}
                  onChange={(e) => updateFormData('gdprConsent', e.target.checked)}
                  className="mt-1 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                />
                <span className="text-sm text-gray-700">
                  J’accepte la{' '}
                  <a href="/privacy" className="text-[#1E3A8A] hover:underline">Politique de confidentialité</a> et j’autorise{' '}
                  <strong>Insurial</strong> à traiter mes données pour établir mon diagnostic et m’envoyer des ressources pédagogiques. *
                </span>
              </label>
              {errors.gdprConsent && <p className="text-red-600 text-sm mt-1">{errors.gdprConsent}</p>}
            </div>

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{errors.submit}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1E3A8A] text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'Envoi…' : 'Faire mon diagnostic'}
            </button>

            <p className="text-center text-sm text-gray-500">
              🔒 Gratuit & sans obligation • Conforme RGPD • Vous contrôlez l’usage de vos données
            </p>
          </form>
        </div>

        {/* Benefits below form */}
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="font-semibold text-gray-900 text-sm">Diagnostic personnalisé</h4>
            <p className="text-xs text-gray-600">Selon votre secteur et votre profil</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-gray-900 text-sm">Partenaires qualifiés</h4>
            <p className="text-xs text-gray-600">Partenaires d’assurance pré‑qualifiés</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-semibold text-gray-900 text-sm">Réponse rapide</h4>
            <p className="text-xs text-gray-600">Résultats sous 24 h garantis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
