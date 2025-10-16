'use client';

import Link from 'next/link';

export default function RisksCovered() {
  const items = [
    { id: 1, title: 'RC Professionnelle', href: '/assurances/rc-pro', emoji: '🛡️', description: 'Responsabilité civile professionnelle' },
    { id: 2, title: 'Multirisques Professionnelle', href: '/assurances/multirisque-professionnelle', emoji: '🏢', description: 'Locaux, biens et pertes d’exploitation' },
    { id: 3, title: 'Flotte Automobile', href: '/assurances/flotte-automobile', emoji: '🚚', description: 'Véhicules professionnels et utilitaires' },
    { id: 4, title: 'Accidents du Travail', href: '/assurances/at-mp', emoji: '🩹', description: 'AT/MP et prévention des risques' },
    { id: 5, title: 'Pack TPE (Assurance Complète)', href: '/packs/pack-tpe', emoji: '📦', description: 'Couverture complète adaptée aux TPE' },
    { id: 6, title: 'Cyber Risques', href: '/assurances/cyber', emoji: '💻', description: 'Cyberattaques, ransomware et data breach' }
  ];

  return (
    <section id="les-risques-couverts" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Découvrez les principales assurances professionnelles.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chaque métier comporte des risques spécifiques. Sélectionnez la catégorie qui vous concerne
            pour comprendre les garanties essentielles et évaluer votre situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link key={item.id} href={item.href} className="group block bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border">
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1E3A8A]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


