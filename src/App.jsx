import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ParticleBackground from './components/ParticleBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import CursorTrail from './components/CursorTrail'
import ScrollProgress from './components/ScrollProgress'
import ThemeToggle from './components/ThemeToggle'
import MagneticElements from './components/MagneticElements'

function App() {
  const [theme, setTheme] = useState('dark')
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold gradient-text"
          >
            Loading Experience...
          </motion.h2>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-500`}>
      <ParticleBackground />
      <CursorTrail />
      <ScrollProgress />
      <MagneticElements />
      
      <Header theme={theme} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <Projects theme={theme} />
        <Skills theme={theme} />
        <Resume theme={theme} />
        <Contact theme={theme} />
      </main>
      
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center py-8 text-sm opacity-60"
      >
        © {new Date().getFullYear()} KARAN. Crafted with passion and infinite coffee.
      </motion.footer>
    </div>
  )
}

export default App