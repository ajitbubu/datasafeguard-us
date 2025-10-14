"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import EnhancedHero from "@/components/EnhancedHero";
import { useConsent } from "@/components/ConsentProvider";
import { setCookie } from "@/lib/cookies";

// Analytics Loader Component
function AnalyticsLoader() {
    useEffect(() => {
        // Set analytics cookie automatically
        setCookie("ds_analytics", "1", 30);

        // Initialize your analytics (Google Analytics / Consent Mode, etc.)
        // Example: window.gtag?.("config", "G-XXXXXXX");
        console.log("Analytics initialized");
    }, []);

    return null;
}

export default function HomeClient() {
    const features = [
        {
            title: "Privacy Compliance Automation",
            desc: "Automate GDPR, CCPA, HIPAA, and PDPA compliance with AI-powered data discovery, classification, and policy enforcement.",
            icon: "shield",
            link: "/storefront#compliance",
        },
        {
            title: "AI Governance & Privacy",
            desc: "Protect AI models and training data with real-time monitoring, bias detection, and generative AI privacy controls.",
            icon: "lock",
            link: "/storefront#ai-governance",
        },
        {
            title: "Data Discovery & Classification",
            desc: "Automatically discover and classify sensitive data across cloud, hybrid, and on-premises environments with 94.5% accuracy.",
            icon: "refresh",
            link: "/product-offering",
        },
    ];

    const stats = [
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "24/7", label: "Privacy Monitoring" },
        { value: "< 1min", label: "Incident Response" },
        { value: "SOC 2", label: "Type II Certified" },
    ];

    return (
        <div className="min-h-screen">
            {/* Analytics Loader */}
            <AnalyticsLoader />

            {/* Enhanced Hero Section with Animated Shield Logo */}
            <EnhancedHero />

            {/* Trusted By Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
                            Trusted by Industry Leaders
                        </p>
                        <h2 className="text-2xl font-bold">
                            Protecting Data for 500+ Enterprises Worldwide
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div
                                    className="text-sm text-muted-foreground"
                                    suppressHydrationWarning
                                >
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Solutions Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Data Privacy & Protection{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Solutions
                            </span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Comprehensive data privacy management and AI governance solutions
                            built for enterprise compliance
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                                }}
                            >
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                                        <svg
                                            className="w-8 h-8 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            {feature.icon === "shield" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                />
                                            )}
                                            {feature.icon === "lock" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                />
                                            )}
                                            {feature.icon === "refresh" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                />
                                            )}
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {feature.desc}
                                </p>
                                <Link
                                    href={feature.link}
                                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                                >
                                    Learn More
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Why Choose{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                DataSafeguard
                            </span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Industry-leading AI-powered data privacy platform trusted by 500+
                            enterprises worldwide
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                iconPath:
                                    "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                title: "AI-Powered PII Detection",
                                description:
                                    "94.5% accuracy with custom ML models for sensitive data classification",
                                metric: "94.5%",
                            },
                            {
                                iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
                                title: "High-Performance Processing",
                                description:
                                    "Process 10M+ records per hour with HPC-powered data accelerator",
                                metric: "10M+",
                            },
                            {
                                iconPath:
                                    "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                title: "Data Sovereignty & Privacy",
                                description:
                                    "On-premises, cloud, or hybrid deployment - your data stays secure",
                                metric: "100%",
                            },
                            {
                                iconPath:
                                    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                title: "Multi-Regulation Compliance",
                                description: "GDPR, HIPAA, CCPA, PDPA - SOC 2 Type II certified",
                                metric: "SOC 2",
                            },
                        ].map((benefit, i) => (
                            <motion.div
                                key={benefit.title}
                                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="mb-4 flex justify-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <svg
                                            className="w-8 h-8 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d={benefit.iconPath}
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {benefit.metric}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <motion.h2
                                className="text-3xl sm:text-4xl font-bold mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Complete Data Privacy Management Platform
                            </motion.h2>
                            <motion.p
                                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Everything you need for enterprise data privacy, AI governance,
                                and regulatory compliance
                            </motion.p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Data Discovery & Classification",
                                    description:
                                        "Automatically discover, classify, and tag sensitive data including PII, PHI, and financial information across all data sources.",
                                    link: "/product-offering",
                                    linkText: "Learn about data discovery",
                                },
                                {
                                    title: "Consent & Preference Management",
                                    description:
                                        "Manage user consent, preferences, and opt-outs with automated cookie consent banners and preference centers.",
                                    link: "/storefront",
                                    linkText: "Explore consent management",
                                },
                                {
                                    title: "Data Subject Rights (DSAR)",
                                    description:
                                        "Automate data subject access requests, right to erasure, and data portability with built-in workflows.",
                                    link: "/faqs",
                                    linkText: "DSAR automation FAQ",
                                },
                                {
                                    title: "Privacy Impact Assessments",
                                    description:
                                        "Conduct and document DPIAs with guided templates and automated risk scoring for new projects.",
                                    link: "/blog",
                                    linkText: "Read privacy guides",
                                },
                                {
                                    title: "Data Breach Management",
                                    description:
                                        "72-hour breach notification workflows, incident tracking, and automated regulatory reporting.",
                                    link: "/contact-us",
                                    linkText: "Get breach response plan",
                                },
                                {
                                    title: "Vendor Risk Management",
                                    description:
                                        "Assess third-party vendors, track data processing agreements, and monitor compliance continuously.",
                                    link: "/about",
                                    linkText: "Learn about our approach",
                                },
                            ].map((feature, i) => (
                                <motion.div
                                    key={feature.title}
                                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground mb-4">
                                        {feature.description}
                                    </p>
                                    <Link
                                        href={feature.link}
                                        className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                                    >
                                        {feature.linkText}
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            How Our Data Privacy Platform{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Works
                            </span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Automated data privacy compliance in three simple steps - deploy,
                            detect, and protect
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                step: "01",
                                title: "Deploy Privacy Platform",
                                description:
                                    "Quick deployment in your environment - on-premises, cloud, or hybrid. Implementation in 48 hours with zero data sharing.",
                                icon: "🚀",
                            },
                            {
                                step: "02",
                                title: "Discover & Classify Data",
                                description:
                                    "AI-powered data discovery automatically identifies and classifies PII, PHI, and sensitive data across all systems with 94.5% accuracy.",
                                icon: "🔍",
                            },
                            {
                                step: "03",
                                title: "Automate Compliance",
                                description:
                                    "Automated data protection, policy enforcement, and compliance reporting for GDPR, CCPA, HIPAA with real-time monitoring.",
                                icon: "🛡️",
                            },
                        ].map((step, i) => (
                            <motion.div
                                key={step.step}
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white font-bold text-xl mb-4 shadow-lg">
                                        {step.step}
                                    </div>
                                    <div className="text-4xl mb-4">{step.icon}</div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                                {i < 2 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-cta">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Ready to Automate Your Data Privacy Compliance?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Join 500+ enterprises that trust DataSafeguard for AI-powered data
                        privacy management, automated compliance, and enterprise-grade
                        protection.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link href="/contact-us" className="btn-primary">
                            Schedule a Demo
                        </Link>
                        <Link
                            href="/storefront"
                            className="btn-secondary border-white text-white hover:bg-white/10"
                        >
                            Explore Solutions
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
