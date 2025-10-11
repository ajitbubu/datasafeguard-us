import Script from 'next/script';

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
    role: string;
  };
  category: string;
  url: string;
}

export default function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  category,
  url,
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": author.name,
      "jobTitle": author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "DataSafeguard",
      "logo": {
        "@type": "ImageObject",
        "url": "https://datasafeguard.us/brand-logo.svg"
      }
    },
    "articleSection": category,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://datasafeguard.us"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://datasafeguard.us/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": url
      }
    ]
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
