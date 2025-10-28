import CyberMultiStepForm from '@/components/CyberMultiStepForm';
import PressLogos from '@/components/PressLogos';
import SummitsLogos from '@/components/SummitsLogos';
import TechLogos from '@/components/TechLogos';
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
                Insurial Cyber Risks
              </span>
              <h1 className="mt-4 font-archivo-black text-3xl md:text-5xl text-gray-900 leading-tight">
                Protégez votre entreprise des cyber menaces
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
                Découvrez les garanties clés de l’assurance cyber: réponse à incident 24/7, restauration des systèmes, notification CNIL, défense juridique et couverture des pertes d’exploitation. Informations claires pour les entreprises exposées.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-center"><span className="mr-2 text-blue-700">✓</span> Assistance d’urgence 24/7</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700">✓</span> Ransomware, fraude, fuites de données</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700">✓</span> Notifications CNIL, défense et responsabilités</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700">✓</span> Couverture pertes d’exploitation</li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#questionnaire" className="px-6 py-3 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold">Commencer mon questionnaire</a>
                <a href="#garanties" className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-white/60 transition-colors">Voir les garanties courantes</a>
              </div>
              <p className="mt-3 text-xs text-gray-600 max-w-2xl">
                Insurial met en relation des entreprises ayant un besoin identifié avec des courtiers et assureurs spécialisés en cybersécurité. Nous ne sommes pas assureur. Pour en savoir plus, consultez nos
                {' '}<a href="/legal" className="underline text-[#1E3A8A]">mentions légales</a>,
                {' '}<a href="/terms" className="underline text-[#1E3A8A]">conditions d’utilisation</a>
                {' '}et notre <a href="/privacy" className="underline text-[#1E3A8A]">politique de confidentialité</a>.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-white/60 backdrop-blur border rounded-2xl shadow-xl p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Réponse à incident</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">72h</div>
                    <div className="text-sm text-gray-600">Notification CNIL</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">€</div>
                    <div className="text-sm text-gray-600">Pertes d’exploitation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+ Juridique</div>
                    <div className="text-sm text-gray-600">Défense & RC</div>
                  </div>
                </div>
                <a href="#questionnaire" className="inline-block mt-6 px-5 py-2.5 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800 transition-colors">Commencer mon questionnaire</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos confiance */}
      <PressLogos />

      {/* Garanties courantes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 id="garanties" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Garanties courantes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              { t: 'Réponse à incident 24/7', d: 'Forensics, confinement, restauration, communication de crise.' },
              { t: 'Pertes d’exploitation', d: 'Indemnisation du manque à gagner lié à l’arrêt d’activité.' },
              { t: 'Responsabilité et défense', d: 'Frais juridiques, gestion des réclamations de tiers.' },
              { t: 'Gestion des données', d: 'Notification CNIL, information des personnes, monitoring.' },
              { t: 'Fraude & phishing', d: 'Couverture de certains scénarios de fraude et transfert de fonds.' },
              { t: 'Restauration systèmes', d: 'Réinstallation, récupération de données, accompagnement technique.' },
            ].map((card) => (
              <div key={card.t} className="p-6 border rounded-xl hover:shadow-md transition-shadow bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.t}</h3>
                <p className="text-gray-700">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulé type via partenaires */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Déroulé type d’une prise en charge</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '01', t: 'Signalement', d: 'Contact 24/7 auprès de l’assureur, prise en charge initiale.' },
              { n: '02', t: 'Confinement', d: 'Forensics et limitation de l’impact par des équipes dédiées.' },
              { n: '03', t: 'Restauration', d: 'Remise en service, accompagnement technique et légal.' },
              { n: '04', t: 'Indemnisation', d: 'Évaluation des pertes et règlement selon contrat.' },
            ].map(step => (
              <div key={step.n} className="p-6 rounded-xl bg-white border">
                <div className="text-sm font-semibold text-blue-800">{step.n}</div>
                <div className="text-lg font-semibold text-gray-900">{step.t}</div>
                <p className="text-gray-700 mt-2 text-sm">{step.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">Exemple générique de parcours de prise en charge assuré par des partenaires (courtiers/assureurs). Les modalités dépendent des contrats.</p>
        </div>
      </section>

      {/* Pourquoi Insurial */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Pourquoi choisir Insurial</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              { t: 'Indépendant et pédagogique', d: 'Aucun démarchage. Informations claires et comparables.' },
              { t: 'Réseau d’experts', d: 'Courtiers & assureurs spécialisés cyber, intervention 24/7.' },
              { t: 'Simple et rapide', d: 'Questionnaire adapté, mise en relation sous 24h.' },
            ].map((v) => (
              <div key={v.t} className="p-6 border rounded-xl bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{v.t}</h3>
                <p className="text-gray-700">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SummitsLogos />
      <TechLogos />

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

      {/* FAQ succincte */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border rounded-xl">
              <div className="font-semibold text-gray-900 mb-2">Obligations RGPD</div>
              <div className="text-gray-700 text-sm">Notification CNIL sous 72h en cas de violation de données, information des personnes concernées selon le risque.</div>
            </div>
            <div className="p-6 bg-white border rounded-xl">
              <div className="font-semibold text-gray-900 mb-2">Prérequis techniques</div>
              <div className="text-gray-700 text-sm">Souvent requis (MFA, sauvegardes, patching) pour l’éligibilité et de meilleurs tarifs.</div>
            </div>
            <div className="p-6 bg-white border rounded-xl">
              <div className="font-semibold text-gray-900 mb-2">Assistance 24/7</div>
              <div className="text-gray-700 text-sm">Cellule d’intervention cyber dédiée: forensics, restauration, communication de crise.</div>
            </div>
          </div>
        </div>
      </section>

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


