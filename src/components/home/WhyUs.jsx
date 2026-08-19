import React from 'react';
import { motion } from 'framer-motion';
import { CountUp } from '../ui/CountUp';
import { ShieldCheck, Zap, TrendingUp, Users, Award } from 'lucide-react';

export function WhyUs() {
  const checklist = [
    {
      title: 'Strategy-First Engineering',
      desc: 'We analyze your business model, customer psychology, and unit economics before writing a single line of code.',
      icon: Zap,
    },
    {
      title: 'Full-Stack In-House Capability',
      desc: 'From custom UI/UX design to robust cloud backends, database architecture, and native mobile apps — zero outsourcing.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent & Agile Sprints',
      desc: 'No technical jargon or radio silence. Direct Slack/WhatsApp access to engineers and weekly milestone reviews.',
      icon: Users,
    },
    {
      title: 'Post-Launch Scalability & SLA',
      desc: 'We stay on board with dedicated maintenance, security patching, uptime guarantees, and performance monitoring.',
      icon: TrendingUp,
    },
    {
      title: 'Built for High SEO & Sub-Second Speeds',
      desc: 'Enterprise-grade Core Web Vitals optimization, clean semantic structure, and conversion funnels out of the box.',
      icon: Award,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-brand-surface1 border-y border-brand-border1 relative overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-[3px] h-5 bg-[#1187c7] rounded-full"></span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#1187c7]">
              Why Choose Norstack
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black max-w-3xl text-brand-text1 leading-[1.12] tracking-tight">
            Engineered for{' '}
            <span className="text-[#1187c7] font-black">
              Tangible ROI,
            </span>
            <br />
            Not Just Visuals
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Value Pillars */}
          <div className="lg:col-span-7 space-y-5">
            {checklist.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-brand-surface2/60 border border-brand-border1 hover:border-brand-gold/40 hover:bg-brand-surface2 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform duration-300">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base md:text-lg mb-1 text-brand-text1 group-hover:text-brand-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-text2 text-[13px] md:text-[13.5px] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Metrics Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative bg-brand-surface2 border border-brand-border1 rounded-[2rem] p-8 md:p-10 overflow-hidden shadow-2xl backdrop-blur-md group"
          >
            {/* Top decorative glow */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-gold/15 blur-[90px] rounded-full pointer-events-none group-hover:bg-brand-gold/25 transition-all duration-700"></div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[9px] font-bold rounded-full uppercase tracking-wider mb-8">
              Verified Performance
            </div>

            <div className="grid grid-cols-2 gap-7 mb-8 relative z-10">
              <div className="p-4 rounded-xl bg-brand-surface1/60 border border-brand-border1/80">
                <div className="text-3xl md:text-4xl font-heading font-black text-brand-gold mb-1">
                  <CountUp to={120} suffix="+" />
                </div>
                <div className="text-[9.5px] font-bold uppercase tracking-widest text-brand-text3">
                  Projects Delivered
                </div>
              </div>
              <div className="p-4 rounded-xl bg-brand-surface1/60 border border-brand-border1/80">
                <div className="text-3xl md:text-4xl font-heading font-black text-brand-gold mb-1">
                  <CountUp to={4} suffix="×" />
                </div>
                <div className="text-[9.5px] font-bold uppercase tracking-widest text-brand-text3">
                  Average Client ROI
                </div>
              </div>
              <div className="p-4 rounded-xl bg-brand-surface1/60 border border-brand-border1/80">
                <div className="text-3xl md:text-4xl font-heading font-black text-brand-gold mb-1">
                  <CountUp to={98} suffix="%" />
                </div>
                <div className="text-[9.5px] font-bold uppercase tracking-widest text-brand-text3">
                  Client Retention
                </div>
              </div>
              <div className="p-4 rounded-xl bg-brand-surface1/60 border border-brand-border1/80">
                <div className="text-3xl md:text-4xl font-heading font-black text-brand-gold mb-1">
                  <CountUp to={5} suffix="yr" />
                </div>
                <div className="text-[9.5px] font-bold uppercase tracking-widest text-brand-text3">
                  Proven Track Record
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-[#1187c7]/30 mb-8 relative z-10"></div>

            <blockquote className="relative z-10 bg-brand-surface1/80 p-5 rounded-2xl border border-brand-border1">
              <div className="flex gap-1 text-brand-gold mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-xs">★</span>
                ))}
              </div>
              <p className="text-brand-text1 font-heading font-medium italic text-sm md:text-base leading-relaxed mb-4">
                &ldquo;Norstack didn't just build us a website; they engineered an automated customer acquisition pipeline that completely transformed our revenue.&rdquo;
              </p>
              <footer className="text-[10px] font-bold uppercase tracking-wider text-brand-text2 flex items-center gap-2">
                <span className="w-4 h-px bg-brand-gold" />
                <span>CEO &bull; TerraGrow Enterprise</span>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
