import React from 'react';
import { motion } from 'framer-motion';
import dsu    from '../../assets/Logos/dsu.png';
import aptech from '../../assets/Logos/aptech.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon   from '@mui/icons-material/GitHub';
import PhoneIcon    from '@mui/icons-material/Phone';
import EmailIcon    from '@mui/icons-material/Email';
import './Education.css';

// ─── Data ─────────────────────────────────────────────────────────────────────
const EDUCATION = [
  {
    logo:   dsu,
    logoAlt:'DHA Suffa University',
    school: 'DHA Suffa University',
    degree: 'Bachelor of Science in Software Engineering',
    period: '2021 – 2025',
    type:   'degree',
  },
  {
    logo:   aptech,
    logoAlt:'Aptech',
    school: 'Aptech',
    degree: 'Web Development Certification',
    period: '2023',
    type:   'cert',
  },
];

const SOCIALS = [
  {
    icon:  <EmailIcon sx={{ fontSize: 18 }} />,
    href:  'mailto:zaurezalam@gmail.com',
    label: 'zaurezalam@gmail.com',
  },
  {
    icon:  <PhoneIcon sx={{ fontSize: 18 }} />,
    href:  'tel:+923358273980',
    label: '+92 335 827 3980',
  },
  {
    icon:  <LinkedInIcon sx={{ fontSize: 18 }} />,
    href:  'https://www.linkedin.com/in/zaurez-alam-khan-0ab9bb32a',
    label: 'LinkedIn',
    external: true,
  },
  {
    icon:  <GitHubIcon sx={{ fontSize: 18 }} />,
    href:  'https://github.com/ZaurezAlam',
    label: 'GitHub',
    external: true,
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Education() {
  return (
    <>
      {/* ══ Education Section ══════════════════════════════════════════════════ */}
      <section className="edu-section" id="education">
        <div className="edu-glow" aria-hidden="true" />

        {/* Heading */}
        <motion.div
          className="edu-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="edu-eyebrow">Background</span>
          <h2 className="edu-title">Education &amp; Certification</h2>
        </motion.div>

        {/* Cards */}
        <div className="edu-list">
          {EDUCATION.map((item, i) => (
            <motion.div
              key={item.school}
              className="edu-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.12 }}
            >
              {/* Logo */}
              <div className="edu-logo-wrap">
                <img
                  src={item.logo}
                  alt={item.logoAlt}
                  className="edu-logo"
                />
              </div>

              {/* Connector line (hidden on last item) */}
              {i < EDUCATION.length - 1 && (
                <div className="edu-connector" aria-hidden="true" />
              )}

              {/* Content */}
              <div className="edu-card__body">
                <div className="edu-card__top">
                  <div>
                    <span className={`edu-badge ${item.type === 'cert' ? 'edu-badge--cert' : ''}`}>
                      {item.type === 'cert' ? 'Certificate' : 'Degree'}
                    </span>
                    <h3 className="edu-school">{item.school}</h3>
                    <p className="edu-degree">{item.degree}</p>
                  </div>
                  {item.period && (
                    <span className="edu-period">{item.period}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ Footer ═════════════════════════════════════════════════════════════ */}
      <footer className="site-footer">
        {/* Top divider */}
        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-inner">
          {/* Brand */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="footer-name">Zaurez Alam</span>
            <span className="footer-role">FrontEnd/CMS Developer</span>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="footer-socials"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="footer-socials__label">Socials &amp; Contact</p>
            <div className="footer-links">
              {SOCIALS.map(({ icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-link"
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  aria-label={label}
                >
                  <span className="footer-link__icon">{icon}</span>
                  <span className="footer-link__label">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <span className="footer-copy">
              © {new Date().getFullYear()} Zaurez Alam. All rights reserved.
            </span>
            <span className="footer-made">
              Designed &amp; built by Zaurez
            </span>
          </motion.div>
        </div>
      </footer>
    </>
  );
}