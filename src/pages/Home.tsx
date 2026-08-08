import React from 'react';
import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/home/Marquee';
import { AdVideo } from '../components/home/AdVideo';
import { SystemSimulator } from '../components/home/SystemSimulator';

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
      <AdVideo />
      <SystemSimulator />

      <Testimonials />
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
}