import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ResumeManager from './components/ResumeManager'

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function AnimatedRoutes({ onResumeManagerOpen }) {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [showResumeManager, setShowResumeManager] = useState(false)

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#0a0a0f]">
        {/* Background orbs — fixed, always visible */}
        <div className="bg-orb w-[500px] h-[500px] bg-cyan-500 top-[-100px] left-[-150px]" />
        <div className="bg-orb w-[400px] h-[400px] bg-purple-700 bottom-[10%] right-[-100px]" />
        <div className="bg-orb w-72 h-72 bg-blue-600 top-[50%] left-[40%]" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar onResumeManagerOpen={() => setShowResumeManager(true)} />
          <main className="flex-1">
            <AnimatedRoutes onResumeManagerOpen={() => setShowResumeManager(true)} />
          </main>
          <Footer />
        </div>

        {showResumeManager && (
          <ResumeManager onClose={() => setShowResumeManager(false)} />
        )}

        <ToastContainer
          position="bottom-right"
          theme="dark"
          toastStyle={{
            background: '#12121f',
            border: '1px solid rgba(0,212,255,0.15)',
          }}
        />
      </div>
    </BrowserRouter>
  )
}
