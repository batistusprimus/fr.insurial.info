import InsuranceTemplate from '@/components/InsuranceTemplate';

export default function PackTPEPage() {
  return (
    <InsuranceTemplate
      riskName="Pack TPE (Assurance complète)"
      pedagogyParagraph="Le Pack TPE réunit les garanties indispensables pour une petite entreprise (RC Pro, multirisque, protection des biens, pertes d’exploitation) dans un cadre contractuel unifié et simple à gérer. Il offre une vision claire des risques couverts et facilite l’administration quotidienne."
      examples={[
        'Dégât des eaux au local et prise en charge des réparations',
        'Litige client pris en charge par la responsabilité civile',
        'Vol de matériel et compensation de la perte d’exploitation',
      ]}
      faqs={[
        { question: 'Pack TPE : que contient‑il ?', answer: 'Un socle de garanties essentielles (RC Pro, multirisque, pertes d’exploitation), modulables selon l’activité.' },
        { question: 'Peut‑on ajouter des options ?', answer: 'Oui, selon le besoin : cyber, bris de machine, marchandises transportées, etc.' },
        { question: 'Avantage vs contrats séparés ?', answer: 'Gestion simplifiée, cohérence des garanties et conditions, négociation globale plus lisible.' },
      ]}
    />
  );
}


