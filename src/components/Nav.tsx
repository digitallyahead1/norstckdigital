import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
interface NavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}
export function Nav({ currentPage, onNavigate }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const links = [
  {
    id: 'home',
    label: 'Home'
  },
  {
    id: 'services',
    label: 'Services'
  },
  {
    id: 'pricing',
    label: 'Pricing'
  },
  {
    id: 'portfolio',
    label: 'Portfolio'
  },
  {
    id: 'about',
    label: 'About'
  },
  {
    id: 'contact',
    label: 'Contact'
  }];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-500 ease-lux ${isScrolled ? 'bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border1' : 'bg-transparent'}`}>
      
      <div className="h-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group"
        >
          {/* Modern Geometric Overlapping Logo Mark */}
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#0c1e3b] to-[#040e24] border border-brand-border2/60 flex items-center justify-center overflow-hidden shadow-md group-hover:border-brand-gold/50 transition-all duration-300">
            <div className="absolute w-3.5 h-3.5 rounded border border-brand-gold rotate-45 transform -translate-x-1 -translate-y-1 opacity-90" />
            <div className="absolute w-3.5 h-3.5 rounded border border-red-500 rotate-45 transform translate-x-1 translate-y-1 opacity-90 mix-blend-screen" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-heading font-black tracking-wider text-white leading-none">
              Nor<span className="text-brand-gold">stack</span>
            </span>
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
              Digital Solutions
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8">
            {links.map((link) =>
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="relative text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text2 hover:text-brand-text1 transition-colors py-2">
              
                {link.label}
                {currentPage === link.id &&
              <motion.div
                layoutId="nav-indicator"
                className="absolute -bottom-1 left-1/2 w-1 h-1 bg-brand-gold rounded-full -translate-x-1/2"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }} />

              }
              </button>
            )}
          </div>
          <Button
            onClick={() => handleNavClick('contact')}
            className="!py-2 !px-4 !text-[10px]">
            
            Start a Project
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-text1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="md:hidden absolute top-[68px] left-0 right-0 bg-brand-bg/95 backdrop-blur-xl border-b border-brand-border1 shadow-2xl flex flex-col py-8 px-6 space-y-6">
        
          {links.map((link) =>
        <button
          key={link.id}
          onClick={() => handleNavClick(link.id)}
          className={`text-left text-sm uppercase tracking-[0.2em] font-bold py-2 ${currentPage === link.id ? 'text-brand-gold' : 'text-brand-text2'}`}>
          
              {link.label}
            </button>
        )}
          <div className="pt-4">
            <Button
            onClick={() => handleNavClick('contact')}
            className="w-full justify-center">
            
              Start a Project
            </Button>
          </div>
        </motion.div>
      }
    </nav>);

}