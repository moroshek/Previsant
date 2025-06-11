import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Fortune 100 Insurance Company',
      title: '$42B Insurance & Financial Services',
      company: 'Multi-line Insurance Leader',
      content: 'Previsant delivered a business-aligned roadmap and comprehensive business case for our data & analytics transformation. Their people, process & technology approach enabled sustainable ROI across our enterprise.',
      rating: 5,
      metrics: ['$42B enterprise value', 'Sustainable ROI achieved', 'Enterprise-wide transformation'],
      image: 'https://api.dicebear.com/7.x/shapes/svg?seed=Insurance'
    },
    {
      name: 'Environmental Services Leader',
      title: '$10B Environmental Services',
      company: 'Global Environmental Corporation',
      content: 'Strategic enablement for Customer 360, Knowledge Management and D&A ecosystem transformed our customer experience. Previsant enabled our complete digital transformation journey.',
      rating: 5,
      metrics: ['$10B company scale', 'Customer 360 implementation', 'Digital transformation achieved'],
      image: 'https://api.dicebear.com/7.x/shapes/svg?seed=Environmental'
    },
    {
      name: 'Multi-line Insurance Innovator',
      title: '$11B Multi-line Insurance',
      company: 'Insurance Innovation Leader',
      content: 'Previsant developed our strategic roadmap and enablement for B2B offerings, driving strategic growth and insights. Their approach unlocked new revenue streams and market opportunities.',
      rating: 5,
      metrics: ['$11B organization', 'B2B platform launch', 'Strategic growth enabled'],
      image: 'https://api.dicebear.com/7.x/shapes/svg?seed=Multiline'
    },
    {
      name: 'InsurTech Startup',
      title: 'InsurTech Start-up',
      company: 'Emerging Technology Company',
      content: 'Definition and creation of differentiating predictive analytics capabilities as a service enabled our customer acquisition and product expansion. Previsant was instrumental in our growth.',
      rating: 5,
      metrics: ['Predictive analytics platform', 'Customer footprint expansion', 'Product differentiation achieved'],
      image: 'https://api.dicebear.com/7.x/shapes/svg?seed=Startup'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic consulting & as-a-service solutions adding value across sectors, 
            from InsurTech startups to Fortune 100 firms.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 md:p-12">
                  <CardContent className="p-0">
                    <Quote className="w-12 h-12 text-primary/20 mb-6" />
                    
                    <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                      "{testimonials[currentIndex].content}"
                    </p>

                    {testimonials[currentIndex].metrics && (
                      <div className="flex flex-wrap gap-4 justify-center mb-8">
                        {testimonials[currentIndex].metrics.map((metric, idx) => (
                          <div key={idx} className="bg-primary/10 px-4 py-2 rounded-lg">
                            <span className="text-sm font-semibold text-primary">{metric}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-12 h-12"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonials[currentIndex].title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>

                      <div className="flex space-x-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Risk Management?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of organizations that trust Previsant for their compliance 
            and safety needs.
          </p>
          <Button size="lg">
            Schedule Your Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials