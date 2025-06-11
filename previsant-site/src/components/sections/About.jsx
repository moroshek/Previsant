import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, Lightbulb, Users, TrendingUp, Sparkles, ChevronRight } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Business Outcome Driven',
      description: 'Every engagement focuses on measurable business value and sustainable ROI',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation at Scale',
      description: 'Leveraging cutting-edge ML/AI while ensuring practical implementation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Client Enablement',
      description: 'Building internal capabilities for long-term success and independence',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Journey',
      description: 'Supporting organizations through their complete analytics evolution',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const journeySteps = ['Strategy', 'Data', 'Insight', 'Action']

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/5 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            About Previsant
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforming Data into
            <span className="block gradient-text">Strategic Advantage</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the belief that data & analytics are an ongoing journey from strategy to action
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Our Mission & Vision
                </h3>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Previsant is founded on the belief that <span className="font-semibold text-gray-800">data & analytics 
                    are an ongoing journey</span>, from alignment to business strategy, through data & insight 
                    and ultimately to action and value.
                  </p>
                  <p>
                    Our sole focus is <span className="font-semibold text-gray-800">enabling our clients</span> through 
                    this journey, from vision and strategy through innovation, enablement and ongoing mentoring. 
                    We partner with organizations to transform their data into a strategic differentiator.
                  </p>
                  <p>
                    Our <span className="font-semibold text-gray-800">business outcome-driven approach</span>, 
                    supported by our "Insights & AI as a Service" platform, accelerates time to value, 
                    drives differentiation and return on investment through D&A.
                  </p>
                </div>
              </motion.div>
              
              {/* Journey Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="glass rounded-3xl p-8 lg:p-12">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    The Previsant Journey
                  </h4>
                  <div className="space-y-4">
                    {journeySteps.map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="relative"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                            {index + 1}
                          </div>
                          <div className="flex-1 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                            <span className="text-lg font-semibold text-gray-800">{step}</span>
                          </div>
                          {index < journeySteps.length - 1 && (
                            <ChevronRight className="w-6 h-6 text-primary absolute -right-3 top-1/2 -translate-y-1/2" />
                          )}
                        </div>
                        {index < journeySteps.length - 1 && (
                          <div className="w-0.5 h-8 bg-gradient-to-b from-primary/20 to-transparent ml-6 mt-2" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide every engagement and drive our success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    <CardContent className="p-8 relative z-10">
                      <div className="mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                          <value.icon className="w-8 h-8 text-gray-700" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
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
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <Card className="bg-gradient-to-r from-primary to-blue-600 text-white border-0 shadow-2xl">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Data Journey?
                </h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Partner with Previsant to unlock the full potential of your data and analytics capabilities
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="px-8 py-6 text-lg shadow-lg hover:shadow-xl hover-lift"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="px-8 py-6 text-lg bg-white/10 border-white hover:bg-white/20 text-white hover-lift"
                  >
                    Learn More About Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About