'use client';

import Image from 'next/image';

interface HeroProps {
  onScrollToForm: () => void;
}

export default function Hero({ onScrollToForm }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Colonne gauche: texte */}
          <div className="md:col-span-7 text-center md:text-left">
            <h1 className="font-archivo-black text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Comprenez les risques professionnels de votre entreprise.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl md:max-w-none mx-auto md:mx-0">
              Guides, explications et outils d’auto‑évaluation gratuits pour dirigeants, indépendants et TPE/PME.
              Découvrez les protections courantes pour votre secteur — sans jargon ni démarche commerciale.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-6">
              <button
                onClick={onScrollToForm}
                className="bg-[#1E3A8A] hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Découvrir les assurances professionnelles
              </button>
              <button
                onClick={onScrollToForm}
                className="border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
              >
                Commencer mon questionnaire
              </button>
            </div>
            <div className="flex items-center justify-center md:justify-start text-sm text-gray-500">
              <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              RGPD • SSL • DPA disponible sur demande
            </div>
            <p className="text-xs text-gray-600 max-w-3xl mt-2">
              Insurial est un service d’information et de mise en relation. Nous ne sommes pas assureur ni courtier et ne fournissons pas de conseil personnalisé.
              Voir <a href="/legal" className="underline text-[#1E3A8A]">mentions légales</a>, <a href="/terms" className="underline text-[#1E3A8A]">conditions d’utilisation</a> et <a href="/privacy" className="underline text-[#1E3A8A]">politique de confidentialité</a>.
            </p>
          </div>

          {/* Colonne droite: image */}
          <div className="md:col-span-5">
            <div className="relative bg-white/60 backdrop-blur border rounded-2xl shadow-xl p-2">
              <Image
                src="/images/Fbh3ITHpN-mtw1gvwK5SH.png"
                alt="Assurance Entreprise"
                width={780}
                height={640}
                className="w-full h-auto rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
