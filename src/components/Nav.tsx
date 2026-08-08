import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../context/ThemeContext';

interface NavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Nav({ currentPage, onNavigate }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-500 ease-lux ${
        isScrolled
          ? 'bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border1'
          : 'bg-transparent'
      }`}
    >
      <div className="h-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="relative w-10 h-10 rounded-[14px] bg-gradient-to-b from-[#08132b] to-[#040916] border border-[#00d2ff]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.15)] group-hover:border-[#00d2ff]/60 transition-all duration-300">
            <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7" y="7" width="18" height="18" rx="5" transform="rotate(45 16 16)" stroke="url(#navCyanGrad)" strokeWidth="3.5" />
              <rect x="15" y="15" width="18" height="18" rx="5" transform="rotate(45 24 24)" stroke="url(#navPurpleGrad)" strokeWidth="3.5" opacity="0.95" />
              <defs>
                <linearGradient id="navCyanGrad" x1="0" y1="0" x2="30" y2="30">
                  <stop offset="0%" stopColor="#00d2ff" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="navPurpleGrad" x1="0" y1="0" x2="30" y2="30">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-base font-heading font-black tracking-wider text-brand-text1 leading-none">
              Nor<span className="bg-gradient-to-r from-[#00d2ff] via-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">stack</span>
            </span>
            <span className="text-[8px] font-bold text-brand-text2 uppercase tracking-[0.22em] mt-1">
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
                className="relative text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text2 hover:text-brand-text1 transition-colors py-2"
              >
                {link.label}
                {currentPage === link.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 w-1 h-1 bg-brand-gold rounded-full -translate-x-1/2"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            id="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-9 h-9 rounded-xl border border-brand-border1 bg-brand-surface1 flex items-center justify-center text-brand-text2 hover:text-brand-gold hover:border-brand-gold/50 transition-colors duration-300 overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute"
                >
                  <Moon size={16} strokeWidth={2.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <Button onClick={() => handleNavClick('contact')} className="!py-2 !px-4 !text-[10px]">
            Start a Project
          </Button>
        </div>

        {/* Mobile — theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            id="theme-toggle-mobile"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-9 h-9 rounded-xl border border-brand-border1 bg-brand-surface1 flex items-center justify-center text-brand-text2 hover:text-brand-gold hover:border-brand-gold/50 transition-colors duration-300 overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun-m"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                  className="absolute"
                >
                  <Sun size={16} strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon-m"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                  className="absolute"
                >
                  <Moon size={16} strokeWidth={2.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <button
            className="text-brand-text1 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-[68px] left-0 right-0 bg-brand-bg/95 backdrop-blur-xl border-b border-brand-border1 shadow-2xl flex flex-col py-8 px-6 space-y-6"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left text-sm uppercase tracking-[0.2em] font-bold py-2 ${
                currentPage === link.id ? 'text-brand-gold' : 'text-brand-text2'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4">
            <Button onClick={() => handleNavClick('contact')} className="w-full justify-center">
              Start a Project
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}