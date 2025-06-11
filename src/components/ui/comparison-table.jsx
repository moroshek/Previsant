import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export const ComparisonTable = ({ 
  headers, 
  rows, 
  highlightColumn, 
  variant = 'default',
  className 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  const getValue = (value) => {
    if (value === true) return <Check className="w-5 h-5 text-green-500" />
    if (value === false) return <X className="w-5 h-5 text-red-500" />
    if (value === null) return <Minus className="w-5 h-5 text-gray-400" />
    return value
  }

  if (variant === 'cards') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn("grid md:grid-cols-3 gap-6", className)}
      >
        {headers.slice(1).map((header, colIndex) => (
          <motion.div
            key={colIndex}
            variants={rowVariants}
            className={cn(
              "bg-white rounded-xl shadow-lg p-6",
              highlightColumn === colIndex + 1 && "ring-2 ring-primary shadow-xl"
            )}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {header}
            </h3>
            <div className="space-y-4">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="pb-4 border-b border-gray-100 last:border-0">
                  <div className="text-sm text-gray-600 mb-2">{row[0]}</div>
                  <div className="font-medium text-gray-900 flex items-center gap-2">
                    {getValue(row[colIndex + 1])}
                    {typeof row[colIndex + 1] === 'string' && row[colIndex + 1]}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  // Default table variant
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("overflow-x-auto", className)}
    >
      <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((header, index) => (
              <th
                key={index}
                className={cn(
                  "px-6 py-4 text-left text-sm font-semibold text-gray-900",
                  highlightColumn === index && "bg-primary/10"
                )}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              variants={rowVariants}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={cn(
                    "px-6 py-4 text-sm",
                    cellIndex === 0 ? "font-medium text-gray-900" : "text-gray-600",
                    highlightColumn === cellIndex && "bg-primary/5"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {getValue(cell)}
                    {typeof cell === 'string' && cell}
                  </div>
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}

export const PricingTable = ({ plans, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("grid md:grid-cols-3 gap-8", className)}
    >
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={cn(
            "bg-white rounded-xl shadow-lg p-8 relative",
            plan.featured && "ring-2 ring-primary shadow-xl scale-105"
          )}
        >
          {plan.featured && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
          )}
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <div className="text-4xl font-bold text-primary mb-2">
              {plan.price}
              <span className="text-lg text-gray-600 font-normal">{plan.period}</span>
            </div>
          </div>
          
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          <button
            className={cn(
              "w-full py-3 px-4 rounded-lg font-semibold transition-all",
              plan.featured
                ? "bg-primary text-white hover:bg-primary-dark"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            )}
          >
            {plan.cta}
          </button>
        </motion.div>
      ))}
    </motion.div>
  )
}