import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Code2, 
  Smartphone, 
  Sparkles, 
  TrendingUp, 
  Target, 
  Zap, 
  Video, 
  Palette,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface BentoServicesProps {
  onNavigate: (page: string) => void;
}

export function BentoServices({ onNavigate }: BentoServicesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector<HTMLElement>(':scope > div')?.offsetWidth ?? 300;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      const scrollTo = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      title: 'Website Design & Development',
      desc: 'Premium business websites, company profiles, landing pages, e-commerce websites, and conversion-focused digital experiences built for credibility and growth.',
      tags: ['Custom Design', 'Mobile Ready', 'SEO Optimized', 'Conversion Focused'],
      icon: Globe,
      accentColor: '#2563eb',
      tagStyle: 'bg-blue-50 text-blue-700 border-blue-100',
      linkColor: 'text-blue-600',
    },
    {
      id: 2,
      title: 'Custom Software Development',
      desc: 'Business portals, dashboards, CRM systems, booking systems, SaaS platforms, inventory systems, POS systems, and operational software tailored to business needs.',
      tags: ['Fully Custom', 'Scalable Architecture', 'API Integration', 'Role-based Access'],
      icon: Code2,
      accentColor: '#2563eb',
      tagStyle: 'bg-blue-50 text-blue-700 border-blue-100',
      linkColor: 'text-blue-600',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      desc: 'Native and cross-platform mobile applications that provide seamless user experiences, integrated payment systems, and real-time notifications.',
      tags: ['React Native', 'Flutter', 'iOS', 'Android'],
      icon: Smartphone,
      accentColor: '#059669',
      tagStyle: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      linkColor: 'text-emerald-600',
    },
    {
      id: 4,
      title: 'UI/UX Interface Design',
      desc: 'Research-backed, conversion-focused interface design that looks premium and feels incredibly intuitive to use across all platforms.',
      tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
      icon: Sparkles,
      accentColor: '#8b5cf6',
      tagStyle: 'bg-purple-50 text-purple-700 border-purple-100',
      linkColor: 'text-purple-600',
    },
    {
      id: 5,
      title: 'Digital Marketing & SEO',
      desc: 'Comprehensive inbound strategies to increase your visibility, drive organic traffic, and nurture leads into loyal customers at scale.',
      tags: ['SEO', 'Content Marketing', 'Email Campaigns', 'Social Media'],
      icon: TrendingUp,
      accentColor: '#7c3aed',
      tagStyle: 'bg-violet-50 text-violet-600 border-violet-100',
      linkColor: 'text-violet-600',
    },
    {
      id: 6,
      title: 'Paid Advertising & PPC',
      desc: 'High-ROI performance marketing campaigns designed to acquire customers profitably at scale across Google, Meta, and LinkedIn.',
      tags: ['Google Ads', 'Meta Ads', 'LinkedIn', 'Retargeting'],
      icon: Target,
      accentColor: '#0284c7',
      tagStyle: 'bg-cyan-50 text-cyan-700 border-cyan-100',
      linkColor: 'text-cyan-600',
    },
    {
      id: 7,
      title: 'Business Automation & AI',
      desc: 'Connecting your disparate software tools to eliminate manual data entry, automate workflows, and save your team hundreds of hours every month.',
      tags: ['24/7 Automation', 'WhatsApp + Voice', 'CRM Integration', 'Lead Workflows'],
      icon: Zap,
      accentColor: '#059669',
      tagStyle: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      linkColor: 'text-emerald-600',
    },
    {
      id: 8,
      title: 'Video Editing & Motion',
      desc: 'Scroll-stopping video content optimized for modern social platforms and high-converting ad creatives that drive engagement.',
      tags: ['Ad Creatives', 'Reels', 'Brand Videos', 'Motion Graphics'],
      icon: Video,
      accentColor: '#2563eb',
      tagStyle: 'bg-blue-50 text-blue-700 border-blue-100',
      linkColor: 'text-blue-600',
    },
    {
      id: 9,
      title: 'Graphic Design & Branding',
      desc: 'Cohesive visual identities that position your brand as a premium authority in your specific industry with consistency across every touchpoint.',
      tags: ['Logo Design', 'Brand Identity', 'Print Design', 'Social Templates'],
      icon: Palette,
      accentColor: '#0891b2',
      tagStyle: 'bg-cyan-50 text-cyan-700 border-cyan-100',
      linkColor: 'text-cyan-600',
    }
  ];

  return (
    <section className="w-full bg-brand-bg py-24 select-none relative overflow-hidden border-b border-brand-border1">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-brand-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-[3px] h-5 bg-gradient-to-b from-brand-gold to-brand-blue rounded-full"></span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand-gold">
                Capabilities & Solutions
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-heading font-black text-brand-text1 leading-[1.18] tracking-tight">
              Technology Services Designed <br className="hidden md:block" />
              <span className="font-editorial text-brand-gold font-normal italic">for Business Growth</span>
            </h2>
            <p className="text-brand-text2 text-[14.5px] max-w-2xl mt-3 leading-relaxed font-light">
              Build credibility, automate workflows, improve operational efficiency, and capture market share with engineering built to scale.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('services')}
            className="shrink-0 inline-flex items-center gap-2 border border-brand-border1 bg-brand-surface2 text-brand-text1 hover:bg-brand-surface3 hover:border-brand-gold/50 font-bold text-xs uppercase tracking-wider rounded-full px-7 py-3.5 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(0,210,255,0.2)]"
          >
            <span>Explore All Services</span>
            <ArrowRight size={14} className="text-brand-gold" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-brand-border1 bg-brand-surface1/90 backdrop-blur-md flex items-center justify-center text-brand-text2 hover:text-brand-gold hover:border-brand-gold/60 shadow-lg hover:shadow-brand-gold/20 transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-brand-border1 bg-brand-surface1/90 backdrop-blur-md flex items-center justify-center text-brand-text2 hover:text-brand-gold hover:border-brand-gold/60 shadow-lg hover:shadow-brand-gold/20 transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>

          {/* Cards Row */}
          <div 
            ref={scrollRef}
            role="list"
            aria-label="Our services"
            className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth px-1 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  role="listitem"
                  className="snap-start shrink-0 w-[82%] sm:w-[46%] lg:w-[calc(25%-15px)]"
                >
                  <div 
                    onClick={() => onNavigate('services')}
                    className="group relative bg-brand-surface2/90 border border-brand-border1 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,210,255,0.15)] hover:border-brand-gold/50 hover:-translate-y-1.5 h-full flex flex-col backdrop-blur-sm"
                  >
                    {/* Top gradient highlight bar */}
                    <div 
                      className="h-[3px] w-full transition-all duration-300 group-hover:h-[4px]"
                      style={{ background: `linear-gradient(90deg, ${service.accentColor}, #00d2ff)` }}
                    />

                    {/* Watermark Icon */}
                    <Icon 
                      className="absolute top-4 right-4 w-20 h-20 pointer-events-none opacity-[0.04] text-brand-text1 group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-500"
                      strokeWidth={1}
                    />

                    {/* Content */}
                    <div className="p-6 pb-6 flex flex-col flex-1">
                      
                      {/* Icon with glow badge */}
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-brand-border1 shadow-md group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundColor: `${service.accentColor}18` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: service.accentColor }} strokeWidth={2.2} />
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-heading font-bold text-brand-text1 leading-snug mb-2.5 group-hover:text-brand-gold transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] text-brand-text2 leading-relaxed mb-6 flex-1 font-light">
                        {service.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-brand-border1 bg-brand-surface1 text-brand-text2 group-hover:border-brand-gold/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Explore Link */}
                      <div className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-brand-gold pt-3 border-t border-brand-border1/60 mt-auto group-hover:text-brand-goldHi transition-colors">
                        <span>Explore Solution</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}