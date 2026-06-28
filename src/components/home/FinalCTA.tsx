import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
interface FinalCTAProps {
  onNavigate: (page: string) => void;
}
export function FinalCTA({ onNavigate }: FinalCTAProps) {
  return (
    <section className="py-40 px-6 md:px-12 bg-brand-bg text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95
        }}
        whileInView={{
          opacity: 1,
          scale: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.8
        }}
        className="max-w-4xl mx-auto relative z-10">
        
        <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-8">
          Ready to Build <br />
          Something{' '}
          <span className="font-editorial text-brand-gold">Serious?</span>
        </h2>
        <p className="text-xl text-brand-text2 mb-12 max-w-2xl mx-auto font-light">
          Stop losing customers to bad design and slow systems. Let's build your
          digital leverage.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button onClick={() => onNavigate('contact')}>
            Start Your Project
          </Button>
          <Button variant="outline" onClick={() => onNavigate('pricing')}>
            See Pricing
          </Button>
        </div>
      </motion.div>
    </section>);

}