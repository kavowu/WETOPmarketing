
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { PainPoints } from '../components/PainPoints';
import { Comparison } from '../components/Comparison';
import { Features } from '../components/Features';
import { SensoryEvidence } from '../components/SensoryEvidence';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

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
