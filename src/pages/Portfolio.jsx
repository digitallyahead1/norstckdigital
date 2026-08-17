import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export function Portfolio({ onNavigate }) {
  const projects = [
    {
      name: 'CMANVerify',
      category: 'Software Dev + Branding',
      tag: 'FinTech / Compliance',
      desc: 'End-to-end identity and business verification platform built for enterprises — featuring multi-layer KYC flows, real-time document validation, and a secure admin dashboard.',
      metric1: '100%',
      label1: 'KYC Automated',
      metric2: '99.9%',
      label2: 'Uptime',
      logo: '/clients/cmanverify-logo.jpg',
      logoBg: 'bg-white',
      url: 'https://cmanverify.com',
      thumbGradient: 'from-[#061228] to-[#0a2560]',
    },
    {
      name: 'RFT Academy',
      category: 'Website + LMS Dev',
      tag: 'EdTech',
      desc: 'A premium online learning platform with course management, student portals, enrolment tracking, and a visually striking design that converts visitors into enrolled students.',
      metric1: '↑ 3×',
      label1: 'Enrolments',
      metric2: '4.9',
      label2: 'Student Rating',
      logo: '/clients/rft-academy-logo.png',
      logoBg: 'bg-[#f3eef6]',
      url: 'https://rftacademy.com',
      thumbGradient: 'from-[#1a0720] to-[#3d1050]',
    },
    {
      name: 'MBRTS',
      category: 'Website + Branding',
      tag: 'Professional Services',
      desc: 'A clean, high-impact corporate website built to position MBRTS as a credible authority in their industry, with conversion-optimised layouts and mobile-first design.',
      metric1: '↑ 5×',
      label1: 'Web Traffic',
      metric2: '100%',
      label2: 'Mobile Ready',
      logo: null,
      initials: 'MB',
      logoBg: 'bg-gradient-to-br from-[#0a1525] to-[#1a3050]',
      url: 'https://mbrts.com',
      thumbGradient: 'from-[#081525] to-[#0f2040]',
    },
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-8"
          >
            Featured{' '}
            <span className="font-editorial text-brand-gold">Work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-text2 max-w-2xl mx-auto font-light"
          >
            Real projects. Real results. A look at the digital systems we've
            engineered for ambitious brands.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.2 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => window.open(project.url, '_blank')}
            >
              {/* Cinematic Thumbnail */}
              <div
                className={`relative w-full aspect-video rounded-2xl bg-gradient-to-br ${project.thumbGradient} overflow-hidden mb-8 border border-brand-border1`}
              >
                {/* Logo overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  {project.logo ? (
                    <div
                      className={`${project.logoBg} rounded-2xl p-5 flex items-center justify-center shadow-2xl max-w-[220px] w-full`}
                      style={{ maxHeight: 120 }}
                    >
                      <img
                        src={project.logo}
                        alt={project.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain"
                        style={{ maxHeight: 90 }}
                      />
                    </div>
                  ) : (
                    <span className="text-6xl md:text-8xl font-heading font-extrabold text-brand-text1/10 group-hover:scale-105 transition-transform duration-700 ease-lux select-none">
                      {project.initials}
                    </span>
                  )}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-bg/50 backdrop-blur-md flex items-center justify-center text-brand-text1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-lux border border-brand-border1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="19" x2="19" y2="5"></line>
                    <polyline points="9 5 19 5 19 15"></polyline>
                  </svg>
                </div>

                {/* Category Pill — always dark regardless of theme */}
                <div className="absolute bottom-6 left-6 bg-[#030712]/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-[#e2e8f0] uppercase tracking-widest border border-[#163060]">
                  {project.category}
                </div>

                {/* Visit URL pill — always dark regardless of theme */}
                <div className="absolute bottom-6 right-6 bg-[#00d2ff]/10 backdrop-blur-md border border-[#00d2ff]/30 px-3 py-1.5 rounded-full text-[9px] font-bold text-[#00d2ff] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Visit Site ↗
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest bg-brand-surface1 border border-brand-border1 px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                  <h3 className="text-3xl font-heading font-bold">{project.name}</h3>
                </div>

                <p className="text-brand-text2 text-lg leading-relaxed mb-8 max-w-xl">
                  {project.desc}
                </p>

                {/* Metrics */}
                <div className="pt-6 border-t border-brand-border1 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-editorial text-brand-gold mb-1">
                      {project.metric1}
                    </div>
                    <div className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest">
                      {project.label1}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-editorial text-brand-gold mb-1">
                      {project.metric2}
                    </div>
                    <div className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest">
                      {project.label2}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center dark-theme bg-brand-surface1 border border-brand-border1 rounded-[2rem] p-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-8">
            Your Project Could Be Next
          </h2>
          <div className="flex justify-center">
            <Button onClick={() => onNavigate('contact')}>
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
