import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import GoogleAnalytics from "../components/GoogleAnalytics";
import StructuredData from "../components/StructuredData";
import PerformanceMonitor from "../components/PerformanceMonitor";
import ScrollToTop from "../components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DataSafeguard.us | AI Data Privacy & Governance Platform",
  description: "DataSafeguard.us helps enterprises automate data privacy, AI governance, and compliance across cloud and hybrid environments. Ensure PDPA, GDPR, and AI privacy compliance with one platform.",
  keywords: "AI data security, data privacy automation, AI governance platform, data protection and compliance, data governance software, data security posture management, consent and preference management, generative AI privacy protection, PDPA compliance Singapore, data privacy platform Singapore, data protection and privacy software, hybrid cloud data privacy, privacy automation tool, AI data protection enterprise, GDPR and PDPA compliance, real-time policy enforcement AI, prevent data leakage AI models, secure ML pipeline, enterprise AI governance Singapore, data breach compliance Singapore",
  authors: [{ name: "DataSafeguard Team" }],
  robots: "index, follow",
  openGraph: {
    title: "DataSafeguard.us | Data Privacy & AI Governance Platform",
    description: "Automate data protection, AI governance, and privacy compliance across hybrid cloud environments. Trusted by enterprises for PDPA and GDPR compliance.",
    url: "https://datasafeguard.us",
    siteName: "DataSafeguard.us",
    type: "website",
    images: [
      {
        url: "https://datasafeguard.ai/assets/og-banner.png",
        width: 1200,
        height: 630,
        alt: "DataSafeguard.us - AI Data Privacy & Governance Platform",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
        />
        <link
          href="https://cdn.prod.website-files.com/646e363f9c29e4860c52c82e/646e363f9c29e4860c52c89d_logo32.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground min-h-screen flex flex-col transition-colors duration-300`}>
        <GoogleAnalytics />
        <StructuredData />
        <PerformanceMonitor />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
