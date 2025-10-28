import CyberMultiStepForm from '@/components/CyberMultiStepForm';

export default function CyberRisksPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero moderne */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                Insurial Cyber Risks
              </span>
              <h1 className="mt-4 font-archivo-black text-3xl md:text-5xl text-gray-900 leading-tight">
                Protégez votre entreprise des cyber menaces
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
                Assurance cyber complète: réponse à incident 24/7, restauration des systèmes, notification CNIL, défense juridique et pertes d’exploitation. Conçue pour les entreprises exposées.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-center"><span className="mr-2 text-blue-700">✓</span> Assistance d’urgence 24/7</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700">✓</span> Ransomware, fraude, fuites de données</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700">✓</span> Notifications CNIL, défense et responsabilités</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700">✓</span> Couverture pertes d’exploitation</li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="bg-white/80 backdrop-blur border rounded-2xl shadow-xl p-4 md:p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Obtenir un devis personnalisé</h2>
                <CyberMultiStepForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections de crédibilité */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pourquoi essentiel</h3>
              <p className="text-gray-700">
                Les incidents cyber augmentent: ransomware, compromissions, fraudes. Une police dédiée mitige l’impact opérationnel, financier et réglementaire.
              </p>
            </div>
            <div className="p-6 border rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exemples couverts</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Chiffrement serveurs (rançongiciel)</li>
                <li>Fuite de données et notification CNIL</li>
                <li>Paralysie e‑commerce et perte de CA</li>
              </ul>
            </div>
            <div className="p-6 border rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prérequis typiques</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>MFA, sauvegardes, patching régulier</li>
                <li>Protection email et postes</li>
                <li>Plan de réponse à incident</li>
              </ul>
            </div>
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
        <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-gray-600 space-y-1">
          <p>Insurial est une plateforme d’information indépendante.</p>
          <p>Aucun démarchage commercial.</p>
          <p>© 2025 Insurial – Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}


