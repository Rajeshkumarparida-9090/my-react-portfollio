import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiCheckCircle, FiBriefcase, FiClock, FiUser } from 'react-icons/fi'
import PageWrapper from './PageWrapper'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-400">
          <p className="text-2xl mb-4">Project not found</p>
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <FiArrowLeft /> Back to Projects
          </button>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-10 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Projects
          </motion.button>

          {/* Hero banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl overflow-hidden mb-8"
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div
              className="h-56 flex items-center justify-center relative"
              style={{ background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}08 100%)` }}
            >
              <div
                className="absolute w-48 h-48 rounded-full blur-3xl opacity-20"
                style={{ background: project.color }}
              />
              <span className="text-8xl z-10">{project.emoji}</span>
            </div>
          </motion.div>

          {/* Title + meta row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{project.title}</h1>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ color: project.color, background: `${project.color}18` }}
              >
                {project.category}
              </span>
            </div>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <FiBriefcase size={14} style={{ color: project.color }} />
                {project.company}
              </span>
              <span className="flex items-center gap-1.5">
                <FiUser size={14} style={{ color: project.color }} />
                {project.role}
              </span>
              <span className="flex items-center gap-1.5">
                <FiClock size={14} style={{ color: project.color }} />
                {project.duration}
              </span>
            </div>
          </motion.div>

          {/* Two-column layout: overview + features */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">

            {/* Overview — wider column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="lg:col-span-3 rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h2
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: project.color }}
              >
                Overview
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">{project.longDesc}</p>
            </motion.div>

            {/* Features — narrower column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="lg:col-span-2 rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h2
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: project.color }}
              >
                Key Features
              </h2>
              <ul className="space-y-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <FiCheckCircle
                      size={15}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: project.color }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.26 }}
            className="rounded-2xl p-6"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <h2
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: project.color }}
            >
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-white"
                  style={{
                    background: `${project.color}18`,
                    border: `1px solid ${project.color}35`,
                    color: project.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  )
}
