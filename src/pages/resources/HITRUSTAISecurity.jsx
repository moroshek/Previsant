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
  Shield, Lock, CheckCircle, Award, Users, TrendingUp, 
  FileCheck, AlertTriangle, Zap, Target, Building, BookOpen
} from 'lucide-react'

const HITRUSTAISecurity = () => {
  const resourceData = {
    id: 2,
    title: 'Demonstrating Secure, Auditable, & Responsible AI',
    category: 'whitepaper',
    description: 'Navigate HITRUST AI certification to gain market confidence in your AI practices and capabilities.',
    readTime: '5 min read',
    publishDate: 'October 2024',
    author: {
      name: 'Previsant Security Team',
      role: 'AI Security & Compliance Experts'
    },
    highlights: [
      '90 new AI-specific security controls',
      'Three levels of compliance maturity',
      'Evidence repository requirements',
      'Certification process roadmap'
    ],
    keyTakeaways: [
      'HITRUST AI certification provides third-party validation of responsible AI practices',
      'The framework addresses unique AI risks including bias, explainability, and data privacy',
      'Organizations can choose from three certification levels based on AI maturity',
      'Certification significantly reduces vendor assessment burden and accelerates sales cycles'
    ],
    content: (
      <div className="space-y-12">
        {/* Introduction with Hero Quote */}
        <div>
          <QuoteBlock
            quote="As AI transforms healthcare, demonstrating security, reliability, and ethical deployment is no longer optional—it's a business imperative."
            variant="highlight"
          />
          
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Traditional security frameworks weren't designed for AI's unique challenges. HITRUST AI 
            fills this critical gap with purpose-built certification that validates responsible AI practices.
          </p>
        </div>

        {/* Key Stats */}
        <div className="my-12">
          <StatisticsDisplay
            stats={[
              { value: '90', label: 'AI-specific controls' },
              { value: '3', label: 'Certification levels' },
              { value: '50%', label: 'Reduced assessments' },
              { value: '30%', label: 'Faster sales cycles' }
            ]}
            variant="cards"
            className="mb-8"
          />
        </div>

        {/* HITRUST AI Framework Overview */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">HITRUST AI: A New Standard for Responsible AI</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            HITRUST has extended its industry-leading certification framework to address AI-specific 
            risks and requirements across six critical domains.
          </p>

          <FeatureGrid
            features={[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'AI Governance',
                description: 'Establish accountability frameworks and ethical oversight for AI systems.',
                stats: { value: '100%', label: 'Coverage' }
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: 'Model Security',
                description: 'Protect AI models from tampering, theft, and adversarial attacks.',
                stats: { value: 'End-to-end', label: 'Protection' }
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Data Privacy',
                description: 'Ensure patient data protection throughout the AI lifecycle.',
                stats: { value: 'HIPAA+', label: 'Compliance' }
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Bias Detection',
                description: 'Identify and mitigate algorithmic bias across protected classes.',
                stats: { value: 'Continuous', label: 'Monitoring' }
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Explainability',
                description: 'Make AI decisions transparent and understandable to stakeholders.',
                stats: { value: 'Full', label: 'Transparency' }
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Performance',
                description: 'Monitor model accuracy, drift, and operational metrics.',
                stats: { value: 'Real-time', label: 'Tracking' }
              }
            ]}
            columns={3}
            variant="cards"
          />
        </div>

        {/* Control Categories with Tabs */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The 90 New AI Controls</h2>
          
          <TabbedContent
            tabs={[
              {
                label: 'AI Governance (15)',
                content: (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Establish the foundation for responsible AI through comprehensive governance structures.
                    </p>
                    <FeatureGrid
                      features={[
                        {
                          icon: <Users className="w-6 h-6" />,
                          title: 'Ethics Committees',
                          description: 'AI ethics committees with defined charter and oversight responsibilities'
                        },
                        {
                          icon: <AlertTriangle className="w-6 h-6" />,
                          title: 'Risk Assessment',
                          description: 'AI-specific risk assessment methodologies and frameworks'
                        },
                        {
                          icon: <Shield className="w-6 h-6" />,
                          title: 'Accountability',
                          description: 'Clear accountability frameworks and role definitions'
                        },
                        {
                          icon: <Building className="w-6 h-6" />,
                          title: 'Vendor Management',
                          description: 'Third-party AI vendor assessment and management requirements'
                        }
                      ]}
                      columns={2}
                      variant="icons"
                    />
                  </div>
                )
              },
              {
                label: 'Development & Testing (25)',
                content: (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Ensure AI models are developed and tested with security and quality in mind.
                    </p>
                    <FeatureGrid
                      features={[
                        {
                          icon: <Lock className="w-6 h-6" />,
                          title: 'Secure Development',
                          description: 'Secure AI development lifecycle with defined checkpoints'
                        },
                        {
                          icon: <FileCheck className="w-6 h-6" />,
                          title: 'Data Quality',
                          description: 'Data quality standards and lineage tracking requirements'
                        },
                        {
                          icon: <CheckCircle className="w-6 h-6" />,
                          title: 'Model Validation',
                          description: 'Comprehensive model validation and testing procedures'
                        },
                        {
                          icon: <Target className="w-6 h-6" />,
                          title: 'Bias Testing',
                          description: 'Systematic bias testing protocols across protected attributes'
                        }
                      ]}
                      columns={2}
                      variant="icons"
                    />
                  </div>
                )
              },
              {
                label: 'Operations (30)',
                content: (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Maintain security and performance in production AI environments.
                    </p>
                    <FeatureGrid
                      features={[
                        {
                          icon: <Shield className="w-6 h-6" />,
                          title: 'Production Security',
                          description: 'Hardened production environments with access controls'
                        },
                        {
                          icon: <TrendingUp className="w-6 h-6" />,
                          title: 'Performance Monitoring',
                          description: 'Continuous monitoring of model performance and drift'
                        },
                        {
                          icon: <Zap className="w-6 h-6" />,
                          title: 'Incident Response',
                          description: 'AI-specific incident response and recovery procedures'
                        },
                        {
                          icon: <FileCheck className="w-6 h-6" />,
                          title: 'Change Management',
                          description: 'Rigorous change control for model updates and deployments'
                        }
                      ]}
                      columns={2}
                      variant="icons"
                    />
                  </div>
                )
              },
              {
                label: 'Transparency (20)',
                content: (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Enable transparency and maintain accountability throughout the AI lifecycle.
                    </p>
                    <FeatureGrid
                      features={[
                        {
                          icon: <BookOpen className="w-6 h-6" />,
                          title: 'Explainability',
                          description: 'Model explainability requirements for different stakeholders'
                        },
                        {
                          icon: <FileCheck className="w-6 h-6" />,
                          title: 'Audit Trails',
                          description: 'Comprehensive audit trail maintenance and retention'
                        },
                        {
                          icon: <Users className="w-6 h-6" />,
                          title: 'User Notification',
                          description: 'Clear standards for AI use disclosure to end users'
                        },
                        {
                          icon: <Award className="w-6 h-6" />,
                          title: 'Compliance Reporting',
                          description: 'Regular compliance reporting and attestation processes'
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

        {/* Certification Levels */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Three Levels of Certification</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Choose the certification level that matches your AI maturity and business requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-900">Foundational</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Basic AI governance and security controls for organizations beginning their AI journey.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">40 core controls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Basic governance framework</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Essential security measures</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-300">
                <div className="text-sm text-gray-600">Best for:</div>
                <div className="font-semibold text-gray-900">AI Pilots & POCs</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-300 relative">
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-900">Managed</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Comprehensive AI risk management for organizations with production AI systems.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">65 controls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Advanced monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Bias detection required</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-300">
                <div className="text-sm text-gray-600">Best for:</div>
                <div className="font-semibold text-gray-900">Production AI Systems</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-900">Optimized</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Industry-leading practices for organizations with mission-critical AI deployments.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">All 90 controls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Continuous improvement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Industry leadership</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-purple-300">
                <div className="text-sm text-gray-600">Best for:</div>
                <div className="font-semibold text-gray-900">Enterprise AI Leaders</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Process Timeline */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The Certification Process</h2>
          
          <ProcessFlow
            steps={[
              {
                title: 'Gap Assessment',
                description: 'Month 1',
                number: '1'
              },
              {
                title: 'Remediation',
                description: 'Months 2-4',
                number: '2'
              },
              {
                title: 'Evidence Collection',
                description: 'Month 5',
                number: '3'
              },
              {
                title: 'External Assessment',
                description: 'Month 6',
                number: '4'
              }
            ]}
            className="mb-12"
          />

          <Timeline
            items={[
              {
                title: 'Gap Assessment',
                description: 'Evaluate current AI practices against HITRUST requirements',
                completed: true
              },
              {
                title: 'Remediation Planning',
                description: 'Develop roadmap to address identified gaps',
                completed: true
              },
              {
                title: 'Control Implementation',
                description: 'Deploy missing controls and update processes',
                completed: false
              },
              {
                title: 'Evidence Documentation',
                description: 'Compile comprehensive evidence of control effectiveness',
                completed: false
              },
              {
                title: 'External Validation',
                description: 'Third-party assessment and certification decision',
                completed: false
              }
            ]}
            variant="vertical"
          />
        </div>

        {/* Business Benefits with Visual Stats */}
        <div className="my-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Proven Business Benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Efficiency</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Customer Assessments</span>
                    <span className="text-2xl font-bold text-green-600">-50%</span>
                  </div>
                  <div className="text-sm text-gray-600">Reduce redundant security questionnaires</div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Sales Cycle Time</span>
                    <span className="text-2xl font-bold text-green-600">-30%</span>
                  </div>
                  <div className="text-sm text-gray-600">Accelerate deal closure with pre-validated security</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Advantages</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Market Trust</span>
                    <span className="text-2xl font-bold text-blue-600">+85%</span>
                  </div>
                  <div className="text-sm text-gray-600">Enhanced credibility with stakeholders</div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Competitive Win Rate</span>
                    <span className="text-2xl font-bold text-blue-600">+40%</span>
                  </div>
                  <div className="text-sm text-gray-600">Stand out in RFPs with certification</div>
                </div>
              </div>
            </div>
          </div>

          <Callout
            title="Risk Reduction Bonus"
            content="Certified organizations report 75% fewer AI-related security incidents and 90% faster incident resolution when issues do occur."
            icon={<Shield className="w-6 h-6 text-green-600" />}
            variant="success"
          />
        </div>

        {/* Getting Started CTA */}
        <div className="my-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Whether you're an AI vendor seeking market validation or an enterprise deploying AI internally, 
            HITRUST AI certification provides a clear path to demonstrating responsible AI practices.
          </p>
          
          <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Partner with Previsant</h3>
            <p className="text-lg mb-8 opacity-90">
              Our certified assessors guide you through the entire HITRUST AI certification journey, 
              from initial gap assessment to successful certification.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Certified Assessors</div>
                <div className="text-sm opacity-80">Expert HITRUST practitioners</div>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Accelerated Timeline</div>
                <div className="text-sm opacity-80">3-6 month certification path</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 opacity-80" />
                <div className="font-semibold">Success Guarantee</div>
                <div className="text-sm opacity-80">98% first-time pass rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <ResourceDetailTemplate {...resourceData} />
}

export default HITRUSTAISecurity