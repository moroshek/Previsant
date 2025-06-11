import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Brain, Rocket, Target, Users, Lightbulb, Settings, BarChart, ArrowRight, CheckCircle } from 'lucide-react'

const AIStrategyOffering = () => {
  const keyQuestions = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      question: "What is the vision for AI: Strategic and transformational aimed at disrupting competitors, or tactical and pragmatic with immediate gains?"
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      question: "How should AI align with other initiatives like digital strategy?"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      question: "Where could AI be leveraged to create value within the organization? How are these efforts prioritized?"
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      question: "What is the AI technology landscape, and what are the optimal choices?"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      question: "How is AI verified, validated, and governed for mission critical use?"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      question: "What people, talent and roles are required? What is an appropriate mix of talent acquisition and development?"
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary" />,
      question: "What are the best approaches to driving AI adoption?"
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary" />,
      question: "How are AI efforts measured and valued to optimize return on investment?"
    }
  ]

  const approachPhases = [
    {
      phase: 'Discovery',
      title: 'Vision, Discovery & Assessment',
      description: 'We collaborate with you to understand your aspirations, challenges, and existing data, analytics AI ecosystem & infrastructure.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      phase: 'Readiness',
      title: 'Readiness Assessment',
      description: 'Assess readiness in terms of people, process, and technology to achieve AI-powered solutions.',
      details: [
        'People: Optimal talent and resource requirements',
        'Processes: Operating Model, AI/Data/Tech Governance',
        'Technology: Identification of optimal AI tools and platforms'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      phase: 'Roadmap',
      title: 'Recommendations and Roadmap',
      description: 'Construct an actionable AI roadmap using prioritized AI use cases and outcomes.',
      color: 'from-green-500 to-green-600'
    },
    {
      phase: 'Pilot',
      title: 'Proof of Value Pilot',
      description: 'Identify and implement a quick pilot that can demonstrate value and approach.',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const whyPrevisant = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: 'Experience & Expertise',
      description: 'Senior practitioners and leadership in AI, with experience in tailoring solutions to client\'s unique needs'
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Holistic Approach',
      description: 'We go beyond technology, considering your business goals, ethical implications, and human impact'
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: 'End-to-End Support',
      description: 'We partner with you every step of the way, from ideation to implementation and beyond'
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: 'Results-Driven',
      description: 'Our success hinges on yours. We measure and ensure your AI journey delivers tangible value'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-primary/10 to-purple-50 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
              AI Strategy
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Previsant AI Strategy Offering
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Navigate the AI revolution with confidence and create sustainable economic value 
              driven by responsible, ethical AI
            </p>
          </div>
        </div>
      </motion.div>

      {/* The Opportunity */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-primary p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">The AI Opportunity</h2>
                <p className="text-lg opacity-90">
                  Artificial intelligence is no longer a futuristic dream; it's revolutionizing industries 
                  and redefining success. The IDC estimates that AI will generate nearly $5 trillion in 
                  added value by 2024, through productivity gains, new business models, and assistance 
                  with complex global issues.
                </p>
              </div>
              <CardContent className="p-8">
                <p className="text-gray-700">
                  The rapid growth of generative AI has also heightened awareness of risks associated with AI, 
                  and the imperative to develop AI systems ethically and responsibly, including alignment with 
                  future legal frameworks.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Navigating the Complex AI Landscape
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Organizations are struggling with key questions that require strategic clarity:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {keyQuestions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">{item.icon}</div>
                        <p className="text-gray-700">{item.question}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              The Previsant Approach
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Creating an actionable AI strategy is a key step in answering these questions and ensuring 
              sustainable economic value driven by responsible, ethical AI. Our scientific and systematic 
              AI Strategy method focuses on strategic alignment.
            </p>
            
            <div className="space-y-6">
              {approachPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${phase.color}`} />
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                          <p className="text-gray-700 mb-4">{phase.description}</p>
                          {phase.details && (
                            <ul className="space-y-2">
                              {phase.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-gray-600">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-green-50 to-emerald-100">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Delivered Outcomes
                </h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">AI Vision</h3>
                    <p className="text-sm text-gray-600">Clear strategic direction</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Use Cases</h3>
                    <p className="text-sm text-gray-600">Prioritized opportunities</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Roadmap</h3>
                    <p className="text-sm text-gray-600">Actionable implementation plan</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quick Win</h3>
                    <p className="text-sm text-gray-600">Proof of value pilot</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Why Previsant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Partner with Previsant
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyPrevisant.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-primary text-white">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Transform Your AI Journey?
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  We are always happy to engage with prospective clients to listen to and understand 
                  needs and opportunities, and define how Previsant might help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    Schedule a Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                    Download AI Strategy Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AIStrategyOffering