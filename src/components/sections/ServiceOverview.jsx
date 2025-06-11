import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Shield, Brain, TrendingUp, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const ServiceOverview = () => {
  const services = [
    {
      icon: Brain,
      title: 'Data & Analytics Excellence',
      description: 'Transform your data into strategic insights with our comprehensive analytics solutions, from strategy to implementation.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Risk & Compliance',
      description: 'Navigate complex regulatory landscapes with confidence through our tailored risk assessment and compliance programs.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Industry Solutions',
      description: 'Specialized analytics expertise for Healthcare, Insurance, and Financial Services organizations.',
      color: 'from-emerald-500 to-teal-500'
    }
  ]

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Our Services
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Comprehensive Solutions for
            <span className="block gradient-text">Data-Driven Success</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver end-to-end solutions that enable organizations to harness the full power of their data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-gray-50/50 card-shine">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10 text-center p-8">
                  {/* Icon container */}
                  <div className="mb-6 relative mx-auto">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="relative w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mx-auto"
                    >
                      <service.icon className="w-10 h-10 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                    </motion.div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Link to="/services">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 shadow-xl hover:shadow-2xl hover-lift"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceOverview