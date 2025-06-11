import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Settings, Users, Database, Cloud, GitBranch, Shield, Zap, ArrowRight } from 'lucide-react'

const StrategicEnablement = () => {
  const foundationalAreas = [
    {
      icon: <GitBranch className="w-12 h-12 text-primary" />,
      title: 'Operating Model',
      subtitle: 'Aligning Data & Analytics with Business Objectives',
      benefits: [
        {
          title: 'Alignment',
          description: 'Aligns data and analytics efforts with business objectives, fostering a data-driven culture throughout the organization.'
        },
        {
          title: 'Collaboration',
          description: 'Enables cross-functional collaboration, breaking down silos and encouraging data sharing across departments.'
        },
        {
          title: 'Agility',
          description: 'Allows organizations to adapt quickly to changing business needs, ensuring flexibility in data management and analytics processes.'
        }
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: 'Data Governance',
      subtitle: 'Managing Data as a Valuable Corporate Asset',
      benefits: [
        {
          title: 'Trust',
          description: 'Ensures data accuracy, consistency, and reliability, leading to more trustworthy insights and informed decision-making.'
        },
        {
          title: 'Understanding',
          description: 'Creating common definitions and resolving discrepancies is a huge focus and value statement for the data governance function.'
        },
        {
          title: 'Risk Mitigation',
          description: 'Reduces the risk of data breaches, regulatory non-compliance, and reputational damage by enforcing data privacy and security protocols.'
        },
        {
          title: 'Efficiency',
          description: 'Well-defined data governance processes streamline data acquisition, integration, and management, reducing redundancies.'
        }
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Talent Strategy',
      subtitle: 'Building a Skilled Data & Analytics Workforce',
      benefits: [
        {
          title: 'Expertise',
          description: 'Hiring and developing skilled data professionals enhances the organization\'s analytical capabilities for advanced analysis.'
        },
        {
          title: 'Innovation',
          description: 'A diverse data and analytics workforce brings fresh perspectives and ideas, driving innovation and unlocking new opportunities.'
        },
        {
          title: 'Competitive Advantage',
          description: 'Organizations with a robust talent strategy gain advantage by leveraging data-driven insights for strategic decisions.'
        }
      ]
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      title: 'Architecture',
      subtitle: 'Cloud-Enabled Data & Analytics Ecosystem',
      benefits: [
        {
          title: 'Scalability and Elasticity',
          description: 'Cloud platforms offer unparalleled scalability, allowing organizations to seamlessly handle growing data volumes.'
        },
        {
          title: 'Agility and Flexibility',
          description: 'Cloud-based architectures provide agility and flexibility by decoupling infrastructure from applications and services.'
        },
        {
          title: 'Data Integration',
          description: 'Unified platform for integrating and processing data from multiple sources with diverse toolsets.'
        },
        {
          title: 'Advanced Analytics',
          description: 'Rich ecosystem of analytics tools including machine learning, AI, and big data processing frameworks.'
        }
      ]
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
              Strategic Framework
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic Enablement for Data & Analytics Success
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ensure connective tissue between initial strategy and ongoing execution with 
              foundational people, process and technology capabilities
            </p>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4">
                  <Zap className="w-12 h-12 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Bridging Strategy and Execution
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                      One consistent theme we've seen over 30+ years in the data & analytics environment is the 
                      need to ensure connective tissue in place between initial strategy and ongoing execution.
                    </p>
                    <p className="text-lg text-gray-700">
                      In today's environment, where the opportunity to innovate and differentiate via data and analytics 
                      and AI, and the overall explosion of data has created tremendous opportunity, foundational capabilities 
                      in people, process and technology must be considered as part of ongoing implementation to help ensure 
                      delivery of sustainable business value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Four Foundational Areas */}
          {foundationalAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12"
            >
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-primary/5 to-blue-50 p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    {area.icon}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{area.title}</h2>
                      <p className="text-gray-600">{area.subtitle}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {area.benefits.map((benefit, idx) => (
                      <div key={idx} className="border-l-4 border-primary/30 pl-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Special notes for certain sections */}
                  {area.title === 'Operating Model' && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> We've seen creation and integration of a D&A specific operating model 
                        into an organization's broader Agile or Scaled Agile (SAFe) environment as a critical step. 
                        The process of aligning and actively selecting between centralized, decentralized or federated 
                        models is critical, regardless of which model is adopted.
                      </p>
                    </div>
                  )}
                  
                  {area.title === 'Talent Strategy' && (
                    <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Important:</strong> We have frequently seen talent strategy de-emphasized when compared 
                        to technology and process efforts. Under-indexing on talent is a risk, particularly as modern 
                        data & analytics capabilities are rapidly evolving. Creative approaches to ensure ongoing talent 
                        development can effectively mitigate these risks.
                      </p>
                    </div>
                  )}
                  
                  {area.title === 'Architecture' && (
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Cloud-First Philosophy:</strong> The majority of our clients are now adopting a 
                        "cloud-first" philosophy across the technology stack. However, merely leveraging cloud-enabled 
                        capability is not a panacea. Technology without strong alignment to business need and economic 
                        value will only create an elaborate science experiment that produces no value.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-primary text-white">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Unlock the Full Potential of Your Data Assets
                </h2>
                <p className="text-lg mb-8 text-center opacity-90 max-w-3xl mx-auto">
                  Data and analytics foundational enablement, encompassing an optimized Operating Model, 
                  robust Data Governance, a comprehensive Talent Strategy, and a well-designed Architecture, 
                  is vital for organizations seeking to harness the power of data-driven decision-making.
                </p>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <Settings className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-semibold">Operating Model</h3>
                  </div>
                  <div>
                    <Database className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-semibold">Data Governance</h3>
                  </div>
                  <div>
                    <Users className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-semibold">Talent Strategy</h3>
                  </div>
                  <div>
                    <Cloud className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-semibold">Architecture</h3>
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
              Ready to Build Your Foundation for Success?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              By investing in these key pillars, businesses can unlock the full potential of their 
              data assets, drive innovation, and gain a competitive advantage in an increasingly 
              data-centric world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Assess Your Readiness
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download Strategic Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default StrategicEnablement