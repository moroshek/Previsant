import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, Lightbulb, Users, TrendingUp } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Business Outcome Driven',
      description: 'Every engagement focuses on measurable business value and sustainable ROI'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: 'Innovation at Scale',
      description: 'Leveraging cutting-edge ML/AI while ensuring practical implementation'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Client Enablement',
      description: 'Building internal capabilities for long-term success and independence'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'Continuous Journey',
      description: 'Supporting organizations through their complete analytics evolution'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Previsant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the belief that data & analytics are an ongoing journey
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Previsant is founded on the belief that data & analytics are an ongoing journey, 
                from alignment to business strategy, through data & insight and ultimately to 
                action and value.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our sole focus is enabling our clients through this journey, from vision and 
                strategy through innovation, enablement and ongoing mentoring. We partner with 
                organizations to transform their data into a strategic differentiator.
              </p>
              <p className="text-lg text-gray-600">
                Our business outcome-driven approach, supported by our "Insights & AI as a Service" 
                platform, accelerates time to value, drives differentiation and return on investment 
                through D&A.
              </p>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl p-8"
              >
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-lg">
                      <span className="font-semibold">Strategy</span>
                      <span className="text-primary">→</span>
                      <span className="font-semibold">Data</span>
                      <span className="text-primary">→</span>
                      <span className="font-semibold">Insight</span>
                      <span className="text-primary">→</span>
                      <span className="font-semibold">Action</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4">{value.icon}</div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Previsant?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              With deep expertise in Healthcare, Insurance, and Financial Services, we deliver 
              solutions that drive real business value. Our unique combination of strategic 
              consulting and as-a-service platform capabilities enables rapid time to value 
              while building sustainable competitive advantages.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-semibold text-primary">Healthcare Expertise</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-semibold text-primary">Insurance Solutions</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-semibold text-primary">Financial Services</span>
              </div>
            </div>
            <Button size="lg">
              Learn About Our Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About