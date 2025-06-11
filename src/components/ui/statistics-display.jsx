import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const StatisticsDisplay = ({ stats, variant = 'grid', className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  if (variant === 'comparison') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn("bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg", className)}
      >
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">{stats.before.label}</p>
            <p className="text-4xl font-bold text-gray-400">{stats.before.value}</p>
          </div>
          
          <div className="flex justify-center">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-12 h-12 text-primary" />
            </motion.div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">{stats.after.label}</p>
            <p className="text-4xl font-bold text-primary">{stats.after.value}</p>
            {stats.improvement && (
              <p className="text-sm text-green-600 mt-2 flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                {stats.improvement}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === 'cards') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn("grid grid-cols-2 md:grid-cols-4 gap-6", className)}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-primary/20 transition-colors"
          >
            <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
            {stat.trend && (
              <div className={cn(
                "flex items-center gap-1 mt-2 text-sm",
                stat.trend > 0 ? "text-green-600" : "text-red-600"
              )}>
                {stat.trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {Math.abs(stat.trend)}%
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  // Default grid variant
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("grid grid-cols-2 md:grid-cols-4 gap-8 text-center", className)}
    >
      {stats.map((stat, index) => (
        <motion.div key={index} variants={itemVariants}>
          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
            {stat.value}
          </div>
          <div className="text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export const StatCard = ({ title, value, subtitle, icon, trend, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        {icon && (
          <div className="p-3 bg-primary/10 rounded-lg text-primary">
            {icon}
          </div>
        )}
      </div>
      
      {subtitle && (
        <p className="text-sm text-gray-600">{subtitle}</p>
      )}
      
      {trend && (
        <div className={cn(
          "flex items-center gap-1 mt-3 text-sm font-medium",
          trend.value > 0 ? "text-green-600" : "text-red-600"
        )}>
          {trend.value > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {Math.abs(trend.value)}% {trend.label}
        </div>
      )}
    </motion.div>
  )
}