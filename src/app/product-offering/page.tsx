"use client";

import { motion } from "framer-motion";

export default function ProductOfferingPage() {
  const offerings = [
    { 
      title: "Privacy Engineering", 
      desc: "Build privacy by design across features and teams with comprehensive privacy frameworks and automated compliance checks.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    },
    { 
      title: "Threat Modeling", 
      desc: "Understand risk and defenses across your architecture with advanced threat intelligence and vulnerability assessment tools.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    { 
      title: "Monitoring & Observability", 
      desc: "Detect anomalies and policy violations in real time with AI-powered monitoring and comprehensive security dashboards.",
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    },
    { 
      title: "Incident Response", 
      desc: "Preparedness and playbooks for rapid recovery with automated incident workflows and forensic analysis capabilities.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Data Governance",
      desc: "Comprehensive data lifecycle management with automated classification, retention policies, and compliance reporting.",
      icon: "M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2M9 5a2 2 0 012 2v6a2 2 0 01-2 2M9 5a2 2 0 012-2h2a2 2 0 012 2M15 5a2 2 0 012 2v6a2 2 0 01-2 2"
    },
    {
      title: "Security Training",
      desc: "Interactive security awareness programs and phishing simulation to build a security-conscious culture.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
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
          Product Offerings
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Comprehensive capabilities tailored to protect your data lifecycle, 
          from initial collection to secure disposal, ensuring compliance and security at every step.
        </motion.p>
      </section>

      {/* Offerings Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              className="card group hover:shadow-glow-primary transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="flex items-center justify-between">
                <button className="btn-outline text-sm">
                  Learn More
                </button>
                <svg className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          className="bg-gradient-cta rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Data?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive security solutions and protect your organization&#39;s most valuable assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-cta">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}