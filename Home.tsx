
import React from 'react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { PainPoints } from './PainPoints';
import { Comparison } from './Comparison';
import { Features } from './Features';
import { SensoryEvidence } from './SensoryEvidence';
import { CTA } from './CTA';
import { Footer } from './Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <PainPoints />
      <Comparison />
      <Features />
      <SensoryEvidence />
      <CTA />
      <Footer />
    </div>
  );
};
