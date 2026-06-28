import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}>
            
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8">
              Let's Build Something <br />
              <span className="font-editorial text-brand-gold">Great</span>
            </h1>
            <p className="text-xl text-brand-text2 mb-16 max-w-md font-light">
              Ready to upgrade your digital infrastructure? Fill out the form,
              and we'll get back to you within 24 hours to schedule a strategy
              session.
            </p>

            <div className="space-y-6 mb-16">
              {/* Email */}
              <div className="flex items-center p-6 bg-brand-surface1 border border-brand-border1 rounded-2xl hover:border-brand-border2 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-surface2 flex items-center justify-center text-2xl mr-6">
                  ✉
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest mb-1">
                    Email
                  </div>
                  <div className="text-lg font-medium text-brand-text1">
                    hello@northstackdigital.com
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center p-6 bg-brand-surface1 border border-brand-border1 rounded-2xl hover:border-brand-border2 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-surface2 flex items-center justify-center text-2xl mr-6">
                  📞
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-text3 uppercase tracking-widest mb-1">
                    Phone
                  </div>
                  <div className="text-lg font-medium text-brand-text1">
                    +234 800 000 0000
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center p-6 bg-brand-surface1 border border-[#25D366]/30 rounded-2xl cursor-pointer hover:border-[#25D366]/60 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center text-2xl mr-6 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  💬
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#25D366] uppercase tracking-widest mb-1">
                    WhatsApp
                  </div>
                  <div className="text-lg font-medium text-brand-text1">
                    Chat with us instantly
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-surface2 border border-brand-border1 rounded-2xl p-8">
              <div className="text-sm font-bold text-brand-text1 mb-3 flex items-center gap-2">
                <span>📍</span> Lagos, Nigeria &middot; Remote-friendly
              </div>
              <p className="text-sm text-brand-text2">
                Response time: Within 24 hours during business days (GMT+1).
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="bg-brand-surface1 border border-brand-border1 rounded-[2rem] p-10 md:p-14">
            
            {isSubmitted ?
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              className="h-full flex flex-col items-center justify-center text-center py-20">
              
                <div className="w-24 h-24 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center text-5xl mb-8 border border-brand-gold/20">
                  ✓
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">
                  Message Received
                </h3>
                <p className="text-brand-text2 mb-10 text-lg">
                  Thank you for reaching out. A strategist will review your
                  details and contact you shortly.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input
                    required
                    type="text"
                    id="fname"
                    className="floating-input w-full bg-transparent border-b border-brand-border1 py-3 text-lg text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent"
                    placeholder="First Name" />
                  
                    <label
                    htmlFor="fname"
                    className="floating-label absolute left-0 top-3 text-brand-text3 text-lg transition-all duration-300 pointer-events-none origin-left">
                    
                      First Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                    required
                    type="text"
                    id="lname"
                    className="floating-input w-full bg-transparent border-b border-brand-border1 py-3 text-lg text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent"
                    placeholder="Last Name" />
                  
                    <label
                    htmlFor="lname"
                    className="floating-label absolute left-0 top-3 text-brand-text3 text-lg transition-all duration-300 pointer-events-none origin-left">
                    
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                  required
                  type="email"
                  id="email"
                  className="floating-input w-full bg-transparent border-b border-brand-border1 py-3 text-lg text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent"
                  placeholder="Email Address" />
                
                  <label
                  htmlFor="email"
                  className="floating-label absolute left-0 top-3 text-brand-text3 text-lg transition-all duration-300 pointer-events-none origin-left">
                  
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                  type="tel"
                  id="phone"
                  className="floating-input w-full bg-transparent border-b border-brand-border1 py-3 text-lg text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent"
                  placeholder="Phone Number" />
                
                  <label
                  htmlFor="phone"
                  className="floating-label absolute left-0 top-3 text-brand-text3 text-lg transition-all duration-300 pointer-events-none origin-left">
                  
                    Phone Number
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-text3 mb-2">
                      Service Required
                    </label>
                    <select className="w-full bg-brand-surface2 border border-brand-border1 rounded-xl px-4 py-4 text-sm text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                      <option value="">Select a service...</option>
                      <option value="full">Full Package</option>
                      <option value="web">Website Development</option>
                      <option value="software">Software Development</option>
                      <option value="app">App Development</option>
                      <option value="marketing">Digital Marketing</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-text3 mb-2">
                      Estimated Budget
                    </label>
                    <select className="w-full bg-brand-surface2 border border-brand-border1 rounded-xl px-4 py-4 text-sm text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                      <option value="">Select a range...</option>
                      <option value="tier1">₦350k – ₦500k</option>
                      <option value="tier2">₦500k – ₦1.2M</option>
                      <option value="tier3">₦1.2M – ₦3M</option>
                      <option value="tier4">₦3M+</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                  required
                  id="message"
                  rows={4}
                  className="floating-input w-full bg-transparent border-b border-brand-border1 py-3 text-lg text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent resize-none"
                  placeholder="Tell Us About Your Project">
                </textarea>
                  <label
                  htmlFor="message"
                  className="floating-label absolute left-0 top-3 text-brand-text3 text-lg transition-all duration-300 pointer-events-none origin-left">
                  
                    Tell Us About Your Project
                  </label>
                </div>

                <div className="pt-4 flex flex-col gap-4">
                  <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full justify-center !py-5">
                  
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white font-bold text-xs uppercase tracking-widest px-6 py-5 rounded-full transition-colors duration-300">
                  
                    <span className="text-lg">💬</span>
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            }
          </motion.div>
        </div>
      </div>
    </div>);

}