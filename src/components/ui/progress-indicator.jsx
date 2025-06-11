import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const ProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const sections = [
    { id: 'hero', name: 'Home', icon: '🏠' },
    { id: 'about', name: 'About', icon: '📖' },
    { id: 'services', name: 'Services', icon: '🚀' },
    { id: 'industries', name: 'Industries', icon: '🏢' },
    { id: 'resources', name: 'Resources', icon: '📚' },
    { id: 'blog', name: 'Insights', icon: '💡' },
    { id: 'contact', name: 'Contact', icon: '📧' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const progress = (scrolled / documentHeight) * 100
      setScrollProgress(progress)

      // Show/hide based on scroll position
      setIsVisible(scrolled > 300)

      // Determine active section
      let currentSection = ''
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentSection = section.id
            break
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const targetPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        >
          {/* Progress Bar */}
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-blue-600"
                style={{ height: `${scrollProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Section Indicators */}
            <div className="space-y-6">
              {sections.map((section, index) => {
                const isActive = activeSection === section.id
                const isPassed = scrollProgress > (index / (sections.length - 1)) * 100

                return (
                  <motion.button
                    key={section.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "group flex items-center gap-3 transition-all duration-300",
                      isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                    )}
                  >
                    {/* Dot Indicator */}
                    <div className="relative">
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full border-2 transition-all duration-300",
                          isActive
                            ? "border-primary bg-primary scale-125"
                            : isPassed
                            ? "border-primary bg-white"
                            : "border-gray-300 bg-white"
                        )}
                      />
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          style={{ opacity: 0.3 }}
                        />
                      )}
                    </div>

                    {/* Label */}
                    <div
                      className={cn(
                        "bg-white px-3 py-1.5 rounded-lg shadow-md transition-all duration-300",
                        "opacity-0 group-hover:opacity-100 pointer-events-none",
                        isActive && "opacity-100"
                      )}
                    >
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <span className="text-sm">{section.icon}</span>
                        <span className="text-sm font-medium text-gray-700">
                          {section.name}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Scroll Progress Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center"
          >
            <div className="bg-white rounded-lg shadow-md px-3 py-2">
              <span className="text-xs font-medium text-gray-500">Progress</span>
              <div className="text-lg font-bold gradient-text">
                {Math.round(scrollProgress)}%
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProgressIndicator