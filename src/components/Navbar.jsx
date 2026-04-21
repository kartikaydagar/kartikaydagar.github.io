import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact', 'Blog'];

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 py-2 rounded-full border glass" 
         style={{ borderColor: 'var(--glass-border)', background: 'var(--glass)', backdropFilter: 'blur(10px)' }}>
      <span className="text-[14px] font-bold tracking-tight" style={{ 
        color: 'var(--text)', 
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' 
      }}>
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
      </span>
    </div>
  );
};

const Navbar = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 50 && isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (item === 'Blog') {
      setView('blog');
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (currentView === 'blog') {
      setView('portfolio');
      setTimeout(() => {
        const el = document.getElementById(item.toLowerCase());
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 800);
    } else {
      const el = document.getElementById(item.toLowerCase());
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-5 transition-all duration-300"
        style={{
          background: scrolled || isOpen ? 'var(--bg)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        }}
      >
        <button
          onClick={(e) => handleNavClick(e, 'Home')}
          className="text-xl tracking-tight transition-opacity hover:opacity-70 font-medium"
          style={{ 
            color: 'var(--text)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
          }}
        >
          Kartikay
        </button>

        <div className="hidden md:flex items-center gap-8 mr-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={item === 'Blog' ? '#' : `#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              className="text-sm font-bold uppercase tracking-widest transition-all hover:text-[var(--primary)]"
              style={{ color: currentView === 'blog' && item === 'Blog' ? 'var(--primary)' : 'var(--text-secondary)' }}
              onMouseEnter={e => { if (!(currentView === 'blog' && item === 'Blog')) e.currentTarget.style.color = 'var(--text)'; }}
              onMouseLeave={e => { if (!(currentView === 'blog' && item === 'Blog')) e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LiveClock />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[6px] rounded-full border transition-all hover:scale-110 active:scale-95"
            style={{ borderColor: 'var(--glass-border)', background: 'var(--glass)' }}
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block rounded-full"
              style={{ width: 20, height: 2, background: 'var(--text)' }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block rounded-full"
              style={{ width: 20, height: 2, background: 'var(--text)' }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block rounded-full"
              style={{ width: 20, height: 2, background: 'var(--text)' }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'var(--bg)' }}
          >
            <nav>
              <ul className="flex flex-col items-center gap-6">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.055, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={item === 'Blog' ? '#' : `#${item.toLowerCase()}`}
                      onClick={(e) => handleNavClick(e, item)}
                      className="font-outfit font-bold tracking-tighter block transition-colors duration-200"
                      style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        color: 'var(--text)',
                        lineHeight: 1.1,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#0066cc'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; }}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
