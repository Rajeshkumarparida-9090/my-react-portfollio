import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import { toast } from 'react-toastify'

const contactInfo = [
  {
    icon: <FiMail size={18} />,
    label: 'Email',
    value: 'kumarrajeshparida08@gmail.com',
    href: 'mailto:kumarrajeshparida08@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: <FiPhone size={18} />,
    label: 'Phone',
    value: '+91 9337179974',
    href: 'tel:+919337179974',
    color: '#7c3aed',
  },
  {
    icon: <FaWhatsapp size={18} />,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/919337179974',
    color: '#25d366',
  },
  {
    icon: <FiMapPin size={18} />,
    label: 'Address',
    value: 'N.P Magura, Baleswar, Odisha 756044',
    href: null,
    color: '#f59e0b',
  },
]

const socials = [
  { icon: <FaLinkedin size={19} />, href: 'https://www.linkedin.com/in/rajesh-kumar-parida-a4999a16b/', label: 'LinkedIn', color: '#0077b5' },
  { icon: <FaGithub size={19} />, href: 'https://github.com/', label: 'GitHub', color: '#e5e7eb' },
  { icon: <FaWhatsapp size={19} />, href: 'https://wa.me/919337179974', label: 'WhatsApp', color: '#25d366' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all required fields.')
      return
    }
    setSending(true)
    const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:kumarrajeshparida08@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => {
      setSending(false)
      toast.success('Email client opened! Your message is ready to send.')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 900)
  }

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
          <h2 className="section-heading gradient-text">Get In Touch</h2>
          <div className="section-divider" />
          <p className="text-gray-400 max-w-md mx-auto text-sm">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── LEFT: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >
            {/* Intro card */}
            <div
              className="rounded-2xl p-6 space-y-3"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-3">
                <FiMessageCircle className="text-cyan-400" size={20} />
                <h3 className="text-lg font-bold text-white">Let's work together</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm always open to new projects, freelance work or full-time opportunities.
                Reach out via the form, email, phone, or WhatsApp — I typically respond within
                <span className="text-cyan-400 font-medium"> 24 hours</span>.
              </p>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactInfo.map((info) => {
                const inner = (
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}12`, color: info.color }}
                    >
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">{info.label}</p>
                      <p className="text-sm font-medium text-white break-all leading-snug mt-0.5">{info.value}</p>
                    </div>
                  </div>
                )

                return (
                  <motion.div
                    key={info.label}
                    whileHover={{ y: -4 }}
                    className="rounded-xl p-4 transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {inner}
                      </a>
                    ) : inner}
                  </motion.div>
                )
              })}
            </div>

            {/* Social row */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-gray-600 uppercase tracking-widest">Find me on</span>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: s.color,
                  }}
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-7 space-y-5"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="text-lg font-bold text-white">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name" required>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="John Doe" required
                    className="input-field"
                  />
                </Field>
                <Field label="Email Address" required>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="you@email.com" required
                    className="input-field"
                  />
                </Field>
              </div>

              <Field label="Subject">
                <input
                  type="text" name="subject" value={form.subject} onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity..."
                  className="input-field"
                />
              </Field>

              <Field label="Message" required>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required rows={6}
                  className="input-field resize-none"
                />
              </Field>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white rounded-xl disabled:opacity-60 transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
              >
                {sending ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Opening email client...</>
                ) : (
                  <><FiSend size={15} /> Send Message</>
                )}
              </motion.button>

              <p className="text-xs text-gray-600 text-center">
                Opens your default email client with the message pre-filled
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wide">
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
      {children}
    </div>
  )
}
