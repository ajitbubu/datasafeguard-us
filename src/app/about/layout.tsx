import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us - Leading AI Data Privacy & Governance Company',
  description: 'DataSafeguard is the world\'s leading AI-powered data privacy management company. Learn about our mission to protect sensitive data and ensure compliance with GDPR, HIPAA, and CCPA regulations.',
  keywords: 'data privacy company, AI governance, data protection company, privacy compliance, GDPR compliance, data security company, enterprise data protection',
  path: '/about',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
