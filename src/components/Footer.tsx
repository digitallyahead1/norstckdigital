import React from 'react';
interface FooterProps {
  onNavigate: (page: string) => void;
}
export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-bg relative z-10 overflow-hidden pt-32 pb-10">
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
            <div className="text-xl font-heading font-extrabold tracking-tight text-brand-text1 mb-6">
              Nor<span className="text-brand-gold">stack</span>
            </div>
            <p className="text-brand-text2 text-sm leading-relaxed mb-8 max-w-xs">
              Where brands gain leverage. Premium digital systems built for
              results, not just looks.
            </p>
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
              'Digital Marketing'].
              map((item) =>
              <li key={item}>
                  <button
                  onClick={() => onNavigate('services')}
                  className="text-brand-text1 hover:text-brand-gold text-sm transition-colors font-medium">
                  
                    {item}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text3 mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Portfolio', 'Pricing', 'Careers'].map((item) =>
              <li key={item}>
                  <button
                  onClick={() =>
                  onNavigate(item.toLowerCase().replace(' ', ''))
                  }
                  className="text-brand-text1 hover:text-brand-gold text-sm transition-colors font-medium">
                  
                    {item}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text3 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-brand-text1 font-medium">
              <li>Abuja, Nigeria</li>
              <li className="hover:text-brand-gold transition-colors cursor-pointer">
                hello@norstackdigital.com
              </li>
              <li className="hover:text-brand-gold transition-colors">
                <a href="tel:+2347067382927" className="hover:underline">+234 706 738 2927</a>, <a href="tel:+2349056038321" className="hover:underline">+234 905 603 8321</a>
              </li>
            </ul>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-8 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold hover:text-brand-goldHi transition-colors flex items-center gap-2 group">
              
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
    </footer>);

}