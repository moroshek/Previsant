import fs from 'fs'
import pdf from 'pdf-parse'

// PDF to Resource Page Mapping
export const pdfMapping = {
  'd1fca3_e8b4534619fa4d85a755bf010bbb2e3c.pdf': {
    title: 'Payment Integrity Perspective',
    category: 'whitepaper',
    slug: 'payment-integrity-perspective',
    description: 'AI & ML-enabled payment integrity services'
  },
  'd1fca3_1f65ca4565f14d89bdbe20e7b799cde3.pdf': {
    title: 'Fraud Discovery Analysis Case Study',
    category: 'case-study',
    slug: 'fraud-discovery-case-study',
    description: 'Demonstrating fraud discovery capabilities'
  },
  'd1fca3_ba1d2c6ad0df4e71ad01d3fb40edc45d.pdf': {
    title: 'Disciplined AI Innovation',
    category: 'whitepaper',
    slug: 'disciplined-ai-innovation',
    description: 'Innovation perspective on AI implementation'
  },
  'd1fca3_0d21b5da595746cab3edaa8da11a7f0b.pdf': {
    title: 'AI Driven Business Innovation',
    category: 'whitepaper',
    slug: 'ai-driven-business-innovation',
    description: 'Transforming business through AI'
  },
  'd1fca3_13a7686016c5488a9596cfa3a03bdaa2.pdf': {
    title: 'Secure, Responsible, Auditable AI',
    category: 'whitepaper',
    slug: 'secure-auditable-ai',
    description: 'Implementing ethical AI practices'
  },
  'd1fca3_7f1bf37615714fd0ac89d6d0a77151a5.pdf': {
    title: 'Scalable Payment Integrity',
    category: 'whitepaper',
    slug: 'scalable-payment-integrity',
    description: 'Scaling payment integrity solutions'
  },
  'd1fca3_c7eefee6d1c04205be5b71d54f87b4f7.pdf': {
    title: 'AI Strategy Development',
    category: 'guide',
    slug: 'ai-strategy-development',
    description: 'Building effective AI strategies'
  },
  'd1fca3_4986b2d273144cfbbfa2cb94d97426ff.pdf': {
    title: 'Strategic Enablement',
    category: 'guide',
    slug: 'strategic-enablement-guide',
    description: 'Enabling strategic transformation'
  }
}

// Extract content from PDF
export async function extractPDFContent(pdfPath) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath)
    const data = await pdf(dataBuffer)
    
    return {
      text: data.text,
      numPages: data.numpages,
      info: data.info,
      metadata: data.metadata
    }
  } catch (error) {
    console.error('Error extracting PDF:', error)
    return null
  }
}

// Parse PDF text into structured content
export function parsePDFContent(text) {
  const lines = text.split('\n').map(line => line.trim()).filter(line => line)
  
  const content = {
    title: '',
    sections: [],
    highlights: [],
    keyPoints: [],
    tables: [],
    lists: []
  }
  
  let currentSection = null
  let currentContent = []
  
  lines.forEach((line, index) => {
    // Detect titles (usually larger font, all caps, or specific patterns)
    if (line.length < 100 && line === line.toUpperCase() && line.length > 10) {
      if (currentSection) {
        currentSection.content = currentContent.join(' ')
        content.sections.push(currentSection)
      }
      currentSection = { title: line, content: '' }
      currentContent = []
    }
    // Detect bullet points
    else if (line.startsWith('•') || line.startsWith('-') || line.startsWith('*')) {
      if (!currentSection) currentSection = { title: 'Overview', content: '' }
      content.lists.push(line)
      currentContent.push(line)
    }
    // Detect key points (often start with numbers)
    else if (/^\d+\./.test(line)) {
      content.keyPoints.push(line)
      currentContent.push(line)
    }
    // Regular content
    else {
      currentContent.push(line)
    }
  })
  
  // Add last section
  if (currentSection) {
    currentSection.content = currentContent.join(' ')
    content.sections.push(currentSection)
  }
  
  // Extract title (usually first large text)
  if (content.sections.length > 0) {
    content.title = content.sections[0].title
  }
  
  return content
}

// Convert PDF content to JSX
export function convertToJSX(parsedContent) {
  const jsx = []
  
  parsedContent.sections.forEach((section, index) => {
    if (index === 0) {
      jsx.push(`<h1>${section.title}</h1>`)
    } else {
      jsx.push(`<h2>${section.title}</h2>`)
    }
    
    // Split content into paragraphs
    const paragraphs = section.content.split(/\.\s+/).filter(p => p.trim())
    paragraphs.forEach(paragraph => {
      if (paragraph.trim()) {
        jsx.push(`<p>${paragraph.trim()}.</p>`)
      }
    })
  })
  
  // Add lists
  if (parsedContent.lists.length > 0) {
    jsx.push('<ul>')
    parsedContent.lists.forEach(item => {
      jsx.push(`  <li>${item.replace(/^[•\-\*]\s*/, '')}</li>`)
    })
    jsx.push('</ul>')
  }
  
  return jsx.join('\n')
}