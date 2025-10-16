import InsuranceTemplate from '@/components/InsuranceTemplate';

export default function RCProPage() {
  return (
    <InsuranceTemplate
      riskName="RC Professionnelle"
      pedagogyParagraph="La responsabilité civile professionnelle couvre les conséquences financières des dommages causés à des tiers (clients, partenaires, visiteurs) du fait d’une erreur, d’une omission, d’un défaut de conseil ou d’une négligence dans l’exercice de votre activité. Elle prend en charge la défense juridique, les indemnisations et certains frais annexes, afin de préserver votre trésorerie et votre continuité d’activité. Cette couverture est souvent exigée par contrat, appel d’offres ou par vos clients pour sécuriser la relation."
      examples={[
        'Conseil erroné entraînant une perte financière chez un client (E&O)',
        'Dommage matériel lors d’une intervention dans les locaux d’un client',
        'Défaut de conformité livrable déclenchant une réclamation contractuelle',
        'Atteinte à la réputation (diffamation, dénigrement) alléguée par un tiers',
      ]}
      faqs={[
        { question: 'La RC Pro est‑elle obligatoire ?', answer: 'Elle est obligatoire pour certaines professions réglementées et souvent exigée contractuellement. Même non obligatoire, elle est fortement recommandée.' },
        { question: 'Quelle différence entre RC Pro et RC exploitation ?', answer: 'La RC Pro couvre les fautes professionnelles (erreur/omission). La RC exploitation couvre les dommages causés dans la vie courante de l’entreprise (locaux, chantiers, etc.).' },
        { question: 'Quels montants de garantie prévoir ?', answer: 'Selon votre activité/contrats : typiquement de 300 000 € à plusieurs millions. Vérifiez les plafonds par sinistre et par année.' },
      ]}
    />
  );
}


