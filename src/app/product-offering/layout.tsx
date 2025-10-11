import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Products - Enterprise Data Privacy & Protection Platform',
  description: 'Explore DataSafeguard\'s product suite: Data Discovery & Classification, AI Privacy, Privacy Compliance Automation, Consent Management, and Policy Enforcement for enterprise data protection.',
  keywords: 'data privacy products, AI privacy platform, data classification, privacy automation, consent management platform, data discovery tool, compliance software',
  path: '/product-offering',
});

export default function ProductOfferingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
