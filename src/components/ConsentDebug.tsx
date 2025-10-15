"use client";

import { useConsent } from "./ConsentProvider";

export default function ConsentDebug() {
  const { consent, hasDecided, loading, jurisdiction } = useConsent();

  // Only show in development
  if (process.env.NODE_ENV === "production") return null;

  const clearConsent = () => {
    localStorage.removeItem("ds_consent");
    window.location.reload();
  };

  return (
    <div className="fixed top-4 right-4 z-[10000] bg-black/90 text-white p-4 rounded-lg text-xs max-w-xs">
      <div className="font-bold mb-2">🍪 Consent Debug</div>
      <div className="space-y-1">
        <div>Decided: {hasDecided ? "✅ Yes" : "❌ No"}</div>
        <div>Loading: {loading ? "⏳" : "✅"}</div>
        <div>Jurisdiction: {jurisdiction}</div>
        <div className="mt-2 pt-2 border-t border-white/20">
          <div className="font-semibold mb-1">Consent:</div>
          <div>Necessary: {consent.necessary ? "✅" : "❌"}</div>
          <div>Preferences: {consent.preferences ? "✅" : "❌"}</div>
          <div>Analytics: {consent.analytics ? "✅" : "❌"}</div>
          <div>Marketing: {consent.marketing ? "✅" : "❌"}</div>
        </div>
        <button
          onClick={clearConsent}
          className="mt-3 w-full px-3 py-1.5 bg-red-600 hover:bg-red-700 rounded text-white font-medium"
        >
          Clear & Reload
        </button>
      </div>
    </div>
  );
}
