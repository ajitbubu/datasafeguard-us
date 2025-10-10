"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function ContactUsPage() {
  // Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const firstInvalidRef = useRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null>(null);
  const socialLinks = [
    { href: "https://www.facebook.com/DataSafeguard2021", label: "Facebook", icon: "facebook" },
    { href: "https://www.linkedin.com/company/datasafeguardinc/posts/?feedView=all", label: "LinkedIn", icon: "linkedin" },
    { href: "https://www.youtube.com/@DataSafeguard", label: "YouTube", icon: "youtube" },
    { href: "https://x.com/Data_Safeguard", label: "Twitter/X", icon: "twitter" },
  ];

  function validateField(name: string, value: string) {
    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) return "This field is required.";
        if (value.trim().length < 2) return "Must be at least 2 characters.";
        return "";
      case "email": {
        if (!value.trim()) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return "Enter a valid email address.";
        return "";
      }
      case "company":
        if (!value.trim()) return "Company is required.";
        return "";
      case "subject":
        if (!value.trim()) return "Please select a subject.";
        return "";
      case "message":
        if (!value.trim()) return "Message is required.";
        if (value.trim().length < 20) return "Provide at least 20 characters for context.";
        return "";
      default:
        return "";
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types if valid
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors: { [k: string]: string } = {};
    (Object.keys(form) as Array<keyof typeof form>).forEach((key) => {
      const err = validateField(key, String(form[key]));
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus the first invalid field for accessibility
      const firstInvalidKey = Object.keys(newErrors)[0];
      const el = document.querySelector(
        `[name="${firstInvalidKey}"]`
      ) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
      firstInvalidRef.current = el;
      el?.focus();
      return;
    }

    // Valid submission placeholder
    alert("Thanks! Your message looks good. We’ll get back to you.");
  }
  const contactInfo = [
    {
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      label: "Email",
      value: "contact@datasafeguard.ai",
      description: "Get in touch with our expert team"
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      label: "Phone",
      value: "+91 674 123 4567",
      description: "Available during business hours"
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      label: "Headquarters",
      value: "R&D Center, 2nd Floor, 42, Sachivalaya Marg, Bhubaneswar, Odisha 751001, India",
      description: "Visit our main R&D facility"
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
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We&apos;re here to help with your data protection needs. Reach out to our expert team 
          for security consultations, support, or partnership opportunities.
        </motion.p>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={info.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{info.label}</h3>
                    <p className="text-primary font-medium mb-2">{info.value}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-3 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label={s.label}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {s.icon === "facebook" && (
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      )}
                      {s.icon === "linkedin" && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      )}
                      {s.icon === "twitter" && (
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      )}
                      {s.icon === "youtube" && (
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      )}
                    </svg>
                    <span className="ml-2">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Other Locations */}
            <motion.div
              className="mt-12 p-6 bg-muted rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="font-semibold text-lg mb-4">Other Locations</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-primary">Canada:</span>
                  <span className="text-muted-foreground ml-2">Edmonton</span>
                </div>
                <div>
                  <span className="font-medium text-primary">India:</span>
                  <span className="text-muted-foreground ml-2">Bangalore, Mumbai, Pune, New Delhi</span>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              className="mt-8 p-6 bg-muted rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-muted-foreground">10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Emergency Support Only</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            <form className="space-y-6" noValidate onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.firstName) || undefined}
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${errors.firstName ? "border-red-500" : "border-border"}`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-2 text-sm text-red-600" role="alert">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.lastName) || undefined}
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${errors.lastName ? "border-red-500" : "border-border"}`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="mt-2 text-sm text-red-600" role="alert">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.email) || undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${errors.email ? "border-red-500" : "border-border"}`}
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input 
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.company) || undefined}
                  aria-describedby={errors.company ? "company-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${errors.company ? "border-red-500" : "border-border"}`}
                  placeholder="Your Company"
                />
                {errors.company && (
                  <p id="company-error" className="mt-2 text-sm text-red-600" role="alert">{errors.company}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.subject) || undefined}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${errors.subject ? "border-red-500" : "border-border"}`}
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Security Consultation">Security Consultation</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Compliance Question">Compliance Question</option>
                </select>
                {errors.subject && (
                  <p id="subject-error" className="mt-2 text-sm text-red-600" role="alert">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.message) || undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${errors.message ? "border-red-500" : "border-border"}`}
                  placeholder="Tell us about your data security needs..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-600" role="alert">{errors.message}</p>
                )}
              </div>
              
              <button 
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Find Us</h2>
          <p className="text-muted-foreground text-lg">
            Visit our headquarters in Bhubaneswar, Odisha
          </p>
        </motion.div>
        
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b56fe1!2sSachivalaya%20Marg%2C%20Bhubaneswar%2C%20Odisha%20751001%2C%20India!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </section>

      {/* Emergency Contact */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          className="bg-gradient-cta rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Security Emergency?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            For urgent security incidents or data breaches, contact our emergency response team immediately.
          </p>
          <button className="btn-cta">
            Emergency Support: +91 674 911 SAFE
          </button>
        </motion.div>
      </section>
    </div>
  );
}