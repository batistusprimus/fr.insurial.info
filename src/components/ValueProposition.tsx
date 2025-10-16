'use client';

export default function ValueProposition() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Une approche pédagogique et indépendante de l’assurance professionnelle.
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Insurial aide les entreprises à mieux comprendre leurs besoins en matière d’assurance.
            Notre mission : rendre simples et accessibles des notions complexes, pour permettre aux dirigeants de prendre des décisions éclairées.
            Nous ne vendons pas d’assurances. Nous aidons à comprendre les risques, les obligations légales et les solutions existantes sur le marché.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Problème */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
            <div className="flex items-start mb-4">
              <div className="bg-red-100 rounded-full p-3 mr-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Le problème</h3>
                <div className="w-16 h-1 bg-red-500 mb-4"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Complexité écrasante :</strong> l’assurance entreprise est un labyrinthe de jargon et d’options confuses
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Risques cachés :</strong> sans expertise, on sous‑estime facilement les besoins de couverture
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Temps perdu :</strong> des heures de recherche et d’estimation sans clarté
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Coûts cachés :</strong> une mauvaise couverture peut coûter des milliers en sinistres non couverts
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-500">
            <div className="flex items-start mb-4">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Notre approche</h3>
                <div className="w-16 h-1 bg-green-500 mb-4"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Diagnostic personnalisé :</strong> évaluez vos besoins d’assurance en quelques minutes avec un outil simple et fiable
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Ressources pédagogiques :</strong> des guides clairs et sans jargon pour comprendre chaque type d’assurance
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Conseils indépendants :</strong> comprenez quelle couverture il vous faut et pourquoi — sans pression commerciale
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Étapes concrètes :</strong> utilisez votre diagnostic pour discuter couverture et budgets avec votre courtier
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800 font-medium text-center">
                ✓ Gratuit • ✓ Sans obligation • ✓ Conforme RGPD • Nous ne vendons pas d’assurances
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
