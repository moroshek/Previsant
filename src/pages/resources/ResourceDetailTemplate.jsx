import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, Clock, Calendar, Share2, BookOpen, CheckCircle, Printer } from 'lucide-react'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import Breadcrumb from '@/components/ui/breadcrumb'
import RelatedContent from '@/components/ui/related-content'
import { SkeletonResourcePage } from '@/components/ui/skeleton'
import ResourceProgress from '@/components/ui/resource-progress'
import { handlePDFDownload, trackDownload } from '@/utils/downloadHandler'
import { updateMetaTags, addBreadcrumbSchema } from '@/utils/seo'

const ResourceDetailTemplate = ({ 
  id,
  title,
  category,
  description,
  content,
  readTime,
  publishDate,
  author,
  highlights,
  keyTakeaways
}) => {
  const [isLoading, setIsLoading] = useState(true)
  
  // Determine content length based on read time
  const getContentLength = () => {
    const minutes = parseInt(readTime)
    if (minutes <= 5) return 'short'
    if (minutes <= 15) return 'medium'
    return 'long'
  }
  
  const breadcrumbItems = [
    { label: 'Resources', href: '/#resources' },
    { label: category.charAt(0).toUpperCase() + category.slice(1), href: `/#resources?category=${category}` },
    { label: title }
  ]
  
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    // Update SEO meta tags
    updateMetaTags({
      title,
      description,
      keywords: `${category}, ${highlights ? highlights.join(', ') : ''}, data analytics, AI consulting`
    })
    
    // Add breadcrumb schema
    addBreadcrumbSchema([
      { name: 'Home', url: 'https://previsant.com' },
      { name: 'Resources', url: 'https://previsant.com/#resources' },
      { name: title, url: window.location.href }
    ])
    
    // Scroll to top
    window.scrollTo(0, 0)
  }, [title, description, category, highlights])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ResourceProgress contentLength={getContentLength()} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 rounded-full blur-3xl" />
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={breadcrumbItems} className="mb-8" />
            
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-gray-100"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {category}
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{publishDate}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700"
                  onClick={() => {
                    const slug = window.location.pathname.split('/').pop()
                    handlePDFDownload(slug, title)
                    trackDownload(title, category)
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.print()}
                >
                  <Printer className="mr-2 h-5 w-5" />
                  Print
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: title,
                        text: description,
                        url: window.location.href
                      })
                    }
                  }}
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 md:p-12">
                  {isLoading ? (
                    <SkeletonResourcePage />
                  ) : (
                    <>
                  {/* Highlights */}
                  {highlights && highlights.length > 0 && (
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                      <div className="space-y-3">
                        {highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    {content}
                  </div>
                  
                  {/* Key Takeaways */}
                  {keyTakeaways && keyTakeaways.length > 0 && (
                    <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-primary" />
                        Key Takeaways
                      </h3>
                      <ul className="space-y-3">
                        {keyTakeaways.map((takeaway, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-primary font-bold">{index + 1}.</span>
                            <span className="text-gray-700">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Author Card */}
              {author && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">About the Author</h4>
                    <p className="text-gray-600 mb-4">{author.name}</p>
                    <p className="text-sm text-gray-500">{author.role}</p>
                  </CardContent>
                </Card>
              )}
              
              {/* Download CTA */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-blue-600 text-white">
                <CardContent className="p-6 text-center">
                  <Download className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h4 className="text-xl font-bold mb-2">Download Resource</h4>
                  <p className="text-sm opacity-90 mb-4">
                    Get the complete PDF version with additional insights
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full shadow-lg"
                  >
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              
              {/* Newsletter Signup */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Stay Updated</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest insights and resources delivered to your inbox
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                  >
                    Subscribe to Newsletter
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Related Content */}
          <RelatedContent 
            currentResourceId={id} 
            category={category}
            className="mt-20"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default ResourceDetailTemplate