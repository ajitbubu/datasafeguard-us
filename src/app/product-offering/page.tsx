"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import ProductClient from "./ProductClient";

// Orbit Component - Inline
function computeDelay(idx: number, total: number, speed: number): string {
  if (total <= 0 || speed <= 0) return '0s';
  const step = speed / total;
  const val = (idx * step) % speed;
  return `${val}s`;
}

function IntegrationOrbit() {
  const [paused, setPaused] = useState(false);

  const orbitGroups = [
    {
      radius: 150,
      speed: 40,
      logos: [
        { src: 'https://cdn.simpleicons.org/amazonaws/FF9900', alt: 'AWS' },
        { src: 'https://cdn.simpleicons.org/microsoftazure/0078D4', alt: 'Azure' },
        { src: 'https://cdn.simpleicons.org/googlecloud/4285F4', alt: 'Google Cloud' },
        { src: 'https://cdn.simpleicons.org/snowflake/29B5E8', alt: 'Snowflake' }
      ]
    },
    {
      radius: 220,
      speed: 60,
      logos: [
        { src: 'https://cdn.simpleicons.org/slack/4A154B', alt: 'Slack' },
        { src: 'https://cdn.simpleicons.org/github/181717', alt: 'GitHub' },
        { src: 'https://cdn.simpleicons.org/notion/000000', alt: 'Notion' },
        { src: 'https://cdn.simpleicons.org/asana/F06A6A', alt: 'Asana' },
        { src: 'https://cdn.simpleicons.org/tableau/E97627', alt: 'Tableau' },
        { src: 'https://cdn.simpleicons.org/salesforce/00A1E0', alt: 'Salesforce' }
      ]
    },
    {
      radius: 300,
      speed: 80,
      logos: [
        { src: 'https://cdn.simpleicons.org/openai/412991', alt: 'OpenAI' },
        { src: 'https://cdn.simpleicons.org/databricks/FF3621', alt: 'Databricks' },
        { src: 'https://cdn.simpleicons.org/looker/4285F4', alt: 'Looker' },
        { src: 'https://cdn.simpleicons.org/powerbi/F2C811', alt: 'Power BI' },
        { src: 'https://cdn.simpleicons.org/postgresql/4169E1', alt: 'PostgreSQL' },
        { src: 'https://cdn.simpleicons.org/mongodb/47A248', alt: 'MongoDB' },
        { src: 'https://cdn.simpleicons.org/redis/DC382D', alt: 'Redis' },
        { src: 'https://cdn.simpleicons.org/apachehadoop/66CCFF', alt: 'Hadoop' }
      ]
    },
  ];

  return (
    <section
      className="eoh-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(p => !p)}
      suppressHydrationWarning
    >
      <div className="eoh-inner" suppressHydrationWarning>
        <h2 className="eoh-title" suppressHydrationWarning>1000+ Pre-Built Integrations</h2>
        <p className="eoh-subtitle" suppressHydrationWarning>
          Seamlessly connect with your entire data ecosystem across cloud platforms, databases, SaaS applications, and enterprise tools.
        </p>

        <div className={`eoh-orbit-wrap ${paused ? 'paused' : ''}`} suppressHydrationWarning>
          <div className="eoh-core" suppressHydrationWarning>DataSafeguard.ai</div>

          {orbitGroups.map((orbit, oi) => (
            <React.Fragment key={oi}>
              <div className="eoh-orbit" style={{ width: orbit.radius * 2, height: orbit.radius * 2 }} />
              {orbit.logos.map((logo, li) => (
                <div
                  key={`${oi}-${li}`}
                  className="eoh-rot"
                  style={{
                    animation: `eoh-spin ${orbit.speed}s linear infinite`,
                    animationDelay: computeDelay(li, orbit.logos.length, orbit.speed),
                  }}
                >
                  <div
                    className="eoh-logo-wrapper"
                    style={{ transform: `translate(${orbit.radius}px, -50%)` }}
                  >
                    <div className="eoh-logo" title={logo.alt}>
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.35'; }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        <div className="eoh-cta" suppressHydrationWarning>
          <Link href="/storefront" className="eoh-btn eoh-btn--primary">
            Explore Integrations
          </Link>
          <Link href="/contact-us" className="eoh-btn eoh-btn--ghost">
            Book a Demo
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes eoh-spin { 
          from { transform: translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(-50%, -50%) rotate(360deg); } 
        }
      `}</style>

      <style jsx>{`
        .eoh-hero { 
          position: relative; 
          background: linear-gradient(to bottom, #f8fafc, #ffffff); 
          color: #0f172a; 
          overflow: hidden;
          padding: 4rem 0;
        }
        .eoh-inner { 
          max-width: 1120px; 
          margin: 0 auto; 
          padding: 0 1.25rem; 
          text-align: center; 
        }
        .eoh-title { 
          font-size: clamp(2rem, 3.6vw, 3rem); 
          font-weight: 800; 
          margin: 0 0 0.5rem; 
        }
        .eoh-subtitle { 
          color: #475569; 
          font-size: clamp(1rem, 1.4vw, 1.125rem); 
          margin: 0 auto 2.5rem; 
          max-width: 48rem; 
        }
        .eoh-orbit-wrap { 
          position: relative; 
          width: min(92vw, 700px); 
          height: min(92vw, 700px); 
          margin: 0 auto 2rem; 
        }
        .eoh-orbit-wrap.paused .eoh-rot { 
          animation-play-state: paused !important; 
        }
        .eoh-core { 
          position: absolute; 
          top: 50%; 
          left: 50%; 
          transform: translate(-50%, -50%); 
          width: 10rem; 
          height: 10rem; 
          background: linear-gradient(135deg, #0284c7, #2563eb); 
          border-radius: 9999px; 
          box-shadow: 0 8px 22px rgba(2,132,199,.28); 
          color: #fff; 
          display: grid; 
          place-items: center; 
          font-weight: 600; 
          padding: 1rem; 
          z-index: 1; 
        }
        .eoh-orbit { 
          position: absolute; 
          top: 50%; 
          left: 50%; 
          transform: translate(-50%, -50%); 
          border: 1px solid rgba(56,189,248,.35); 
          border-radius: 9999px; 
          z-index: 0; 
        }
        .eoh-rot { 
          position: absolute; 
          top: 50%; 
          left: 50%; 
          width: 0; 
          height: 0; 
          z-index: 2; 
        }
        .eoh-logo-wrapper {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        .eoh-logo { 
          width: 56px; 
          height: 56px; 
          border-radius: 50%; 
          background: #fff; 
          padding: 12px; 
          box-shadow: 0 4px 12px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04); 
          display: inline-flex; 
          align-items: center;
          justify-content: center;
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .eoh-logo:hover { 
          transform: scale(1.12); 
          box-shadow: 0 8px 24px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.08);
        }
        .eoh-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .eoh-cta { 
          display: flex; 
          gap: .75rem; 
          justify-content: center; 
          flex-wrap: wrap;
        }
        .eoh-btn { 
          text-decoration: none; 
          display: inline-flex; 
          align-items: center; 
          gap: .5rem; 
          padding: .75rem 1.25rem; 
          border-radius: 14px; 
          font-weight: 600; 
          transition: all 200ms ease;
        }
        .eoh-btn--primary { 
          background: #0f172a; 
          color: #fff; 
          box-shadow: 0 6px 16px rgba(15, 23, 42, .25); 
        }
        .eoh-btn--primary:hover { 
          filter: brightness(1.05); 
          transform: translateY(-2px);
        }
        .eoh-btn--ghost { 
          background: #fff; 
          color: #0f172a; 
          border: 1px solid #e2e8f0; 
        }
        .eoh-btn--ghost:hover { 
          background: #f8fafc; 
          transform: translateY(-2px);
        }
        @media (max-width: 640px) {
          .eoh-core { width: 8rem; height: 8rem; font-size: .95rem; }
          .eoh-logo { width: 48px; height: 48px; padding: 10px; }
        }
        @media (max-width: 390px) {
          .eoh-core { width: 7rem; height: 7rem; font-size: .9rem; }
          .eoh-logo { width: 40px; height: 40px; padding: 8px; }
        }
      `}</style>
    </section>
  );
}

export default function ProductOfferingPage() {
  const [activeTab, setActiveTab] = useState("data-privacy");

  const solutions = [
    {
      id: "data-privacy",
      title: "Data Privacy & Protection",
      iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
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
      iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
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
      iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
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
      iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    },
    {
      title: "No 3rd Party Data Processing",
      description: "Your data never leaves your infrastructure",
      iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    },
    {
      title: "Custom AI/ML Models",
      description: "Proprietary algorithms built for accuracy",
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "Flexible Deployment",
      description: "On-premises, cloud, or hybrid options",
      iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    },
    {
      title: "Minimal Maintenance",
      description: "Automated updates and self-healing systems",
      iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    },
    {
      title: "Real-time Processing",
      description: "HPC-powered data accelerator for instant results",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
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
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      features: ["Complete data sovereignty", "Custom hardware integration", "Air-gapped deployment", "Dedicated support"]
    },
    {
      title: "Cloud",
      description: "Scalable deployment on AWS, Azure, or GCP",
      iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      features: ["Auto-scaling", "Global availability", "Managed infrastructure", "Pay-as-you-grow"]
    },
    {
      title: "Hybrid",
      description: "Best of both worlds with flexible architecture",
      iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      features: ["Distributed processing", "Data residency compliance", "Seamless integration", "Unified management"]
    }
  ];

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <div className="min-h-screen">
      <ProductClient />
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
                    { label: "Detection Rate", value: "94.5%", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { label: "Processing Speed", value: "10M+/hr", iconPath: "M13 10V3L4 14h7v7l9-11h-7z" },
                    { label: "Compliance", value: "100%", iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                    { label: "Uptime", value: "99.9%", iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <div className="flex justify-center mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.iconPath} />
                          </svg>
                        </div>
                      </div>
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
              <div className="mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                  </svg>
                </div>
              </div>
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
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === solution.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-card border border-border hover:border-primary/50"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center ${activeTab === solution.id ? 'bg-white/20' : 'bg-primary/10'}`}>
                  <svg className={`w-4 h-4 ${activeTab === solution.id ? 'text-white' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.iconPath} />
                  </svg>
                </div>
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
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeSolution.iconPath} />
                    </svg>
                  </div>
                </div>
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
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={option.iconPath} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>

                <ul className="space-y-3">
                  {option.features.map((feature) => (
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

      {/* Integration Orbit Section */}
      <IntegrationOrbit />

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
