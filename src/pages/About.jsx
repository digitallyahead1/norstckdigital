import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  const team = [
    {
      name: 'Usman Bashir Sani',
      role: 'Software Engineering Lead',
      spec: 'Software Engineering, AI Solutions, Full-Stack Development & Digital Innovation',
      image: '/usman.jpg',
      objectPosition: '50% 10%',
      bio: 'Computer Science graduate with extensive experience in software engineering and digital transformation. Specializes in scalable web & mobile apps, AI-powered solutions, cybersecurity systems, and FinTech platforms.',
      index: '01'
    },
    {
      name: 'Jeremiah Odeh Idama',
      role: 'Lead Digital Strategist',
      spec: 'Digital Marketing & Business Strategy',
      image: '/jeremia.jpg',
      objectPosition: '50% 15%',
      bio: 'Digital Strategist at Northstack Digital with 5+ years of experience. Specializes in building data-driven marketing systems, brand positioning, and helping businesses generate quality leads and achieve sustainable growth.',
      index: '02'
    },
    {
      name: 'Onuigbo Precious',
      role: 'Software Engineer & Lead DevOps',
      spec: 'Full-Stack Development & Site Reliability Engineering',
      image: '/precious.jpg',
      objectPosition: '50% 15%',
      bio: 'Software Engineer at Norstack Digital with extensive experience in full-stack development and site reliability engineering. Specializes in scalable web apps, cloud infrastructure, and reliable network systems.',
      index: '03'
    }
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* ── Page Heading ── */}
        <div className="mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-4">
            We Engineer <br />
            <span className="font-editorial text-brand-gold">Digital Leverage</span>
          </motion.h1>
        </div>

        {/* ── Story Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
          {/* Left: Visual Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-brand-surface1 border border-brand-border1 rounded-[2rem] p-10 md:p-14 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-gold/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-[#00d2ff] via-[#3b82f6] to-[#a855f7] flex items-center justify-center mb-12 shadow-2xl">
                <span className="text-7xl font-heading font-extrabold text-white">N</span>
              </div>
              <h2 className="text-3xl font-heading font-bold mb-3">Norstack Digital</h2>
              <p className="text-brand-text2 mb-12 font-editorial text-2xl">Where Brands Gain Leverage</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🎯', text: 'Strategy-First' },
                  { icon: '⚡', text: 'Performance-Obsessed' },
                  { icon: '🤝', text: 'Long-Term Partners' },
                  { icon: '🚀', text: 'Built to Scale' }
                ].map((pill, i) => (
                  <div key={i} className="bg-brand-surface2 border border-brand-border1 rounded-xl px-5 py-4 flex items-center space-x-4">
                    <span className="text-xl">{pill.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-text1">{pill.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Prose */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 text-brand-text2 text-lg leading-relaxed font-light">
            <p>
              Norstack Digital was founded in Abuja in 2020 on a simple
              observation: most agencies build websites that look pretty but do
              absolutely nothing for the bottom line. They treat digital assets
              as digital brochures, not business systems.
            </p>
            <p>
              We take a different approach. We view every line of code, every
              design choice, and every marketing campaign through the lens of
              ROI. If it doesn't help you acquire customers, streamline
              operations, or increase revenue, we don't build it.
            </p>
            <p>
              We partner with ambitious businesses globally to engineer digital
              leverage. We combine deep technical expertise with sharp business
              acumen to deliver end-to-end solutions that actually move the needle.
            </p>
            <div className="pt-10 mt-10 border-t border-brand-border1">
              <p className="text-3xl md:text-4xl font-editorial text-brand-gold leading-snug">
                "Serious systems for serious businesses."
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Team Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>

          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text2">Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              The <span className="font-editorial text-brand-gold">Minds</span>{' '}
              Behind Norstack
            </h2>
          </div>

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group flex flex-col rounded-3xl overflow-hidden border border-brand-border1 bg-brand-surface1 hover:border-brand-gold/40 transition-all duration-500 hover:shadow-[0_0_60px_-10px_rgba(0,210,255,0.2)]"
              >
                {/* ── Photo Panel (identical height & structure for all cards) ── */}
                <div className="relative h-72 overflow-hidden bg-brand-surface2 shrink-0">

                  {/* Numbered badge — top-left */}
                  <div className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-brand-bg/80 backdrop-blur-sm border border-brand-gold/30 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-brand-gold">{member.index}</span>
                  </div>

                  {/* Gold shimmer bar on hover — top edge */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Profile photo */}
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: member.objectPosition }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />

                  {/* Bottom fade blending into info panel */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-surface1 to-transparent"></div>
                </div>

                {/* ── Info Panel (identical layout for all cards) ── */}
                <div className="flex flex-col flex-1 p-7">

                  {/* Name */}
                  <h3 className="font-heading font-bold text-brand-text1 text-xl mb-4 leading-tight">
                    {member.name}
                  </h3>

                  {/* Designation + Specialization rows */}
                  <div className="space-y-3 mb-5 pb-5 border-b border-brand-border1/50">
                    <div className="flex items-start gap-3">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-brand-text3 mt-0.5 shrink-0 w-[4.5rem]">Designation</span>
                      <span className="text-[11px] font-bold text-brand-gold leading-snug">{member.role}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-brand-text3 mt-0.5 shrink-0 w-[4.5rem]">Spec.</span>
                      <span className="text-[11px] font-semibold text-brand-text1 leading-snug">{member.spec}</span>
                    </div>
                  </div>

                  {/* Bio — always visible */}
                  <p className="text-[12px] text-brand-text2 leading-relaxed flex-1 mb-6">
                    {member.bio}
                  </p>

                  {/* Footer row: brand tag */}
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-text3">
                      <div className="w-5 h-px bg-brand-gold/40"></div>
                      Norstack Digital
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}
