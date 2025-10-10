"use client";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

export type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  const html = document.documentElement;
  const target = theme === "system" ? getSystemTheme() : theme;
  html.setAttribute("data-theme", target);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  const mediaRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    // Initial apply
    applyTheme(theme);
    localStorage.setItem("theme", theme);

    // Listen to system changes when in system mode
    if (theme === "system") {
      mediaRef.current = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme("system");
      mediaRef.current.addEventListener("change", handler);
      return () => mediaRef.current?.removeEventListener("change", handler);
    }
  }, [theme]);

  useEffect(() => {
    // Enable smooth color transitions during theme changes
    const body = document.body;
    body.classList.add("transition-colors", "duration-300");
    return () => body.classList.remove("transition-colors", "duration-300");
  }, []);

  const value = useMemo<ThemeContextType>(() => ({
    theme,
    resolvedTheme: theme === "system" ? getSystemTheme() : theme,
    setTheme: (t: Theme) => setThemeState(t),
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}