import Link from 'next/link';

export default function GeneralLiabilityVsPropertyGuide() {
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
          <div className="text-4xl mb-4">🛡️</div>
          <h1 className="text-4xl md:text-5xl font-archivo-black text-gray-900 mb-4">
            RC générale vs Biens — quelle différence ?
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
            <span>3 min de lecture</span>
            <span>•</span>
            <span>Guide assurance entreprise</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Comprendre la différence entre RC générale et Assurance Biens est essentiel pour une protection complète.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#1E3A8A] p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité civile générale</h2>
            <p className="text-gray-700 mb-4">
              Protège contre les réclamations de tiers (corporel, matériel, atteinte) liées à vos activités.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce que couvre la RC générale :</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Chute d’un client dans vos locaux</li>
            <li>Dégât chez un client pendant une prestation</li>
            <li>Atteinte publicitaire (droits d’auteur, diffamation)</li>
            <li>Frais de défense et règlements</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-green-800 mb-2">Exemple réel :</h4>
            <p className="text-green-700">
              Un client trébuche sur un câble et se fracture le poignet. La RC générale couvre ses frais médicaux et juridiques.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Assurance des biens</h2>
            <p className="text-gray-700 mb-4">
              Protège vos actifs matériels (bâtiments, équipements, stocks, mobilier) contre incendie, vol, vandalisme.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce que couvre l’Assurance Biens :</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Dommages au bâtiment (incendie, tempête, vandalisme)</li>
            <li>Équipements et stocks volés ou endommagés</li>
            <li>Perte d’exploitation (revenu perdu pendant les réparations)</li>
            <li>Frais pour opérer depuis un site temporaire</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-green-800 mb-2">Exemple réel :</h4>
            <p className="text-green-700">
              Un incendie endommage vos bureaux et détruit du matériel. L’assurance Biens couvre les remplacements et la perte d’exploitation.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Différences clés</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#1E3A8A] mb-2">RC générale</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Protège contre les réclamations de tiers</li>
                  <li>• Couvre les frais juridiques et médicaux des tiers</li>
                  <li>• Axée sur la responsabilité et les litiges</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-orange-600 mb-2">Assurance des biens</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Protège vos propres actifs</li>
                  <li>• Couvre les dommages matériels</li>
                  <li>• Axée sur le remplacement des biens</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#1E3A8A] text-white rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">De quoi avez‑vous besoin ?</h2>
            <p className="text-lg">
              La majorité des entreprises ont besoin des <strong>deux garanties</strong>, qui couvrent des risques différents pouvant être lourds financièrement.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à protéger votre entreprise ?
          </h3>
          <p className="text-gray-600 mb-6">
            Obtenez un devis personnalisé incluant RC générale et Assurance Biens.
          </p>
          <Link 
            href="/"
            className="inline-block bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Obtenir mon devis
          </Link>
        </div>
      </article>
    </div>
  );
}
