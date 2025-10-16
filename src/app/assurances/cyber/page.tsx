import InsuranceTemplate from '@/components/InsuranceTemplate';

export default function CyberRisksPage() {
  return (
    <InsuranceTemplate
      riskName="Cyber Risques"
      pedagogyParagraph="L’assurance cyber couvre les conséquences d’incidents numériques (ransomware, fuite de données, compromission de compte, DDoS) : assistance d’urgence, restauration des systèmes, notification CNIL, défense juridique, responsabilités vis‑à‑vis des tiers et pertes d’exploitation. Elle est devenue indispensable pour réduire l’impact opérationnel, financier et réglementaire."
      examples={[
        'Chiffrement des serveurs suite à un ransomware avec demande de rançon',
        'Fuite de données clients nécessitant notification CNIL et assistance',
        'Paralysie du site e‑commerce et perte de chiffre d’affaires',
      ]}
      faqs={[
        { question: 'Cyber : quelles obligations RGPD ?', answer: 'Notification CNIL sous 72h en cas de violation de données + information des personnes concernées selon le risque.' },
        { question: 'Faut‑il des prérequis techniques ?', answer: 'Souvent oui (MFA, sauvegardes, patching). Des mesures de base sont demandées par les assureurs.' },
        { question: 'Assistance 24/7 ?', answer: 'Généralement incluse via une cellule d’intervention cyber dédiée (forensics, restauration, communication).' },
      ]}
    />
  );
}


