import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Clock,
  Cpu,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  Zap,
  Layers,
  Smartphone,
  Sparkles,
} from 'lucide-react';

interface StrategyPlannerProps {
  onNavigate: (page: string) => void;
}

interface StrategyObjective {
  id: string;
  icon: React.ElementType;
  label: string;
  headline: string;
  description: string;
  timeline: string;
  roi: string;
  architecture: string;
  milestone: string;
}

const strategies: StrategyObjective[] = [
  {
    id: 'conversions',
    icon: TrendingUp,
    label: 'Lead & Sales Growth',
    headline: 'High-Converting Digital Funnels & Growth Engines',
    description:
      'We architect precision-engineered websites and landing systems designed to eliminate user friction, maximize conversions, and capture high-intent leads.',
    timeline: '3 - 5 Weeks',
    roi: '4x Average Pipeline Growth',
    architecture: 'Next.js, React, Tailwind CSS, Technical SEO',
    milestone: 'Friction Audit, Conversion Wireframing & Sub-second API Integration',
  },
  {
    id: 'automation',
    icon: Zap,
    label: 'Business Automation',
    headline: 'End-to-End Workflow & Operational Orchestration',
    description:
      'We eliminate hundreds of hours of manual labor by integrating your customer portals directly with automated CRM pipelines, billing systems, and messaging relays.',
    timeline: '2 - 4 Weeks',
    roi: '5x Hours Saved Monthly',
    architecture: 'Node.js, PostgreSQL, Webhooks, WhatsApp & Twilio APIs',
    milestone: 'API Handshake, Database Architecture & Automated Notifications',
  },
  {
    id: 'software',
    icon: Smartphone,
    label: 'Custom SaaS & Apps',
    headline: 'Scalable Mobile Apps & Enterprise SaaS Platforms',
    description:
      'We design and deploy robust mobile applications and cloud-native software platforms equipped with real-time sync, role-based controls, and bulletproof security.',
    timeline: '6 - 9 Weeks',
    roi: '3x Customer Engagement',
    architecture: 'React Native, TypeScript, Spring Boot, Paystack & Stripe',
    milestone: 'Secure Wallet Ledger, Mobile UI Design & Cloud Infrastructure',
  },
  {
    id: 'branding',
    icon: Sparkles,
    label: 'Brand & UX Overhaul',
    headline: 'Authority-Building Visual Identities & UX Systems',
    description:
      'We elevate your brand perception with world-class visual design, comprehensive design systems, and editorial typography that command premium market positioning.',
    timeline: '2 - 3 Weeks',
    roi: '2.5x Perceived Brand Value',
    architecture: 'Figma UI, Design Tokens, Micro-Interactions & Guidelines',
    milestone: 'Competitor Benchmarking, Visual Hierarchy & Component Library',
  },
];

export function StrategyPlanner({ onNavigate }: StrategyPlannerProps) {
  const [activeId, setActiveId] = useState<string>('conversions');
  const active = strategies.find((s) => s.id === activeId) || strategies[0];

  return (
    <section className="py-24 md:py-32 bg-[#050608] relative overflow-hidden select-none border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 right-0 w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] opacity-20 rounded-full blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 229, 176, 0.2) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 80%)',
          }}
        />
        <div
          className="absolute bottom-0 left-[-5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] opacity-15 rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-[3px] h-5 rounded-full bg-gradient-to-b from-[#00e5b0] to-[#00d2ff]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#00e5b0]">
              Strategic Growth Configurator
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight tracking-tight">
            Tailored Strategies Built for{' '}
            <span className="bg-gradient-to-r from-[#00e5b0] via-[#00d2ff] to-[#a855f7] bg-clip-text text-transparent">
              Maximum ROI
            </span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: Big Clean Strategy Tabs ─────────────────── */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-6 lg:gap-14 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none">
            {strategies.map((strat) => {
              const Icon = strat.icon;
              const isActive = strat.id === activeId;
              return (
                <button
                  key={strat.id}
                  onClick={() => setActiveId(strat.id)}
                  className="group flex items-center gap-4 md:gap-5 text-left transition-all duration-300 outline-none focus:outline-none whitespace-nowrap lg:whitespace-normal cursor-pointer"
                >
                  <Icon
                    strokeWidth={2.2}
                    className={`w-7 h-7 md:w-9 md:h-9 transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'text-[#00e5b0] scale-110 drop-shadow-[0_0_12px_rgba(0,229,176,0.5)]'
                        : 'text-[#1e3a35] group-hover:text-[#00e5b0]/60'
                    }`}
                  />
                  <span
                    className={`text-2xl md:text-3xl lg:text-[38px] font-bold tracking-tight transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-[#444a56] group-hover:text-slate-300'
                    }`}
                  >
                    {strat.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT COLUMN: Description & Solid Corporate Card Grid ───────── */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Description */}
                <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed max-w-2xl mb-4">
                  {active.description}
                </p>

                {/* "Lock in strategy consult ↗" link */}
                <div className="mb-8">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 text-[15px] font-bold text-white hover:text-[#00e5b0] transition-colors duration-200 group cursor-pointer"
                  >
                    <span>Request Strategy Consultation</span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#00e5b0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </button>
                </div>

                {/* Solid Corporate Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  
                  {/* Card 1: Timeline */}
                  <div className="group bg-[#18191c] hover:bg-[#202126] border border-white/[0.04] hover:border-[#00e5b0]/25 rounded-[20px] p-6 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex flex-col justify-between min-h-[140px]">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock size={22} className="text-[#00e5b0] shrink-0" />
                      <span className="text-[12px] font-bold uppercase tracking-wider text-slate-400">
                        Delivery Timeline
                      </span>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {active.timeline}
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      Rapid sprint milestones with weekly staging demos.
                    </p>
                  </div>

                  {/* Card 2: Expected ROI */}
                  <div className="group bg-[#18191c] hover:bg-[#202126] border border-white/[0.04] hover:border-[#00e5b0]/25 rounded-[20px] p-6 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex flex-col justify-between min-h-[140px]">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp size={22} className="text-[#00e5b0] shrink-0" />
                      <span className="text-[12px] font-bold uppercase tracking-wider text-slate-400">
                        Estimated Impact
                      </span>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-[#00e5b0] tracking-tight">
                      {active.roi}
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      Engineered for high retention & revenue expansion.
                    </p>
                  </div>

                  {/* Card 3: Suggested Architecture */}
                  <div className="group bg-[#18191c] hover:bg-[#202126] border border-white/[0.04] hover:border-[#00e5b0]/25 rounded-[20px] p-6 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex flex-col justify-between min-h-[140px]">
                    <div className="flex items-center gap-3 mb-2">
                      <Cpu size={22} className="text-[#00e5b0] shrink-0" />
                      <span className="text-[12px] font-bold uppercase tracking-wider text-slate-400">
                        Core Architecture
                      </span>
                    </div>
                    <div className="text-sm md:text-[15px] font-bold text-white leading-snug">
                      {active.architecture}
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      High performance, modern stack, sub-second execution.
                    </p>
                  </div>

                  {/* Card 4: Action Roadmap */}
                  <div className="group bg-[#18191c] hover:bg-[#202126] border border-white/[0.04] hover:border-[#00e5b0]/25 rounded-[20px] p-6 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex flex-col justify-between min-h-[140px]">
                    <div className="flex items-center gap-3 mb-2">
                      <ShieldCheck size={22} className="text-[#00e5b0] shrink-0" />
                      <span className="text-[12px] font-bold uppercase tracking-wider text-slate-400">
                        Key Milestones
                      </span>
                    </div>
                    <div className="text-sm md:text-[15px] font-bold text-white leading-snug">
                      {active.milestone}
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      Full transparency, thorough QA, and SLA support.
                    </p>
                  </div>

                </div>

                {/* Bottom Action CTA button */}
                <div className="mt-8">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#00e5b0] hover:bg-[#00c99a] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl px-8 py-4 transition-all duration-200 shadow-[0_0_25px_rgba(0,229,176,0.3)] hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Discuss Your Project Strategy</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

