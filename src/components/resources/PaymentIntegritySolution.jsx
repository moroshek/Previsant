import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Brain, Users, Zap, DollarSign, TrendingUp, Search, Database, CheckCircle, ArrowRight } from 'lucide-react'

const PaymentIntegritySolution = () => {
  const solutionHighlights = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: 'AI Innovation',
      description: 'Decades of hands-on FWA discovery encapsulated in unique and adaptable AI models and accelerators'
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: 'Process Innovation',
      description: 'Process frameworks drive actionability from discovery through recovery'
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'People Innovation',
      description: 'Our focus in training the organization on model and process use ensures sustainable value'
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: 'Technology Innovation',
      description: 'Leverages powerful Open Source technology (in a safe way) to limit tech investment'
    }
  ]

  const engagementPhases = [
    {
      phase: '1',
      title: 'Rapid Value',
      duration: '3-4 weeks',
      activities: [
        'Deploy "stem the tide" immediate rules & process fixes',
        'Assess environment readiness across data, security & processes',
        'Execute exploratory analysis to create proof of value and business case'
      ],
      resources: 'Solution architect, Business solution analyst/designer'
    },
    {
      phase: '2',
      title: 'Scale the Solution',
      duration: '6-8 weeks',
      activities: [
        'Upgrade & scale quick-fix solutions',
        'Train ML model with labeled data',
        'Deploy model on-prem/AAS',
        'Continue to retrain model based on new data',
        'Implement process & governance'
      ],
      resources: 'Solution architect, Business solution analyst/designer, Data scientist'
    },
    {
      phase: '3',
      title: 'Iterate & Maximize',
      duration: 'Ongoing',
      activities: [
        'Train and enable business teams on best practices',
        'Track business outcome & value realization',
        'Monitor & refine AI/ML model',
        'Provide ongoing consulting, knowledge transfer & support'
      ],
      resources: 'Solution architect, Business solution analyst/designer, Data scientist'
    }
  ]

  const processFlow = [
    { step: 'Input', items: ['Pre/Post adjudicated claims data', 'Customer demographics', 'External reference data'] },
    { step: 'Process', items: ['Data standardization & integration', 'Advanced Analytics / ML / GenAI', 'Tailored action targeting'] },
    { step: 'Output', items: ['Fraud: Risk-ranked provider lists', 'Waste/Abuse: Scalable detection code'] }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-green-50 to-emerald-100 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-green-600/20 text-green-700 rounded-full text-sm font-semibold mb-4">
              Payment Integrity Solution
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Previsant Payment Integrity
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI-powered, SME-enabled payment integrity program that detects and prevents 
              improper payments both before and after adjudication
            </p>
          </div>
        </div>
      </motion.div>

      {/* Market Drivers */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="border-2 border-green-200">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Need & Opportunity</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      The $31 Billion Problem
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Payment integrity estimated at 7.46% of claims annually</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">~$31B in excess charges across the industry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Medicare's approval ≠ Medicare paid</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      Value Calculation
                    </h3>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-gray-700 font-medium mb-2">Calculate your potential value:</p>
                      <p className="text-2xl font-bold text-green-700">Claims Paid × 0.0746 = Opportunity</p>
                      <p className="text-sm text-gray-600 mt-2">Example: $150M value on a $2B block</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solution Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comprehensive Solution Approach
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutionHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow text-center">
                    <CardContent className="p-6">
                      <div className="mb-4">{highlight.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                      <p className="text-sm text-gray-600">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-primary/10">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Solution Process Flow
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {processFlow.map((process, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="font-bold text-primary mb-4">{process.step}</h3>
                        <ul className="space-y-2 text-left">
                          {process.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {index < processFlow.length - 1 && (
                        <ArrowRight className="w-8 h-8 text-primary mx-auto mt-4 hidden md:block" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Engagement Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Holistic Engagement Model
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              A configurable approach from Vision to Implementation to Sustainable Value
            </p>
            <div className="space-y-6">
              {engagementPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 md:w-1/4 flex flex-col justify-center items-center text-center">
                        <div className="text-4xl font-bold mb-2">{phase.phase}</div>
                        <h3 className="text-xl font-semibold mb-1">{phase.title}</h3>
                        <p className="text-sm opacity-90">{phase.duration}</p>
                      </div>
                      <CardContent className="p-6 md:w-3/4">
                        <h4 className="font-semibold text-gray-900 mb-3">Activities:</h4>
                        <ul className="space-y-2 mb-4">
                          {phase.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-gray-600">
                          <strong>Resources:</strong> {phase.resources}
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results & Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-green-600 text-white">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Proven Results & Impact
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Shield className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
                    <p className="opacity-90">People, process & technology integration</p>
                  </div>
                  <div>
                    <DollarSign className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Proven Savings</h3>
                    <p className="opacity-90">$100MM+ in demonstrated benefits</p>
                  </div>
                  <div>
                    <Search className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Practitioner-Driven</h3>
                    <p className="opacity-90">Built by experts who've done this work</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Payment Integrity?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solution can help you capture significant 
              savings and improve healthcare affordability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Calculate Your ROI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PaymentIntegritySolution