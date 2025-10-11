"use client";

import { notFound } from "next/navigation";
import BlogPost from "@/components/BlogPost";

// This would normally come from a CMS or database
type Author = { name: string; role: string };
type BlogPostMeta = {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    author: Author;
};

const blogPosts: Record<string, BlogPostMeta> = {
    "complete-guide-gdpr-compliance-2024": {
        title: "Complete Guide to GDPR Compliance in 2024",
        excerpt: "Everything you need to know about GDPR compliance, from data mapping to subject rights management. A comprehensive guide for enterprises.",
        category: "Compliance",
        date: "October 8, 2025",
        readTime: "12 min read",
        author: {
            name: "Sarah Chen",
            role: "Privacy Compliance Expert"
        }
    },
    "ai-governance-best-practices": {
        title: "AI Governance Best Practices for Enterprise",
        excerpt: "Learn how to implement effective AI governance frameworks to ensure responsible AI deployment and compliance.",
        category: "AI Governance",
        date: "October 5, 2025",
        readTime: "8 min read",
        author: {
            name: "Michael Rodriguez",
            role: "AI Governance Lead"
        }
    },
    "data-mapping-discovery-guide": {
        title: "Data Mapping and Discovery: A Practical Guide",
        excerpt: "Step-by-step guide to discovering, mapping, and classifying sensitive data across your organization.",
        category: "Data Privacy",
        date: "October 1, 2025",
        readTime: "10 min read",
        author: {
            name: "Emily Watson",
            role: "Data Privacy Architect"
        }
    }
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug];

    if (!post) {
        notFound();
    }

    return (
        <BlogPost
            title={post.title}
            excerpt={post.excerpt}
            category={post.category}
            date={post.date}
            readTime={post.readTime}
            author={post.author}
        >
            <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                    This is a placeholder for the full blog post content. In a production environment,
                    this content would be fetched from a CMS, database, or markdown files.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Introduction</h2>
                <p className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Key Points</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Important point number one about the topic</li>
                    <li>Critical consideration for implementation</li>
                    <li>Best practice recommendation</li>
                    <li>Common pitfall to avoid</li>
                </ul>

                <h2 className="text-3xl font-bold mt-8 mb-4">Implementation Steps</h2>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>First step in the process</li>
                    <li>Second step with detailed explanation</li>
                    <li>Third step for successful implementation</li>
                    <li>Final step and verification</li>
                </ol>

                <h2 className="text-3xl font-bold mt-8 mb-4">Conclusion</h2>
                <p className="leading-relaxed">
                    In conclusion, following these guidelines will help you achieve your goals.
                    Remember to stay consistent and monitor your progress regularly.
                </p>

                <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                    <p className="font-semibold mb-2">💡 Pro Tip:</p>
                    <p className="text-muted-foreground">
                        This is where you would add helpful tips, warnings, or additional context
                        to enhance the reader’s understanding.
                    </p>
                </div>
            </div>
        </BlogPost>
    );
}
