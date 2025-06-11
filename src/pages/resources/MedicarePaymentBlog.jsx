import React from 'react'
import ResourceDetailTemplate from './ResourceDetailTemplate'
import { StatisticsDisplay, StatCard } from '@/components/ui/statistics-display'
import { FeatureGrid } from '@/components/ui/feature-grid'
import { Timeline, ProcessFlow } from '@/components/ui/timeline'
import { QuoteBlock, Callout } from '@/components/ui/quote-block'
import { ComparisonTable } from '@/components/ui/comparison-table'
import { ProgressBar } from '@/components/ui/data-visualization'
import { Card, CardContent } from '@/components/ui/card'
import { 
  DollarSign, TrendingUp, AlertTriangle, Target, Users, 
  CheckCircle, Activity, FileText, Brain, Zap, Shield
} from 'lucide-react'

const MedicarePaymentBlog = () => {
  const resourceData = {
    id: 5,
    title: '2022 Medicare Payment Focus: Knee & Hip Replacements',
    category: 'report',
    description: 'Addressing the $550M improper payment opportunity in total knee and hip replacements.',
    readTime: '8 min read',
    publishDate: 'July 2024',
    author: {
      name: 'Dr. Michael Roberts',
      role: 'Chief Medical Officer'
    },
    highlights: [
      '$550M annual improper payment opportunity',
      '83.5% related to medical necessity',
      'Provider variation analysis insights',
      'Actionable intervention strategies'
    ],
    keyTakeaways: [
      'Medical necessity documentation is the primary driver of improper payments',
      'Significant provider variation indicates education opportunities',
      'Pre-authorization improvements can prevent downstream issues',
      'AI can identify at-risk claims before payment'
    ],
    content: (
      <div className="space-y-12">
        {/* Executive Summary with Visual Impact */}
        <div>
          <QuoteBlock
            quote="Total knee and hip replacements represent a $550 million annual improper payment opportunity—but the solution is within reach."
            variant="highlight"
          />
          
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Medicare's Comprehensive Error Rate Testing (CERT) program has identified these common 
            procedures as a significant source of improper payments. Our analysis reveals both the 
            root causes and a clear path to dramatic improvement.
          </p>
        </div>

        {/* Key Metrics Dashboard */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Scale of the Challenge</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <StatCard
              icon={DollarSign}
              title="Annual Impact"
              value="550000000"
              prefix="$"
              suffix="+"
              color="warning"
            />
            <StatCard
              icon={Activity}
              title="Error Rate"
              value="15.7"
              suffix="%"
              color="warning"
            />
            <StatCard
              icon={Users}
              title="Affected Procedures"
              value="450000"
              suffix="+"
              color="info"
            />
            <StatCard
              icon={Target}
              title="Recovery Potential"
              value="275000000"
              prefix="$"
              color="success"
            />
          </div>

          <Callout
            title="Medical Necessity: The Primary Driver"
            content="83.5% of improper payments stem from insufficient documentation of medical necessity—a solvable problem with the right approach."
            icon={<AlertTriangle className="w-6 h-6 text-yellow-600" />}
            variant="warning"
            className="mt-8"
          />
        </div>

        {/* Error Category Breakdown */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Findings from CERT Analysis</h2>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Primary Error Categories</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-red-600" />
                    <span className="font-semibold text-gray-900">Medical Necessity</span>
                  </div>
                  <span className="text-2xl font-bold text-red-600">83.5%</span>
                </div>
                <ProgressBar value={83.5} color="error" className="mb-2" />
                <p className="text-sm text-gray-600">Insufficient documentation of conservative treatment attempts</p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Activity className="w-6 h-6 text-orange-600" />
                    <span className="font-semibold text-gray-900">Coding Errors</span>
                  </div>
                  <span className="text-2xl font-bold text-orange-600">9.2%</span>
                </div>
                <ProgressBar value={9.2} color="warning" className="mb-2" />
                <p className="text-sm text-gray-600">Incorrect DRG assignments and modifier usage</p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600" />
                    <span className="font-semibold text-gray-900">Documentation Gaps</span>
                  </div>
                  <span className="text-2xl font-bold text-yellow-600">7.3%</span>
                </div>
                <ProgressBar value={7.3} color="warning" className="mb-2" />
                <p className="text-sm text-gray-600">Missing operative reports or physician orders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Provider Variation Visual */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Provider Variation Analysis</h2>
          <p className="text-lg text-gray-600 mb-8">
            Error rates vary significantly by provider type, indicating targeted intervention opportunities:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Teaching Hospitals</h3>
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">12.3%</div>
                <div className="text-sm text-gray-600 mb-4">Error Rate</div>
                <ProgressBar value={12.3} maxValue={20} color="info" />
                <p className="text-xs text-gray-500 mt-2">Better documentation practices</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Community Hospitals</h3>
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">18.7%</div>
                <div className="text-sm text-gray-600 mb-4">Error Rate</div>
                <ProgressBar value={18.7} maxValue={20} color="warning" />
                <p className="text-xs text-gray-500 mt-2">Highest improvement opportunity</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Orthopedic Centers</h3>
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">8.9%</div>
                <div className="text-sm text-gray-600 mb-4">Error Rate</div>
                <ProgressBar value={8.9} maxValue={20} color="success" />
                <p className="text-xs text-gray-500 mt-2">Best practice leaders</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Root Cause Deep Dive */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Root Cause Analysis</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Documentation Gap Analysis</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-700">Conservative Treatment Documentation</span>
                  <span className="text-lg font-bold text-red-600">67% Missing</span>
                </div>
                <ProgressBar value={67} color="error" />
                <p className="text-sm text-gray-600 mt-2">Physical therapy, injections, and medication trials not recorded</p>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-700">Functional Assessment Scores</span>
                  <span className="text-lg font-bold text-orange-600">45% Missing</span>
                </div>
                <ProgressBar value={45} color="warning" />
                <p className="text-sm text-gray-600 mt-2">KOOS, HOOS, or similar validated assessments absent</p>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-700">Medical Necessity Criteria</span>
                  <span className="text-lg font-bold text-yellow-600">38% Incomplete</span>
                </div>
                <ProgressBar value={38} color="warning" />
                <p className="text-sm text-gray-600 mt-2">Failed to meet all Medicare coverage requirements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Intervention Strategy */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Recommended Interventions</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            A three-pronged approach can dramatically reduce improper payments while improving patient care.
          </p>
          
          <FeatureGrid
            features={[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Pre-Authorization Enhancement',
                description: 'Stop improper payments before they occur with intelligent authorization.',
                features: [
                  'Clinical decision support tools',
                  'Standardized functional assessments',
                  'Automated conservative treatment verification',
                  'Real-time eligibility checks'
                ]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Provider Education Program',
                description: 'Empower providers with knowledge and tools for compliance.',
                features: [
                  'Targeted outreach to high-error providers',
                  'Documentation best practices training',
                  'Peer benchmarking and feedback',
                  'Interactive learning modules'
                ]
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'AI-Powered Prepayment Review',
                description: 'Leverage artificial intelligence for comprehensive claim validation.',
                features: [
                  'Predictive models for high-risk claims',
                  'Automated documentation checks',
                  'Real-time provider feedback',
                  'Continuous learning algorithms'
                ]
              }
            ]}
            columns={3}
            variant="cards"
          />
        </div>

        {/* Expected Impact Visualization */}
        <div className="my-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Expected Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Financial Recovery</h3>
              <StatisticsDisplay
                stats={[
                  { value: '40-50%', label: 'Error reduction' },
                  { value: '$275M', label: 'Annual savings' }
                ]}
                variant="inline"
                className="mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Immediate ROI through payment accuracy</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Reduced audit and recovery costs</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Operational Benefits</h3>
              <StatisticsDisplay
                stats={[
                  { value: '60%', label: 'Less admin burden' },
                  { value: '85%', label: 'Provider satisfaction' }
                ]}
                variant="inline"
                className="mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Streamlined documentation workflow</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-sm">Enhanced program integrity</span>
                </div>
              </div>
            </div>
          </div>
          
          <Callout
            title="Patient Care Improvement"
            content="Better documentation requirements lead to more thorough conservative treatment attempts, improving patient outcomes and satisfaction."
            icon={<TrendingUp className="w-6 h-6 text-green-600" />}
            variant="success"
          />
        </div>

        {/* Implementation Roadmap */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Roadmap</h2>
          
          <Timeline
            items={[
              {
                title: 'Phase 1: Foundation',
                description: 'Establish infrastructure and partnerships',
                date: 'Months 1-2',
                metrics: [
                  { icon: Users, value: 'Stakeholder alignment' },
                  { icon: FileText, value: 'Requirements defined' }
                ]
              },
              {
                title: 'Phase 2: Pilot Program',
                description: 'Test interventions with select providers',
                date: 'Months 3-6',
                metrics: [
                  { icon: Target, value: '50 pilot providers' },
                  { icon: Brain, value: 'AI models deployed' }
                ]
              },
              {
                title: 'Phase 3: Scaled Rollout',
                description: 'Expand to all high-volume providers',
                date: 'Months 7-12',
                metrics: [
                  { icon: TrendingUp, value: '500+ providers' },
                  { icon: DollarSign, value: '$100M+ savings' }
                ]
              },
              {
                title: 'Phase 4: Optimization',
                description: 'Continuous improvement and expansion',
                date: 'Ongoing',
                metrics: [
                  { icon: Zap, value: 'Real-time feedback' },
                  { icon: Shield, value: 'Full automation' }
                ]
              }
            ]}
          />
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Payment Integrity?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Success requires coordinated action across CMS, MACs, and providers. Previsant's 
            proven AI solutions and implementation expertise can help you achieve these ambitious 
            but achievable goals.
          </p>
          
          <QuoteBlock
            quote="With the right combination of technology, process improvement, and stakeholder engagement, we can turn a $550M problem into a showcase of Medicare innovation."
            author="Dr. Michael Roberts"
            role="Chief Medical Officer, Previsant"
            variant="testimonial"
          />
        </div>
      </div>
    )
  }

  return <ResourceDetailTemplate {...resourceData} />
}

export default MedicarePaymentBlog