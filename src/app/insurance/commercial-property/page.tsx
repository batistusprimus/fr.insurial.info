import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SimpleRiskForm from '@/components/SimpleRiskForm';

export const metadata = {
  title: 'Assurance Biens Commerciaux - Insurial',
  description: 'Protégez bâtiments, équipements et stocks contre incendie, vol, intempéries, et plus.'
};

export default function CommercialPropertyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-50 to-amber-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Biens commerciaux</h1>
          <p className="text-xl text-gray-600">Protégez bâtiments, équipements, stocks et biens mobiliers contre l’incendie, le vol, les dégâts des eaux et autres sinistres couverts.</p>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pourquoi c’est important</h2>
            <p className="text-gray-700 leading-relaxed">
              Une perte matérielle peut arrêter votre activité pendant des semaines. L’assurance Biens commerciaux couvre la réparation/remplacement et peut inclure la <strong>Perte d’exploitation</strong> pour compenser le manque à gagner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Biens assurables</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Bâtiments et améliorations locatives</li>
                <li>Équipements, machines, ordinateurs</li>
                <li>Stocks et marchandises (y compris en transit avec avenant)</li>
                <li>Mobilier, agencements, biens mobiliers professionnels</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exemples de risques couverts</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Incendie, fumée, explosion</li>
                <li>Vol, vandalisme, dégâts des eaux</li>
                <li>Tempête, grêle (selon police et région)</li>
                <li>Panne d’équipement (avec avenant spécifique)</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Points clés</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Valeur à neuf vs. valeur vénale (dépréciation)</li>
                <li>Franchises et clauses de coassurance</li>
                <li>Limites par site et par catégorie</li>
                <li>Inondation/séisme souvent exclus (polices séparées)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Facteurs de coût</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Localisation (aléas, criminalité)</li>
                <li>Type de construction et protections (sprinklers, alarmes)</li>
                <li>Valeurs assurées et historique de sinistres</li>
                <li>Mesures de prévention et maintenance</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Bon à savoir</h3>
            <p className="text-gray-700">La <strong>perte d’exploitation</strong> se déclenche généralement après un dommage matériel couvert. Vérifiez les délais de carence et sous‑limites.</p>
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


