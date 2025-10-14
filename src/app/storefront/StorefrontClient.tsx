"use client";

import { useEffect } from "react";
import { useConsent } from "@/components/ConsentProvider";
import { setCookie } from "@/lib/cookies";

export default function StorefrontClient() {
  // Ensure essential HttpOnly session cookie
  useEffect(() => {
    (async () => {
      try {
        await fetch("/api/set-session", { cache: "no-store" });
      } catch (error) {
        console.error("Failed to set session cookie:", error);
      }
    })();
  }, []);

  // Marketing: automatically set
  useEffect(() => {
    // Set marketing cookie automatically
    setCookie("ds_marketing", "1", 30, { sameSite: "none", secure: true });

    // Load Meta Pixel dynamically
    // (Replace YOUR_PIXEL_ID with your actual pixel ID)
    const s = document.createElement("script");
    s.async = true;
    s.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)}
      ;if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
      t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(s);

    console.log("Marketing pixel loaded");

    return () => {
      s.remove();
    };
  }, []);

  return null;
}
