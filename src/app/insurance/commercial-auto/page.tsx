import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SimpleRiskForm from '@/components/SimpleRiskForm';

export const metadata = {
  title: 'Assurance Auto Commerciale - Insurial',
  description: 'Protégez vos véhicules professionnels, vos conducteurs et votre responsabilité.'
};

export default function CommercialAutoPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-red-50 to-pink-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Auto commerciale</h1>
          <p className="text-xl text-gray-600">Couverture pour les véhicules utilisés dans l’activité : responsabilité auto, collision, tous risques, conducteur non/insuffisamment assuré, et plus.</p>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pourquoi une police Auto commerciale ?</h2>
            <p className="text-gray-700 leading-relaxed">
              Les déplacements professionnels exposent à des pertes coûteuses. Les polices auto personnelles excluent souvent l’usage pro. L’<strong>Auto commerciale</strong> est souvent requise pour les livraisons, chantiers ou flottes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Garanties courantes</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Responsabilité civile (corporel/matériel) vis‑à‑vis des tiers</li>
                <li>Collision et tous risques</li>
                <li>Conducteur non/insuffisamment assuré</li>
                <li>Frais médicaux/PIP (selon région)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Options & exclusions</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>HNOA (véhicules loués/non possédés) pour locations/véhicules personnels à usage pro</li>
                <li>Restrictions liées à l’âge/dossier des conducteurs</li>
                <li>Cargaison souvent couverte via une police distincte (cargo/transit)</li>
                <li>Usage hors USA/Canada généralement exclu</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qui en a besoin ?</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Livraison, léger transport, services sur site</li>
                <li>Construction, maintenance, CVC, électricité</li>
                <li>Commerces utilisant pickups et vans</li>
                <li>Flottes avec plusieurs véhicules et conducteurs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Facteurs de coût</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Type/valeur des véhicules, usage, kilométrage</li>
                <li>Dossiers des conducteurs et historique de sinistres</li>
                <li>Zone d’exploitation et stationnement/garage</li>
                <li>Politiques internes (télématique, formation)</li>
              </ul>
            </div>
          </div>

          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Astuce</h3>
            <p className="text-gray-700">Pour les coursiers et prestataires, un avenant <strong>HNOA</strong> couvre l’usage ponctuel de véhicules loués ou personnels à des fins professionnelles.</p>
          </div>

          <div className="text-center">
            <a href="#score-de-risque" className="inline-flex items-center justify-center bg-[#1E3A8A] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition">
              Obtenir mon score de risque gratuit
            </a>
            <p className="text-sm text-gray-500 mt-2">Gratuit • Sans obligation • Conforme RGPD</p>
          </div>
        </div>
      </section>

      <div id="score-de-risque">
        <SimpleRiskForm />
      </div>

      <FAQ />
      <Footer />
    </div>
  );
}


