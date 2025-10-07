import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SimpleRiskForm from '@/components/SimpleRiskForm';

export const metadata = {
  title: "Pack TPE / Multirisque Professionnelle complète - Insurial",
  description: 'Regroupez RC Pro, Multirisque Pro (Biens), Perte d’exploitation et Protection juridique dans une offre complète pour TPE/PME.'
};

export default function BopPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pack TPE / Multirisque Pro complète</h1>
          <p className="text-xl text-gray-600">Un pack tout‑en‑un combinant RC Pro, Multirisque Pro (Biens), Perte d’exploitation et Protection juridique — souvent plus économique que des polices séparées.</p>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir un Pack TPE ?</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce pack s’adresse aux TPE/PME qui veulent une protection de base solide : RC Pro + Multirisque Pro (Biens). Il peut inclure la Perte d’exploitation, la Protection juridique et des avenants spécifiques à votre secteur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ce qu’inclut généralement le Pack</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>RC Pro (corporel, matériel, atteinte publicitaire)</li>
                <li>Multirisque Pro (bâtiments, équipements, stocks)</li>
                <li>Perte d’exploitation (selon limites/conditions)</li>
                <li>Protection juridique, avenants spécifiques secteur</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limites et exclusions courantes</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Auto commerciale non incluse → police auto séparée</li>
                <li>Blessures au travail → police Accidents du travail séparée</li>
                <li>Erreurs professionnelles → police RC Pro/E&O séparée</li>
                <li>Certains aléas (inondation/séisme) souvent exclus</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Idéale pour</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Commerce, restauration, services de proximité</li>
                <li>Petites entreprises de construction/maintenance</li>
                <li>Startups et PME avec exigences contractuelles</li>
                <li>Entreprises recherchant simplicité et efficacité coût</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Facteurs de coût</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Exposition RC générale et valeurs assurées</li>
                <li>Localisation et protections physiques</li>
                <li>Historique de sinistres et franchises</li>
                <li>Avenants additionnels inclus dans la BOP</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Astuce budget</h3>
            <p className="text-gray-700">Si vous avez besoin de la RC générale et des Biens, une BOP est souvent plus économique que deux polices séparées. Comparez toujours limites et franchises.</p>
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


