import React from 'react';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/home/Marquee';
import { BentoServices } from '../components/home/BentoServices';
import { SystemSimulator } from '../components/home/SystemSimulator';
import { WhyUs } from '../components/home/WhyUs';
import { StrategyPlanner } from '../components/home/StrategyPlanner';
import { Process } from '../components/home/Process';
import { Testimonials } from '../components/home/Testimonials';
import { FinalCTA } from '../components/home/FinalCTA';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="w-full">
      <Hero onNavigate={onNavigate} />
      <Marquee />
      <BentoServices onNavigate={onNavigate} />
      <SystemSimulator />
      <WhyUs />
      <StrategyPlanner onNavigate={onNavigate} />
      <Process />
      <Testimonials />
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}