'use client';

export default function KeyBenefits() {
  const benefits = [
    {
      icon: "🎯",
      title: "Intelligence de risque personnalisée",
      description: "Notre Score de risque évalue vos besoins selon le secteur, la taille et la localisation.",
      features: [
        "Évaluation fondée sur les données",
        "Zones de couverture à considérer",
        "Identification des risques cachés"
      ]
    },
    {
      icon: "📚",
      title: "Centre de ressources pédagogiques",
      description: "Des guides clairs et sans jargon pour comprendre l’assurance entreprise.",
      features: [
        "Guides par type d’assurance",
        "Listes de contrôle & conseils de renouvellement",
        "Tendances et mises à jour réglementaires"
      ]
    },
    {
      icon: "🧭",
      title: "Conseils indépendants",
      description: "Nous ne vendons pas d’assurances. Utilisez votre Score de risque avec votre courtier.",
      features: [
        "Aucune pression commerciale",
        "Étapes actionnables",
        "Approche transparente et pédagogique"
      ]
    },
    {
      icon: "⚡",
      title: "Expérience simple et rapide",
      description: "Quelques questions pour obtenir votre Score de risque en minutes.",
      features: [
        "Moins de 5 minutes",
        "Compatible mobile",
        "RGPD & SSL"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir <span className="text-[#1E3A8A]">Insurial</span> ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous transformons la complexité de l’assurance entreprise en une expérience pédagogique simple et fiable, centrée sur votre Score de risque.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                </div>
              </div>
              
              <div className="pl-16">
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à découvrir votre Score de risque assurance entreprise ?
            </h3>
            <p className="text-gray-600 mb-6">
              Obtenez une évaluation personnalisée de vos besoins d’assurance en moins de 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Gratuit
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sans engagement
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Conforme RGPD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
