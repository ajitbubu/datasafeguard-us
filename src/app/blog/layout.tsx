import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog - Data Privacy, AI Governance & Compliance Insights',
  description: 'Expert insights and best practices on data privacy, GDPR compliance, AI governance, data security, and privacy regulations. Stay informed with DataSafeguard\'s blog.',
  keywords: 'data privacy blog, GDPR compliance guide, AI governance insights, data security best practices, privacy regulations, compliance articles, data protection blog',
  path: '/blog',
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
