import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  // Category left icons
  Megaphone,
  LayoutGrid,
  Sparkles,
  ArrowUpRight,
  // Marketing icons
  ThumbsUp,
  Search,
  Bot,
  MousePointerClick,
  Building2,
  Heart,
  Film,
  Mail,
  ShieldCheck,
  // Technology icons
  Monitor,
  Smartphone,
  ShoppingCart,
  Code2,
  Database,
  Cloud,
  Cog,
  // Design icons
  Palette,
  PenTool,
  Layout,
  Video,
  Layers,
} from 'lucide-react';

const categories = [
  {
    id: 'marketing',
    icon: Megaphone,
    label: 'Marketing',
    description:
      'We create tailored strategies that drive engagement, increase visibility, and boost conversions which includes:',
    subServices: [
      { icon: Megaphone, label: 'Digital Marketing' },
      { icon: ThumbsUp, label: 'Social Media Marketing' },
      { icon: Search, label: 'Search Engine Optimisation' },
      { icon: Bot, label: 'AI Marketing' },
      { icon: MousePointerClick, label: 'Pay Per Click (PPC) Marketing' },
      { icon: Building2, label: 'Public Relations' },
      { icon: Heart, label: 'Influencer Marketing' },
      { icon: Film, label: 'Content Marketing' },
      { icon: Mail, label: 'Email & SMS Marketing' },
      { icon: ShieldCheck, label: 'Online Reputation' },
    ],
  },
  {
    id: 'technology',
    icon: LayoutGrid,
    label: 'Technology',
    description:
      'We design and develop websites, mobile apps, and enterprise platforms that load ultra-fast, work across every device, and convert visitors into loyal customers.',
    subServices: [
      { icon: Monitor, label: 'Website Design & Development' },
      { icon: Smartphone, label: 'Web & Mobile App Development' },
      { icon: ShoppingCart, label: 'E-commerce Solutions' },
      { icon: Code2, label: 'Custom Software Engineering' },
      { icon: Database, label: 'Database Architecture' },
      { icon: Cloud, label: 'Cloud & DevOps Infrastructure' },
      { icon: Cog, label: 'Business Process Automation' },
    ],
  },
  {
    id: 'design',
    icon: Sparkles,
    label: 'Design',
    description:
      'Your brand is your first impression. We craft identities, visuals, and digital experiences that make you impossible to ignore and easy to trust.',
    subServices: [
      { icon: Palette, label: 'Brand Identity & Strategy' },
      { icon: Layout, label: 'UI/UX Interface Design' },
      { icon: PenTool, label: 'Graphic & Marketing Assets' },
      { icon: Video, label: 'Video Production & Motion Graphics' },
      { icon: Layers, label: 'Design Systems & Guidelines' },
    ],
  },
];

export function ServicesCategory({ onNavigate }) {
  const [activeId, setActiveId] = useState('marketing');
  const active = categories.find((c) => c.id === activeId) || categories[0];

  return (
    <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: Big Category Tabs ─────────────────── */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-6 lg:gap-14 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className="group flex items-center gap-4 md:gap-5 text-left transition-all duration-300 outline-none focus:outline-none whitespace-nowrap lg:whitespace-normal"
                >
                  <Icon
                    strokeWidth={2.2}
                    className={`w-7 h-7 md:w-9 md:h-9 transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'text-brand-gold scale-110'
                        : 'text-brand-gold/40 group-hover:text-brand-gold'
                    }`}
                  />
                  <span
                    className={`text-2xl md:text-4xl lg:text-[42px] font-bold tracking-tight transition-all duration-300 ${
                      isActive
                        ? 'text-brand-text1'
                        : 'text-brand-text2/50 group-hover:text-brand-text1'
                    }`}
                  >
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT COLUMN: Description, Learn More, and Solid Card Grid ───────── */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Description */}
                <p className="text-brand-text2 text-base md:text-lg font-normal leading-relaxed max-w-2xl mb-4">
                  {active.description}
                </p>

                {/* "Learn more ↗" link */}
                <div className="mb-8">
                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-2 text-[15px] font-bold text-brand-text1 hover:text-brand-gold transition-colors duration-200 group"
                  >
                    <span>Learn more</span>
                    <ArrowUpRight
                      size={18}
                      className="text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </button>
                </div>

                {/* Sub-services Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4.5">
                  {active.subServices.map((svc, i) => {
                    const SvcIcon = svc.icon;
                    return (
                      <motion.div
                        key={svc.label}
                        initial={{ opacity: 0, scale: 0.96, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.035 }}
                        onClick={() => onNavigate('services')}
                        className="group flex items-center gap-4 bg-brand-surface1 hover:bg-brand-surface2 border border-brand-border1 hover:border-brand-border2 rounded-[18px] px-5 py-5 min-h-[92px] cursor-pointer transition-all duration-200 shadow-sm"
                      >
                        <SvcIcon
                          size={22}
                          strokeWidth={2}
                          className="shrink-0 text-brand-gold transition-transform duration-200 group-hover:scale-110"
                        />
                        <span className="text-[14.5px] md:text-[15px] font-bold text-brand-text1 leading-snug tracking-tight">
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
