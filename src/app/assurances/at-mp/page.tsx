import InsuranceTemplate from '@/components/InsuranceTemplate';

export default function ATMPPage() {
  return (
    <InsuranceTemplate
      riskName="Accidents du Travail"
      pedagogyParagraph="La couverture AT/MP (accidents du travail et maladies professionnelles) prend en charge les conséquences d’un accident ou d’une maladie liée à l’activité professionnelle : soins, indemnités journalières, rentes, et défense. Elle contribue à sécuriser vos équipes et à réduire l’impact financier d’un sinistre, en complément de vos démarches de prévention (équipements, formation, DUERP)."
      examples={[
        'Blessure d’un salarié lors d’une intervention chez un client',
        'TMS reconnus comme maladie professionnelle sur poste répétitif',
        'Accident de trajet domicile‑travail d’un collaborateur',
      ]}
      faqs={[
        { question: 'AT/MP : quoi de couvert ?', answer: 'Accidents survenus pendant le travail ou sur le trajet, et maladies reconnues comme liées à l’activité.' },
        { question: 'Prévention : obligatoire ?', answer: 'Le DUERP est obligatoire. La prévention réduit la sinistralité et impacte vos cotisations.' },
        { question: 'Subrogation et avance ?', answer: 'Possibles selon accords/conventions. Rapprochez‑vous de votre service paie/URSSAF.' },
      ]}
    />
  );
}


