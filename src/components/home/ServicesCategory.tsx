import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  // Marketing icons
  Megaphone,
  Share2,
  Search,
  Bot,
  MousePointerClick,
  Users,
  Tv2,
  FileText,
  Mail,
  Star,
  // Technology icons
  MonitorSmartphone,
  Smartphone,
  ShoppingCart,
  // Design icons
  Palette,
  PenTool,
  LayoutTemplate,
  Video,
  // Software icons
  Code2,
  Database,
  Cloud,
  Cog,
  // Category icons
  BarChart2,
  Cpu,
  Brush,
  ArrowUpRight,
} from 'lucide-react';

interface ServicesCategoryProps {
  onNavigate: (page: string) => void;
}

interface SubService {
  icon: React.ElementType;
  label: string;
}

interface Category {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string;
  subServices: SubService[];
}

const categories: Category[] = [
  {
    id: 'marketing',
    icon: BarChart2,
    label: 'Marketing',
    description:
      'We create tailored strategies that drive engagement, increase visibility, and boost conversions which includes:',
    subServices: [
      { icon: Megaphone, label: 'Digital Marketing' },
      { icon: Share2, label: 'Social Media Marketing' },
      { icon: Search, label: 'Search Engine Optimisation' },
      { icon: Bot, label: 'AI Marketing' },
      { icon: MousePointerClick, label: 'Pay Per Click (PPC) Marketing' },
      { icon: Users, label: 'Public Relations' },
      { icon: Tv2, label: 'Influencer Marketing' },
      { icon: FileText, label: 'Content Marketing' },
      { icon: Mail, label: 'Email & SMS Marketing' },
      { icon: Star, label: 'Online Reputation' },
    ],
  },
  {
    id: 'technology',
    icon: Cpu,
    label: 'Technology',
    description:
      'We design and develop websites, mobile apps, and e-commerce platforms that load fast, work across every device, and are built to convert visitors into leads and customers.',
    subServices: [
      { icon: MonitorSmartphone, label: 'Website Design & Development' },
      { icon: Smartphone, label: 'Web & Mobile App Development' },
      { icon: ShoppingCart, label: 'E-commerce Solutions' },
      { icon: Code2, label: 'Custom Software Engineering' },
      { icon: Database, label: 'Database Architecture' },
      { icon: Cloud, label: 'Cloud & DevOps' },
      { icon: Cog, label: 'Business Automation' },
    ],
  },
  {
    id: 'design',
    icon: Brush,
    label: 'Design',
    description:
      'Your brand is your first impression. We craft identities, visuals, and experiences that make you impossible to ignore and easy to trust.',
    subServices: [
      { icon: Palette, label: 'Brand Design' },
      { icon: PenTool, label: 'Graphic Design' },
      { icon: LayoutTemplate, label: 'UX/UI Design' },
      { icon: Video, label: 'Video & Animation' },
    ],
  },
];

export function ServicesCategory({ onNavigate }: ServicesCategoryProps) {
  const [activeId, setActiveId] = useState<string>('marketing');
  const active = categories.find((c) => c.id === activeId)!;

  return (
    <section className="py-24 bg-[#04080f] relative overflow-hidden select-none">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] bg-cyan-500/6 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[28vw] h-[28vw] bg-emerald-500/5 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-[3px] h-5 bg-gradient-to-b from-[#00d2ff] to-[#3b82f6] rounded-full" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#00d2ff]">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight tracking-tight max-w-xl">
            Everything your business<br />
            <span className="text-[#00d2ff]">needs to grow.</span>
          </h2>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-0">
          
          {/* ── LEFT SIDEBAR: Category tabs ─────────────────── */}
          <div className="flex flex-row lg:flex-col gap-0 border-b lg:border-b-0 lg:border-r border-white/10 lg:w-[220px] shrink-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`group flex items-center gap-3.5 px-5 py-7 lg:py-8 w-full text-left border-b border-white/10 transition-all duration-300 relative ${
                    isActive ? 'text-white' : 'text-white/35 hover:text-white/70'
                  }`}
                >
                  {/* Active left bar on desktop */}
                  {isActive && (
                    <motion.span
                      layoutId="activeBar"
                      className="hidden lg:block absolute right-0 top-0 h-full w-[3px] bg-[#00d2ff] rounded-l-full"
                    />
                  )}
                  {/* Active bottom bar on mobile */}
                  {isActive && (
                    <motion.span
                      layoutId="activeBarMobile"
                      className="lg:hidden absolute bottom-0 left-0 w-full h-[3px] bg-[#00d2ff] rounded-t-full"
                    />
                  )}
                  <Icon
                    size={20}
                    className={`shrink-0 transition-colors duration-300 ${isActive ? 'text-[#00d2ff]' : 'text-white/35 group-hover:text-white/60'}`}
                  />
                  <span
                    className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : ''}`}
                  >
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT PANEL: Description + service grid ───────── */}
          <div className="flex-1 lg:pl-14 pt-10 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Description */}
                <p className="text-[15px] text-white/60 max-w-2xl leading-relaxed mb-4">
                  {active.description}
                </p>

                {/* "Learn more" link */}
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-white/80 hover:text-[#00d2ff] transition-colors duration-200 mb-8 group"
                >
                  Learn more
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  />
                </button>

                {/* Sub-services grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {active.subServices.map((svc, i) => {
                    const SvcIcon = svc.icon;
                    return (
                      <motion.div
                        key={svc.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.04 }}
                        onClick={() => onNavigate('services')}
                        className="group flex items-center gap-3 bg-[#0d1525] hover:bg-[#111e33] border border-white/8 hover:border-[#00d2ff]/30 rounded-lg px-4 py-4 cursor-pointer transition-all duration-200"
                      >
                        <SvcIcon
                          size={18}
                          className="shrink-0 text-[#00d2ff] group-hover:scale-110 transition-transform duration-200"
                        />
                        <span className="text-[13px] font-semibold text-white/80 group-hover:text-white leading-snug transition-colors duration-200">
                          {svc.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
