// SEO utility functions for managing meta tags
export const updateMetaTags = ({
  title = 'Previsant - Data & Analytics Consulting',
  description = 'Transform your data into strategic advantage with Previsant\'s AI-powered analytics, payment integrity solutions, and expert consulting services.',
  keywords = 'data analytics, AI consulting, payment integrity, healthcare analytics, fraud detection, business intelligence, machine learning',
  image = '/og-image.png',
  url = window.location.href
}) => {
  // Update title
  document.title = title.includes('Previsant') ? title : `${title} | Previsant`
  
  // Update or create meta tags
  const metaTags = [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { property: 'og:title', content: document.title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: document.title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image }
  ]
  
  metaTags.forEach(tag => {
    let element = tag.property 
      ? document.querySelector(`meta[property="${tag.property}"]`)
      : document.querySelector(`meta[name="${tag.name}"]`)
    
    if (!element) {
      element = document.createElement('meta')
      if (tag.property) {
        element.setAttribute('property', tag.property)
      } else {
        element.setAttribute('name', tag.name)
      }
      document.head.appendChild(element)
    }
    
    element.setAttribute('content', tag.content)
  })
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)
}

// Structured data for organization
export const addOrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Previsant',
    description: 'Data & Analytics Consulting firm specializing in AI-powered solutions',
    url: 'https://previsant.com',
    logo: 'https://previsant.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-855-PREVISANT',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://linkedin.com/company/previsant',
      'https://twitter.com/previsant'
    ]
  }
  
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(schema)
  document.head.appendChild(script)
}

// Add breadcrumb schema
export const addBreadcrumbSchema = (items) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url,
        name: item.name
      }
    }))
  }
  
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(schema)
  document.head.appendChild(script)
}