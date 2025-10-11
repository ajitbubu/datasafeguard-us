"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTheme, type Theme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => setMounted(true), []);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  if (!mounted) {
    return (
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-muted border border-border" />
      </div>
    );
  }

  const currentIcon = resolvedTheme === "dark"
    ? (
      <motion.svg 
        className="w-5 h-5" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        aria-hidden="true"
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          duration: 0.4 
        }}
        key="moon"
      >
        <motion.path 
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" 
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.svg>
    )
    : (
      <motion.svg 
        className="w-5 h-5" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        aria-hidden="true"
        initial={{ rotate: 90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          duration: 0.4 
        }}
        key="sun"
      >
        <motion.circle 
          cx="12" 
          cy="12" 
          r="4" 
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        />
        <motion.path 
          d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M17.66 6.34l1.41-1.41M4.93 19.07l1.41-1.41" 
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        />
      </motion.svg>
    );

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
    if (e.key === "Escape") setOpen(false);
  }

  return (
    <div className="relative" ref={containerRef}>
      <motion.button
        type="button"
        className="flex items-center gap-2 px-3 h-10 rounded-lg bg-muted border border-border text-foreground hover:bg-muted/80 shadow-sm transition-colors cursor-pointer relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ 
          scale: 1.08,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 20 
        }}
        style={{ willChange: "transform" }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Toggle theme menu"
        onClick={() => setOpen(o => !o)}
        onKeyDown={handleKeyDown}
      >
        {/* Ripple effect on hover */}
        <motion.div
          className="absolute inset-0 bg-primary/10 rounded-lg"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon with rotation animation */}
        <motion.div
          animate={{ 
            rotate: open ? 180 : 0,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15 
          }}
          className="relative z-10"
        >
          <AnimatePresence mode="wait">
            {currentIcon}
          </AnimatePresence>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label="Theme options"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.2 
            }}
            className="absolute right-0 mt-2 w-44 rounded-lg bg-muted border border-border shadow-lg overflow-hidden z-50"
          >
            {[
              { key: "light", label: "Light", icon: "☀️" }, 
              { key: "dark", label: "Dark", icon: "🌙" }, 
              { key: "system", label: "System", icon: "💻" }
            ].map((opt, index) => (
              <motion.button
                key={opt.key}
                role="menuitem"
                onClick={() => { setTheme(opt.key as Theme); setOpen(false); }}
                className={`flex items-center justify-between w-full px-4 py-2 text-base transition-colors ${
                  theme === opt.key ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted/80"
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
              >
                <span className="flex items-center gap-2">
                  <span>{opt.icon}</span>
                  <span>{opt.label}</span>
                </span>
                {theme === opt.key && (
                  <motion.svg 
                    className="w-4 h-4" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    aria-hidden="true"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3-3a1 1 0 111.42-1.42l2.29 2.29 6.79-6.79a1 1 0 011.42 0z" clipRule="evenodd" />
                  </motion.svg>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}