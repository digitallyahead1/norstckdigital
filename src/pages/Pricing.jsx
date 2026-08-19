import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export function Pricing({ onNavigate }) {
  const handleAskPricing = (packageName) => {
    const message = `Hello Northstack Digital, I would like to ask for pricing details regarding the ${packageName} package.`;
    const whatsappUrl = `https://wa.me/2348026495929?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-8"
          >
            Transparent{' '}
            <span className="font-editorial text-brand-gold">Investment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-brand-text2 max-w-2xl mx-auto font-light"
          >
            Premium digital systems designed to generate ROI. Choose the tier
            that matches your current growth stage and contact us directly for custom pricing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
          {/* STARTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-brand-surface1 border border-brand-border1 rounded-[2rem] p-10 flex flex-col h-full hover-slide-line group"
          >
            <div className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest mb-4">
              Package 01
            </div>
            <h3 className="text-3xl font-heading font-bold mb-6">Starter</h3>
            <p className="text-sm text-brand-text2 mb-10 pb-10 border-b border-brand-border1">
              Perfect for new businesses needing a professional digital
              presence.
            </p>

            <ul className="space-y-5 mb-12 flex-grow">
              {[
                'Professional Website (5–8 pages)',
                'Mobile Responsive Design',
                'Basic On-Page SEO',
                'Contact Forms & Lead Capture',
                'Social Media Integration',
                'WhatsApp Chat Button',
                'SSL Certificate & Domain Setup',
                '2 Revision Rounds',
                '14-Day Post-Launch Support',
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-brand-text2">
                  <span className="text-brand-text3 mr-4 mt-0.5">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              onClick={() => handleAskPricing('Starter')}
              className="w-full justify-center gap-2 border-[#1187c7]/40 hover:border-[#1187c7] hover:bg-[#1187c7]/10 text-brand-text1"
            >
              <span className="text-[#1187c7]">💬</span> Ask for Pricing
            </Button>
          </motion.div>

          {/* GROWTH (FEATURED) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-brand-surface2 border border-brand-gold rounded-[2rem] p-10 flex flex-col h-full transform lg:-translate-y-4 shadow-[0_20px_60px_rgba(17,135,199,0.15)]"
          >
            {/* Top Line */}
            <div className="absolute top-0 left-8 right-8 h-1 bg-[#1187c7] rounded-t-full"></div>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1187c7] text-[#f8fafc] text-[10px] font-bold uppercase tracking-widest py-1.5 px-6 rounded-full shadow-md">
              Most Popular
            </div>

            <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-4 mt-2">
              Package 02
            </div>
            <h3 className="text-3xl font-heading font-bold mb-6">Growth</h3>
            <p className="text-sm text-brand-text2 mb-10 pb-10 border-b border-brand-border1">
              For established businesses ready to automate and scale
              aggressively.
            </p>

            <ul className="space-y-5 mb-12 flex-grow">
              <li className="flex items-start text-sm font-bold text-brand-text1">
                <span className="text-brand-gold mr-4 mt-0.5">✓</span>
                Everything in Starter, plus:
              </li>
              {[
                'Lead Generation System Setup',
                'Basic CRM Integration',
                'WhatsApp Business Automation',
                'Custom Landing Pages (Up to 3)',
                'Analytics & Tracking Dashboard',
                'Email Marketing Setup',
                'Paid Ads Management (1st Month)',
                '3 Months Priority Support',
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-brand-text2">
                  <span className="text-brand-gold mr-4 mt-0.5">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              onClick={() => handleAskPricing('Growth')}
              className="w-full justify-center gap-2 bg-[#1187c7] hover:opacity-90 text-[#f8fafc] font-bold"
            >
              <span>💬</span> Ask for Pricing
            </Button>
          </motion.div>

          {/* AUTHORITY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-brand-surface1 border border-brand-border1 rounded-[2rem] p-10 flex flex-col h-full hover-slide-line group"
          >
            <div className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest mb-4">
              Package 03
            </div>
            <h3 className="text-3xl font-heading font-bold mb-6">Authority</h3>
            <p className="text-sm text-brand-text2 mb-10 pb-10 border-b border-brand-border1">
              Enterprise-grade systems, custom software, and full-stack
              marketing.
            </p>

            <ul className="space-y-5 mb-12 flex-grow">
              <li className="flex items-start text-sm font-bold text-brand-text1">
                <span className="text-brand-text3 mr-4 mt-0.5">✓</span>
                Everything in Growth, plus:
              </li>
              {[
                'Custom Software / Web App',
                'AI Workflow Automation',
                'Custom BI Dashboard',
                'Advanced CRM Architecture',
                'Mobile App Development',
                'Dedicated Project Manager',
                'Monthly Strategy Sessions',
                '12 Months Premium Support',
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-brand-text2">
                  <span className="text-brand-text3 mr-4 mt-0.5">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              onClick={() => handleAskPricing('Authority')}
              className="w-full justify-center gap-2 border-[#1187c7]/40 hover:border-[#1187c7] hover:bg-[#1187c7]/10 text-brand-text1"
            >
              <span className="text-[#1187c7]">💬</span> Ask for Pricing
            </Button>
          </motion.div>
        </div>

        <p className="text-center text-xs text-brand-text3 mb-16 max-w-3xl mx-auto leading-relaxed">
          Custom proposals are tailored based on your specific scope, requirements, and timeline. All packages
          include strategy consultation and post-launch support. Contact our team via WhatsApp to get an immediate estimate.
        </p>

        <div className="text-center flex justify-center">
          <Button onClick={() => onNavigate('contact')}>
            Book Free Strategy Call
          </Button>
        </div>
      </div>
    </div>
  );
}
