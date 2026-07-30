import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Code2,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
  ArrowRight,
} from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    icon: Monitor,
    title: 'Website Dev',
    desc: 'High-performance, SEO-optimized websites.',
    tag: 'WEB DEV',
    tagStyles: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
    iconBg: 'bg-blue-600/20',
    iconColor: 'text-blue-300',
  },
  {
    icon: Code2,
    title: 'Software Dev',
    desc: 'Custom web apps and business software.',
    tag: 'SOFTWARE DEV',
    tagStyles: 'border-slate-400/40 text-slate-300 bg-slate-500/10',
    iconBg: 'bg-indigo-600/20',
    iconColor: 'text-indigo-300',
  },
  {
    icon: Smartphone,
    title: 'App Dev',
    desc: 'Native & cross-platform mobile apps.',
    tag: 'APP DEV',
    tagStyles: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
    iconBg: 'bg-emerald-600/20',
    iconColor: 'text-emerald-450',
  },
  {
    icon: Sparkles,
    title: 'UI/UX Design',
    desc: 'Research-backed, conversion-focused UI.',
    tag: 'DESIGN',
    tagStyles: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
    iconBg: 'bg-purple-600/20',
    iconColor: 'text-purple-300',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    desc: 'Visibility & organic traffic growth.',
    tag: 'MARKETING',
    tagStyles: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10',
    iconBg: 'bg-cyan-600/20',
    iconColor: 'text-cyan-300',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    desc: 'Eliminate manual entry with auto-workflows.',
    tag: 'AUTOMATION',
    tagStyles: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
    iconBg: 'bg-purple-600/20',
    iconColor: 'text-purple-300',
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

  // Use ref to hold state values to avoid resetting the typing timeout loop during parent re-renders
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
          timer = setTimeout(loop, 45); // Speed of typing
        } else {
          // Pause at completed text
          timer = setTimeout(() => {
            setIsDeleting(true);
            timer = setTimeout(loop, 25);
          }, 1500); // 1.5 seconds pause at the end
        }
      } else {
        if (len > 0) {
          setTypedLength(len - 1);
          timer = setTimeout(loop, 20); // Speed of backspacing
        } else {
          setIsDeleting(false);
          setCurrentPhraseIdx((idx + 1) % phrases.length);
          timer = setTimeout(loop, 150); // Pause before starting next phrase
        }
      }
    };

    timer = setTimeout(loop, 300); // Initial start delay
    return () => clearTimeout(timer);
  }, []);

  const phrase = phrases[currentPhraseIdx];
  const normalTyped = phrase.normal.substring(0, typedLength);
  const highlightTyped = typedLength > phrase.normal.length
    ? phrase.highlight.substring(0, typedLength - phrase.normal.length)
    : '';

  return (
    <section className="relative min-h-[66svh] lg:min-h-[70svh] flex items-center pt-20 pb-6 overflow-hidden bg-gradient-to-r from-[#030712] via-[#05112e] to-[#0b214f] select-none">
      
      {/* ─────────────────────────────────────────────── */}
      {/* VISIBLE BOUNCING & DRIFTING HERO BACKGROUND    */}
      {/* ─────────────────────────────────────────────── */}
      <motion.div 
        animate={{
          y: [0, -10, 3, -6, 0],
          x: [0, 4, -4, 0],
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
        }}
      />

      {/* Ambient Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ['-5%', '5%', '-5%'], y: ['-5%', '10%', '-5%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[10%] left-[5%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 blur-[130px]"
        />
        <motion.div
          animate={{ x: ['5%', '-10%', '5%'], y: ['10%', '-5%', '10%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[130px]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ─────────────────────────────────────────────── */}
          {/* LEFT COLUMN: HEADLINE + DESCRIPTION + CTAS     */}
          {/* ─────────────────────────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5">
            {/* Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center space-x-3 bg-[#0c1e3b]/90 border border-brand-border2 rounded-full px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold text-brand-text1 uppercase tracking-[0.2em]">
                Building the Future of Digital Excellence
              </span>
            </motion.div>

            {/* Headline with Continuous Auto-Typing Effect */}
            <div className="min-h-[100px] sm:min-h-[90px] flex items-end">
              <h1 className="text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.15] tracking-[-0.025em] font-extrabold text-brand-text1">
                {normalTyped}
                {highlightTyped && (
                  <span className={currentPhraseIdx === 0 ? "text-brand-gold" : "text-purple-400"}>
                    {highlightTyped}
                  </span>
                )}
                <span className="animate-pulse border-r-4 border-brand-gold ml-1">&nbsp;</span>
              </h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-[13.5px] md:text-[14.5px] text-slate-200 font-light max-w-lg leading-relaxed text-shadow-sm"
            >
              Norstack Digital Solutions is a technology company that builds premium websites,
              custom software, AI automation systems, SEO visibility, and digital
              growth engines — so your business works smarter and scales faster.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              {/* Primary Cyan/Purple CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#00d2ff] via-[#2563eb] to-[#a855f7] text-white font-bold text-xs rounded-full px-6 py-3 transition-all duration-300 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]"
              >
                Start a Project
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.button>

              {/* Secondary Outline CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-3 bg-[#0c1e3b]/80 hover:bg-[#0c1e3b] border border-brand-border2 hover:border-brand-blue/50 text-brand-text1 font-bold text-xs rounded-full px-6 py-3 transition-all duration-300 backdrop-blur-sm"
              >
                Get Free Website Audit
              </motion.button>
            </motion.div>

            {/* Subtle trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] text-slate-300 font-medium"
            >
              Not sure where to start?{' '}
              <button
                onClick={() => onNavigate('pricing')}
                className="text-brand-blue hover:underline font-semibold"
              >
                See our packages & pricing →
              </button>
            </motion.p>
          </div>

          {/* ─────────────────────────────────────────────── */}
          {/* RIGHT COLUMN: BOUNCING COMPACT SERVICE CARD    */}
          {/* ─────────────────────────────────────────────── */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
            {/* Floating Experience Badges */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -top-3 right-4 z-20 flex items-center gap-2 bg-[#0c1e3b] border border-brand-border2 rounded-full px-3.5 py-1.5 shadow-lg"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
              </span>
              <span className="text-[9px] font-bold text-brand-text1 uppercase tracking-wider">
                5+ Years Experience
              </span>
            </motion.div>

            {/* Bouncing Card Panel Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }
              }}
              className="w-full max-w-[500px] bg-[#0c1e3b]/95 border border-brand-border2 rounded-[2rem] p-5 md:p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden relative"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-brand-border2/60">
                <div className="flex items-center gap-2.5">
                  {/* Logo Circle */}
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d2ff] via-[#3b82f6] to-[#a855f7] flex items-center justify-center shadow-lg">
                    <span className="text-white font-extrabold text-xs">N</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-brand-text1 uppercase tracking-wider">
                      NORSTACK<span className="text-cyan-400"> DIGITAL</span>
                    </div>
                    <div className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">
                      Digital Solutions
                    </div>
                  </div>
                </div>
                <span className="text-[8px] font-bold text-brand-text1 uppercase tracking-widest bg-[#081735] border border-brand-border2 rounded-full px-3 py-1 shadow-inner">
                  Full Service
                </span>
              </div>

              {/* 2x3 Service Grid with spacing and compact cards */}
              <div className="grid grid-cols-2 gap-3">
                {services.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
                      className="group bg-[#08152e]/80 border border-brand-border2 hover:border-brand-blue/50 hover:bg-[#08152e] rounded-xl p-3.5 flex flex-col justify-between min-h-[110px] transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="space-y-2 relative z-10">
                        <div
                          className={`w-8 h-8 rounded-lg ${svc.iconBg} flex items-center justify-center shrink-0`}
                        >
                          <Icon size={15} className={svc.iconColor} />
                        </div>
                        <div className="text-left">
                          <h4 className="text-xs font-bold text-brand-text1 leading-snug">
                            {svc.title}
                          </h4>
                          <p className="text-[10.5px] text-slate-300 leading-relaxed font-light mt-0.5">
                            {svc.desc}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`mt-2 inline-block self-start text-[7.5px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-0.5 ${svc.tagStyles}`}
                      >
                        {svc.tag}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* AI-Powered Workflows indicator bar */}
              <div className="mt-4 pt-4 border-t border-brand-border2/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span className="text-[9px] font-bold text-slate-200 uppercase tracking-wider">
                    AI-Powered Workflows
                  </span>
                </div>
                <span className="text-[7.5px] font-semibold text-slate-300 tracking-wider">
                  Strategy → Design → Build → Launch
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}