import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiMenu, FiX, FiUpload } from 'react-icons/fi'
import { toast } from 'react-toastify'
import ProfileImg from '../assets/rajesh.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ onResumeManagerOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleDownload = () => {
    const stored = localStorage.getItem('portfolio_resume')
    if (stored) {
      const link = document.createElement('a')
      link.href = stored
      link.download = localStorage.getItem('portfolio_resume_name') || 'Rajesh_Kumar_Parida_Resume.pdf'
      link.click()
      toast.success('Downloading resume...')
    } else {
      // fallback to public file
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'Rajesh_Kumar_Parida_Resume.pdf'
      link.click()
      toast.success('Downloading resume...')
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 flex items-start justify-between gap-3"
      >
        {/* ── LEFT: Logo block ── */}
        <NavLink to="/" className="flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5 px-3 py-2 rounded-2xl"
            style={{
              background: scrolled ? 'rgba(10,10,22,0.80)' : 'rgba(10,10,22,0.55)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
            {/* Profile image with gradient ring + fallback */}
            <div
              className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center p-[2px]"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
            >
              {!imgError ? (
                <img
                  src={ProfileImg}
                  alt="Rajesh Kumar Parida"
                  onError={() => setImgError(true)}
                  className="w-full h-full rounded-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                  <span className="text-[10px] font-black gradient-text leading-none">RK</span>
                </div>
              )}
            </div>
            <span className="font-black text-base leading-none">
              <span className="gradient-text">Rajesh</span>
              <span className="text-gray-400 font-medium text-sm">.dev</span>
            </span>
          </motion.div>
        </NavLink>

        {/* ── CENTER: Floating pill nav ── */}
        <nav
          className="hidden md:flex items-center gap-0.5 px-2 py-2 rounded-2xl flex-shrink-0"
          style={{
            background: scrolled ? 'rgba(10,10,22,0.82)' : 'rgba(10,10,22,0.55)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: scrolled
              ? '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)'
              : '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)',
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 select-none ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,212,255,0.18) 0%, rgba(124,58,237,0.18) 100%)',
                        border: '1px solid rgba(0,212,255,0.25)',
                        boxShadow: '0 0 20px rgba(0,212,255,0.12)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ── RIGHT: Action buttons ── */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          {/* <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={onResumeManagerOpen}
            className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium text-gray-400 hover:text-cyan-400 rounded-2xl transition-all duration-200"
            style={{
              background: scrolled ? 'rgba(10,10,22,0.80)' : 'rgba(10,10,22,0.55)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
            <FiUpload size={13} /> Upload CV
          </motion.button> */}

          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(0,212,255,0.45)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white rounded-2xl transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
              boxShadow: '0 4px 20px rgba(0,212,255,0.2)',
            }}
          >
            <FiDownload size={14} /> Resume
          </motion.button>
        </div>

        {/* ── MOBILE hamburger ── */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-2xl"
          style={{
            background: 'rgba(10,10,22,0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-gray-300"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.header>

      {/* ── MOBILE MENU dropdown ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed top-[76px] left-4 right-4 z-40 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(8, 8, 18, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
            }}
          >
            <div className="p-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-1 pt-2 border-t border-white/[0.06] flex flex-col gap-2">
                {/* <button
                  onClick={() => { onResumeManagerOpen(); setMobileOpen(false) }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-gray-400 hover:text-cyan-400 border border-white/8 hover:border-cyan-500/30 transition-all"
                >
                  <FiUpload size={14} /> Upload CV
                </button> */}
                <button
                  onClick={() => { handleDownload(); setMobileOpen(false) }}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
                >
                  <FiDownload size={14} /> Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[88px]" />
    </>
  )
}
