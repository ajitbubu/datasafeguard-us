"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ProductOfferingPage() {
  const [activeTab, setActiveTab] = useState("data-privacy");

  const solutions = [
    {
      id: "data-privacy",
      title: "Data Privacy & Protection",
      icon: "🔒",
      tagline: "Intelligent PII Detection & Redaction",
      description: "Automatically detect, identify, and redact sensitive personal information across all your data systems with industry-leading accuracy.",
      features: [
        "94.5% Detection Accuracy",
        "Real-time PII Identification",
        "Automated Redaction",
        "Multi-format Support",
        "GDPR & CCPA Compliant",
        "Zero Data Retention"
      ],
      benefits: [
        "Reduce compliance risk by 90%",
        "Process 10M+ records per hour",
        "Deploy in 48 hours",
        "No third-party data sharing"
      ]
    },
    {
      id: "fraud-prevention",
      title: "Fraud Prevention",
      icon: "🛡️",
      tagline: "AI-Powered Synthetic Identity Detection",
      description: "Prevent synthetic fraud and protect real customers from impersonation using advanced machine learning models.",
      features: [
        "Synthetic Identity Detection",
        "Real-time Risk Scoring",
        "Behavioral Analytics",
        "Multi-layer Verification",
        "Anomaly Detection",
        "Continuous Monitoring"
      ],
      benefits: [
        "Block 99% of synthetic identities",
        "Reduce false positives by 85%",
        "Save $2M+ annually in fraud losses",
        "Improve customer experience"
      ]
    },
    {
      id: "compliance",
      title: "Compliance Automation",
      icon: "✓",
      tagline: "Framework-Based Rules Engine",
      description: "Automate compliance workflows with our intelligent rules engine that adapts to GDPR, HIPAA, CCPA, and other regulatory frameworks.",
      features: [
        "Multi-framework Support",
        "Automated Policy Enforcement",
        "Audit Trail Generation",
        "Real-time Monitoring",
        "Custom Rule Creation",
        "Compliance Reporting"
      ],
      benefits: [
        "Reduce audit prep time by 70%",
        "Automated compliance checks",
        "Real-time policy updates",
        "Comprehensive audit logs"
      ]
    }
  ];

  const keyFeatures = [
    {
      title: "Detect, Identify, Confirm, Redact PII",
      description: "Advanced AI models for comprehensive PII detection",
      icon: "🔍"
    },
    {
      title: "No 3rd Party Data Processing",
      description: "Your data never leaves your infrastructure",
      icon: "🔐"
    },
    {
      title: "Custom AI/ML Models",
      description: "Proprietary algorithms built for accuracy",
      icon: "🤖"
    },
    {
      title: "Flexible Deployment",
      description: "On-premises, cloud, or hybrid options",
      icon: "☁️"
    },
    {
      title: "Minimal Maintenance",
      description: "Automated updates and self-healing systems",
      icon: "⚙️"
    },
    {
      title: "Real-time Processing",
      description: "HPC-powered data accelerator for instant results",
      icon: "⚡"
    }
  ];

  const technicalHighlights = [
    {
      title: "Advanced AI/ML Models",
      description: "First-party models designed for speed, accuracy, and deployability. No external processors.",
      metric: "94.5%",
      metricLabel: "Accuracy",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Accelerator Driven",
      description: "HPC-origin accelerator enables massive parallel processing and real-time throughput.",
      metric: "10M+",
      metricLabel: "Records/Hour",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance Rules Engine",
      description: "Framework-based rules engine applies multi-level policies in real time.",
      metric: "100%",
      metricLabel: "Compliant",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Universal Data Support",
      description: "Works across unstructured, semi-structured, and structured data formats.",
      metric: "All",
      metricLabel: "Data Types",
      color: "from-orange-500 to-red-500"
    }
  ];

  const deploymentOptions = [
    {
      title: "On-Premises",
      description: "Full control with deployment in your data center",
      icon: "🏢",
      features: ["Complete data sovereignty", "Custom hardware integration", "Air-gapped deployment", "Dedicated support"]
    },
    {
      title: "Cloud",
      description: "Scalable deployment on AWS, Azure, or GCP",
      icon: "☁️",
      features: ["Auto-scaling", "Global availability", "Managed infrastructure", "Pay-as-you-grow"]
    },
    {
      title: "Hybrid",
      description: "Best of both worlds with flexible architecture",
      icon: "🔄",
      features: ["Distributed processing", "Data residency compliance", "Seamless integration", "Unified management"]
    }
  ];

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

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

          {[...Array(15)].map((_, i) => {
            const left = (i * 47) % 100;
            const top = (i * 71) % 100;
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="mr-2">🚀</span>
                Enterprise Solutions
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Best-in-Class{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Data Protection
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                Intelligently detect and protect sensitive data across email, chat, documents, and transactional systems.
                Prevent fraud and ensure compliance with AI-powered automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                  >
                    Request Demo
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#solutions"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    Explore Solutions
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Detection Rate", value: "94.5%", icon: "🎯" },
                    { label: "Processing Speed", value: "10M+/hr", icon: "⚡" },
                    { label: "Compliance", value: "100%", icon: "✓" },
                    { label: "Uptime", value: "99.9%", icon: "🔒" }
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Key Features
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade capabilities designed to protect your most sensitive data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Tabs Section */}
      <section id="solutions" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive data protection solutions tailored to your needs
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutions.map((solution, i) => (
              <motion.button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === solution.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-card border border-border hover:border-primary/50"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="mr-2">{solution.icon}</span>
                {solution.title}
              </motion.button>
            ))}
          </div>

          {/* Active Solution Content */}
          <motion.div
            key={activeTab}
            className="bg-card border border-border rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Description */}
              <div>
                <div className="text-5xl mb-4">{activeSolution.icon}</div>
                <h3 className="text-3xl font-bold mb-3">{activeSolution.title}</h3>
                <p className="text-primary font-semibold mb-4">{activeSolution.tagline}</p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {activeSolution.description}
                </p>

                <h4 className="font-bold text-lg mb-4">Key Benefits:</h4>
                <ul className="space-y-3">
                  {activeSolution.benefits.map((benefit, i) => (
                    <motion.li
                      key={benefit}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right: Features */}
              <div>
                <h4 className="font-bold text-lg mb-6">Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeSolution.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="font-medium text-sm">{feature}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built on cutting-edge technology for unmatched performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalHighlights.map((highlight, i) => (
            <motion.div
              key={highlight.title}
              className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${highlight.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold flex-1">{highlight.title}</h3>
                  <div className="text-right">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                      {highlight.metric}
                    </div>
                    <div className="text-xs text-muted-foreground">{highlight.metricLabel}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deployment Options */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Deployment</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Deploy where it makes sense for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deploymentOptions.map((option, i) => (
              <motion.div
                key={option.title}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>

                <ul className="space-y-3">
                  {option.features.map((feature, j) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Protect Your Data?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Talk to our experts about your specific use case and see how we can help secure your sensitive information.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
                >
                  Schedule a Demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
