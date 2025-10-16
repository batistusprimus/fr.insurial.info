import type { Metadata } from 'next';
import SimpleRiskForm from '@/components/SimpleRiskForm';

export const metadata: Metadata = {
  title: 'Questionnaire gratuit - Insurial',
  description: 'Complétez votre questionnaire gratuit en quelques minutes. Sans obligation, conforme RGPD.'
};

export default function QuestionnairePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-10 pb-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-archivo-black text-gray-900 mb-3">Votre questionnaire gratuit</h1>
          <p className="text-lg text-gray-700 mb-6">Répondez à quelques questions pour identifier vos besoins et être mis en relation avec des professionnels.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-10">
        <SimpleRiskForm />
      </div>
    </main>
  );
}


