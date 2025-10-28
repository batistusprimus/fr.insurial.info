import Image from 'next/image';

interface InsuranceTemplateProps {
  riskName: string;
  pedagogyParagraph?: string;
  examples?: string[];
  faqs?: { question: string; answer: string }[];
}

export default function InsuranceTemplate({ riskName, pedagogyParagraph, examples, faqs }: InsuranceTemplateProps) {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <Image src="/logo.png" alt="Insurial" width={140} height={40} />
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
            {riskName} — informations générales
          </span>
          <h1 className="mt-4 font-archivo-black text-3xl md:text-5xl text-gray-900 leading-tight">
            Informations factuelles et questionnaire de mise en relation
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Contenu indicatif et non exhaustif. Aucun conseil personnalisé n’est fourni.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="/questionnaire" className="px-6 py-3 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold">Accéder au questionnaire</a>
            <a href="#informations" className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-white/60 transition-colors">Voir les informations</a>
          </div>
          <p className="mt-3 text-xs text-gray-600 max-w-2xl mx-auto">
            Insurial est un service d’information et de mise en relation. Nous ne sommes pas assureur ni courtier.
          </p>
        </div>
      </section>

      <section id="informations" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Informations générales</h2>
          <p className="text-gray-600 mb-8">Les éléments ci-dessous sont fournis à titre indicatif et peuvent varier selon les contrats proposés par des professionnels tiers.</p>
          <div className="space-y-3 text-gray-800">
            <p>Pour {riskName}, les garanties, exclusions et plafonds dépendent des contrats présentés par des professionnels indépendants.</p>
            <p>Les informations présentées n’ont pas de valeur contractuelle.</p>
          </div>

          {pedagogyParagraph && (
            <div className="mt-8 p-5 border rounded-xl bg-white">
              <p className="text-gray-800 leading-relaxed">{pedagogyParagraph}</p>
            </div>
          )}

          {Array.isArray(examples) && examples.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exemples de situations couvertes</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                {examples.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(faqs) && faqs.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Questions fréquentes</h3>
              <div className="divide-y rounded-xl border">
                {faqs.map((f, idx) => (
                  <details key={idx} className="p-4">
                    <summary className="cursor-pointer font-medium text-gray-900">{f.question}</summary>
                    <p className="mt-2 text-gray-700">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

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


