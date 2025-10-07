import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Retour à Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Avertissement
            </h1>
            <p className="text-gray-600">Dernière mise à jour : septembre 2025</p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finalité éducative uniquement</h2>
            <p className="mb-6">
              Le contenu d’Insurial.info est fourni à titre informatif et pédagogique uniquement. Il ne constitue pas un conseil juridique, fiscal, comptable ou d’assurance.
              Vous devez consulter des professionnels habilités avant toute décision relative à vos couvertures.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Pas de services de courtier ou d’assureur</h2>
            <p className="mb-6">
              Insurial ne vend pas d’assurances et n’agit pas comme courtier ou assureur. Toute référence à des couvertures est illustrative et non contractuelle.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Exactitude et disponibilité</h2>
            <p className="mb-6">
              Les informations peuvent devenir obsolètes ou contenir des erreurs. Le site est fourni « en l’état » sans garantie d’exhaustivité, d’exactitude ou de disponibilité.
              Nous pouvons mettre à jour, retirer ou suspendre des contenus à tout moment sans préavis.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Liens et données tiers</h2>
            <p className="mb-6">
              Nous pouvons référencer des sources externes ou des sites tiers. Nous ne contrôlons ni n’endossons ces contenus et déclinons toute responsabilité quant aux dommages résultant de leur utilisation.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation de responsabilité</h2>
            <p className="mb-6">
              Dans la limite permise par la loi, Insurial et BPC Group ne sauraient être responsables des dommages indirects, accessoires, spéciaux ou consécutifs liés à l’utilisation de ce site.
              Voir nos <Link href="/terms" className="text-[#1E3A8A] hover:underline">Conditions d’utilisation</Link> pour en savoir plus.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
            <p className="mb-6">
              Pour toute question relative au contenu du site, contactez <a href="mailto:legal@insurial.info" className="text-[#1E3A8A] hover:underline">legal@insurial.info</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
