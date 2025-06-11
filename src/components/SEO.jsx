import React from 'react'

const SEO = ({ 
  title = 'Previsant - Data & Analytics Consulting', 
  description = 'Transform your data into strategic advantage with Previsant\'s AI-powered analytics, payment integrity solutions, and expert consulting services.',
  keywords = 'data analytics, AI consulting, payment integrity, healthcare analytics, fraud detection, business intelligence, machine learning',
  image = '/og-image.png',
  url = 'https://previsant.com',
  type = 'website',
  author = 'Previsant',
  twitterHandle = '@previsant'
}) => {
  const siteTitle = title.includes('Previsant') ? title : `${title} | Previsant`
  
  // React 19 native metadata support - these elements will be hoisted to <head>
  return (
    <>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Previsant" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  )
}

export default SEO