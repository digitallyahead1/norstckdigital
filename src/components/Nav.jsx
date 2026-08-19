import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../context/ThemeContext';

export function Nav({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const links = [
    { id: 'home', label: 'Home', subtitle: 'Main Platform Hub' },
    { id: 'services', label: 'Services', subtitle: 'Web, SaaS & Mobile Solutions' },
    { id: 'pricing', label: 'Pricing', subtitle: 'Scalable Growth Packages' },
    { id: 'portfolio', label: 'Portfolio', subtitle: 'Client Case Studies' },
    { id: 'about', label: 'About', subtitle: 'Engineering Excellence' },
    { id: 'contact', label: 'Contact', subtitle: 'Start Your Consultation' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main navigation"
      style={{
        backgroundColor: '#050a0c',
        '--bg-0': '#050a0c',
        '--bg-1': '#090e1a',
        '--bg-2': '#090e1a',
        '--text-1': '#f8fafc',
        '--text-2': '#f8fafc',
        '--text-3': '#f8fafc',
        '--border-1': 'rgba(17, 135, 199, 0.2)',
      }}
      className={`fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl shadow-lg pb-3 md:pb-4'
          : 'backdrop-blur-md pb-3 md:pb-4'
      }`}
    >
      <div className="h-full max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          aria-label="Norstack Digital – go to home page"
          className="flex items-center gap-3 text-left group"
        >
          <div className="relative w-10 h-10 rounded-[14px] bg-brand-surface1 border border-brand-border1 flex items-center justify-center shadow-sm group-hover:border-brand-border2 transition-all duration-300">
            <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7" y="7" width="18" height="18" rx="5" transform="rotate(45 16 16)" stroke="#1187c7" strokeWidth="3.5" />
              <rect x="15" y="15" width="18" height="18" rx="5" transform="rotate(45 24 24)" stroke="#1187c7" strokeWidth="3.5" opacity="0.95" />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-base font-heading font-black tracking-wider leading-none transition-colors text-brand-text1">
              Nor<span className="text-[#1187c7]">stack</span>
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.22em] mt-1 transition-colors text-brand-text2">
              Digital Solutions
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                aria-label={`Navigate to ${link.label}`}
                aria-current={currentPage === link.id ? 'page' : undefined}
                className={`relative text-[11px] uppercase tracking-[0.2em] font-bold transition-colors py-2 ${
                  currentPage === link.id
                    ? 'text-brand-gold'
                    : 'text-brand-text2 hover:text-brand-gold'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-brand-gold rounded-full -translate-x-1/2"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <motion.button
            id="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-9 h-9 rounded-xl border border-brand-border1 bg-brand-surface2 text-brand-text1 hover:text-brand-gold hover:border-brand-gold/50 flex items-center justify-center transition-all duration-300 overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Sun size={16} strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Moon size={16} strokeWidth={2.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <Button onClick={() => handleNavClick('contact')} className="!py-2.5 !px-5 !text-[11px]">
            Start a Project
          </Button>
        </div>

        {/* Mobile — theme toggle + styled hamburger */}
        <div className="md:hidden flex items-center gap-2.5">
          <motion.button
            id="theme-toggle-mobile"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-xl border border-brand-border1/80 bg-brand-surface1 text-brand-text1 hover:text-brand-gold flex items-center justify-center transition-all shadow-sm"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <Sun size={16} strokeWidth={2.5} />
              ) : (
                <Moon size={16} strokeWidth={2.5} />
              )}
            </AnimatePresence>
          </motion.button>

          <button
            className="w-10 h-10 rounded-xl border border-brand-border1/80 bg-brand-surface1 text-brand-text1 hover:text-brand-gold flex items-center justify-center transition-all shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────── */}
      {/* COMPACT CONTENT-FITTING MOBILE MENU OVERLAY    */}
      {/* ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            id="mobile-nav-menu"
            role="dialog"
            aria-label="Mobile navigation menu"
            className="md:hidden fixed top-0 left-0 w-full max-h-[92vh] z-[9999] border-b border-brand-border1 shadow-2xl flex flex-col p-4 sm:p-5 overflow-y-auto select-none rounded-b-3xl"
            style={{ backgroundColor: '#050a0c' }}
          >
            {/* Top Bar inside Mobile Modal */}
            <div className="flex items-center justify-between pb-3 border-b border-brand-border1/60">
              {/* Logo */}
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-3 text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-surface1 border border-brand-border1 flex items-center justify-center shadow-sm">
                  <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                    <rect x="7" y="7" width="18" height="18" rx="5" transform="rotate(45 16 16)" stroke="#1187c7" strokeWidth="3.5" />
                    <rect x="15" y="15" width="18" height="18" rx="5" transform="rotate(45 24 24)" stroke="#1187c7" strokeWidth="3.5" opacity="0.95" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-base font-heading font-black tracking-wider text-brand-text1">
                    Nor<span className="text-[#1187c7]">stack</span>
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-brand-text2">
                    Digital Solutions
                  </span>
                </div>
              </button>

              {/* Theme Toggle & Close Button */}
              <div className="flex items-center gap-2.5">
                <button
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                  className="w-9 h-9 rounded-xl border border-brand-border1 bg-brand-surface2 text-brand-text1 hover:text-brand-gold flex items-center justify-center transition-colors"
                >
                  {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                </button>

                <button
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-xl border border-brand-border1 bg-brand-surface1 text-brand-text1 hover:text-brand-gold flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Compact Links List Sitting Directly Under Top Bar Line */}
            <div className="flex flex-col space-y-0.5 pt-1 pb-2">
              {links.map((link, idx) => {
                const isActive = currentPage === link.id;
                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * idx }}
                    onClick={() => handleNavClick(link.id)}
                    aria-label={`Navigate to ${link.label}`}
                    aria-current={isActive ? 'page' : undefined}
                    className="group w-full py-2.5 px-1 border-b border-brand-border1/40 flex items-center justify-between transition-colors text-left"
                  >
                    <div className="flex flex-col space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[14px] sm:text-[15px] font-extrabold uppercase tracking-[0.18em] transition-colors ${
                          isActive ? 'text-brand-gold' : 'text-brand-text1 group-hover:text-brand-gold'
                        }`}>
                          {link.label}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-brand-gold shadow-sm" />
                        )}
                      </div>
                      <span className="text-[10.5px] font-normal text-brand-text2">
                        {link.subtitle}
                      </span>
                    </div>

                    <ArrowRight
                      size={15}
                      className={`transition-transform duration-300 ${
                        isActive
                          ? 'text-brand-gold translate-x-1'
                          : 'text-brand-text2/50 group-hover:text-brand-gold group-hover:translate-x-1'
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Tight Bottom CTA Action */}
            <div className="pt-3 pb-1 mt-1 border-t border-brand-border1/60">
              <Button onClick={() => handleNavClick('pricing')} className="w-full justify-center !py-3.5 text-xs font-bold uppercase tracking-wider">
                View Packages &amp; Pricing
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

