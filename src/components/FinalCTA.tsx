'use client';

interface FinalCTAProps {
  onScrollToForm: () => void;
}

export default function FinalCTA({ onScrollToForm }: FinalCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1E3A8A] to-blue-700 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-archivo-black mb-4">
          Prêt à découvrir votre Score de risque assurance entreprise ?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Comprenez vos besoins de couverture avec des conseils clairs et fiables.
          <br />
          <span className="font-semibold">Gratuit • Sans obligation • Conforme RGPD</span>
        </p>
        
        <button
          onClick={onScrollToForm}
          className="bg-white text-[#1E3A8A] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl mb-6"
        >
          Obtenir mon score de risque gratuit
        </button>
        
        <div className="flex items-center justify-center space-x-6 text-sm text-blue-200">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Pas de spam
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Protégé RGPD
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Annulable à tout moment
          </span>
        </div>
      </div>
    </section>
  );
}
