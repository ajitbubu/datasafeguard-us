import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialUrl = process.env.NEXT_PUBLIC_SOCIAL_URL || "https://linkedin.com/company/datasafeguard";
  
  const footerLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/security", label: "Security" },
    { href: "/compliance", label: "Compliance" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/DataSafeguard2021", label: "Facebook", icon: "facebook" },
    { href: "https://www.linkedin.com/company/datasafeguardinc/posts/?feedView=all", label: "LinkedIn", icon: "linkedin" },
    { href: "https://www.youtube.com/@DataSafeguard", label: "YouTube", icon: "youtube" },
    { href: "https://x.com/Data_Safeguard", label: "Twitter/X", icon: "twitter" },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/brand-logo.svg" 
                alt="DataSafeguard Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Enterprise-grade data protection solutions ensuring compliance, security, and peace of mind for your organization.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === "facebook" && (
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    )}
                    {social.icon === "linkedin" && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    )}
                    {social.icon === "twitter" && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    )}
                    {social.icon === "youtube" && (
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    )}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/storefront" className="text-muted-foreground hover:text-primary transition-colors duration-200">Data Protection</Link></li>
              <li><Link href="/product-offering" className="text-muted-foreground hover:text-primary transition-colors duration-200">Compliance Tools</Link></li>
              <li><Link href="/data-safeguarders" className="text-muted-foreground hover:text-primary transition-colors duration-200">Expert Team</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DataSafeguard. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Enterprise data security and compliance solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}