import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Activity, DollarSign, FileSearch, TrendingDown, Users, CheckCircle, ArrowRight } from 'lucide-react'

const MedicarePaymentBlog = () => {
  const riskIdentificationSteps = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Identify High-Risk Providers',
      description: 'Look for providers billing 100% inpatient - the lowest hanging fruit. Different codes exist for outpatient procedures.'
    },
    {
      icon: <FileSearch className="w-8 h-8 text-primary" />,
      title: 'Analyze Patient History',
      description: 'Review diagnosis codes for conditions that could cause complications (diabetes, heart disease, chronic conditions).'
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: 'Monitor Stay Patterns',
      description: 'If patients are always discharged on day 2, it could be a red flag. Expect lengths of stays to fluctuate based on patient needs.'
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-primary" />,
      title: 'Compare Provider Behavior',
      description: 'Compare providers with similar patients and look for outliers in admission rates and patterns.'
    }
  ]

  const actionSteps = [
    {
      step: '1',
      title: 'Request Medical Records',
      description: 'Focus on patients that appear to be the healthiest to verify if admission was truly necessary'
    },
    {
      step: '2',
      title: 'Provider Education',
      description: 'Offer education to providers found to be admitting inappropriately'
    },
    {
      step: '3',
      title: 'Ongoing Monitoring',
      description: 'Consider prepayment review if claims continue to be billed inappropriately'
    },
    {
      step: '4',
      title: 'Recovery & Reporting',
      description: 'Consider overpayment recovery or settlement options and report to CMS'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-red-50 to-orange-50 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-700 rounded-full text-sm font-semibold mb-4">
              Medicare Payment Integrity
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              2022 Improper Payment Focus Area:<br />
              Total Knee and Hip Replacements
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              How supplemental insurance companies can address the highest improper payment rate 
              in Part A hospital billing
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <span>By Janna Hart, Founding Partner</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Key Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="border-2 border-red-200">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-12 h-12 text-red-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      The $550 Million Problem
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                      Major Hip And Knee Joint Replacement Or Reattachment Of Lower Extremity (DRGs 469, 470) had the 
                      highest improper payment rate in 2022 for Part A hospital billing.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <DollarSign className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">$550M+</div>
                    <div className="text-sm text-gray-600">Projected improper payments in 2022</div>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <TrendingDown className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">83.5%</div>
                    <div className="text-sm text-gray-600">Medical necessity category</div>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <Activity className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">~20K</div>
                    <div className="text-sm text-gray-600">Potential scenarios</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Understanding the Issue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Understanding the Medical Necessity Issue
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    The highest category of improper payments for these DRGs is Medical Necessity with 83.5% 
                    falling into this category. However, this doesn't mean that the procedure itself wasn't 
                    medically necessary.
                  </p>
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                    <p className="font-semibold mb-2">Key Insight:</p>
                    <p>
                      In most cases, the procedure didn't constitute a hospital admission and should have been 
                      billed as an outpatient procedure. The medical documentation doesn't meet the definition 
                      of medical necessity for the hospital admission.
                    </p>
                  </div>
                  <p className="text-lg">
                    If there are complications, serious comorbidities, and the physician believes the patient 
                    requires at least 2 days of professional medical supervision, then a hospital admission may 
                    be appropriate. But that shouldn't be the default.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Risk Identification Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How to Identify High-Risk Providers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {riskIdentificationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">{step.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <Card className="bg-gradient-to-r from-blue-50 to-primary/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Advanced Approach: Machine Learning
                  </h3>
                  <p className="text-gray-700">
                    Use machine learning to predict which patients are likely to be admitted and compare those 
                    results to what actually occurred. A high rate of incorrect predictions for certain providers 
                    could indicate abnormal behavior compared to the expected population.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Action Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Taking Action When Risk is Identified
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {actionSteps.map((action, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">{action.step}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> Inappropriate admissions that continue after education could 
                    indicate fraudulent behavior and should be reported to CMS for their consideration regarding action.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Conclusion */}
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
                  Significant Opportunity for Improvement
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Total Knee and Hip Replacements had a projected improper payment amount of over $550,000,000 
                  in 2022, mostly caused by procedures being executed as inpatient vs outpatient.
                </p>
                <p className="text-lg mb-6 opacity-90">
                  There are reasonable approaches to reducing the improper payment rate significantly as it 
                  relates to this procedure. This example is one of about ~20K potential scenarios. Solving 
                  payment integrity at scale requires comprehensive, flexible approaches to realize potential value.
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-semibold">
                    We would welcome the opportunity to discuss our comprehensive approach.
                  </span>
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
              Ready to Address Payment Integrity at Scale?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              This is just one example of ~20,000 potential scenarios. Let's discuss how our 
              comprehensive approach can help you realize the full value of payment integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule a Discussion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download Payment Integrity Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MedicarePaymentBlog