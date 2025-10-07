import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Retour à Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-gray-600">
              Dernière mise à jour : janvier 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Qui sommes‑nous</h2>
            <p className="mb-6">
              Insurial est opéré par <strong>BPC Group</strong>, responsable de traitement engagé pour la protection de votre vie privée.
              Nous fournissons un service de demande de devis d’assurance aux PME/ETI en Europe et aux États‑Unis.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Données collectées</h2>
            <p className="mb-4">Lorsque vous demandez un devis, nous collectons :</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Informations d’entreprise (besoins de couverture, localisation, budget, taille, secteur)</li>
              <li>Coordonnées (nom, email pro, téléphone, site web)</li>
              <li>Données techniques (adresse IP, navigateur, paramètres UTM)</li>
              <li>Preuves de consentement et préférences de communication</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Utilisation de vos données</h2>
            <p className="mb-4">Nous traitons vos données pour :</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Fournir des devis personnalisés sous 24h</li>
              <li>Vous mettre en relation avec des partenaires assureurs adaptés</li>
              <li>Communiquer sur votre demande et assurer le suivi</li>
              <li>Améliorer nos services et performances du site</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Partage de données</h2>
            <p className="mb-4">Nous partageons vos informations uniquement avec :</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Des partenaires assureurs vérifiés pour fournir vos devis</li>
              <li>Des prestataires aidant à l’opération de la plateforme (hébergement, email, analytics)</li>
              <li>Les autorités compétentes si la loi l’exige</li>
            </ul>
            <p className="mb-6">
              <strong>Nous ne vendons jamais vos données.</strong> Tous les partenaires s’engagent contractuellement à protéger vos informations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Durée de conservation</h2>
            <p className="mb-6">
              Vos données sont conservées jusqu’à 3 ans pour assurer le service et répondre aux obligations légales.
              Vous pouvez demander la suppression à tout moment (voir Vos droits ci‑dessous).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Vos droits (RGPD)</h2>
            <p className="mb-4">Vous avez le droit de :</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Accéder à vos données personnelles</li>
              <li>Rectifier les informations inexactes</li>
              <li>Demander l’effacement de vos données</li>
              <li>Vous opposer au traitement ou en demander la limitation</li>
              <li>Bénéficier de la portabilité</li>
              <li>Retirer votre consentement à tout moment</li>
            </ul>
            <p className="mb-6">
              Pour exercer ces droits, contactez‑nous à <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Sécurité</h2>
            <p className="mb-6">
              Nous appliquons des mesures de sécurité conformes aux standards (chiffrement SSL, hébergement sécurisé, audits réguliers) pour protéger vos données.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Transferts internationaux</h2>
            <p className="mb-6">
              Des transferts de données peuvent avoir lieu entre les États‑Unis et l’UE. Tous les transferts sont encadrés (notamment Clauses Contractuelles Types).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2">
                <strong>Délégué à la protection des données :</strong> BPC Group<br />
                <strong>Email :</strong> <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a><br />
                <strong>Délai de réponse :</strong> sous 72 heures
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Pour les résidents de l’UE : vous pouvez introduire une réclamation auprès de votre autorité locale de protection des données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
