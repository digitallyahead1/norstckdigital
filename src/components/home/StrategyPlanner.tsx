import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, TrendingUp, CheckSquare, Layers, Lock } from 'lucide-react';
import { CountUp } from '../ui/CountUp';

interface StrategyPlannerProps {
  onNavigate: (page: string) => void;
}

export function StrategyPlanner({ onNavigate }: StrategyPlannerProps) {
  const challenges = [
    {
      id: 'leads',
      btnLabel: 'Scale Web Conversions & Leads',
      title: 'Performance Lead-Vending Platform Strategy',
      timeline: '3 - 5 Weeks',
      roi: 4,
      roiSuffix: 'x Average',
      techs: ['Vite', 'React', 'Tailwind CSS', 'Framer Motion', 'SEO Opt'],
      steps: [
        'Perform complete audit of friction nodes on checkout/sign-up flows',
        'Implement visual structural elements, glassmorphism badges, and smooth scroll animations',
        'Deploy custom React frontend backed by super-fast response hooks to capture leads <20ms',
        'Directly funnel prospects to qualified email newsletters & high-end CRM boards'
      ],
      terminalLog: 'Routing lead pipeline. Optimizing layout flow. Compiling static components. Final performance score: 100/100.'
    },
    {
      id: 'automation',
      btnLabel: 'Automate Manual Business Workflows',
      title: 'Workflow Orchestration & Node-Mapping Strategy',
      timeline: '2 - 4 Weeks',
      roi: 5,
      roiSuffix: 'x Hours Saved',
      techs: ['NodeJS', 'Express', 'Zapier APIs', 'PostgreSQL', 'Webhooks'],
      steps: [
        'Map out core customer onboarding, invoice notifications, and data updates',
        'Build custom middleware routing transactions directly through secure endpoint relays',
        'Configure event-triggered SMS/WhatsApp channels via Twilio/SMEPlug handlers',
        'Setup live system dashboard for transparent metric auditing'
      ],
      terminalLog: 'Checking API keys. Initializing webhooks. Connecting PostgreSQL data tables. Active integrations: 100% OK.'
    },
    {
      id: 'saas',
      btnLabel: 'Build Custom Mobile SaaS / Wallet App',
      title: 'High-Fidelity Transaction & Wallet App Strategy',
      timeline: '6 - 9 Weeks',
      roi: 3,
      roiSuffix: 'x Engagement',
      techs: ['React Native', 'TypeScript', 'NodeJS', 'Spring Boot', 'Stripe/Paystack'],
      steps: [
        'Architect responsive mobile dashboard showing balances and transaction ledgers',
        'Code custom API integrations with vending endpoints (SME data, voice vending)',
        'Engineer strict administrative access controls and secure multi-factor authentication',
        'Deploy Android & iOS pipelines for rapid, continuous app-store distribution'
      ],
      terminalLog: 'Validating security modules. Initializing Android/iOS containers. Compiling wallet ledgers. Secure connection: ACTIVE.'
    },
    {
      id: 'brand',
      btnLabel: 'Complete Brand Identity & UI Overhaul',
      title: 'Premium UX Design & Editorial Brand Strategy',
      timeline: '2 - 3 Weeks',
      roi: 2,
      roiSuffix: 'x Brand Value',
      techs: ['Figma UI', 'Syne Font', 'Vanilla CSS', 'Color Theory', 'Micro-interactions'],
      steps: [
        'Deconstruct competitor layouts and benchmark against elite, world-class premium websites',
        'Develop sophisticated color system featuring dark/light balance, gradients, and custom overlays',
        'Design elegant typography hierarchy combining heavy headings with italic editorial highlights',
        'Add ambient scroll trigger effects and premium custom loaders'
      ],
      terminalLog: 'Generating color palette tokens. Loading Google Fonts (Syne/DM Sans). Creating CSS variables. Aesthetics: REDESIGNED.'
    }
  ];

  const [selectedChallenge, setSelectedChallenge] = useState(challenges[0]);
  const [typingLog, setTypingLog] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Simulate logging effects on select
  useEffect(() => {
    setIsTyping(true);
    setTypingLog('');
    let index = 0;
    const log = selectedChallenge.terminalLog;
    
    const interval = setInterval(() => {
      if (index < log.length) {
        setTypingLog(prev => prev + log.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [selectedChallenge]);

  return (
    <section className="py-24 px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-[30%] left-[10%] w-[45vw] h-[45vw] bg-brand-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-gold/60"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
              Growth Configurator
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-text1 leading-[1.1] tracking-tight">
            Configure Your Custom <br />
            <span className="font-editorial text-brand-gold font-normal italic">Leverage Strategy</span>
          </h2>
          <p className="text-sm text-brand-text2 mt-4 max-w-xl font-light">
            Select your agency target objective. Our interactive configurator will instantly compute recommended stacks, timelines, and action metrics tailored to your digital growth.
          </p>
        </div>

        {/* Configuration Board Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Buttons list */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] uppercase font-bold tracking-widest text-brand-text3 mb-2 px-1">
              Select Current Business Challenge
            </div>
            
            {challenges.map((c) => {
              const isSelected = selectedChallenge.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedChallenge(c)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 ease-lux flex items-center justify-between group ${
                    isSelected
                      ? 'bg-brand-surface1 border-brand-gold/60 shadow-[0_0_20px_rgba(0,210,255,0.2)]'
                      : 'bg-brand-surface2/40 border-brand-border1 hover:border-brand-border2 hover:bg-brand-surface2/60'
                  }`}
                >
                  <div className="space-y-1">
                    <div className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isSelected ? 'text-brand-gold' : 'text-brand-text2 group-hover:text-brand-text1'
                    }`}>
                      {c.btnLabel}
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                    isSelected ? 'bg-brand-gold border-brand-gold text-brand-bg' : 'border-brand-border2 text-brand-text3 group-hover:text-brand-text2'
                  }`}>
                    &rarr;
                  </div>
                </button>
              );
            })}

            {/* Terminal Console Simulation Box */}
            <div className="bg-brand-surface1 border border-brand-border1 rounded-2xl p-5 font-mono text-[11px] h-32 flex flex-col justify-between shadow-inner">
              <div className="text-[8px] font-extrabold text-brand-text3 uppercase tracking-wider border-b border-brand-border1 pb-2">
                Strategy Pipeline Log
              </div>
              <div className="text-brand-text2 flex-grow pt-2 flex items-start gap-1">
                <span className="text-brand-gold font-bold">&gt;</span>
                <span>{typingLog}</span>
                {isTyping && <span className="w-1.5 h-3 bg-brand-gold animate-pulse inline-block" />}
              </div>
              <div className="text-[8px] text-brand-text3/50 text-right uppercase tracking-widest">
                Norstack Configurator v1.4
              </div>
            </div>
          </div>

          {/* Right panel: Live Computed Strategy Sheet */}
          <div className="lg:col-span-7 bg-brand-surface2 border border-brand-border1 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 blur-[50px] rounded-full group-hover:bg-brand-gold/10 transition-colors duration-500" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedChallenge.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 space-y-8"
              >
                {/* Output Title */}
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 border border-brand-gold/25 text-brand-gold text-[9px] font-bold rounded-full uppercase tracking-wider mb-3">
                    <Sparkles size={10} /> Live computed roadmap
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-brand-text1 tracking-tight">
                    {selectedChallenge.title}
                  </h3>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-6 py-6 border-y border-brand-border1/60">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-surface3 border border-brand-border1 flex items-center justify-center text-brand-gold">
                      <Calendar size={18} />
                    </div>
                    <div>
                    <div className="text-[8px] uppercase tracking-widest text-brand-text3 font-extrabold">Delivery Timeline</div>
                    <div className="text-lg font-bold text-brand-text1 mt-1">{selectedChallenge.timeline}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-surface3 border border-brand-border1 flex items-center justify-center text-brand-gold">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <div className="text-[8px] uppercase tracking-widest text-brand-text3 font-extrabold">Estimated Return</div>
                    <div className="text-lg font-bold text-brand-gold mt-1">
                      <CountUp to={selectedChallenge.roi} suffix={selectedChallenge.roiSuffix} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="space-y-3">
                <div className="text-[9px] uppercase font-bold tracking-widest text-brand-text3 flex items-center gap-1.5">
                  <Layers size={11} /> Suggested System Architecture
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedChallenge.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-brand-surface3 hover:bg-brand-surface1 border border-brand-border1 text-brand-text2 hover:text-brand-gold text-[10px] font-bold uppercase rounded-lg transition-colors duration-300 select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step Roadmap */}
              <div className="space-y-4">
                <div className="text-[9px] uppercase font-bold tracking-widest text-brand-text3 flex items-center gap-1.5">
                  <CheckSquare size={11} /> Phase Milestones & Core Action Items
                </div>
                <div className="space-y-3">
                  {selectedChallenge.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-brand-text2 leading-relaxed">
                      <span className="flex-shrink-0 w-5 h-5 rounded-md bg-brand-surface3 border border-brand-border1 text-[9px] font-extrabold text-brand-gold flex items-center justify-center">
                        0{i + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion CTA */}
              <button
                onClick={() => onNavigate('contact')}
                className="w-full mt-6 inline-flex items-center justify-center gap-4 rounded-xl py-4 bg-brand-text1 hover:bg-brand-gold text-white text-xs font-extrabold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-brand-text1/5 hover:shadow-brand-gold/10 group"
              >
                <Lock size={12} className="group-hover:rotate-12 transition-transform" /> Lock In Strategy Consult
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </div>
    </section>
  );
}
