"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedShieldLogo from "./AnimatedShieldLogo";

export default function EnhancedHero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-900" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const left = (i * 37) % 100;
            const top = (i * 53) % 100;
            const duration = 3 + (i % 5) * 0.4;
            const delay = (i % 10) * 0.2;

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                }}
              />
            );
          })}
        </div>

        {/* Floating Geometric Shapes */}
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

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
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
                className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  🔒
                </motion.span>
                AI-Powered Data Privacy Platform
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Secure Your Data with{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                    AI-Powered Privacy
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/50"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>
              </motion.h1>

              {/* Subtitle with Typing Effect */}
              <motion.p
                className="text-xl text-gray-100 leading-relaxed max-w-lg drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Enterprise-grade data protection powered by advanced AI.
                Real-time threat detection, automated compliance, and
                <span className="text-cyan-300 font-bold"> 99.9% uptime guarantee</span>.
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {["SOC 2 Certified", "GDPR Compliant", "24/7 Monitoring", "Zero Trust"].map((feature, i) => (
                  <motion.div
                    key={feature}
                    className="px-4 py-2 bg-white/10 border border-white/30 rounded-full text-sm backdrop-blur-sm text-white font-medium shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.8)", backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                  >
                    ✓ {feature}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact-us"
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white overflow-hidden"
                  >
                    <span className="relative z-10">Request Demo</span>
                    <motion.svg
                      className="relative z-10 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/product-offering"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-primary text-white rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                  >
                    Explore Platform
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex items-center gap-8 pt-4 border-t border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-slate-900 shadow-lg"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-white">500+ Enterprises</div>
                    <div className="text-gray-300 text-xs">Trust our platform</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐
                  </motion.div>
                  <div className="text-sm">
                    <div className="font-bold text-white">4.9/5 Rating</div>
                    <div className="text-gray-300 text-xs">From 1000+ reviews</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Animated Shield Logo */}
            <motion.div
              className="relative h-[600px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <AnimatedShieldLogo />

              {/* Floating Info Cards */}
              <motion.div
                className="absolute top-10 -left-4 bg-green-500/90 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-green-400/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4.5 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-3 h-3 bg-green-300 rounded-full"
                  />
                  <div>
                    <div className="text-white text-sm font-bold">Threats Blocked</div>
                    <div className="text-white/90 text-xs">1.2M+ Today</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-32 -right-4 bg-blue-500/90 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-blue-400/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="text-white text-sm font-bold">AI Detection</div>
                <div className="text-white/90 text-xs">99.9% Accuracy</div>
                <div className="mt-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-8 bg-white/30 rounded-full"
                      animate={{ height: [8, 24, 8] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 -left-4 bg-purple-500/90 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-purple-400/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 5.5 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="text-white text-sm font-bold">Compliance Score</div>
                <div className="text-white/90 text-2xl font-bold">100%</div>
                <div className="text-white/70 text-xs">All checks passed ✓</div>
              </motion.div>

              <motion.div
                className="absolute bottom-32 -right-4 bg-orange-500/90 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-orange-400/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 6 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="text-white text-sm font-bold">Response Time</div>
                <div className="text-white/90 text-2xl font-bold">&lt; 1min</div>
                <div className="text-white/70 text-xs">Average detection</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
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
  );
}
