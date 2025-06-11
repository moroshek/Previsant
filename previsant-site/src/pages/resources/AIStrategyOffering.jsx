import React from 'react'
import ResourceDetailTemplate from './ResourceDetailTemplate'

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
      <div>
        <h2>Transform Your Business with Strategic AI</h2>
        <p>
          In the age of AI, every company needs a clear strategy to harness its transformative 
          potential while managing risks. Previsant's AI Strategy Offering provides a proven 
          path from vision to value, ensuring your AI investments deliver sustainable business impact.
        </p>

        <h2>Our Three-Phase Approach</h2>
        
        <h3>Phase 1: Vision & Discovery</h3>
        <p>
          We begin by aligning AI opportunities with your business strategy:
        </p>
        <ul>
          <li><strong>Executive Visioning Sessions:</strong> Define AI ambitions and success metrics</li>
          <li><strong>Use Case Identification:</strong> Systematic discovery of high-value opportunities</li>
          <li><strong>Value Modeling:</strong> Quantify potential impact and ROI</li>
          <li><strong>Risk Assessment:</strong> Identify and plan for potential challenges</li>
        </ul>

        <h3>Phase 2: Readiness Assessment</h3>
        <p>
          We evaluate your organization's preparedness across critical dimensions:
        </p>
        <ul>
          <li><strong>Data Maturity:</strong> Quality, accessibility, and governance</li>
          <li><strong>Technology Infrastructure:</strong> Current state and gaps</li>
          <li><strong>Organizational Capabilities:</strong> Skills, culture, and change readiness</li>
          <li><strong>Operating Model:</strong> Processes and governance structures</li>
        </ul>

        <h3>Phase 3: Proof of Value Pilot</h3>
        <p>
          We rapidly demonstrate AI value through focused pilots:
        </p>
        <ul>
          <li><strong>Pilot Selection:</strong> Choose highest-impact, lowest-risk use case</li>
          <li><strong>Rapid Development:</strong> 4-6 week sprint to working solution</li>
          <li><strong>Value Validation:</strong> Measure and document business impact</li>
          <li><strong>Scaling Roadmap:</strong> Plan for enterprise-wide deployment</li>
        </ul>

        <h2>Key Deliverables</h2>
        
        <h3>AI Strategy Blueprint</h3>
        <ul>
          <li>3-year vision and roadmap</li>
          <li>Prioritized use case portfolio</li>
          <li>Investment requirements and ROI projections</li>
          <li>Risk mitigation strategies</li>
        </ul>

        <h3>Readiness Report</h3>
        <ul>
          <li>Maturity assessment across all dimensions</li>
          <li>Gap analysis and remediation plans</li>
          <li>Capability building recommendations</li>
          <li>Technology architecture guidelines</li>
        </ul>

        <h3>Pilot Results Package</h3>
        <ul>
          <li>Working AI solution prototype</li>
          <li>Performance metrics and value proof</li>
          <li>Scaling plan and requirements</li>
          <li>Lessons learned and best practices</li>
        </ul>

        <h2>Why Choose Previsant</h2>
        
        <h3>Deep Industry Expertise</h3>
        <p>
          Our consultants bring decades of experience in healthcare, insurance, and 
          financial services, understanding your unique challenges and opportunities.
        </p>

        <h3>Proven Methodology</h3>
        <p>
          Our approach has helped Fortune 500 companies achieve measurable AI success, 
          with average ROI exceeding 300% within 18 months.
        </p>

        <h3>End-to-End Capabilities</h3>
        <p>
          From strategy through implementation, we provide comprehensive support including 
          change management, training, and ongoing optimization.
        </p>

        <h3>Responsible AI Focus</h3>
        <p>
          Ethics, fairness, and transparency are embedded in every recommendation, 
          ensuring sustainable and trustworthy AI deployment.
        </p>

        <h2>Success Stories</h2>
        
        <h3>Major Health Plan</h3>
        <ul>
          <li>Challenge: Reduce payment integrity losses</li>
          <li>Solution: AI-powered fraud detection</li>
          <li>Result: $100M+ annual savings</li>
        </ul>

        <h3>Regional Bank</h3>
        <ul>
          <li>Challenge: Improve loan underwriting speed</li>
          <li>Solution: ML-based risk assessment</li>
          <li>Result: 70% faster decisions, 25% lower defaults</li>
        </ul>

        <h3>Insurance Carrier</h3>
        <ul>
          <li>Challenge: Enhance claims processing efficiency</li>
          <li>Solution: Intelligent document processing</li>
          <li>Result: 60% automation rate, 90% accuracy</li>
        </ul>

        <h2>Your AI Journey Starts Here</h2>
        <p>
          Don't let AI complexity prevent you from capturing its value. Partner with 
          Previsant to develop and execute an AI strategy that drives real business 
          results while building sustainable capabilities for the future.
        </p>
      </div>
    )
  }

  return <ResourceDetailTemplate {...resourceData} />
}

export default AIStrategyOffering