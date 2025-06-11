import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const LoadingSpinner = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  }

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className={cn(
          "rounded-full border-gray-200",
          sizeClasses[size]
        )}
        style={{ borderTopColor: 'transparent' }}
      />
      <motion.div
        className={cn(
          "absolute inset-0 rounded-full border-primary",
          sizeClasses[size]
        )}
        style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent', borderLeftColor: 'transparent' }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export default LoadingSpinner