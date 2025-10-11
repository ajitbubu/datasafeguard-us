import Script from 'next/script';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DataSafeguard",
    "url": "https://datasafeguard.us",
    "logo": "https://datasafeguard.us/brand-logo.svg",
    "description": "Enterprise AI data privacy and governance platform for automated compliance with GDPR, PDPA, and data protection regulations.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SG"
    },
    "sameAs": [
      "https://www.linkedin.com/company/datasafeguard",
      "https://twitter.com/datasafeguard"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": "https://datasafeguard.us/contact-us"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DataSafeguard",
    "url": "https://datasafeguard.us",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://datasafeguard.us/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DataSafeguard Platform",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Contact for enterprise pricing"
    },
    "description": "AI-powered data privacy and governance platform for enterprise compliance automation.",
    "featureList": [
      "Data Discovery and Classification",
      "AI Governance and Privacy",
      "Privacy Compliance Automation",
      "Consent Management",
      "Data Subject Rights Management",
      "Policy Enforcement"
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </>
  );
}
