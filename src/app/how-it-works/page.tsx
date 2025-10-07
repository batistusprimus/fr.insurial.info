import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import TechLogos from '@/components/TechLogos';

export const metadata = {
  title: 'Comment ça marche - Insurial',
  description: 'Découvrez Insurial en 3 étapes simples : Score de risque, Conseils, et prochaines actions.'
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-archivo-black text-gray-900 mb-4">Comment ça marche</h1>
          <p className="text-lg text-gray-600">Un processus simple et transparent pour comprendre vos risques et décider en toute clarté.</p>
        </div>
      </section>
      <TechLogos />
      <HowItWorks />
      <Footer />
    </div>
  );
}


