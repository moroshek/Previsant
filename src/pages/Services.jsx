import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Shield, FileCheck, Brain, Users, ArrowRight, Database, TrendingUp, Cloud, Sparkles, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import SEO from '@/components/SEO'

const ServicesPage = () => {
  const dataServices = [
    {
      icon: Database,
      title: 'Data & Analytics Strategy',
      description: 'Transform your data into a strategic differentiator with our comprehensive approach.',
      features: [
        'Business-aligned roadmap development',
        'Analytics maturity assessment',
        'ROI-driven implementation planning'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Insights as a Service',
      description: 'Cloud-based platform delivering ML/AI insights without the complexity.',
      features: [
        'Insights at Scale for ongoing value',
        'Low barrier to entry with Learn-in approach',
        'Talent risk mitigation model'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Industry Solutions',
      description: 'Specialized analytics for Healthcare, Insurance, and Financial Services.',
      features: [
        'Payment Integrity analytics',
        'Medical Trend analysis',
        'Price and Lead Optimization'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Cloud,
      title: 'Innovation Enablement',
      description: 'Accelerate innovation with our secure, scalable analytics platform.',
      features: [
        'Rapid prototype development',
        'Scalable cloud infrastructure',
        'Continuous innovation support'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const complianceServices = [
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive evaluation of operational, regulatory, and strategic risks.',
      features: [
        'Risk identification and prioritization',
        'Impact analysis and mitigation strategies',
        'Continuous monitoring frameworks'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: FileCheck,
      title: 'Compliance Programs',
      description: 'Custom compliance solutions tailored to your industry regulations.',
      features: [
        'Regulatory requirement mapping',
        'Policy and procedure development',
        'Compliance audit preparation'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Advisory & Mentoring',
      description: 'Ongoing strategic guidance from experienced consultants.',
      features: [
        'Executive advisory services',
        'D&A capability building',
        'Strategic transformation support'
      ],
      color: 'from-amber-500 to-orange-500'
    }
  ]

  return (
    <>
      <SEO 
        title="Services - Previsant Insights"
        description="Comprehensive data analytics, risk assessment, and compliance services for Healthcare, Insurance, and Financial Services organizations."
      />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Our Services
              </motion.span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transforming Data into
                <span className="block gradient-text">Competitive Advantage</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                From strategy to implementation, we deliver end-to-end solutions that enable 
                organizations to harness the full power of their data while ensuring compliance and risk mitigation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Data & Analytics Services */}
        <section className="section-padding">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <div className="flex items-center justify-center gap-4 mb-12">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-0.5 bg-gradient-to-r from-transparent to-primary"
                />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                  Data & Analytics Excellence
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-0.5 bg-gradient-to-l from-transparent to-primary"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                {dataServices.map((service, index) => (
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
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-lg pointer-events-none">
                        <div className={`absolute inset-[-1px] bg-gradient-to-br ${service.color} rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      </div>
                      
                      <CardHeader className="relative z-10 pb-2">
                        {/* Icon container */}
                        <div className="mb-6 relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                          <motion.div 
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                            className="relative w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                          >
                            <service.icon className="w-8 h-8 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                          </motion.div>
                        </div>
                        
                        <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 line-clamp-2">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="relative z-10 pt-2">
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start gap-3 group/item"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                            >
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                              <span className="text-sm text-gray-600 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <Button 
                          variant="ghost" 
                          className="w-full group/btn hover:bg-primary hover:text-white transition-all duration-300"
                          onClick={() => {
                            window.location.href = '/#contact'
                          }}
                        >
                          <span>Explore Solution</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Risk & Compliance Services */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-4 mb-12">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-0.5 bg-gradient-to-r from-transparent to-primary"
                />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                  Risk & Compliance Expertise
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-0.5 bg-gradient-to-l from-transparent to-primary"
                />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {complianceServices.map((service, index) => (
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
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-lg pointer-events-none">
                        <div className={`absolute inset-[-1px] bg-gradient-to-br ${service.color} rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      </div>
                      
                      <CardHeader className="relative z-10 pb-2">
                        {/* Icon container */}
                        <div className="mb-6 relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                          <motion.div 
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                            className="relative w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                          >
                            <service.icon className="w-8 h-8 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                          </motion.div>
                        </div>
                        
                        <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="relative z-10 pt-2">
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start gap-3 group/item"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                            >
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                              <span className="text-sm text-gray-600 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <Button 
                          variant="ghost" 
                          className="w-full group/btn hover:bg-primary hover:text-white transition-all duration-300"
                          onClick={() => {
                            window.location.href = '/#contact'
                          }}
                        >
                          <span>Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-20 text-center"
            >
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 shadow-xl hover:shadow-2xl hover-lift"
                  onClick={() => {
                    window.location.href = '/#contact'
                  }}
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-6 text-lg border-2 hover-lift"
                  onClick={() => {
                    window.location.href = '/industries'
                  }}
                >
                  View Industry Solutions
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ServicesPage