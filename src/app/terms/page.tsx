import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Retour à Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Conditions d’utilisation
            </h1>
            <p className="text-gray-600">
              Dernière mise à jour : janvier 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptation des conditions</h2>
            <p className="mb-6">
              En accédant à Insurial.info (le « Service ») et en l’utilisant, vous acceptez d’être lié par les présentes
              Conditions d’utilisation ainsi que par notre Politique de confidentialité. Le Service est exploité par
              <strong> BPC Group</strong> (« nous », « notre »).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Description du Service</h2>
            <p className="mb-6">
              Insurial est un service d’information et de mise en relation. Nous aidons les entreprises à comprendre les
              options de couverture disponibles et transmettons leurs coordonnées à des professionnels partenaires (courtiers,
              assureurs) afin qu’ils puissent les contacter pour des propositions adaptées. Nous ne fournissons aucun conseil
              personnalisé et n’agissons pas en tant que courtier.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Obligations de l’utilisateur</h2>
            <p className="mb-4">En utilisant notre Service, vous vous engagez à :</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Fournir des informations exactes et complètes dans les demandes de devis</li>
              <li>Utiliser une adresse email professionnelle légitime</li>
              <li>Ne pas soumettre d’informations fausses, trompeuses ou frauduleuses</li>
              <li>Respecter l’ensemble des lois et réglementations applicables</li>
              <li>Ne pas tenter de contourner nos mesures de sécurité</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Nos engagements</h2>
            <p className="mb-4">Nous nous engageons à :</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Faciliter une mise en relation rapide (objectif : sous 24 heures ouvrées)</li>
              <li>Vous mettre en relation uniquement avec des partenaires professionnels vérifiés</li>
              <li>Protéger vos données conformément à notre Politique de confidentialité</li>
              <li>Offrir un service gratuit sans obligation d’achat</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Avertissements</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="mb-4"><strong>Important :</strong></p>
              <ul className="list-disc pl-6">
                <li>Nous ne garantissons ni la disponibilité des devis ni des tarifs spécifiques</li>
                <li>Les partenaires d’assurance prennent des décisions de souscription indépendantes</li>
                <li>Les délais de remise de devis peuvent varier en période de forte demande</li>
                <li>Nous ne sommes pas responsables des actions ou décisions des partenaires</li>
                <li>Le Service est fourni « en l’état » sans garantie</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation de responsabilité</h2>
            <p className="mb-6">
              Dans la limite autorisée par la loi, BPC Group ne saurait être tenu responsable de tout dommage indirect,
              accessoire, spécial ou consécutif résultant de l’utilisation du Service. Notre responsabilité totale est
              limitée à 100 € ou l’équivalent dans votre devise locale.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Traitement des données</h2>
            <p className="mb-6">
              En utilisant notre Service, vous consentez au traitement de vos données tel que décrit dans notre
              <Link href="/privacy" className="text-[#1E3A8A] hover:underline">Politique de confidentialité</Link>.
              Pour les clients professionnels, un <Link href="/dpa" className="text-[#1E3A8A] hover:underline">Contrat de traitement des données (DPA)</Link>
              est disponible.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Résiliation</h2>
            <p className="mb-6">
              Vous pouvez cesser d’utiliser le Service à tout moment. Nous pouvons suspendre ou résilier l’accès en cas
              de violation des présentes Conditions. Après résiliation, ces Conditions restent applicables pour les
              opérations déjà réalisées.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Droit applicable</h2>
            <p className="mb-6">
              Les présentes Conditions sont régies par le droit français pour les utilisateurs de l’UE et par le droit
              du Delaware pour les utilisateurs américains, sans égard aux règles de conflit de lois.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Modifications</h2>
            <p className="mb-6">
              Nous pouvons mettre à jour ces Conditions périodiquement. La poursuite de l’utilisation du Service après
              modification vaut acceptation des nouvelles Conditions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2">
                <strong>BPC Group</strong><br />
                <strong>Email :</strong> <a href="mailto:legal@insurial.info" className="text-[#1E3A8A] hover:underline">legal@insurial.info</a><br />
                <strong>Délai de réponse :</strong> sous 48 heures
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Pour toute urgence ou litige, contactez‑nous directement par email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
