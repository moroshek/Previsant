import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Download, Eye, ArrowRight, BookOpen, FileCheck, BarChart, Brain, Shield, DollarSign, Settings, Activity, Rocket, Sparkles, Clock, TrendingUp, AlertTriangle } from 'lucide-react'

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const resources = [
    {
      id: 1,
      title: 'Real Business Transformation via Disciplined AI Innovation',
      category: 'guide',
      description: 'Cut through the AI hype with our proven framework for productive innovation that delivers sustainable business value.',
      icon: Brain,
      readTime: '15 min read',
      highlights: ['Five AI Innovation Imperatives', 'Previsant AI Framework', '4-6 week POC methodology'],
      link: '/insights/ai-innovation-framework',
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      id: 2,
      title: 'Demonstrating Secure, Auditable, & Responsible AI',
      category: 'whitepaper',
      description: 'Navigate HITRUST AI certification to gain market confidence in your AI practices and capabilities.',
      icon: Shield,
      readTime: '5 min read',
      highlights: ['90 new AI controls', 'Three levels of compliance', 'Evidence repository'],
      link: '/insights/hitrust-ai-security',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Payment Integrity Case Study: $20M+ Savings',
      category: 'case-study',
      description: 'How our AI-powered solution identified significant savings through comprehensive payment integrity analysis.',
      icon: DollarSign,
      readTime: '8 min read',
      highlights: ['$20M+ direct benefit', '$100M at scale', '5-6% cost reduction'],
      link: '/insights/payment-integrity-case-study',
      color: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      id: 4,
      title: 'Strategic Enablement for Data & Analytics Success',
      category: 'guide',
      description: 'Foundational people, process and technology capabilities for sustainable business value.',
      icon: Settings,
      readTime: '12 min read',
      highlights: ['Operating Model', 'Data Governance', 'Talent Strategy', 'Architecture'],
      link: '/insights/strategic-enablement',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: '2022 Medicare Payment Focus: Knee & Hip Replacements',
      category: 'report',
      description: 'Addressing the $550M improper payment opportunity in total knee and hip replacements.',
      icon: Activity,
      readTime: '8 min read',
      highlights: ['$550M opportunity', '83.5% medical necessity', 'Provider identification'],
      link: '/insights/medicare-payment-blog',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Previsant AI Strategy Offering',
      category: 'solution',
      description: 'Create an actionable AI strategy that ensures sustainable economic value driven by responsible, ethical AI.',
      icon: Rocket,
      readTime: '10 min read',
      highlights: ['Vision & Discovery', 'Readiness Assessment', 'Proof of Value Pilot'],
      link: '/insights/ai-strategy-offering',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 7,
      title: 'Previsant Payment Integrity Solution',
      category: 'solution',
      description: 'AI-powered, SME-enabled payment integrity program that detects and prevents improper payments.',
      icon: Shield,
      readTime: '7 min read',
      highlights: ['7.46% opportunity', 'Holistic approach', 'Proven $100MM+ savings'],
      link: '/insights/payment-integrity-solution',
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 8,
      title: 'Payment Integrity Perspective',
      category: 'whitepaper',
      description: 'How AI and machine learning are revolutionizing payment integrity with unprecedented accuracy.',
      icon: TrendingUp,
      readTime: '12 min read',
      highlights: ['7.46% detection rate', '73% fewer false positives', '$1B+ validated savings'],
      link: '/insights/payment-integrity-perspective',
      color: 'from-indigo-500 to-purple-500',
      featured: true
    },
    {
      id: 9,
      title: 'Fraud Discovery Case Study',
      category: 'case-study',
      description: 'Uncovering a $50M healthcare fraud ring through AI-powered network analysis.',
      icon: AlertTriangle,
      readTime: '10 min read',
      highlights: ['$50M fraud uncovered', '127 providers involved', '98% conviction rate'],
      link: '/insights/fraud-discovery-case-study',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 10,
      title: 'Secure, Responsible, Auditable AI',
      category: 'whitepaper',
      description: 'Implementing AI systems that meet the highest standards of security and ethics.',
      icon: Shield,
      readTime: '15 min read',
      highlights: ['HITRUST AI framework', '90 security controls', 'Complete audit trails'],
      link: '/insights/secure-auditable-ai',
      color: 'from-green-500 to-teal-500'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Resources', count: resources.length },
    { id: 'whitepaper', name: 'Whitepapers', count: resources.filter(r => r.category === 'whitepaper').length },
    { id: 'guide', name: 'Guides', count: resources.filter(r => r.category === 'guide').length },
    { id: 'report', name: 'Reports', count: resources.filter(r => r.category === 'report').length },
    { id: 'case-study', name: 'Case Studies', count: resources.filter(r => r.category === 'case-study').length },
    { id: 'solution', name: 'Solutions', count: resources.filter(r => r.category === 'solution').length }
  ]

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory)

  return (
    <section id="insights" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Resources & Insights
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Knowledge That
            <span className="block gradient-text">Drives Action</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of frameworks, guides, and case studies designed to help you 
            navigate the complexities of data, analytics, and AI transformation
          </p>
        </motion.div>

        {/* Category Filter with counts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300
                ${selectedCategory === category.id 
                  ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-primary/30'
                }
              `}
            >
              <span>{category.name}</span>
              <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                selectedCategory === category.id 
                  ? 'bg-white/20' 
                  : 'bg-gray-100'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          >
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`
                  h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden
                  ${resource.featured ? 'ring-2 ring-primary/20' : ''}
                `}>
                  {resource.featured && (
                    <div className="bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-semibold px-4 py-1 text-center">
                      Featured Resource
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                        <div className="relative w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <resource.icon className="w-7 h-7 text-gray-700" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{resource.readTime}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-3">
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
                      <Button 
                        className="flex-1 group/btn bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 transition-all duration-300"
                        asChild
                      >
                        <Link to={resource.link}>
                          <Eye className="w-4 h-4 mr-2" />
                          Read Now
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="border-2 hover:bg-gray-50"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-primary to-blue-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">
                Need Custom Insights for Your Organization?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Our team can develop tailored analytics solutions and insights 
                specific to your industry challenges and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="px-8 py-6 text-lg shadow-lg hover:shadow-xl hover-lift"
                >
                  Request Custom Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-6 text-lg bg-white/10 border-white hover:bg-white/20 text-white hover-lift"
                >
                  Schedule Discussion
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Resources