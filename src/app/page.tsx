"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      title: "Compliance & Governance",
      desc: "Meet regulatory requirements with automated controls and comprehensive audit trails.",
      icon: "shield",
    },
    {
      title: "Data Protection",
      desc: "Advanced encryption and monitoring across cloud, hybrid, and on-premises environments.",
      icon: "lock",
    },
    {
      title: "Resilience & Recovery",
      desc: "Rapid incident response and business continuity with proven recovery playbooks.",
      icon: "refresh",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Security Monitoring" },
    { value: "< 1min", label: "Incident Response" },
    { value: "SOC 2", label: "Type II Certified" },
  ];

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden min-h-screen">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800" />
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[
              { left: 10, top: 20, duration: 4, delay: 0.5 },
              { left: 25, top: 60, duration: 3.5, delay: 1 },
              { left: 40, top: 15, duration: 4.5, delay: 0.2 },
              { left: 55, top: 80, duration: 3, delay: 1.5 },
              { left: 70, top: 35, duration: 4.2, delay: 0.8 },
              { left: 85, top: 70, duration: 3.8, delay: 0.3 },
              { left: 15, top: 90, duration: 3.2, delay: 1.2 },
              { left: 30, top: 45, duration: 4.8, delay: 0.7 },
              { left: 60, top: 25, duration: 3.6, delay: 1.8 },
              { left: 80, top: 55, duration: 4.1, delay: 0.4 },
              { left: 5, top: 75, duration: 3.9, delay: 1.1 },
              { left: 45, top: 10, duration: 3.3, delay: 0.9 },
              { left: 75, top: 85, duration: 4.6, delay: 0.6 },
              { left: 20, top: 40, duration: 3.7, delay: 1.4 },
              { left: 90, top: 30, duration: 4.3, delay: 0.1 },
              { left: 35, top: 65, duration: 3.1, delay: 1.6 },
              { left: 65, top: 5, duration: 4.7, delay: 0.8 },
              { left: 50, top: 95, duration: 3.4, delay: 1.3 },
              { left: 95, top: 50, duration: 4.4, delay: 0.5 },
              { left: 12, top: 82, duration: 3.8, delay: 1.7 }
            ].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>

          {/* Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-40 left-20 w-24 h-24 border border-secondary/20 rotate-45"
              animate={{ rotate: [45, 405] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Content */}
              <motion.div
                className="text-white space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  🚀 Next-Gen Data Protection
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Secure Your{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Digital Future
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-xl text-gray-300 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  AI-powered data protection with enterprise-grade security, 
                  compliance automation, and real-time threat detection.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/contact-us" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                      Start Free Trial
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/product-offering" className="border border-white/30 hover:border-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm">
                      Watch Demo
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  className="flex items-center gap-6 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="text-sm text-gray-400">Trusted by</div>
                  <div className="flex items-center gap-4 text-gray-500">
                    <span className="font-semibold">500+</span>
                    <span>enterprises</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Interactive Dashboard Preview */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Main Dashboard Card */}
                <motion.div
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-semibold text-lg">Security Dashboard</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Live</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/5 rounded-lg p-4 border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Activity Chart Simulation */}
                  <div className="space-y-3">
                    <div className="text-white text-sm font-medium">Threat Detection Activity</div>
                    <div className="flex items-end gap-1 h-16">
                      {[45, 65, 30, 80, 55, 70, 40, 85, 60, 75, 50, 90].map((height, i) => (
                        <motion.div
                          key={i}
                          className="bg-gradient-to-t from-primary to-secondary rounded-sm flex-1"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Feature Cards */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-primary/90 backdrop-blur-sm rounded-lg p-4 border border-primary/20 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-white text-sm font-medium">AI Detection</div>
                  <div className="text-white/80 text-xs">99.9% Accuracy</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-secondary/90 backdrop-blur-sm rounded-lg p-4 border border-secondary/20 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-white text-sm font-medium">Compliance</div>
                  <div className="text-white/80 text-xs">SOC 2 Certified</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-white/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Original content continues below */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Safeguard Your Data,{" "}
              <span className="text-primary">Confidently</span> and{" "}
              <span className="text-secondary">Compliantly</span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Enterprise-grade data protection, privacy compliance, and security resilience 
              across your entire digital infrastructure.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <Link href="/storefront" className="btn-primary text-lg px-8 py-4">
                Explore Solutions
              </Link>
              <Link href="/contact-us" className="btn-secondary text-lg px-8 py-4">
                Schedule Demo
              </Link>
            </motion.div>
          </div>
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
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Comprehensive Data Security Solutions
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Protect, monitor, and govern your data with industry-leading security 
              technologies and expert guidance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="card group hover:shadow-glow-primary transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon === "shield" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      )}
                      {feature.icon === "lock" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      )}
                      {feature.icon === "refresh" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      )}
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
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
            Ready to Secure Your Data?
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of organizations that trust DataSafeguard to protect 
            their most valuable digital assets.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact-us" className="btn-primary">
              Start Free Assessment
            </Link>
            <Link href="/data-safeguarders" className="btn-secondary border-white text-white hover:bg-white/10">
              Meet Our Experts
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
