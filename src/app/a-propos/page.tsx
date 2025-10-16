import type { Metadata } from 'next';
import Link from 'next/link';

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

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qui sommes‑nous</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Insurial est opéré par <strong>BPC Group</strong>. Notre objectif est d’apporter une information fiable et actionnable aux entreprises et indépendants, en France et à l’international.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nous ne sommes pas courtier ni assureur : nous aidons à comprendre les risques, les garanties et les démarches, pour que chacun puisse dialoguer sereinement avec ses interlocuteurs professionnels.
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

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ce que vous trouverez sur Insurial</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Des explications concrètes sur les principales assurances professionnelles</li>
            <li>Des guides pratiques pour préparer vos décisions et vos renouvellements</li>
            <li>Un <Link href="/comment-ca-marche" className="text-[#1E3A8A] hover:underline">parcours pédagogique</Link> simple pour comprendre l’essentiel</li>
            <li>Un accès direct à nos articles et ressources via le <Link href="/blog" className="text-[#1E3A8A] hover:underline">blog</Link></li>
          </ul>
          <div className="mt-6">
            <Link href="/assurances" className="inline-flex items-center rounded-md bg-[#1E3A8A] px-4 py-2 text-white hover:bg-blue-800">
              Explorer les assurances
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ce que nous ne faisons pas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Nous ne vendons pas d’assurances et n’agissons pas comme courtier ou assureur</li>
            <li>Nos contenus ne constituent pas un conseil juridique, fiscal, comptable ou d’assurance</li>
            <li>Nous n’effectuons pas de démarchage commercial à partir de vos lectures</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Pour plus de détails, voir notre <Link href="/disclaimer" className="text-[#1E3A8A] hover:underline">Avertissement</Link> et nos <Link href="/legal" className="text-[#1E3A8A] hover:underline">Informations légales</Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre méthode éditoriale</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Sources publiques, textes réglementaires et documentation marché lorsque disponible</li>
            <li>Normalisation du vocabulaire pour limiter le jargon et faciliter la comparaison</li>
            <li>Relecture humaine et datation des contenus ; mises à jour régulières</li>
            <li>Priorité donnée aux exemples pratiques et aux checklists actionnables</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vie privée et conformité</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous appliquons des pratiques de confidentialité respectueuses et conformes au RGPD (chiffrement SSL, accès limités, suivi agrégé de l’audience). Les détails sont disponibles dans notre <Link href="/privacy" className="text-[#1E3A8A] hover:underline">Politique de confidentialité</Link>.
          </p>
          <p className="text-gray-700">
            En cas de question sur vos données ou pour exercer vos droits, écrivez‑nous à <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nous contacter</h2>
          <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
            <p className="mb-2"><strong>Général :</strong> <a href="mailto:hello@insurial.info" className="text-[#1E3A8A] hover:underline">hello@insurial.info</a></p>
            <p className="mb-2"><strong>Vie privée :</strong> <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a></p>
            <p className="mb-0"><strong>Légal :</strong> <a href="mailto:legal@insurial.info" className="text-[#1E3A8A] hover:underline">legal@insurial.info</a></p>
          </div>
        </section>
      </div>
    </main>
  );
}


