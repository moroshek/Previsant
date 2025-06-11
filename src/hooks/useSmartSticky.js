import { useState, useEffect, useRef } from 'react'

const useSmartSticky = (threshold = 5) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isSticky, setIsSticky] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          
          // Check if we should show sticky styling
          setIsSticky(currentScrollY > 20)
          
          // Only hide/show after passing threshold
          if (Math.abs(currentScrollY - lastScrollY.current) > threshold) {
            // Scrolling down
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
              setIsVisible(false)
            } 
            // Scrolling up
            else {
              setIsVisible(true)
            }
            
            lastScrollY.current = currentScrollY
          }
          
          ticking.current = false
        })
        
        ticking.current = true
      }
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      
      // Initial check
      handleScroll()
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [threshold])

  return { isVisible, isSticky }
}

export default useSmartSticky