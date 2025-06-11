import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DollarSign, TrendingUp, Search, Shield, Target, BarChart, CheckCircle, ArrowRight } from 'lucide-react'

const PaymentIntegrityCaseStudy = () => {
  const findings = [
    {
      category: 'Compliance Opportunities',
      value: '$3.25MM+',
      items: ['Drug waste', 'Settlements', 'Remote patient monitoring', 'Timely submission of claims']
    },
    {
      category: 'Incorrect Coding / Billing',
      value: '$8MM+',
      items: ['Coverage criteria violations', 'Alignment issues', 'Incorrect coding (upcoding) prediction']
    },
    {
      category: 'Additional Fraud Identified',
      value: '$8.5MM',
      items: ['Significant fraud including durable medical equipment', 'Verified emerging fraud scam: ostomy supplies']
    }
  ]

  const processSteps = [
    { phase: 'IDENTIFY', description: 'Discovery & validation of payment integrity scenarios' },
    { phase: 'INGEST', description: 'Data standardization and integration' },
    { phase: 'INVESTIGATE', description: 'AI-powered analysis and rule application' },
    { phase: 'DECIDE', description: 'Approval and recovery planning' },
    { phase: 'MEASURE', description: 'Performance tracking and reporting' }
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
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Payment Integrity Success Story
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              How Previsant's AI-powered solution identified $20M+ in savings through 
              comprehensive payment integrity analysis
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">$20M+</div>
                <div className="text-sm text-gray-600">Initial Savings</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">$100M</div>
                <div className="text-sm text-gray-600">At Scale</div>
              </div>
              <div className="text-center">
                <BarChart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">5-6%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Executive Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Context & Purpose</h3>
                    <p className="text-gray-600 mb-4">
                      This case study illustrates Previsant's payment integrity product in practice, 
                      demonstrating significant economic value creation from AI-powered payment integrity analysis.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Market Need</h3>
                    <p className="text-gray-600 mb-4">
                      Payment integrity issues are estimated at 7.46% of claims, representing ~$31B 
                      in excess charges annually. Medicare's "approved" does not equal "Medicare paid."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Findings Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Detailed Findings: $20M+ in Opportunities Identified
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {findings.map((finding, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:border-green-500 transition-colors">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-green-600 mb-2">{finding.value}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{finding.category}</h3>
                      <ul className="space-y-2">
                        {finding.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-primary/10">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Previsant Payment Integrity Process
                </h2>
                <div className="grid md:grid-cols-5 gap-4 items-center">
                  {processSteps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                        <h4 className="font-bold text-primary">{step.phase}</h4>
                      </div>
                      <p className="text-xs text-gray-600">{step.description}</p>
                      {index < processSteps.length - 1 && (
                        <ArrowRight className="w-6 h-6 text-primary mx-auto mt-2 hidden md:block" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <p className="text-gray-700 font-medium">
                    Holistic people, process & technology approach driving proven savings
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solution Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Previsant Solution Differentiators
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Search className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">AI Innovation</h3>
                  <p className="text-sm text-gray-600">
                    Decades of FWA discovery encapsulated in unique AI models
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Process Innovation</h3>
                  <p className="text-sm text-gray-600">
                    Frameworks drive actionability from discovery through recovery
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">People Innovation</h3>
                  <p className="text-sm text-gray-600">
                    Focus on training ensures sustainable value creation
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <BarChart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Technology Innovation</h3>
                  <p className="text-sm text-gray-600">
                    Industry standard platforms with ML/AI capabilities
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Results Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-green-600 text-white">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">
                  Proven Impact & Value Creation
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">$20M+</div>
                    <h3 className="text-xl font-semibold mb-2">Direct Benefit</h3>
                    <p className="opacity-90">
                      Initial case study value identified across fraud, waste, and abuse categories
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">$100M</div>
                    <h3 className="text-xl font-semibold mb-2">Benefit at Scale</h3>
                    <p className="opacity-90">
                      Projected value when fully deployed across the client's book of business
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">5-6%</div>
                    <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
                    <p className="opacity-90">
                      Overall claims cost reduction through comprehensive payment integrity
                    </p>
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
              This case study demonstrates what the market already knows: Fraud, Waste and Abuse 
              represent a significant opportunity to drive out cost and improve healthcare affordability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Calculate Your Potential Savings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download Full Case Study
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PaymentIntegrityCaseStudy