import Link from 'next/link';

export default function RenewalChecklistGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 font-medium">
            ← Retour à l’accueil
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <div className="text-4xl mb-4">📋</div>
          <h1 className="text-4xl md:text-5xl font-archivo-black text-gray-900 mb-4">
            Check‑list de renouvellement (quoi préparer)
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
            <span>5 min de lecture</span>
            <span>•</span>
            <span>Guide assurance entreprise</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Préparer votre renouvellement 60‑90 jours à l’avance vous assure les meilleures garanties et tarifs. Voici votre check‑list pas à pas.
          </p>

          {/* Step 1 */}
          <div className="bg-blue-50 border-l-4 border-[#1E3A8A] p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Mise à jour des informations</h2>
            <p className="text-gray-700 mb-4 font-medium">Commencer 90 jours avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span>Prévisions de chiffre d’affaires annuel</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span>Mise à jour effectifs et masse salariale</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span>Nouveaux sites, équipements ou véhicules acquis</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span>Évolutions des activités ou services proposés</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span>Projets d’expansion ou achats majeurs</span>
              </label>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📈 Revue des sinistres</h2>
            <p className="text-gray-700 mb-4 font-medium">Commencer 60 jours avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span>Passer en revue tous les sinistres de l’année</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span>Rassembler la documentation des dossiers ouverts</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span>Préparer des explications pour sinistres importants/inhabituels</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span>Documenter les améliorations de gestion des risques</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span>Lister les formations sécurité mises en place</span>
              </label>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💼 Documents financiers</h2>
            <p className="text-gray-700 mb-4 font-medium">Commencer 60 jours avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span>Rassembler les états financiers récents</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span>Mettre à jour l’évaluation pour la garantie Biens</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span>Réviser la valeur des équipements et stocks</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span>Collecter les justificatifs des achats/améliorations majeurs</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span>Préparer des prévisions de trésorerie</span>
              </label>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔍 Évaluation des garanties</h2>
            <p className="text-gray-700 mb-4 font-medium">Commencer 45 jours avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span>Revoir limites et franchises actuelles</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span>Identifier les manques ou doublons de garantie</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span>Considérer les nouveaux risques à couvrir</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span>Évaluer si les limites doivent évoluer</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span>Revoir titulaires de certificats et assurés additionnels</span>
              </label>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🛒 Mise en concurrence</h2>
            <p className="text-gray-700 mb-4 font-medium">Commencer 30 jours avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span>Demander des devis à 3–5 assureurs</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span>Comparer les garanties, pas seulement les prix</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span>Vérifier la solidité financière des assureurs (A.M. Best, S&P)</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span>Consulter les avis sur le service client</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span>Négocier avec votre assureur via des devis concurrents</span>
              </label>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-gray-100 border-l-4 border-gray-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 Étapes finales</h2>
            <p className="text-gray-700 mb-4 font-medium">2 semaines avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span>Relire attentivement les conditions finales</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span>Confirmer l’exactitude des informations</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span>Comprendre les éventuelles évolutions de garantie</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span>Mettre en place les modalités de paiement</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span>Mettre à jour les certificats pour clients/fournisseurs</span>
              </label>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">⚠️ Signaux d’alerte</h3>
            <ul className="list-disc pl-6 space-y-2 text-yellow-700">
              <li>Hausse marquée des primes sans explication</li>
              <li>Baisse des limites ou exclusions ajoutées</li>
              <li>Nouvelles franchises ou coassurance exigée</li>
              <li>Changements dans la gestion des sinistres</li>
            </ul>
          </div>

          {/* Pro Tips */}
          <div className="bg-[#1E3A8A] text-white rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">💡 Conseils pro pour le renouvellement</h3>
            <ul className="space-y-2">
              <li>• Ne pas attendre la dernière minute — de bonnes options prennent du temps</li>
              <li>• Regrouper les polices pour des remises potentielles</li>
              <li>• Envisager d’augmenter les franchises pour baisser la prime</li>
              <li>• Maintenir une couverture continue pour éviter les pénalités</li>
              <li>• Tenir des traces détaillées des améliorations et mesures de sécurité</li>
            </ul>
          </div>

          {/* Questions */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Questions à poser à votre courtier</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Qu’est‑ce qui a fait évoluer la prime ?</li>
              <li>De nouvelles remises sont‑elles disponibles ?</li>
              <li>Mes sinistres se comparent comment au secteur ?</li>
              <li>Quelles améliorations réduiraient les coûts ?</li>
              <li>Y a‑t‑il des risques émergents à couvrir ?</li>
            </ol>
          </div>

          <div className="text-center bg-blue-50 rounded-lg p-6">
            <p className="text-lg font-medium text-[#1E3A8A]">
              Starting early gives you leverage in negotiations and ensures you're not rushed into a decision that could cost your business.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt pour un renouvellement fluide ?
            </h3>
          <p className="text-gray-600 mb-6">
            Lancez votre préparation avec notre comparaison de devis.
          </p>
          <Link 
            href="/"
            className="inline-block bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Commencer maintenant
          </Link>
        </div>
      </article>
    </div>
  );
}
