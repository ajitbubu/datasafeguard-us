"use client";

import { useConsent } from "./ConsentProvider";
import { useState, useEffect } from "react";
import type { ConsentCategory } from "@/lib/consent/types";

interface ConsentIframeProps {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  category: ConsentCategory;
  provider?: string;
  className?: string;
  allow?: string;
  allowFullScreen?: boolean;
  frameBorder?: string | number;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export default function ConsentIframe({
  src,
  title,
  width = "560",
  height = "315",
  category,
  provider = "Third-party",
  className = "",
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  allowFullScreen = true,
  frameBorder = "0",
  referrerPolicy = "strict-origin-when-cross-origin"
}: ConsentIframeProps) {
  const { hasConsentFor, setConsent, consent } = useConsent();
  const [isLoaded, setIsLoaded] = useState(false);
  const hasConsent = hasConsentFor(category);

  useEffect(() => {
    if (hasConsent) {
      setIsLoaded(true);
    }
  }, [hasConsent]);

  const handleAcceptAndLoad = async () => {
    // Grant consent for this category
    await setConsent({
      ...consent,
      [category]: true
    });
    setIsLoaded(true);
  };

  // If consent is granted, show the iframe
  if (isLoaded && hasConsent) {
    return (
      <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        className={className}
        allow={allow}
        allowFullScreen={allowFullScreen}
        frameBorder={frameBorder}
        referrerPolicy={referrerPolicy}
        style={{ border: 0 }}
      />
    );
  }

  // Show placeholder with consent notice
  return (
    <div
      className={`relative bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        minHeight: '200px'
      }}
    >
      <div className="text-center p-6 max-w-md">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <svg
            className="w-16 h-16 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {provider} Content Blocked
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          This content requires <strong>{category}</strong> cookies to be enabled.
          {provider !== "Third-party" && ` Content is provided by ${provider}.`}
        </p>

        {/* Privacy Notice */}
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded text-xs text-left text-gray-700 dark:text-gray-300">
          <p className="font-medium mb-1">🔒 Privacy Notice</p>
          <p>
            By loading this content, you agree to {provider}'s privacy policy and allow cookies
            for {category} purposes. This may include tracking and personalization.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleAcceptAndLoad}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Accept & Load Content
          </button>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Open in new tab instead
          </a>
        </div>
      </div>
    </div>
  );
}
