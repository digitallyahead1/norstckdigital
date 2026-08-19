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
    <div className="relative w-full overflow-hidden backdrop-blur-md py-6 md:py-8 flex items-center" style={{ backgroundColor: '#090e1a', '--bg-0': '#050a0c', '--bg-1': '#090e1a', '--bg-2': '#090e1a', '--text-1': '#f8fafc', '--text-2': '#f8fafc', '--text-3': '#f8fafc', '--border-1': 'rgba(17, 135, 199, 0.2)' }}>
      <div className="flex whitespace-nowrap animate-marquee select-none items-center">
        {/* Render 3 copies for ultra-smooth infinite loop */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            {items.map((item, j) => {
              const Icon = item.icon;
              return (
                <Fragment key={`${i}-${j}`}>
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-brand-surface2/70 transition-colors shadow-sm">
                    <span className="w-6 h-6 bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <Icon size={13} />
                    </span>
                    <span className={`text-xs md:text-sm font-heading font-black tracking-widest uppercase ${
                      item.highlight 
                        ? 'text-[#1187c7]' 
                        : 'text-brand-text1'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                </Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
