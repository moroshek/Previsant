import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Brain, Target, Lightbulb, Settings, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

const AIInnovationFramework = () => {
  const imperatives = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: 'Transformation Culture',
      description: 'Having the right organizational mindset that is adept in managing and harnessing disruptions is at the heart of innovation success.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: 'Ideation & Experimentation',
      description: 'Creating an internal environment that encourages use case ideation across the organization with structured rapid experimentation.'
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: 'Technical Enablement',
      description: 'Strong technical support including experimentation sandbox and domain expertise to execute rapid experimentations.'
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Valuation & Measure',
      description: 'Measuring technical feasibility and business impact to ensure the benefits justify the investment.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'Readiness to Scale',
      description: 'Ability to extend and operationalize solutions from sandbox to production scale with proper governance.'
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
              AI Innovation Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Business Transformation via Disciplined AI Innovation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cut through the AI hype with Previsant's proven framework for productive innovation 
              that delivers sustainable business value
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <span>By Brian Ng, Founding Partner</span>
              <span>•</span>
              <span>15 min read</span>
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
                <p className="text-lg text-gray-700 mb-6">
                  There is certainly no shortage of expert opinions and advice regarding the impact of AI. 
                  They range from one extreme of AI being your salvation as a technology to transform your 
                  business, to the other extreme of runaway AI with hallucination and unexplainable behaviors 
                  that will bring havoc to your enterprise.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 my-8 text-lg italic text-gray-700">
                  "According to Goldman Sachs CIO Marco Argenti, most companies in 2024 are going to focus on 
                  the proof-of-concepts that are likely to show the highest return."
                </blockquote>
                <p className="text-lg text-gray-700">
                  The only way to cut through the hype to reality is to engage and explore the technology 
                  with structure and discipline within the context of your own organization.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* The Five AI Innovation Imperatives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Five AI Innovation Imperatives
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imperatives.map((imperative, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4">{imperative.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {imperative.title}
                      </h3>
                      <p className="text-gray-600">{imperative.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Framework Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Previsant AI Innovation Framework
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-primary/10 rounded-xl p-8">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    {['Use Case Intake', 'POC Stage Gate', '4-6 Week POC', 'Production MVP'].map((stage, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                          <h4 className="font-semibold text-gray-900">{stage}</h4>
                        </div>
                        {index < 3 && (
                          <ArrowRight className="w-6 h-6 text-primary mx-auto hidden md:block" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Executive Sponsorship</h4>
                      <p className="text-sm text-gray-600">
                        Constant engagement with business and IT sponsor executives
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Technical Sandbox & Governance</h4>
                      <p className="text-sm text-gray-600">
                        Infrastructure and expertise support for rapid experimentation
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Benefits */}
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
                  Bringing It All Together
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <CheckCircle className="w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Structured Approach</h3>
                    <p className="opacity-90">
                      Move from ideation to production with clear stage gates and validation
                    </p>
                  </div>
                  <div>
                    <CheckCircle className="w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Rapid Validation</h3>
                    <p className="opacity-90">
                      4-6 week POCs to quickly validate feasibility and business value
                    </p>
                  </div>
                  <div>
                    <CheckCircle className="w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Scalable Process</h3>
                    <p className="opacity-90">
                      Repeatable framework to transition proven POCs into production
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
              Ready to Transform Your AI Innovation?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              At Previsant, our experienced partners have leveraged this proven innovation model 
              to help many clients capitalize on the real value of AI beyond the hype.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule a Discussion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download Framework Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AIInnovationFramework