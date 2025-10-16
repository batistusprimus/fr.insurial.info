import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
            Merci ! Votre questionnaire a bien été reçu.
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Vous allez recevoir un email de confirmation sous peu.
            <br />
            <strong className="text-[#1E3A8A]">Vous serez contacté sous 24h si vous avez accepté la mise en relation.</strong>
          </p>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">Et ensuite ?</h2>
            <div className="text-left space-y-3 text-sm text-gray-600">
              <div className="flex items-start">
                <span className="bg-[#1E3A8A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 font-semibold">1</span>
                <span>Nous vérifions vos informations et préparons la mise en relation</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#1E3A8A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 font-semibold">2</span>
                <span>Des partenaires (courtiers, assureurs) peuvent vous contacter avec des propositions adaptées</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#1E3A8A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 font-semibold">3</span>
                <span>Optionnel : parcourez nos guides pour clarifier vos prochaines étapes</span>
              </div>
            </div>
          </div>

          {/* CTA Options */}
          <div className="space-y-4">
            <a
              href="/guides/renewal-checklist"
              className="inline-block bg-[#1E3A8A] hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl mr-4"
            >
              Consulter la check‑list de renouvellement
            </a>
            
            <a
              href="/guides/premium-calculation"
              className="inline-block border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Comprendre le calcul des primes
            </a>
          </div>

          {/* Trust Signals */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Protégé RGPD
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sécurisé SSL
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sans obligation
              </span>
            </div>
          </div>

          {/* Back to home */}
          <div className="mt-6">
            <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              ← Retour à Insurial.info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
