"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Web Vitals monitoring
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        
        // Log to analytics (replace with your analytics service)
        console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime);
        
        // Send to analytics
        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            event_category: "Web Vitals",
            event_label: "LCP",
            value: Math.round(lastEntry.renderTime || lastEntry.loadTime),
            non_interaction: true,
          });
        }
      });

      try {
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
      } catch (e) {
        // LCP not supported
      }

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          console.log("FID:", entry.processingStart - entry.startTime);
          
          if (window.gtag) {
            window.gtag("event", "web_vitals", {
              event_category: "Web Vitals",
              event_label: "FID",
              value: Math.round(entry.processingStart - entry.startTime),
              non_interaction: true,
            });
          }
        });
      });

      try {
        fidObserver.observe({ type: "first-input", buffered: true });
      } catch (e) {
        // FID not supported
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        console.log("CLS:", clsValue);
        
        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            event_category: "Web Vitals",
            event_label: "CLS",
            value: Math.round(clsValue * 1000),
            non_interaction: true,
          });
        }
      });

      try {
        clsObserver.observe({ type: "layout-shift", buffered: true });
      } catch (e) {
        // CLS not supported
      }

      // Cleanup
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
