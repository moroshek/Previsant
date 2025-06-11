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
import { Card, CardContent } from '@/components/ui/card'
import { 
  Users, Database, Cog, Brain, Building, TrendingUp, 
  CheckCircle, Target, Zap, Shield, BarChart3, Layers
} from 'lucide-react'

const StrategicEnablement = () => {
  const resourceData = {
    id: 4,
    title: 'Strategic Enablement for Data & Analytics Success',
    category: 'guide',
    description: 'Foundational people, process and technology capabilities for sustainable business value.',
    readTime: '12 min read',
    publishDate: 'August 2024',
    author: {
      name: 'Sarah Chen',
      role: 'Director of Strategic Consulting'
    },
    highlights: [
      'Operating Model design and implementation',
      'Data Governance framework establishment',
      'Talent Strategy and capability building',
      'Modern Architecture patterns'
    ],
    keyTakeaways: [
      'Success requires equal focus on people, process, and technology',
      'Operating models must align with organizational culture and maturity',
      'Data governance is an enabler, not a barrier, when done right',
      'Talent strategy should balance build, buy, and partner approaches'
    ],
    content: (
      <div className="space-y-12">
        {/* Introduction with Visual Impact */}
        <div>
          <QuoteBlock
            quote="Technology is only 30% of the analytics equation. Success comes from aligning people, processes, and platforms into a cohesive capability."
            variant="highlight"
          />
          
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            While many organizations rush to implement the latest analytics technologies, 
            sustainable success requires a solid foundation across all dimensions. This guide 
            provides a comprehensive framework for building these critical enablement capabilities.
          </p>
        </div>

        {/* Success Factors Overview */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Analytics Success Framework</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">People</h3>
                <p className="text-gray-600 mb-4">Talent, culture, and organizational design</p>
                <div className="text-3xl font-bold text-primary">33%</div>
                <div className="text-sm text-gray-500">of success equation</div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Cog className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Process</h3>
                <p className="text-gray-600 mb-4">Governance, workflows, and standards</p>
                <div className="text-3xl font-bold text-primary">33%</div>
                <div className="text-sm text-gray-500">of success equation</div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Database className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Technology</h3>
                <p className="text-gray-600 mb-4">Architecture, tools, and infrastructure</p>
                <div className="text-3xl font-bold text-primary">34%</div>
                <div className="text-sm text-gray-500">of success equation</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Operating Model Deep Dive */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Operating Model: Organizing for Success</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The right operating model balances centralized governance with distributed innovation, 
            tailored to your organization's culture and maturity.
          </p>
          
          <TabbedContent
            tabs={[
              {
                label: 'Centralized Model',
                content: (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <Building className="w-12 h-12 text-blue-600" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Center of Excellence</h3>
                        <p className="text-gray-600">All analytics capabilities report to a central team</p>
                      </div>
                    </div>
                    <FeatureGrid
                      features={[
                        {
                          icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                          title: 'Pros',
                          description: 'Strong governance, consistent standards, economies of scale'
                        },
                        {
                          icon: <Target className="w-6 h-6 text-red-600" />,
                          title: 'Cons',
                          description: 'Slower response, potential disconnect from business'
                        },
                        {
                          icon: <Users className="w-6 h-6 text-blue-600" />,
                          title: 'Best For',
                          description: 'Organizations beginning their analytics journey'
                        },
                        {
                          icon: <Zap className="w-6 h-6 text-purple-600" />,
                          title: 'Key Success Factor',
                          description: 'Strong business engagement model'
                        }
                      ]}
                      columns={2}
                      variant="icons"
                    />
                  </div>
                )
              },
              {
                label: 'Federated Model',
                content: (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <Layers className="w-12 h-12 text-green-600" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Distributed Teams</h3>
                        <p className="text-gray-600">Analytics capabilities embedded in business units</p>
                      </div>
                    </div>
                    <FeatureGrid
                      features={[
                        {
                          icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                          title: 'Pros',
                          description: 'Close to business, rapid response, high relevance'
                        },
                        {
                          icon: <Target className="w-6 h-6 text-red-600" />,
                          title: 'Cons',
                          description: 'Duplication, inconsistent standards, governance challenges'
                        },
                        {
                          icon: <Users className="w-6 h-6 text-blue-600" />,
                          title: 'Best For',
                          description: 'Mature organizations with strong analytics culture'
                        },
                        {
                          icon: <Zap className="w-6 h-6 text-purple-600" />,
                          title: 'Key Success Factor',
                          description: 'Communities of practice and shared standards'
                        }
                      ]}
                      columns={2}
                      variant="icons"
                    />
                  </div>
                )
              },
              {
                label: 'Hybrid Model',
                content: (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <Brain className="w-12 h-12 text-purple-600" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Hub and Spoke</h3>
                        <p className="text-gray-600">Central governance with embedded delivery teams</p>
                      </div>
                    </div>
                    <FeatureGrid
                      features={[
                        {
                          icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                          title: 'Pros',
                          description: 'Balance of control and agility, scalable model'
                        },
                        {
                          icon: <Target className="w-6 h-6 text-red-600" />,
                          title: 'Cons',
                          description: 'Complex to manage, requires clear boundaries'
                        },
                        {
                          icon: <Users className="w-6 h-6 text-blue-600" />,
                          title: 'Best For',
                          description: 'Large enterprises with diverse analytics needs'
                        },
                        {
                          icon: <Zap className="w-6 h-6 text-purple-600" />,
                          title: 'Key Success Factor',
                          description: 'Clear roles and strong collaboration model'
                        }
                      ]}
                      columns={2}
                      variant="icons"
                    />
                  </div>
                )
              }
            ]}
            variant="pills"
          />
        </div>

        {/* Data Governance Framework */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Data Governance: Enabling Trust and Innovation</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Modern data governance moves beyond compliance to enable innovation while managing risk—it's 
            an accelerator, not a barrier.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <FeatureGrid
              features={[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Data Quality Management',
                  description: 'Ensure accuracy, completeness, and reliability of analytics data.',
                  stats: { value: '95%+', label: 'Quality target' },
                  features: [
                    'Automated quality checks',
                    'Issue tracking and resolution',
                    'Quality metrics dashboards',
                    'Root cause analysis'
                  ]
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: 'Metadata & Catalog',
                  description: 'Create a searchable inventory of all data assets and their lineage.',
                  stats: { value: '100%', label: 'Asset coverage' },
                  features: [
                    'Business glossary',
                    'Technical metadata',
                    'Data lineage tracking',
                    'Impact analysis'
                  ]
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Privacy & Security',
                  description: 'Protect sensitive data while enabling appropriate access.',
                  stats: { value: 'Zero', label: 'Breaches' },
                  features: [
                    'Role-based access control',
                    'Data classification',
                    'Encryption standards',
                    'Audit logging'
                  ]
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Self-Service Access',
                  description: 'Empower users with governed self-service data access.',
                  stats: { value: '< 24hrs', label: 'Access time' },
                  features: [
                    'Data marketplace',
                    'Automated provisioning',
                    'Usage monitoring',
                    'Compliance tracking'
                  ]
                }
              ]}
              columns={2}
              variant="cards"
            />
          </div>
          
          <Callout
            title="The Governance Paradox"
            content="Well-designed governance actually increases data usage by 3x through improved trust, findability, and self-service capabilities."
            icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
            variant="info"
            className="mt-8"
          />
        </div>

        {/* Talent Strategy */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Talent Strategy: Building Sustainable Capabilities</h2>
          
          <StatisticsDisplay
            stats={[
              { value: '150K', label: 'Analytics talent gap' },
              { value: '35%', label: 'Annual turnover rate' },
              { value: '2.3x', label: 'Salary premium' },
              { value: '6-9', label: 'Months to hire' }
            ]}
            variant="cards"
            className="mb-12"
          />
          
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Success requires a strategic approach to acquiring, developing, and retaining analytics talent.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Build</h3>
                <p className="text-gray-600 mb-4">Develop internal talent through training and upskilling</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Analytics bootcamps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Rotation programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Mentorship initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Certification support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Buy</h3>
                <p className="text-gray-600 mb-4">Recruit experienced professionals from the market</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Competitive packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Remote work options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Clear career paths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Innovation culture</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Partner</h3>
                <p className="text-gray-600 mb-4">Leverage external expertise for specialized needs</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Strategic consultants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Managed services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Staff augmentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>CoE partnerships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Architecture */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Technology Architecture: Scalable Foundations</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Modern analytics architectures must balance flexibility with governance, enabling both 
            innovation and enterprise-scale operations.
          </p>
          
          <Accordion
            items={[
              {
                title: 'Cloud-Native Design',
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Leverage cloud elasticity and managed services for scalability and cost optimization.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Patterns</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Serverless computing</li>
                          <li>• Auto-scaling clusters</li>
                          <li>• Managed databases</li>
                          <li>• Container orchestration</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• 70% lower TCO</li>
                          <li>• Infinite scalability</li>
                          <li>• Built-in resilience</li>
                          <li>• Pay-per-use pricing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: 'Real-Time & Batch Processing',
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Support both streaming analytics and traditional batch processing for comprehensive insights.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Real-Time Stack</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Event streaming platforms</li>
                          <li>• Stream processing engines</li>
                          <li>• Real-time databases</li>
                          <li>• Low-latency APIs</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Batch Stack</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Data lakes & warehouses</li>
                          <li>• ETL/ELT pipelines</li>
                          <li>• Scheduled workflows</li>
                          <li>• Historical analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: 'Microservices & APIs',
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Build modular, reusable analytics services that can be composed into solutions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Architecture Principles</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Domain-driven design</li>
                          <li>• API-first development</li>
                          <li>• Loose coupling</li>
                          <li>• Event-driven patterns</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Implementation</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• API gateway</li>
                          <li>• Service mesh</li>
                          <li>• Container registry</li>
                          <li>• CI/CD pipelines</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: 'DataOps & MLOps',
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Automate and standardize data pipeline and ML model lifecycle management.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">DataOps Practices</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Pipeline orchestration</li>
                          <li>• Data quality monitoring</li>
                          <li>• Version control</li>
                          <li>• Automated testing</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">MLOps Practices</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Model versioning</li>
                          <li>• A/B testing</li>
                          <li>• Drift detection</li>
                          <li>• Feature stores</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              }
            ]}
            variant="bordered"
          />
        </div>

        {/* Implementation Roadmap */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Implementation Roadmap</h2>
          
          <ProcessFlow
            steps={[
              {
                title: 'Assess',
                description: 'Weeks 1-4',
                number: '1'
              },
              {
                title: 'Design',
                description: 'Weeks 5-8',
                number: '2'
              },
              {
                title: 'Quick Wins',
                description: 'Weeks 9-16',
                number: '3'
              },
              {
                title: 'Scale',
                description: 'Months 5-12',
                number: '4'
              },
              {
                title: 'Optimize',
                description: 'Ongoing',
                number: '5'
              }
            ]}
            className="mb-12"
          />
          
          <Timeline
            items={[
              {
                title: 'Current State Assessment',
                description: 'Comprehensive evaluation of existing capabilities and gaps',
                date: 'Weeks 1-4',
                metrics: [
                  { icon: BarChart3, value: 'Maturity assessment' },
                  { icon: Users, value: 'Stakeholder interviews' }
                ]
              },
              {
                title: 'Target State Design',
                description: 'Define future-state operating model and architecture',
                date: 'Weeks 5-8',
                metrics: [
                  { icon: Target, value: 'Vision & strategy' },
                  { icon: Building, value: 'Org design' }
                ]
              },
              {
                title: 'Quick Wins Implementation',
                description: 'Deliver immediate value while building foundation',
                date: 'Weeks 9-16',
                metrics: [
                  { icon: Zap, value: '2-3 use cases' },
                  { icon: TrendingUp, value: 'ROI demonstration' }
                ]
              },
              {
                title: 'Capability Building',
                description: 'Scale successful patterns across the organization',
                date: 'Months 5-12',
                metrics: [
                  { icon: Users, value: 'Team expansion' },
                  { icon: Database, value: 'Platform rollout' }
                ]
              },
              {
                title: 'Continuous Optimization',
                description: 'Ongoing improvement and innovation',
                date: 'Month 13+',
                metrics: [
                  { icon: Brain, value: 'Advanced analytics' },
                  { icon: Shield, value: 'Governance maturity' }
                ]
              }
            ]}
          />
        </div>
        
        {/* Success Metrics */}
        <div className="my-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Measuring Success</h2>
          
          <StatisticsDisplay
            stats={[
              { value: '3-5x', label: 'ROI within 18 months' },
              { value: '60%', label: 'Faster time to insight' },
              { value: '40%', label: 'Reduction in data silos' },
              { value: '85%', label: 'User satisfaction score' }
            ]}
            variant="cards"
            className="mb-8"
          />
          
          <QuoteBlock
            quote="The most successful analytics transformations focus equally on people, process, and technology—with a relentless focus on business value."
            author="Sarah Chen"
            role="Director of Strategic Consulting, Previsant"
            variant="testimonial"
          />
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Foundation?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Strategic enablement is the difference between analytics projects and analytics transformation. 
            Let Previsant guide you in building a sustainable foundation for data-driven success.
          </p>
          
          <Callout
            title="Start Your Journey"
            content="Our strategic enablement experts can help you design and implement the operating model, governance framework, and technical architecture that will power your analytics success."
            icon={<Building className="w-6 h-6 text-primary" />}
            variant="primary"
          />
        </div>
      </div>
    )
  }

  return <ResourceDetailTemplate {...resourceData} />
}

export default StrategicEnablement