import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Lock, FileCheck, Users, Lightbulb, CheckCircle, ArrowRight, Award } from 'lucide-react'

const HITRUSTAISecurity = () => {
  const keyPoints = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: 'AI-Specific Controls',
      description: 'HITRUST released 90 new controls in its latest AI Security and Risk management framework, grouped into information protection, access control, risk management, training & awareness.'
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: 'Control Evidence',
      description: 'Organizations must demonstrate control in three levels: Policy (control objectives), Procedure (operational steps), and Implementation (operational practice).'
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: 'Existing Standards & Controls',
      description: 'Many AI controls can be satisfied with enhancements to existing controls. AI Asset Management should be incorporated into existing IT asset management.'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Evidence Repository',
      description: 'Critical to establish an evidence repository to track and share policy, procedure, & implementation evidence as the authoritative source of truth.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: 'Early Version',
      description: "Current HITRUST AI controls represent a good 'version one' with improvements expected. Organizations should not hesitate to engage with this baseline."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-primary/10 to-blue-50 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
              AI Security & Compliance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Demonstrating Secure, Auditable, & Responsible AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Navigate AI trust landscape with HITRUST certification to gain market confidence 
              in your AI practices and capabilities
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <span>By Brian Ng, Founding Partner</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <Award className="w-12 h-12 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      The AI Trust Imperative
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                      As AI systems grow in proliferation and impact, users and customers of business leveraging AI 
                      capabilities are demanding evidence their AI systems are secure, transparent, and aligned with relevant 
                      regulations. AI system certification attesting trustworthiness, accountability, and compliance is critical 
                      to gain market confidence.
                    </p>
                    <p className="text-lg text-gray-700">
                      This is especially true in healthcare, finance, and other regulated industries. 
                      The AI trust landscape can be daunting due to the disparate standards and principles. 
                      HITRUST has been an organization that has mapped various standards including NIST, ISO/IEC, 
                      and HIPAA into a single manageable Common Security Framework (CSF).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Points for HITRUST Certification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Points for HITRUST AI Certification
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4">{point.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {point.title}
                      </h3>
                      <p className="text-gray-600">{point.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Implementation Framework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-primary/5">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Three Levels of Control Demonstration
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Policy</h3>
                    <p className="text-gray-600">
                      Define control objectives within your organization's context
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Procedure</h3>
                    <p className="text-gray-600">
                      Outline operational steps to achieve the objectives
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
                    <p className="text-gray-600">
                      Demonstrate policies & procedures are practiced operationally
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-primary text-white">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">
                  Why HITRUST AI Certification Matters
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <CheckCircle className="w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Market Confidence</h3>
                    <p className="opacity-90">
                      Demonstrate your AI systems are secure, transparent, and compliant with 
                      relevant regulations to gain trust
                    </p>
                  </div>
                  <div>
                    <CheckCircle className="w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Unified Framework</h3>
                    <p className="opacity-90">
                      Single manageable framework that maps NIST, ISO/IEC, and HIPAA standards 
                      into one comprehensive approach
                    </p>
                  </div>
                  <div>
                    <CheckCircle className="w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Competitive Advantage</h3>
                    <p className="opacity-90">
                      Stay ahead in regulated industries where AI certification is becoming 
                      critical for business operations
                    </p>
                  </div>
                  <div>
                    <CheckCircle className="w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Risk Mitigation</h3>
                    <p className="opacity-90">
                      Proactively address AI risks and demonstrate responsible AI practices 
                      before regulations become mandatory
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
              Ready to Lead with Secure, Auditable AI?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              At Previsant, we're proud to support organizations as they lead with secure, 
              auditable, and responsible AI. Let's discuss your HITRUST AI certification journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Your Certification Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download HITRUST Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HITRUSTAISecurity