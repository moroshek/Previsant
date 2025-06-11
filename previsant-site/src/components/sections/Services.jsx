import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Shield, FileCheck, Brain, Users, ArrowRight, Database, TrendingUp, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Services = () => {
  const dataServices = [
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: 'Data & Analytics Strategy',
      description: 'Transform your data into a strategic differentiator with our comprehensive approach.',
      features: [
        'Business-aligned roadmap development',
        'Analytics maturity assessment',
        'ROI-driven implementation planning'
      ]
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: 'Insights as a Service',
      description: 'Cloud-based platform delivering ML/AI insights without the complexity.',
      features: [
        'Insights at Scale for ongoing value',
        'Low barrier to entry with Learn-in approach',
        'Talent risk mitigation model'
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: 'Industry Solutions',
      description: 'Specialized analytics for Healthcare, Insurance, and Financial Services.',
      features: [
        'Payment Integrity analytics',
        'Medical Trend analysis',
        'Price and Lead Optimization'
      ]
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      title: 'Innovation Enablement',
      description: 'Accelerate innovation with our secure, scalable analytics platform.',
      features: [
        'Rapid prototype development',
        'Scalable cloud infrastructure',
        'Continuous innovation support'
      ]
    }
  ]

  const complianceServices = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: 'Risk Assessment',
      description: 'Comprehensive evaluation of operational, regulatory, and strategic risks.',
      features: [
        'Risk identification and prioritization',
        'Impact analysis and mitigation strategies',
        'Continuous monitoring frameworks'
      ]
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: 'Compliance Programs',
      description: 'Custom compliance solutions tailored to your industry regulations.',
      features: [
        'Regulatory requirement mapping',
        'Policy and procedure development',
        'Compliance audit preparation'
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Advisory & Mentoring',
      description: 'Ongoing strategic guidance from experienced consultants.',
      features: [
        'Executive advisory services',
        'D&A capability building',
        'Strategic transformation support'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services & Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From data strategy to compliance, we enable organizations through their 
            complete analytics journey while ensuring risk mitigation and regulatory adherence.
          </p>
        </motion.div>

        {/* Data & Analytics Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Data & Analytics Solutions
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {dataServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="ghost" 
                      className="w-full mt-6 group-hover:text-primary"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Risk & Compliance Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Risk & Compliance Services
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {complianceServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="ghost" 
                      className="w-full mt-6 group-hover:text-primary"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services