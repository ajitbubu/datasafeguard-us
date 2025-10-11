import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Compare Data Privacy Platforms - DataSafeguard vs Competitors',
  description: 'Compare DataSafeguard with OneTrust, Securiti, and BigID. See detailed feature comparisons, pricing, deployment options, and AI capabilities for data privacy platforms.',
  keywords: 'DataSafeguard vs OneTrust, DataSafeguard vs Securiti, data privacy platform comparison, privacy management software comparison, GDPR compliance tools comparison',
  path: '/compare',
});

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
