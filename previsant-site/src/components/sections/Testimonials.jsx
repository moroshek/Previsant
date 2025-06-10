import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Chief Compliance Officer',
      company: 'TechCorp Industries',
      content: 'Previsant transformed our approach to compliance. Their comprehensive risk assessment helped us identify vulnerabilities we didn\'t know existed, saving us from potential regulatory penalties.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      name: 'Michael Chen',
      title: 'VP of Operations',
      company: 'Global Manufacturing Co.',
      content: 'The safety training programs delivered by Previsant have dramatically reduced workplace incidents. Our team is more engaged and aware of safety protocols than ever before.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
    },
    {
      name: 'Emily Rodriguez',
      title: 'CEO',
      company: 'Healthcare Solutions Inc.',
      content: 'Working with Previsant\'s advisory team has been invaluable. Their expertise in healthcare compliance helped us navigate complex regulations while maintaining operational efficiency.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
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
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from organizations that have partnered with Previsant to enhance 
            their risk management and compliance programs.
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
                    
                    <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
                      "{testimonials[currentIndex].content}"
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 rounded-full bg-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonials[currentIndex].title}
                          </p>
                          <p className="text-sm text-gray-500">
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