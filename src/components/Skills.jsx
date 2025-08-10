import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = ({ theme }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'HTML5', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', level: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Node.js', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'MongoDB', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Docker', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Git', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'C++', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'C', level: 78, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' }
      ]
    }
  ]

  return (
    <section id="skills" className="container mx-auto py-24 px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h3 className="text-4xl font-bold mb-4 gradient-text">Skills & Expertise</h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h4 className="text-xl font-bold mb-6 text-center text-blue-400">
              {category.title}
            </h4>
            
            <div className="space-y-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6"
                      />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Skill Cloud */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="text-center"
      >
        <h4 className="text-2xl font-bold mb-8">Interactive Skills</h4>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
            <motion.div
              key={skill.name}
              whileHover={{ 
                scale: 1.2, 
                rotate: Math.random() * 10 - 5,
                zIndex: 10
              }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative cursor-pointer skill-hover"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 filter drop-shadow-lg"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              
              {/* Tooltip */}
              {hoveredSkill?.name === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap backdrop-blur-sm"
                >
                  {skill.name} - {skill.level}%
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills