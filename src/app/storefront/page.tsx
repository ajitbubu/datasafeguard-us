"use client";

import { motion } from "framer-motion";

export default function StorefrontPage() {
  const products = [
    {
      title: "Data Encryption Suite",
      description: "End-to-end encryption for data at rest and in transit with enterprise-grade security."
    },
    {
      title: "Compliance Dashboard",
      description: "Real-time compliance monitoring and reporting for GDPR, HIPAA, and SOX requirements."
    },
    {
      title: "Access Control Manager",
      description: "Advanced identity and access management with zero-trust security principles."
    },
    {
      title: "Threat Detection Engine",
      description: "AI-powered threat detection and automated response for proactive security."
    },
    {
      title: "Data Loss Prevention",
      description: "Comprehensive DLP solution to prevent unauthorized data access and exfiltration."
    },
    {
      title: "Security Analytics",
      description: "Advanced analytics and insights for security posture and risk assessment."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-gradient mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Security Solutions
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Comprehensive data protection solutions designed to secure your enterprise 
          infrastructure and ensure regulatory compliance.
        </motion.p>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              className="card group hover:shadow-glow-primary transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {product.description}
              </p>
              <button className="btn-outline text-sm">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}