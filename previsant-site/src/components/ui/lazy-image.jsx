import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  placeholderSrc,
  width,
  height,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || '')
  const [imageRef, setImageRef] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  const observerRef = useRef()

  useEffect(() => {
    if (imageRef && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInView(true)
              observerRef.current?.disconnect()
            }
          })
        },
        { threshold: 0.1 }
      )

      observerRef.current.observe(imageRef)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [imageRef])

  useEffect(() => {
    if (isInView && src) {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setImageSrc(src)
        setIsLoaded(true)
      }
    }
  }, [isInView, src])

  return (
    <div 
      ref={setImageRef}
      className={cn("relative overflow-hidden", className)}
      style={{ width, height }}
    >
      {/* Placeholder/Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Actual Image */}
      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        loading="lazy"
        {...props}
      />
    </div>
  )
}

export default LazyImage