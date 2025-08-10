import React, { useEffect } from 'react'

const MagneticElements = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const magneticElements = document.querySelectorAll('.magnetic-element')
      
      magneticElements.forEach(element => {
        const rect = element.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const deltaX = e.clientX - centerX
        const deltaY = e.clientY - centerY
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        
        if (distance < 100) {
          const strength = (100 - distance) / 100
          const moveX = deltaX * strength * 0.3
          const moveY = deltaY * strength * 0.3
          
          element.style.transform = `translate(${moveX}px, ${moveY}px)`
        } else {
          element.style.transform = 'translate(0px, 0px)'
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return null
}

export default MagneticElements