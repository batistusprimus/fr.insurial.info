import Link from 'next/link';

export default function PremiumCalculationGuide() {
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
              <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
              <circle cx="12" cy="12" r="3" />
              <path d="M18 12h.01M6 12h.01" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-archivo-black text-gray-900 mb-4">
            Comment les primes sont calculées (5 facteurs clés)
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
            <span>4 min de lecture</span>
            <span>•</span>
            <span>Guide assurance entreprise</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Les assureurs utilisent des algorithmes complexes pour déterminer votre prime, mais ces 5 facteurs ont l’impact le plus fort sur vos coûts.
          </p>

          {/* Factor 1 */}
          <div className="not-prose bg-blue-50 border-l-4 border-[#1E3A8A] p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Secteur & type d’activité</h2>
            <p className="text-gray-700 mb-4">
              Le profil de risque de votre secteur affecte fortement la tarification. Les secteurs à risque (construction, restauration) paient plus que les secteurs à faible risque (conseil, comptabilité).
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Pourquoi c’est important :</h4>
                <p className="text-gray-600">Les données historiques de sinistres montrent que certains secteurs déclarent davantage</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Conseil :</h4>
                <p className="text-gray-600">Décrivez précisément vos activités pour éviter une mauvaise classification</p>
              </div>
            </div>
          </div>

          {/* Factor 2 */}
          <div className="not-prose bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Limites de garantie & franchises</h2>
            <p className="text-gray-700 mb-4">
              Des limites de garantie élevées augmentent les primes, tandis que des franchises plus hautes les réduisent.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-800">Limites de garantie :</h4>
                <p className="text-gray-600">Montant maximal pris en charge par l’assureur pour un sinistre</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Franchises :</h4>
                <p className="text-gray-600">Part restant à votre charge avant l’intervention de l’assurance</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Point d’équilibre :</h4>
                <p className="text-gray-600">Équilibrer protection suffisante et prime abordable</p>
              </div>
            </div>
          </div>

          {/* Factor 3 */}
          <div className="not-prose bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Taille & chiffre d’affaires</h2>
            <p className="text-gray-700 mb-4">
              Les entreprises plus grandes paient généralement plus en raison d’une exposition accrue.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Facteurs :</strong> CA annuel, effectif, superficie</li>
              <li><strong>Pourquoi :</strong> Plus de CA = plus d’interactions clients et de potentiel de sinistre</li>
              <li><strong>Note :</strong> Certaines garanties ont des primes minimales, quelle que soit la taille</li>
            </ul>
          </div>

          {/* Factor 4 */}
          <div className="not-prose bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Localisation & territoire</h2>
            <p className="text-gray-700 mb-4">
              Le lieu d’exploitation influe sur la prime via des facteurs locaux.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Urbain vs rural :</h4>
                <p className="text-gray-600">Les zones urbaines ont souvent des tarifs plus élevés (contentieux accru)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Catastrophes naturelles :</h4>
                <p className="text-gray-600">Régions exposées (ouragans, séismes, inondations) = coûts plus élevés</p>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-semibold text-gray-800 mb-2">Cadre légal :</h4>
                <p className="text-gray-600">Certains territoires présentent des coûts de sinistre plus élevés</p>
              </div>
            </div>
          </div>

          {/* Factor 5 */}
          <div className="not-prose bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Historique de sinistres & gestion des risques</h2>
            <p className="text-gray-700 mb-4">
              Votre historique impacte fortement les primes futures.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Fréquence :</strong> Plusieurs sinistres = risque accru</li>
              <li><strong>Sévérité :</strong> Les gros sinistres pèsent plus que les petits</li>
              <li><strong>Gestion des risques :</strong> Sécurité, systèmes, formation peuvent réduire les tarifs</li>
              <li><strong>Score de crédit :</strong> Souvent pris en compte pour la tarification</li>
            </ul>
          </div>

          {/* Pro Tips */}
          <div className="bg-[#1E3A8A] text-white rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 inline-flex items-center gap-2"><LightbulbIcon /> Astuces pour réduire vos primes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>• Mettre en place des formations sécurité</li>
                <li>• Installer des systèmes de sécurité</li>
                <li>• Maintenir un bon crédit</li>
              </ul>
              <ul className="space-y-2">
                <li>• Comparer les offres chaque année</li>
                <li>• Regrouper plusieurs polices (BOP)</li>
                <li>• Travailler avec un courtier expérimenté</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA supprimé */}
      </article>
    </div>
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
