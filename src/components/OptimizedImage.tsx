import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  priority?: boolean;
}

/**
 * Optimized Image Component
 * Wrapper around Next.js Image with performance best practices
 */
export default function OptimizedImage({
  src,
  alt,
  priority = false,
  quality = 85,
  loading,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      quality={quality}
      loading={priority ? undefined : (loading || 'lazy')}
      priority={priority}
      {...props}
      // Ensure proper sizing to prevent CLS
      style={{
        ...props.style,
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  );
}

/**
 * Usage Examples:
 * 
 * // Hero image (above fold, high priority)
 * <OptimizedImage
 *   src="/hero.webp"
 *   alt="Data privacy dashboard"
 *   width={1920}
 *   height={1080}
 *   priority
 * />
 * 
 * // Feature image (below fold, lazy load)
 * <OptimizedImage
 *   src="/feature.webp"
 *   alt="GDPR compliance features"
 *   width={800}
 *   height={600}
 * />
 * 
 * // Thumbnail (lazy load, lower quality)
 * <OptimizedImage
 *   src="/thumb.webp"
 *   alt="Blog post thumbnail"
 *   width={400}
 *   height={300}
 *   quality={75}
 * />
 */
