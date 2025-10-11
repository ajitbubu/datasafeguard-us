"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ComparePage() {
  const comparisons = [
    {
      title: "DataSafeguard vs OneTrust",
      slug: "datasafeguard-vs-onetrust",
      description: "Compare DataSafeguard and OneTrust for data privacy management, AI governance, and compliance automation.",
      highlights: ["94.5% AI accuracy", "On-premises deployment", "48-hour implementation"],
      icon: "⚖️"
    },
    {
      title: "DataSafeguard vs Securiti",
      slug: "datasafeguard-vs-securiti",
      description: "Detailed comparison of DataSafeguard and Securiti privacy platforms for enterprise data protection.",
      highlights: ["10M+ records/hour", "Zero data sharing", "Custom ML models"],
      icon: "🔍"
    },
    {
      title: "DataSafeguard vs BigID",
      slug: "datasafeguard-vs-bigid",
      description: "Compare data discovery and classification capabilities between DataSafeguard and BigID.",
      highlights: ["Real-time processing", "Hybrid deployment", "AI-powered detection"],
      icon: "📊"
    }
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
              <span className="mr-2">⚖️</span>
              Platform Comparisons
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Compare{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Data Privacy Platforms
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              See how DataSafeguard compares to other leading data privacy and governance platforms
            </motion.p>
          </div>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comparisons.map((comparison, index) => (
                <motion.div
                  key={comparison.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/compare/${comparison.slug}`}>
                    <div className="group h-full bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                      <div className="text-5xl mb-4">{comparison.icon}</div>
                      <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {comparison.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {comparison.description}
                      </p>
                      <div className="space-y-2 mb-6">
                        {comparison.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        View Comparison
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Compare Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Compare Data Privacy Platforms?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Make Informed Decisions",
                  description: "Understand the key differences in features, pricing, and deployment options.",
                  icon: "🎯"
                },
                {
                  title: "Find the Right Fit",
                  description: "Every organization has unique requirements. Compare to find your perfect match.",
                  icon: "✨"
                },
                {
                  title: "Maximize ROI",
                  description: "Choose a platform that delivers the best value for your specific use case.",
                  icon: "💰"
                },
                {
                  title: "Avoid Vendor Lock-in",
                  description: "Understand deployment flexibility and data portability before committing.",
                  icon: "🔓"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-card border border-border rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Schedule a personalized demo to see how DataSafeguard compares for your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="btn-primary">
                  Schedule Demo
                </Link>
                <Link href="/faqs" className="btn-secondary">
                  View FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
