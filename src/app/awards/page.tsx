"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AwardsPage() {
  const awards = [
    {
      year: "2024",
      title: "Top 14 Startups in the Silicon Valley",
      organization: "Data Safeguard Inc. ranks among the top 14 startups in the Silicon Valley.",
      link: "https://www.startupranking.com/regions/silicon-valley",
      icon: "🏆",
      featured: true
    },
    {
      year: "2023",
      title: "Top 50 Thought Leading Companies on Artificial Intelligence",
      organization: "Data Safeguard Inc. - 99th Rank in 50 Thought Leading Companies on Artificial Intelligence 2023 by Thinkers360",
      link: "https://www.thinkers360.com/tl/artificial-intelligence",
      icon: "🥇",
      featured: true
    },
    {
      year: "2023",
      title: "FinTech Awards 2023",
      organization: "Data Safeguard Inc. is one of the 2023 winners of FinTech Awards at Wealth & Finance.",
      link: "https://www.wealthandfinance-news.com/winners/data-safeguard-inc/",
      icon: "🏅",
      featured: false
    },
    {
      year: "2023",
      title: "Most Innovative Data Privacy & Compliance Solutions Provider 2023 - USA",
      organization: "Corporate Vision Magazine",
      link: "https://www.corporatevision-news.com/winners/data-safeguard-inc/",
      icon: "⭐",
      featured: false
    },
    {
      year: "2021",
      title: "RELIANCE product has been nominated for the 2021 Emerging Tech Awards",
      organization: "Banking Tech Awards - Best Smart Banking Tech Solution",
      link: "",
      icon: "🎖️",
      featured: false
    },
  ];

  const certifications = [
    {
      title: "SOC 2 Type II",
      icon: "✓",
      description: "Certified for security, availability, and confidentiality"
    },
    {
      title: "ISO 27001",
      icon: "✓",
      description: "Information security management system certified"
    },
    {
      title: "GDPR Compliant",
      icon: "✓",
      description: "Fully compliant with EU data protection regulations"
    },
    {
      title: "HIPAA Compliant",
      icon: "✓",
      description: "Meets healthcare data protection standards"
    },
  ];

  return (
    <div className="min-h-screen">
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
              <span className="mr-2">🏆</span>
              Awards & Recognition
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Industry{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Recognition
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Data Safeguard’s products are mature and precisely serious solutions for their hyper-sensitive and highly regulated use cases in the corporate world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Awards</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Recognized for excellence and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {awards.map((award, i) => (
              <motion.div
                key={`${award.year}-${award.title}`}
                className={`relative bg-card border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 ${
                  award.featured ? "border-primary/30 bg-gradient-to-br from-blue-500/5 to-purple-500/5" : "border-border"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              >
                {award.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{award.icon}</div>
                  <div className="flex-1">
                    <div className="text-primary font-bold text-sm mb-2">{award.year}</div>
                    <h3 className="text-xl font-bold mb-3 leading-tight">{award.title}</h3>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {award.organization}
                </p>
                
                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Compliance</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Trusted certifications ensuring the highest standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                className="bg-card border border-border rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{cert.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Trusted by Industry Leaders
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "6+", label: "Industry Awards" },
                  { value: "4+", label: "Certifications" },
                  { value: "500+", label: "Enterprise Clients" },
                  { value: "99.9%", label: "Customer Satisfaction" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Experience Award-Winning Data Protection
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join 500+ enterprises trusting DataSafeguard with their most sensitive data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/product-offering"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold hover:border-primary transition-colors"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
