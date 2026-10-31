import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
  FaLinkedin, FaWhatsapp, FaPython
} from 'react-icons/fa'
import {
  SiMongodb, SiRedux, SiSass, SiJavascript,
  SiBootstrap, SiWebpack, SiNpm, SiLaravel
} from 'react-icons/si'
import { SiMui } from 'react-icons/si'
import { FiArrowRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import ProfileImg from "../assets/rajesh.png"

const roles = [
  'Frontend Developer',
  'React.js Specialist',
  'Redux Toolkit Expert',
  'UI Component Builder',
]

const techIcons = [
  { icon: <FaReact />, color: '#61dafb', label: 'React.js' },
  { icon: <SiJavascript />, color: '#f7df1e', label: 'JavaScript' },
  { icon: <SiRedux />, color: '#764abc', label: 'Redux' },
  { icon: <SiMui />, color: '#007fff', label: 'MUI' },
  { icon: <SiBootstrap />, color: '#7952b3', label: 'Bootstrap' },
  { icon: <FaHtml5 />, color: '#e34c26', label: 'HTML5' },
  { icon: <FaCss3Alt />, color: '#264de4', label: 'CSS3' },
  { icon: <SiSass />, color: '#cd6799', label: 'SASS' },
  { icon: <SiMongodb />, color: '#47a248', label: 'MongoDB' },
  { icon: <SiLaravel />, color: '#ff2d20', label: 'Laravel' },
  { icon: <FaPython />, color: '#3776ab', label: 'Python' },
  { icon: <FaGitAlt />, color: '#f05032', label: 'Git' },
  { icon: <SiWebpack />, color: '#8dd6f9', label: 'Webpack' },
  { icon: <SiNpm />, color: '#cb3837', label: 'NPM' },
]

const socials = [
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/rajesh-kumar-parida-a4999a16b/',
    label: 'LinkedIn',
    color: '#0077b5',
  },
  {
    icon: <FaGithub />,
    href: 'https://github.com/',
    label: 'GitHub',
    color: '#ffffff',
  },
  {
    icon: <FaWhatsapp />,
    href: 'https://wa.me/919337179974',
    label: 'WhatsApp',
    color: '#25d366',
  },
]

function Typewriter({ texts }) {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[idx]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else {
      setDeleting(false)
      setIdx((p) => (p + 1) % texts.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, idx, texts])

  return <span className="text-cyan-400 typewriter">{displayed}</span>
}

export default function Hero() {
  const navigate = useNavigate()
  const [imgError, setImgError] = useState(false)

  return (
    <div className="min-h-[calc(100vh-88px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT: Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="space-y-7"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            {/* Name */}
            <div className="space-y-1">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg font-medium"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-none tracking-tight"
              >
                <span className="gradient-text">Rajesh</span>
                <br />
                <span className="text-white">Kumar Parida</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl sm:text-3xl font-semibold text-gray-300 h-10 flex items-center gap-2"
              >
                <span className="text-gray-500">{'<'}</span>
                <Typewriter texts={roles} />
                <span className="text-gray-500">{'/>'}</span>
              </motion.div>
            </div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-base leading-relaxed max-w-xl"
            >
              Frontend Developer with <span className="text-cyan-400 font-semibold">5+ years</span> of
              experience building responsive web applications. Specialising in React.js, Redux Toolkit,
              MUI and REST API integration — delivering clean, performant and user-friendly UIs.
            </motion.p>

            {/* Quick contact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500"
            >
              <a href="mailto:kumarrajeshparida08@gmail.com" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <FiMail size={13} /> kumarrajeshparida08@gmail.com
              </a>
              <a href="tel:+919337179974" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <FiPhone size={13} /> +91 9337179974
              </a>
              <span className="flex items-center gap-1.5">
                <FiMapPin size={13} /> Baleswar, Odisha
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(0,212,255,0.4)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate('/projects')}
                className="px-8 py-3 text-sm font-bold text-white rounded-xl"
                style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)' }}
              >
                View My Work
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://wa.me/919337179974"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 text-sm font-bold text-white rounded-xl border border-white/12 hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all duration-200 flex items-center gap-2"
              >
                <FaWhatsapp className="text-green-400" /> Hire Me
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
              className="flex items-center gap-3"
            >
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-lg text-gray-400 hover:text-white transition-colors"
                  style={{ '--hover-color': s.color }}
                  title={s.label}
                >
                  <span style={{ color: s.color }}>{s.icon}</span>
                </motion.a>
              ))}
              <span className="text-gray-600 text-xs ml-1">5+ yrs exp · React.js</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Avatar + Stats + Tech strip ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Avatar */}
            <div className="relative float-anim">
              {/* Outer glow ring */}
              <div
                className="w-64 h-64 rounded-full flex items-center justify-center"
                style={{
                  background: 'conic-gradient(from 0deg, #00d4ff, #7c3aed, #00d4ff)',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                  <div
                    className="w-56 h-56 rounded-full overflow-hidden flex flex-col items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.12))',
                      border: '1px solid rgba(0,212,255,0.2)',
                    }}
                  >
                    {!imgError ? (
                      <img
                        src={ProfileImg}
                        alt="Rajesh Kumar Parida"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <>
                        <span className="text-7xl font-black gradient-text leading-none">RK</span>
                        <span className="text-xs text-gray-500 mt-1 tracking-widest uppercase">Parida</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Badge: exp */}
              <div
                className="absolute -top-3 -right-6 w-24 h-16 rounded-2xl flex flex-col items-center justify-center"
                style={{
                  background: 'rgba(10,10,22,0.88)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  boxShadow: '0 0 20px rgba(0,212,255,0.15)',
                }}
              >
                <span className="text-2xl font-black gradient-text">5+</span>
                <span className="text-[10px] text-gray-400 leading-tight text-center">Years Exp.</span>
              </div>

              {/* Badge: projects */}
              <div
                className="absolute -bottom-3 -left-6 w-24 h-16 rounded-2xl flex flex-col items-center justify-center"
                style={{
                  background: 'rgba(10,10,22,0.88)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  boxShadow: '0 0 20px rgba(124,58,237,0.15)',
                }}
              >
                <span className="text-2xl font-black text-purple-400">8+</span>
                <span className="text-[10px] text-gray-400 leading-tight text-center">Projects</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {[
                { value: '4', label: 'Companies' },
                { value: '5+', label: 'Years' },
                { value: '8+', label: 'Projects' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl py-3 text-center"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="text-xl font-black gradient-text">{s.value}</div>
                  <div className="text-[11px] text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Tech icon scrolling strip */}
            <div className="w-full max-w-sm overflow-hidden">
              <p className="text-center text-gray-600 text-[10px] mb-3 uppercase tracking-widest">Tech Stack</p>
              <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin">
                {techIcons.map((t) => (
                  <motion.div
                    key={t.label}
                    whileHover={{ scale: 1.18, y: -4 }}
                    className="flex-shrink-0 flex flex-col items-center gap-1 cursor-default group"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: t.color,
                      }}
                    >
                      {t.icon}
                    </div>
                    <span className="text-[9px] text-gray-600 group-hover:text-gray-300 transition-colors">{t.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom quick-nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-6 mt-14"
        >
          {[
            { label: 'About Me', path: '/about' },
            { label: 'My Skills', path: '/skills' },
            { label: 'Contact', path: '/contact' },
          ].map((item) => (
            <motion.button
              key={item.path}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors uppercase tracking-widest"
            >
              {item.label} <FiArrowRight size={12} />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
