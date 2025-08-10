import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Eye } from 'lucide-react'

const Resume = ({ theme }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="documents" className="bg-white/5 py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold mb-4 gradient-text">Resume</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-effect rounded-2xl p-8 text-center">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6"
            >
              <FileText className="mx-auto text-blue-400 mb-4" size={64} />
            </motion.div>

            <h4 className="text-2xl font-bold mb-4">Karan Singh Rawat</h4>
            <p className="text-gray-400 mb-8">Software Developer Resume</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/karan_singh_rawat_resume.pdf"
                download
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(102, 126, 234, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
              >
                <Download size={20} />
                Download PDF
              </motion.a>

              <motion.a
                href="/karan_singh_rawat_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Eye size={20} />
                Preview
              </motion.a>
            </div>

            {/* Resume Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume