import React from 'react'
import ResourceDetailTemplate from './ResourceDetailTemplate'
import { 
  StatCard, 
  ProgressBar, 
  ComparisonTable, 
  Timeline 
} from '@/components/ui/data-visualization'
import { 
  AlertTriangle, 
  Search, 
  Shield, 
  TrendingUp, 
  Users, 
  Activity,
  Clock,
  DollarSign,
  Zap,
  Target,
  CheckCircle
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const FraudDiscoveryCaseStudy = () => {
  const resourceData = {
    id: 9,
    title: 'Fraud Discovery Analysis: Uncovering a $50M Healthcare Fraud Ring',
    category: 'case-study',
    description: 'How Previsant\'s AI-powered analytics uncovered a sophisticated multi-state healthcare fraud operation.',
    readTime: '10 min read',
    publishDate: 'November 2024',
    author: {
      name: 'Michael Chen',
      role: 'Director of Fraud Analytics'
    },
    highlights: [
      '$50M+ in fraudulent claims identified',
      '127 providers involved across 5 states',
      'Complex kickback scheme uncovered',
      '98% conviction rate on referred cases'
    ],
    keyTakeaways: [
      'Network analysis can reveal hidden connections between seemingly unrelated entities',
      'Behavioral patterns often reveal fraud before financial anomalies appear',
      'Cross-state coordination is essential for catching sophisticated schemes',
      'AI can process millions of connections humans would never identify',
      'Early detection prevents scheme expansion and patient harm'
    ],
    content: (
      <div className="space-y-12">
        <div>
          <h2>Executive Summary</h2>
          <p>
            In what began as routine anomaly detection, Previsant's AI-powered fraud analytics platform 
            uncovered one of the largest healthcare fraud rings in recent history. The sophisticated 
            operation involved 127 providers across 5 states, submitting over $50 million in fraudulent 
            claims through an elaborate kickback and phantom billing scheme.
          </p>
          <p className="mt-4">
            This case study demonstrates how advanced analytics can detect complex fraud patterns that 
            traditional methods miss, ultimately protecting patients and preserving healthcare resources 
            for legitimate care.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 my-12">
          <StatCard
            icon={DollarSign}
            title="Total Fraud Identified"
            value="50000000"
            prefix="$"
            suffix="+"
            color="warning"
          />
          <StatCard
            icon={Users}
            title="Providers Involved"
            value="127"
            color="warning"
          />
          <StatCard
            icon={Activity}
            title="States Affected"
            value="5"
            color="info"
          />
          <StatCard
            icon={Shield}
            title="Conviction Rate"
            value="98"
            suffix="%"
            color="success"
          />
        </div>

        <div>
          <h2>The Initial Discovery</h2>
          <p>
            The investigation began when our AI system flagged unusual billing patterns from a small 
            group of durable medical equipment (DME) suppliers in Florida. While the individual claims 
            appeared legitimate, the system detected several subtle anomalies:
          </p>
        </div>

        {/* Anomaly Detection Visualization */}
        <div className="bg-gray-50 rounded-xl p-8 my-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Initial Anomaly Indicators</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="font-medium">Temporal Clustering</span>
              </div>
              <span className="text-sm text-gray-600">87% of claims submitted on same days</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Patient Overlap</span>
              </div>
              <span className="text-sm text-gray-600">Unusual patient sharing between providers</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-purple-500" />
                <span className="font-medium">Geographic Impossibility</span>
              </div>
              <span className="text-sm text-gray-600">Services rendered 500+ miles apart same day</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">Billing Velocity</span>
              </div>
              <span className="text-sm text-gray-600">300% above peer group average</span>
            </div>
          </div>
        </div>

        <div>
          <h2>Uncovering the Network</h2>
          <p>
            As our investigation deepened, the AI's network analysis capabilities revealed the true 
            scope of the operation. What appeared to be independent providers were actually part of 
            an intricate web of shell companies, fake patients, and kickback arrangements.
          </p>
        </div>

        {/* Network Visualization Card */}
        <Card className="my-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8">
              <h3 className="text-white text-xl font-semibold mb-4">Fraud Network Structure</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-white">
                  <Search className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold mb-2">Shell Companies</h4>
                  <p className="text-sm opacity-90">23 interconnected entities with shared addresses and ownership</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-white">
                  <Users className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold mb-2">Phantom Patients</h4>
                  <p className="text-sm opacity-90">3,200+ fake patient identities recycled across providers</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-white">
                  <AlertTriangle className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold mb-2">Money Flow</h4>
                  <p className="text-sm opacity-90">Complex kickback scheme funneling 40% of claims</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investigation Timeline */}
        <div className="my-12">
          <h2>Investigation Timeline</h2>
          <Timeline
            items={[
              {
                title: 'Initial Detection',
                date: 'Day 1',
                description: 'AI flags anomalous billing patterns from 3 DME suppliers',
                metrics: [
                  { icon: AlertTriangle, value: '3 providers flagged' },
                  { icon: DollarSign, value: '$500K suspicious claims' }
                ]
              },
              {
                title: 'Network Discovery',
                date: 'Week 2',
                description: 'Analysis reveals connections to 47 additional entities',
                metrics: [
                  { icon: Users, value: '47 linked entities' },
                  { icon: Search, value: '12 states involved' }
                ]
              },
              {
                title: 'Pattern Recognition',
                date: 'Week 4',
                description: 'AI identifies systematic phantom billing and kickback patterns',
                metrics: [
                  { icon: Activity, value: '3,200+ fake patients' },
                  { icon: DollarSign, value: '$15M identified' }
                ]
              },
              {
                title: 'Full Scope Revealed',
                date: 'Week 8',
                description: 'Complete fraud ring mapped across 5 states with 127 providers',
                metrics: [
                  { icon: Shield, value: '127 providers' },
                  { icon: DollarSign, value: '$50M+ total fraud' }
                ]
              },
              {
                title: 'Law Enforcement Action',
                date: 'Week 12',
                description: 'Coordinated raids and arrests across all locations',
                metrics: [
                  { icon: Shield, value: '89 arrests' },
                  { icon: TrendingUp, value: '98% conviction rate' }
                ]
              }
            ]}
          />
        </div>

        <div>
          <h2>The Scheme Mechanics</h2>
          <p>
            The fraud ring operated through a sophisticated multi-layered approach designed to evade 
            traditional detection methods:
          </p>
        </div>

        {/* Scheme Breakdown */}
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Recruitment</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <span className="text-gray-700">Recruited legitimate patients with promise of "free" equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <span className="text-gray-700">Stole identities from nursing home residents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <span className="text-gray-700">Created completely fictitious patient identities</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Manipulation</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <span className="text-gray-700">Upcoded services to maximize reimbursement</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <span className="text-gray-700">Billed for equipment never delivered</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <span className="text-gray-700">Submitted duplicate claims across multiple payers</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2>AI Detection Capabilities</h2>
          <p>
            This case highlights the unique capabilities of AI in detecting sophisticated fraud that 
            would be impossible to identify through traditional methods:
          </p>
        </div>

        {/* AI Capabilities Comparison */}
        <ComparisonTable
          title="Detection Method Effectiveness"
          headers={['Detection Capability', 'Traditional Methods', 'AI-Powered Analytics']}
          rows={[
            ['Cross-provider pattern analysis', 'Limited to known relationships', 'Discovers hidden connections'],
            ['Geographic impossibility detection', 'Manual review only', 'Automatic flagging'],
            ['Temporal clustering identification', 'Not feasible at scale', 'Real-time detection'],
            ['Network relationship mapping', 'Basic link analysis', 'Multi-dimensional graph analysis'],
            ['Behavioral anomaly detection', 'Rule-based only', 'Machine learning patterns'],
            ['Scale of analysis', 'Thousands of claims', 'Millions of claims']
          ]}
          highlightColumn={2}
        />

        <div className="mt-12">
          <h2>Impact and Outcomes</h2>
          <p>
            The successful investigation and prosecution of this fraud ring delivered significant 
            benefits beyond the immediate financial recovery:
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 my-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Investigation Impact</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Financial Recovery</h4>
              <div className="space-y-4">
                <ProgressBar label="Claims Prevented" value={50} maxValue={50} color="success" />
                <ProgressBar label="Funds Recovered" value={35} maxValue={50} color="success" />
                <ProgressBar label="Future Savings" value={100} maxValue={100} color="success" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Enforcement Actions</h4>
              <div className="space-y-4">
                <ProgressBar label="Providers Prosecuted" value={98} color="info" />
                <ProgressBar label="Licenses Revoked" value={100} color="info" />
                <ProgressBar label="Criminal Convictions" value={98} color="info" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>Lessons Learned</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Look Beyond the Obvious</h3>
                <p className="text-sm text-gray-600">
                  Sophisticated fraud often hides behind seemingly legitimate transactions. AI can identify 
                  subtle patterns humans miss.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Speed Matters</h3>
                <p className="text-sm text-gray-600">
                  Early detection prevented this scheme from expanding to additional states and potentially 
                  doubling in size.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Collaboration is Key</h3>
                <p className="text-sm text-gray-600">
                  Success required coordination between payers, law enforcement, and regulatory agencies 
                  across multiple jurisdictions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2>The Previsant Advantage</h2>
          <p>
            This case exemplifies why AI-powered fraud detection is no longer optional—it's essential. 
            The complexity and scale of modern healthcare fraud schemes require equally sophisticated 
            detection capabilities. Previsant's solution provides:
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Real-time analysis of millions of claims and relationships</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Pattern detection across providers, patients, and geographies</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Continuous learning that adapts to new fraud schemes</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Explainable results that support investigations and prosecutions</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return <ResourceDetailTemplate {...resourceData} />
}

export default FraudDiscoveryCaseStudy