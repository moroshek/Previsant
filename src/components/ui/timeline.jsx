import React from 'react'
import { motion } from 'framer-motion'
import { Check, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Timeline = ({ items, variant = 'vertical', className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  if (variant === 'horizontal') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn("relative", className)}
      >
        <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white border-4 border-primary rounded-full flex items-center justify-center mb-4 relative z-10">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                {item.duration && (
                  <span className="text-xs text-gray-500 mt-2">{item.duration}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  }

  // Default vertical variant
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("relative", className)}
    >
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative flex gap-6"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center relative z-10">
              {item.completed ? (
                <Check className="w-6 h-6 text-primary" />
              ) : (
                <Circle className="w-6 h-6 text-primary" />
              )}
            </div>
            
            <div className="flex-1 pb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  {item.date && (
                    <span className="text-sm text-gray-500">{item.date}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.milestones && (
                  <div className="space-y-2">
                    {item.milestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{milestone}</span>
                      </div>
                    ))}
                  </div>
                )}
                {item.stats && (
                  <div className="mt-4 pt-4 border-t border-gray-100 flex gap-6">
                    {item.stats.map((stat, idx) => (
                      <div key={idx}>
                        <span className="text-2xl font-bold text-primary">{stat.value}</span>
                        <span className="text-sm text-gray-500 ml-2">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export const ProcessFlow = ({ steps, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("relative overflow-hidden", className)}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-1 relative"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {step.number || index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent">
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}