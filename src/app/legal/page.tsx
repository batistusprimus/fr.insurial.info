import Link from 'next/link';

export default function LegalMentionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Retour à Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Informations légales
            </h1>
            <p className="text-gray-600">
              Dernière mise à jour : septembre 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Éditeur</h2>
            <p className="mb-6">
              Le site <strong>Insurial.info</strong> est édité par <strong>BPC Group</strong> (l’« Éditeur »).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Nature du service</h2>
            <p className="mb-6">
              Insurial.info est une plateforme éducative dédiée à l’assurance des entreprises. 
              Elle propose un outil gratuit de « Score de risque » (données : secteur, taille, localisation, chiffre d’affaires). 
              Insurial ne vend pas d’assurances et n’agit pas en tant que courtier ou assureur. Aucune offre d’assurance
              n’est proposée directement sur le site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="mb-2">
                <strong>Général :</strong> <a href="mailto:hello@insurial.info" className="text-[#1E3A8A] hover:underline">hello@insurial.info</a><br />
                <strong>Vie privée :</strong> <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a><br />
                <strong>Légal :</strong> <a href="mailto:legal@insurial.info" className="text-[#1E3A8A] hover:underline">legal@insurial.info</a>
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Adresse de correspondance</h2>
            <p className="mb-6">
              BPC Group – Correspondance : 38/A Rózsa utca, 1077 Budapest, Hongrie.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Hébergement</h2>
            <p className="mb-6">
              Le site est hébergé sur une infrastructure cloud sécurisée. Les données sont protégées via SSL et des mesures de sécurité appropriées.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Propriété intellectuelle</h2>
            <p className="mb-6">
              L’ensemble des contenus (textes, images, graphismes, structure, logos) publiés sur Insurial.info est protégé par le droit d’auteur 
              et la propriété intellectuelle. Toute reproduction, représentation, modification, publication, transmission ou altération, totale ou partielle,
              par tout moyen et sur tout support, est interdite sans l’accord écrit préalable de l’Éditeur.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Responsabilité</h2>
            <p className="mb-6">
              Les informations disponibles sur Insurial.info sont fournies à titre informatif et pédagogique. Malgré le soin apporté à leur exactitude,
              l’Éditeur ne peut garantir l’absence d’erreurs ou d’omissions ni l’actualisation continue des contenus. Les décisions prises sur la base des
              informations du site relèvent de la seule responsabilité des utilisateurs. Le site est fourni « en l’état », sans garantie d’exhaustivité
              ni d’adéquation à un usage particulier.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Données personnelles</h2>
            <p className="mb-6">
              Pour les détails sur le traitement des données (finalités, base légale, destinataires, conservation, droits, transferts),
              veuillez consulter notre <Link href="/privacy" className="text-[#1E3A8A] hover:underline">Politique de confidentialité</Link> et, le cas échéant,
              notre <Link href="/dpa" className="text-[#1E3A8A] hover:underline">Accord de traitement des données</Link>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Liens externes</h2>
            <p className="mb-6">
              Le site peut contenir des liens vers des sites tiers. L’Éditeur n’a aucun contrôle sur ces ressources externes et ne peut être tenu responsable
              de leur contenu, de leurs pratiques ou de tout dommage pouvant résulter de leur utilisation.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Droit applicable</h2>
            <p className="mb-6">
              Ce site et ces Informations légales sont régis par le droit français pour les utilisateurs situés dans l’UE et par le droit de l’État du Delaware (USA)
              pour les utilisateurs situés aux États‑Unis, sans préjudice des règles impératives de protection des consommateurs.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mises à jour</h2>
            <p className="mb-6">
              Cette page peut être mise à jour à tout moment pour refléter les évolutions du site, des services ou de la réglementation. La date de mise à jour figure ci‑dessus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
