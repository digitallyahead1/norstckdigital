import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  // Category navigation icons
  Megaphone,
  LayoutGrid,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Phone,
  CheckCircle2,
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

interface ServicesProps {
  onNavigate: (page: string) => void;
}

interface SubService {
  icon: React.ElementType;
  label: string;
  desc: string;
  deliverables: string[];
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
    icon: Megaphone,
    label: 'Marketing',
    tagline: 'Scale customer acquisition, maximize ROI & build durable market authority.',
    description:
      'We create data-backed, high-converting marketing engines that connect your brand with the highest-value audience across every touchpoint.',
    subServices: [
      {
        icon: Megaphone,
        label: 'Digital Marketing',
        desc: 'Comprehensive multi-channel digital campaigns engineered to attract, nurture, and convert high-intent prospects.',
        deliverables: ['Full-Funnel Strategy', 'Campaign Management', 'Attribution Modeling', 'Performance Analytics'],
      },
      {
        icon: ThumbsUp,
        label: 'Social Media Marketing',
        desc: 'Strategic social content distribution and community building that increases brand resonance and follower-to-buyer conversions.',
        deliverables: ['Content Calendars', 'Community Growth', 'Engagement Campaigns', 'Brand Voice Optimization'],
      },
      {
        icon: Search,
        label: 'Search Engine Optimisation',
        desc: 'Technical SEO, content architecture, and strategic backlink building that outranks competitors and delivers sustainable organic revenue.',
        deliverables: ['Technical SEO Audits', 'Keyword Research', 'On-Page SEO', 'Backlink Acquisition'],
      },
      {
        icon: Bot,
        label: 'AI Marketing',
        desc: 'Custom AI workflows, automated lead scoring, and predictive personalization to supercharge your sales velocity.',
        deliverables: ['AI Content Pipelines', 'Predictive Analytics', 'Audience Segmentation', 'Automated Lead Nurturing'],
      },
      {
        icon: MousePointerClick,
        label: 'Pay Per Click (PPC)',
        desc: 'Laser-targeted Google, Meta, and LinkedIn ad campaigns with optimized ad creatives and continuous CRO testing.',
        deliverables: ['Search & Display Ads', 'Meta & LinkedIn Ads', 'Landing Page CRO', 'ROAS Optimization'],
      },
      {
        icon: Building2,
        label: 'Public Relations',
        desc: 'Positioning your company as an industry benchmark through targeted media coverage, press publications, and executive branding.',
        deliverables: ['Press Releases', 'Media Outreach', 'Executive Positioning', 'Crisis Communications'],
      },
      {
        icon: Heart,
        label: 'Influencer Marketing',
        desc: 'Vetted creator partnerships and authentic influencer collaborations that drive measurable social proof and direct sales.',
        deliverables: ['Creator Sourcing', 'Campaign Management', 'Contract Negotiation', 'ROI Tracking'],
      },
      {
        icon: Film,
        label: 'Content Marketing',
        desc: 'High-authority whitepapers, articles, case studies, and video content that establish market leadership and generate qualified inbound leads.',
        deliverables: ['Thought Leadership', 'Case Studies', 'Blog Editorial', 'Content Strategy'],
      },
      {
        icon: Mail,
        label: 'Email & SMS Marketing',
        desc: 'Automated lifecycle journeys, personalized behavioral triggers, and high-converting broadcast campaigns that maximize customer lifetime value.',
        deliverables: ['Drip Sequences', 'List Segmentation', 'SMS Automation', 'Deliverability Optimization'],
      },
      {
        icon: ShieldCheck,
        label: 'Online Reputation',
        desc: 'Proactive review generation, brand sentiment monitoring, and online profile fortification to safeguard your corporate credibility.',
        deliverables: ['Review Management', 'Sentiment Analysis', 'Search Engine Cleanup', 'Brand Shielding'],
      },
    ],
  },
  {
    id: 'technology',
    icon: LayoutGrid,
    label: 'Technology',
    tagline: 'High-performance engineering, scalable cloud infrastructure & custom digital platforms.',
    description:
      'We design, architect, and deploy mission-critical software, mobile applications, and enterprise systems that streamline operations and drive exponential business growth.',
    subServices: [
      {
        icon: Monitor,
        label: 'Website Design & Development',
        desc: 'Bespoke, lightning-fast digital experiences built with modern stacks (React, Next.js, Node.js) with flawless mobile responsiveness and SEO.',
        deliverables: ['Custom UI/UX Implementation', 'Sub-second Load Times', 'CMS Integration', 'Enterprise Security'],
      },
      {
        icon: Smartphone,
        label: 'Web & Mobile App Development',
        desc: 'Native and cross-platform mobile apps for iOS and Android delivering silky-smooth interfaces and real-time backend synchronization.',
        deliverables: ['React Native / Flutter', 'Real-time APIs', 'Offline Capabilities', 'App Store Deployment'],
      },
      {
        icon: ShoppingCart,
        label: 'E-commerce Solutions',
        desc: 'Conversion-optimized storefronts, customized checkout flows, automated inventory syncing, and global payment gateway integrations.',
        deliverables: ['Custom Shopify & Next.js Stores', 'Payment Gateways', 'Inventory Sync', 'Cart Abandonment Recovery'],
      },
      {
        icon: Code2,
        label: 'Custom Software Engineering',
        desc: 'Bespoke SaaS platforms, internal management portals, and enterprise-grade software tailored to automate your proprietary business workflows.',
        deliverables: ['Custom SaaS Systems', 'Admin Dashboards', 'Role-Based Access', 'Scalable Architecture'],
      },
      {
        icon: Database,
        label: 'Database Architecture',
        desc: 'High-concurrency database design, performance tuning, indexing, and automated disaster recovery for mission-critical operations.',
        deliverables: ['PostgreSQL / MySQL / Redis', 'Query Optimization', 'Automated Backups', 'Data Migration'],
      },
      {
        icon: Cloud,
        label: 'Cloud & DevOps Infrastructure',
        desc: 'Cloud deployments on AWS, GCP, and DigitalOcean with automated CI/CD pipelines, containerization, and 99.99% uptime guarantees.',
        deliverables: ['Docker & Kubernetes', 'CI/CD Pipelines', 'AWS/GCP Setup', '24/7 Monitoring & Alerting'],
      },
      {
        icon: Cog,
        label: 'Business Process Automation',
        desc: 'API integrations, CRM synchronizations, automated messaging bots, and custom webhooks that eliminate manual work.',
        deliverables: ['API Integrations', 'WhatsApp / SMS Bots', 'Workflow Automation', 'CRM Integration'],
      },
    ],
  },
  {
    id: 'design',
    icon: Sparkles,
    label: 'Design',
    tagline: 'Distinctive brand identities, intuitive user experiences & captivating visual assets.',
    description:
      'We craft unforgettable digital experiences and cohesive brand systems that command premium pricing, build immediate credibility, and convert visitors into lifelong advocates.',
    subServices: [
      {
        icon: Palette,
        label: 'Brand Identity & Strategy',
        desc: 'Complete visual identity systems — brand strategy, logo suites, color architecture, typography guidelines, and corporate stationery.',
        deliverables: ['Brand Guidelines', 'Logo System', 'Typography & Palette', 'Brand Strategy Deck'],
      },
      {
        icon: Layout,
        label: 'UI/UX Interface Design',
        desc: 'User-centric wireframing, high-fidelity Figma prototypes, micro-interactions, and conversion-optimized design systems.',
        deliverables: ['Figma Design Files', 'Interactive Prototypes', 'User Journey Maps', 'Component Design Systems'],
      },
      {
        icon: PenTool,
        label: 'Graphic & Marketing Assets',
        desc: 'Scroll-stopping graphics, advertising creatives, investor pitch decks, corporate brochures, and digital marketing collateral.',
        deliverables: ['Pitch Decks', 'Social Media Kits', 'Marketing Collateral', 'Vector Illustrations'],
      },
      {
        icon: Video,
        label: 'Video Production & Motion Graphics',
        desc: 'Cinematic brand films, 3D product animations, explainer videos, and short-form video content tailored for social growth.',
        deliverables: ['Brand Video Ads', 'Motion Graphics', 'Product 3D Renders', 'Social Video Edits'],
      },
      {
        icon: Layers,
        label: 'Design Systems & Guidelines',
        desc: 'Comprehensive, scalable design component libraries ensuring design consistency across your entire product ecosystem.',
        deliverables: ['Component Libraries', 'Token Architecture', 'Developer Handoff', 'Design Documentation'],
      },
    ],
  },
];

export function Services({ onNavigate }: ServicesProps) {
  const [activeId, setActiveId] = useState<string>('marketing');
  const active = categories.find((c) => c.id === activeId) || categories[0];

  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-32 bg-[#050608] text-white">
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] opacity-20 rounded-full blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 229, 176, 0.2) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 80%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] opacity-15 rounded-full blur-[160px]"
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ── Page Header ─────────────────────────────────── */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-[3px] h-5 rounded-full bg-gradient-to-b from-[#00e5b0] to-[#00d2ff]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#00e5b0]">
              Capabilities &amp; Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight mb-6">
            Services Designed for{' '}
            <span className="font-editorial bg-gradient-to-r from-[#00e5b0] via-[#00d2ff] to-[#a855f7] bg-clip-text text-transparent italic">
              Business Growth
            </span>
          </h1>
          <p className="text-[16px] md:text-[17px] text-slate-300 max-w-3xl leading-relaxed">
            From strategic marketing to full-stack engineering and high-end design — explore how Norstack delivers turnkey digital solutions built to drive measurable revenue.
          </p>
        </div>

        {/* ── Interactive Category Explorer Section ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-24">
          
          {/* ── LEFT COLUMN: Big Category Tabs ─────────────────── */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-6 lg:gap-12 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className="group flex items-center gap-4 md:gap-5 text-left transition-all duration-300 outline-none focus:outline-none whitespace-nowrap lg:whitespace-normal cursor-pointer"
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

          {/* ── RIGHT COLUMN: Category Details + Solid Cards Grid ── */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Category Header */}
                <p className="text-white text-base md:text-lg font-normal leading-relaxed max-w-3xl mb-3">
                  {active.description}
                </p>

                {/* Free consultation link */}
                <div className="mb-8">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 text-[15px] font-bold text-white hover:text-[#00e5b0] transition-colors duration-200 group cursor-pointer"
                  >
                    <span>Request a proposal for {active.label}</span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#00e5b0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </button>
                </div>

                {/* Sub-services Grid (Chunky solid cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4.5">
                  {active.subServices.map((svc, i) => {
                    const SvcIcon = svc.icon;
                    return (
                      <motion.div
                        key={svc.label}
                        initial={{ opacity: 0, scale: 0.96, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.03 }}
                        onClick={() => onNavigate('contact')}
                        className="group flex flex-col justify-between bg-[#18191c] hover:bg-[#202126] border border-white/[0.04] hover:border-[#00e5b0]/30 rounded-[20px] p-5 min-h-[140px] cursor-pointer transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                      >
                        <div className="flex items-center gap-3.5 mb-3">
                          <SvcIcon
                            size={22}
                            strokeWidth={2}
                            className="shrink-0 text-[#00e5b0] transition-transform duration-200 group-hover:scale-110"
                          />
                          <span className="text-[15px] font-bold text-white leading-snug tracking-tight">
                            {svc.label}
                          </span>
                        </div>

                        <p className="text-[12.5px] text-slate-400 leading-relaxed line-clamp-2 mb-3">
                          {svc.desc}
                        </p>

                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#00e5b0] opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-auto">
                          <span>Get Started</span>
                          <ArrowRight size={12} />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ── Complete Capabilities Feature Deep-Dive ───────── */}
        <div className="pt-16 border-t border-white/10 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              What We Deliver
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Every project is backed by our full-stack multidisciplinary team with guaranteed quality assurance and end-to-end execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#121316] border border-white/[0.06] rounded-[24px] p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <cat.icon className="w-6 h-6 text-[#00e5b0]" />
                    <h3 className="text-2xl font-bold text-white tracking-tight">{cat.label}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {cat.tagline}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {cat.subServices.slice(0, 5).map((sub) => (
                      <li key={sub.label} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-[#00e5b0] shrink-0" />
                        <span>{sub.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setActiveId(cat.id);
                    window.scrollTo({ top: 180, behavior: 'smooth' });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-[#00e5b0]/15 text-white hover:text-[#00e5b0] text-xs font-bold uppercase tracking-wider transition-colors duration-200 border border-white/10 flex items-center justify-center gap-2"
                >
                  <span>Explore {cat.label}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Consultation Banner ─────────────────────── */}
        <div className="relative bg-gradient-to-br from-[#12141a] via-[#101217] to-[#0a0c10] border border-white/10 rounded-[32px] p-10 md:p-16 text-center overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0,229,176,0.15) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-10 max-w-xl mx-auto">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#00e5b0] mb-3">
              Need a Tailored Solution?
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 leading-tight">
              Let's Build Your Digital Advantage
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
              Whether you need a high-converting web platform, custom software architecture, or end-to-end digital marketing, we are ready to accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#00e5b0] hover:bg-[#00c99a] text-black font-extrabold text-xs uppercase tracking-wider rounded-full px-8 py-4 transition-all duration-300 shadow-[0_0_30px_rgba(0,229,176,0.3)] hover:scale-105 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => {
                  window.open('https://wa.me/2348026495929?text=Hello%20Northstack%20Digital,%20I%20would%20like%20to%20discuss%20a%20project.', '_blank');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-full px-8 py-4 border border-white/10 transition-all duration-300 cursor-pointer"
              >
                <Phone size={14} className="text-[#00e5b0]" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}