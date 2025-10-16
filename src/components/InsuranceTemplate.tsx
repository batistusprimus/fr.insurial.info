'use client';

import { useRouter } from 'next/navigation';

interface InsuranceTemplateProps {
  riskName: string;
  pedagogyTitle?: string;
  pedagogyParagraph: string;
  examples: string[];
  faqs?: { question: string; answer: string }[];
}

export default function InsuranceTemplate({
  riskName,
  pedagogyTitle = 'Pourquoi cette couverture est essentielle',
  pedagogyParagraph,
  examples,
  faqs,
}: InsuranceTemplateProps) {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white">
      {/* 1️⃣ Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="font-archivo-black text-3xl md:text-5xl text-gray-900 mb-6 leading-tight">
            Protection {riskName} adaptée à votre activité
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Avant de commencer, précisez votre situation. Cela permet d’adapter votre diagnostic à votre profil professionnel.
          </p>

          {/* Bloc sélection démographique */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { key: 'independant', label: 'Indépendant / Profession libérale' },
              { key: 'tpe', label: 'TPE (1 à 9 salariés)' },
              { key: 'pme', label: 'PME (10 à 250 salariés)' },
              { key: 'autre', label: 'Autre / Startup' },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => router.push('/diagnostic')}
                className={
                  'text-sm md:text-base rounded-lg border px-4 py-3 transition-colors bg-white text-gray-800 border-gray-300 hover:border-[#1E3A8A]'
                }
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2️⃣ Section pédagogique */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{pedagogyTitle}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{pedagogyParagraph}</p>
        </div>
      </section>

      {/* 3️⃣ Exemples concrets */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Exemples concrets de situations couvertes</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {examples.map((ex, idx) => (
              <li key={idx}>{ex}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4️⃣ Redirection après sélection du profil (le formulaire est accessible depuis la page d’accueil) */}

      {/* FAQ contextuelle (optionnelle) */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Questions fréquentes</h3>
              <p className="text-gray-600">Réponses courtes et concrètes pour avancer en confiance.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg">
                  <div className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">{item.question}</div>
                  <div className="px-6 py-4 text-gray-700">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5️⃣ Footer */}
      <footer className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-gray-600 space-y-1">
          <p>Insurial est une plateforme d’information indépendante.</p>
          <p>Aucun démarchage commercial.</p>
          <p>© 2025 Insurial – Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}


