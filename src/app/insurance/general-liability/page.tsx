import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SimpleRiskForm from '@/components/SimpleRiskForm';

export const metadata = {
  title: 'Responsabilité Civile Professionnelle (RC Pro) - Insurial',
  description: 'Protégez votre activité contre les dommages corporels, matériels et atteintes causés à des tiers dans le cadre professionnel.'
};

export default function GeneralLiabilityPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Responsabilité Civile Professionnelle (RC Pro)</h1>
          <p className="text-xl text-gray-600">Protection essentielle contre les réclamations de tiers (dommages corporels, matériels, atteintes personnelles & publicitaires) liées à votre activité.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">À quoi sert la RC Pro ?</h2>
            <p className="text-gray-700 leading-relaxed">
              La RC générale protège votre entreprise lorsqu’un tiers (client, visiteur, bailleur, etc.) allègue un dommage causé par vos activités quotidiennes. Souvent exigée pour signer un bail, accéder à des chantiers ou travailler avec des grands comptes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ce que couvre la RC Pro</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Dom­mages corporels causés à des tiers (ex. chute d’un client dans vos locaux)</li>
                <li>Dom­mages matériels causés à des tiers</li>
                <li>Atteintes personnelles et publicitaires (diffamation, calomnie, usage non autorisé de slogan/visuel)</li>
                <li>Frais de défense et règlements/jugements, dans la limite de votre police</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ce que la RC Pro ne couvre pas</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Vos propres biens (bâtiments, équipements, stock) → voir Biens commerciaux</li>
                <li>Blessures des employés → voir Accidents du travail</li>
                <li>Fautes professionnelles (conseil, conception, code) → voir RC Pro/E&O</li>
                <li>Accidents auto professionnels → voir Auto commerciale</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qui en a besoin ?</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Construction, maintenance, services sur site</li>
                <li>Retail, restauration, tout lieu recevant du public</li>
                <li>Logistique, entreposage, installation</li>
                <li>Startups et services professionnels avec exigences contractuelles</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Facteurs de coût (en bref)</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Secteur et exposition (travaux en hauteur, produits manipulés)</li>
                <li>Taille (CA, effectifs, géographies)</li>
                <li>Historique de sinistres et limites exigées contractuellement</li>
                <li>Franchise choisie, options additionnelles (produits, achèvement de travaux)</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Astuce</h3>
            <p className="text-gray-700">Si vos contrats exigent un certificat d’assurance (COI) avec des limites spécifiques, confirmez‑les avant la souscription pour éviter des avenants et des coûts supplémentaires.</p>
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


