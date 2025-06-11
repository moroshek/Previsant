import React from 'react'
import ResourceDetailTemplate from './ResourceDetailTemplate'
import { 
  StatCard, 
  ProgressBar, 
  ComparisonTable, 
  Timeline,
  ROICalculator 
} from '@/components/ui/data-visualization'
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Brain, 
  Users, 
  BarChart3,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

const PaymentIntegrityPerspective = () => {
  const resourceData = {
    id: 8,
    title: 'The Previsant Perspective: AI-Powered Payment Integrity',
    category: 'whitepaper',
    description: 'How AI and machine learning are revolutionizing payment integrity, delivering unprecedented accuracy and ROI.',
    readTime: '12 min read',
    publishDate: 'October 2024',
    author: {
      name: 'Previsant Analytics Team',
      role: 'Payment Integrity Experts'
    },
    highlights: [
      '7.46% average improper payment identification rate',
      '73% reduction in false positives vs traditional methods',
      '$1B+ in validated savings across implementations',
      '15:1 average ROI within first year'
    ],
    keyTakeaways: [
      'Traditional payment integrity methods miss 70-80% of improper payments',
      'AI can detect complex patterns invisible to rule-based systems',
      'Combining clinical expertise with AI maximizes effectiveness',
      'ROI is typically achieved within 60-90 days',
      'Scalable solutions can grow with your organization'
    ],
    content: (
      <div className="space-y-12">
        <div>
          <h2>The $300 Billion Problem</h2>
          <p>
            Healthcare improper payments represent one of the largest sources of waste in the U.S. economy, 
            with CMS estimating over $100 billion annually in Medicare and Medicaid alone. When commercial 
            payers are included, the total exceeds $300 billion—roughly 10% of all healthcare spending.
          </p>
          <p className="mt-4">
            Despite decades of investment in payment integrity programs, traditional approaches catch less 
            than 3% of improper payments. The complexity of modern healthcare billing, combined with 
            sophisticated fraud schemes and legitimate billing errors, overwhelms rule-based systems.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-3 gap-6 my-12">
          <StatCard
            icon={DollarSign}
            title="Annual Improper Payments"
            value="300000000000"
            prefix="$"
            suffix="+"
            color="warning"
          />
          <StatCard
            icon={AlertTriangle}
            title="Traditional Detection Rate"
            value="3"
            suffix="%"
            color="warning"
          />
          <StatCard
            icon={TrendingUp}
            title="AI Detection Rate"
            value="7.46"
            suffix="%"
            change={148}
            color="success"
          />
        </div>

        <div>
          <h2>Why Traditional Methods Fall Short</h2>
          <p>
            Rule-based payment integrity systems were designed for a simpler time. Today's healthcare 
            ecosystem presents challenges that overwhelm traditional approaches:
          </p>
        </div>

        {/* Comparison Table */}
        <ComparisonTable
          title="Traditional vs. AI-Powered Payment Integrity"
          headers={['Capability', 'Traditional Methods', 'AI-Powered Solution']}
          rows={[
            ['Detection Rate', '2-3%', '7-10%'],
            ['False Positive Rate', '40-60%', '10-15%'],
            ['Processing Speed', '1,000 claims/hour', '100,000+ claims/hour'],
            ['Pattern Recognition', 'Simple rules only', 'Complex multi-dimensional patterns'],
            ['Adaptation', 'Manual rule updates', 'Continuous learning'],
            ['ROI Timeline', '12-18 months', '60-90 days']
          ]}
          highlightColumn={2}
        />

        <div className="mt-12">
          <h2>The AI Advantage: How Machine Learning Transforms Payment Integrity</h2>
          <p>
            Previsant's AI-powered payment integrity solution leverages multiple advanced techniques to 
            identify improper payments that traditional methods miss:
          </p>
        </div>

        {/* AI Capabilities Progress Bars */}
        <div className="bg-gray-50 rounded-xl p-8 my-8 space-y-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">AI Detection Capabilities</h3>
          <ProgressBar 
            label="Anomaly Detection" 
            value={94} 
            color="primary"
          />
          <ProgressBar 
            label="Pattern Recognition" 
            value={89} 
            color="primary"
          />
          <ProgressBar 
            label="Predictive Modeling" 
            value={91} 
            color="primary"
          />
          <ProgressBar 
            label="Network Analysis" 
            value={87} 
            color="primary"
          />
          <ProgressBar 
            label="NLP Processing" 
            value={85} 
            color="primary"
          />
        </div>

        <div>
          <h2>Real-World Impact: Case Studies</h2>
          <p>
            Our AI-powered payment integrity solution has delivered transformative results across 
            diverse healthcare organizations:
          </p>
        </div>

        {/* Timeline of Success Stories */}
        <Timeline
          items={[
            {
              title: 'Large Regional Health Plan',
              date: 'Q1 2024',
              description: 'Identified $20M in savings within 60-day pilot, scaling to $100M+ annually',
              metrics: [
                { icon: DollarSign, value: '$100M+ annual savings' },
                { icon: TrendingUp, value: '5.2% detection rate' }
              ]
            },
            {
              title: 'National Insurance Carrier',
              date: 'Q4 2023',
              description: 'Reduced false positives by 75% while doubling fraud detection',
              metrics: [
                { icon: Shield, value: '75% fewer false positives' },
                { icon: CheckCircle, value: '2x fraud detection' }
              ]
            },
            {
              title: 'Medicare Advantage Plan',
              date: 'Q3 2023',
              description: 'Achieved 15:1 ROI within first year of implementation',
              metrics: [
                { icon: BarChart3, value: '15:1 ROI' },
                { icon: Users, value: '1.5M members covered' }
              ]
            }
          ]}
        />

        <div className="mt-12">
          <h2>Implementation Approach: From Pilot to Scale</h2>
          <p>
            Our proven methodology ensures rapid value delivery while minimizing disruption to existing operations:
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {[
              { phase: '1', title: 'Discovery', duration: '1-2 weeks', description: 'Assess current state and identify opportunities' },
              { phase: '2', title: 'Pilot', duration: '4-6 weeks', description: 'Prove value with focused implementation' },
              { phase: '3', title: 'Scale', duration: '8-12 weeks', description: 'Expand to full production volume' },
              { phase: '4', title: 'Optimize', duration: 'Ongoing', description: 'Continuous improvement and expansion' }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.phase}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{phase.title}</h4>
                <p className="text-sm text-primary font-medium mb-2">{phase.duration}</p>
                <p className="text-sm text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mt-12">
          <h2>Calculate Your Potential Savings</h2>
          <ROICalculator
            title="Payment Integrity ROI Estimator"
            inputs={[
              { name: 'annualClaims', label: 'Annual Claim Volume', defaultValue: 1000000, suffix: 'claims' },
              { name: 'avgClaimValue', label: 'Average Claim Value', defaultValue: 500, prefix: '$' },
              { name: 'currentDetection', label: 'Current Detection Rate', defaultValue: 2, suffix: '%' },
              { name: 'aiDetection', label: 'AI Detection Rate', defaultValue: 7.5, suffix: '%' }
            ]}
            formula={(values) => {
              const totalSpend = values.annualClaims * values.avgClaimValue
              const currentSavings = totalSpend * (values.currentDetection / 100)
              const aiSavings = totalSpend * (values.aiDetection / 100)
              return aiSavings - currentSavings
            }}
            result={{
              label: 'Additional Annual Savings',
              prefix: '$',
              suffix: ''
            }}
          />
        </div>

        <div className="mt-12">
          <h2>Key Differentiators</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-xl p-8">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Explainable AI</h3>
              <p className="text-gray-600">
                Every detection includes clear rationale and evidence, ensuring investigator confidence 
                and supporting appeals processes. No "black box" decisions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-xl p-8">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Clinical Integration</h3>
              <p className="text-gray-600">
                Our solution combines AI power with clinical expertise, ensuring medical appropriateness 
                while maintaining provider relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2>The Path Forward</h2>
          <p>
            Healthcare payment integrity stands at an inflection point. Organizations that embrace 
            AI-powered solutions today will capture billions in savings while those relying on 
            traditional methods will continue losing 7-10% of spend to improper payments.
          </p>
          <p className="mt-4">
            The question isn't whether to adopt AI for payment integrity—it's how quickly you can 
            begin capturing the value. With proven ROI in 60-90 days and implementations that scale 
            with your needs, the time to act is now.
          </p>
        </div>

        {/* Call to Action Stats */}
        <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Start Capturing Value Today</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">60</div>
              <div className="text-sm opacity-90">Days to ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold">7.5%</div>
              <div className="text-sm opacity-90">Detection Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15:1</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$1B+</div>
              <div className="text-sm opacity-90">Savings Delivered</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <ResourceDetailTemplate {...resourceData} />
}

export default PaymentIntegrityPerspective