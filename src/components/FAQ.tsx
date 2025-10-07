'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Est‑ce vraiment gratuit ?",
      answer: "Oui, 100% gratuit et sans obligation. Nous ne vendons pas d’assurances ; notre objectif est pédagogique et d’aider à comprendre vos risques."
    },
    {
      question: "Combien de temps pour obtenir un devis ?",
      answer: "Le Score de risque prend moins de 5 minutes. Vous pouvez ensuite utiliser les résultats pour discuter des couvertures avec votre courtier ou agent."
    },
    {
      question: "Qui va me contacter ?",
      answer: "Aucun appel obligatoire. Vous recevrez votre Score de risque par email avec des conseils pour avancer à votre rythme."
    },
    {
      question: "Comment mes données sont‑elles traitées ?",
      answer: "Conforme RGPD et sécurisé SSL. Vos informations sont partagées uniquement avec des partenaires d’assurance sélectionnés pour établir votre devis. Vous pouvez demander la suppression à tout moment."
    },
    {
      question: "Puis‑je refuser le devis ou annuler ?",
      answer: "Absolument. Sans obligation. Le Score de risque est informatif ; vous décidez comment l’utiliser."
    },
    {
      question: "Travaillez‑vous avec toutes les compagnies d’assurance ?",
      answer: "Nous sommes indépendants et axés sur l’éducation. Vous pouvez partager votre Score de risque avec le courtier ou l’assureur de votre choix."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
            Foire aux questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Questions fréquentes sur notre service et notre processus. Une autre question ? Contactez‑nous.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            D’autres questions ? Écrivez‑nous à <a href="mailto:hello@insurial.info" className="text-[#1E3A8A] hover:text-blue-800 font-medium">hello@insurial.info</a>
          </p>
        </div>
      </div>
    </section>
  );
}
