import Link from 'next/link';

export default function Guides() {
  const guides = [
    {
      title: "Responsabilité civile vs biens professionnels — quelles différences ?",
      description: "Comprenez les différences clés entre ces garanties essentielles et laquelle votre entreprise doit prioriser.",
      icon: "🛡️",
      readTime: "Lecture 3 min",
      href: "/guides/general-liability-vs-property"
    },
    {
      title: "Comment les primes sont calculées (5 facteurs clés)",
      description: "Découvrez ce que les assureurs prennent en compte pour tarifer votre police et comment réduire vos coûts.",
      icon: "💰",
      readTime: "Lecture 4 min",
      href: "/guides/premium-calculation"
    },
    {
      title: "Checklist de renouvellement (quoi préparer)",
      description: "Un guide étape par étape pour un renouvellement fluide et au meilleur tarif.",
      icon: "📋",
      readTime: "Lecture 5 min",
      href: "/guides/renewal-checklist"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
            Guides assurance entreprise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des informations claires et pratiques pour décider sereinement de vos besoins d’assurance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border">
              <div className="text-3xl mb-4">{guide.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {guide.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {guide.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{guide.readTime}</span>
                <Link 
                  href={guide.href}
                  className="text-[#1E3A8A] hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  Lire le guide →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Plus de guides disponibles après votre demande de devis
          </p>
        </div>
      </div>
    </section>
  );
}
