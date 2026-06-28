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
      accentColor: '#dc2626',
      tagStyle: 'bg-red-50 text-red-600 border-red-100',
      linkColor: 'text-red-600',
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
      accentColor: '#dc2626',
      tagStyle: 'bg-red-50 text-red-600 border-red-100',
      linkColor: 'text-red-600',
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
    <section className="w-full bg-white py-20 select-none relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-[3px] h-5 bg-blue-600 rounded-full"></span>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-slate-500">
                Services
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-heading font-black text-slate-900 leading-[1.2] tracking-tight">
              Technology Services Designed<br className="hidden md:block" /> for Business Growth
            </h2>
            <p className="text-slate-400 text-[14px] max-w-2xl mt-3 leading-relaxed">
              Build credibility, reduce manual work, improve operations, and increase visibility with technology that supports long-term growth.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('services')}
            className="shrink-0 inline-flex items-center gap-2 border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 font-semibold text-[13px] rounded-full px-7 py-3 transition-all duration-200"
          >
            View All Services
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>

          {/* Cards Row */}
          <div 
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth px-1 py-1"
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
                  className="snap-start shrink-0 w-[80%] sm:w-[46%] lg:w-[calc(25%-15px)]"
                >
                  <div 
                    onClick={() => onNavigate('contact')}
                    className="group relative bg-white rounded-xl border border-slate-100 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-0.5 h-full flex flex-col"
                    style={{ borderTopWidth: '3px', borderTopColor: service.accentColor }}
                  >
                    {/* Watermark */}
                    <Icon 
                      className="absolute top-4 right-4 w-20 h-20 pointer-events-none opacity-[0.06]"
                      strokeWidth={1}
                    />

                    {/* Content */}
                    <div className="p-6 pb-5 flex flex-col flex-1">
                      
                      {/* Icon */}
                      <div 
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: service.accentColor + '12' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: service.accentColor }} strokeWidth={2} />
                      </div>

                      {/* Title */}
                      <h3 className="text-[15px] font-heading font-bold text-slate-900 leading-snug mb-2.5">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[12.5px] text-slate-400 leading-[1.7] mb-5 flex-1">
                        {service.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className={`text-[9.5px] font-semibold px-2.5 py-[3px] rounded-full border ${service.tagStyle}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Explore Link */}
                      <div className={`inline-flex items-center gap-1.5 font-bold text-[11px] tracking-wide ${service.linkColor} mt-auto`}>
                        Explore Service
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
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