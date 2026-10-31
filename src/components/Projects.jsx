import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiLayers } from 'react-icons/fi'

const categories = ['All', 'React.js', 'Full Stack', 'UI / HTML']

const projects = [
  {
    title: 'HRMS',
    category: 'React.js',
    company: 'Oasys Tech Solutions Pvt. Ltd.',
    desc: 'Internal HR management portal covering attendance tracking, leave management, grievance handling, automated salary processing, and birthday/anniversary tracking — fully dynamic React modules with API-driven workflows.',
    tech: ['React.js', 'Redux Saga', 'Reactstrap', 'Bootstrap 4', 'Laravel API'],
    color: '#00d4ff',
    emoji: '🏢',
  },
  {
    title: 'RITES (IRCTC)',
    category: 'React.js',
    company: 'Oasys Tech Solutions Pvt. Ltd.',
    desc: 'Workshop inspection and management system for Modern Coach Factory, Raebareli. Records and monitors railway coach manufacturing quality metrics — paint quality, bogies, doors, windows and measurements.',
    tech: ['React.js', 'Redux Toolkit', 'MUI', 'Bootstrap 4', 'MongoDB API'],
    color: '#f59e0b',
    emoji: '🚂',
  },
  {
    title: 'OGB (Odisha Gramin Bank)',
    category: 'React.js',
    company: 'Oasys Tech Solutions Pvt. Ltd.',
    desc: 'Banking platform providing EMI calculators, tender information, event updates, and banking-related services for users of Odisha Gramin Bank.',
    tech: ['React.js', 'Redux Toolkit', 'MUI', 'Bootstrap 4', 'REST API'],
    color: '#10b981',
    emoji: '🏦',
  },
  {
    title: 'FrequnC',
    category: 'React.js',
    company: 'Loop IT Methods Pvt. Ltd.',
    desc: 'Event management platform covering marriage, dance and other events. Supports vendor, venue and artist user roles plus ticket sales. Built pages, integrated backend APIs, implemented authentication and lazy loading.',
    tech: ['React.js', 'MUI', 'Bootstrap 4', 'Authentication', 'Lazy Loading'],
    color: '#ec4899',
    emoji: '🎪',
  },
  {
    title: 'Spotmink',
    category: 'React.js',
    company: 'Assystant Pvt. Ltd.',
    desc: 'Real estate platform for plotting and selling land. Shows plot availability, sale status and dimensions with an integrated in-app code editor for agents.',
    tech: ['React.js', 'MUI', 'Bootstrap 4', 'Python API', 'Code Editor'],
    color: '#7c3aed',
    emoji: '🏡',
  },
  {
    title: 'Awtomated',
    category: 'Full Stack',
    company: 'Assystant Pvt. Ltd.',
    desc: 'Exam question and language translation platform (e.g. German to English) that reports translation accuracy percentage. Built forms and integrated with the Python backend.',
    tech: ['React.js', 'MUI', 'Bootstrap 4', 'Python Backend', 'Forms'],
    color: '#6366f1',
    emoji: '🤖',
  },
  {
    title: 'SpotX',
    category: 'React.js',
    company: 'Assystant Pvt. Ltd.',
    desc: 'Custom npm package created and published to npm registry. Package development covering utility functions and component distribution workflow.',
    tech: ['React.js', 'NPM', 'Webpack', 'Babel', 'Package Publishing'],
    color: '#ef4444',
    emoji: '📦',
  },
  {
    title: 'Milan Palace (Hotel)',
    category: 'UI / HTML',
    company: 'Corporateranking Pvt. Ltd.',
    desc: 'Hotel booking website with responsive frontend, room availability display and pricing interfaces built from UI requirements using plain HTML/CSS/JS.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 4', 'Responsive'],
    color: '#f97316',
    emoji: '🏨',
  },
]

function ProjectCard({ project, i }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.93 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.93 }}
      transition={{ duration: 0.35, delay: i * 0.04 }}
      whileHover={{ y: -8 }}
      className="project-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Card top banner */}
      <div
        className="h-40 flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}12 0%, ${project.color}05 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}0a 100%)` }}
        />
        {/* Glowing circle behind emoji */}
        <div
          className="absolute w-28 h-28 rounded-full blur-2xl opacity-20"
          style={{ background: project.color }}
        />
        <span className="text-6xl z-10 group-hover:scale-110 transition-transform duration-300">{project.emoji}</span>

        {/* Overlay links */}
        <div className="project-overlay absolute inset-0 z-20 bg-black/55 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex items-center justify-center gap-3">
          <motion.span
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-xs font-semibold border border-white/20 bg-white/10"
          >
            <FiLayers size={13} /> View Details
          </motion.span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start gap-2 mb-1.5">
          <h3 className="font-bold text-white text-base flex-1">{project.title}</h3>
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
            style={{ color: project.color, background: `${project.color}15` }}
          >
            {project.category}
          </span>
        </div>
        <p className="text-[11px] text-gray-500 mb-2">{project.company}</p>
        <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-md text-gray-400"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading gradient-text">Projects</h2>
          <div className="section-divider" />
          <p className="text-gray-400 max-w-lg mx-auto text-sm">
            Real-world applications I've built across enterprise, banking, real estate and event domains
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={
                active === cat
                  ? { background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }
              }
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Projects count note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-600 mt-8"
        >
          Showing {filtered.length} of {projects.length} projects
        </motion.p>
      </div>
    </div>
  )
}
