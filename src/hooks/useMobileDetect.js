import { useState, useEffect } from 'react'

// Hook to detect mobile devices and screen sizes
export const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setScreenSize({ width, height: window.innerHeight })
      
      // Tailwind breakpoints
      setIsMobile(width < 640) // sm
      setIsTablet(width >= 640 && width < 1024) // sm to lg
      setIsDesktop(width >= 1024) // lg+
    }

    // Check on mount
    checkDevice()

    // Add event listener
    window.addEventListener('resize', checkDevice)

    // Cleanup
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return {
    isMobile,
    isTablet,
    isDesktop,
    screenSize,
    isTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }
}

// Utility to detect if user prefers reduced motion
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}