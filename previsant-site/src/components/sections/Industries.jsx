import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Activity, Shield, DollarSign, ArrowRight, CheckCircle } from 'lucide-react'

const Industries = () => {
  const industries = [
    {
      icon: <Activity className="w-12 h-12 text-primary" />,
      title: 'Healthcare',
      description: 'Transforming healthcare delivery through advanced analytics and insights',
      solutions: [
        'Payment Integrity Analytics',
        'Medical Trend Analysis',
        'Clinical Outcome Optimization',
        'Population Health Management'
      ],
      stats: 'Supporting providers managing over $50B in annual claims'
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: 'Insurance',
      description: 'Enabling smarter risk assessment and operational excellence',
      solutions: [
        'Risk & Pricing Optimization',
        'Claims Analytics',
        'Customer 360 Solutions',
        'Fraud Detection & Prevention'
      ],
      stats: 'Partnering with carriers from InsurTech to Fortune 100'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: 'Financial Services',
      description: 'Driving innovation in financial services through data-driven insights',
      solutions: [
        'Lead Optimization',
        'Customer Analytics',
        'Regulatory Compliance',
        'Risk Management Solutions'
      ],
      stats: 'Enabling digital transformation across the financial ecosystem'
    }
  ]

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep domain expertise combined with cutting-edge analytics to solve 
            industry-specific challenges and drive competitive advantage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{industry.icon}</div>
                  <CardTitle className="text-2xl mb-2">{industry.title}</CardTitle>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {industry.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 mb-6">
                    <p className="text-sm font-medium text-gray-800">{industry.stats}</p>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Explore {industry.title} Solutions
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Your Industry. Our Expertise.
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              With decades of combined experience and a proven track record of success, 
              we understand the unique challenges and opportunities in your industry. 
              Let's discuss how our solutions can drive measurable impact for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Industry Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download Industry Insights
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries