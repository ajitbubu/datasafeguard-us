import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Team - Data Privacy & Security Experts',
  description: 'Meet the DataSafeguard team of data privacy, AI governance, and security experts dedicated to protecting your organization\'s sensitive data and ensuring compliance.',
  keywords: 'data privacy team, security experts, AI governance experts, privacy compliance team, data protection professionals',
  path: '/team',
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
