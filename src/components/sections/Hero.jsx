import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, BarChart3, Sparkles, Database, Brain } from 'lucide-react'
import useParallax from '@/hooks/useParallax'

const Hero = () => {
  const parallaxSlow = useParallax(0.3)
  const parallaxMedium = useParallax(0.5)
  const parallaxFast = useParallax(0.7)
  const features = [
    { icon: Database, text: 'Data & Analytics Strategy' },
    { icon: Brain, text: 'AI-Powered Insights Platform' },
    { icon: Sparkles, text: 'Risk & Compliance Solutions' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg-animated" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      {/* Animated orbs with parallax */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1, y: parallaxSlow.y }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"
        style={{ transform: `translateY(${parallaxSlow.y}px)` }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1, y: parallaxMedium.y }}
        transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
        className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-blue-500 rounded-full blur-[120px]"
        style={{ transform: `translateY(${parallaxMedium.y}px)` }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1, y: parallaxFast.y }}
        transition={{ duration: 3, delay: 1, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[100px]"
        style={{ transform: `translate(-50%, calc(-50% + ${parallaxFast.y}px))` }}
      />
      
      {/* Additional subtle floating elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-[80px]"
        style={{ transform: `translateY(${parallaxMedium.y * 0.5}px)` }}
      />
      
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-[100px]"
        style={{ transform: `translateY(${parallaxSlow.y * 0.7}px)` }}
      />

      <div className="container-responsive relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight"
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
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
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 hover-lift bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 shadow-lg w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 hover-lift border-2 hover:bg-gray-50 w-full sm:w-auto"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
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

    </section>
  )
}

export default Hero