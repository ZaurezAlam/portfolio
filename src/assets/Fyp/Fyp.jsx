import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fypimg from '../../assets/images/fyp.png';
import './Fyp.css';

const projects = [
  {
    id: 1,
    title: "Vehicle Smoke Detection System",
    description:
      "Detects smoke-emitting vehicles, captures their number plates, and logs them in real-time with visualization.",
    image: fypimg,
    github: "https://github.com/ZaurezAlam/smoke_veHicle_dashboard",
    tech: ["Python", "Computer Vision", "React", "Dashboard"],
    category: "fyp",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "A modern React portfolio showcasing skills, projects, and experience. Designed with clean UI, responsive layout, and smooth UX.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop",
    github: "https://github.com/ZaurezAlam/portfolio",
    tech: ["React", "Tailwind", "Framer Motion"],
    category: "other",
  },
  {
    id: 3,
    title: "Movie App",
    description:
      "React + Vite app displaying Top Movies of the Year via a Movie API. Browse trending titles and manage a Favourites list.",
    image:
      "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop",
    github: "https://github.com/ZaurezAlam/React_Movie_Project",
    tech: ["React", "Vite", "REST API"],
    category: "other",
  },
  {
    id: 4,
    title: "Purge Chemicals",
    description:
      "Purge Chemicals is a premier Karachi-based supplier of high-purity industrial and laboratory-grade chemical solutions engineered for professional cleaning and technical applications.",
    image:
      "https://images.unsplash.com/photo-1694230155228-cdde50083573?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/ZaurezAlam/purge-chemicals",
    tech: ["HTML", "CSS", "SHOPIFY", "LIQUID", "JAVASCRIPT"],
    category: "other",
  },
  {
    id: 5,
    title: "AI Chatbot Assistant",
    description:
      "Intelligent chatbot powered by NLP for customer support automation and query resolution.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    github: "https://github.com/ZaurezAlam/ChatBot_DeepSeek",
    tech: ["Python", "DeepSeek", "NLP"],
    category: "other",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── GitHub icon ──────────────────────────────────────────────────────────────
const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

// ─── Section heading ──────────────────────────────────────────────────────────
const SectionHeading = ({ label, title }) => (
  <motion.div
    className="projects-heading"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    <span className="projects-eyebrow">{label}</span>
    <h2 className="projects-title">{title}</h2>
  </motion.div>
);

// ─── Tech pill ────────────────────────────────────────────────────────────────
const TechPill = ({ label }) => (
  <span className="tech-pill">{label}</span>
);

export default function Projects() {
  const [openModal, setOpenModal] = useState(null);

  const fypProject    = projects.find((p) => p.category === "fyp");
  const otherProjects = projects.filter((p) => p.category === "other");
  const modalProject  = projects.find((p) => p.id === openModal);

  return (
    <section className="projects-section" id="projects">
      {/* Ambient glow */}
      <div className="projects-glow" aria-hidden="true" />

      {/* ── FYP ── */}
      <SectionHeading label="Featured Work" title="Final Year Project" />

      <motion.div
        className="fyp-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="fyp-card">
          {/* Image */}
          <button
            className="fyp-image-btn"
            onClick={() => setOpenModal(fypProject.id)}
            aria-label={`View ${fypProject.title} screenshot`}
          >
            <img
              src={fypProject.image}
              alt={fypProject.title}
              className="fyp-image"
            />
            <div className="fyp-image-overlay">
              <span className="fyp-zoom-hint">Click to expand</span>
            </div>
          </button>

          {/* Content */}
          <div className="fyp-content">
            <div className="fyp-badge">FYP</div>
            <h3 className="fyp-card-title">{fypProject.title}</h3>
            <p className="fyp-description">{fypProject.description}</p>

            <div className="fyp-pills">
              {fypProject.tech.map((t) => <TechPill key={t} label={t} />)}
            </div>

            <a
              href={fypProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              <GitHubIcon />
              View on GitHub
              <ExternalIcon />
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Other Projects ── */}
      <SectionHeading label="More Work" title="Other Projects" />

      <motion.div
        className="grid-wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {otherProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {/* Image */}
            <button
              className="project-image-btn"
              onClick={() => setOpenModal(project.id)}
              aria-label={`View ${project.title} screenshot`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-image-overlay" />
            </button>

            {/* Content */}
            <div className="project-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-pills">
                {project.tech.map((t) => <TechPill key={t} label={t} />)}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github btn-github--sm"
              >
                <GitHubIcon />
                GitHub
                <ExternalIcon />
              </a>
              {/* NEW: Conditional Live Button */}
  {(project.title === "Portfolio" || project.title === "Purge Chemicals") && (
    <a
      href={project.title === "Portfolio" ? "https://zaurezportfolio.vercel.app/" : "https://purgechemicals.com/"}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-live btn-live--sm"
    >
      <ExternalIcon />
      Live Demo
    </a>
  )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Fullscreen modal ── */}
      <AnimatePresence>
        {openModal && modalProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setOpenModal(null)}
          >
            <motion.div
              className="modal-inner"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setOpenModal(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
              <img
                src={modalProject.image}
                alt={`${modalProject.title} fullscreen`}
                className="modal-image"
              />
              <div className="modal-caption">
                <span className="modal-caption-title">{modalProject.title}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}