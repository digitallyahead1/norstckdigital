import React from 'react';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/home/Marquee';
import { AdVideo } from '../components/home/AdVideo';
import { ServicesCategory } from '../components/home/ServicesCategory';
import { StrategyPlanner } from '../components/home/StrategyPlanner';
import { Testimonials } from '../components/home/Testimonials';
import { FinalCTA } from '../components/home/FinalCTA';

export function Home({ onNavigate }) {
  return (
    <div className="w-full">
      {/* 1. Hero Showcase */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Capability & Tech Marquee Ticker */}
      <Marquee />

      {/* 3. Brand Video Showcase */}
      <AdVideo />

      {/* 4. Services Category Explorer */}
      <ServicesCategory onNavigate={onNavigate} />

      {/* 5. Interactive Strategy & Growth Configurator */}
      <StrategyPlanner onNavigate={onNavigate} />

      {/* 6. Client Testimonials & Social Proof */}
      <Testimonials />

      {/* 7. Finale Conversion CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}
