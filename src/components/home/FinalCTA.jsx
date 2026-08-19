import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, MessageSquare } from 'lucide-react';

export function FinalCTA({ onNavigate }) {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 bg-brand-bg text-center relative overflow-hidden select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 mb-8">
          <span className="w-[3px] h-4 rounded-full bg-brand-gold" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand-gold">
            Now Accepting Ambitious Projects
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-brand-text1 leading-[1.12] tracking-tight mb-6">
          Ready to Build <br />
          Something{' '}
          <span className="text-brand-gold font-black">
            Extraordinary?
          </span>
        </h2>

        <p className="text-base md:text-lg text-brand-text2 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Stop losing clients to outdated systems and invisible search rankings. Partner with Norstack Digital to engineer digital leverage that drives real revenue.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-gold text-white font-bold text-xs uppercase tracking-widest rounded-full px-8 py-4 transition-all duration-300 shadow-md group"
          >
            <span>Start Your Project</span>
            <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate('pricing')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-brand-border1 bg-brand-surface2 hover:bg-brand-surface3 hover:border-brand-gold/40 text-brand-text1 font-bold text-xs uppercase tracking-widest rounded-full px-8 py-4 transition-all duration-300 backdrop-blur-md"
          >
            <span>View Packages &amp; Pricing</span>
          </motion.button>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-brand-border1/60 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[11px] font-bold text-brand-text3 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-brand-gold" />
            <span>2 &ndash; 4 Week Rapid Sprints</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-brand-gold" />
            <span>100% Code Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare size={14} className="text-brand-gold" />
            <span>Free Architecture Consultation</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
