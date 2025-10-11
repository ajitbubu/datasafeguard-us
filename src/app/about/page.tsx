"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { value: "2021", label: "Founded" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "94.5%", label: "Detection Accuracy" },
    { value: "10M+", label: "Records/Hour" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Mission-Driven",
      description: "Protecting sensitive data and ensuring privacy compliance for organizations worldwide."
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Enterprise-grade privacy protection with zero-trust architecture and end-to-end encryption."
    },
    {
      icon: "🤝",
      title: "Customer Success",
      description: "Dedicated to delivering exceptional value and support to every client."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Leveraging cutting-edge AI and ML to stay ahead of evolving threats."
    },
  ];

  const milestones = [
    { year: "2021", title: "Company Founded", description: "DataSafeguard established with a vision to revolutionize data privacy" },
    { year: "2022", title: "SOC 2 Certification", description: "Achieved SOC 2 Type II certification for privacy and compliance" },
    { year: "2023", title: "500+ Clients", description: "Reached milestone of protecting data for 500+ enterprise clients" },
    { year: "2024", title: "AI Innovation", description: "Launched advanced AI-powered detection with 94.5% accuracy" },
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
              <span className="mr-2">🏢</span>
              About DataSafeguard
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              World’s #1 Leading{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Data Privacy
              </span>{" "}
              Management Company
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              We’re on a mission to protect sensitive data and ensure privacy compliance for organizations worldwide through innovative AI-powered solutions.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Story</span>
              </h2>
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2021, DataSafeguard emerged from a critical need in the market: organizations struggling to protect sensitive personal information while maintaining compliance with evolving data privacy regulations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our founders, with decades of combined experience in data privacy and protection, recognized that traditional approaches were no longer sufficient. They envisioned a solution that would leverage artificial intelligence and machine learning to automatically detect, classify, and protect sensitive data at scale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, DataSafeguard serves over 500 enterprise clients worldwide, processing millions of records per hour with industry-leading 94.5% accuracy. We continue to innovate and expand our capabilities to meet the evolving challenges of data privacy and security.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key milestones in our growth
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]" />
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="text-primary font-bold text-sm mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Join Us in Protecting Data Worldwide
          </motion.h2>
          <motion.p
            className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Partner with the world’s leading AI-powered data privacy management company
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Meet Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
