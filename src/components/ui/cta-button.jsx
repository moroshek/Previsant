import React from 'react'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const CTAButton = ({ 
  children, 
  variant = 'primary',
  size = 'default',
  onClick,
  className,
  icon = true,
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = {
    primary: 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5'
  }

  const sizeClasses = {
    default: 'px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base',
    large: 'px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg',
    small: 'px-4 sm:px-6 py-2 sm:py-3 text-sm'
  }

  return (
    <Button
      onClick={onClick}
      className={cn(
        baseClasses[variant],
        sizeClasses[size],
        'hover-lift transition-all duration-300 font-medium',
        fullWidth ? 'w-full' : 'w-full sm:w-auto',
        className
      )}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
      )}
    </Button>
  )
}