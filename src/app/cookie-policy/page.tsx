import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Retour à Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Politique de cookies
            </h1>
            <p className="text-gray-600">Dernière mise à jour : septembre 2025</p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <p className="mb-6">
              Cette Politique de cookies explique comment Insurial utilise des cookies et technologies similaires sur notre site.
              Pour en savoir plus sur le traitement de vos données personnelles, consultez notre <Link href="/privacy" className="text-[#1E3A8A] hover:underline">Politique de confidentialité</Link>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Qu’est‑ce qu’un cookie ?</h2>
            <p className="mb-6">
              Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite. Il aide le site à fonctionner, à mémoriser vos préférences et à mesurer l’usage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types de cookies utilisés</h2>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Essentiels</strong> : nécessaires au fonctionnement (sécurité, répartition de charge, préférences de base).</li>
              <li><strong>Analytics</strong> : nous aident à comprendre l’usage pour améliorer performances et contenus.</li>
              <li><strong>Marketing</strong> : mesurent la performance des campagnes et, le cas échéant, personnalisent le contenu.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Utilisation des cookies</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Assurer la sécurité et la disponibilité du site</li>
              <li>Mesurer la performance des pages et l’engagement</li>
              <li>Mémoriser vos choix (langue, préférences cookies)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Gérer vos préférences</h2>
            <p className="mb-6">
              Vous pouvez gérer les cookies optionnels à tout moment via les <Link href="/cookie-settings" className="text-[#1E3A8A] hover:underline">Paramètres des cookies</Link>.
              Vous pouvez également contrôler les cookies via les réglages du navigateur. La désactivation de certains cookies peut impacter le fonctionnement du site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Durée de conservation</h2>
            <p className="mb-6">
              La durée de vie des cookies varie. Les cookies de session expirent à la fermeture du navigateur ; les cookies persistants peuvent durer jusqu’à 13 mois sauf suppression anticipée.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies tiers</h2>
            <p className="mb-6">
              Le cas échéant, des fournisseurs tiers (analytics/marketing) déposent des cookies selon leurs propres politiques. Nous ne les activons que lorsque nécessaire ou avec votre consentement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
            <p className="mb-6">
              Pour toute question sur cette politique, contactez‑nous à <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
