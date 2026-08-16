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

export function ServicesCategory({ onNavigate }: ServicesCategoryProps) {
  const [activeId, setActiveId] = useState<string>('marketing');
  const active = categories.find((c) => c.id === activeId)!;

  return (
    <section className="py-24 md:py-32 bg-[#050608] relative overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] opacity-25 rounded-full blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 229, 176, 0.25) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 80%)',
          }}
        />
        <div
          className="absolute bottom-0 left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] opacity-15 rounded-full blur-[160px]"
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)',
          }}
        />
      </div>

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
                        ? 'text-[#00e5b0] scale-110 drop-shadow-[0_0_12px_rgba(0,229,176,0.5)]'
                        : 'text-[#1e3a35] group-hover:text-[#00e5b0]/60'
                    }`}
                  />
                  <span
                    className={`text-2xl md:text-4xl lg:text-[42px] font-bold tracking-tight transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-[#444a56] group-hover:text-slate-300'
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
                <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed max-w-2xl mb-4">
                  {active.description}
                </p>

                {/* "Learn more ↗" link */}
                <div className="mb-8">
                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-2 text-[15px] font-bold text-white hover:text-[#00e5b0] transition-colors duration-200 group"
                  >
                    <span>Learn more</span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#00e5b0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
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
                        className="group flex items-center gap-4 bg-[#18191c] hover:bg-[#202126] border border-white/[0.04] hover:border-[#00e5b0]/25 rounded-[18px] px-5 py-5 min-h-[92px] cursor-pointer transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                      >
                        <SvcIcon
                          size={22}
                          strokeWidth={2}
                          className="shrink-0 text-[#00e5b0] transition-transform duration-200 group-hover:scale-110"
                        />
                        <span className="text-[14.5px] md:text-[15px] font-bold text-white leading-snug tracking-tight">
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

