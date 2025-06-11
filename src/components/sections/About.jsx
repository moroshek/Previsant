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

          {/* Leadership Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Leadership Team
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced leaders driving data & analytics transformation across industries
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Doug Ramsey - Founder & CEO */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                        DR
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Doug Ramsey</h4>
                      <p className="text-lg font-semibold text-primary mb-4">Founder & CEO</p>
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <p>
                          <span className="font-semibold text-gray-800">30+ years</span> of experience in the data & analytics space across multiple sectors in both Client and Consulting senior leadership roles.
                        </p>
                        <p>
                          Has driven multiple transformational initiatives across industry sectors, with a focus on leveraging data & analytics to help drive change and differentiation from <span className="font-semibold text-gray-800">"vision to value"</span>.
                        </p>
                        <p>
                          Leading firms in Financial Services, Health Care, Bio Research, Technology, Environmental Services and Transportation sectors.
                        </p>
                      </div>
                      <div className="mt-4">
                        <a href="https://www.linkedin.com/in/doug-ramsey-3874291/" target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center gap-2 text-primary hover:text-blue-600 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Other Team Members - Condensed */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                {/* Janna Hart */}
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        JH
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-gray-900">Janna Hart</h5>
                        <p className="text-primary font-semibold">Founding Partner</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      15+ years in analytics and data science with transformational AI-driven solutions around internal audit, payment integrity and operational efficiency. 
                      <span className="font-semibold text-gray-800"> $40M+ year over year value delivery</span>.
                    </p>
                    <div className="mt-3">
                      <a href="https://www.linkedin.com/in/janna-hart-90a3b513/" target="_blank" rel="noopener noreferrer" 
                         className="inline-flex items-center gap-1 text-primary hover:text-blue-600 transition-colors text-xs">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Brian Ng */}
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                        BN
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-gray-900">Brian Ng</h5>
                        <p className="text-primary font-semibold">Founding Partner</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      25+ years in data & AI with Fortune 500 companies. Former Global Director at Hewlett-Packard Enterprise and 
                      Retail Data & AI practice leader for Accenture Canada.
                    </p>
                    <div className="mt-3">
                      <a href="https://www.linkedin.com/in/brian-cp-ng/" target="_blank" rel="noopener noreferrer" 
                         className="inline-flex items-center gap-1 text-primary hover:text-blue-600 transition-colors text-xs">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Neville Moses */}
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
                        NM
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-gray-900">Neville Moses</h5>
                        <p className="text-primary font-semibold">Co-Founder & Principal</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Technology entrepreneur and digital venture builder. Co-founder of RaisinBread, disrupting commercial insurance marketplace. 
                      12 years at Cap Gemini Ernst & Young and Thoughtworks.
                    </p>
                    <div className="mt-3">
                      <a href="https://www.linkedin.com/in/nevillemoses/" target="_blank" rel="noopener noreferrer" 
                         className="inline-flex items-center gap-1 text-primary hover:text-blue-600 transition-colors text-xs">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Satya Sachdeva */}
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                        SS
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-gray-900">Satya Sachdeva</h5>
                        <p className="text-primary font-semibold">Founding Partner</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      25+ years developing innovative solutions using AI, Data, and Analytics across various verticals. 
                      Empowering Fortune 500 companies to enhance customer experience and drive digital innovation.
                    </p>
                    <div className="mt-3">
                      <a href="https://www.linkedin.com/in/satya-sachdeva-a2b2502/" target="_blank" rel="noopener noreferrer" 
                         className="inline-flex items-center gap-1 text-primary hover:text-blue-600 transition-colors text-xs">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="px-8 py-6 text-lg bg-white/10 border-white hover:bg-white/20 text-white hover-lift"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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