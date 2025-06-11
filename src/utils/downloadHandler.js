// PDF Download Handler
export const pdfDownloadMapping = {
  'payment-integrity-perspective': 'd1fca3_e8b4534619fa4d85a755bf010bbb2e3c.pdf',
  'fraud-discovery-case-study': 'd1fca3_1f65ca4565f14d89bdbe20e7b799cde3.pdf',
  'disciplined-ai-innovation': 'd1fca3_ba1d2c6ad0df4e71ad01d3fb40edc45d.pdf',
  'ai-driven-business-innovation': 'd1fca3_0d21b5da595746cab3edaa8da11a7f0b.pdf',
  'secure-auditable-ai': 'd1fca3_13a7686016c5488a9596cfa3a03bdaa2.pdf',
  'scalable-payment-integrity': 'd1fca3_7f1bf37615714fd0ac89d6d0a77151a5.pdf',
  'ai-strategy-development': 'd1fca3_c7eefee6d1c04205be5b71d54f87b4f7.pdf',
  'strategic-enablement-guide': 'd1fca3_4986b2d273144cfbbfa2cb94d97426ff.pdf'
}

export const handlePDFDownload = (resourceSlug, resourceTitle) => {
  const pdfFileName = pdfDownloadMapping[resourceSlug]
  
  if (pdfFileName) {
    // Create download URL - files are in public/downloads
    const downloadUrl = `/downloads/${pdfFileName}`
    
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = `${resourceTitle.replace(/\s+/g, '_')}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } else {
    // For resources without PDFs, generate a web-based PDF
    window.print()
  }
}

// Analytics tracking for downloads
export const trackDownload = (resourceTitle, resourceType) => {
  // Track download event
  if (window.gtag) {
    window.gtag('event', 'download', {
      'event_category': 'Resources',
      'event_label': resourceTitle,
      'value': resourceType
    })
  }
  
  // You can add other analytics providers here
  console.log(`Download tracked: ${resourceTitle} (${resourceType})`)
}