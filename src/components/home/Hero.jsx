import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Code2,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    id: 'website-dev',
    icon: Globe,
    title: 'Website Development',
    subtitle: 'High-speed, SEO-optimized digital web platforms engineered for maximum online authority.',
    image: '/services/website-dev.png',
    rotatingText: 'Digital Scale.',
  },
  {
    id: 'software-eng',
    icon: Code2,
    title: 'Software Engineering',
    subtitle: 'Scalable custom SaaS applications, enterprise client portals & high-throughput core APIs.',
    image: '/services/software-eng.png',
    rotatingText: 'Market Power.',
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Applications',
    subtitle: 'Native iOS & Android cross-platform mobile apps built for fluid user engagement.',
    image: '/services/mobile-apps.png',
    rotatingText: 'Mobile Reach.',
  },
  {
    id: 'uiux-design',
    icon: Sparkles,
    title: 'UI/UX Interface Design',
    subtitle: 'Research-backed, conversion-focused design systems & interactive prototypes.',
    image: '/services/uiux-design.png',
    rotatingText: 'High Conversions.',
  },
  {
    id: 'digital-marketing',
    icon: TrendingUp,
    title: 'Digital Marketing & SEO',
    subtitle: 'Organic search visibility, high-ROI client acquisition & growth analytics.',
    image: '/services/digital-marketing.png',
    rotatingText: 'Search Authority.',
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Business Automation',
    subtitle: 'AI workflow pipelines, custom CRM integrations & auto-operations for ultimate scale.',
    image: '/services/automation.png',
    rotatingText: 'AI Leverage.',
  },
];

export function Hero({ onNavigate }) {
  // Synchronized Carousel & Typewriter State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const stateRef = useRef({ typedLength, isDeleting, currentSlide });
  stateRef.current = { typedLength, isDeleting, currentSlide };

  useEffect(() => {
    let timer;

    const loop = () => {
      const { typedLength: len, isDeleting: del, currentSlide: idx } = stateRef.current;
      const targetWord = services[idx].rotatingText;

      if (!del) {
        if (len < targetWord.length) {
          setTypedLength(len + 1);
          timer = setTimeout(loop, 190); // Slower typing speed (190ms per letter)
        } else {
          timer = setTimeout(() => {
            setIsDeleting(true);
            timer = setTimeout(loop, 80);
          }, 3200); // 3.2s hold pause when phrase is fully typed
        }
      } else {
        if (len > 0) {
          setTypedLength(len - 1);
          timer = setTimeout(loop, 80);
        } else {
          setIsDeleting(false);
          // Advance slide and word at the EXACT same millisecond
          setCurrentSlide((idx + 1) % services.length);
          timer = setTimeout(loop, 400);
        }
      }
    };

    timer = setTimeout(loop, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectSlide = (idx) => {
    setCurrentSlide(idx);
    setTypedLength(0);
    setIsDeleting(false);
  };

  const activeService = services[currentSlide];
  const typedString = activeService.rotatingText.substring(0, typedLength);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-32 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-brand-bg select-none">

      {/* ─────────────────────────────────────────────── */}
      {/* ATMOSPHERIC BOUNCING BACKGROUND GRID           */}
      {/* ─────────────────────────────────────────────── */}
      {/* ─────────────────────────────────────────────── */}
      {/* ATMOSPHERIC BOUNCING BACKGROUND GRID           */}
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
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: 'url(/hero-network.svg)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Background Soft Glow Bulbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* ─────────────────────────────────────────────── */}
      {/* 3 CORE SERVICE FLOATING BACKGROUND CARDS        */}
      {/* ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* CARD 1: TOP RIGHT - UI/UX Interface Design (Desktop/Tablet Only) */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [5, 3, 5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-24 right-4 sm:right-10 lg:right-16 z-0 w-[145px] sm:w-[175px] bg-brand-surface1/85 border border-brand-border1/80 p-3.5 rounded-2xl shadow-xl backdrop-blur-md hidden md:block text-left"
        >
          <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
            <Sparkles size={13} className="text-[#1187c7]" />
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-brand-text2">
              UI/UX Design
            </span>
          </div>
          <div className="text-base font-black text-brand-text1 mb-1">+145% Conversions</div>
          <div className="inline-block bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[8.5px] font-extrabold px-2 py-0.5 rounded-full uppercase">
            High ROI Design
          </div>
        </motion.div>

        {/* CARD 2: UPPER SPACE ON MOBILE / MID LEFT ON DESKTOP - Software Engineering */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [-4, -6, -4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.6,
          }}
          className="absolute top-20 -right-2 xs:top-24 xs:right-2 sm:right-6 md:top-[48%] md:left-4 lg:left-12 md:right-auto md:-translate-y-1/2 z-0 w-[140px] sm:w-[170px] bg-brand-surface2/90 border border-brand-border1/80 p-3 sm:p-3.5 rounded-2xl shadow-xl backdrop-blur-md text-left scale-[0.62] xs:scale-75 md:scale-100 origin-top-right md:origin-left block opacity-85 sm:opacity-100"
        >
          <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
            <Code2 size={13} className="text-[#1187c7]" />
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-brand-text2">
              Software Eng.
            </span>
          </div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-extrabold text-brand-text1">99.99%</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="text-[8.5px] text-brand-text2 font-semibold">Core APIs &amp; SaaS Portals</div>
        </motion.div>

        {/* CARD 3: LOWER SPACE ON MOBILE / BOTTOM RIGHT ON DESKTOP - Digital Marketing & SEO */}
        <motion.div
          animate={{
            y: [0, -9, 0],
            rotate: [3, 1, 3],
          }}
          transition={{
            duration: 6.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.2,
          }}
          className="absolute bottom-4 -left-2 xs:bottom-8 xs:left-2 sm:left-6 md:bottom-16 md:right-6 lg:right-20 md:left-auto z-0 w-[140px] sm:w-[175px] bg-brand-surface1/85 border border-brand-border1/80 p-3 sm:p-3.5 rounded-2xl shadow-xl backdrop-blur-md text-left scale-[0.62] xs:scale-75 md:scale-100 origin-bottom-left md:origin-bottom-right block opacity-85 sm:opacity-100"
        >
          <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
            <TrendingUp size={13} className="text-[#1187c7]" />
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-brand-text2">
              Marketing &amp; SEO
            </span>
          </div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-base font-extrabold text-brand-text1">#1 Rank</span>
            <span className="text-[9px] font-black text-emerald-500">+240%</span>
          </div>
          <div className="w-full bg-brand-border1/50 h-1.5 rounded-full overflow-hidden">
            <div className="bg-brand-gold h-full w-[85%] rounded-full" />
          </div>
        </motion.div>

      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center">

        {/* ── TOP SECTION: CENTERED TEXT & CTAS ── */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-5 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5"
          >
            <span className="w-[3px] h-4 rounded-full bg-brand-gold" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] sm:tracking-[0.25em] text-brand-gold">
              Enterprise Digital Solutions
            </span>
          </motion.div>

          {/* Centered Headline with 2px Top/Bottom Margin & Zero Layout Distortion */}
          <div className="w-full min-h-[5.5rem] xs:min-h-[6rem] sm:min-h-[6.5rem] md:min-h-[7.5rem] flex items-center justify-center my-[2px]">
            <h1 className="text-[clamp(1.9rem,5.5vw,4.2rem)] leading-[1.18] tracking-[-0.03em] font-extrabold text-brand-text1 max-w-3xl text-center">
              <span className="inline-block my-[2px]">Where brands gain </span>{' '}
              <span className="inline-block relative text-left my-[2px] py-[2px]">
                <span className="text-[#1187c7] mb-3">
                  {typedString}
                </span>
                <span className="inline-block w-[3.5px] h-[0.85em] bg-brand-gold ml-1.5 animate-pulse align-middle" />
              </span>
            </h1>
          </div>

          {/* Centered Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[14px] sm:text-[15px] md:text-[17px] text-brand-text2 font-normal max-w-2xl leading-relaxed px-2 sm:px-0"
          >
            Norstack Digital engineers high-performance websites, custom web applications, mobile apps, and automated growth systems — built for measurable business leverage.
          </motion.p>

          {/* Centered CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('pricing')}
              className="w-full max-w-xs sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-gold text-white font-bold text-xs uppercase tracking-wider rounded-xl px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 shadow-md"
            >
              <span>View Packages &amp; Pricing</span>
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('services')}
              className="w-full max-w-xs sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-surface1 border border-brand-border1 hover:border-brand-border2 text-brand-text1 font-bold text-xs uppercase tracking-wider rounded-xl px-6 sm:px-7 py-3.5 sm:py-4 transition-all duration-300 backdrop-blur-sm shadow-sm"
            >
              <span>Explore Capabilities</span>
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}


