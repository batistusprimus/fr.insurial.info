import RCProMultiStepForm from '@/components/RCProMultiStepForm';
import PressLogos from '@/components/PressLogos';
import { Icons } from '@/components/Icons';

export default function RCProPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                RC Professionnelle
              </span>
              <h1 className="mt-4 font-archivo-black text-3xl md:text-5xl text-gray-900 leading-tight">
                Protégez votre entreprise contre les erreurs professionnelles
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
                Conseil erroné, défaut de livrable, dommage chez un client... Une erreur peut coûter des dizaines de milliers d\'euros. Découvrez la RC Pro adaptée à votre activité.
              </p>
              
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-center"><span className="mr-2 text-blue-700 text-lg">✓</span> <strong>Défense juridique</strong> incluse</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700 text-lg">✓</span> <strong>Indemnisation</strong> des tiers</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700 text-lg">✓</span> <strong>Frais de justice</strong> pris en charge</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700 text-lg">✓</span> <strong>Obligatoire</strong> pour certaines professions</li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#questionnaire" className="px-6 py-3 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold shadow-lg hover:shadow-xl">Commencer mon questionnaire gratuit</a>
                <a href="#garanties" className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-white/60 transition-colors">Voir les garanties courantes</a>
              </div>

              <p className="mt-3 text-xs text-gray-600 max-w-2xl">
                <strong>100% gratuit • Sans engagement • Réponse sous 24h</strong><br />
                Insurial met en relation des entreprises avec des courtiers et assureurs spécialisés. Nous ne sommes pas assureur. Pour en savoir plus:
                {' '}<a href="/legal" className="underline text-[#1E3A8A]">mentions légales</a>,
                {' '}<a href="/terms" className="underline text-[#1E3A8A]">conditions d\'utilisation</a>
                {' '}et <a href="/privacy" className="underline text-[#1E3A8A]">politique de confidentialité</a>.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-white/80 backdrop-blur border rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-[#1E3A8A]">800+</div>
                  <div className="text-xs text-gray-600 text-right">Entreprises<br />déjà mises en relation</div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-[#1E3A8A]">24h</div>
                  <div className="text-xs text-gray-600 text-right">Délai de réponse<br />moyen</div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-[#1E3A8A]">4.8/5</div>
                  <div className="text-xs text-gray-600 text-right">Satisfaction<br />utilisateurs</div>
                </div>
                <div className="border-t pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> Questionnaire en 3 minutes</li>
                    <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> Courtiers certifiés ORIAS</li>
                    <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> Gratuit et sans engagement</li>
                  </ul>
                </div>
                <a href="#questionnaire" className="inline-block w-full text-center mt-6 px-5 py-3 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold">Commencer maintenant</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PressLogos />

      {/* Pourquoi c\'est essentiel */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pourquoi la RC Pro est devenue incontournable</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une simple erreur professionnelle peut engager votre responsabilité pour <strong>des dizaines de milliers d\'euros</strong>. 
              La RC Pro vous protège financièrement et juridiquement.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
              <div className="text-red-600 mb-3"><Icons.Exclamation className="w-10 h-10" /></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Erreurs coûteuses</h3>
              <p className="text-gray-700">Un conseil erroné, un défaut de livrable, une omission... peuvent générer des réclamations importantes.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500">
              <div className="text-orange-600 mb-3"><Icons.Document className="w-10 h-10" /></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exigée contractuellement</h3>
              <p className="text-gray-700">Clients, donneurs d\'ordre, appels d\'offres... beaucoup exigent une attestation RC Pro valide.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-500">
              <div className="text-yellow-600 mb-3"><Icons.Scale className="w-10 h-10" /></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Frais juridiques explosifs</h3>
              <p className="text-gray-700">Sans assurance, vous payez avocat, expertise et indemnisation sur vos fonds propres.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties courantes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 id="garanties" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Les garanties courantes en RC Professionnelle</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Voici les protections typiques. Les contrats varient selon les professionnels — un courtier pourra vous conseiller sur mesure.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Icons.Shield, color: 'text-blue-600', t: 'Dommages corporels', d: 'Indemnisation des blessures causées à des tiers dans le cadre de votre activité professionnelle.' },
              { Icon: Icons.Building, color: 'text-green-600', t: 'Dommages matériels', d: 'Réparation ou remplacement des biens endommagés chez vos clients ou partenaires.' },
              { Icon: Icons.Briefcase, color: 'text-purple-600', t: 'Dommages immatériels', d: 'Pertes financières consécutives (perte de données, retard de livraison, préjudice commercial).' },
              { Icon: Icons.Scale, color: 'text-indigo-600', t: 'Défense juridique', d: 'Prise en charge des frais d\'avocat, d\'expertise, de procédure pour vous défendre.' },
              { Icon: Icons.Document, color: 'text-cyan-600', t: 'Erreurs & omissions (E&O)', d: 'Couverture spécifique pour les professions du conseil, audit, conception.' },
              { Icon: Icons.Lock, color: 'text-red-600', t: 'Atteinte aux données', d: 'Responsabilité liée à la perte, diffusion ou mauvaise utilisation de données clients.' },
            ].map((card) => (
              <div key={card.t} className="p-6 border rounded-xl hover:shadow-lg transition-shadow bg-white">
                <div className={`${card.color} mb-3`}><card.Icon className="w-10 h-10" /></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.t}</h3>
                <p className="text-gray-700">{card.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center mt-8 max-w-3xl mx-auto">
            Les garanties listées ci-dessus sont fournies à titre indicatif et peuvent varier selon les contrats. Seul un courtier ou assureur pourra vous recommander les garanties adaptées à votre profil.
          </p>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Un processus simple et rapide</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">En 3 étapes, identifiez vos besoins et soyez mis en relation avec des spécialistes RC Pro.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '01', t: 'Remplissez le questionnaire', d: 'Quelques questions sur votre activité, vos clients et votre exposition. 3 minutes chrono.' },
              { n: '02', t: 'On vous met en relation', d: 'Nous transmettons votre profil à des courtiers spécialisés dans votre secteur. Contact sous 24h.' },
              { n: '03', t: 'Vous échangez avec un expert', d: 'Un professionnel certifié ORIAS vous appelle pour comprendre vos besoins et comparer les offres du marché.' },
            ].map(step => (
              <div key={step.n} className="relative">
                <div className="bg-white p-6 rounded-xl border-2 border-[#1E3A8A]/20">
                  <div className="absolute -top-4 left-6 bg-[#1E3A8A] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.n}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3">{step.t}</h3>
                  <p className="text-gray-700 text-sm">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#questionnaire" className="inline-block px-8 py-4 bg-[#1E3A8A] text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold shadow-lg hover:shadow-xl">
              Commencer mon questionnaire →
            </a>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ce que disent les entreprises</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Le questionnaire nous a aidés à clarifier nos besoins. Le courtier nous a trouvé une RC Pro adaptée à notre activité de conseil, avec un bon rapport garanties/prix.", author: "Thomas L.", title: "Gérant", company: "Cabinet de conseil RH" },
              { quote: "Obligatoire pour nos contrats clients. Grâce à Insurial, on a été mis en relation avec un courtier qui a comparé 4 offres. Gain de temps énorme.", author: "Claire M.", title: "Directrice", company: "Agence web Paris" },
              { quote: "Service gratuit et professionnel. Le courtier contacté a pris le temps d\'expliquer les exclusions et plafonds. Nous avons souscrit en toute confiance.", author: "David P.", title: "Fondateur", company: "Startup SaaS" },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm mb-4 italic">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="border-t pt-3">
                  <div className="font-semibold text-gray-900 text-sm">{t.author}</div>
                  <div className="text-xs text-gray-600">{t.title}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'C\'est vraiment gratuit ?', a: 'Oui. Le questionnaire Insurial est 100% gratuit et sans engagement. Vous ne payez rien pour être mis en relation avec des courtiers.' },
              { q: 'La RC Pro est-elle obligatoire ?', a: 'Obligatoire pour certaines professions réglementées (santé, droit, BTP...). Souvent exigée contractuellement même si non obligatoire.' },
              { q: 'Quel montant de garantie prévoir ?', a: 'Selon votre activité: de 300 K€ à plusieurs millions. Un courtier évaluera vos besoins selon vos contrats et risques.' },
              { q: 'RC Pro vs RC exploitation ?', a: 'RC Pro couvre les fautes professionnelles (erreur, conseil). RC exploitation couvre les dommages de la vie courante (locaux, chantiers).' },
              { q: 'Combien de temps ça prend ?', a: '3 minutes pour le questionnaire. Un courtier vous contacte sous 24-48h pour échanger sur votre situation.' },
              { q: 'Insurial est-il un courtier ?', a: 'Non. Insurial est un service d\'information et de mise en relation. Nous ne sommes pas courtier et ne fournissons pas de conseil personnalisé.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border">
                <div className="font-semibold text-gray-900 mb-2">{item.q}</div>
                <div className="text-gray-700 text-sm">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="questionnaire" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Prêt à protéger votre activité ?</h2>
            <p className="text-gray-600 mt-2">Plus de 800 entreprises ont déjà franchi le pas. Complétez votre questionnaire en 3 minutes et soyez contacté sous 24h.</p>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-600">
              <span className="flex items-center"><svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>100% Gratuit</span>
              <span className="flex items-center"><svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Sans engagement</span>
              <span className="flex items-center"><svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Conforme RGPD</span>
            </div>
          </div>
          <RCProMultiStepForm />
        </div>
      </section>

      <footer className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-gray-600 space-y-2">
          <p>Insurial est un service d\'information et de mise en relation. Nous ne sommes pas courtier ni assureur. Aucun démarchage commercial.</p>
          <p>
            <a href="/legal" className="underline text-gray-700 hover:text-gray-900">Mentions légales</a>
            {' '}•{' '}
            <a href="/terms" className="underline text-gray-700 hover:text-gray-900">Conditions d\'utilisation</a>
            {' '}•{' '}
            <a href="/privacy" className="underline text-gray-700 hover:text-gray-900">Politique de confidentialité</a>
          </p>
          <p>© 2025 Insurial – Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
