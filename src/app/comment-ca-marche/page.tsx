import type { Metadata } from 'next';
import HowItWorks from '@/components/HowItWorks';

export const metadata: Metadata = {
  title: 'Comment ça marche - Insurial',
  description: 'Un processus simple et transparent pour obtenir rapidement la bonne couverture. Diagnostic gratuit, sans obligation.'
};

export default function CommentCaMarchePage() {
  return (
    <main className="min-h-screen bg-white">
      <HowItWorks />
    </main>
  );
}


