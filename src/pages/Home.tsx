import React from 'react';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/home/Marquee';
import { BentoServices } from '../components/home/BentoServices';
import { ServicesCategory } from '../components/home/ServicesCategory';
import { SystemSimulator } from '../components/home/SystemSimulator';
import { Process } from '../components/home/Process';
import { StrategyPlanner } from '../components/home/StrategyPlanner';
import { AdVideo } from '../components/home/AdVideo';
import { Testimonials } from '../components/home/Testimonials';
import { FinalCTA } from '../components/home/FinalCTA';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="w-full">
      {/* 1. Hero Showcase */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Capability & Tech Marquee Ticker */}
      <Marquee />

      {/* 3. Interactive Bento Services Carousel */}
      <BentoServices onNavigate={onNavigate} />

      {/* 4. Services Category Explorer */}
      <ServicesCategory onNavigate={onNavigate} />

      {/* 5. Live Interactive System Simulator */}
      <SystemSimulator />

      {/* 6. 5-Step Delivery Process */}
      <Process />

      {/* 7. Interactive Strategy & Growth Configurator */}
      <StrategyPlanner onNavigate={onNavigate} />

      {/* 8. Brand Video Showcase */}
      <AdVideo />

      {/* 9. Client Testimonials & Social Proof */}
      <Testimonials />

      {/* 10. Finale Conversion CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}