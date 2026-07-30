import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
interface PricingProps {
  onNavigate: (page: string) => void;
}
export function Pricing({ onNavigate }: PricingProps) {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-8">
            
            Transparent{' '}
            <span className="font-editorial text-brand-gold">Investment</span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="text-xl text-brand-text2 max-w-2xl mx-auto font-light">
            
            Premium digital systems designed to generate ROI. Choose the tier
            that matches your current growth stage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
          {/* STARTER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="bg-brand-surface1 border border-brand-border1 rounded-[2rem] p-10 flex flex-col h-full hover-slide-line group">
            
            <div className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest mb-4">
              Package 01
            </div>
            <h3 className="text-3xl font-heading font-bold mb-6">Starter</h3>
            <div className="text-4xl font-heading font-bold text-brand-text1 mb-2">
              <span className="text-xl text-brand-text3 font-normal mr-2">
                from
              </span>
              ₦350,000
            </div>
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
              '14-Day Post-Launch Support'].
              map((feature, i) =>
              <li
                key={i}
                className="flex items-start text-sm text-brand-text2">
                
                  <span className="text-brand-text3 mr-4 mt-0.5">✓</span>
                  {feature}
                </li>
              )}
            </ul>

            <Button
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="w-full justify-center">
              
              Get Started
            </Button>
          </motion.div>

          {/* GROWTH (FEATURED) */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="relative bg-brand-surface2 border border-brand-gold rounded-[2rem] p-10 flex flex-col h-full transform lg:-translate-y-4 shadow-[0_20px_60px_rgba(0,210,255,0.15)]">
            
            {/* Gradient Top Line */}
            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#00d2ff] to-[#a855f7] rounded-t-full"></div>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00d2ff] to-[#a855f7] text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-6 rounded-full shadow-md">
              Most Popular
            </div>

            <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-4 mt-2">
              Package 02
            </div>
            <h3 className="text-3xl font-heading font-bold mb-6">Growth</h3>
            <div className="text-4xl font-heading font-bold text-brand-text1 mb-2">
              <span className="text-xl text-brand-text3 font-normal mr-2">
                from
              </span>
              ₦1,200,000
            </div>
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
              '3 Months Priority Support'].
              map((feature, i) =>
              <li
                key={i}
                className="flex items-start text-sm text-brand-text2">
                
                  <span className="text-brand-gold mr-4 mt-0.5">✓</span>
                  {feature}
                </li>
              )}
            </ul>

            <Button
              onClick={() => onNavigate('contact')}
              className="w-full justify-center">
              
              Scale Your Business
            </Button>
          </motion.div>

          {/* AUTHORITY */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
            className="bg-brand-surface1 border border-brand-border1 rounded-[2rem] p-10 flex flex-col h-full hover-slide-line group">
            
            <div className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest mb-4">
              Package 03
            </div>
            <h3 className="text-3xl font-heading font-bold mb-6">Authority</h3>
            <div className="text-4xl font-heading font-bold text-brand-text1 mb-2">
              Custom Pricing
            </div>
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
              '12 Months Premium Support'].
              map((feature, i) =>
              <li
                key={i}
                className="flex items-start text-sm text-brand-text2">
                
                  <span className="text-brand-text3 mr-4 mt-0.5">✓</span>
                  {feature}
                </li>
              )}
            </ul>

            <Button
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="w-full justify-center">
              
              Contact Sales
            </Button>
          </motion.div>
        </div>

        <p className="text-center text-xs text-brand-text3 mb-16 max-w-3xl mx-auto leading-relaxed">
          Prices vary based on scope, complexity, and timeline. All packages
          include strategy consultation and post-launch support. 50% deposit
          required to commence work. Hosting and third-party software
          subscriptions are billed separately.
        </p>

        <div className="text-center flex justify-center">
          <Button onClick={() => onNavigate('contact')}>
            Book Free Strategy Call
          </Button>
        </div>
      </div>
    </div>);

}