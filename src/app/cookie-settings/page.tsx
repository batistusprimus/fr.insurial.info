import Link from 'next/link';

export default function CookieSettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Retour à Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Paramètres des cookies
            </h1>
            <p className="text-gray-600">Gérez vos préférences de cookies ci‑dessous.</p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <p className="mb-6">
              Ces paramètres décrivent les catégories utilisées sur ce site. Certains cookies sont essentiels et ne peuvent pas être désactivés.
              Pour plus de détails, consultez notre <Link href="/cookie-policy" className="text-[#1E3A8A] hover:underline">Politique de cookies</Link>.
            </p>

            <div className="mb-6 p-4 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Essentiels (toujours actifs)</h2>
              <p className="text-gray-700">Nécessaires pour la sécurité, la gestion réseau et les fonctions de base du site.</p>
            </div>

            <div className="mb-6 p-4 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h2>
              <p className="text-gray-700">Nous aident à améliorer contenus et performances. Vous pouvez vous opposer via votre navigateur ou des extensions.</p>
            </div>

            <div className="mb-6 p-4 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Marketing</h2>
              <p className="text-gray-700">Mesurent la performance des campagnes. Si activés ultérieurement, nous solliciterons votre consentement si requis.</p>
            </div>

            <p className="text-gray-700">
              Vous pouvez aussi contrôler les cookies via votre navigateur (blocage, suppression, vidage du stockage). La désactivation des cookies non essentiels n’affecte pas l’accès au contenu pédagogique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
