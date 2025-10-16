import InsuranceTemplate from '@/components/InsuranceTemplate';

export default function FlotteAutoPage() {
  return (
    <InsuranceTemplate
      riskName="Flotte Automobile"
      pedagogyParagraph="La flotte automobile protège l’ensemble de vos véhicules (voitures de service, utilitaires, camions) contre la responsabilité civile, les dommages tous accidents, le vol, l’incendie, le bris de glace et l’assistance. Elle permet de centraliser la gestion des garanties, de négocier des conditions adaptées au parc et de limiter l’impact des immobilisations sur votre activité."
      examples={[
        'Accident responsable d’un utilitaire en tournée de livraison',
        'Bris de glace récurrent sur véhicules d’intervention',
        'Vol d’un véhicule et assistance pour rapatriement/continuité',
      ]}
      faqs={[
        { question: 'Quelle taille minimale pour une flotte ?', answer: 'Selon assureur : dès 3 à 5 véhicules. Au‑dessous, contrats individuels classiques.' },
        { question: 'Conducteurs nommés ou tous conducteurs ?', answer: 'Possible au choix, impacte la prime et les conditions d’acceptation.' },
        { question: 'Peut‑on mixer VP/VU/PL ?', answer: 'Oui, avec des conditions de tarification et de garanties adaptées au mix du parc.' },
      ]}
    />
  );
}


