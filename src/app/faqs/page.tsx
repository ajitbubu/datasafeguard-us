"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import FAQSchema from "@/components/FAQSchema";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: "General",
      icon: "ℹ️",
      faqs: [
        {
          question: "What is DataSafeguard?",
          answer: "DataSafeguard is the world's leading AI-powered data privacy management company. We provide enterprise-grade solutions for detecting, classifying, and protecting sensitive personal information across all your data systems."
        },
        {
          question: "Who can benefit from DataSafeguard?",
          answer: "Any organization that handles sensitive data can benefit from our solutions. This includes enterprises in healthcare, finance, retail, technology, and government sectors that need to comply with GDPR, HIPAA, CCPA, and other data privacy regulations."
        },
        {
          question: "What makes DataSafeguard different?",
          answer: "Our proprietary AI/ML models achieve 94.5% detection accuracy, we process 10M+ records per hour, and we never share your data with third parties. Your data stays in your infrastructure with our on-premises, cloud, or hybrid deployment options."
        },
      ]
    },
    {
      category: "Product & Features",
      icon: "🔧",
      faqs: [
        {
          question: "What types of data can DataSafeguard detect?",
          answer: "Our AI models can detect and classify all types of PII including names, addresses, phone numbers, email addresses, social security numbers, credit card numbers, medical records, and custom data types specific to your organization."
        },
        {
          question: "How accurate is the detection?",
          answer: "DataSafeguard achieves industry-leading 94.5% accuracy in PII detection and classification. Our models are continuously trained and improved to maintain high accuracy across diverse data formats and languages."
        },
        {
          question: "Can DataSafeguard handle real-time processing?",
          answer: "Yes! Our HPC-powered data accelerator enables real-time processing of over 10 million records per hour, making it suitable for high-volume enterprise environments."
        },
        {
          question: "What deployment options are available?",
          answer: "We offer flexible deployment options: On-Premises (full control in your data center), Cloud (AWS, Azure, GCP), and Hybrid (best of both worlds). Choose what works best for your security and compliance requirements."
        },
      ]
    },
    {
      category: "Privacy & Compliance",
      icon: "🔒",
      faqs: [
        {
          question: "Is DataSafeguard compliant with regulations?",
          answer: "Yes, DataSafeguard is SOC 2 Type II certified and helps organizations comply with GDPR, HIPAA, CCPA, and other major data privacy regulations through automated policy enforcement and comprehensive audit trails."
        },
        {
          question: "How is my data protected?",
          answer: "We use enterprise-grade encryption (AES-256), zero-trust architecture, and never claim rights to your data. Your data never leaves your infrastructure, and we don't use third-party services for processing."
        },
        {
          question: "What about data sovereignty?",
          answer: "With our on-premises and hybrid deployment options, your data stays exactly where you want it. We support data residency requirements for all major jurisdictions."
        },
      ]
    },
    {
      category: "Implementation & Support",
      icon: "🚀",
      faqs: [
        {
          question: "How long does implementation take?",
          answer: "Most implementations are completed within 48 hours. Our team works closely with you to ensure smooth deployment with minimal disruption to your operations."
        },
        {
          question: "What kind of support do you provide?",
          answer: "We offer 24/7 enterprise support with dedicated account managers, technical support teams, and emergency response capabilities. Our average response time is under 1 hour."
        },
        {
          question: "Do you provide training?",
          answer: "Yes, we provide comprehensive training for your team including onboarding sessions, documentation, video tutorials, and ongoing support to ensure successful adoption."
        },
        {
          question: "Can I customize the solution?",
          answer: "Absolutely! Our platform supports custom data types, custom rules, and configurable policies through an intuitive UI. We also offer API access for advanced integrations."
        },
      ]
    },
    {
      category: "Pricing & Plans",
      icon: "💰",
      faqs: [
        {
          question: "How is DataSafeguard priced?",
          answer: "We offer flexible enterprise pricing based on your data volume, deployment type, and specific requirements. Contact our sales team for a customized quote tailored to your needs."
        },
        {
          question: "Is there a free trial?",
          answer: "We offer a comprehensive demo and proof-of-concept engagement to help you evaluate our solution with your actual data. Contact us to schedule your personalized demo."
        },
        {
          question: "What's included in the pricing?",
          answer: "Our pricing includes the platform license, implementation support, training, 24/7 technical support, regular updates, and access to new features as they're released."
        },
      ]
    },
  ];

  // Flatten all FAQs for schema
  const allFAQs = faqCategories.flatMap(category => category.faqs);

  return (
    <div className="min-h-screen">
      <FAQSchema faqs={allFAQs} />
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
              <span className="mr-2">❓</span>
              Frequently Asked Questions
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              How Can We{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Help You?
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Find answers to common questions about DataSafeguard’s products, services, and capabilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <motion.div
                        key={faqIndex}
                        className="bg-card border border-border rounded-xl overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: faqIndex * 0.05 }}
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                        >
                          <span className="font-semibold text-lg pr-4">{faq.question}</span>
                          <motion.svg
                            className="w-6 h-6 flex-shrink-0 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team is here to help. Get in touch with us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Contact Support
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold hover:border-primary transition-colors"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
