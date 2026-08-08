import React from 'react';
import { motion } from 'framer-motion';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Deborah Joseph',
      role: 'Founder & CEO — RFT Academy',
      company: 'rftacademy.com',
      quote:
        'Northstack built our entire online academy platform from scratch. The design is stunning, enrolment has gone up significantly, and students keep complimenting how smooth the experience feels.',
      logo: '/clients/rft-academy-logo.png',
      logoBg: 'bg-[#f3eef6]',
      accentColor: '#7a1f6b',
    },
    {
      name: 'Usman Bashir Sani',
      role: 'CEO — CMANVerify',
      company: 'cmanverify.com',
      quote:
        'The verification platform Northstack delivered is world-class. Their team understood our complex compliance requirements and turned them into a seamless, enterprise-ready product.',
      logo: '/clients/cmanverify-logo.jpg',
      logoBg: 'bg-white',
      accentColor: '#1a3d8f',
    },
    {
      name: 'MBRTS Team',
      role: 'Management — MBRTS',
      company: 'mbrts.com',
      quote:
        'Working with Northstack was effortless. They delivered a clean, high-performance website that truly represents our brand and has meaningfully improved our online presence.',
      logo: null,
      initials: 'MB',
      logoBg: 'bg-gradient-to-br from-[#0a1525] to-[#1a3050]',
      accentColor: '#0ea5e9',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-brand-surface1 border-t border-brand-border1">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text2">
              Client Results
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold">
            Brands That{' '}
            <span className="font-editorial text-brand-gold">Trust Us</span>
          </h2>
          <p className="text-brand-text2 mt-4 text-base max-w-xl font-light">
            Real words from real founders we've partnered with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-brand-surface2 border border-brand-border1 rounded-2xl p-10 flex flex-col h-full hover-slide-line group"
            >
              {/* Stars */}
              <div className="flex gap-1 text-brand-gold mb-8">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-brand-text1 font-editorial text-xl leading-snug mb-10 flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-brand-border1 pt-6 flex items-center gap-4">
                {/* Logo / Avatar */}
                <div
                  className={`w-14 h-14 rounded-xl ${t.logoBg} flex items-center justify-center overflow-hidden shrink-0 border border-brand-border1`}
                >
                  {t.logo ? (
                    <img
                      src={t.logo}
                      alt={`${t.name} logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <span
                      className="text-sm font-bold"
                      style={{ color: t.accentColor }}
                    >
                      {t.initials}
                    </span>
                  )}
                </div>

                <div>
                  <div className="font-bold text-brand-text1 text-[15px]">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-text3 mt-0.5">
                    {t.role}
                  </div>
                  <a
                    href={`https://${t.company}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-brand-gold hover:underline mt-0.5 block"
                  >
                    {t.company}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}