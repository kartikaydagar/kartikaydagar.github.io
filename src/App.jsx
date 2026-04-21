import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VortexWrapper from './components/VortexWrapper';
import SpaceBackground from './components/SpaceBackground';
import CursorGlow from './components/CursorGlow';

/* ─── Social Icons ─── */
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

/* ─── Reusable fade-up section wrapper ─── */
const Section = ({ id, children, noBorder = false }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 100, filter: 'blur(20px)', scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
    viewport={{ once: false, amount: 0.15 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className={`py-20 md:py-32 px-6 ${noBorder ? '' : 'border-b'}`}
    style={{ borderColor: 'var(--glass-border)' }}
  >
    <div className="max-w-6xl mx-auto w-full">{children}</div>
  </motion.section>
);

const SectionHeading = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, scale: 0.8, filter: 'blur(15px)' }}
    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
    viewport={{ once: false }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className="font-outfit font-bold tracking-tighter mb-12 md:mb-20 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text)] to-[var(--text-secondary)]"
    style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: 1.1 }}
  >
    {children}
  </motion.h2>
);

/* ─── Skill chip ─── */
const skills = [
  'Python', 'React', 'AI & Machine Learning', 'Data Analysis',
  'Photography', 'Videography', 'Strategic Planning', 'UI/UX Design',
  'Astronomy', 'Research', 'Problem Solving', 'Communication',
];

/* ─── Timeline item ─── */
const TimelineItem = ({ title, org, desc }) => (
  <div className="flex gap-6 md:gap-10">
    <div className="flex flex-col items-center gap-1 min-w-[40px]">
      <div className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#0066cc' }} />
      <div className="w-px flex-1" style={{ background: 'var(--glass-border)' }} />
    </div>
    <div className="pb-12">
      <h3 className="font-outfit font-bold text-2xl mb-1" style={{ color: 'var(--text)' }}>{title}</h3>
      <p className="font-semibold text-base mb-3" style={{ color: 'var(--text-secondary)' }}>{org}</p>
      <p className="leading-relaxed text-lg" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
    </div>
  </div>
);

/* ─── Project card ─── */
const projects = [
  {
    title: 'AI-Powered Research Tool',
    tag: 'AI · Python · React',
    desc: 'An intelligent research assistant that synthesizes academic papers using large language models to surface key insights.',
  },
  {
    title: 'Astrophotography Archive',
    tag: 'Photography · Next.js',
    desc: 'A curated digital archive of long-exposure astrophotography captured across locations in India.',
  },
  {
    title: 'Analytics Dashboard',
    tag: 'Data · Visualization',
    desc: 'Real-time analytics dashboard built for a student-run organization to track engagement and growth metrics.',
  },
];

/* ─── Blog posts ─── */
const posts = [];

/* ─── Visitor Counter Component ─── */
const VisitorCounter = () => {
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    // Simulating a persistent visitor counter using localStorage for this demonstration
    const storedCount = localStorage.getItem('portfolio_visits');
    const baseCount = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 500) + 1200;
    const newCount = baseCount + 1;
    localStorage.setItem('portfolio_visits', newCount);
    
    // Simulate network delay for a premium feel
    const timer = setTimeout(() => setCount(newCount), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border glass shadow-sm"
      style={{ borderColor: 'var(--glass-border)', background: 'var(--glass)' }}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4285F4] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'linear-gradient(to bottom right, #4285F4, #9b72cb)' }}></span>
      </span>
      <span className="text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: 'var(--text-secondary)' }}>
        {count ? `${count.toLocaleString()} Views` : 'Syncing...'}
      </span>
    </motion.div>
  );
};

/* ─── App ─── */
function App() {
  const [view, setView] = React.useState('portfolio');

  return (
    <ThemeProvider>
      <div style={{ background: 'transparent', color: 'var(--text)', minHeight: '100vh' }}>
        <SpaceBackground currentView={view} />
        {view === 'portfolio' && <CursorGlow />}
        <Navbar setView={setView} currentView={view} />

        <AnimatePresence mode="wait">
          {view === 'portfolio' ? (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <VortexWrapper>
                {/* HERO */}
                <Hero setView={setView} />

              <Section id="about">
                <SectionHeading>About Me</SectionHeading>
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 text-center md:text-left"
                  >
                    <p className="text-xl md:text-2xl leading-relaxed mb-6 md:mb-8" style={{ color: 'var(--text-secondary)' }}>
                      I’m Kartikay—a Science with Math student and analytical strategist operating at the intersection of technology and visual storytelling. From AI research to astrophotography, I specialize in finding elegant solutions to complex problems. I leverage AI-driven workflows to optimize my video editing and color grading, ensuring a perfect balance between technical precision and artistic soul.
                    </p>
                    <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      A true polymath, I’m driven by a deep curiosity for music, photography, and new culinary experiences. I treat every hobby as a fresh experiment to expand my knowledge. Whether I’m capturing a frame or exploring fresh ideas, my work is defined by a pursuit of clarity and a passion for thinking different.
                    </p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, filter: 'blur(15px)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.02 }}
                    className="order-1 md:order-2 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-square border-2 md:border-4 shadow-2xl transition-transform duration-500 max-w-[400px] mx-auto md:max-w-none" 
                    style={{ borderColor: 'var(--glass-border)' }}
                  >
                    <img 
                      src="https://i.pinimg.com/1200x/ba/5f/5d/ba5f5d9cb5b5bd30105a2b40300fe12a.jpg" 
                      alt="Kartikay" 
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                    />
                  </motion.div>
                </div>
              </Section>

              {/* SKILLS */}
              <Section id="skills">
                <SectionHeading>Skills</SectionHeading>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-5 py-2.5 rounded-full text-sm font-bold border transition-colors cursor-default"
                      style={{ borderColor: 'var(--glass-border)', color: 'var(--text)', background: 'var(--bg-secondary)' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#4285F4'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Section>

              {/* PROJECTS */}
              <Section id="projects">
                <SectionHeading>Projects</SectionHeading>
                <div className="py-20 text-center border-2 border-dashed rounded-[2rem]" style={{ borderColor: 'var(--glass-border)' }}>
                   <motion.p 
                     animate={{ opacity: [0.3, 0.6, 0.3] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="text-xl font-bold tracking-[0.3em] uppercase" 
                     style={{ color: 'var(--text-secondary)' }}
                   >
                     Project Showcase Updating Soon
                   </motion.p>
                </div>
              </Section>

              {/* EXPERIENCE */}
              <Section id="experience">
                <SectionHeading>Experience</SectionHeading>
                <div className="py-12">
                   <p className="text-lg font-medium opacity-60" style={{ color: 'var(--text-secondary)' }}>
                     Professional journey documentation arriving shortly...
                   </p>
                </div>
              </Section>

              {/* CONTACT */}
              <Section id="contact" noBorder>
                <div className="text-center max-w-2xl mx-auto">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
                    style={{ color: '#0066cc' }}
                  >
                    Connect
                  </motion.p>
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="font-outfit font-bold tracking-tighter mb-6"
                    style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', color: 'var(--text)' }}
                  >
                    Let's Talk
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="text-lg md:text-xl mb-16 leading-relaxed" 
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Have a project in mind or want to collaborate?<br className="hidden md:block" />
                    Feel free to reach out!
                  </motion.p>
                  
                  <div className="flex flex-col items-center gap-4 mb-20 max-w-sm mx-auto w-full">
                    {[
                      { icon: <MailIcon />, label: 'Email', href: 'mailto:ikartikdagar@gmail.com', color: '#EA4335' },
                      { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/kartikkk__._/', color: '#E4405F' },
                      { icon: <YoutubeIcon />, label: 'YouTube', href: 'https://www.youtube.com/@d4mnkale/videos', color: '#FF0000' },
                      { icon: <LinkedinIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kartikay-dagar-a364a9404/', color: '#0077B5' },
                      { icon: <GithubIcon />, label: 'GitHub', href: 'https://github.com/kartikaydagar', color: '#2b3137' },
                    ].map((social, i) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: social.color,
                          borderColor: social.color,
                          color: '#ffffff',
                          transition: { duration: 0.1 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-4 py-5 rounded-[2rem] shadow-lg border glass group"
                        style={{ borderColor: 'var(--glass-border)', color: 'var(--text)' }}
                      >
                        <span className="pointer-events-none group-hover:text-white transition-colors duration-100">
                          {social.icon}
                        </span>
                        <span className="font-bold text-lg pointer-events-none group-hover:text-white transition-colors duration-100">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>

                  <div className="pt-10 border-t" style={{ borderColor: 'var(--glass-border)' }}>
                    <p className="text-sm font-medium mb-6" style={{ color: 'var(--text-secondary)' }}>Or direct message</p>
                    <motion.a
                      href="mailto:ikartikdagar@gmail.com"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white transition-all shadow-xl shadow-[var(--primary)]/20"
                      style={{ background: '#0066cc' }}
                    >
                      <MailIcon />
                      Send a Message
                    </motion.a>
                  </div>
                </div>
              </Section>

              {/* FOOTER */}
              <footer className="py-20 px-6 text-center border-t" style={{ borderColor: 'var(--glass-border)', background: 'var(--bg-secondary)' }}>
                <div className="max-w-6xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="text-left">
                      <h3 className="font-outfit font-bold text-2xl mb-2">Kartikay</h3>
                      <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Creative Analytical Strategist</p>
                      <VisitorCounter />
                    </div>
                    
                    <div className="flex items-center gap-6">
                      {[
                        { icon: <GithubIcon />, href: 'https://github.com/kartikaydagar' },
                        { icon: <LinkedinIcon />, href: 'https://www.linkedin.com/in/kartikay-dagar-a364a9404/' },
                        { icon: <YoutubeIcon />, href: 'https://www.youtube.com/@d4mnkale/videos' },
                        { icon: <InstagramIcon />, href: 'https://www.instagram.com/kartikkk__._/' },
                        { icon: <MailIcon />, href: 'mailto:ikartikdagar@gmail.com' }
                      ].map((social, i) => (
                        <a 
                          key={i} 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--primary)] transition-colors"
                          style={{ color: 'var(--text)' }}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--glass-border)' }}>
                    <p className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                      © {new Date().getFullYear()} Kartikay &nbsp;·&nbsp; Designed with precision
                    </p>
                    <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
                      <a href="#home" className="hover:text-[var(--primary)] transition-colors" style={{ color: 'var(--text-secondary)' }}>Privacy</a>
                      <a href="#home" className="hover:text-[var(--primary)] transition-colors" style={{ color: 'var(--text-secondary)' }}>Terms</a>
                    </div>
                  </div>
                </div>
              </footer >
            </VortexWrapper >
          </motion.div >
          ) : (
            <motion.div
              key="blog"
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <VortexWrapper>
              <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
                <button
                  onClick={() => { setView('portfolio'); window.scrollTo({ top: 0 }); }}
                  className="flex items-center gap-2 text-sm font-bold mb-16 transition-colors group"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#0066cc'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <motion.span
                    animate={{ x: 0 }}
                    whileHover={{ x: -4 }}
                    className="inline-block"
                  >←</motion.span>
                  &nbsp;Back to Portfolio
                </button>

                <h1
                  className="font-outfit font-bold tracking-tighter mb-20"
                  style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)', color: 'var(--text)', lineHeight: 1.05 }}
                >
                  Insights
                </h1>

                <div className="py-20 text-center">
                   <h2 className="text-2xl font-bold tracking-widest uppercase opacity-40 mb-4">Journal Updating Soon</h2>
                   <p className="text-lg opacity-30">Fresh perspectives and research notes are currently being prepared.</p>
                </div>
              </div>

              <footer className="py-16 px-6 text-center border-t flex flex-col items-center gap-6" style={{ borderColor: 'var(--glass-border)', color: 'var(--text-secondary)' }}>
                <VisitorCounter />
                <p className="text-sm font-medium">© {new Date().getFullYear()} Kartikay</p>
              </footer>
            </VortexWrapper>
          </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
