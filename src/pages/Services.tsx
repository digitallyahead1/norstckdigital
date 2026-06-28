import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
interface ServicesProps {
  onNavigate: (page: string) => void;
}
export function Services({ onNavigate }: ServicesProps) {
  const services = [
  {
    icon: '💻',
    title: 'Website Dev',
    desc: 'High-performance, SEO-optimized websites that act as your 24/7 sales team. We build scalable digital headquarters tailored to your brand.',
    tags: ['WordPress', 'React', 'Next.js', 'Custom CMS']
  },
  {
    icon: '⚙️',
    title: 'Software Dev',
    desc: 'Custom web applications and internal tools designed to solve complex business problems and streamline your operations.',
    tags: ['SaaS', 'Dashboards', 'APIs', 'ERP']
  },
  {
    icon: '📱',
    title: 'App Dev',
    desc: 'Native and cross-platform mobile applications that provide seamless experiences for your users on the go.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    icon: '✨',
    title: 'UI/UX Design',
    desc: 'Research-backed, conversion-focused interface design that looks premium and feels incredibly intuitive to use.',
    tags: ['Figma', 'Design Systems', 'Prototyping']
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    desc: 'Comprehensive inbound strategies to increase your visibility, drive organic traffic, and nurture leads into loyal customers.',
    tags: ['SEO', 'Content', 'Email', 'Social']
  },
  {
    icon: '🎯',
    title: 'Paid Advertising',
    desc: 'High-ROI performance marketing campaigns designed to acquire customers profitably at scale.',
    tags: ['Google Ads', 'Meta Ads', 'LinkedIn', 'Retargeting']
  },
  {
    icon: '🤖',
    title: 'Business Automation',
    desc: 'Connecting your disparate software tools to eliminate manual data entry and save your team hundreds of hours.',
    tags: ['Zapier', 'Make', 'AI Agents', 'WhatsApp API']
  },
  {
    icon: '🎬',
    title: 'Video Editing',
    desc: 'Scroll-stopping video content optimized for modern social platforms and high-converting ad creatives.',
    tags: ['Ad Creatives', 'Reels', 'Brand Videos', 'Motion']
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    desc: 'Cohesive visual identities that position your brand as a premium authority in your specific industry.',
    tags: ['Logo', 'Brand Identity', 'Print', 'Social Templates']
  }];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24">
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
            
            Our{' '}
            <span className="font-editorial text-brand-gold">Capabilities</span>
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
            className="text-xl text-brand-text2 max-w-2xl font-light">
            
            We offer end-to-end digital services. Whether you need a simple
            landing page or a complex enterprise software system, we have the
            expertise to deliver.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          {/* Sticky Header Column */}
          <div className="lg:col-span-3 hidden lg:block relative">
            <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text2">
                  Services Index
                </span>
              </div>
              <ul className="space-y-4">
                {services.map((s, i) =>
                <li
                  key={i}
                  className="text-sm font-bold text-brand-text3 hover:text-brand-text1 transition-colors cursor-pointer">
                  
                    {s.title}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Services List */}
          <div className="lg:col-span-9 space-y-4">
            {services.map((service, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.05
              }}
              className="group bg-brand-surface1 border border-brand-border1 rounded-2xl p-8 md:p-10 transition-all duration-500 ease-lux hover:bg-brand-warmDark hover:border-brand-border2 cursor-pointer hover-slide-line"
              onClick={() => onNavigate('contact')}>
              
                <div className="grid grid-cols-1 md:grid-cols-[60px_1fr_auto] gap-8 items-start md:items-center">
                  {/* Icon */}
                  <div className="text-5xl opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-3 text-brand-text1 group-hover:text-brand-gold transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-brand-text2 leading-relaxed mb-6 max-w-2xl">
                      {service.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) =>
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-widest text-brand-text3 bg-brand-bg border border-brand-border1 px-3 py-1.5 rounded-full">
                      
                          {tag}
                        </span>
                    )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex text-brand-text3 group-hover:text-brand-gold group-hover:translate-x-4 transition-all duration-500 ease-lux">
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
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
          className="mt-32 bg-brand-surface2 border border-brand-border1 rounded-[2rem] p-16 text-center relative overflow-hidden">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)]"></div>
          <h2 className="text-4xl font-heading font-bold mb-6 relative z-10">
            Not sure what you need?
          </h2>
          <p className="text-brand-text2 mb-10 max-w-xl mx-auto relative z-10 text-lg">
            Let's jump on a quick call to discuss your business goals and map
            out the right digital strategy.
          </p>
          <div className="relative z-10 flex justify-center">
            <Button onClick={() => onNavigate('contact')}>
              Book a Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </div>);

}