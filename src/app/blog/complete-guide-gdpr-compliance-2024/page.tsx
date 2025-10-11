"use client";

import BlogPost from "@/components/BlogPost";

export default function GDPRGuidePage() {
  return (
    <BlogPost
      title="Complete Guide to GDPR Compliance in 2024"
      excerpt="Everything you need to know about GDPR compliance, from data mapping to subject rights management. A comprehensive guide for enterprises."
      category="Compliance"
      date="October 8, 2025"
      readTime="12 min read"
      author={{ name: "Sarah Chen", role: "Privacy Compliance Expert" }}
    >
      <div className="space-y-6">
        <h2 className="text-3xl font-bold mt-8 mb-4">Introduction</h2>
        <p className="leading-relaxed">
          GDPR (General Data Protection Regulation) sets a global benchmark for data protection.
          This guide provides practical steps for enterprises to achieve and maintain compliance.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Key Pillars of Compliance</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Data discovery and mapping of personal data</li>
          <li>Lawful basis for processing and consent management</li>
          <li>Data subject rights (DSARs) handling</li>
          <li>Security controls and breach notification</li>
          <li>Vendor risk management and DPA contracts</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">Implementation Steps</h2>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Perform a data inventory and classification</li>
          <li>Define processing activities and legal bases</li>
          <li>Implement policies and privacy by design controls</li>
          <li>Establish DSAR workflows and training</li>
          <li>Continuously monitor and audit compliance</li>
        </ol>

        <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mt-8">
          <p className="font-semibold mb-2">💡 Pro Tip:</p>
          <p className="text-muted-foreground">
            Automate repetitive compliance tasks and maintain audit trails to reduce risk and effort.
          </p>
        </div>
      </div>
    </BlogPost>
  );
}