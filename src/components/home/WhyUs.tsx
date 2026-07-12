import React from 'react';
import { motion } from 'framer-motion';
import { CountUp } from '../ui/CountUp';
export function WhyUs() {
  const checklist = [
  {
    title: 'Strategy-First Thinking',
    desc: 'We analyze your business goals and build systems to achieve them.'
  },
  {
    title: 'Full-Stack Capability',
    desc: 'From branding to backend infrastructure, handled entirely in-house.'
  },
  {
    title: 'Transparent Communication',
    desc: 'No technical jargon or ghosting. Regular updates and clear milestones.'
  },
  {
    title: 'Post-Launch Support',
    desc: 'We stick around to ensure your systems scale securely.'
  },
  {
    title: 'Mobile-First & SEO-Ready',
    desc: 'Optimized for performance and search engines from day one.'
  }];

  return (
    <section className="py-20 px-6 md:px-12 bg-brand-surface1 border-y border-brand-border1">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text2">
              Why Norstack
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold max-w-3xl">
            Built for{' '}
            <span className="text-brand-gold font-bold italic">Results,</span>
            <br />
            Not Just Looks
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Checklist */}
          <div className="space-y-7">
            {checklist.map((item, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
              className="flex items-start gap-5 group hover-slide-line pb-5">
              
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-brand-surface2 border border-brand-border1 flex items-center justify-center text-brand-gold group-hover:border-brand-gold transition-colors duration-300">
                  <svg
                  width="12"
                  height="9"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  
                    <path
                    d="M1 5L4.5 8.5L13 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base mb-1 text-brand-text1">
                    {item.title}
                  </h4>
                  <p className="text-brand-text2 text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right: Metrics Panel */}
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
            }}
            className="relative bg-brand-surface2 border border-brand-border1 rounded-2xl p-8 md:p-10 overflow-hidden group">
            
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>

            <div className="grid grid-cols-2 gap-8 mb-8 relative z-10">
              <div>
                <div className="text-4xl md:text-5xl font-heading font-black text-brand-gold mb-2">
                  <CountUp to={120} suffix="+" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-brand-text2">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-black text-brand-gold mb-2">
                  <CountUp to={4} suffix="×" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-brand-text2">
                  Average ROI
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-black text-brand-gold mb-2">
                  <CountUp to={98} suffix="%" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-brand-text2">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-black text-brand-gold mb-2">
                  <CountUp to={5} suffix="yr" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-brand-text2">
                  Industry Experience
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-brand-gold/50 to-transparent mb-8 relative z-10"></div>

            <blockquote className="relative z-10">
              <p className="text-brand-text1 font-heading font-medium italic text-lg md:text-xl leading-relaxed mb-4">
                "Norstack didn't just build us a website; they built a lead
                generation machine that transformed our business trajectory."
              </p>
              <footer className="text-[9px] font-bold uppercase tracking-widest text-brand-text3">
                &mdash; CEO, TerraGrow
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>);

}