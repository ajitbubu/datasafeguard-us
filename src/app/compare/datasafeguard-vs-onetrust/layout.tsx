import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'DataSafeguard vs OneTrust: 2025 Comparison Guide',
  description: 'Comprehensive comparison of DataSafeguard and OneTrust data privacy platforms. Compare AI accuracy, deployment options, pricing, implementation time, and features for GDPR and CCPA compliance.',
  keywords: 'DataSafeguard vs OneTrust, OneTrust alternative, data privacy platform comparison, privacy management software, GDPR compliance tools, OneTrust competitor',
  path: '/compare/datasafeguard-vs-onetrust',
});

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
