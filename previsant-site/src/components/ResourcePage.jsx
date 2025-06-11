import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Download, Share2, Clock, Calendar, User } from 'lucide-react'

const ResourcePage = ({ 
  title, 
  subtitle, 
  author, 
  date, 
  readTime, 
  category,
  content,
  keyTakeaways,
  relatedResources 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-primary/10 to-blue-50 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
              {category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
            )}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              {author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{author}</span>
                </div>
              )}
              {date && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
              )}
              {readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{readTime}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Content Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none">
                    {content}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Actions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Actions</h3>
                  <div className="space-y-3">
                    <Button className="w-full" variant="default">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Resource
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Key Takeaways */}
              {keyTakeaways && keyTakeaways.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Key Takeaways</h3>
                    <ul className="space-y-3">
                      {keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Related Resources */}
              {relatedResources && relatedResources.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Related Resources</h3>
                    <div className="space-y-3">
                      {relatedResources.map((resource, index) => (
                        <a
                          key={index}
                          href={resource.link}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <h4 className="font-medium text-gray-900 text-sm">{resource.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{resource.type}</p>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Need Help Implementing?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Our experts can help you apply these insights to your organization.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourcePage