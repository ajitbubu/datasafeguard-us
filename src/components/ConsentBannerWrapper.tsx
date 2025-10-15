"use client";

import dynamic from "next/dynamic";

// Dynamically import ConsentBanner with no SSR to prevent hydration errors
const ConsentBanner = dynamic(() => import("@/components/ConsentBanner"), {
  ssr: false,
});

export default function ConsentBannerWrapper() {
  return <ConsentBanner />;
}
