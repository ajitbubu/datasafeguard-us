"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DataSafeguardVsOneTrustPage() {
  const comparisonTable = [
    {
      category: "AI & Machine Learning",
      datasafeguard: "94.5% detection accuracy with custom ML models",
      onetrust: "Standard pattern matching and rules-based detection",
      winner: "datasafeguard"
    },
    {
      category: "Processing Speed",
      datasafeguard: "10M+ records per hour with HPC accelerator",
      onetrust: "Standard processing speeds",
      winner: "datasafeguard"
    },
    {
      category: "Deployment Options",
      datasafeguard: "On-premises, cloud, or hybrid - your choice",
      onetrust: "Primarily cloud-based SaaS",
      winner: "datasafeguard"
    },
    {
      category: "Data Sovereignty",
      datasafeguard: "Your data never leaves your infrastructure",
      onetrust: "Data processed in OneTrust cloud",
      winner: "datasafeguard"
    },
    {
      category: "Implementation Time",
      datasafeguard: "48 hours average",
      onetrust: "Several weeks to months",
      winner: "datasafeguard"
    },
    {
      category: "Pricing Model",
      datasafeguard: "Transparent, volume-based pricing",
      onetrust: "Complex, module-based pricing",
      winner: "datasafeguard"
    },
    {
      category: "AI Governance",
      datasafeguard: "Built-in AI model security and bias detection",
      onetrust: "Limited AI governance features",
      winner: "datasafeguard"
    },
    {
      category: "Compliance Coverage",
      datasafeguard: "GDPR, CCPA, HIPAA, PDPA, SOC 2",
      onetrust: "GDPR, CCPA, HIPAA, and more",
      winner: "tie"
    },
    {
      category: "Market Presence",
      datasafeguard: "Growing enterprise adoption",
      onetrust: "Established market leader",
      winner: "onetrust"
    },
    {
      category: "Integration Ecosystem",
      datasafeguard: "API-first with key integrations",
      onetrust: "Extensive integration marketplace",
      winner: "onetrust"
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link 
                href="/compare"
                className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Comparisons
              </Link>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              DataSafeguard vs{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                OneTrust
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              A comprehensive comparison of DataSafeguard and OneTrust for enterprise data privacy management, 
              AI governance, and compliance automation.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full text-blue-300 text-sm">
                Last Updated: October 2025
              </div>
              <div className="px-4 py-2 bg-green-500/20 border border-green-400/40 rounded-full text-green-300 text-sm">
                Unbiased Comparison
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Summary</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-card border-2 border-primary rounded-xl p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-2xl font-bold">DataSafeguard</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  AI-powered data privacy platform with industry-leading detection accuracy, 
                  flexible deployment, and rapid implementation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>94.5% AI detection accuracy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>On-premises or cloud deployment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>48-hour implementation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Zero data sharing</span>
                  </div>
                </div>
                <Link href="/contact-us" className="btn-primary w-full mt-6">
                  Try DataSafeguard
                </Link>
              </motion.div>

              <motion.div
                className="bg-card border border-border rounded-xl p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-bold">OneTrust</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Established privacy management platform with comprehensive features, 
                  extensive integrations, and strong market presence.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Market leader</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Extensive integration marketplace</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cloud-based SaaS</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complex pricing model</span>
                  </div>
                </div>
                <a 
                  href="https://www.onetrust.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary w-full mt-6"
                >
                  Visit OneTrust
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Feature-by-Feature Comparison</h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Feature</th>
                      <th className="px-6 py-4 text-left font-bold">DataSafeguard</th>
                      <th className="px-6 py-4 text-left font-bold">OneTrust</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, index) => (
                      <motion.tr
                        key={row.category}
                        className="border-t border-border hover:bg-muted/50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <td className="px-6 py-4 font-medium">{row.category}</td>
                        <td className={`px-6 py-4 ${row.winner === 'datasafeguard' ? 'text-primary font-medium' : ''}`}>
                          {row.datasafeguard}
                          {row.winner === 'datasafeguard' && (
                            <span className="ml-2 text-primary">✓</span>
                          )}
                        </td>
                        <td className={`px-6 py-4 ${row.winner === 'onetrust' ? 'text-primary font-medium' : ''}`}>
                          {row.onetrust}
                          {row.winner === 'onetrust' && (
                            <span className="ml-2 text-primary">✓</span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Which Platform is Right for You?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-card border-2 border-primary rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">Choose DataSafeguard if:</h3>
                <ul className="space-y-3">
                  {[
                    "You need on-premises or hybrid deployment",
                    "AI accuracy is critical for your use case",
                    "You process high volumes of data (10M+ records)",
                    "You want rapid implementation (48 hours)",
                    "Data sovereignty is a requirement",
                    "You need AI governance and model security",
                    "You prefer transparent, simple pricing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-card border border-border rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">Choose OneTrust if:</h3>
                <ul className="space-y-3">
                  {[
                    "You prefer cloud-only SaaS deployment",
                    "You need extensive third-party integrations",
                    "Brand recognition is important to stakeholders",
                    "You have complex, multi-module requirements",
                    "You're already in the OneTrust ecosystem",
                    "You need mature vendor risk management",
                    "Implementation timeline is flexible"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-cta">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to See DataSafeguard in Action?
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Schedule a personalized demo and see how DataSafeguard’s AI-powered platform 
            can transform your data privacy program
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact-us" className="btn-primary">
              Schedule Demo
            </Link>
            <Link href="/storefront" className="btn-secondary border-white text-white hover:bg-white/10">
              Explore Solutions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
