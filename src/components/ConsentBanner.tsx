"use client";

import { useConsent } from "./ConsentProvider";

export default function ConsentBanner() {
  const { consent, setConsent, hasDecided } = useConsent();

  if (hasDecided) return null;

  const acceptAll = () =>
    setConsent({ preferences: true, analytics: true, marketing: true });
  const rejectAll = () =>
    setConsent({ preferences: false, analytics: false, marketing: false });

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        background: "#111",
        color: "#fff",
        padding: 16,
        borderRadius: 12,
        maxWidth: 720,
        width: "90%",
        zIndex: 9999,
      }}
    >
      <strong>We use cookies</strong>
      <p style={{ margin: "8px 0 12px" }}>
        We use essential cookies and (with your consent) preference, analytics,
        and marketing cookies.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={acceptAll}>Accept all</button>
        <button onClick={rejectAll}>Reject all</button>
        <button onClick={() => setConsent({ preferences: true })}>
          Allow preferences
        </button>
        <button onClick={() => setConsent({ analytics: true })}>
          Allow analytics
        </button>
        <button onClick={() => setConsent({ marketing: true })}>
          Allow marketing
        </button>
      </div>
    </div>
  );
}
