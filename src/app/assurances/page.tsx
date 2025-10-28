export default function AssurancesIndexPage() {
  const items = [
    { title: 'RC Professionnelle', href: '/assurances/rc-pro', description: 'Responsabilité civile professionnelle' },
    { title: 'Multirisques Professionnelle', href: '/assurances/multirisque-professionnelle', description: "Locaux, biens et pertes d'exploitation" },
    { title: 'Flotte Automobile', href: '/assurances/flotte-automobile', description: 'Véhicules professionnels et utilitaires' },
    { title: 'Accidents du Travail', href: '/assurances/at-mp', description: 'AT/MP et prévention des risques' },
    { title: 'Assurance-crédit', href: '/assurances/assurance-credit', description: 'Protection contre les impayés et risque export' },
    { title: 'Cyber Risques', href: '/assurances/cyber', description: 'Cyberattaques, ransomware et data breach' },
    { title: 'Pack TPE (Assurance Complète)', href: '/packs/pack-tpe', description: 'Couverture complète adaptée aux TPE' },
  ];

  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
            Complétez votre questionnaire de couverture
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Sélectionnez la catégorie qui correspond à votre activité pour comprendre les garanties essentielles et compléter votre questionnaire en 2 minutes.
          </p>
        <p className="text-xs text-gray-600 max-w-3xl mx-auto mt-2">
          Insurial est un service d’information et de mise en relation. Nous ne sommes pas assureur ni courtier et ne fournissons pas de conseil personnalisé.
          Voir <a href="/legal" className="underline text-[#1E3A8A]">mentions légales</a>, <a href="/terms" className="underline text-[#1E3A8A]">conditions d’utilisation</a> et <a href="/privacy" className="underline text-[#1E3A8A]">politique de confidentialité</a>.
        </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <a key={item.title} href={item.href} className="block bg-white rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}


