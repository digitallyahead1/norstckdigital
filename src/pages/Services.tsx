import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Megaphone, Share2, Search, Bot, MousePointerClick, Users, Tv2,
  FileText, Mail, Star, MonitorSmartphone, Smartphone, ShoppingCart,
  Code2, Database, Cloud, Cog, Palette, PenTool, LayoutTemplate,
  Video, BarChart2, Cpu, Brush, ArrowRight, ArrowUpRight, Phone,
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

interface SubService {
  icon: React.ElementType;
  label: string;
  desc: string;
}

interface Category {
  id: string;
  icon: React.ElementType;
  label: string;
  tagline: string;
  description: string;
  subServices: SubService[];
}

const categories: Category[] = [
  {
    id: 'marketing',
    icon: BarChart2,
    label: 'Marketing',
    tagline: 'Grow your audience, increase visibility & drive conversions.',
    description:
      'We create data-driven marketing strategies that connect your brand with the right audience across every channel — from organic search to paid social.',
    subServices: [
      { icon: Megaphone, label: 'Digital Marketing', desc: 'Full-funnel digital campaigns built to attract, convert, and retain customers across multiple platforms.' },
      { icon: Share2, label: 'Social Media Marketing', desc: 'Engaging content strategies that grow your following and drive real business results on every platform.' },
      { icon: Search, label: 'Search Engine Optimisation', desc: 'Technical and content SEO to rank higher, drive qualified organic traffic, and outpace competitors.' },
      { icon: Bot, label: 'AI Marketing', desc: 'Leverage AI-powered tools for personalized campaigns, predictive analytics, and automated customer journeys.' },
      { icon: MousePointerClick, label: 'Pay Per Click (PPC)', desc: 'High-ROI Google, Meta, and LinkedIn ad campaigns that deliver measurable results and scale profitably.' },
      { icon: Users, label: 'Public Relations', desc: 'Build authority and credibility through strategic media placements, press releases, and brand storytelling.' },
      { icon: Tv2, label: 'Influencer Marketing', desc: 'Connect with the right creators to amplify your brand message and reach targeted niche audiences.' },
      { icon: FileText, label: 'Content Marketing', desc: 'Compelling blogs, case studies, and resources that educate your audience and establish thought leadership.' },
      { icon: Mail, label: 'Email & SMS Marketing', desc: 'Automated drip campaigns and targeted broadcasts that nurture leads and turn them into loyal customers.' },
      { icon: Star, label: 'Online Reputation', desc: 'Monitor, manage, and improve how your business is perceived across all online platforms and review sites.' },
    ],
  },
  {
    id: 'technology',
    icon: Cpu,
    label: 'Technology',
    tagline: 'Fast, scalable digital products built to convert and grow.',
    description:
      'We design and develop websites, mobile apps, and custom software that load fast, work across every device, and are engineered to turn visitors into paying customers.',
    subServices: [
      { icon: MonitorSmartphone, label: 'Website Design & Development', desc: 'Premium, high-performance websites built on modern stacks — React, Next.js, WordPress — optimized for speed and SEO.' },
      { icon: Smartphone, label: 'Web & Mobile App Development', desc: 'Cross-platform mobile and web applications with seamless UX, real-time data, and scalable cloud infrastructure.' },
      { icon: ShoppingCart, label: 'E-commerce Solutions', desc: 'Custom online stores with optimized checkout flows, inventory management, and payment integrations that sell.' },
      { icon: Code2, label: 'Custom Software Engineering', desc: 'Bespoke SaaS platforms, internal dashboards, and enterprise tools engineered to solve complex business problems.' },
      { icon: Database, label: 'Database Architecture', desc: 'Robust, scalable database design and management for high-volume applications and mission-critical systems.' },
      { icon: Cloud, label: 'Cloud & DevOps', desc: 'AWS, GCP, and Azure deployments with CI/CD pipelines, containerization, and 99.9% uptime SLA guarantees.' },
      { icon: Cog, label: 'Business Automation', desc: 'AI workflows, Zapier/Make integrations, WhatsApp APIs, and CRM automation that save hundreds of hours monthly.' },
    ],
  },
  {
    id: 'design',
    icon: Brush,
    label: 'Design',
    tagline: 'Visuals that make your brand impossible to ignore.',
    description:
      'Your brand is your first impression. We craft identities, visuals, and user experiences that communicate authority, build trust, and drive action.',
    subServices: [
      { icon: Palette, label: 'Brand Design', desc: 'Complete brand identity systems — logos, color palettes, typography, and brand guidelines that position you as a premium authority.' },
      { icon: PenTool, label: 'Graphic Design', desc: 'Consistent, high-quality visual assets for social media, print, presentations, and marketing collateral.' },
      { icon: LayoutTemplate, label: 'UX/UI Design', desc: 'Research-driven interface design in Figma — wireframes, prototypes, and full design systems that convert.' },
      { icon: Video, label: 'Video & Animation', desc: 'Scroll-stopping video content, motion graphics, and brand films for social media, ads, and corporate presentations.' },
    ],
  },
];

export function Services({ onNavigate }: ServicesProps) {
  const [activeId, setActiveId] = useState<string>('marketing');
  const active = categories.find((c) => c.id === activeId)!;

  return (
    <div className="min-h-screen bg-[#04080f] pt-28 pb-32">
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] left-[10%] w-[40vw] h-[40vw] bg-cyan-500/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-purple-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ── Page Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-[3px] h-5 bg-gradient-to-b from-[#00d2ff] to-[#3b82f6] rounded-full" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#00d2ff]">
              What We Do
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tight mb-6">
            Full-stack digital services<br />
            <span className="text-[#00d2ff]">for ambitious brands.</span>
          </h1>
          <p className="text-[16px] text-white/50 max-w-2xl leading-relaxed">
            From strategy to execution — we cover every pillar of modern digital growth, all under one roof with zero outsourcing.
          </p>
        </motion.div>

        {/* ── Main Layout ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-0">

          {/* LEFT SIDEBAR */}
          <div className="flex flex-row lg:flex-col border-b lg:border-b-0 lg:border-r border-white/8 lg:w-[220px] shrink-0 mb-8 lg:mb-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`group relative flex items-center gap-3 px-5 py-7 lg:py-9 w-full text-left border-b border-white/8 transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="serviceActiveBar"
                      className="hidden lg:block absolute right-[-1px] top-0 h-full w-[3px] bg-[#00d2ff] rounded-l-full"
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="serviceActiveBarMobile"
                      className="lg:hidden absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#00d2ff] rounded-t-full"
                    />
                  )}
                  <Icon
                    size={20}
                    className={`shrink-0 transition-colors ${isActive ? 'text-[#00d2ff]' : 'group-hover:text-white/50'}`}
                  />
                  <span className="text-xl md:text-2xl font-bold tracking-tight">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* RIGHT PANEL */}
          <div className="flex-1 lg:pl-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Category tagline */}
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00d2ff] mb-2">
                  {active.tagline}
                </p>
                <p className="text-[15px] text-white/55 max-w-2xl leading-relaxed mb-5">
                  {active.description}
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-white/70 hover:text-[#00d2ff] transition-colors mb-10 group"
                >
                  Get a free consultation
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                {/* Sub-services expanded cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {active.subServices.map((svc, i) => {
                    const SvcIcon = svc.icon;
                    return (
                      <motion.div
                        key={svc.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.045 }}
                        onClick={() => onNavigate('contact')}
                        className="group flex flex-col gap-3 bg-[#0d1525] hover:bg-[#111e33] border border-white/8 hover:border-[#00d2ff]/30 rounded-xl px-5 py-5 cursor-pointer transition-all duration-250"
                      >
                        <div className="flex items-center gap-3">
                          <SvcIcon
                            size={18}
                            className="shrink-0 text-[#00d2ff] group-hover:scale-110 transition-transform duration-200"
                          />
                          <span className="text-[13px] font-bold text-white/85 group-hover:text-white leading-snug transition-colors">
                            {svc.label}
                          </span>
                        </div>
                        <p className="text-[11.5px] text-white/40 group-hover:text-white/55 leading-relaxed transition-colors">
                          {svc.desc}
                        </p>
                        <div className="flex items-center gap-1 text-[#00d2ff]/0 group-hover:text-[#00d2ff]/80 transition-all duration-200 mt-auto">
                          <span className="text-[10px] font-bold uppercase tracking-wider">Enquire</span>
                          <ArrowRight size={11} />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Bottom CTA ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-[#0d1525] border border-white/10 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,210,255,0.07)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00d2ff] mb-4">Ready to start?</p>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4 leading-tight">
              Not sure what you need?
            </h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto text-[15px] leading-relaxed">
              Let's jump on a free strategy call. We'll review your goals and map out exactly what your business needs to grow.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00d2ff] via-[#2563eb] to-[#a855f7] text-white font-bold text-xs uppercase tracking-wider rounded-full px-8 py-4 transition-all duration-300 shadow-[0_0_30px_rgba(0,210,255,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] hover:scale-105"
            >
              <Phone size={14} />
              Book a Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}