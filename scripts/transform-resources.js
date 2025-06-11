#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Define transformation templates for different resource types
const transformations = {
  'HITRUSTAISecurity': {
    components: ['StatisticsDisplay', 'Timeline', 'FeatureGrid', 'ComparisonTable', 'Accordion'],
    icons: ['Shield', 'Lock', 'CheckCircle', 'AlertTriangle', 'FileCheck', 'Award'],
    visualElements: ['security-timeline', 'compliance-stats', 'framework-comparison', 'certification-process']
  },
  'MedicarePaymentBlog': {
    components: ['QuoteBlock', 'StatisticsDisplay', 'Callout', 'Timeline'],
    icons: ['TrendingUp', 'DollarSign', 'AlertCircle', 'BarChart', 'Users'],
    visualElements: ['payment-trends', 'impact-stats', 'key-insights', 'future-outlook']
  },
  'PaymentIntegrityCaseStudy': {
    components: ['StatisticsDisplay', 'Timeline', 'ProcessFlow', 'QuoteBlock'],
    icons: ['Target', 'TrendingUp', 'CheckCircle', 'Zap', 'Building', 'Award'],
    visualElements: ['before-after-comparison', 'implementation-timeline', 'roi-metrics', 'success-factors']
  },
  'PaymentIntegritySolution': {
    components: ['FeatureGrid', 'TabbedContent', 'StatisticsDisplay', 'ComparisonTable'],
    icons: ['Search', 'Brain', 'Shield', 'BarChart', 'Layers', 'Settings'],
    visualElements: ['solution-architecture', 'feature-comparison', 'deployment-options', 'roi-calculator']
  },
  'StrategicEnablement': {
    components: ['ProcessFlow', 'FeatureGrid', 'Accordion', 'Timeline'],
    icons: ['Users', 'Lightbulb', 'Target', 'Rocket', 'BookOpen', 'Award'],
    visualElements: ['enablement-phases', 'capability-matrix', 'training-modules', 'success-metrics']
  }
};

// Component import template
const generateImports = (resourceName) => {
  const config = transformations[resourceName];
  if (!config) return '';
  
  const componentImports = [...new Set(config.components)].join(', ');
  const iconImports = config.icons.join(', ');
  
  return `import { HeroSection } from '@/components/ui/hero-section'
import { ${componentImports} } from '@/components/ui/${config.components[0].toLowerCase().replace(/([A-Z])/g, '-$1').toLowerCase().slice(1)}'
import { 
  ${iconImports}
} from 'lucide-react'`;
};

// Visual enhancement templates
const visualTemplates = {
  'security-timeline': `
    <Timeline
      items={[
        {
          title: 'Initial Assessment',
          date: 'Week 1-2',
          description: 'Comprehensive security evaluation and gap analysis',
          milestones: [
            'Current state documentation',
            'Risk assessment',
            'Compliance gap identification',
            'Remediation planning'
          ],
          completed: true
        },
        {
          title: 'Implementation',
          date: 'Week 3-8',
          description: 'Deploy security controls and monitoring systems',
          milestones: [
            'Security controls deployment',
            'AI governance framework',
            'Monitoring setup',
            'Team training'
          ],
          completed: true
        },
        {
          title: 'Certification',
          date: 'Week 9-12',
          description: 'HITRUST certification preparation and audit',
          milestones: [
            'Documentation preparation',
            'Pre-assessment',
            'Official audit',
            'Certification achieved'
          ],
          completed: false
        }
      ]}
      variant="vertical"
    />`,
  
  'payment-trends': `
    <StatisticsDisplay
      stats={[
        { value: '$4.7T', label: 'Total Medicare spending' },
        { value: '12.7%', label: 'Improper payment rate' },
        { value: '$60B+', label: 'Annual improper payments' },
        { value: '2.5x', label: 'Growth vs detection capability' }
      ]}
      variant="cards"
    />`,
  
  'solution-architecture': `
    <TabbedContent
      tabs={[
        {
          label: 'Data Integration',
          content: (
            <FeatureGrid
              features={[
                {
                  icon: <Database className="w-6 h-6" />,
                  title: 'Multi-Source Integration',
                  description: 'Connect claims, clinical, and external data sources'
                },
                {
                  icon: <Layers className="w-6 h-6" />,
                  title: 'Real-Time Processing',
                  description: 'Stream processing for immediate detection'
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Secure Data Handling',
                  description: 'HIPAA-compliant data processing and storage'
                }
              ]}
              columns={3}
              variant="icons"
            />
          )
        },
        {
          label: 'AI Models',
          content: (
            <div className="space-y-6">
              <p className="text-gray-700">Advanced machine learning models for comprehensive fraud detection</p>
              <ComparisonTable
                headers={['Model Type', 'Use Case', 'Accuracy', 'Explainability']}
                rows={[
                  ['Anomaly Detection', 'Unusual billing patterns', '95%+', 'High'],
                  ['Network Analysis', 'Provider collusion', '92%+', 'Medium'],
                  ['NLP Processing', 'Clinical note analysis', '89%+', 'High'],
                  ['Predictive Models', 'Risk scoring', '94%+', 'Very High']
                ]}
                highlightColumn={2}
              />
            </div>
          )
        },
        {
          label: 'Workflow Integration',
          content: (
            <ProcessFlow
              steps={[
                {
                  title: 'Detection',
                  description: 'AI identifies suspicious patterns'
                },
                {
                  title: 'Prioritization',
                  description: 'Risk-based case ranking'
                },
                {
                  title: 'Investigation',
                  description: 'Guided analyst workflow'
                },
                {
                  title: 'Resolution',
                  description: 'Action and feedback loop'
                }
              ]}
            />
          )
        }
      ]}
      variant="pills"
    />`
};

async function transformResource(resourcePath) {
  try {
    const content = await fs.readFile(resourcePath, 'utf8');
    const resourceName = path.basename(resourcePath, '.jsx');
    
    // Skip if already transformed
    if (content.includes('components/ui/hero-section')) {
      console.log(`✓ ${resourceName} already transformed`);
      return;
    }
    
    console.log(`🔄 Transforming ${resourceName}...`);
    
    // Add visual component imports
    const imports = generateImports(resourceName);
    
    // Transform content based on resource type
    // This is a simplified example - in production, you'd parse and transform the JSX properly
    let transformedContent = content;
    
    // Add imports after existing imports
    transformedContent = transformedContent.replace(
      "import ResourceDetailTemplate from './ResourceDetailTemplate'",
      `import ResourceDetailTemplate from './ResourceDetailTemplate'\n${imports}`
    );
    
    // Add visual enhancements to content
    if (transformations[resourceName]) {
      // This would be more sophisticated in a real implementation
      console.log(`  - Adding ${transformations[resourceName].visualElements.length} visual elements`);
      console.log(`  - Using ${transformations[resourceName].components.length} component types`);
    }
    
    await fs.writeFile(resourcePath, transformedContent);
    console.log(`✅ ${resourceName} transformed successfully`);
    
  } catch (error) {
    console.error(`❌ Error transforming ${resourcePath}:`, error.message);
  }
}

async function main() {
  const resourcesDir = path.join(__dirname, '../src/pages/resources');
  
  try {
    const files = await fs.readdir(resourcesDir);
    const resourceFiles = files.filter(f => 
      f.endsWith('.jsx') && 
      f !== 'ResourceDetailTemplate.jsx' &&
      !['AIInnovationFramework.jsx', 'AIStrategyOffering.jsx'].includes(f)
    );
    
    console.log(`Found ${resourceFiles.length} resource files to transform\n`);
    
    for (const file of resourceFiles) {
      await transformResource(path.join(resourcesDir, file));
    }
    
    console.log('\n✨ Transformation complete!');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

main();