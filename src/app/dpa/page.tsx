import Link from 'next/link';

export default function DPAPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Retour à Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Accord de traitement des données (DPA)
            </h1>
            <p className="text-gray-600">
              Dernière mise à jour : janvier 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Pour les clients professionnels</h2>
              <p className="text-gray-700">
                Cet accord (DPA) s’applique lorsque votre organisation agit en tant que Responsable de traitement
                et que BPC Group traite des données personnelles pour votre compte dans le cadre des services Insurial.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Définitions</h2>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>« Responsable » :</strong> Votre organisation demandant des devis</li>
              <li><strong>« Sous‑traitant » :</strong> BPC Group (opérateur d’Insurial)</li>
              <li><strong>« Données personnelles » :</strong> Données d’employés/clients incluses dans les demandes</li>
              <li><strong>« Traitement » :</strong> Mise en relation et facilitation de devis</li>
              <li><strong>« Sous‑traitant ultérieur » :</strong> Partenaires assureurs et prestataires</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Portée du traitement</h2>
            <p className="mb-4"><strong>Categories of Personal Data:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Coordonnées (noms, emails, numéros de téléphone)</li>
              <li>Informations d’entreprise (taille, secteur, localisation)</li>
              <li>Besoins et préférences d’assurance</li>
            </ul>
            
            <p className="mb-4"><strong>Catégories de personnes concernées :</strong></p>
            <ul className="list-disc pl-6 mb-6">
              <li>Vos employés et représentants autorisés</li>
              <li>Vos clients (si inclus dans l’évaluation des risques)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Instructions de traitement</h2>
            <p className="mb-6">
              BPC Group traitera les Données personnelles uniquement pour fournir les services de devis,
              conformément aux Conditions d’utilisation et à vos instructions documentées.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Mesures de sécurité</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Chiffrement SSL/TLS en transit</li>
              <li>Chiffrement au repos</li>
              <li>Contrôles d’accès et authentification</li>
              <li>Évaluations de sécurité régulières</li>
              <li>Formation du personnel à la protection des données</li>
              <li>Procédures de réponse aux incidents</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Sous‑traitance</h2>
            <p className="mb-4">We engage the following categories of sub-processors:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Partenaires assureurs :</strong> Fourniture de devis (vérifiés et contractuellement engagés)</li>
              <li><strong>Hébergement cloud :</strong> Stockage et traitement sécurisés</li>
              <li><strong>Services email :</strong> Envoi de devis et communications</li>
            </ul>
            <p className="mb-6">
              Les sous‑traitants sont soumis à des obligations de protection équivalentes.
              Nous vous informerons de toute modification avec un préavis de 30 jours.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Droits des personnes</h2>
            <p className="mb-6">
              Nous vous assisterons pour les demandes (accès, rectification, effacement, etc.) sous 72 heures.
              Des outils et processus facilitent votre conformité.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Notification de violation</h2>
            <p className="mb-6">
              Nous vous notifierons toute violation sous 24 heures après découverte,
              avec détails, données affectées et mesures correctives.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Transferts internationaux</h2>
            <p className="mb-6">
              Les transferts entre les États‑Unis et l’UE sont encadrés par les Clauses Contractuelles Types (CCT)
              de la Commission européenne. Une protection adéquate est assurée pour tout transfert transfrontalier.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Droit d’audit</h2>
            <p className="mb-6">
              Vous pouvez demander des informations d’audit annuelles. Nous fournissons rapports et certifications.
              Des audits sur site peuvent être organisés avec un préavis raisonnable.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Conservation et suppression</h2>
            <p className="mb-6">
              Les données sont conservées 3 ans ou selon vos instructions. À la fin du service ou sur demande,
              nous supprimons ou restituons les données sous 30 jours, sauf obligation légale contraire.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact & exécution</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">
                <strong>Pour exécuter ce DPA ou poser des questions :</strong>
              </p>
              <p className="mb-2">
                <strong>Email :</strong> <a href="mailto:dpa@insurial.info" className="text-[#1E3A8A] hover:underline">dpa@insurial.info</a><br />
                <strong>Objet :</strong> Demande DPA - [Nom de votre entreprise]<br />
                <strong>Délai de réponse :</strong> sous 48 heures
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Ce DPA prend effet dès votre première utilisation des services Insurial ou à la signature,
                selon la première occurrence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
