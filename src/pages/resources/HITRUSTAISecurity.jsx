import React from 'react'
import ResourceDetailTemplate from './ResourceDetailTemplate'

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
      <div>
        <h2>The Growing Need for AI Assurance</h2>
        <p>
          As AI adoption accelerates across healthcare and other regulated industries, organizations 
          face increasing pressure to demonstrate that their AI systems are secure, reliable, and 
          ethically deployed. Traditional security frameworks weren't designed for AI's unique challenges, 
          creating a critical gap in assurance capabilities.
        </p>

        <h2>HITRUST AI: A New Standard for Responsible AI</h2>
        <p>
          HITRUST has extended its industry-leading certification framework to address AI-specific 
          risks and requirements. This new certification provides comprehensive coverage across:
        </p>
        <ul>
          <li>AI governance and accountability</li>
          <li>Model security and integrity</li>
          <li>Data privacy and protection</li>
          <li>Bias detection and mitigation</li>
          <li>Explainability and transparency</li>
          <li>Performance monitoring and drift detection</li>
        </ul>

        <h2>The 90 New AI Controls</h2>
        <p>
          HITRUST AI introduces 90 purpose-built controls organized into key domains:
        </p>

        <h3>AI Governance (15 controls)</h3>
        <ul>
          <li>AI ethics committees and oversight</li>
          <li>Risk assessment methodologies</li>
          <li>Accountability frameworks</li>
          <li>Vendor management requirements</li>
        </ul>

        <h3>Model Development & Testing (25 controls)</h3>
        <ul>
          <li>Secure development lifecycle</li>
          <li>Data quality and lineage</li>
          <li>Model validation procedures</li>
          <li>Bias testing protocols</li>
        </ul>

        <h3>Deployment & Operations (30 controls)</h3>
        <ul>
          <li>Production security requirements</li>
          <li>Performance monitoring</li>
          <li>Incident response procedures</li>
          <li>Change management processes</li>
        </ul>

        <h3>Transparency & Accountability (20 controls)</h3>
        <ul>
          <li>Explainability requirements</li>
          <li>Audit trail maintenance</li>
          <li>User notification standards</li>
          <li>Compliance reporting</li>
        </ul>

        <h2>Three Levels of Certification</h2>
        <p>
          Organizations can pursue certification at three maturity levels:
        </p>

        <h3>Level 1: Foundational</h3>
        <p>
          Basic AI governance and security controls suitable for organizations beginning their AI journey.
          Requires implementation of 40 core controls.
        </p>

        <h3>Level 2: Managed</h3>
        <p>
          Comprehensive AI risk management for organizations with production AI systems.
          Requires 65 controls including advanced monitoring and bias detection.
        </p>

        <h3>Level 3: Optimized</h3>
        <p>
          Industry-leading practices for organizations with mission-critical AI deployments.
          All 90 controls required with continuous improvement processes.
        </p>

        <h2>The Certification Process</h2>
        <p>
          Achieving HITRUST AI certification typically takes 3-6 months:
        </p>
        <ol>
          <li><strong>Gap Assessment (Month 1):</strong> Evaluate current state against requirements</li>
          <li><strong>Remediation (Months 2-4):</strong> Implement missing controls and processes</li>
          <li><strong>Evidence Collection (Month 5):</strong> Document control implementation</li>
          <li><strong>External Assessment (Month 6):</strong> Third-party validation and certification</li>
        </ol>

        <h2>Business Benefits</h2>
        <p>
          Organizations achieving HITRUST AI certification report significant benefits:
        </p>
        <ul>
          <li>50% reduction in customer security assessments</li>
          <li>30% faster sales cycles for AI solutions</li>
          <li>Enhanced trust from regulators and partners</li>
          <li>Competitive differentiation in crowded markets</li>
          <li>Reduced risk of AI-related incidents and breaches</li>
        </ul>

        <h2>Getting Started</h2>
        <p>
          Whether you're an AI vendor seeking market validation or an enterprise deploying AI internally, 
          HITRUST AI certification provides a clear path to demonstrating responsible AI practices. 
          Previsant's certified assessors can guide you through the entire process, from initial gap 
          assessment to successful certification.
        </p>
      </div>
    )
  }

  return <ResourceDetailTemplate {...resourceData} />
}

export default HITRUSTAISecurity