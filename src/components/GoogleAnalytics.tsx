"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  // Only load Google Analytics in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZG5SVXXFM3"
        strategy="afterInteractive"
        async
        onError={(e) => {
          console.warn('Google Analytics failed to load:', e);
        }}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Add error handling for gtag config
          try {
            gtag('config', 'G-ZG5SVXXFM3', {
              // Handle blocked requests gracefully
              transport_type: 'beacon'
            });
          } catch (error) {
            console.warn('Google Analytics configuration failed:', error);
          }
        `}
      </Script>
    </>
  );
}