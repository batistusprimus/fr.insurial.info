import CyberMultiStepForm from '@/components/CyberMultiStepForm';
import Image from 'next/image';

export default function CyberRisksPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero moderne */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="mb-4">
                <Image
                  src="/logo_insurial_cyber.png"
                  alt="Insurial Cyber Risks"
                  width={220}
                  height={60}
                  priority
                />
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                Assurance cyber — informations générales
              </span>
              <h1 className="mt-4 font-archivo-black text-3xl md:text-5xl text-gray-900 leading-tight">
                Informations factuelles et questionnaire de mise en relation
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
                Contenu indicatif et non exhaustif. Aucun conseil personnalisé n’est fourni.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-sm px-3 py-1 rounded-full bg-white/70 border text-gray-800">Restauration des systèmes</span>
                <span className="text-sm px-3 py-1 rounded-full bg-white/70 border text-gray-800">Notification CNIL</span>
                <span className="text-sm px-3 py-1 rounded-full bg-white/70 border text-gray-800">Défense & RC</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#questionnaire" className="px-6 py-3 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold">Accéder au questionnaire</a>
                <a href="#informations" className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-white/60 transition-colors">Voir les informations générales</a>
              </div>
              <p className="mt-3 text-xs text-gray-600 max-w-2xl">
                Insurial met en relation des entreprises ayant un besoin identifié avec des courtiers et assureurs spécialisés en cybersécurité. Nous ne sommes pas assureur. Pour en savoir plus, consultez nos
                {' '}<a href="/legal" className="underline text-[#1E3A8A]">mentions légales</a>,
                {' '}<a href="/terms" className="underline text-[#1E3A8A]">conditions d’utilisation</a>
                {' '}et notre <a href="/privacy" className="underline text-[#1E3A8A]">politique de confidentialité</a>.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-white/70 backdrop-blur border rounded-2xl shadow-xl p-6 md:p-8">
                <div className="text-sm font-medium text-gray-700">Évaluation gratuite • 3 minutes</div>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex items-center"><span className="mr-2 text-blue-700">✓</span> Questionnaire simple et adapté</li>
                  <li className="flex items-center"><span className="mr-2 text-blue-700">✓</span> Mise en relation avec des spécialistes</li>
                  <li className="flex items-center"><span className="mr-2 text-blue-700">✓</span> Sans démarchage commercial</li>
                </ul>
                <a href="#questionnaire" className="inline-block mt-6 px-5 py-2.5 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800 transition-colors">Commencer</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos confiance retirés (positionnement neutre) */}

      {/* Informations générales */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 id="informations" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Informations générales sur l’assurance cyber</h2>
          <p className="text-gray-600 mb-8">Les éléments ci-dessous sont fournis à titre indicatif et peuvent varier selon les contrats proposés par des professionnels tiers.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Réponse à incident', d: 'Intervention dédiée: forensics, confinement, reprise et communication de crise.' },
              { t: 'Pertes d’exploitation', d: 'Indemnisation du manque à gagner en cas d’interruption d’activité.' },
              { t: 'Responsabilité civile et défense', d: 'Prise en charge des frais juridiques et des réclamations de tiers.' },
              { t: 'Protection des données', d: 'Notification CNIL, information des personnes, surveillance et remédiation.' },
              { t: 'Fraude et cybercriminalité', d: 'Certains scénarios de fraude, hameçonnage et transferts illicites.' },
              { t: 'Restauration des systèmes', d: 'Réinstallation, récupération de données et assistance technique.' },
            ].map((card) => (
              <div key={card.t} className="p-6 border rounded-xl hover:shadow-md transition-shadow bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.t}</h3>
                <p className="text-gray-700">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulé retiré pour éviter un ton prescriptif */}

      {/* Section promotionnelle retirée */}

      {/* Sections de logos (événements / outils) retirées pour alléger la page */}

      {/* Formulaire déplacé */}
      <section id="questionnaire" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Compléter votre questionnaire gratuit</h2>
            <p className="text-gray-600 mt-2">Répondez à quelques questions (moins de 3 minutes). Mise en relation rapide — contact sous 24h.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border p-4 md:p-6">
            <CyberMultiStepForm />
          </div>
        </div>
      </section>

      {/* FAQ retirée */}

      <footer className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-gray-600 space-y-2">
          <p>Insurial est une plateforme d’information indépendante. Aucun démarchage commercial.</p>
          <p>
            <a href="/legal" className="underline text-gray-700 hover:text-gray-900">Mentions légales</a>
            {' '}•{' '}
            <a href="/terms" className="underline text-gray-700 hover:text-gray-900">Conditions d’utilisation</a>
            {' '}•{' '}
            <a href="/privacy" className="underline text-gray-700 hover:text-gray-900">Politique de confidentialité</a>
          </p>
          <p>© 2025 Insurial – Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}


