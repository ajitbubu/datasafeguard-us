"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "@/lib/cookies";

type Consent = {
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

type Ctx = {
  consent: Consent;
  setConsent: (c: Partial<Consent>) => void;
  hasDecided: boolean;
};

const ConsentCtx = createContext<Ctx | null>(null);

const DEFAULT: Consent = { preferences: false, analytics: false, marketing: false };

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, _set] = useState<Consent>(DEFAULT);
  const [hasDecided, setHasDecided] = useState(false);

  useEffect(() => {
    const saved = getCookie("ds_consent");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Consent;
        _set(parsed);
        setHasDecided(true);
      } catch {}
    }
  }, []);

  const setConsent = (c: Partial<Consent>) => {
    const next = { ...consent, ...c };
    _set(next);
    setCookie("ds_consent", JSON.stringify(next), 180);
    setHasDecided(true);
  };

  return (
    <ConsentCtx.Provider value={{ consent, setConsent, hasDecided }}>
      {children}
    </ConsentCtx.Provider>
  );
}

export const useConsent = () => {
  const v = useContext(ConsentCtx);
  if (!v) throw new Error("useConsent must be used inside ConsentProvider");
  return v;
};
