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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-[#1E3A8A] p-8 rounded-lg mb-12">
            <blockquote className="text-lg text-gray-700 italic leading-relaxed">
              "We turn the complexity of business insurance into a simple, transparent, and educational process. 
              Every business deserves access to the right coverage with clear information and expert guidance."
            </blockquote>
            <footer className="mt-4 text-right">
              <cite className="text-sm text-gray-600">— Insurial Team</cite>
            </footer>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#1E3A8A] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">
                Clear resources and practical guides to understand business insurance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1E3A8A] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplicity</h3>
              <p className="text-gray-600">
                A simplified journey from assessment to quotes thanks to our Risk Score.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1E3A8A] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600">
                Exclusive connections with pre‑vetted carriers specialized in your industry.
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
              Credibility & Nationwide Reach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Insurial serves businesses across all 50 US states with a certified carrier network and recognized risk expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Trust Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Nationwide Coverage</h4>
                    <p className="text-gray-600">
                      We serve businesses in all 50 US states with both local and national carriers.
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
                    <h4 className="font-semibold text-gray-900 mb-1">Pre‑Vetted Carriers</h4>
                    <p className="text-gray-600">
                      All partner carriers are certified with years of experience and industry specialization.
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
                    <h4 className="font-semibold text-gray-900 mb-1">Privacy & Security</h4>
                    <p className="text-gray-600">
                      Your data is protected according to the highest security and privacy standards.
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
                    <h4 className="font-semibold text-gray-900 mb-1">Exclusive Leads</h4>
                    <p className="text-gray-600">
                      Each connection is exclusive — you aren’t competing with other businesses for the carrier’s attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">By the Numbers</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E3A8A] mb-2">50</div>
                  <div className="text-sm text-gray-600">States Covered</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E3A8A] mb-2">100%</div>
                  <div className="text-sm text-gray-600">Exclusive Leads</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E3A8A] mb-2">24h</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E3A8A] mb-2">$0</div>
                  <div className="text-sm text-gray-600">Fees for You</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-600">
                  <strong>Insurial</strong> by <strong>BPC Group</strong>
                </p>
                <p className="text-center text-xs text-gray-500 mt-1">
                  Insurance expertise since 2024
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
              Ready to Get Your Risk Score?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Discover your coverage needs in under 5 minutes and connect with the right carriers.
            </p>
          <Link 
            href="/#risk-score-form" 
            className="bg-white text-[#1E3A8A] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Start My Free Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
