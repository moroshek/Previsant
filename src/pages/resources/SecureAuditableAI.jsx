import React from 'react'
import ResourceDetailTemplate from './ResourceDetailTemplate'
import { 
  StatCard, 
  ProgressBar, 
  ComparisonTable,
  Timeline
} from '@/components/ui/data-visualization'
import { 
  Shield, 
  Lock, 
  Eye, 
  Brain, 
  CheckCircle,
  AlertTriangle,
  FileCheck,
  Users,
  Zap,
  Target
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const SecureAuditableAI = () => {
  const resourceData = {
    id: 10,
    title: 'Implementing Secure, Responsible, and Auditable AI in Healthcare',
    category: 'whitepaper',
    description: 'A comprehensive guide to building AI systems that are secure, ethical, and meet regulatory requirements.',
    readTime: '15 min read',
    publishDate: 'September 2024',
    author: {
      name: 'Dr. Sarah Thompson',
      role: 'Chief AI Ethics Officer'
    },
    highlights: [
      'HITRUST AI certification framework overview',
      '90 essential AI security controls',
      'Bias detection and mitigation strategies',
      'Complete audit trail requirements'
    ],
    keyTakeaways: [
      'Responsible AI is not optional—it\'s essential for sustainable deployment',
      'Security must be built into AI systems from the ground up',
      'Explainability is critical for clinical acceptance and regulatory compliance',
      'Continuous monitoring prevents model drift and ensures ongoing safety',
      'Third-party certification provides market differentiation'
    ],
    content: (
      <div className="space-y-12">
        <div>
          <h2>The Imperative for Responsible AI</h2>
          <p>
            As AI transforms healthcare delivery, the stakes for getting it right have never been higher. 
            A single biased algorithm can affect millions of patient care decisions. An unsecured AI 
            system can expose sensitive health data. An unexplainable model can lead to clinical errors 
            and liability.
          </p>
          <p className="mt-4">
            This guide provides a comprehensive framework for implementing AI systems that are not just 
            powerful, but also secure, responsible, and auditable—meeting the highest standards of 
            healthcare delivery and regulatory compliance.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-6 my-12">
          <StatCard
            icon={Shield}
            title="Security Incidents"
            value="73"
            suffix="%"
            color="warning"
          />
          <StatCard
            icon={Brain}
            title="AI Bias Cases"
            value="62"
            suffix="%"
            color="warning"
          />
          <StatCard
            icon={FileCheck}
            title="Audit Failures"
            value="81"
            suffix="%"
            color="warning"
          />
          <StatCard
            icon={CheckCircle}
            title="With Framework"
            value="95"
            suffix="% compliant"
            color="success"
          />
        </div>

        <div>
          <h2>The Three Pillars of Responsible AI</h2>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 my-12">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure</h3>
              <p className="text-gray-600">
                Protecting AI systems, data, and models from threats while ensuring privacy and confidentiality
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsible</h3>
              <p className="text-gray-600">
                Ensuring fairness, preventing bias, and maintaining ethical standards in all AI decisions
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Auditable</h3>
              <p className="text-gray-600">
                Maintaining transparency, explainability, and complete audit trails for all AI operations
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2>Security Framework: Protecting AI at Every Layer</h2>
          <p>
            AI security extends beyond traditional cybersecurity to address unique vulnerabilities 
            in machine learning systems:
          </p>
        </div>

        {/* Security Layers */}
        <div className="bg-gray-900 text-white rounded-xl p-8 my-8">
          <h3 className="text-xl font-semibold mb-6">AI Security Stack</h3>
          <div className="space-y-4">
            {[
              { layer: 'Model Security', desc: 'Protecting against adversarial attacks and model theft', completion: 95 },
              { layer: 'Data Security', desc: 'Encryption, anonymization, and access controls', completion: 98 },
              { layer: 'Infrastructure Security', desc: 'Secure compute environments and network isolation', completion: 92 },
              { layer: 'Access Management', desc: 'Role-based access and authentication', completion: 96 },
              { layer: 'Monitoring & Response', desc: 'Real-time threat detection and incident response', completion: 90 }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{item.layer}</span>
                  <span className="text-sm opacity-75">{item.completion}% implemented</span>
                </div>
                <p className="text-sm opacity-75 mb-2">{item.desc}</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
                    style={{ width: `${item.completion}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2>Bias Detection and Mitigation</h2>
          <p>
            Preventing AI bias requires systematic approaches throughout the AI lifecycle:
          </p>
        </div>

        {/* Bias Prevention Timeline */}
        <Timeline
          items={[
            {
              title: 'Data Collection',
              date: 'Pre-training',
              description: 'Ensure representative datasets across all patient populations',
              metrics: [
                { icon: Users, value: 'Demographic balance' },
                { icon: CheckCircle, value: 'Quality validation' }
              ]
            },
            {
              title: 'Model Development',
              date: 'Training',
              description: 'Apply fairness constraints and regularization techniques',
              metrics: [
                { icon: Brain, value: 'Fairness metrics' },
                { icon: Target, value: 'Balanced accuracy' }
              ]
            },
            {
              title: 'Validation Testing',
              date: 'Pre-deployment',
              description: 'Test across subgroups to identify disparate impacts',
              metrics: [
                { icon: FileCheck, value: 'Subgroup analysis' },
                { icon: AlertTriangle, value: 'Bias detection' }
              ]
            },
            {
              title: 'Production Monitoring',
              date: 'Ongoing',
              description: 'Continuous monitoring for emerging biases and drift',
              metrics: [
                { icon: Activity, value: 'Real-time monitoring' },
                { icon: Zap, value: 'Automated alerts' }
              ]
            }
          ]}
        />

        <div className="mt-12">
          <h2>Explainability Requirements</h2>
          <p>
            Healthcare AI must provide clear explanations for every decision:
          </p>
        </div>

        {/* Explainability Levels */}
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Global Explanations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Model behavior:</strong> How the model makes decisions overall
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Feature importance:</strong> Which factors most influence outcomes
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Decision boundaries:</strong> When and why decisions change
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Local Explanations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Individual predictions:</strong> Why this specific decision was made
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Contributing factors:</strong> Which inputs drove this outcome
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Confidence levels:</strong> How certain the model is about this decision
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2>Audit Trail Requirements</h2>
          <p>
            Complete auditability requires capturing every aspect of AI operations:
          </p>
        </div>

        {/* Audit Requirements Table */}
        <ComparisonTable
          title="Comprehensive Audit Trail Components"
          headers={['Audit Category', 'Required Elements', 'Retention Period']}
          rows={[
            ['Model Versioning', 'All model versions, parameters, and training data', '7 years'],
            ['Decision Logs', 'Every prediction with inputs, outputs, and explanations', '7 years'],
            ['Access Records', 'Who accessed what data and when', '3 years'],
            ['Change Management', 'All system changes and approvals', '5 years'],
            ['Performance Metrics', 'Accuracy, bias metrics, and drift indicators', '5 years'],
            ['Incident Reports', 'All errors, corrections, and investigations', '7 years']
          ]}
        />

        <div className="mt-12">
          <h2>Implementation Roadmap</h2>
          <p>
            Building responsible AI is a journey that requires systematic implementation:
          </p>
        </div>

        {/* Implementation Phases */}
        <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-xl p-8 my-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Phase 1: Foundation (Months 1-3)</h3>
              <div className="space-y-4">
                <ProgressBar label="Governance Structure" value={100} color="primary" />
                <ProgressBar label="Security Baseline" value={100} color="primary" />
                <ProgressBar label="Initial Policies" value={100} color="primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Phase 2: Implementation (Months 4-6)</h3>
              <div className="space-y-4">
                <ProgressBar label="Technical Controls" value={85} color="info" />
                <ProgressBar label="Monitoring Systems" value={75} color="info" />
                <ProgressBar label="Team Training" value={90} color="info" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Phase 3: Validation (Months 7-9)</h3>
              <div className="space-y-4">
                <ProgressBar label="Internal Audits" value={60} color="warning" />
                <ProgressBar label="Gap Remediation" value={45} color="warning" />
                <ProgressBar label="Documentation" value={70} color="warning" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Phase 4: Certification (Months 10-12)</h3>
              <div className="space-y-4">
                <ProgressBar label="External Assessment" value={30} color="success" />
                <ProgressBar label="Certification Prep" value={25} color="success" />
                <ProgressBar label="Continuous Improvement" value={15} color="success" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>Benefits of Responsible AI</h2>
          <p>
            Organizations implementing comprehensive responsible AI frameworks report significant benefits:
          </p>
        </div>

        {/* Benefits Stats */}
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">87%</div>
              <p className="text-gray-700 font-medium">Faster Regulatory Approval</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">92%</div>
              <p className="text-gray-700 font-medium">Clinician Trust Score</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
              <p className="text-gray-700 font-medium">Security Incidents</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2>Getting Started</h2>
          <p>
            Implementing secure, responsible, and auditable AI doesn't have to be overwhelming. 
            Start with these essential steps:
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">1</span>
                <div>
                  <strong>Establish Governance:</strong> Create an AI ethics committee and define clear policies
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">2</span>
                <div>
                  <strong>Assess Current State:</strong> Evaluate existing AI systems against the framework
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">3</span>
                <div>
                  <strong>Prioritize Gaps:</strong> Focus on high-risk areas and quick wins
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">4</span>
                <div>
                  <strong>Implement Controls:</strong> Deploy technical and procedural safeguards
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">5</span>
                <div>
                  <strong>Monitor and Improve:</strong> Establish continuous monitoring and enhancement
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl">
          <h2 className="text-2xl font-bold mb-4">The Time to Act is Now</h2>
          <p className="text-lg opacity-90">
            As AI becomes central to healthcare delivery, responsible implementation is not just 
            best practice—it's a competitive necessity. Organizations that build trust through 
            secure, responsible, and auditable AI will lead the transformation of healthcare.
          </p>
        </div>
      </div>
    )
  }

  return <ResourceDetailTemplate {...resourceData} />
}

export default SecureAuditableAI