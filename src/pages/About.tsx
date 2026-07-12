import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export function About() {
  const team = [
    {
      name: 'Usman Bashir Sani',
      role: 'Director',
      spec: 'Software Engineer',
      image: '/usman.jpg',
      linkedin: 'https://linkedin.com/in/usman-bashir-sani-334768220'
    },
    {
      name: 'Jeremia Idamah',
      role: 'Director',
      spec: 'Digital Marketing',
      image: '/jeremia.png'
    },
    {
      name: 'Precious',
      role: 'Secretary',
      spec: 'Software Engineer',
      image: '/precious.png'
    }
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-4">
            
            We Engineer <br />
            <span className="font-editorial text-brand-gold">
              Digital Leverage
            </span>
          </motion.h1>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
          {/* Left: Visual Panel */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="relative bg-brand-surface1 border border-brand-border1 rounded-[2rem] p-10 md:p-14 overflow-hidden">
            
            {/* Radial Glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-gold/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              {/* Emblem */}
              <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-brand-gold to-brand-goldDim flex items-center justify-center mb-12 shadow-2xl">
                <span className="text-7xl font-heading font-extrabold text-brand-bg">
                  N
                </span>
              </div>

              <h2 className="text-3xl font-heading font-bold mb-3">
                Norstack Digital
              </h2>
              <p className="text-brand-text2 mb-12 font-editorial text-2xl">
                Where Brands Gain Leverage
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                {
                  icon: '🎯',
                  text: 'Strategy-First'
                },
                {
                  icon: '⚡',
                  text: 'Performance-Obsessed'
                },
                {
                  icon: '🤝',
                  text: 'Long-Term Partners'
                },
                {
                  icon: '🚀',
                  text: 'Built to Scale'
                }].
                map((pill, i) =>
                <div
                  key={i}
                  className="bg-brand-surface2 border border-brand-border1 rounded-xl px-5 py-4 flex items-center space-x-4">
                  
                    <span className="text-xl">{pill.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-text1">
                      {pill.text}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: Prose */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}
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
              acumen to deliver end-to-end solutions that actually move the
              needle.
            </p>

            <div className="pt-10 mt-10 border-t border-brand-border1">
              <p className="text-3xl md:text-4xl font-editorial text-brand-gold leading-snug">
                "Serious systems for serious businesses."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}>
          
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text2">
                Our Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              The <span className="font-editorial text-brand-gold">Minds</span>{' '}
              Behind Norstack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) =>
            <div
              key={i}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer border border-brand-border1 bg-brand-surface1 hover:border-brand-gold/30 transition-colors duration-500">
              
                {/* Gold Ring Hover Effect */}
                <div className="absolute inset-0 border-2 border-brand-gold rounded-3xl opacity-0 scale-[0.98] group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-lux z-20 pointer-events-none"></div>

                {/* Profile Image */}
                <div className="absolute inset-0 z-0 bg-brand-surface2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-lux filter grayscale contrast-[1.1] group-hover:grayscale-0"
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/15 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-2">
                      {member.role}
                    </p>
                    <h4 className="font-heading font-bold text-brand-text1 text-2xl mb-1">
                      {member.name}
                    </h4>
                    <p className="text-xs text-brand-text3 font-medium uppercase tracking-wider mb-4">
                      {member.spec}
                    </p>
                    
                    {/* LinkedIn Link */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text1 hover:text-brand-gold transition-colors duration-300 pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin size={14} className="text-brand-gold" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>);

}