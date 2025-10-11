import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'FAQs - Data Privacy & Compliance Questions Answered',
  description: 'Get answers to frequently asked questions about DataSafeguard\'s AI-powered data privacy platform, compliance features, privacy protection, implementation, and pricing.',
  keywords: 'data privacy FAQ, GDPR compliance questions, data protection FAQ, privacy platform questions, data privacy FAQ, compliance automation FAQ',
  path: '/faqs',
});

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
