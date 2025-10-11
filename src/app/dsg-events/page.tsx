"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Data Privacy Summit 2025",
      date: "March 15-17, 2025",
      location: "San Francisco, CA",
      type: "Conference",
      description: "Join us at the premier data privacy conference featuring keynotes, workshops, and networking opportunities.",
      status: "upcoming"
    },
    {
      title: "AI & Security Webinar Series",
      date: "Every Thursday",
      location: "Online",
      type: "Webinar",
      description: "Monthly webinar series covering the latest in AI-powered security and data protection strategies.",
      status: "recurring"
    },
  ];

  const pastEvents = [
    {
      title: "DataSafeguard Annual Summit 2024",
      date: "November 10, 2024",
      location: "New York, NY",
      attendees: "500+",
      description: "Our flagship annual event brought together industry leaders to discuss the future of data privacy."
    },
    {
      title: "GDPR Compliance Workshop",
      date: "September 22, 2024",
      location: "London, UK",
      attendees: "200+",
      description: "Hands-on workshop helping organizations navigate GDPR compliance requirements."
    },
    {
      title: "Cybersecurity Innovation Forum",
      date: "July 18, 2024",
      location: "Singapore",
      attendees: "300+",
      description: "Showcased cutting-edge cybersecurity innovations and best practices."
    },
  ];

  return (
    <div className="min-h-screen">
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
              <span className="mr-2">📅</span>
              Events & Webinars
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              DataSafeguard{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Events
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Join us at conferences, webinars, and workshops to learn about the latest in data privacy and security.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Don’t miss these exciting opportunities to connect and learn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-500/10 text-green-600 text-xs font-semibold rounded-full border border-green-500/20">
                    {event.status === "upcoming" ? "Upcoming" : "Recurring"}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-600 text-xs font-semibold rounded-full border border-blue-500/20">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{event.description}</p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Register Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Past <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Highlights from our previous events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.title}
                className="bg-card border border-border rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-primary font-bold text-sm mb-2">{event.date}</div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                <div className="text-sm font-semibold text-green-600 mb-3">
                  {event.attendees} Attendees
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Host an Event with Us?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Partner with DataSafeguard to bring data privacy education to your community
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
