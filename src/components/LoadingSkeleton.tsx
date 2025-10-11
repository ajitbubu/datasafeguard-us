import { motion } from "framer-motion";

interface LoadingSkeletonProps {
  variant?: "text" | "card" | "image" | "circle";
  width?: string;
  height?: string;
  className?: string;
}

/**
 * Loading Skeleton Component
 * Provides visual feedback while content is loading
 * Improves perceived performance
 */
export default function LoadingSkeleton({
  variant = "text",
  width = "100%",
  height,
  className = "",
}: LoadingSkeletonProps) {
  const baseClasses = "bg-muted animate-pulse";
  
  const variantClasses = {
    text: "h-4 rounded",
    card: "h-48 rounded-xl",
    image: "aspect-video rounded-lg",
    circle: "rounded-full aspect-square",
  };

  const defaultHeights = {
    text: "1rem",
    card: "12rem",
    image: "auto",
    circle: "3rem",
  };

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        width,
        height: height || defaultHeights[variant],
      }}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/**
 * Usage Examples:
 * 
 * // Text skeleton
 * <LoadingSkeleton variant="text" width="80%" />
 * 
 * // Card skeleton
 * <LoadingSkeleton variant="card" />
 * 
 * // Image skeleton
 * <LoadingSkeleton variant="image" />
 * 
 * // Avatar skeleton
 * <LoadingSkeleton variant="circle" width="48px" height="48px" />
 * 
 * // Multiple lines
 * <div className="space-y-2">
 *   <LoadingSkeleton variant="text" width="100%" />
 *   <LoadingSkeleton variant="text" width="90%" />
 *   <LoadingSkeleton variant="text" width="80%" />
 * </div>
 */

// Blog Post Card Skeleton
export function BlogPostSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <LoadingSkeleton variant="image" />
      <div className="p-6 space-y-3">
        <LoadingSkeleton variant="text" width="30%" height="20px" />
        <LoadingSkeleton variant="text" width="100%" height="24px" />
        <LoadingSkeleton variant="text" width="90%" height="24px" />
        <div className="space-y-2 pt-2">
          <LoadingSkeleton variant="text" width="100%" />
          <LoadingSkeleton variant="text" width="95%" />
          <LoadingSkeleton variant="text" width="85%" />
        </div>
        <div className="flex gap-3 pt-2">
          <LoadingSkeleton variant="text" width="80px" />
          <LoadingSkeleton variant="text" width="80px" />
        </div>
      </div>
    </div>
  );
}

// Team Member Card Skeleton
export function TeamMemberSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 text-center">
      <div className="flex justify-center mb-4">
        <LoadingSkeleton variant="circle" width="120px" height="120px" />
      </div>
      <LoadingSkeleton variant="text" width="60%" height="24px" className="mx-auto mb-2" />
      <LoadingSkeleton variant="text" width="40%" height="16px" className="mx-auto mb-4" />
      <div className="space-y-2">
        <LoadingSkeleton variant="text" width="100%" />
        <LoadingSkeleton variant="text" width="90%" />
      </div>
    </div>
  );
}

// Feature Card Skeleton
export function FeatureCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <LoadingSkeleton variant="circle" width="64px" height="64px" className="mb-6" />
      <LoadingSkeleton variant="text" width="70%" height="28px" className="mb-4" />
      <div className="space-y-2">
        <LoadingSkeleton variant="text" width="100%" />
        <LoadingSkeleton variant="text" width="95%" />
        <LoadingSkeleton variant="text" width="85%" />
      </div>
    </div>
  );
}
