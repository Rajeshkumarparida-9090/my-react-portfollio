import { motion } from 'framer-motion'
import { FiBriefcase, FiBook, FiAward, FiMapPin, FiGlobe, FiUser } from 'react-icons/fi'
import { HiOutlineAcademicCap } from 'react-icons/hi'

const experiences = [
  {
    role: 'Frontend Developer (React.js)',
    company: 'Oasys Tech Solutions Pvt. Ltd.',
    period: 'Feb 2025 – Present',
    current: true,
    points: [
      'Develop and maintain frontend applications using React.js, Redux Saga, Reactstrap & Bootstrap 4.',
      'Build responsive and reusable UI components for assigned projects.',
      'Integrate frontend with Laravel backend services.',
      'Implement dynamic modules, API integrations and user-facing workflows.',
    ],
  },
  {
    role: 'Frontend Developer (React.js)',
    company: 'Loop IT Methods Pvt. Ltd.',
    period: 'Aug 2023 – Jan 2025',
    current: false,
    points: [
      'Developed frontend applications using React.js, Redux Toolkit, MUI & Bootstrap 4.',
      'Built responsive interfaces and reusable React components.',
      'Integrated application workflows with MongoDB-backed services.',
      'Worked on API integration, UI development and application functionality.',
    ],
  },
  {
    role: 'Software Developer I (React.js)',
    company: 'Assystant Pvt. Ltd.',
    period: 'Sep 2021 – Aug 2023',
    current: false,
    points: [
      'Developed frontend features using React.js, props drilling, MUI & Bootstrap 4.',
      'Created responsive web pages and reusable UI components.',
      'Integrated frontend functionality with Python-based backend services.',
    ],
  },
  {
    role: 'UI Developer',
    company: 'Corporateranking Pvt. Ltd.',
    period: 'Jan 2021 – Sep 2021',
    current: false,
    points: [
      'Developed responsive web interfaces using HTML5, CSS3, JavaScript & Bootstrap 4.',
      'Translated UI requirements into browser-compatible, responsive pages.',
    ],
  },
]

const education = [
  {
    degree: 'B.Tech — Electrical Engineering',
    school: 'BCET, Baleswar',
    period: '2016 – 2019',
    grade: 'CGPA: 7.6',
  },
  {
    degree: 'Diploma — Electrical Engineering',
    school: 'Venus, Bahanaga',
    period: '2013 – 2016',
    grade: 'CGPA: 8.9',
  },
  {
    degree: 'ITI — Electrician',
    school: 'Sai ITC, Baleswar',
    period: '2010 – 2012',
    grade: '86%',
  },
]

const stats = [
  { value: '5.3', label: 'Years Experience' },
  { value: '4', label: 'Companies' },
  { value: '8+', label: 'Projects' },
  { value: '3', label: 'Languages' },
]

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function About() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ── LEFT: Bio + Info + Stats ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Bio */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-cyan-400"
                  style={{ background: 'rgba(0,212,255,0.1)' }}>
                  <FiUser size={16} />
                </div>
                <h3 className="text-lg font-bold text-white">Who am I?</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                I'm <span className="text-cyan-400 font-semibold">Rajesh Kumar Parida</span>, a Frontend
                Developer with <span className="text-white font-medium">5+ years of experience</span> designing
                and building responsive web applications. Strong expertise in React.js, Redux Toolkit, Redux Saga,
                Material UI, Reactstrap and Bootstrap 4.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mt-3">
                Experienced in REST API integration, authentication flows, lazy loading, reusable component
                architecture, and cross-browser compatibility. Comfortable collaborating with backend teams
                working on Laravel, Python and MongoDB.
              </p>
            </motion.div>

            {/* Quick info grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
              {[
                { icon: <FiMapPin size={15} />, label: 'Location', value: 'Baleswar, Odisha' },
                { icon: <FiGlobe size={15} />, label: 'Availability', value: 'Open to Work' },
                { icon: <HiOutlineAcademicCap size={15} />, label: 'Education', value: 'B.Tech (EE)' },
                { icon: <FiAward size={15} />, label: 'Experience', value: '5.3 Years' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-4 flex items-center gap-3"
                  style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="text-cyan-400">{item.icon}</div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm font-medium text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl p-4 flex items-center gap-4"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="text-xs text-gray-500 uppercase tracking-widest whitespace-nowrap">Languages</span>
              {['English', 'Hindi', 'Odia'].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 rounded-lg text-sm text-gray-300"
                  style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)' }}
                >
                  {lang}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl py-5 text-center transition-colors duration-200"
                  style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.12)' }}
                >
                  <div className="text-3xl font-black gradient-text">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Experience + Education ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-cyan-400"
                  style={{ background: 'rgba(0,212,255,0.1)' }}>
                  <FiBriefcase size={16} />
                </div>
                <h3 className="text-xl font-bold text-white">Experience</h3>
              </div>

              <div className="relative pl-5 space-y-0">
                <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-40" />

                {experiences.map((exp, i) => (
                  <motion.div key={i} variants={itemVariants} className="relative pb-7 last:pb-0">
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-3 top-2.5 w-3 h-3 rounded-full border-2"
                      style={{
                        background: exp.current ? '#00d4ff' : '#7c3aed',
                        borderColor: '#0a0a0f',
                        boxShadow: exp.current ? '0 0 10px rgba(0,212,255,0.6)' : 'none',
                      }}
                    />

                    <div
                      className="ml-4 rounded-xl p-4 transition-all duration-200 hover:border-white/15"
                      style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                        <h4 className="font-semibold text-white text-sm">{exp.role}</h4>
                        <span
                          className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                          style={
                            exp.current
                              ? { color: '#00d4ff', background: 'rgba(0,212,255,0.1)' }
                              : { color: '#a78bfa', background: 'rgba(124,58,237,0.1)' }
                          }
                        >
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-cyan-400 text-xs mb-3">{exp.company}</p>
                      <ul className="space-y-1">
                        {exp.points.map((pt, j) => (
                          <li key={j} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                            <span className="text-cyan-500 mt-0.5 flex-shrink-0">▸</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-purple-400"
                  style={{ background: 'rgba(124,58,237,0.1)' }}>
                  <FiBook size={16} />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-3">
                {education.map((ed, i) => (
                  <div
                    key={i}
                    className="rounded-xl px-5 py-4 flex items-center justify-between flex-wrap gap-2"
                    style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)' }}
                  >
                    <div>
                      <p className="font-semibold text-white text-sm">{ed.degree}</p>
                      <p className="text-purple-400 text-xs mt-0.5">{ed.school}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full">{ed.period}</span>
                      <p className="text-xs text-gray-400 mt-1">{ed.grade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
