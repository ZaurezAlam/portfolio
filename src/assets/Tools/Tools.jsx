import React from 'react';
import { motion } from 'framer-motion';
import Html     from '../../assets/Logos/html.png';
import Css      from '../../assets/Logos/css.png';
import js       from '../../assets/Logos/js.png';
import react    from '../../assets/Logos/react.png';
import tailwind from '../../assets/Logos/tailwind.png';
import mui      from '../../assets/Logos/mui.png';
import vercel   from '../../assets/Logos/vercel.png';
import python   from '../../assets/Logos/python.png';
import django    from '../../assets/Logos/django.png';
import yolo      from '../../assets/Logos/yolo.png';
import shopify   from '../../assets/Logos/shopify.png';
import wordpress from '../../assets/Logos/wordpress.png';
import hostinger from '../../assets/Logos/hostinger.png';
import './Tools.css';

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    label: 'Frontend',
    tools: [
      { name: 'HTML',          src: Html     },
      { name: 'CSS',           src: Css      },
      { name: 'JavaScript',    src: js       },
      { name: 'React',         src: react    },
      { name: 'Tailwind CSS',  src: tailwind },
      { name: 'Material UI',   src: mui      },
    ],
  },
  {
    label: 'Backend & ML',
    tools: [
      { name: 'Python',  src: python  },
      { name: 'Django',  src: django  },
      { name: 'YOLO',    src: yolo    },
    ],
  },
  {
    label: 'E-Commerce & Hosting',
    tools: [
      { name: 'Shopify',    src: shopify   },
      { name: 'WordPress',  src: wordpress },
      { name: 'Hostinger',  src: hostinger },
      { name: 'Vercel',  src: vercel  },
    ],
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 20, scale: 0.9 },
  visible:  { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Single tool chip ─────────────────────────────────────────────────────────
const ToolChip = ({ name, src }) => (
  <motion.div
    className="tool-chip"
    variants={itemVariants}
    whileHover={{ y: -5, scale: 1.06 }}
    transition={{ duration: 0.22 }}
  >
    <div className="tool-chip__icon">
      <img src={src} alt={name} className="tool-img" />
    </div>
    <span className="tool-chip__name">{name}</span>
  </motion.div>
);

// ─── Component ────────────────────────────────────────────────────────────────
export default function Tools() {
  return (
    <section className="tools-section" id="skills">
      {/* Ambient glow */}
      <div className="tools-glow" aria-hidden="true" />

      {/* Section heading */}
      <motion.div
        className="tools-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="tools-eyebrow">My Stack</span>
        <h2 className="tools-title">Languages &amp; Frameworks</h2>
      </motion.div>

      {/* Categories */}
      <div className="tools-categories">
        {CATEGORIES.map(({ label, tools }) => (
          <div className="tools-category" key={label}>
            {/* Category label */}
            <motion.p
              className="tools-category__label"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {label}
            </motion.p>

            {/* Grid of chips */}
            <motion.div
              className="tools-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {tools.map((tool) => (
                <ToolChip key={tool.name} {...tool} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}