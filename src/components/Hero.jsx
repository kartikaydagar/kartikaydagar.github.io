import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = ({ setView }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ overflow: 'visible' }}>
            <motion.h1
              className="font-bold tracking-tighter bg-gradient-to-r from-[#003366] via-[#0077be] to-[#87CEEB] bg-clip-text text-transparent"
              style={{
                fontSize: 'clamp(3rem, 10vw, 7.5rem)',
                display: 'inline-block',
                lineHeight: '1.5',
                marginBottom: '-0.25em',
                marginLeft: '-10px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
              }}
            >
              Kartikay
            </motion.h1>
          </div>

          <motion.p
            className="text-base md:text-xl tracking-tight mb-12 md:mb-16 max-w-xl mx-auto"
            style={{ 
              color: 'var(--text)', 
              letterSpacing: '0.05em', 
              marginTop: '1.5rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
              fontWeight: 300
            }}
          >
            CREATIVE ANALYTICAL STRATEGIST
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: '#0066cc', boxShadow: '0 4px 24px rgba(0,102,204,0.35)' }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-bold border-2 transition-all hover:scale-105 active:scale-95"
              style={{ borderColor: 'var(--text)', color: 'var(--text)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--text)'; e.currentTarget.style.color = 'var(--bg)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text)'; }}
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-medium" style={{ color: 'var(--text-secondary)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, var(--text), transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
