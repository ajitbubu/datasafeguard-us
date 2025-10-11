"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
  const featuredPost = {
    slug: "complete-guide-gdpr-compliance-2024",
    title: "Complete Guide to GDPR Compliance in 2024",
    excerpt: "Everything you need to know about GDPR compliance, from data mapping to subject rights management. A comprehensive guide for enterprises.",
    category: "Compliance",
    readTime: "12 min read",
    date: "October 8, 2025",
    image: "/blog/gdpr-guide.jpg",
    author: {
      name: "Sarah Chen",
      role: "Privacy Compliance Expert",
      avatar: "/team/sarah.jpg"
    }
  };

  const blogPosts = [
    {
      slug: "ai-governance-best-practices",
      title: "AI Governance Best Practices for Enterprise",
      excerpt: "Learn how to implement effective AI governance frameworks to ensure responsible AI deployment and compliance.",
      category: "AI Governance",
      readTime: "8 min read",
      date: "October 5, 2025",
      image: "/blog/ai-governance.jpg"
    },
    {
      slug: "data-mapping-discovery-guide",
      title: "Data Mapping and Discovery: A Practical Guide",
      excerpt: "Step-by-step guide to discovering, mapping, and classifying sensitive data across your organization.",
      category: "Data Privacy",
      readTime: "10 min read",
      date: "October 1, 2025",
      image: "/blog/data-mapping.jpg"
    },
    {
      slug: "ccpa-vs-gdpr-differences",
      title: "CCPA vs GDPR: Key Differences Explained",
      excerpt: "Understanding the similarities and differences between California's CCPA and Europe's GDPR regulations.",
      category: "Compliance",
      readTime: "7 min read",
      date: "September 28, 2025",
      image: "/blog/ccpa-gdpr.jpg"
    },
    {
      slug: "consent-management-strategies",
      title: "Modern Consent Management Strategies",
      excerpt: "How to implement user-friendly consent management that balances compliance with user experience.",
      category: "Privacy Tech",
      readTime: "6 min read",
      date: "September 25, 2025",
      image: "/blog/consent.jpg"
    },
    {
      slug: "data-breach-response-plan",
      title: "Creating an Effective Data Breach Response Plan",
      excerpt: "Essential steps to prepare for and respond to data breaches, including notification requirements and remediation.",
      category: "Security",
      readTime: "9 min read",
      date: "September 22, 2025",
      image: "/blog/breach-response.jpg"
    },
    {
      slug: "privacy-by-design-principles",
      title: "Privacy by Design: Implementation Principles",
      excerpt: "How to embed privacy into your product development lifecycle from the ground up.",
      category: "Best Practices",
      readTime: "8 min read",
      date: "September 18, 2025",
      image: "/blog/privacy-design.jpg"
    }
  ];

  const categories = [
    "All Posts",
    "Compliance",
    "AI Governance",
    "Data Privacy",
    "Security",
    "Best Practices",
    "Privacy Tech"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="mr-2">📚</span>
              Insights & Resources
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Data Privacy{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Blog & Resources
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Expert insights on data privacy, AI governance, compliance, and security best practices
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-foreground">Featured Article</h2>
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-6xl">📖</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg">
                      <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-4xl">📄</span>
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Stay Updated on Data Privacy
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Get the latest insights on data privacy, compliance, and AI governance delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
