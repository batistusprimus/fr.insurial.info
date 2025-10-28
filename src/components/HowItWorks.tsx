export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Complétez votre questionnaire",
      description: "Répondez à quelques questions (secteur, taille, code postal, chiffre d’affaires). Moins de 5 minutes.",
      icon: "chart"
    },
    {
      number: "2", 
      title: "Recevez des informations",
      description: "Vous recevez un récapitulatif éducatif et, si vous l’avez accepté, une mise en relation.",
      icon: "🔍"
    },
    {
      number: "3",
      title: "Passez à l’action",
      description: "Discutez des options avec des professionnels qui vous contacteront si vous avez consenti.",
      icon: "target"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
            Comment ça marche
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un processus simple et transparent pour obtenir rapidement la bonne couverture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative z-10">
                {/* Step number circle */}
                <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4">{renderIcon(step.icon)}</div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 inline-block">
            <p className="text-sm text-[#1E3A8A] font-medium flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Gratuit • Sans obligation • Conforme RGPD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderIcon(name: string) {
  switch (name) {
    case 'chart':
      return (
        <svg className="w-10 h-10 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 3v18h18" />
          <rect x="7" y="10" width="3" height="7" />
          <rect x="12" y="6" width="3" height="11" />
          <rect x="17" y="12" width="3" height="5" />
        </svg>
      );
    case 'target':
      return (
        <svg className="w-10 h-10 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="7" x2="12" y2="12" />
          <line x1="12" y1="12" x2="15" y2="12" />
        </svg>
      );
    case '🔍':
    case 'search':
      return (
        <svg className="w-10 h-10 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    default:
      return null;
  }
}
