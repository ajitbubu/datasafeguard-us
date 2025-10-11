import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Solutions - AI Data Privacy & Governance Platform',
  description: 'Discover DataSafeguard\'s comprehensive data privacy solutions including AI governance, automated compliance, data discovery, consent management, and real-time policy enforcement.',
  keywords: 'data privacy solutions, AI governance platform, compliance automation, data discovery, consent management, GDPR solution, CCPA compliance, data protection platform',
  path: '/storefront',
});

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
