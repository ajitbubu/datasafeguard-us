import { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  path: string;
}

export function generatePageMetadata({
  title,
  description,
  keywords,
  path,
}: PageMetadata): Metadata {
  const baseUrl = 'https://datasafeguard.us';
  const fullUrl = `${baseUrl}${path}`;
  
  return {
    title: `${title} | DataSafeguard`,
    description,
    keywords,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: `${title} | DataSafeguard`,
      description,
      url: fullUrl,
      siteName: 'DataSafeguard',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/assets/og-banner.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | DataSafeguard`,
      description,
      images: [`${baseUrl}/assets/og-banner.png`],
    },
  };
}
