import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Cpu, ShieldAlert, Rocket, Check } from 'lucide-react';

export function Process() {
  const steps = [
    {
      num: '01',
      icon: Target,
      title: 'Discovery & Audit',
      desc: 'Deep-dive session into your goals, audience, and bottleneck points to map out direct market opportunities.',
      checks: ['Competitor benchmarking', 'UX friction inspection', 'Technical debt audits', 'Objective alignments']
    },
    {
      num: '02',
      icon: Layers,
      title: 'Strategy & UI Design',
      desc: 'Creating high-fidelity interactive wireframes, custom color systems, and comprehensive design patterns.',
      checks: ['Figma UI prototypes', 'Typography definitions', 'Interactive layout maps', 'Asset styling libraries']
    },
    {
      num: '03',
      icon: Cpu,
      title: 'System Development',
      desc: 'Compiling the system on cutting-edge architectures with high-efficiency logic and complete security layers.',
      checks: ['Sub-second compile pipelines', 'Clean, documented modules', 'Secure API endpoints integration', 'Database table architecture']
    },
    {
      num: '04',
      icon: ShieldAlert,
      title: 'Rigorous Testing & QA',
      desc: 'Exhaustive checklist audits across multiple viewport sizes, mobile devices, and server endpoints.',
      checks: ['Cross-device screen testing', 'Core web vital profiling', 'Security penetration logs', 'Unit transaction mockups']
    },
    {
      num: '05',
      icon: Rocket,
      title: 'Launch & Operations',
      desc: 'Deployment on high-speed CDN grids, technical onboarding, and live continuous telemetry checks.',
      checks: ['High-speed CDN routing', 'SEO schema submissions', 'Team handbook handover', 'Weekly performance monitoring']
    }
  ];

  return (
    <section className="py-24 overflow-hidden bg-brand-surface1 border-y border-brand-border1 relative select-none">
      
      {/* Background ambient orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-brand-gold/60"></span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
            How We Deliver
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-text1 leading-[1.1]">
          Our Delivery <span className="font-editorial text-brand-gold font-normal italic">Process</span>
        </h2>
      </div>

      {/* Horizontal Scroll Snap Container */}
      <div className="relative max-w-[1400px] mx-auto">
        
        {/* Continuous Horizontal Dotted Milestone Line (Desktop Only) */}
        <div className="hidden lg:block absolute top-[44px] left-[6%] right-[10%] h-[1px] border-t border-dashed border-brand-border2 z-0" />

        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 md:px-12 pb-12 gap-8 scroll-smooth">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="snap-start shrink-0 w-[85vw] md:w-[420px] bg-brand-surface2/60 border border-brand-border1 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between hover:border-brand-gold/30 hover:bg-brand-surface2 transition-all duration-500 relative group"
              >
                {/* Visual Connector Dot overlay */}
                <div className="hidden lg:flex absolute top-[-51px] left-10 w-6 h-6 rounded-full bg-brand-bg border border-brand-border1 items-center justify-center group-hover:border-brand-gold transition-colors duration-500 z-10">
                  <div className="w-2 h-2 rounded-full bg-brand-border2 group-hover:bg-brand-gold transition-colors duration-500" />
                </div>

                <div className="space-y-6">
                  {/* Icon and Number */}
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-2xl bg-brand-surface3 border border-brand-border1 text-brand-gold flex items-center justify-center group-hover:border-brand-gold/50 transition-colors">
                      <Icon size={20} />
                    </div>
                    <div className="text-5xl font-editorial text-brand-text3/30 group-hover:text-brand-gold/20 transition-colors font-extrabold select-none">
                      {step.num}
                    </div>
                  </div>

                  {/* Title and description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-heading font-bold text-brand-text1 leading-none group-hover:text-brand-goldHi transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-brand-text2 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  {/* Checklist Sub-Scope items */}
                  <div className="pt-4 border-t border-brand-border1/60 space-y-2">
                    {step.checks.map((check, checkIndex) => (
                      <div key={checkIndex} className="flex items-center gap-2 text-xs text-brand-text2">
                        <div className="w-4 h-4 rounded-md bg-brand-gold/10 border border-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0">
                          <Check size={10} />
                        </div>
                        <span>{check}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-b-[2rem]" />
              </motion.div>
            );
          })}
          
          {/* Spacer for end of scroll */}
          <div className="shrink-0 w-[6vw] md:w-[12vw]" />
        </div>
      </div>
    </section>
  );
}