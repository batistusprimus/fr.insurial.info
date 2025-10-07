import Footer from '@/components/Footer';
import Link from 'next/link';
import SummitsLogos from '@/components/SummitsLogos';

export const metadata = {
  title: "À propos d’Insurial - Mission et crédibilité",
  description: "Découvrez la mission d’Insurial et son expertise pour connecter les entreprises avec les bons partenaires.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À propos d’<span className="text-[#1E3A8A]">Insurial</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Notre mission est de simplifier l’assurance des entreprises en connectant intelligemment les besoins aux bonnes solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Summits Logos */}
      <SummitsLogos />

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre mission</h2>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-[#1E3A8A] p-8 rounded-lg mb-12">
            <blockquote className="text-lg text-gray-700 italic leading-relaxed">
              « Nous transformons la complexité de l’assurance entreprise en un processus simple, transparent et pédagogique. 
              Chaque entreprise mérite un accès aux bonnes garanties, avec une information claire et un accompagnement d’experts. »
            </blockquote>
            <footer className="mt-4 text-right">
              <cite className="text-sm text-gray-600">— Équipe Insurial</cite>
            </footer>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#1E3A8A] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Éducation</h3>
              <p className="text-gray-600">
                Des ressources claires et des guides pratiques pour comprendre l’assurance des entreprises.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1E3A8A] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplicité</h3>
              <p className="text-gray-600">
                Un parcours simplifié de l’évaluation au devis grâce à notre Score de risque.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1E3A8A] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Confiance</h3>
              <p className="text-gray-600">
                Des mises en relation exclusives avec des assureurs certifiés, spécialisés dans votre secteur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crédibilité / Portée Nationale */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Crédibilité et couverture nationale
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Insurial accompagne les entreprises dans les 50 états américains grâce à un réseau d’assureurs certifiés et une expertise reconnue du risque.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi nous faire confiance</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Couverture nationale</h4>
                    <p className="text-gray-600">
                      Nous accompagnons des entreprises dans les 50 états américains, avec des assureurs locaux et nationaux.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Assureurs présélectionnés</h4>
                    <p className="text-gray-600">
                      Tous nos partenaires sont certifiés, avec des années d’expérience et une forte spécialisation sectorielle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Confidentialité et sécurité</h4>
                    <p className="text-gray-600">
                      Vos données sont protégées selon les standards les plus élevés de sécurité et de confidentialité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Mises en relation exclusives</h4>
                    <p className="text-gray-600">
                      Chaque mise en relation est exclusive — vous n’êtes pas en concurrence avec d’autres entreprises pour l’attention de l’assureur.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">En chiffres</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E3A8A] mb-2">50</div>
                  <div className="text-sm text-gray-600">États couverts</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E3A8A] mb-2">100%</div>
                  <div className="text-sm text-gray-600">Mises en relation exclusives</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E3A8A] mb-2">24h</div>
                  <div className="text-sm text-gray-600">Temps de réponse</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E3A8A] mb-2">$0</div>
                  <div className="text-sm text-gray-600">Frais pour vous</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-600">
                  <strong>Insurial</strong> by <strong>BPC Group</strong>
                </p>
                <p className="text-center text-xs text-gray-500 mt-1">
                  Expertise en assurance depuis 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à obtenir votre Score de risque ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Découvrez vos besoins de couverture en moins de 5 minutes et connectez‑vous aux bons assureurs.
            </p>
          <Link 
            href="/#score-de-risque" 
            className="bg-white text-[#1E3A8A] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Commencer mon évaluation gratuite
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
