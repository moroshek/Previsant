import React from 'react'
import ResourceDetailTemplate from './ResourceDetailTemplate'

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
      <div>
        <h2>The Foundation for Analytics Success</h2>
        <p>
          While many organizations rush to implement the latest analytics technologies, 
          sustainable success requires a solid foundation across people, process, and 
          technology dimensions. This guide provides a comprehensive framework for 
          building these critical enablement capabilities.
        </p>

        <h2>Operating Model: Organizing for Success</h2>
        <p>
          The right operating model balances centralized governance with distributed 
          innovation. Key considerations include:
        </p>
        <ul>
          <li>Centralized vs. federated vs. hybrid structures</li>
          <li>Roles and responsibilities across the organization</li>
          <li>Decision rights and escalation paths</li>
          <li>Funding models and resource allocation</li>
        </ul>

        <h2>Data Governance: Enabling Trust and Innovation</h2>
        <p>
          Modern data governance moves beyond compliance to enable innovation while 
          managing risk. Critical components include:
        </p>
        <ul>
          <li>Data quality management processes</li>
          <li>Metadata and catalog management</li>
          <li>Privacy and security frameworks</li>
          <li>Self-service data access with appropriate controls</li>
        </ul>

        <h2>Talent Strategy: Building Sustainable Capabilities</h2>
        <p>
          The war for analytics talent requires a multi-faceted approach:
        </p>
        <ul>
          <li>Capability assessment and gap analysis</li>
          <li>Build vs. buy vs. partner decisions</li>
          <li>Training and development programs</li>
          <li>Career paths and retention strategies</li>
        </ul>

        <h2>Technology Architecture: Scalable Foundations</h2>
        <p>
          Modern analytics architectures must balance flexibility with governance:
        </p>
        <ul>
          <li>Cloud-native design patterns</li>
          <li>Real-time and batch processing capabilities</li>
          <li>Microservices and API strategies</li>
          <li>DataOps and MLOps practices</li>
        </ul>

        <h2>Implementation Roadmap</h2>
        <p>
          Success requires a phased approach that delivers value while building capabilities:
        </p>
        <ol>
          <li>Current state assessment and gap analysis</li>
          <li>Target state design and roadmap development</li>
          <li>Quick wins implementation</li>
          <li>Capability building and scaling</li>
          <li>Continuous improvement and optimization</li>
        </ol>
      </div>
    )
  }

  return <ResourceDetailTemplate {...resourceData} />
}

export default StrategicEnablement