import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trails, setTrails] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Add new trail point
      setTrails(prev => [
        ...prev.slice(-10), // Keep only last 10 points
        {
          x: e.clientX,
          y: e.clientY,
          id: Date.now()
        }
      ])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: trail.x - 4,
              top: trail.y - 4,
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default CursorTrail