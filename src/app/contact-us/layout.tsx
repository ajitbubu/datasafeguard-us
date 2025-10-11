import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us - Get Started with Data Privacy Solutions',
  description: 'Contact DataSafeguard to learn how our AI-powered data privacy platform can help your organization achieve compliance with GDPR, HIPAA, and CCPA. Schedule a demo today.',
  keywords: 'contact data privacy company, schedule demo, data protection consultation, privacy compliance contact, GDPR compliance demo',
  path: '/contact-us',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
