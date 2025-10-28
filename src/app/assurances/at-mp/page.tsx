import ATMPMultiStepForm from '@/components/ATMPMultiStepForm';
import PressLogos from '@/components/PressLogos';
import { Icons } from '@/components/Icons';

export default function ATMPPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                Accidents du Travail (AT/MP)
              </span>
              <h1 className="mt-4 font-archivo-black text-3xl md:text-5xl text-gray-900 leading-tight">
                Protégez vos équipes et maîtrisez vos cotisations
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
                Accident de travail, trajet, maladie professionnelle... La couverture AT/MP protège vos salariés et votre trésorerie. Découvrez les options adaptées à votre secteur.
              </p>
              
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-center"><span className="mr-2 text-blue-700 text-lg">✓</span> <strong>Indemnités journalières</strong> prises en charge</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700 text-lg">✓</span> <strong>Soins & rééducation</strong> couverts</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700 text-lg">✓</span> <strong>Prévention</strong> accompagnée</li>
                <li className="flex items-center"><span className="mr-2 text-blue-700 text-lg">✓</span> <strong>Impact cotisations</strong> maîtrisé</li>
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
                  <div className="text-3xl font-bold text-[#1E3A8A]">600+</div>
                  <div className="text-xs text-gray-600 text-right">Entreprises<br />déjà mises en relation</div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-[#1E3A8A]">24h</div>
                  <div className="text-xs text-gray-600 text-right">Délai de réponse<br />moyen</div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-[#1E3A8A]">4.7/5</div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pourquoi l\'AT/MP est stratégique</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Au-delà de l\'obligation légale, une bonne gestion AT/MP <strong>réduit vos cotisations</strong> et sécurise vos équipes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-l-4 border-red-500">
              <div className="text-red-600 mb-3"><Icons.Medical className="w-10 h-10" /></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Risques sous-estimés</h3>
              <p className="text-gray-700">Chute, TMS, accident de trajet... Les AT/MP touchent toutes les entreprises, même les bureaux.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500">
              <div className="text-orange-600 mb-3"><Icons.Currency className="w-10 h-10" /></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact cotisations</h3>
              <p className="text-gray-700">Votre taux de cotisation dépend de la sinistralité. Une bonne prévention baisse durablement vos charges.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-500">
              <div className="text-yellow-600 mb-3"><Icons.Clipboard className="w-10 h-10" /></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DUERP obligatoire</h3>
              <p className="text-gray-700">Document Unique d\'Évaluation des Risques: obligatoire dès le 1er salarié. Fondamental pour la prévention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties courantes */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 id="garanties" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Les garanties courantes en AT/MP</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Voici les protections typiques. Les contrats varient selon les professionnels — un courtier pourra vous conseiller sur mesure.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Icons.Medical, color: 'text-red-600', t: 'Soins & hospitalisation', d: 'Prise en charge des frais médicaux, chirurgicaux, pharmaceutiques liés à l\'accident ou maladie pro.' },
              { Icon: Icons.Currency, color: 'text-green-600', t: 'Indemnités journalières', d: 'Compensation de la perte de salaire pendant l\'arrêt de travail du salarié.' },
              { Icon: Icons.UserGroup, color: 'text-purple-600', t: 'Incapacité & invalidité', d: 'Rentes versées en cas d\'incapacité permanente partielle ou totale reconnue.' },
              { Icon: Icons.Scale, color: 'text-indigo-600', t: 'Capital décès', d: 'Indemnisation des ayants droit en cas de décès suite à un accident du travail ou maladie professionnelle.' },
              { Icon: Icons.Shield, color: 'text-blue-600', t: 'Défense recours', d: 'Accompagnement juridique en cas de contestation, recours ou litige lié à un AT/MP.' },
              { Icon: Icons.ChartBar, color: 'text-cyan-600', t: 'Prévention & accompagnement', d: 'Aide à la mise en conformité DUERP, formations sécurité, audits de prévention.' },
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
            <p className="text-gray-600 max-w-3xl mx-auto">En 3 étapes, identifiez vos besoins et soyez mis en relation avec des spécialistes AT/MP.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '01', t: 'Remplissez le questionnaire', d: 'Informations sur vos effectifs, activités et mesures de prévention. 3 minutes chrono.' },
              { n: '02', t: 'On vous met en relation', d: 'Nous transmettons votre profil à des courtiers spécialisés AT/MP. Contact sous 24h.' },
              { n: '03', t: 'Vous échangez avec un expert', d: 'Un courtier certifié ORIAS vous conseille sur la couverture et optimise vos cotisations.' },
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
              { quote: "Le courtier contacté nous a aidés à optimiser notre taux de cotisation AT/MP grâce à un meilleur accompagnement prévention. Économie annuelle de 15%.", author: "François B.", title: "DRH", company: "PME industrielle" },
              { quote: "On ne savait pas par où commencer pour le DUERP et l\'AT/MP. Le courtier nous a tout expliqué clairement et a géré les démarches. Top.", author: "Nadia K.", title: "Dirigeante", company: "Entreprise de nettoyage" },
              { quote: "Service gratuit et réactif. Le questionnaire a permis au courtier de bien comprendre notre activité BTP. Couverture adaptée souscrite en 48h.", author: "Laurent G.", title: "Gérant", company: "BTP Marseille" },
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
              { q: 'C\'est vraiment gratuit ?', a: 'Oui. Le questionnaire Insurial est 100% gratuit et sans engagement. Vous ne payez rien pour être mis en relation.' },
              { q: 'AT/MP: quoi de couvert ?', a: 'Accidents survenus pendant le travail ou sur le trajet, et maladies reconnues comme liées à l\'activité (TMS, exposition...).' },
              { q: 'DUERP obligatoire ?', a: 'Oui, dès le 1er salarié. Il identifie les risques et mesures de prévention. Impact sur vos cotisations AT/MP.' },
              { q: 'Comment réduire mes cotisations ?', a: 'Prévention active (formations, EPI, DUERP à jour) et faible sinistralité baissent votre taux. Un courtier peut vous accompagner.' },
              { q: 'Combien de temps ça prend ?', a: '3 minutes pour le questionnaire. Un courtier spécialisé AT/MP vous contacte sous 24-48h.' },
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Prêt à sécuriser vos équipes ?</h2>
            <p className="text-gray-600 mt-2">Plus de 600 entreprises ont déjà franchi le pas. Complétez votre questionnaire en 3 minutes et soyez contacté sous 24h.</p>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-600">
              <span className="flex items-center"><svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>100% Gratuit</span>
              <span className="flex items-center"><svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Sans engagement</span>
              <span className="flex items-center"><svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Conforme RGPD</span>
            </div>
          </div>
          <ATMPMultiStepForm />
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
