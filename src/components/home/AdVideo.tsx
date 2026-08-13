import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Base video ID
const VIDEO_ID = '-br-v9IY7_A';

const buildSrc = (autoplay: boolean) =>
  `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&color=white&enablejsapi=1${
    autoplay ? '&autoplay=1' : ''
  }`;

export function AdVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        // Fire when 40% of the section is visible
        threshold: 0.4,
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Swap src to trigger play / pause via YouTube's src-reload trick
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    if (isInView) {
      // Add autoplay=1&mute=1 → YouTube will start playing
      iframe.src = buildSrc(true);
    } else {
      // Remove autoplay flag → reloads src which effectively pauses
      iframe.src = buildSrc(false);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden bg-[#050914] py-24 md:py-32"
    >
      {/* Background aurora glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 100%, rgba(37,99,235,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 10%, rgba(139,92,246,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        {/* Eye-brow label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 mb-5"
        >
          <span className="w-[3px] h-5 rounded-full bg-gradient-to-b from-blue-400 to-violet-500" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-slate-400">
            See Us In Action
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-3xl md:text-[2.75rem] font-black text-white leading-[1.18] tracking-tight mb-4"
        >
          We Build Brands That{' '}
          <span
            style={{
              background: 'linear-gradient(90deg,#60a5fa,#a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Win Online
          </span>
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-slate-400 text-[14.5px] max-w-xl leading-relaxed mb-12"
        >
          Watch how Northstack Digital transforms ambitious businesses with
          cutting-edge technology, stunning design, and results-driven strategy.
        </motion.p>

        {/* Video Container (16:9 Landscape Frame) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="w-full relative"
        >
          {/* Glow ring around video */}
          <div
            aria-hidden="true"
            className="absolute -inset-[1px] rounded-2xl z-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(96,165,250,0.45) 0%, rgba(167,139,250,0.35) 50%, rgba(37,99,235,0.3) 100%)',
            }}
          />

          {/* Shadow halo */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-3xl z-0 opacity-40"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(96,165,250,0.35) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />

          {/* Iframe wrapper */}
          <div
            className="relative z-10 rounded-2xl overflow-hidden bg-black"
            style={{
              boxShadow:
                '0 0 0 1px rgba(255,255,255,0.07), 0 32px 80px -12px rgba(0,0,0,0.7)',
            }}
          >
            {/* Aspect ratio box (16:9) */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                ref={iframeRef}
                id="ads-video-frame"
                className="absolute inset-0 w-full h-full"
                src={buildSrc(false)}
                title="Northstack Digital Agency – Brand Video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-8 text-[12px] text-slate-500 tracking-wide"
        >
          🎬 &nbsp;Northstack Digital Agency &mdash; Technology &amp; Growth, Redefined.
        </motion.p>

      </div>
    </section>
  );
}
