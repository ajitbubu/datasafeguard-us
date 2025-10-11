"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface BlogPostProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  children: ReactNode;
}

export default function BlogPost({
  title,
  excerpt,
  category,
  date,
  readTime,
  author,
  children,
}: BlogPostProps) {
  return (
    <div className="min-h-screen bg-background">
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link 
                href="/blog"
                className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </motion.div>

            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {category}
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {excerpt}
            </motion.p>

            <motion.div
              className="flex items-center gap-6 text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
                  {author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-white">{author.name}</div>
                  <div className="text-sm text-slate-400">{author.role}</div>
                </div>
              </div>
              <div className="h-8 w-px bg-slate-600" />
              <div className="text-sm">
                <div>{date}</div>
                <div className="text-slate-400">{readTime}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              {children}
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Ready to Automate Your Compliance?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                See how DataSafeguard can help your organization achieve and maintain compliance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="btn-primary">
                  Schedule a Demo
                </Link>
                <Link href="/storefront" className="btn-secondary">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ai-governance-best-practices">
                <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                    AI Governance
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    AI Governance Best Practices
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Learn how to implement effective AI governance frameworks
                  </p>
                </div>
              </Link>
              <Link href="/blog/data-mapping-discovery-guide">
                <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                    Data Privacy
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    Data Mapping & Discovery Guide
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Step-by-step guide to discovering and classifying sensitive data
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
