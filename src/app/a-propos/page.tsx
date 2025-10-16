import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'À propos - Insurial',
  description: "Notre mission : rendre l’assurance entreprise compréhensible et actionnable pour tous. Diagnostic gratuit, sans obligation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-5xl py-12 md:py-16 text-center">
          <div className="mx-auto mb-5 h-12 w-12 relative">
            <Image src="/logo.png" alt="Insurial" fill sizes="48px" className="object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-archivo-black text-gray-900 mb-4">À propos d’Insurial</h1>
          <p className="text-lg text-gray-700 mx-auto max-w-3xl">
          Insurial est une plateforme pédagogique indépendante dédiée à l’assurance des entreprises. Nous aidons les dirigeants, indépendants et TPE/PME à clarifier leurs besoins, comprendre les garanties essentielles et préparer leurs décisions.
        </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/assurances" className="inline-flex items-center rounded-md bg-[#1E3A8A] px-4 py-2 text-white hover:bg-blue-800">
              Explorer les assurances
            </Link>
            <Link href="/comment-ca-marche" className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-white">
              Comment ça marche
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl pb-16">
        {/* Mission */}
        <section className="mb-10">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Rendre simple ce qui est complexe. Nous produisons des guides clairs et proposons un diagnostic gratuit pour vous aider à identifier vos priorités de couverture, sans démarche commerciale ni pression.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qui sommes‑nous</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Insurial est opéré par <strong>BPC Group</strong>. Notre objectif est d’apporter une information fiable et actionnable aux entreprises et indépendants, en France et à l’international.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nous ne sommes pas courtier ni assureur : nous aidons à comprendre les risques, les garanties et les démarches, pour que chacun puisse dialoguer sereinement avec ses interlocuteurs professionnels.
          </p>
        </section>

        {/* Principes */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos principes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Indépendance et pédagogie avant tout',
              'Respect de la vie privée (RGPD, SSL)',
              'Clarté, pragmatisme et transparence',
            ].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm p-6 text-gray-700">
                <div className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A]">✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contenus */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ce que vous trouverez sur Insurial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Des explications concrètes sur les principales assurances professionnelles',
              'Des guides pratiques pour préparer vos décisions et vos renouvellements',
              <>
                Un <Link href="/comment-ca-marche" className="text-[#1E3A8A] hover:underline">parcours pédagogique</Link> simple pour comprendre l’essentiel
              </>,
              <>
                Un accès direct à nos articles et ressources via le <Link href="/blog" className="text-[#1E3A8A] hover:underline">blog</Link>
              </>,
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6 text-gray-700">
                <div className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A]">•</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ce que nous ne faisons pas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Nous ne vendons pas d’assurances et n’agissons pas comme courtier ou assureur',
              'Nos contenus ne constituent pas un conseil juridique, fiscal, comptable ou d’assurance',
              'Nous n’effectuons pas de démarchage commercial à partir de vos lectures',
            ].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm p-6 text-gray-700">
                <div className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-red-600">!</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4">
            Pour plus de détails, voir notre <Link href="/disclaimer" className="text-[#1E3A8A] hover:underline">Avertissement</Link> et nos <Link href="/legal" className="text-[#1E3A8A] hover:underline">Informations légales</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre méthode éditoriale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Sources publiques, textes réglementaires et documentation marché lorsque disponible',
              'Normalisation du vocabulaire pour limiter le jargon et faciliter la comparaison',
              'Relecture humaine et datation des contenus ; mises à jour régulières',
              'Priorité donnée aux exemples pratiques et aux checklists actionnables',
            ].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm p-6 text-gray-700">
                <div className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vie privée et conformité</h2>
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-10">
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous appliquons des pratiques de confidentialité respectueuses et conformes au RGPD (chiffrement SSL, accès limités, suivi agrégé de l’audience). Les détails sont disponibles dans notre <Link href="/privacy" className="text-[#1E3A8A] hover:underline">Politique de confidentialité</Link>.
            </p>
            <p className="text-gray-700">
              En cas de question sur vos données ou pour exercer vos droits, écrivez‑nous à <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a>.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nous contacter</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 text-gray-700">
            <p className="mb-2"><strong>Général :</strong> <a href="mailto:hello@insurial.info" className="text-[#1E3A8A] hover:underline">hello@insurial.info</a></p>
            <p className="mb-2"><strong>Vie privée :</strong> <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a></p>
            <p className="mb-0"><strong>Légal :</strong> <a href="mailto:legal@insurial.info" className="text-[#1E3A8A] hover:underline">legal@insurial.info</a></p>
          </div>
        </section>
      </div>
    </main>
  );
}


