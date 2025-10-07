import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SimpleRiskForm from '@/components/SimpleRiskForm';

export const metadata = {
  title: "Assurance Accidents du Travail - Insurial",
  description: 'Protégez les employés et restez conforme aux lois locales. Couverture des frais médicaux, pertes de salaire, et plus.'
};

export default function WorkersCompensationPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Accidents du travail</h1>
          <p className="text-xl text-gray-600">Obligatoire dans la plupart des régions dès que vous avez des salariés. Couvre les frais médicaux, pertes de salaire et la rééducation après accidents ou maladies professionnelles.</p>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pourquoi c’est important</h2>
            <p className="text-gray-700 leading-relaxed">
              Au‑delà des obligations légales, l’Assurance accidents du travail protège votre équipe et votre entreprise des coûts liés aux accidents. Elle réduit les litiges et favorise un retour au travail plus rapide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ce qui est couvert</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Frais médicaux liés à des blessures ou maladies professionnelles</li>
                <li>Remplacement de salaire (incapacité temporaire/partielle)</li>
                <li>Rééducation et soins de suivi</li>
                <li>Indemnités en cas d’invalidité permanente ou de décès</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ce qui n’est pas couvert</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Blessures hors du cadre du travail</li>
                <li>Fraude ou violations volontaires de sécurité</li>
                <li>Montants au‑delà des barèmes applicables</li>
                <li>Travailleurs non déclarés (attention aux audits)</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qui doit la souscrire ?</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>La plupart des employeurs dès 1–3 salariés (selon la région)</li>
                <li>Secteurs à risque : construction, industrie, logistique</li>
                <li>Startups et services professionnels avec salariés</li>
                <li>Certains indépendants/entrepreneurs selon les règles/contrats</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Facteurs de coût</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Codes de classification et masse salariale</li>
                <li>Modificateur d’expérience (MOD/X‑Mod)</li>
                <li>Programmes de sécurité et formations</li>
                <li>Règles locales, audits et ajustements</li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Conseil conformité</h3>
            <p className="text-gray-700">Anticipez les audits annuels en tenant des registres précis : paie, codes de classification, attestations des sous‑traitants.</p>
          </div>

          <div className="text-center">
            <a href="#risk-score-form" className="inline-flex items-center justify-center bg-[#1E3A8A] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition">
              Obtenir mon score de risque gratuit
            </a>
            <p className="text-sm text-gray-500 mt-2">Gratuit • Sans obligation • Conforme RGPD</p>
          </div>
        </div>
      </section>

      <div id="risk-score-form">
        <SimpleRiskForm />
      </div>

      <FAQ />
      <Footer />
    </div>
  );
}


