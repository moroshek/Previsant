import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const ResourceProgress = ({ contentLength = 'medium' }) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [readingTime, setReadingTime] = useState(0)
  
  // Only show for medium and long content
  const shouldShow = contentLength === 'medium' || contentLength === 'long'
  
  useEffect(() => {
    if (!shouldShow) return
    
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const progress = Math.min((scrolled / documentHeight) * 100, 100)
      setScrollProgress(progress)
      
      // Show after scrolling a bit
      setIsVisible(scrolled > 200)
      
      // Estimate reading time based on scroll position
      const wordsPerMinute = 200
      const totalWords = document.body.innerText.split(/\s+/).length
      const totalMinutes = Math.ceil(totalWords / wordsPerMinute)
      const remainingMinutes = Math.ceil((1 - progress / 100) * totalMinutes)
      setReadingTime(remainingMinutes)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [shouldShow])
  
  if (!shouldShow) return null
  
  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-blue-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      {/* Floating Progress Indicator */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-40"
          >
            <div className="bg-white rounded-full shadow-lg p-4 border border-gray-200">
              <div className="relative w-16 h-16">
                {/* Background circle */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="4"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="4"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
                    className="transition-all duration-300"
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0E4A94" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">
                    {Math.round(scrollProgress)}%
                  </span>
                  {readingTime > 0 && (
                    <span className="text-xs text-gray-500">
                      {readingTime}m left
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Scroll to top button */}
            {scrollProgress > 50 && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
                title="Back to top"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ResourceProgress