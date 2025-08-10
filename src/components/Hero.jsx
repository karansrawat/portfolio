import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

const Hero = ({ theme }) => {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const fullText = "Hey, I'm Karan Singh Rawat"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="h-screen flex items-center justify-center text-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl px-6 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <Sparkles className="mx-auto text-yellow-400 mb-4" size={48} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-4xl md:text-6xl font-extrabold mb-6 ${isTyping ? 'typing-cursor' : ''}`}
        >
          {text}
          <motion.span
            className="gradient-text block mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            Software Developer
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="text-xl md:text-2xl font-light text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          A passionate developer crafting engaging experiences for the web with{' '}
          <motion.span
            className="text-blue-400 font-semibold"
            animate={{ color: ['#60a5fa', '#a78bfa', '#f472b6', '#60a5fa'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            modern technologies
          </motion.span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(102, 126, 234, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300"
          >
            See My Work
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero