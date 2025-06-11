import { cn } from "@/lib/utils"

function Skeleton({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200",
    subtle: "bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100",
    primary: "bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20",
  }
  
  return (
    <div
      className={cn(
        "animate-skeleton rounded-md bg-[length:200%_100%]",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

// Specific skeleton components for common use cases
function SkeletonText({ lines = 3, className, ...props }) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            i === lines - 1 && "w-3/4"
          )}
        />
      ))}
    </div>
  )
}

function SkeletonCard({ className, ...props }) {
  return (
    <div className={cn("space-y-4 p-6", className)} {...props}>
      <Skeleton className="h-8 w-3/4" />
      <SkeletonText lines={3} />
      <div className="flex gap-2">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  )
}

function SkeletonResourcePage({ className, ...props }) {
  return (
    <div className={cn("space-y-8", className)} {...props}>
      {/* Breadcrumb skeleton */}
      <div className="flex gap-2 items-center">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>
      
      {/* Title and metadata skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-12 w-3/4" />
        <div className="flex gap-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-20" />
        </div>
      </div>
      
      {/* Content skeleton */}
      <div className="space-y-6">
        <SkeletonText lines={4} />
        <Skeleton className="h-64 w-full" />
        <SkeletonText lines={6} />
        <SkeletonText lines={5} />
      </div>
    </div>
  )
}

export { Skeleton, SkeletonText, SkeletonCard, SkeletonResourcePage }