import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import useSmartSticky from '@/hooks/useSmartSticky'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const { isVisible, isSticky } = useSmartSticky()

  // For resource pages, link back to homepage sections
  const isResourcePage = location.pathname.includes('/insights/')
  
  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(`#${currentSection}`)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isSticky 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-white/80 backdrop-blur-sm",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container-responsive">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link 
                to="/" 
                className="flex items-center"
              >
                <img 
                  src="/logo.svg" 
                  alt="Previsάnt Insights - Data & Analytics Consulting" 
                  className="h-7 sm:h-8 md:h-10 w-auto"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item, index) => {
                const isAnchorLink = item.href.includes('#')
                const isCurrentPage = location.pathname === item.href
                
                if (isAnchorLink) {
                  // For anchor links (About, Contact)
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                        location.pathname === '/' && activeSection === `#${item.href.split('#')[1]}`
                          ? "text-primary bg-primary/10"
                          : "text-gray-700 hover:text-primary hover:bg-gray-50"
                      )}
                      onClick={(e) => {
                        // If not on homepage, navigate to homepage first
                        if (location.pathname !== '/') {
                          e.preventDefault()
                          window.location.href = item.href
                        }
                      }}
                    >
                      {item.name}
                    </motion.a>
                  )
                }
                
                // For regular routes (Services, Industries, Insights)
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 block",
                        isCurrentPage
                          ? "text-primary bg-primary/10"
                          : "text-gray-700 hover:text-primary hover:bg-gray-50"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navItems.length * 0.05 }}
                className="ml-4"
              >
                <Button 
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => {
                    if (location.pathname !== '/') {
                      window.location.href = '/#contact'
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Get a Consultation
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-8">
                  <img 
                    src="/logo.svg" 
                    alt="Previsάnt Insights Logo" 
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const isAnchorLink = item.href.includes('#')
                    const isCurrentPage = location.pathname === item.href
                    
                    if (isAnchorLink) {
                      // For anchor links (About, Contact)
                      return (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200",
                            location.pathname === '/' && activeSection === `#${item.href.split('#')[1]}`
                              ? "bg-primary/10 text-primary"
                              : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                          )}
                          onClick={(e) => {
                            setIsOpen(false)
                            // If not on homepage, navigate to homepage first
                            if (location.pathname !== '/') {
                              e.preventDefault()
                              window.location.href = item.href
                            }
                          }}
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight className="h-4 w-4 opacity-50" />
                        </motion.a>
                      )
                    }
                    
                    // For regular routes (Services, Industries, Insights)
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200",
                            isCurrentPage
                              ? "bg-primary/10 text-primary"
                              : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight className="h-4 w-4 opacity-50" />
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Button 
                    className="w-full py-4 text-base bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 shadow-lg"
                    onClick={() => {
                      setIsOpen(false)
                      if (location.pathname !== '/') {
                        window.location.href = '/#contact'
                      } else {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    Get a Consultation
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-gray-200"
                >
                  <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
                  <a 
                    href="mailto:info@previsant.com" 
                    className="text-primary font-medium hover:underline"
                  >
                    info@previsant.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation