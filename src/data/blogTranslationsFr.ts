export type BlogFrOverride = {
  title?: string;
  excerpt?: string;
  content?: string; // HTML
};

export const blogTranslationsFr: Record<string, BlogFrOverride> = {
  'cyber-insurance-coverage-gaps-2025': {
    title: "Cyberassurance : ce qui n’est pas couvert en 2025",
    excerpt: "Comprendre les exclusions fréquentes de la cyberassurance pour éviter les angles morts et compléter sa protection.",
    content: `
      <p>La cyberassurance est essentielle, mais elle ne couvre pas tout. Connaître les exclusions et limites vous aide à éviter des mauvaises surprises et à compléter votre programme de protection.</p>

      <h2>Exclusions fréquentes</h2>
      <h3>Actes de guerre / terrorisme</h3>
      <ul>
        <li>Attaques par des États-nations</li>
        <li>Cyber-guerre et actes assimilés</li>
        <li>Mesures gouvernementales ou fermetures imposées</li>
      </ul>

      <h3>Actes intentionnels</h3>
      <ul>
        <li>Malveillance interne (employé) et fraude délibérée</li>
        <li>Partage intentionnel de données non autorisé</li>
        <li>Activités criminelles par le dirigeant</li>
      </ul>

      <h2>Lacunes d’infrastructure et d’exploitation</h2>
      <h3>Systèmes obsolètes</h3>
      <ul>
        <li>Systèmes non pris en charge ou non patchés</li>
        <li>Absence de mesures de sécurité minimales</li>
      </ul>

      <h3>Dépendances Cloud et SaaS</h3>
      <ul>
        <li>Pannes du fournisseur Cloud</li>
        <li>Défaillances d’applications SaaS</li>
        <li>Fuites chez un prestataire affectant votre entreprise</li>
      </ul>

      <h2>Comment combler les lacunes</h2>
      <ul>
        <li>Renforcer les contrôles cybersécurité (MFA, sauvegardes, EDR)</li>
        <li>Maintenir systèmes et logiciels à jour</li>
        <li>Ajouter des avenants ciblés si disponibles</li>
        <li>Formaliser un plan de réponse aux incidents</li>
        <li>Réviser votre couverture au moins une fois par an</li>
      </ul>
    `
  },

  'professional-liability-claims-trends-2025': {
    title: "Tendances 2025 des sinistres en responsabilité professionnelle",
    excerpt: "Les réclamations évoluent avec la technologie et les pratiques. Voici les tendances clés et comment s’en prémunir.",
    content: `
      <p>La responsabilité professionnelle (E&O) suit les évolutions des métiers, de la tech et des attentes clients. En 2025, plusieurs tendances se confirment et appellent des mesures de prévention renforcées.</p>

      <h2>Secteurs les plus exposés</h2>
      <h3>Conseil et technologie</h3>
      <ul>
        <li>Échecs de projets (migration Cloud, intégrations)</li>
        <li>Implantations cybersécurité incomplètes</li>
        <li>Défauts logiciels et dépassements de périmètre</li>
      </ul>
      <h3>Services financiers</h3>
      <ul>
        <li>Conseils en ESG et crypto contestés</li>
        <li>Questions de transparence des frais</li>
      </ul>

      <h2>Facteurs aggravants</h2>
      <ul>
        <li>Travail hybride/à distance (communication, contrôle qualité)</li>
        <li>Documentation insuffisante des échanges clients</li>
        <li>Contrats et limites de responsabilité flous</li>
      </ul>

      <h2>Prévention</h2>
      <ul>
        <li>Contrats précis (périmètre, livrables, exclusions)</li>
        <li>Processus qualité et revues par les pairs</li>
        <li>Journalisation des décisions et validations clients</li>
        <li>Mise à jour continue des compétences et standards</li>
      </ul>
    `
  },

  'commercial-property-valuation-2025': {
    title: "Évaluation des biens commerciaux : bien la réussir en 2025",
    excerpt: "Une évaluation correcte conditionne une couverture adéquate et limite la sous-assurance.",
    content: `
      <p>Une valorisation précise de vos actifs est indispensable pour éviter les mauvaises surprises au moment d’un sinistre. En 2025, l’inflation des coûts et les exigences réglementaires renforcent cet enjeu.</p>

      <h2>Méthodes courantes</h2>
      <ul>
        <li><strong>Valeur à neuf (reconstruction)</strong> : recommandée pour rétablir l’activité</li>
        <li><strong>Valeur vénale</strong> : valeur à neuf moins la dépréciation</li>
      </ul>

      <h2>Facteurs qui pèsent sur la valeur</h2>
      <ul>
        <li>Coûts des matériaux et de la main-d’œuvre</li>
        <li>Ruptures d’approvisionnement</li>
        <li>Variations régionales</li>
        <li>Contraintes de mise aux normes</li>
      </ul>

      <h2>Bonnes pratiques pour éviter la sous-assurance</h2>
      <ul>
        <li>Évaluations annuelles par des professionnels</li>
        <li>Endossements « inflation »</li>
        <li>Inventaires d’actifs documentés et à jour</li>
      </ul>
    `
  },

  'commercial-auto-safety-technology-2025': {
    title: "Auto commerciale : la technologie de sécurité qui fait baisser les primes (2025)",
    excerpt: "Télématique et aides à la conduite réduisent les sinistres et les coûts, tout en améliorant la sécurité de flotte.",
    content: `
      <p>Les technologies embarquées transforment l’assurance auto des entreprises. En mesurant les comportements et en prévenant les accidents, elles réduisent la sinistralité et les primes.</p>

      <h2>Télématique et assurance à l’usage</h2>
      <ul>
        <li>Suivi vitesse, accélérations, freinages brusques</li>
        <li>Analyse des itinéraires et horaires</li>
        <li>Coaching des conducteurs et remises jusqu’à 10–30 %</li>
      </ul>

      <h2>Aides à la conduite</h2>
      <ul>
        <li>Freinage d’urgence, maintien de voie, angles morts</li>
        <li>Surveillance de la vigilance et de la distraction</li>
      </ul>

      <h2>Informations de mise en œuvre</h2>
      <ul>
        <li>Former les conducteurs et fixer des KPIs sécurité</li>
        <li>Revoir régulièrement les données et coacher</li>
        <li>Documenter les améliorations auprès de l’assureur</li>
      </ul>
    `
  },

  'understanding-commercial-insurance-2025-guide': {
    title: "Assurance entreprise : guide 2025 pour dirigeants de PME (États‑Unis)",
    excerpt: "Pourquoi une couverture adéquate est un filet de sécurité essentiel pour votre activité, vos équipes et vos finances.",
    content: `
      <p>Entre exploitation quotidienne et croissance, l’assurance peut sembler une charge de plus. Pourtant, une couverture adéquate protège votre entreprise contre les chocs majeurs.</p>

      <h2>Les garanties clés</h2>
      <ul>
        <li><strong>Responsabilité Civile Générale</strong> : dommages corporels, matériels, immatériels</li>
        <li><strong>AT/MP (Workers’ Comp)</strong> : soins, salaires, rééducation</li>
        <li><strong>Biens commerciaux</strong> : bâtiment, contenu, améliorations locatives</li>
        <li><strong>BOP</strong> : pack RC Générale + Biens, souvent plus économique</li>
      </ul>

      <h2>Le contexte 2025</h2>
      <p>Inflation sociale, risques cyber, climat et chaînes logistiques tendues : autant de facteurs qui appellent des limites adaptées et une gestion du risque proactive.</p>
    `
  },

  'general-liability-insurance-2025-sme-guide': {
    title: "RC Générale en 2025 : l’essentiel pour les PME",
    excerpt: "Protégez-vous contre les réclamations corporelles, matérielles et les préjudices personnels/publicitaires.",
    content: `
      <p>La RC Générale est la base de la protection de nombreuses PME. Elle intervient en cas de dommages causés à des tiers et couvre la défense et les indemnisations selon les limites choisies.</p>

      <h2>Ce que couvre la RC Générale</h2>
      <ul>
        <li>Préjudices corporels à des tiers</li>
        <li>Dommages matériels causés aux biens de tiers</li>
        <li>Atteintes personnelles et publicitaires (ex. diffamation)</li>
      </ul>

      <h2>Limites et coûts</h2>
      <p>Des limites courantes sont 1 M$ par sinistre / 2 M$ en agrégé. Les primes varient selon l’activité, l’historique de sinistres et la localisation.</p>

      <h2>Facteurs qui influencent la prime</h2>
      <ul>
        <li>Secteur et niveau de risque</li>
        <li>Taille de l’entreprise et exposition</li>
        <li>Historique des réclamations</li>
        <li>Limites et franchises choisies</li>
      </ul>
    `
  }
};


