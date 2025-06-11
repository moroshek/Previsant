import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

export const QuoteBlock = ({ quote, author, role, variant = 'default', className }) => {
  if (variant === 'highlight') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl p-8 my-8",
          className
        )}
      >
        <Quote className="absolute top-4 left-4 w-12 h-12 text-primary/20" />
        <blockquote className="relative z-10 text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed">
          "{quote}"
        </blockquote>
        {author && (
          <div className="mt-6 flex items-center gap-4">
            <div className="w-12 h-0.5 bg-primary" />
            <div>
              <p className="font-semibold text-gray-900">{author}</p>
              {role && <p className="text-sm text-gray-600">{role}</p>}
            </div>
          </div>
        )}
      </motion.div>
    )
  }

  if (variant === 'testimonial') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "bg-white rounded-xl shadow-lg p-8 border border-gray-100",
          className
        )}
      >
        <div className="flex items-start gap-4">
          <Quote className="w-10 h-10 text-primary/30 flex-shrink-0" />
          <div>
            <blockquote className="text-lg text-gray-700 mb-4">
              {quote}
            </blockquote>
            {author && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{author}</p>
                  {role && <p className="text-sm text-gray-600">{role}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "border-l-4 border-primary pl-6 py-4 my-6",
        className
      )}
    >
      <p className="text-lg text-gray-700 italic">
        "{quote}"
      </p>
      {author && (
        <footer className="mt-4">
          <p className="text-sm">
            <span className="font-semibold text-gray-900">— {author}</span>
            {role && <span className="text-gray-600">, {role}</span>}
          </p>
        </footer>
      )}
    </motion.blockquote>
  )
}

export const Callout = ({ title, content, icon, variant = 'info', className }) => {
  const variants = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    error: 'bg-red-50 border-red-200 text-red-900',
    primary: 'bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20 text-gray-900'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-xl border-2 p-6 my-6",
        variants[variant],
        className
      )}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-8 h-8">
            {icon}
          </div>
        )}
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold text-lg mb-2">{title}</h4>
          )}
          <div className="prose prose-sm max-w-none">
            {content}
          </div>
        </div>
      </div>
    </motion.div>
  )
}