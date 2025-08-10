import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-20 right-6 z-40 p-3 glass-effect rounded-full"
    >
      <motion.div
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="text-yellow-400" size={24} />
        ) : (
          <Moon className="text-blue-400" size={24} />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle