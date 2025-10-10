"use client";

import { motion } from "framer-motion";

export default function DataSafeguardersPage() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Chief Security Officer",
      expertise: "Cybersecurity Strategy & Risk Management",
      image: "AR"
    },
    {
      name: "Priya Sharma",
      role: "Privacy Engineering Lead",
      expertise: "Data Protection & GDPR Compliance",
      image: "PS"
    },
    {
      name: "Mateo Chen",
      role: "Security Architect",
      expertise: "Infrastructure Security & Zero Trust",
      image: "MC"
    },
    {
      name: "Jordan Kim",
      role: "Compliance Manager",
      expertise: "Regulatory Compliance & Auditing",
      image: "JK"
    },
    {
      name: "Chen Wei",
      role: "Threat Intelligence Analyst",
      expertise: "Threat Detection & Incident Response",
      image: "CW"
    },
    {
      name: "Ava Thompson",
      role: "Security Training Specialist",
      expertise: "Security Awareness & Education",
      image: "AT"
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
          Data Safeguarders
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Meet the dedicated experts behind our comprehensive data protection and compliance solutions. 
          Our team combines decades of experience in cybersecurity, privacy engineering, and regulatory compliance.
        </motion.p>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="card group hover:shadow-glow-primary transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Avatar */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-lg">{member.image}</span>
                </div>
              </div>
              
              {/* Member Info */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.expertise}
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <button className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
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
            Join Our Security Team
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented security professionals to join our mission of protecting data worldwide.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
            View Open Positions
          </button>
        </motion.div>
      </section>
    </div>
  );
}