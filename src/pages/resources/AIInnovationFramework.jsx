import React from 'react'
import ResourceDetailTemplate from './ResourceDetailTemplate'
import { HeroSection } from '@/components/ui/hero-section'
import { FeatureGrid } from '@/components/ui/feature-grid'
import { StatisticsDisplay } from '@/components/ui/statistics-display'
import { Timeline, ProcessFlow } from '@/components/ui/timeline'
import { QuoteBlock, Callout } from '@/components/ui/quote-block'
import { Accordion } from '@/components/ui/accordion'
import { ComparisonTable } from '@/components/ui/comparison-table'
import { TabbedContent } from '@/components/ui/tabbed-content'
import { 
  Lightbulb, Target, Rocket, Users, Shield, TrendingUp, 
  CheckCircle, AlertCircle, Brain, Zap, BarChart3, Building
} from 'lucide-react'

const AIInnovationFramework = () => {
  const resourceData = {
    id: 1,
    title: 'Real Business Transformation via Disciplined AI Innovation',
    category: 'guide',
    description: 'Cut through the AI hype with our proven framework for productive innovation that delivers sustainable business value.',
    readTime: '15 min read',
    publishDate: 'November 2024',
    author: {
      name: 'Previsant Analytics Team',
      role: 'Data & AI Strategy Experts'
    },
    highlights: [
      'Five AI Innovation Imperatives for sustainable transformation',
      'Previsant AI Framework with proven methodology',
      '4-6 week POC approach for rapid value delivery',
      'Learn, Lift, Lead program for capability building'
    ],
    keyTakeaways: [
      'AI success requires a disciplined approach focused on business outcomes, not technology hype',
      'Start with specific use cases that deliver measurable value within 4-6 weeks',
      'Build internal capabilities through structured enablement programs',
      'Ensure responsible AI practices are embedded from the start',
      'Scale proven solutions systematically across the organization'
    ],
    content: (
      <div className="space-y-12">
        {/* Introduction with Hero Section */}
        <div>
          <QuoteBlock
            quote="In today's rapidly evolving business landscape, artificial intelligence presents both unprecedented opportunities and significant challenges."
            variant="highlight"
          />
          
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            While the potential for transformation is real, many organizations struggle to move beyond 
            proof-of-concepts to deliver sustainable business value. Our framework cuts through the hype 
            to deliver real results.
          </p>
        </div>

        {/* Current State Statistics */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Current State of AI Adoption</h2>
          
          <StatisticsDisplay
            stats={[
              { value: '90%', label: 'Enterprises experimenting with AI' },
              { value: '<20%', label: 'Successfully scaled beyond pilots' },
              { value: '70%', label: 'Struggle with ROI measurement' },
              { value: '2.3x', label: 'Gap between ambition and reality' }
            ]}
            variant="cards"
            className="mb-8"
          />

          <Callout
            title="The AI Reality Gap"
            content="Recent studies reveal a growing disconnect between AI ambitions and actual business outcomes. Success requires more than technology—it demands a disciplined approach to transformation."
            icon={<AlertCircle className="w-6 h-6 text-yellow-600" />}
            variant="warning"
          />
        </div>

        {/* Five Imperatives with Feature Grid */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">The Five AI Innovation Imperatives</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Based on our experience helping Fortune 500 companies navigate their AI journey, we've 
            identified five critical imperatives for successful AI transformation.
          </p>

          <FeatureGrid
            features={[
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Business Outcome Focus',
                description: 'Start with clear business problems and measurable success criteria, not technology experiments.',
                stats: { value: '3x', label: 'Higher ROI' }
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: 'Rapid Value Delivery',
                description: 'Deliver tangible value within 4-6 weeks through targeted proof-of-concepts that scale.',
                stats: { value: '4-6', label: 'Weeks to value' }
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Organizational Enablement',
                description: 'Build internal capabilities, change workflows, and create a data-driven culture.',
                stats: { value: '85%', label: 'Adoption rate' }
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Responsible AI Governance',
                description: 'Embed ethics, bias detection, and explainability from day one for sustainable solutions.',
                stats: { value: '100%', label: 'Compliance' }
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: 'Scalable Architecture',
                description: 'Design technical and operating models that grow with your AI ambitions.',
                stats: { value: '10x', label: 'Scale potential' }
              }
            ]}
            columns={3}
            variant="cards"
          />
        </div>

        {/* Framework Phases with Process Flow */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The Previsant AI Framework</h2>
          
          <ProcessFlow
            steps={[
              {
                title: 'Vision & Discovery',
                description: '1-2 weeks',
                number: '1'
              },
              {
                title: 'Proof of Value',
                description: '4-6 weeks',
                number: '2'
              },
              {
                title: 'Scale & Enable',
                description: 'Ongoing',
                number: '3'
              }
            ]}
            className="mb-12"
          />

          <TabbedContent
            tabs={[
              {
                label: 'Phase 1: Vision & Discovery',
                content: (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Establish a clear vision and roadmap for AI transformation aligned with business objectives.
                    </p>
                    <FeatureGrid
                      features={[
                        {
                          icon: <Brain className="w-6 h-6" />,
                          title: 'Business Case Development',
                          description: 'Define ROI metrics and prioritize high-impact use cases'
                        },
                        {
                          icon: <Lightbulb className="w-6 h-6" />,
                          title: 'Use Case Identification',
                          description: 'Assess feasibility and potential value of AI applications'
                        },
                        {
                          icon: <BarChart3 className="w-6 h-6" />,
                          title: 'Data Readiness',
                          description: 'Evaluate data quality, availability, and infrastructure'
                        },
                        {
                          icon: <Target className="w-6 h-6" />,
                          title: 'Success Metrics',
                          description: 'Define KPIs and measurement frameworks'
                        }
                      ]}
                      columns={2}
                      variant="icons"
                    />
                  </div>
                )
              },
              {
                label: 'Phase 2: Proof of Value',
                content: (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Rapidly develop and validate AI solutions that demonstrate tangible business value.
                    </p>
                    <Timeline
                      items={[
                        {
                          title: 'Week 1-2: Rapid Prototyping',
                          description: 'Build initial models and proof-of-concepts',
                          completed: true
                        },
                        {
                          title: 'Week 3-4: Model Validation',
                          description: 'Test accuracy, performance, and business alignment',
                          completed: true
                        },
                        {
                          title: 'Week 5-6: Integration Design',
                          description: 'Plan deployment and process changes',
                          completed: false
                        }
                      ]}
                      variant="horizontal"
                    />
                  </div>
                )
              },
              {
                label: 'Phase 3: Scale & Enable',
                content: (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Deploy solutions at scale while building organizational capabilities for sustained success.
                    </p>
                    <Accordion
                      items={[
                        {
                          title: 'Production Deployment',
                          content: <p>Implement robust MLOps practices for model deployment, monitoring, and continuous improvement across the enterprise.</p>
                        },
                        {
                          title: 'Change Management',
                          content: <p>Drive adoption through comprehensive training, communication, and organizational alignment programs.</p>
                        },
                        {
                          title: 'Governance Framework',
                          content: <p>Establish policies for responsible AI, including bias monitoring, explainability, and ethical guidelines.</p>
                        },
                        {
                          title: 'Continuous Expansion',
                          content: <p>Identify new use cases and opportunities for AI-driven value creation across the organization.</p>
                        }
                      ]}
                      variant="bordered"
                    />
                  </div>
                )
              }
            ]}
            variant="pills"
          />
        </div>

        {/* Case Study with Visual Stats */}
        <div className="my-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Case Study: Healthcare Payment Integrity</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-6">
                A major health plan faced $2B+ in annual improper payments with traditional methods 
                catching only 30% of issues. They needed a transformative approach to payment integrity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Solution</h3>
              <p className="text-gray-700 mb-6">
                We implemented an AI-powered detection system with explainable models, following our 
                proven framework for rapid deployment and organizational enablement.
              </p>
            </div>
          </div>

          <StatisticsDisplay
            stats={{
              before: { label: 'Traditional Detection', value: '30%' },
              after: { label: 'AI-Powered Detection', value: '85%' },
              improvement: '+183% improvement'
            }}
            variant="comparison"
            className="mb-8"
          />

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">6 weeks</div>
              <div className="text-sm text-gray-600">To first value</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">$20M+</div>
              <div className="text-sm text-gray-600">Initial savings</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">$100M+</div>
              <div className="text-sm text-gray-600">Annual impact</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600">Analysts trained</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="my-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Path Forward</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Successful AI transformation doesn't happen by accident. It requires disciplined execution, 
            the right framework, and experienced partners who understand both the technology and the 
            business context.
          </p>
          
          <QuoteBlock
            quote="The Previsant AI Innovation Framework provides a proven path from AI experimentation to scaled business impact. Whether you're just starting your AI journey or looking to accelerate existing initiatives, we're here to help you achieve sustainable transformation."
            author="Previsant Analytics Team"
            role="Your AI Transformation Partners"
            variant="testimonial"
          />
        </div>
      </div>
    )
  }

  return <ResourceDetailTemplate {...resourceData} />
}

export default AIInnovationFramework