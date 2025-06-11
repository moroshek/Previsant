import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, ArrowRight, TrendingUp, Brain, Shield } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Rise of AI in Healthcare Payment Integrity',
      excerpt: 'Explore how artificial intelligence is revolutionizing the detection and prevention of improper payments in healthcare, with real-world examples and ROI metrics.',
      author: 'Janna Hart',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Payment Integrity',
      image: '/api/placeholder/600/400',
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      id: 2,
      title: 'Building a Data-Driven Culture: Lessons from the Field',
      excerpt: 'Practical insights on transforming organizational culture to embrace data-driven decision making, based on 30+ years of experience.',
      author: 'Doug Ramsey',
      date: 'January 10, 2025',
      readTime: '7 min read',
      category: 'Data & Analytics',
      image: '/api/placeholder/600/400',
      icon: <TrendingUp className="w-6 h-6 text-primary" />
    },
    {
      id: 3,
      title: 'Navigating AI Governance in Regulated Industries',
      excerpt: 'A comprehensive guide to implementing responsible AI practices while maintaining compliance in healthcare and financial services.',
      author: 'Brian Ng',
      date: 'January 5, 2025',
      readTime: '10 min read',
      category: 'AI Strategy',
      image: '/api/placeholder/600/400',
      icon: <Brain className="w-6 h-6 text-purple-600" />
    }
  ]

  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with expert perspectives on data, analytics, and AI transformation
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full bg-gradient-to-br from-green-400 to-emerald-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-white/20" />
                </div>
              </div>
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    Featured
                  </span>
                  <span className="text-sm text-gray-500">{featuredPost.category}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button variant="ghost" className="group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-primary/10 transition-colors">
                      {post.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-primary">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Our Latest Insights
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Subscribe to receive expert analysis, case studies, and strategic insights 
            on data & analytics transformation delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog