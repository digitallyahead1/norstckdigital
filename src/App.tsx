import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Noise } from './components/ui/Noise';
import { ThemeProvider } from './context/ThemeContext';

export function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── Dynamic per-page SEO: update <title> and <meta name="description"> ──
  useEffect(() => {
    const pageMeta: Record<string, { title: string; description: string }> = {
      home: {
        title: 'Norstack Digital | Premium Web & Software Development Agency — Abuja, Nigeria',
        description: 'Norstack Digital is a top-rated digital agency in Nigeria. We build premium websites, custom software, mobile apps, SEO systems & AI automation for ambitious brands. Get a free audit today.',
      },
      services: {
        title: 'Our Services | Web Development, Software, Apps & Marketing — Norstack Digital',
        description: 'Explore Norstack Digital’s full-service offering: website development, custom software, mobile apps, UI/UX design, digital marketing, AI automation and more.',
      },
      pricing: {
        title: 'Pricing & Packages | Transparent Plans — Norstack Digital',
        description: 'View Norstack Digital’s transparent pricing packages for website development, software, apps, and digital marketing. Find the right plan for your business.',
      },
      portfolio: {
        title: 'Portfolio | Featured Projects & Case Studies — Norstack Digital',
        description: 'Explore our featured projects including CMANVerify, RFT Academy, and MBRTS. See how Norstack Digital delivers real results for ambitious brands.',
      },
      about: {
        title: 'About Us | Meet the Team Behind Norstack Digital',
        description: 'Learn about Norstack Digital — founded in Abuja in 2020, we engineer digital leverage for businesses through strategy-first web, software and marketing solutions.',
      },
      contact: {
        title: 'Contact Us | Start Your Project — Norstack Digital',
        description: 'Ready to build something great? Contact Norstack Digital to start your web, software or marketing project. We’ll review your inquiry and respond promptly.',
      },
    };

    const meta = pageMeta[currentPage] || pageMeta.home;
    document.title = meta.title;

    // Update meta description
    let descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'pricing':
        return <Pricing onNavigate={handleNavigate} />;
      case 'portfolio':
        return <Portfolio onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-brand-bg relative">
        <Noise />
        <Nav currentPage={currentPage} onNavigate={handleNavigate} />

        <main className="flex-grow relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </ThemeProvider>
  );
}