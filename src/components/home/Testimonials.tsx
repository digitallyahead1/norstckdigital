import React from 'react';
import { motion } from 'framer-motion';
export function Testimonials() {
  const testimonials = [
  {
    name: 'Adebayo Okonkwo',
    role: 'TerraGrow',
    quote:
    'Norstack rebuilt our entire digital pipeline. We saw a 312% jump in qualified leads within 90 days.',
    initials: 'AO',
    gradient: 'from-[#0B2415] to-[#143D25]'
  },
  {
    name: 'Fatima Musa',
    role: 'LogiTrace',
    quote:
    "Their custom automation software eliminated our manual data entry completely. It's like having 3 extra employees.",
    initials: 'FM',
    gradient: 'from-[#0F172A] to-[#1E293B]'
  },
  {
    name: 'Kemi Ige',
    role: 'LuxeBeauty',
    quote:
    'The mobile app is stunning and intuitive. Our customers love it, and our retention metrics have never been better.',
    initials: 'KI',
    gradient: 'from-[#2D1B36] to-[#4A2C59]'
  }];

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.1
            }}
            className="bg-brand-surface2 border border-brand-border1 rounded-2xl p-10 flex flex-col h-full hover-slide-line group">
            
              <div className="flex gap-1 text-brand-gold mb-8">
                {[...Array(5)].map((_, j) =>
              <svg
                key={j}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor">
                
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
              )}
              </div>

              <p className="text-brand-text1 font-editorial text-2xl leading-snug mb-12 flex-grow">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-sm font-bold text-brand-text1 border border-brand-border1`}>
                
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-brand-text1">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-text3 mt-1">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}