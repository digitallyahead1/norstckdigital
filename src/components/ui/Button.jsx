import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}) {
  const isPrimary = variant === 'primary';
  return (
    <motion.button
      whileHover="hover"
      whileTap={{
        scale: 0.98
      }}
      className={`group relative inline-flex items-center justify-between gap-6 rounded-full px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-500 ease-lux ${isPrimary ? 'bg-gradient-to-r from-[#00d2ff] via-[#2563eb] to-[#a855f7] text-white hover:opacity-95 shadow-[0_0_20px_rgba(0,210,255,0.35)]' : 'border border-brand-border1 bg-transparent text-brand-text1 hover:border-brand-border2 hover:bg-brand-surface1'} ${className}`}
      {...props}>
      
      <span>{children}</span>

      <motion.div
        variants={{
          hover: {
            rotate: -45,
            scale: 1.1
          }
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-500 ease-lux ${isPrimary ? 'bg-white/20 text-white group-hover:bg-white/30' : 'bg-brand-surface2 text-brand-text1 group-hover:bg-brand-text1 group-hover:text-brand-bg'}`}>
        
        <ArrowRight size={14} strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  );
}
