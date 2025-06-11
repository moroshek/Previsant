import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Animation */}
            <div className="relative mb-8">
              <motion.h1 
                className="text-[150px] md:text-[200px] font-bold text-gray-200 select-none"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                404
              </motion.h1>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Search className="w-20 h-20 md:w-24 md:h-24 text-primary" />
              </motion.div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
              We couldn't find the page you're looking for. It might have been moved, 
              deleted, or perhaps it never existed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700"
                asChild
              >
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go to Homepage
                </Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 pt-16 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Helpful Links
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link 
                  to="/#about" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Services
                </Link>
                <Link 
                  to="/insights" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Insights
                </Link>
                <Link 
                  to="/#contact" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default NotFound