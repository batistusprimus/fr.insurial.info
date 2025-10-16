import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos - Insurial',
  description: "Notre mission : rendre l’assurance entreprise compréhensible et actionnable pour tous. Diagnostic gratuit, sans obligation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-archivo-black text-gray-900 mb-6">À propos d’Insurial</h1>
        <p className="text-lg text-gray-700 mb-8">
          Insurial est une plateforme pédagogique indépendante dédiée à l’assurance des entreprises. Nous aidons les dirigeants, indépendants et TPE/PME à clarifier leurs besoins, comprendre les garanties essentielles et préparer leurs décisions.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Rendre simple ce qui est complexe. Nous produisons des guides clairs et proposons un diagnostic gratuit pour vous aider à identifier vos priorités de couverture, sans démarche commerciale ni pression.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos principes</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Indépendance et pédagogie avant tout</li>
            <li>Respect de la vie privée (RGPD, SSL)</li>
            <li>Clarté, pragmatisme et transparence</li>
          </ul>
        </section>
      </div>
    </main>
  );
}


