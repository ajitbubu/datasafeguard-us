"use client";

import dynamic from "next/dynamic";

// Dynamically import CookieSettingsButton with no SSR to prevent hydration errors
const CookieSettingsButton = dynamic(() => import("@/components/CookieSettingsButton"), {
  ssr: false,
});

export default function CookieSettingsButtonWrapper() {
  return <CookieSettingsButton />;
}
