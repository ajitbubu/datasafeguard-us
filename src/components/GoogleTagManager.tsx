"use client";

import Script from "next/script";

export default function GoogleTagManager() {
  // Your GTM Container ID
  const GTM_ID = "GTM-WWSJ2XF9";

  // GTM will load in all environments (production and development)
  // If you want to restrict to production only, uncomment the lines below:
  // if (process.env.NODE_ENV !== "production") {
  //   return null;
  // }

  return (
    <>
      {/* Google Tag Manager Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}

// GTM NoScript component for <body>
export function GoogleTagManagerNoScript() {
  const GTM_ID = "GTM-WWSJ2XF9";

  // GTM NoScript will load in all environments
  // If you want to restrict to production only, uncomment the lines below:
  // if (process.env.NODE_ENV !== "production") {
  //   return null;
  // }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
