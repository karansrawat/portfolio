import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Heart, Coffee } from 'lucide-react'

const About = ({ theme }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="container mx-auto py-24 px-6" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-4xl font-bold mb-6 gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.h3>
          
          <motion.p
            className="text-gray-400 leading-relaxed mb-6 text-lg"
            variants={itemVariants}
          >
            I'm a creative problem‑solver with a love for clean code and intuitive design. 
            With experience ranging from backend APIs to pixel‑perfect front‑end interfaces, 
            I bridge the gap between functionality and aesthetics.
          </motion.p>
          
          <motion.p
            className="text-gray-400 mb-8 text-lg"
            variants={itemVariants}
          >
            When I'm not coding, you'll find me exploring new tech, contributing to open‑source, 
            or perfecting the ultimate coffee brew.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 mb-8"
          >
            {[
              { icon: Code, label: 'Projects', value: '50+' },
              { icon: Heart, label: 'Happy Clients', value: '25+' },
              { icon: Coffee, label: 'Cups of Coffee', value: '∞' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center glass-effect rounded-xl p-4"
              >
                <stat.icon className="mx-auto mb-2 text-blue-400" size={24} />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
            <img
              src="/picture.jpg"
              alt="Karan Singh Rawat"
              className="relative w-80 h-80 object-cover rounded-full ring-4 ring-white/20 shadow-2xl"
            />
            
            {/* Floating Icons */}
            {[
              { icon: '💻', delay: 0, x: -50, y: -30 },
              { icon: '🚀', delay: 1, x: 50, y: -50 },
              { icon: '⚡', delay: 2, x: -30, y: 50 },
              { icon: '🎯', delay: 3, x: 40, y: 40 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute text-2xl"
                style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)` }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: item.delay
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About