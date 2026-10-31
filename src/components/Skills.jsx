import { motion } from 'framer-motion'
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaPython
} from 'react-icons/fa'
import {
  SiJavascript, SiRedux, SiSass, SiBootstrap,
  SiMongodb, SiLaravel, SiWebpack, SiNpm, SiBabel, SiLess
} from 'react-icons/si'
import { SiMui } from 'react-icons/si'
import { HiCode, HiOutlineChip } from 'react-icons/hi'
import { FiLayers } from 'react-icons/fi'

const categories = [
  {
    title: 'Frontend Core',
    accent: '#00d4ff',
    icon: <FaReact />,
    skills: [
      { name: 'React.js', icon: <FaReact />, color: '#61dafb', level: 95 },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript />, color: '#f7df1e', level: 93 },
      { name: 'JSX', icon: <HiCode />, color: '#00d4ff', level: 93 },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#e34c26', level: 96 },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4', level: 94 },
    ],
  },
  {
    title: 'State Management',
    accent: '#7c3aed',
    icon: <SiRedux />,
    skills: [
      { name: 'Redux Toolkit', icon: <SiRedux />, color: '#764abc', level: 90 },
      { name: 'Redux Saga', icon: <SiRedux />, color: '#86efac', level: 85 },
    ],
  },
  {
    title: 'UI Libraries',
    accent: '#f59e0b',
    icon: <SiMui />,
    skills: [
      { name: 'Material UI (MUI)', icon: <SiMui />, color: '#007fff', level: 88 },
      { name: 'Reactstrap', icon: <FiLayers />, color: '#7952b3', level: 87 },
      { name: 'Bootstrap 4', icon: <SiBootstrap />, color: '#7952b3', level: 92 },
    ],
  },
  {
    title: 'Styling',
    accent: '#ec4899',
    icon: <SiSass />,
    skills: [
      { name: 'SASS / SCSS', icon: <SiSass />, color: '#cd6799', level: 88 },
      { name: 'LESS', icon: <SiLess />, color: '#1d365d', level: 78 },
      { name: 'Responsive Design', icon: <HiOutlineChip />, color: '#38bdf8', level: 95 },
    ],
  },
  {
    title: 'Tools & Build',
    accent: '#10b981',
    icon: <FaGitAlt />,
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#f05032', level: 90 },
      { name: 'Webpack', icon: <SiWebpack />, color: '#8dd6f9', level: 78 },
      { name: 'Babel', icon: <SiBabel />, color: '#f9dc3e', level: 75 },
      { name: 'NPM', icon: <SiNpm />, color: '#cb3837', level: 88 },
    ],
  },
  {
    title: 'Backend & APIs',
    accent: '#ef4444',
    icon: <SiLaravel />,
    skills: [
      { name: 'REST API Integration', icon: <HiCode />, color: '#00d4ff', level: 92 },
      { name: 'Laravel', icon: <SiLaravel />, color: '#ff2d20', level: 55 },
      { name: 'Python', icon: <FaPython />, color: '#3776ab', level: 50 },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', level: 60 },
    ],
  },
]

const concepts = [
  'OOP', 'Authentication', 'Lazy Loading', 'Reusable Components',
  'Cross-Browser Compatibility', 'API Integration', 'Responsive Web Design',
  'Component Architecture', 'Code Splitting', 'Performance Optimisation',
]

function SkillBar({ skill, accent }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="rounded-xl p-4 transition-all duration-200 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span className="text-xl flex-shrink-0" style={{ color: skill.color }}>{skill.icon}</span>
        <span className="text-sm font-medium text-white flex-1 min-w-0 truncate">{skill.name}</span>
        <span className="text-xs font-bold flex-shrink-0" style={{ color: accent }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accent}60, ${accent})` }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8" style={{ background: 'rgba(255,255,255,0.008)' }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading gradient-text">Skills & Technologies</h2>
          <div className="section-divider" />
          <p className="text-gray-400 max-w-lg mx-auto text-sm">
            Technologies I use daily to build fast, accessible and maintainable web applications
          </p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: ci * 0.07 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                  style={{ background: `${cat.accent}18`, color: cat.accent }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: cat.accent }}>
                  {cat.title}
                </h3>
                <div className="flex-1 h-px" style={{ background: `${cat.accent}20` }} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} accent={cat.accent} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Concepts / soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400"
              style={{ background: 'rgba(255,255,255,0.05)' }}>
              <HiOutlineChip size={15} />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Concepts & Practices</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {concepts.map((c) => (
              <motion.span
                key={c}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-xl text-sm text-gray-300 cursor-default transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                }}
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
