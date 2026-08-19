import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceMap = {
      full: 'Full Package (End-to-End)',
      web: 'Website Development',
      software: 'Software Development',
      app: 'App Development',
      marketing: 'Digital Marketing & SEO',
    };

    const budgetMap = {
      tier1: '₦250k – ₦500k',
      tier2: '₦500k – ₦1.2M',
      tier3: '₦1.2M – ₦3M',
      tier4: '₦3M+',
    };

    const serviceText = serviceMap[formData.service] || formData.service || 'General Inquiry';
    const budgetText = budgetMap[formData.budget] || formData.budget || 'Not specified';

    const textMessage = `Hello Northstack Digital,

I have submitted an inquiry via your website contact form:

👤 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📱 Phone / WhatsApp: ${formData.phone || 'Not provided'}
🛠️ Service Required: ${serviceText}
💰 Estimated Budget: ${budgetText}

📝 Project Details:
${formData.message}`;

    const whatsappUrl = `https://wa.me/2348026495929?text=${encodeURIComponent(textMessage)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8">
              Let's Build Something <br />
              <span className="font-editorial text-brand-gold">Great</span>
            </h1>
            <p className="text-xl text-brand-text2 mb-16 max-w-md font-light">
              Ready to upgrade your digital infrastructure? Fill out the form below
              and our team will review your project details immediately.
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
                    hello@norstackdigital.com
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
                  <div className="text-lg font-medium text-brand-text1 flex flex-col">
                    <a href="tel:+2347067382927" className="hover:text-brand-gold transition-colors">+234 706 738 2927</a>
                    <a href="tel:+2348026495929" className="hover:text-brand-gold transition-colors">+234 802 649 5929</a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348026495929"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-brand-surface1 border border-[#1187c7]/30 rounded-2xl cursor-pointer hover:border-[#1187c7]/60 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1187c7]/10 text-[#1187c7] flex items-center justify-center text-2xl mr-6 group-hover:bg-[#1187c7] group-hover:text-[#f8fafc] transition-colors">
                  💬
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#1187c7] uppercase tracking-widest mb-1">
                    WhatsApp Direct
                  </div>
                  <div className="text-lg font-medium text-brand-text1">
                    +234 802 649 5929
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-brand-surface2 border border-brand-border1 rounded-2xl p-8">
              <div className="text-sm font-bold text-brand-text1 mb-3 flex items-center gap-2">
                <span>📍</span> Abuja, Nigeria &middot; Remote-friendly
              </div>
              <p className="text-sm text-brand-text2">
                Response time: Within 24 hours during business days (GMT+1).
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://web.facebook.com/norstack/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-xl bg-brand-surface1 border border-brand-border1 flex items-center justify-center text-brand-text2 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/norstack_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl bg-brand-surface1 border border-brand-border1 flex items-center justify-center text-brand-text2 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://x.com/Norstack"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-11 h-11 rounded-xl bg-brand-surface1 border border-brand-border1 flex items-center justify-center text-brand-text2 hover:text-brand-gold hover:border-brand-gold/50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/2348026495929"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-xl bg-brand-surface1 border border-brand-border1 flex items-center justify-center text-brand-text2 hover:text-[#1187c7] hover:border-[#1187c7]/50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-surface1 border border-brand-border1 rounded-[2rem] p-10 md:p-14"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center text-5xl mb-8 border border-brand-gold/30">
                  ✓
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">
                  Inquiry Submitted
                </h3>
                <p className="text-brand-text2 mb-10 text-lg max-w-md">
                  Thank you for reaching out. Your project details have been received and sent to our team. A strategist will review your inquiry and connect with you shortly.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="fname"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="floating-input w-full bg-transparent border-b border-brand-border1 py-3 text-lg text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent"
                      placeholder="First Name"
                    />
                    <label
                      htmlFor="fname"
                      className="floating-label absolute left-0 top-3 text-brand-text3 text-lg transition-all duration-300 pointer-events-none origin-left"
                    >
                      First Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="lname"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="floating-input w-full bg-transparent border-b border-brand-border1 py-3 text-lg text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent"
                      placeholder="Last Name"
                    />
                    <label
                      htmlFor="lname"
                      className="floating-label absolute left-0 top-3 text-brand-text3 text-lg transition-all duration-300 pointer-events-none origin-left"
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="floating-input w-full bg-transparent border-b border-brand-border1 py-3 text-lg text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label
                    htmlFor="email"
                    className="floating-label absolute left-0 top-3 text-brand-text3 text-lg transition-all duration-300 pointer-events-none origin-left"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="floating-input w-full bg-transparent border-b border-brand-border1 py-3 text-lg text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent"
                    placeholder="WhatsApp Number / Phone"
                  />
                  <label
                    htmlFor="phone"
                    className="floating-label absolute left-0 top-3 text-brand-text3 text-lg transition-all duration-300 pointer-events-none origin-left"
                  >
                    WhatsApp Number / Phone
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <label htmlFor="service" className="block text-[10px] font-bold uppercase tracking-widest text-brand-text3 mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-brand-surface2 border border-brand-border1 rounded-xl px-4 py-4 text-sm text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="full">Full Package</option>
                      <option value="web">Website Development</option>
                      <option value="software">Software Development</option>
                      <option value="app">App Development</option>
                      <option value="marketing">Digital Marketing</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label htmlFor="budget" className="block text-[10px] font-bold uppercase tracking-widest text-brand-text3 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-brand-surface2 border border-brand-border1 rounded-xl px-4 py-4 text-sm text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                    >
                      <option value="">Select a range...</option>
                      <option value="tier1">₦250k – ₦500k</option>
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
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="floating-input w-full bg-transparent border-b border-brand-border1 py-3 text-lg text-brand-text1 focus:outline-none focus:border-brand-gold transition-colors placeholder-transparent resize-none"
                    placeholder="Tell Us About Your Project"
                  />
                  <label
                    htmlFor="message"
                    className="floating-label absolute left-0 top-3 text-brand-text3 text-lg transition-all duration-300 pointer-events-none origin-left"
                  >
                    Tell Us About Your Project
                  </label>
                </div>

                <div className="pt-4 flex flex-col gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full justify-center !py-5"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
