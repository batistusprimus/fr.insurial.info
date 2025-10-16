'use client';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import KeyBenefits from '@/components/KeyBenefits';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import PressLogos from '@/components/PressLogos';
import RisksCovered from '@/components/RisksCovered';
import WhyAnticipate from '@/components/WhyAnticipate';

export default function Home() {
  const scrollToForm = () => {
    if (typeof document !== 'undefined') {
      document.getElementById('les-risques-couverts')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - headline + sub-headline + CTA */}
      <Hero onScrollToForm={scrollToForm} />
      
      {/* Press logos */}
      <PressLogos />
      
      {/* À propos d'Insurial */}
      <ValueProposition />
      
      {/* Les risques couverts */}
      <RisksCovered />
      
      {/* Social Proof & Testimonials */}
      <Testimonials />
      
      {/* Pourquoi choisir Insurial */}
      <KeyBenefits />

      {/* Pourquoi anticiper ses risques */}
      <WhyAnticipate />
      
      {/* Final CTA */}
      <FinalCTA onScrollToForm={scrollToForm} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
