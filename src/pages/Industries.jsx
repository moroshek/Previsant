import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Activity, Shield, DollarSign, ArrowRight, CheckCircle, Sparkles, Target, TrendingUp, Brain } from 'lucide-react'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import SEO from '@/components/SEO'

const IndustriesPage = () => {
  const industries = [
    {
      icon: Activity,
      title: 'Healthcare',
      description: 'Transforming healthcare delivery through advanced analytics and insights',
      overview: 'Our healthcare solutions enable providers, payers, and life sciences organizations to improve patient outcomes while optimizing operational efficiency.',
      solutions: [
        {
          title: 'Payment Integrity Analytics',
          description: 'Advanced analytics to identify payment errors, fraud, and abuse'
        },
        {
          title: 'Medical Trend Analysis',
          description: 'Predictive modeling for cost trends and utilization patterns'
        },
        {
          title: 'Clinical Outcome Optimization',
          description: 'Data-driven insights to improve quality of care'
        },
        {
          title: 'Population Health Management',
          description: 'Risk stratification and intervention strategies'
        }
      ],
      stats: 'Supporting providers managing over $50B in annual claims',
      caseStudies: [
        'Reduced payment errors by 35% for a major health system',
        'Improved care quality metrics by 28% through predictive analytics',
        'Saved $12M annually in operational costs through process optimization'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Enabling smarter risk assessment and operational excellence',
      overview: 'We help insurance carriers leverage data to enhance underwriting, improve claims processing, and deliver superior customer experiences.',
      solutions: [
        {
          title: 'Risk & Pricing Optimization',
          description: 'ML-driven models for accurate risk assessment and pricing'
        },
        {
          title: 'Claims Analytics',
          description: 'Streamline claims processing and fraud detection'
        },
        {
          title: 'Customer 360 Solutions',
          description: 'Unified view of customer interactions and preferences'
        },
        {
          title: 'Fraud Detection & Prevention',
          description: 'Real-time fraud identification using advanced algorithms'
        }
      ],
      stats: 'Partnering with carriers from InsurTech to Fortune 100',
      caseStudies: [
        'Reduced fraud losses by 42% for a national carrier',
        'Improved pricing accuracy by 25% through ML models',
        'Increased customer retention by 18% with personalized insights'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'Driving innovation in financial services through data-driven insights',
      overview: 'Our financial services solutions help institutions optimize operations, manage risk, and deliver personalized customer experiences.',
      solutions: [
        {
          title: 'Lead Optimization',
          description: 'AI-powered lead scoring and conversion optimization'
        },
        {
          title: 'Customer Analytics',
          description: 'Behavioral analytics for personalized services'
        },
        {
          title: 'Regulatory Compliance',
          description: 'Automated compliance monitoring and reporting'
        },
        {
          title: 'Risk Management Solutions',
          description: 'Comprehensive risk assessment and mitigation strategies'
        }
      ],
      stats: 'Enabling digital transformation across the financial ecosystem',
      caseStudies: [
        'Increased lead conversion by 38% for a major bank',
        'Reduced compliance costs by 45% through automation',
        'Improved risk detection accuracy by 52% using AI'
      ],
      color: 'from-emerald-500 to-teal-500'
    }
  ]

  return (
    <>
      <SEO 
        title="Industry Solutions - Previsant Insights"
        description="Specialized analytics solutions for Healthcare, Insurance, and Financial Services organizations. Deep domain expertise combined with cutting-edge technology."
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
                <Target className="w-4 h-4" />
                Industry Solutions
              </motion.span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Deep Domain Expertise
                <span className="block gradient-text">Tailored Analytics Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                We combine industry-specific knowledge with advanced analytics to solve 
                complex challenges and drive competitive advantage in your sector.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Detail Section */}
        <section className="section-padding">
          <div className="container-responsive">
            <div className="space-y-32">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 0 ? '' : 'lg:flex-row-reverse'}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div className={index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:order-2'}>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${industry.color} bg-opacity-10`}>
                            <industry.icon className="w-8 h-8 text-gray-900" />
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {industry.title}
                          </h2>
                        </div>
                        
                        <p className="text-xl text-gray-700 mb-4">
                          {industry.description}
                        </p>
                        
                        <p className="text-gray-600 mb-8">
                          {industry.overview}
                        </p>

                        <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl p-6 mb-8">
                          <p className="text-lg font-semibold text-gray-900">
                            {industry.stats}
                          </p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Impact Areas:</h3>
                        <ul className="space-y-3 mb-8">
                          {industry.caseStudies.map((study, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{study}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <Button 
                          size="lg"
                          className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700"
                          onClick={() => {
                            window.location.href = '/#contact'
                          }}
                        >
                          Discuss {industry.title} Solutions
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </motion.div>
                    </div>

                    {/* Solutions Grid */}
                    <div className={index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12 lg:order-1'}>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid sm:grid-cols-2 gap-4"
                      >
                        {industry.solutions.map((solution, sIdx) => (
                          <motion.div
                            key={sIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + sIdx * 0.1 }}
                          >
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                              <CardHeader>
                                <div className="flex items-start gap-3">
                                  <Brain className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                  <div>
                                    <CardTitle className="text-lg mb-2">{solution.title}</CardTitle>
                                    <CardDescription className="text-sm">
                                      {solution.description}
                                    </CardDescription>
                                  </div>
                                </div>
                              </CardHeader>
                            </Card>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl text-center"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Your Industry. Our Expertise.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                With decades of combined experience and a proven track record of success, 
                we understand the unique challenges and opportunities in your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 shadow-lg"
                  onClick={() => {
                    window.location.href = '/#contact'
                  }}
                >
                  Schedule Industry Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-6 text-lg border-2"
                  onClick={() => {
                    window.location.href = '/insights'
                  }}
                >
                  View Industry Insights
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

export default IndustriesPage