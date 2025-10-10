"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductOfferingPage() {
  // Content based on provided product page design
  const featureRow = [
    {
      title: "Detect, Identify, Confirm, Redact PII data",
      icon: "/file.svg",
    },
    {
      title: "Does not claim rights to customer data",
      icon: "/globe.svg",
    },
    {
      title: "No 3rd party products/services for processing",
      icon: "/window.svg",
    },
    {
      title: "Custom‑developed models and algorithms",
      icon: "/file.svg",
    },
    {
      title: "Flexible deployments: On‑prem & Cloud",
      icon: "/globe.svg",
    },
    {
      title: "Minimal internal maintenance required",
      icon: "/window.svg",
    },
  ];

  const highlights = [
    {
      title: "Advanced AI/ML Models",
      desc:
        "Data Safeguard’s Data Privacy product uses first‑party models designed for speed, accuracy, and deployability. No external processors."
    },
    {
      title: "Data Accelerator Driven",
      desc:
        "HPC‑origin accelerator enables massive parallel processing and real‑time throughput across large volumes of data."
    },
    {
      title: "94.5% Accuracy",
      desc:
        "Industry‑leading detection, tagging, and redaction accuracy, validated at scale across high‑volume workloads."
    },
    {
      title: "Compliance Rules Engine",
      desc:
        "Framework‑based rules engine applies multi‑level policies in real time, helping align with GDPR, HIPAA, CCPA, and other standards."
    },
    {
      title: "Unstructured, Semi‑structured, Structured",
      desc:
        "Works across document, stream, and database formats with adaptable pipelines for diverse enterprise environments."
    },
    {
      title: "Policy Updates",
      desc:
        "Configurable UI enables rapid policy updates by data stewards, reducing operational overhead and friction."
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-20">
      {/* Hero split */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-gradient mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Best‑in‑Class Products
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Data Safeguard’s Data Privacy product intelligently detects and protects sensitive and personal data in email, chat, document, and transactional systems. It prevents synthetic fraud and protects real customers from impersonation using advanced models and a high‑performance data accelerator.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a className="btn-primary" href="#features">Learn More</a>
            </motion.div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-border bg-muted/30 p-4 md:p-6 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/banner-bg.png)'}}>
              <Image
                src="/banner-graphics.png"
                alt="Product Illustration"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features row */}
      <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Key Features</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Key features: Data Safeguard’s products are equipped with these important features to help you protect sensitive information and ensure compliance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureRow.map((f, i) => (
            <motion.div
              key={f.title}
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted/20"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Image src={f.icon} alt="" width={20} height={20} className="brightness-0 invert w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <span className="text-sm md:text-base font-medium">{f.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="card hover:shadow-glow-primary transition-shadow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <h3 className="text-lg font-semibold mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA ribbon */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="rounded-2xl border border-border bg-muted/30 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Have Any Questions?</h3>
            <p className="text-muted-foreground">We’re happy to talk through your use cases.</p>
          </div>
          <a href="/contact-us" className="btn-outline">Contact Us</a>
        </div>
      </section>

      {/* (Removed legacy Deployment Options & Modules section to resolve type errors) */}

      {/* End */}
    </div>
  );
}