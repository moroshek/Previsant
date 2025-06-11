import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Download, Eye, ArrowRight, BookOpen, FileCheck, BarChart, Brain, Shield, DollarSign, Settings, Activity, Rocket } from 'lucide-react'

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const resources = [
    {
      id: 1,
      title: 'Real Business Transformation via Disciplined AI Innovation',
      category: 'guide',
      description: 'Cut through the AI hype with our proven framework for productive innovation that delivers sustainable business value.',
      icon: <Brain className="w-8 h-8 text-primary" />,
      readTime: '15 min read',
      highlights: ['Five AI Innovation Imperatives', 'Previsant AI Framework', '4-6 week POC methodology'],
      link: '/resources/ai-innovation-framework'
    },
    {
      id: 2,
      title: 'Demonstrating Secure, Auditable, & Responsible AI',
      category: 'whitepaper',
      description: 'Navigate HITRUST AI certification to gain market confidence in your AI practices and capabilities.',
      icon: <Shield className="w-8 h-8 text-primary" />,
      readTime: '5 min read',
      highlights: ['90 new AI controls', 'Three levels of compliance', 'Evidence repository'],
      link: '/resources/hitrust-ai-security'
    },
    {
      id: 3,
      title: 'Payment Integrity Case Study: $20M+ Savings',
      category: 'case-study',
      description: 'How our AI-powered solution identified significant savings through comprehensive payment integrity analysis.',
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      readTime: '8 min read',
      highlights: ['$20M+ direct benefit', '$100M at scale', '5-6% cost reduction'],
      link: '/resources/payment-integrity-case-study'
    },
    {
      id: 4,
      title: 'Strategic Enablement for Data & Analytics Success',
      category: 'guide',
      description: 'Foundational people, process and technology capabilities for sustainable business value.',
      icon: <Settings className="w-8 h-8 text-primary" />,
      readTime: '12 min read',
      highlights: ['Operating Model', 'Data Governance', 'Talent Strategy', 'Architecture'],
      link: '/resources/strategic-enablement'
    },
    {
      id: 5,
      title: '2022 Medicare Payment Focus: Knee & Hip Replacements',
      category: 'report',
      description: 'Addressing the $550M improper payment opportunity in total knee and hip replacements.',
      icon: <Activity className="w-8 h-8 text-green-600" />,
      readTime: '8 min read',
      highlights: ['$550M opportunity', '83.5% medical necessity', 'Provider identification'],
      link: '/resources/medicare-payment-blog'
    },
    {
      id: 6,
      title: 'Previsant AI Strategy Offering',
      category: 'solution',
      description: 'Create an actionable AI strategy that ensures sustainable economic value driven by responsible, ethical AI.',
      icon: <Rocket className="w-8 h-8 text-primary" />,
      readTime: '10 min read',
      highlights: ['Vision & Discovery', 'Readiness Assessment', 'Proof of Value Pilot'],
      link: '/resources/ai-strategy-offering'
    },
    {
      id: 7,
      title: 'Previsant Payment Integrity Solution',
      category: 'solution',
      description: 'AI-powered, SME-enabled payment integrity program that detects and prevents improper payments.',
      icon: <Shield className="w-8 h-8 text-green-600" />,
      readTime: '7 min read',
      highlights: ['7.46% opportunity', 'Holistic approach', 'Proven $100MM+ savings'],
      link: '/resources/payment-integrity-solution'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'whitepaper', name: 'Whitepapers' },
    { id: 'guide', name: 'Guides' },
    { id: 'report', name: 'Reports' },
    { id: 'case-study', name: 'Case Studies' },
    { id: 'solution', name: 'Solutions' }
  ]

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory)

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resources & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of whitepapers, guides, and industry insights 
            to stay ahead in data & analytics transformation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="min-w-[120px]"
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {resource.icon}
                    </div>
                    <span className="text-sm text-gray-500">{resource.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                  <CardDescription className="text-base">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {resource.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 group" variant="default">
                      <Eye className="w-4 h-4 mr-2" />
                      Read Online
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need Custom Insights for Your Organization?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team can develop tailored analytics solutions and insights 
            specific to your industry and business challenges.
          </p>
          <Button size="lg">
            Request Custom Analysis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Resources