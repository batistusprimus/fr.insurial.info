'use client';

interface HeroProps {
  onScrollToForm: () => void;
}

export default function Hero({ onScrollToForm }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          
          {/* H1 Principal */}
          <h1 className="font-archivo-black text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            Éducation à l’assurance entreprise +{' '}
            <span className="text-[#1E3A8A]">Score de risque</span> gratuit
          </h1>
          
          {/* Sous-titre avec USPs */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Nous aidons les entreprises à comprendre leurs besoins d’assurance grâce à des ressources claires et fiables.
            Obtenez votre <span className="font-semibold text-[#1E3A8A]">Score de risque assurance entreprise gratuit</span>
            selon votre secteur, taille, localisation et chiffre d’affaires.
          </p>

          {/* CTA Principal */}
          <button
            onClick={onScrollToForm}
            className="bg-[#1E3A8A] hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl mb-6"
          >
            Obtenir mon score de risque gratuit
          </button>

          {/* Signal de confiance */}
          <div className="flex items-center justify-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            🔒 RGPD • SSL • DPA disponible sur demande
          </div>
        </div>
      </div>
    </section>
  );
}
