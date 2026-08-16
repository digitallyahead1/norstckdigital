import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Code2,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    subtitle: 'High-speed, SEO-optimized digital web platforms',
    iconColor: 'text-[#00d2ff]',
    iconBg: 'bg-[#00d2ff]/15 border-[#00d2ff]/30',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    subtitle: 'Scalable custom SaaS, portals & core APIs',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/15 border-indigo-500/30',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    subtitle: 'Native iOS & Android cross-platform apps',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
  },
  {
    icon: Sparkles,
    title: 'UI/UX Interface Design',
    subtitle: 'Research-backed, conversion-focused design',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/15 border-purple-500/30',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & SEO',
    subtitle: 'Organic search visibility & high-ROI growth',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    subtitle: 'AI workflows, CRM & auto-operations',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/15 border-amber-500/30',
  },
];

export function Hero({ onNavigate }: HeroProps) {
  // Autotyping state logic
  const phrases = [
    { full: "Where brands gain Leverage.", normal: "Where brands gain ", highlight: "Leverage." },
    { full: "Transforming Ideas into Digital Reality.", normal: "Transforming Ideas into ", highlight: "Digital Reality." }
  ];

  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const stateRef = useRef({ typedLength, isDeleting, currentPhraseIdx });
  stateRef.current = { typedLength, isDeleting, currentPhraseIdx };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const loop = () => {
      const { typedLength: len, isDeleting: del, currentPhraseIdx: idx } = stateRef.current;
      const currentPhrase = phrases[idx].full;

      if (!del) {
        if (len < currentPhrase.length) {
          setTypedLength(len + 1);
          timer = setTimeout(loop, 45);
        } else {
          timer = setTimeout(() => {
            setIsDeleting(true);
            timer = setTimeout(loop, 25);
          }, 1500);
        }
      } else {
        if (len > 0) {
          setTypedLength(len - 1);
          timer = setTimeout(loop, 20);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIdx((idx + 1) % phrases.length);
          timer = setTimeout(loop, 150);
        }
      }
    };

    timer = setTimeout(loop, 300);
    return () => clearTimeout(timer);
  }, []);

  const phrase = phrases[currentPhraseIdx];
  const normalTyped = phrase.normal.substring(0, typedLength);
  const highlightTyped = typedLength > phrase.normal.length
    ? phrase.highlight.substring(0, typedLength - phrase.normal.length)
    : '';

  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center pt-32 md:pt-36 pb-20 md:pb-24 overflow-hidden bg-gradient-to-r from-[#030712] via-[#05112e] to-[#0b214f] select-none">
      
      {/* ─────────────────────────────────────────────── */}
      {/* VISIBLE BOUNCING & DRIFTING HERO BACKGROUND    */}
      {/* ─────────────────────────────────────────────── */}
      <motion.div 
        animate={{
          y: [0, -8, 2, -5, 0],
          x: [0, 3, -3, 0],
          scale: [1, 1.01, 0.99, 1.005, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center opacity-80 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: 'url(/hero-network.svg)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Ambient Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ['-5%', '5%', '-5%'], y: ['-5%', '10%', '-5%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-blue-500/15 blur-[140px]"
        />
        <motion.div
          animate={{ x: ['5%', '-10%', '5%'], y: ['10%', '-5%', '10%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-purple-600/15 blur-[140px]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ─────────────────────────────────────────────── */}
          {/* LEFT COLUMN: HEADLINE + DESCRIPTION + CTAS     */}
          {/* ─────────────────────────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            {/* Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2.5 bg-[#0c1e3b]/90 border border-brand-border2 rounded-full px-4 py-2 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold text-slate-100 uppercase tracking-[0.2em]">
                Enterprise Digital Solutions
              </span>
            </motion.div>

            {/* Headline with Continuous Auto-Typing Effect */}
            <div className="min-h-[95px] sm:min-h-[85px] flex items-end">
              <h1 className="text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.12] tracking-[-0.025em] font-extrabold text-white">
                {normalTyped}
                {highlightTyped && (
                  <span className={currentPhraseIdx === 0 ? "text-[#00d2ff]" : "text-purple-400"}>
                    {highlightTyped}
                  </span>
                )}
                <span className="animate-pulse border-r-4 border-[#00d2ff] ml-1">&nbsp;</span>
              </h1>
            </div>

            {/* Description — Clean, lightweight, professional typography */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[14.5px] md:text-[15.5px] text-slate-200 font-light max-w-lg leading-relaxed"
            >
              Norstack Digital engineers high-performance websites, custom web applications, mobile apps, and automated growth systems — built for measurable business leverage.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00d2ff] via-[#2563eb] to-[#a855f7] text-white font-bold text-xs uppercase tracking-wider rounded-full px-7 py-3.5 transition-all duration-300 shadow-[0_0_25px_rgba(0,210,255,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]"
              >
                <span>Start a Project</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 bg-[#0c1e3b]/90 hover:bg-[#0c1e3b] border border-brand-border2 hover:border-cyan-400/60 text-slate-100 font-bold text-xs uppercase tracking-wider rounded-full px-6 py-3.5 transition-all duration-300 backdrop-blur-sm"
              >
                <span>Explore Capabilities</span>
              </motion.button>
            </motion.div>

            {/* Subtle trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[11px] text-slate-300 font-normal pt-1"
            >
              Looking for packages?{' '}
              <button
                onClick={() => onNavigate('pricing')}
                className="text-[#00d2ff] hover:underline font-semibold"
              >
                View pricing plans &rarr;
              </button>
            </motion.p>
          </div>

          {/* ─────────────────────────────────────────────── */}
          {/* RIGHT COLUMN: PROPORTIONATE CAPABILITIES CARD   */}
          {/* ─────────────────────────────────────────────── */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
            {/* Experience Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="absolute -top-3 right-4 z-20 flex items-center gap-1.5 bg-[#08152e] border border-brand-border2 rounded-full px-3.5 py-1.5 shadow-lg"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
              </span>
              <span className="text-[9px] font-bold text-slate-200 uppercase tracking-wider">
                5+ Years Experience
              </span>
            </motion.div>

            {/* Card Panel Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0]
              }}
              transition={{
                opacity: { duration: 0.7 },
                scale: { duration: 0.7 },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }
              }}
              className="w-full max-w-[490px] bg-[#0c1e3b]/95 border border-brand-border2 rounded-[2rem] p-5 md:p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden relative"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4 pb-3.5 border-b border-brand-border2/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d2ff] via-[#3b82f6] to-[#a855f7] flex items-center justify-center shadow-md">
                    <span className="text-white font-black text-xs">N</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-100 uppercase tracking-wider">
                      NORSTACK<span className="text-cyan-400"> DIGITAL</span>
                    </div>
                    <div className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">
                      Full-Stack Capabilities
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[8px] font-bold text-cyan-300 uppercase tracking-wider bg-[#081735] border border-cyan-500/30 rounded-full px-3 py-1 shadow-inner">
                  <ShieldCheck size={11} /> Active Ops
                </span>
              </div>

              {/* 2x3 Grid with comfortable proportions & clean typography */}
              <div className="grid grid-cols-2 gap-3">
                {services.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.04, duration: 0.35 }}
                      onClick={() => onNavigate('services')}
                      className="group bg-[#08152e]/90 border border-brand-border2/70 hover:border-cyan-400/50 hover:bg-[#0b1b3a] rounded-xl p-3 flex items-start gap-3 transition-all duration-200 cursor-pointer"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg border ${svc.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform mt-0.5`}
                      >
                        <Icon size={16} className={svc.iconColor} />
                      </div>
                      <div className="text-left min-w-0 flex-1">
                        <div className="text-[11.5px] font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                          {svc.title}
                        </div>
                        <div className="text-[9px] text-slate-400 font-light leading-tight mt-0.5 line-clamp-2">
                          {svc.subtitle}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom live indicator */}
              <div className="mt-4 pt-3 border-t border-brand-border2/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[8.5px] font-bold text-slate-200 uppercase tracking-wider">
                    Continuous Delivery
                  </span>
                </div>
                <span className="text-[8.5px] font-medium text-slate-400 tracking-wide">
                  Design &bull; Code &bull; Scale
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}