import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, Menu, X } from 'lucide-react'

const Header = ({ theme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
    { href: '#documents', label: 'Resume' },
    { href: 'https://open.spotify.com/user/karansr?si=4f0231a6eab24a19', label: 'Spotify', external: true }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-widest flex items-center gap-2 group cursor-pointer"
        >
          KARAN
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Coffee className="text-yellow-400" size={24} />
          </motion.div>
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm uppercase">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  className="relative font-bold transition-colors hover:text-blue-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-white/10"
          >
            <nav className="container mx-auto px-6 py-4">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      className="block font-bold hover:text-blue-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header