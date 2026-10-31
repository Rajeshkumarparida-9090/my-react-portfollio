import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaHeart } from 'react-icons/fa'
import { FiMail, FiPhone, FiArrowUp } from 'react-icons/fi'

const socials = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/rajesh-kumar-parida-a4999a16b/', label: 'LinkedIn' },
  { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/919337179974', label: 'WhatsApp' },
  { icon: <FaInstagram size={18} />, href: 'https://instagram.com/', label: 'Instagram' },
]

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-black text-xs">RK</span>
                </div>
                <span className="font-black text-xl">
                  <span className="gradient-text">Rajesh</span>
                  <span className="text-white">.dev</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer crafting modern, scalable web applications with clean code and great UX.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 border border-white/8 hover:border-cyan-500/30 transition-all"
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:kumarrajeshparida08@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <FiMail size={14} /> kumarrajeshparida08@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919337179974"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <FiPhone size={14} /> +91 9337179974
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919337179974"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FaWhatsapp size={14} /> Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
          <p className="text-gray-500 text-sm flex items-center gap-1.5 flex-wrap">
            Made with <FaHeart className="text-red-400" size={12} /> by{' '}
            <span className="text-cyan-400 font-medium">Rajesh Kumar</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 border border-white/8 hover:border-cyan-500/30 transition-all"
            title="Back to top"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
