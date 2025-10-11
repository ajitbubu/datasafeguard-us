"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function StorefrontPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Solutions", icon: "🎯" },
    { id: "privacy", name: "Data Privacy", icon: "🔒" },
    { id: "security", name: "Security", icon: "🛡️" },
    { id: "compliance", name: "Compliance", icon: "✓" },
    { id: "analytics", name: "Analytics", icon: "📊" }
  ];

  const solutions = [
    {
      id: 1,
      category: "privacy",
      title: "PII Detection & Redaction",
      tagline: "Intelligent Personal Data Protection",
      description: "Automatically detect, classify, and redact sensitive personal information across all your data systems with 94.5% accuracy.",
      icon: "🔍",
      features: ["Real-time Detection", "Automated Redaction", "Multi-format Support", "GDPR Compliant"],
      pricing: "Enterprise",
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      category: "security",
      title: "Synthetic Identity Detection",
      tagline: "AI-Powered Fraud Prevention",
      description: "Prevent synthetic fraud and protect real customers from impersonation using advanced machine learning models.",
      icon: "🛡️",
      features: ["99% Detection Rate", "Real-time Scoring", "Behavioral Analytics", "Continuous Monitoring"],
      pricing: "Enterprise",
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      category: "compliance",
      title: "Compliance Automation",
      tagline: "Framework-Based Rules Engine",
      description: "Automate compliance workflows with intelligent rules that adapt to GDPR, HIPAA, CCPA, and other frameworks.",
      icon: "✓",
      features: ["Multi-framework", "Auto Enforcement", "Audit Trails", "Real-time Monitoring"],
      pricing: "Enterprise",
      popular: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      category: "security",
      title: "Data Encryption Suite",
      tagline: "End-to-End Protection",
      description: "Enterprise-grade encryption for data at rest and in transit with advanced key management and rotation.",
      icon: "🔐",
      features: ["AES-256 Encryption", "Key Management", "Zero-Knowledge", "Hardware Security"],
      pricing: "Contact Sales",
      popular: false,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      category: "security",
      title: "Access Control Manager",
      tagline: "Zero-Trust Security",
      description: "Advanced identity and access management with zero-trust principles and multi-factor authentication.",
      icon: "🔑",
      features: ["Zero-Trust Model", "MFA Support", "Role-Based Access", "Session Management"],
      pricing: "Contact Sales",
      popular: false,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      category: "security",
      title: "Threat Detection Engine",
      tagline: "Proactive Security",
      description: "AI-powered threat detection with automated response capabilities for real-time security protection.",
      icon: "⚠️",
      features: ["AI Detection", "Auto Response", "Threat Intelligence", "24/7 Monitoring"],
      pricing: "Enterprise",
      popular: false,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 7,
      category: "privacy",
      title: "Data Loss Prevention",
      tagline: "Prevent Data Exfiltration",
      description: "Comprehensive DLP solution to prevent unauthorized data access, sharing, and exfiltration.",
      icon: "🚫",
      features: ["Content Inspection", "Policy Enforcement", "Endpoint Protection", "Cloud DLP"],
      pricing: "Contact Sales",
      popular: false,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 8,
      category: "analytics",
      title: "Security Analytics",
      tagline: "Data-Driven Insights",
      description: "Advanced analytics and insights for security posture assessment and risk management.",
      icon: "📊",
      features: ["Risk Scoring", "Trend Analysis", "Custom Reports", "Predictive Analytics"],
      pricing: "Contact Sales",
      popular: false,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 9,
      category: "compliance",
      title: "Audit Trail Manager",
      tagline: "Complete Visibility",
      description: "Comprehensive audit logging and trail management for compliance and forensic analysis.",
      icon: "📝",
      features: ["Immutable Logs", "Forensic Analysis", "Compliance Reports", "Real-time Alerts"],
      pricing: "Contact Sales",
      popular: false,
      color: "from-teal-500 to-green-500"
    }
  ];

  const filteredSolutions = selectedCategory === "all" 
    ? solutions 
    : solutions.filter(s => s.category === selectedCategory);

  const stats = [
    { value: "94.5%", label: "Detection Accuracy", icon: "🎯" },
    { value: "10M+", label: "Records/Hour", icon: "⚡" },
    { value: "99.9%", label: "Uptime SLA", icon: "🔒" },
    { value: "500+", label: "Enterprise Clients", icon: "🏢" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-900 py-20 md:py-32">
        {/* Animated Background */}
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
          
          {[...Array(20)].map((_, i) => {
            const left = (i * 51) % 100;
            const top = (i * 73) % 100;
            const duration = 3 + (i % 5) * 0.4;
            const delay = (i % 10) * 0.2;
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                style={{ left: `${left}%`, top: `${top}%` }}
                animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration, repeat: Infinity, delay }}
              />
            );
          })}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="mr-2">🛍️</span>
              Solutions Marketplace
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Enterprise{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Security Solutions
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Comprehensive data protection solutions designed to secure your enterprise 
              infrastructure and ensure regulatory compliance. Choose from our suite of 
              AI-powered security products.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Request Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Browse Solutions
              </a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section id="solutions" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category, i) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {filteredSolutions.length} solution{filteredSolutions.length !== 1 ? 's' : ''} available
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution, i) => (
            <motion.div
              key={solution.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
            >
              {/* Popular Badge */}
              {solution.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Popular
                  </div>
                </div>
              )}

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative p-6">
                {/* Icon */}
                <div className="text-5xl mb-4">{solution.icon}</div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-primary font-semibold mb-3">
                  {solution.tagline}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, j) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground">Pricing</div>
                    <div className="font-bold text-lg">{solution.pricing}</div>
                  </div>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary hover:text-white text-primary px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredSolutions.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No solutions found</h3>
            <p className="text-muted-foreground">Try selecting a different category</p>
          </motion.div>
        )}
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DataSafeguard</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Industry-leading technology backed by proven results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤖",
                title: "AI-Powered",
                description: "Custom ML models built for accuracy and speed"
              },
              {
                icon: "🔐",
                title: "Data Sovereignty",
                description: "Your data never leaves your infrastructure"
              },
              {
                icon: "⚡",
                title: "Real-Time",
                description: "Process millions of records per hour"
              },
              {
                icon: "🎯",
                title: "94.5% Accuracy",
                description: "Industry-leading detection rates"
              }
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="bg-card border border-border rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 md:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Talk to our team about your security needs and find the perfect solution for your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
                >
                  Contact Sales
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/product-offering"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Products
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
