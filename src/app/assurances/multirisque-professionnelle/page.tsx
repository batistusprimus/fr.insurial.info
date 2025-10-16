import InsuranceTemplate from '@/components/InsuranceTemplate';

export default function MultirisqueProPage() {
  return (
    <InsuranceTemplate
      riskName="Multirisque Professionnelle"
      pedagogyParagraph="La multirisque professionnelle regroupe les garanties clés pour protéger vos locaux, équipements, stocks et votre responsabilité d’occupant contre les sinistres (incendie, dégâts des eaux, catastrophe naturelle, vol, vandalisme). Elle peut inclure la perte d’exploitation pour couvrir les frais fixes et la marge manquée pendant l’arrêt d’activité, ainsi que la protection juridique pour accompagner les démarches."
      examples={[
        'Dégâts des eaux endommageant des serveurs et arrêt temporaire de l’activité',
        'Vol de stocks en entrepôt et perturbation des livraisons clients',
        'Incendie partiel du local nécessitant des travaux et un relogement',
        'Vandalisme sur vitrine et immobilisation temporaire du commerce',
      ]}
      faqs={[
        { question: 'La perte d’exploitation est‑elle incluse ?', answer: 'Souvent en option. Elle indemnise les frais fixes et la marge manquée pendant l’interruption d’activité.' },
        { question: 'Quels biens sont couverts ?', answer: 'Locaux, aménagements, matériel, marchandises/stock, selon les options souscrites et les plafonds établis.' },
        { question: 'Catastrophe naturelle : comment ça marche ?', answer: 'Couvert si arrêté de catastrophe naturelle. Une franchise légale s’applique.' },
      ]}
    />
  );
}


