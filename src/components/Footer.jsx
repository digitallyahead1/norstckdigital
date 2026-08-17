import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer({ onNavigate }) {
  return (
    <footer className="bg-brand-bg relative z-10 overflow-hidden pt-32 pb-10 dark-theme">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Massive Wordmark */}
        <div className="w-full overflow-hidden mb-16">
          <h2 className="text-[clamp(4rem,18vw,16rem)] font-heading font-extrabold leading-[0.85] tracking-[-0.04em] text-brand-text1/5 select-none">
            NORSTACK
          </h2>
        </div>

        <div className="h-px w-full bg-brand-gold/20 mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 text-left group mb-6">
              <div className="relative w-10 h-10 rounded-[14px] bg-gradient-to-b from-[#08132b] to-[#040916] border border-[#00d2ff]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.15)] group-hover:border-[#00d2ff]/60 transition-all duration-300">
                <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="7" y="7" width="18" height="18" rx="5" transform="rotate(45 16 16)" stroke="url(#footCyanGrad)" strokeWidth="3.5" />
                  <rect x="15" y="15" width="18" height="18" rx="5" transform="rotate(45 24 24)" stroke="url(#footPurpleGrad)" strokeWidth="3.5" opacity="0.95" />
                  <defs>
                    <linearGradient id="footCyanGrad" x1="0" y1="0" x2="30" y2="30">
                      <stop offset="0%" stopColor="#00d2ff" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="footPurpleGrad" x1="0" y1="0" x2="30" y2="30">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-base font-heading font-black tracking-wider text-white leading-none">
                  Nor<span className="bg-gradient-to-r from-[#00d2ff] via-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">stack</span>
                </span>
                <span className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.22em] mt-1">
                  Digital Solutions
                </span>
              </div>
            </button>
            <p className="text-brand-text2 text-sm leading-relaxed mb-8 max-w-xs">
              Where brands gain leverage. Premium digital systems built for
              results, not just looks.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="https://web.facebook.com/norstack/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-brand-surface1 border border-brand-border1 flex items-center justify-center text-brand-text2 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/norstack_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-brand-surface1 border border-brand-border1 flex items-center justify-center text-brand-text2 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com/Norstack"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-lg bg-brand-surface1 border border-brand-border1 flex items-center justify-center text-brand-text2 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/2348026495929"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-brand-surface1 border border-brand-border1 flex items-center justify-center text-brand-text2 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text3 mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                'Website Dev',
                'Software Dev',
                'App Dev',
                'UI/UX Design',
                'Digital Marketing'
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-brand-text1 hover:text-brand-gold text-sm transition-colors font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text3 mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Portfolio', 'Pricing', 'Careers'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      onNavigate(item.toLowerCase().replace(' ', ''))
                    }
                    className="text-brand-text1 hover:text-brand-gold text-sm transition-colors font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text3 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-brand-text1 font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-gold mt-0.5 shrink-0" />
                <span>Abuja, Nigeria</span>
              </li>
              <li className="flex items-start gap-3 hover:text-brand-gold transition-colors cursor-pointer">
                <Mail size={15} className="text-brand-gold mt-0.5 shrink-0" />
                <a href="mailto:hello@norstackdigital.com">hello@norstackdigital.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-brand-gold mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+2347067382927" className="hover:text-brand-gold transition-colors hover:underline">+234 706 738 2927</a>
                  <a href="tel:+2348026495929" className="hover:text-brand-gold transition-colors hover:underline">+234 802 649 5929</a>
                </div>
              </li>
            </ul>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-8 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold hover:text-brand-goldHi transition-colors flex items-center gap-2 group"
            >
              Start a Project
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border1 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.1em] text-brand-text3 font-bold">
          <p>
            &copy; {new Date().getFullYear()} Norstack Digital. All rights
            reserved.
          </p>
          <p className="mt-4 md:mt-0">
            Built with <span className="text-brand-gold text-sm">♦</span> in
            Nigeria
          </p>
        </div>
        <div className="mt-8 text-center text-[9px] uppercase tracking-[0.15em] text-brand-text3/50 font-bold border-t border-brand-border1/30 pt-6">
          developed by Norstack Digital IT Team
        </div>
      </div>
    </footer>
  );
}
