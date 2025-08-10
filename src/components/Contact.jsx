import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Linkedin, Github, Mail, MapPin, Phone, CheckCircle } from 'lucide-react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, set } from 'firebase/database'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0DBdl4RouUy5-5MhkMSB9NXHcZ1YhSwE",
  authDomain: "resumedata-3c6b7.firebaseapp.com",
  databaseURL: "https://resumedata-3c6b7-default-rtdb.firebaseio.com",
  projectId: "resumedata-3c6b7",
  storageBucket: "resumedata-3c6b7.appspot.com",
  messagingSenderId: "377254735034",
  appId: "1:377254735034:web:d9f978c6cb3670cb0a2683"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

const Contact = ({ theme }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const contactRef = ref(db, 'contacts')
      const newContact = push(contactRef)

      await set(newContact, {
        ...formData,
        timestamp: new Date().toISOString()
      })

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Error sending message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/karan-singh-rawat/',
      icon: Linkedin,
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/karansrawat',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'Email',
      url: 'mailto:karan@example.com',
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ]

  return (
    <section id="contact" className="bg-white/5 py-24 border-t border-white/10" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-4 gradient-text">Let's Connect</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have an exciting project in mind or just want to say hi? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-2xl font-bold mb-6">Get in Touch</h4>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and development.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 glass-effect rounded-xl"
              >
                <MapPin className="text-blue-400" size={24} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-400">India</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 glass-effect rounded-xl"
              >
                <Mail className="text-green-400" size={24} />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400">karan@example.com</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 glass-effect rounded-xl"
              >
                <Phone className="text-purple-400" size={24} />
                <div>
                  <div className="font-semibold">Response Time</div>
                  <div className="text-gray-400">Within 24 hours</div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Connect on Social</h5>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 glass-effect rounded-xl transition-colors ${social.color}`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label htmlFor="message" className="block text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-xl shadow-lg flex items-center gap-3 z-50"
            >
              <CheckCircle size={24} />
              <div>
                <div className="font-semibold">Message Sent!</div>
                <div className="text-sm opacity-90">I'll get back to you soon.</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Contact