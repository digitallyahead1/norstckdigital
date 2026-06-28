import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
interface PortfolioProps {
  onNavigate: (page: string) => void;
}
export function Portfolio({ onNavigate }: PortfolioProps) {
  const projects = [
  {
    name: 'PayVault',
    category: 'Software Dev',
    tag: 'Fintech',
    desc: 'A secure, scalable digital banking platform designed for seamless cross-border transactions.',
    metric1: '40k',
    label1: 'Users',
    metric2: '99%',
    label2: 'Uptime',
    thumbColor: 'from-[#0A192F] to-[#112240]'
  },
  {
    name: 'TerraGrow',
    category: 'Website + Marketing',
    tag: 'Agri-Tech',
    desc: 'High-converting e-commerce platform and lead generation engine for B2B agricultural supplies.',
    metric1: '312%',
    label1: 'Leads',
    metric2: '₦80M',
    label2: 'GMV',
    thumbColor: 'from-[#0B2415] to-[#143D25]'
  },
  {
    name: 'LuxeBeauty',
    category: 'App Development',
    tag: 'E-Commerce',
    desc: 'Premium mobile commerce application with AR try-on features and personalized product recommendations.',
    metric1: '4.8%',
    label1: 'Conv.',
    metric2: '15k',
    label2: 'Installs',
    thumbColor: 'from-[#2D1B36] to-[#4A2C59]'
  },
  {
    name: 'LogiTrace',
    category: 'Automation + Software',
    tag: 'Logistics',
    desc: 'Custom fleet management dashboard integrating GPS APIs and automating dispatch workflows.',
    metric1: '40h',
    label1: 'Saved/wk',
    metric2: '-60%',
    label2: 'Costs',
    thumbColor: 'from-[#0F172A] to-[#1E293B]'
  },
  {
    name: 'EduPath',
    category: 'UI/UX + Dev',
    tag: 'EdTech',
    desc: 'Intuitive learning management system designed to maximize student engagement and completion rates.',
    metric1: '2.5k',
    label1: 'Students',
    metric2: '4.9',
    label2: 'Rating',
    thumbColor: 'from-[#331A00] to-[#592D00]'
  },
  {
    name: 'MediConnect',
    category: 'Website + Branding',
    tag: 'Healthcare',
    desc: 'Modern clinic booking platform with automated patient reminders and telemedicine integration.',
    metric1: '5×',
    label1: 'Bookings',
    metric2: '-90%',
    label2: 'No-shows',
    thumbColor: 'from-[#1E1B4B] to-[#312E81]'
  }];

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
            
            Featured{' '}
            <span className="font-editorial text-brand-gold">Work</span>
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
            
            A selection of digital systems we've engineered to solve complex
            problems and drive measurable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {projects.map((project, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8,
              delay: i % 2 * 0.2
            }}
            className="group cursor-pointer flex flex-col"
            onClick={() => onNavigate('contact')}>
            
              {/* Cinematic Thumbnail */}
              <div
              className={`relative w-full aspect-video rounded-2xl bg-gradient-to-br ${project.thumbColor} overflow-hidden mb-8 border border-brand-border1`}>
              
                {/* Wordmark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-heading font-extrabold text-brand-text1/10 group-hover:scale-105 transition-transform duration-700 ease-lux select-none">
                    {project.name.toUpperCase()}
                  </span>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-bg/50 backdrop-blur-md flex items-center justify-center text-brand-text1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-lux border border-brand-border1">
                  <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  
                    <line x1="5" y1="19" x2="19" y2="5"></line>
                    <polyline points="9 5 19 5 19 15"></polyline>
                  </svg>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-6 left-6 bg-brand-bg/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-brand-text1 uppercase tracking-widest border border-brand-border1">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest bg-brand-surface1 border border-brand-border1 px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                  <h3 className="text-3xl font-heading font-bold">
                    {project.name}
                  </h3>
                </div>

                <p className="text-brand-text2 text-lg leading-relaxed mb-8 max-w-xl">
                  {project.desc}
                </p>

                {/* Metrics */}
                <div className="pt-6 border-t border-brand-border1 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-editorial text-brand-gold mb-1">
                      {project.metric1}
                    </div>
                    <div className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest">
                      {project.label1}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-editorial text-brand-gold mb-1">
                      {project.metric2}
                    </div>
                    <div className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest">
                      {project.label2}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-center bg-brand-surface1 border border-brand-border1 rounded-[2rem] p-16">
          
          <h2 className="text-4xl font-heading font-bold mb-8">
            Your Project Could Be Next
          </h2>
          <div className="flex justify-center">
            <Button onClick={() => onNavigate('contact')}>
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </div>);

}