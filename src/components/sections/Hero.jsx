import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, BarChart3, Sparkles, Database, Brain } from 'lucide-react'

const Hero = () => {
  const features = [
    { icon: Database, text: 'Data & Analytics Strategy' },
    { icon: Brain, text: 'AI-Powered Insights Platform' },
    { icon: Sparkles, text: 'Risk & Compliance Solutions' }
  ]

  const tagline = ['Strategy', 'Data', 'Insight', 'Action']

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg-animated" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      {/* Animated orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
        className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-blue-500 rounded-full blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 3, delay: 1, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[100px]"
      />

      <div className="container-responsive relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6 mb-8">
              {tagline.map((word, index) => (
                <React.Fragment key={word}>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                    className="text-xl md:text-2xl font-bold text-gradient-primary uppercase tracking-wider"
                  >
                    {word}
                  </motion.span>
                  {index < tagline.length - 1 && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.3, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      className="text-primary/30 hidden md:inline"
                    >
                      •
                    </motion.span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Enabling{' '}
            <span className="gradient-text">Data & Analytics</span>
            <br className="hidden sm:block" />
            <span className="text-gray-800">as a Differentiator</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From vision and strategy through innovation, enablement and ongoing mentoring. 
            Our <span className="font-semibold text-gray-800">business outcome-driven approach</span> accelerates 
            time to value through advanced analytics, ML & AI solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover-lift bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 shadow-lg"
            >
              Get a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 hover-lift border-2 hover:bg-gray-50"
            >
              Explore Our Solutions
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="glass rounded-full px-6 py-3 flex items-center gap-3 hover-lift"
              >
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="text-sm md:text-base font-medium text-gray-800">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-current rounded-full"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero