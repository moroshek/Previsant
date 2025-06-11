import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, FileText, Brain, Shield, TrendingUp, Sparkles } from 'lucide-react'

const RelatedContent = ({ currentResourceId, category, className }) => {
  // Mock resource data - in production this would come from a data source
  const allResources = [
    {
      id: 1,
      title: 'Real Business Transformation via Disciplined AI Innovation',
      category: 'guide',
      description: 'Cut through the AI hype with our proven framework.',
      icon: Brain,
      link: '/resources/ai-innovation-framework',
      tags: ['AI', 'Innovation', 'Strategy'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Demonstrating Secure, Auditable, & Responsible AI',
      category: 'whitepaper',
      description: 'Navigate HITRUST AI certification to gain market confidence.',
      icon: Shield,
      link: '/resources/hitrust-ai-security',
      tags: ['Security', 'AI', 'Compliance'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Payment Integrity Case Study: $20M+ Savings',
      category: 'case-study',
      description: 'How our AI-powered solution identified significant savings.',
      icon: TrendingUp,
      link: '/resources/payment-integrity-case-study',
      tags: ['Healthcare', 'Cost Savings', 'AI'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Strategic Enablement for Data & Analytics Success',
      category: 'guide',
      description: 'Foundational capabilities for sustainable business value.',
      icon: FileText,
      link: '/resources/strategic-enablement',
      tags: ['Strategy', 'Data', 'Analytics'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      title: 'Previsant AI Strategy Offering',
      category: 'solution',
      description: 'Create an actionable AI strategy for sustainable value.',
      icon: Brain,
      link: '/resources/ai-strategy-offering',
      tags: ['AI', 'Strategy', 'Implementation'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 7,
      title: 'Previsant Payment Integrity Solution',
      category: 'solution',
      description: 'AI-powered program that detects improper payments.',
      icon: Shield,
      link: '/resources/payment-integrity-solution',
      tags: ['Healthcare', 'Payment Integrity', 'AI'],
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 8,
      title: 'Payment Integrity Perspective',
      category: 'whitepaper',
      description: 'How AI revolutionizes payment integrity.',
      icon: TrendingUp,
      link: '/resources/payment-integrity-perspective',
      tags: ['Payment Integrity', 'AI', 'Healthcare'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 9,
      title: 'Fraud Discovery Case Study',
      category: 'case-study',
      description: 'Uncovering $50M healthcare fraud ring.',
      icon: Shield,
      link: '/resources/fraud-discovery-case-study',
      tags: ['Fraud', 'Healthcare', 'Case Study'],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 10,
      title: 'Secure, Responsible, Auditable AI',
      category: 'whitepaper',
      description: 'Implementing ethical AI systems.',
      icon: Shield,
      link: '/resources/secure-auditable-ai',
      tags: ['Security', 'AI', 'Compliance', 'Ethics'],
      color: 'from-green-500 to-teal-500'
    }
  ]

  // Filter related content based on category and tags
  const getRelatedContent = () => {
    const currentResource = allResources.find(r => r.id === currentResourceId)
    if (!currentResource) return []

    // Score each resource based on relevance
    const scoredResources = allResources
      .filter(r => r.id !== currentResourceId) // Exclude current resource
      .map(resource => {
        let score = 0
        
        // Same category gets higher score
        if (resource.category === category) score += 3
        
        // Matching tags increase score
        const matchingTags = resource.tags.filter(tag => 
          currentResource.tags.includes(tag)
        )
        score += matchingTags.length * 2
        
        // Related categories
        const relatedCategories = {
          'guide': ['whitepaper', 'solution'],
          'whitepaper': ['guide', 'report'],
          'case-study': ['solution', 'report'],
          'solution': ['guide', 'case-study']
        }
        
        if (relatedCategories[category]?.includes(resource.category)) {
          score += 1
        }
        
        return { ...resource, score }
      })
      .filter(r => r.score > 0) // Only show resources with some relevance
      .sort((a, b) => b.score - a.score) // Sort by relevance
      .slice(0, 3) // Take top 3

    return scoredResources
  }

  const relatedResources = getRelatedContent()

  if (relatedResources.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="text-2xl font-bold text-gray-900">Related Resources</h3>
        </div>
        <p className="text-gray-600">Explore more insights that might interest you</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {relatedResources.map((resource, index) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${resource.color}`} />
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className="relative w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <resource.icon className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {resource.category}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h4>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {resource.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full group/btn hover:bg-primary hover:text-white transition-all duration-300"
                  asChild
                >
                  <Link to={resource.link}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default RelatedContent