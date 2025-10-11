"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const companyDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(event.target as Node)) {
        setCompanyDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { href: "/storefront", label: "Solutions" },
    { href: "/product-offering", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/team", label: "Team" },
  ];

  const companyLinks = [
    { href: "/about", label: "About" },
    { href: "/faqs", label: "FAQs" },
    { href: "/dsg-events", label: "Events" },
    { href: "/awards", label: "Awards" },
  ];

  // Prevent hydration mismatch by using default values until mounted
  const logoSrc = mounted && resolvedTheme === 'dark' ? '/brand-logo-white.svg' : '/brand-logo.svg';
  const headerBgClass = mounted && resolvedTheme === 'dark' ? 'bg-black/95' : 'bg-background/95';
  const textColorClass = mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-black';
  const mobileMenuBgClass = mounted && resolvedTheme === 'dark' ? 'bg-black/95' : 'bg-background/95';

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b border-border shadow-sm ${headerBgClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center group-hover:scale-105 transition-transform duration-200">
              <Image
                src={logoSrc}
                alt="DataSafeguard Logo"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium hover:text-primary transition-colors duration-200 relative group ${textColorClass}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Company Dropdown */}
            <div className="relative" ref={companyDropdownRef}>
              <button
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                onMouseEnter={() => setCompanyDropdownOpen(true)}
                className={`text-sm font-medium hover:text-primary transition-colors duration-200 relative group flex items-center gap-1 ${textColorClass}`}
              >
                Company
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: companyDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </button>

              <AnimatePresence>
                {companyDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setCompanyDropdownOpen(false)}
                    className="absolute top-full mt-2 w-56 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-50"
                  >
                    {companyLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setCompanyDropdownOpen(false)}
                          className="flex items-center px-4 py-3 hover:bg-muted transition-colors duration-200 group"
                        >
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact-us"
              className={`text-sm font-medium hover:text-primary transition-colors duration-200 relative group ${textColorClass}`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Theme Toggle (always visible) + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 rounded-lg hover:text-primary hover:bg-muted transition-colors duration-200 ${textColorClass}`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className={`lg:hidden border-t border-border backdrop-blur-md ${mobileMenuBgClass}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200 ${textColorClass}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Company Dropdown */}
              <div>
                <button
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className={`flex items-center justify-between w-full px-3 py-2 text-base font-medium hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200 ${textColorClass}`}
                >
                  <span>Company</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: mobileCompanyOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {mobileCompanyOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 space-y-1 mt-1">
                        {companyLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center px-3 py-2 text-sm font-medium hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200 ${textColorClass}`}
                            onClick={() => {
                              setOpen(false);
                              setMobileCompanyOpen(false);
                            }}
                          >
                            <span>{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact-us"
                className={`block px-3 py-2 text-base font-medium hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200 ${textColorClass}`}
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}