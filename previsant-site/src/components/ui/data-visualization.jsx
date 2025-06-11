import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, BarChart3, PieChart, Activity, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

// Animated Number Counter
export const AnimatedNumber = ({ value, prefix = '', suffix = '', duration = 2 }) => {
  const [displayValue, setDisplayValue] = React.useState(0)
  
  React.useEffect(() => {
    const startTime = Date.now()
    const endValue = parseFloat(value.toString().replace(/[^0-9.-]/g, ''))
    
    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      
      // Easing function
      const easeOutExpo = 1 - Math.pow(2, -10 * progress)
      const currentValue = endValue * easeOutExpo
      
      setDisplayValue(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    animate()
  }, [value, duration])
  
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toFixed(0)
  }
  
  return (
    <span className="font-bold">
      {prefix}{formatNumber(displayValue)}{suffix}
    </span>
  )
}

// Stat Card Component
export const StatCard = ({ icon: Icon, title, value, change, prefix, suffix, color = 'primary' }) => {
  const colorClasses = {
    primary: 'from-primary to-blue-600',
    success: 'from-green-500 to-emerald-600',
    warning: 'from-orange-500 to-red-600',
    info: 'from-cyan-500 to-blue-600'
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <AnimatedNumber value={value} prefix={prefix} suffix={suffix} />
              {change && (
                <span className={cn(
                  "text-sm font-medium",
                  change > 0 ? "text-green-600" : "text-red-600"
                )}>
                  {change > 0 ? '+' : ''}{change}%
                </span>
              )}
            </div>
          </div>
          <div className={cn(
            "p-3 rounded-xl bg-gradient-to-br",
            colorClasses[color]
          )}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r",
        colorClasses[color]
      )} />
    </motion.div>
  )
}

// Progress Bar Component
export const ProgressBar = ({ label, value, maxValue = 100, color = 'primary', showValue = true }) => {
  const percentage = (value / maxValue) * 100
  
  const colorClasses = {
    primary: 'from-primary to-blue-600',
    success: 'from-green-500 to-emerald-600',
    warning: 'from-orange-500 to-red-600',
    info: 'from-cyan-500 to-blue-600'
  }
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {showValue && (
          <span className="text-sm font-semibold text-gray-900">
            <AnimatedNumber value={value} suffix="%" duration={1} />
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn(
            "h-full rounded-full bg-gradient-to-r",
            colorClasses[color]
          )}
        />
      </div>
    </div>
  )
}

// Comparison Table Component
export const ComparisonTable = ({ title, headers, rows, highlightColumn }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={cn(
                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    highlightColumn === index && "bg-primary/5"
                  )}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: rowIndex * 0.05 }}
                className="hover:bg-gray-50 transition-colors"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={cn(
                      "px-6 py-4 whitespace-nowrap text-sm",
                      cellIndex === 0 ? "font-medium text-gray-900" : "text-gray-600",
                      highlightColumn === cellIndex && "bg-primary/5 font-semibold"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

// Timeline Component
export const Timeline = ({ items }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-primary" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start"
          >
            {/* Dot */}
            <div className="absolute left-6 w-4 h-4 bg-white border-4 border-primary rounded-full z-10" />
            
            {/* Content */}
            <div className="ml-16 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
              {item.metrics && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <metric.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-gray-700">{metric.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ROI Calculator Component
export const ROICalculator = ({ title, inputs, formula, result }) => {
  const [values, setValues] = React.useState(
    inputs.reduce((acc, input) => ({ ...acc, [input.name]: input.defaultValue }), {})
  )
  
  const calculateResult = React.useCallback(() => {
    return formula(values)
  }, [values, formula])
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-xl p-8"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-6">{title}</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {inputs.map((input) => (
          <div key={input.name}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {input.label}
            </label>
            <div className="relative">
              {input.prefix && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  {input.prefix}
                </span>
              )}
              <input
                type="number"
                value={values[input.name]}
                onChange={(e) => setValues({ ...values, [input.name]: e.target.value })}
                className={cn(
                  "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary",
                  input.prefix && "pl-8"
                )}
              />
              {input.suffix && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  {input.suffix}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg p-6 text-center">
        <p className="text-sm text-gray-600 mb-2">Estimated {result.label}</p>
        <div className="text-3xl font-bold gradient-text">
          <AnimatedNumber
            value={calculateResult()}
            prefix={result.prefix}
            suffix={result.suffix}
          />
        </div>
      </div>
    </motion.div>
  )
}