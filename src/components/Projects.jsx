import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'

const Projects = ({ theme }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Budget Tracking System',
      description: 'Developed a Python-based Budget Tracking System to record income, categorize expenses, and monitor personal finances. Integrated real-time financial summaries and visualized spending trends using Matplotlib.',
      longDescription: 'A comprehensive financial management tool built with Python that helps users track their income and expenses. Features include real-time data visualization, expense categorization, budget alerts, and detailed financial reports. The system uses Matplotlib for creating interactive charts and graphs.',
      tech: ['Python', 'Matplotlib', 'Pandas', 'SQLite'],
      github: 'https://github.com/karansrawat/budget_tracking',
      live: null,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { stars: 15, forks: 8 }
    },
    {
      id: 2,
      title: 'Interactive Portfolio',
      description: 'A modern, interactive portfolio website built with React and advanced animations using Framer Motion.',
      longDescription: 'This portfolio showcases modern web development techniques including React hooks, Framer Motion animations, particle effects, and responsive design. Features include dark/light theme toggle, interactive elements, and smooth scrolling.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { stars: 25, forks: 12 }
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI integration for smart responses and conversation analysis.',
      longDescription: 'A sophisticated chat application that integrates AI capabilities for enhanced user experience. Features include real-time messaging, AI-powered responses, sentiment analysis, and conversation insights.',
      tech: ['Node.js', 'Socket.io', 'OpenAI API', 'MongoDB'],
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { stars: 42, forks: 18 }
    }
  ]

  return (
    <section id="projects" className="bg-white/5 py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="project-card glass-effect rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Tech Stack */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/80 text-white text-xs rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star size={14} />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} />
                      {project.stats.forks}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-blue-400 text-sm font-medium hover:underline"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects