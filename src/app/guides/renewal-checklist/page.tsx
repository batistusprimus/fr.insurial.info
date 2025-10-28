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
          <div className="text-4xl mb-4" aria-hidden>
            <svg className="w-10 h-10 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="2" width="6" height="4" rx="1" />
              <path d="M9 2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2" />
              <path d="M9 12h6M9 16h6M9 8h6" />
            </svg>
          </div>
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
          <div className="not-prose bg-blue-50 border-l-4 border-[#1E3A8A] p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="inline-flex items-center gap-2">
                <ChartIcon /> Mise à jour des informations
              </span>
            </h2>
            <p className="text-gray-700 mb-4 font-medium">Commencer 90 jours avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span className="text-sm text-gray-900">Prévisions de chiffre d’affaires annuel</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span className="text-sm text-gray-900">Mise à jour effectifs et masse salariale</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span className="text-sm text-gray-900">Nouveaux sites, équipements ou véhicules acquis</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span className="text-sm text-gray-900">Évolutions des activités ou services proposés</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span className="text-sm text-gray-900">Projets d’expansion ou achats majeurs</span>
              </label>
            </div>
          </div>

          {/* Step 2 */}
          <div className="not-prose bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="inline-flex items-center gap-2">
                <TrendUpIcon /> Revue des sinistres
              </span>
            </h2>
            <p className="text-gray-700 mb-4 font-medium">Commencer 60 jours avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-900">Passer en revue tous les sinistres de l’année</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-900">Rassembler la documentation des dossiers ouverts</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-900">Préparer des explications pour sinistres importants/inhabituels</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-900">Documenter les améliorations de gestion des risques</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-900">Lister les formations sécurité mises en place</span>
              </label>
            </div>
          </div>

          {/* Step 3 */}
          <div className="not-prose bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="inline-flex items-center gap-2">
                <BriefcaseIcon /> Documents financiers
              </span>
            </h2>
            <p className="text-gray-700 mb-4 font-medium">Commencer 60 jours avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-900">Rassembler les états financiers récents</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-900">Mettre à jour l’évaluation pour la garantie Biens</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-900">Réviser la valeur des équipements et stocks</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-900">Collecter les justificatifs des achats/améliorations majeurs</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-900">Préparer des prévisions de trésorerie</span>
              </label>
            </div>
          </div>

          {/* Step 4 */}
          <div className="not-prose bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="inline-flex items-center gap-2">
                <SearchIcon /> Évaluation des garanties
              </span>
            </h2>
            <p className="text-gray-700 mb-4 font-medium">Commencer 45 jours avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-900">Revoir limites et franchises actuelles</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-900">Identifier les manques ou doublons de garantie</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-900">Considérer les nouveaux risques à couvrir</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-900">Évaluer si les limites doivent évoluer</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-900">Revoir titulaires de certificats et assurés additionnels</span>
              </label>
            </div>
          </div>

          {/* Step 5 */}
          <div className="not-prose bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="inline-flex items-center gap-2">
                <CartIcon /> Mise en concurrence
              </span>
            </h2>
            <p className="text-gray-700 mb-4 font-medium">Commencer 30 jours avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span className="text-sm text-gray-900">Demander des devis à 3–5 assureurs</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span className="text-sm text-gray-900">Comparer les garanties, pas seulement les prix</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span className="text-sm text-gray-900">Vérifier la solidité financière des assureurs (A.M. Best, S&P)</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span className="text-sm text-gray-900">Consulter les avis sur le service client</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span className="text-sm text-gray-900">Négocier avec votre assureur via des devis concurrents</span>
              </label>
            </div>
          </div>

          {/* Step 6 */}
          <div className="not-prose bg-gray-100 border-l-4 border-gray-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="inline-flex items-center gap-2">
                <NoteIcon /> Étapes finales
              </span>
            </h2>
            <p className="text-gray-700 mb-4 font-medium">2 semaines avant renouvellement</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-900">Relire attentivement les conditions finales</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-900">Confirmer l’exactitude des informations</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-900">Comprendre les éventuelles évolutions de garantie</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-900">Mettre en place les modalités de paiement</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-900">Mettre à jour les certificats pour clients/fournisseurs</span>
              </label>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-800 mb-4 inline-flex items-center gap-2"><WarningIcon /> Signaux d’alerte</h3>
            <ul className="list-disc pl-6 space-y-2 text-yellow-700">
              <li>Hausse marquée des primes sans explication</li>
              <li>Baisse des limites ou exclusions ajoutées</li>
              <li>Nouvelles franchises ou coassurance exigée</li>
              <li>Changements dans la gestion des sinistres</li>
            </ul>
          </div>

          {/* Pro Tips */}
          <div className="bg-[#1E3A8A] text-white rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 inline-flex items-center gap-2"><LightbulbIcon /> Informations pratiques pour le renouvellement</h3>
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

function ChartIcon() {
  return (
    <svg className="w-6 h-6 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <rect x="7" y="10" width="3" height="7" />
      <rect x="12" y="6" width="3" height="11" />
      <rect x="17" y="12" width="3" height="5" />
    </svg>
  );
}
function TrendUpIcon() {
  return (
    <svg className="w-6 h-6 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M19 9l-6 6-4-4-4 4" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg className="w-6 h-6 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg className="w-6 h-6 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg className="w-6 h-6 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
function NoteIcon() {
  return (
    <svg className="w-6 h-6 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h10M7 16h7" />
    </svg>
  );
}
function WarningIcon() {
  return (
    <svg className="w-6 h-6 text-yellow-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
function LightbulbIcon() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M2 10a8 8 0 1 1 16 0c0 3-2 5-4 6H6c-2-1-4-3-4-6z" />
    </svg>
  );
}
