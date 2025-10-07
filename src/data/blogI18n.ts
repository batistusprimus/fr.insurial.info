// Simple i18n helpers for blog rendering in French
export function translateCategoryToFr(category: string): string {
  const map: Record<string, string> = {
    'All Categories': 'Toutes catégories',
    'Commercial Insurance Basics': "Bases de l’assurance entreprise",
    'General Liability': 'Responsabilité Civile Générale',
    "Workers' Compensation": 'Accidents du travail (AT/MP)',
    'Commercial Property': 'Biens commerciaux',
    'Commercial Auto': 'Auto commerciale',
    'Business Owner Policy': 'Police du propriétaire (BOP)',
    'Cyber Liability': 'Responsabilité cyber',
    'Professional Liability': 'Responsabilité professionnelle',
    'Product Liability': 'Responsabilité du fait des produits',
    'Employment Practices': 'Pratiques d’emploi (EPLI)',
    'Cost Management': 'Maîtrise des coûts',
    'Risk Management': 'Gestion des risques',
    'Claims Management': 'Gestion des sinistres',
    'Industry Specific': 'Spécifique par secteur'
  };
  return map[category] ?? category;
}

export function translateReadTimeToFr(readTime: string): string {
  // Convert patterns like "6 min read" to French
  const match = readTime.match(/^(\d+)\s*min\s*read$/i);
  if (match) {
    return `${match[1]} min de lecture`;
  }
  return readTime;
}


