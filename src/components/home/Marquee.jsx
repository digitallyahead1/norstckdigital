import React, { Fragment } from 'react';
import { Sparkles, Code2, Globe, Cpu, Smartphone, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export function Marquee() {
  const items = [
    { label: 'CUSTOM WEB APPS', icon: Globe, highlight: true },
    { label: 'ENTERPRISE SOFTWARE', icon: Code2, highlight: false },
    { label: 'AI AUTOMATION SYSTEMS', icon: Cpu, highlight: true },
    { label: 'MOBILE APPS (IOS & ANDROID)', icon: Smartphone, highlight: false },
    { label: 'HIGH-CONVERTING E-COMMERCE', icon: Zap, highlight: true },
    { label: 'DATA-DRIVEN SEO & ADS', icon: TrendingUp, highlight: false },
    { label: 'PRODUCT UI/UX DESIGN', icon: Sparkles, highlight: true },
    { label: 'FINTECH & KYC PLATFORMS', icon: ShieldCheck, highlight: false },
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-brand-border1 bg-brand-surface1/60 backdrop-blur-md py-6 md:py-8 flex items-center">
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-brand-bg to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-brand-bg to-transparent z-10" />

      <div className="flex whitespace-nowrap animate-marquee select-none items-center">
        {/* Render 3 copies for ultra-smooth infinite loop */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            {items.map((item, j) => {
              const Icon = item.icon;
              return (
                <Fragment key={`${i}-${j}`}>
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-brand-border1 bg-brand-surface2/70 hover:border-brand-gold/40 transition-colors shadow-sm">
                    <span className="w-6 h-6 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                      <Icon size={13} />
                    </span>
                    <span className={`text-xs md:text-sm font-heading font-black tracking-widest uppercase ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-[#00d2ff] via-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent' 
                        : 'text-brand-text1'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  <span className="text-brand-gold/40 text-xs font-black">✦</span>
                </Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
