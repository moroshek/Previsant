import React from 'react'
import ResourceDetailTemplate from './ResourceDetailTemplate'
import { HeroSection } from '@/components/ui/hero-section'
import { FeatureGrid } from '@/components/ui/feature-grid'
import { StatisticsDisplay, StatCard } from '@/components/ui/statistics-display'
import { Timeline, ProcessFlow } from '@/components/ui/timeline'
import { QuoteBlock, Callout } from '@/components/ui/quote-block'
import { Accordion, FAQAccordion } from '@/components/ui/accordion'
import { ComparisonTable } from '@/components/ui/comparison-table'
import { TabbedContent, VerticalTabs } from '@/components/ui/tabbed-content'
import { 
  Target, Search, CheckCircle, Lightbulb, TrendingUp, Award,
  FileText, Users, Settings, Shield, BarChart, Zap,
  Building, DollarSign, Clock, ArrowRight, Layers
} from 'lucide-react'

const AIStrategyOffering = () => {
  const resourceData = {
    id: 6,
    title: 'Previsant AI Strategy Offering',
    category: 'solution',
    description: 'Create an actionable AI strategy that ensures sustainable economic value driven by responsible, ethical AI.',
    readTime: '10 min read',
    publishDate: 'June 2024',
    author: {
      name: 'Previsant Strategy Team',
      role: 'AI Strategy Consultants'
    },
    highlights: [
      'Vision & Discovery workshops',
      'AI Readiness Assessment framework',
      'Proof of Value Pilot methodology',
      'Organizational enablement program'
    ],
    keyTakeaways: [
      'AI strategy must align with business strategy to deliver value',
      'Readiness assessment prevents costly false starts',
      'Proof of value pilots de-risk AI investments',
      'Success requires equal focus on technology and organizational change'
    ],
    content: (
      <div className="space-y-16">
        {/* Opening Hero Message */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transform Your Business with Strategic AI
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            In the age of AI, every company needs a clear strategy to harness its transformative 
            potential while managing risks. Previsant's AI Strategy Offering provides a proven 
            path from vision to value, ensuring your AI investments deliver sustainable business impact.
          </p>
        </div>

        {/* Three-Phase Approach with Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Three-Phase Approach
          </h2>
          
          <Timeline
            items={[
              {
                title: 'Phase 1: Vision & Discovery',
                date: 'Weeks 1-2',
                description: 'Align AI opportunities with your business strategy through collaborative workshops',
                milestones: [
                  'Executive Visioning Sessions',
                  'Use Case Identification',
                  'Value Modeling',
                  'Risk Assessment'
                ],
                stats: [
                  { value: '20+', label: 'Use cases identified' },
                  { value: '5-10', label: 'Prioritized opportunities' }
                ]
              },
              {
                title: 'Phase 2: Readiness Assessment',
                date: 'Weeks 3-4',
                description: 'Evaluate organizational preparedness across critical dimensions',
                milestones: [
                  'Data Maturity Analysis',
                  'Technology Infrastructure Review',
                  'Capability Assessment',
                  'Operating Model Evaluation'
                ],
                stats: [
                  { value: '4', label: 'Dimensions assessed' },
                  { value: '30+', label: 'Criteria evaluated' }
                ]
              },
              {
                title: 'Phase 3: Proof of Value Pilot',
                date: 'Weeks 5-8',
                description: 'Rapidly demonstrate AI value through focused implementation',
                milestones: [
                  'Pilot Selection & Scoping',
                  'Rapid Development Sprint',
                  'Value Validation',
                  'Scaling Roadmap Creation'
                ],
                stats: [
                  { value: '4-6', label: 'Weeks to value' },
                  { value: '10x', label: 'ROI potential' }
                ]
              }
            ]}
            variant="vertical"
          />
        </div>

        {/* Key Deliverables with Tabbed Content */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Deliverables</h2>
          
          <VerticalTabs
            tabs={[
              {
                label: 'AI Strategy Blueprint',
                icon: <FileText className="w-5 h-5" />,
                title: 'Comprehensive AI Strategy Blueprint',
                content: (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      A detailed roadmap that transforms your AI vision into actionable initiatives 
                      with clear timelines and success metrics.
                    </p>
                    <FeatureGrid
                      features={[
                        {
                          icon: <Target className="w-6 h-6" />,
                          title: '3-Year Vision & Roadmap',
                          description: 'Strategic phases with clear milestones and dependencies'
                        },
                        {
                          icon: <Layers className="w-6 h-6" />,
                          title: 'Prioritized Use Case Portfolio',
                          description: 'Ranked opportunities based on value and feasibility'
                        },
                        {
                          icon: <DollarSign className="w-6 h-6" />,
                          title: 'Investment & ROI Analysis',
                          description: 'Detailed financial projections and business case'
                        },
                        {
                          icon: <Shield className="w-6 h-6" />,
                          title: 'Risk Mitigation Plan',
                          description: 'Identified risks with prevention and response strategies'
                        }
                      ]}
                      columns={2}
                      variant="icons"
                    />
                  </div>
                )
              },
              {
                label: 'Readiness Report',
                icon: <BarChart className="w-5 h-5" />,
                title: 'AI Readiness Assessment Report',
                content: (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Comprehensive evaluation of your organization's AI readiness with actionable 
                      recommendations for closing gaps.
                    </p>
                    <ComparisonTable
                      headers={['Assessment Area', 'Current State', 'Target State', 'Priority']}
                      rows={[
                        ['Data Maturity', 'Level 2: Managed', 'Level 4: Optimized', 'High'],
                        ['Technology Stack', 'Level 3: Defined', 'Level 4: Optimized', 'Medium'],
                        ['Skills & Capabilities', 'Level 2: Managed', 'Level 3: Defined', 'High'],
                        ['Governance', 'Level 1: Initial', 'Level 3: Defined', 'Critical']
                      ]}
                      highlightColumn={3}
                    />
                  </div>
                )
              },
              {
                label: 'Pilot Results',
                icon: <Zap className="w-5 h-5" />,
                title: 'Proof of Value Pilot Package',
                content: (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Working AI solution with validated business impact and clear path to scale.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <StatCard
                        title="Solution Prototype"
                        value="Live Demo"
                        subtitle="Fully functional AI solution ready for scaling"
                        icon={<CheckCircle className="w-6 h-6" />}
                      />
                      <StatCard
                        title="Performance Metrics"
                        value="95%+"
                        subtitle="Accuracy and reliability validated"
                        icon={<TrendingUp className="w-6 h-6" />}
                      />
                      <StatCard
                        title="Business Impact"
                        value="$2-5M"
                        subtitle="Projected annual value creation"
                        icon={<DollarSign className="w-6 h-6" />}
                      />
                      <StatCard
                        title="Time to Scale"
                        value="3-6 mo"
                        subtitle="From pilot to production deployment"
                        icon={<Clock className="w-6 h-6" />}
                      />
                    </div>
                  </div>
                )
              }
            ]}
          />
        </div>

        {/* Why Choose Previsant */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Previsant</h2>
          
          <FeatureGrid
            features={[
              {
                icon: <Building className="w-8 h-8" />,
                title: 'Deep Industry Expertise',
                description: 'Decades of experience in healthcare, insurance, and financial services with proven results'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Proven Methodology',
                description: 'Average ROI exceeding 300% within 18 months for Fortune 500 clients'
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: 'End-to-End Capabilities',
                description: 'Comprehensive support from strategy through implementation and optimization'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Responsible AI Focus',
                description: 'Ethics, fairness, and transparency embedded in every recommendation'
              }
            ]}
            columns={4}
            variant="icons"
          />
        </div>

        {/* Success Stories with Visual Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Success Stories</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Real results from organizations that transformed their operations with our AI strategy
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Major Health Plan</h3>
              </div>
              <Callout
                title="Challenge"
                content="Reduce $2B+ in annual payment integrity losses"
                variant="info"
                className="mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">AI-powered fraud detection</span>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-3xl font-bold text-green-600">$100M+</div>
                  <div className="text-sm text-gray-600">Annual savings achieved</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Regional Bank</h3>
              </div>
              <Callout
                title="Challenge"
                content="Improve loan underwriting speed and accuracy"
                variant="info"
                className="mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">ML-based risk assessment</span>
                </div>
                <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">70%</div>
                    <div className="text-xs text-gray-600">Faster decisions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">25%</div>
                    <div className="text-xs text-gray-600">Lower defaults</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Insurance Carrier</h3>
              </div>
              <Callout
                title="Challenge"
                content="Enhance claims processing efficiency"
                variant="info"
                className="mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Intelligent document processing</span>
                </div>
                <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">60%</div>
                    <div className="text-xs text-gray-600">Automation rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">90%</div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your AI Journey Starts Here</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Don't let AI complexity prevent you from capturing its value. Partner with 
            Previsant to develop and execute an AI strategy that drives real business 
            results while building sustainable capabilities for the future.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <StatCard
              title="Average Client ROI"
              value="300%+"
              subtitle="Within 18 months"
              icon={<TrendingUp className="w-6 h-6" />}
              className="w-full md:w-64"
            />
            <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
            <StatCard
              title="Time to First Value"
              value="4-6 weeks"
              subtitle="From kickoff to pilot"
              icon={<Zap className="w-6 h-6" />}
              className="w-full md:w-64"
            />
          </div>
        </div>
      </div>
    )
  }

  return <ResourceDetailTemplate {...resourceData} />
}

export default AIStrategyOffering