'use client';

import Link from 'next/link';

export default function RisksCovered() {
  const items = [
    { id: 1, title: 'RC Professionnelle', href: '/assurances/rc-pro', emoji: 'shield', description: 'Responsabilité civile professionnelle' },
    { id: 2, title: 'Multirisques Professionnelle', href: '/assurances/multirisque-professionnelle', emoji: 'building', description: 'Locaux, biens et pertes d’exploitation' },
    { id: 3, title: 'Flotte Automobile', href: '/assurances/flotte-automobile', emoji: 'truck', description: 'Véhicules professionnels et utilitaires' },
    { id: 4, title: 'Accidents du Travail', href: '/assurances/at-mp', emoji: 'bandage', description: 'AT/MP et prévention des risques' },
    { id: 5, title: 'Pack TPE (Assurance Complète)', href: '/packs/pack-tpe', emoji: 'box', description: 'Couverture complète adaptée aux TPE' },
    { id: 6, title: 'Cyber Risques', href: '/assurances/cyber', emoji: 'laptop', description: 'Cyberattaques, ransomware et data breach' }
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
              <div className="text-4xl mb-4">{renderIcon(item.emoji)}</div>
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

function renderIcon(name: string) {
  switch (name) {
    case 'shield':
      return (
        <svg className="w-10 h-10 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'building':
      return (
        <svg className="w-10 h-10 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="3" width="7" height="18" />
          <rect x="14" y="8" width="7" height="13" />
          <path d="M7 7h.01M7 11h.01M7 15h.01M18 12h.01M18 16h.01" />
        </svg>
      );
    case 'truck':
      return (
        <svg className="w-10 h-10 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M1 16h15V6H1z" />
          <path d="M16 16h3l4-4-3-6h-4z" />
          <circle cx="5.5" cy="18.5" r="1.5" />
          <circle cx="18.5" cy="18.5" r="1.5" />
        </svg>
      );
    case 'bandage':
      return (
        <svg className="w-10 h-10 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="11" width="18" height="2" rx="1" />
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );
    case 'box':
      return (
        <svg className="w-10 h-10 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 16V8a2 2 0 0 0-1-1.73L12 2 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96L12 12l8.73-5.04" />
          <path d="M12 22V12" />
        </svg>
      );
    case 'laptop':
      return (
        <svg className="w-10 h-10 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M2 20h20" />
        </svg>
      );
    default:
      return null;
  }
}


