import { useState, useEffect } from 'react'

const useParallax = (speed = 0.5, offset = 0) => {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const y = -(scrollY * speed) + offset

  return { y }
}

export default useParallax