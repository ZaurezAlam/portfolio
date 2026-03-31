import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import myImage from '../images/zaurez.JPG';
import './Hero.css';

// Typing animation hook
const PHRASES = [
  'scalable e-commerce solutions.',
  'high-performance web apps.',
  'custom Shopify experiences.',
  'technical SEO systems.',
];

const useTypingEffect = (phrases, speed = 60, pause = 1800, deleteSpeed = 35) => {
  const [text, setText]         = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        setText(deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
        );
      }, deleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx, phrases, speed, pause, deleteSpeed]);

  return text;
};

// Stagger variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const typedText = useTypingEffect(PHRASES);

  return (
    <section className="hero-section">
      {/* Ambient background glow */}
      <div className="hero-glow hero-glow--left"  aria-hidden="true" />
      <div className="hero-glow hero-glow--right" aria-hidden="true" />

      <div className="hero-container">

        {/* ── Text ── */}
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-eyebrow" variants={itemVariants}>
            About Me
          </motion.span>

          <motion.h1 className="hero-title" variants={itemVariants}>
            I build{' '}
            <span className="hero-typed">
              {typedText}
              <span className="hero-cursor" aria-hidden="true">|</span>
            </span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
           Results-driven Frontend Developer with foundational experience in building responsive and user-centric web applications using React and modern JavaScript. Skilled in working with Shopify, WordPress, and CMS platforms to develop and deploy scalable websites. Proficient in translating Figma designs into functional interfaces, with a focus on performance optimization and implementing technical SEO best practices.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn btn--primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Projects
            </motion.a>
           <motion.a
  href="https://wa.me/923358273980" // Removed the 't' and kept it clean
  target="_blank" // Essential: Opens WhatsApp in a new tab so they don't leave your site
  rel="noopener noreferrer" // Security best practice for target="_blank"
  className="btn btn--ghost"
  whileHover={{ scale: 1.04, y: -2 }}
  whileTap={{ scale: 0.97 }}
>
  Get in Touch
</motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div className="hero-stats" variants={itemVariants}>
            {[
              { value: '0.5',  label: 'Years Experience' },
              { value: '10+', label: 'Projects Shipped' },
            ].map(({ value, label }) => (
              <div className="hero-stat" key={label}>
                <span className="hero-stat__value">{value}</span>
                <span className="hero-stat__label">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Image ── */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Orbiting ring */}
          <div className="hero-ring" aria-hidden="true" />

          {/* Blob frame */}
          <div className="hero-blob">
            <img
              src={myImage}
              alt="Zaurez Alam — Full-Stack Developer"
              className="hero-photo"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            className="hero-badge"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="hero-badge__dot" />
            Available for Work
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};