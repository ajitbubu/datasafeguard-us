"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieSettingsButton() {
    const [showTooltip, setShowTooltip] = useState(false);

    // Log when component mounts
    useEffect(() => {
        console.log('[CookieSettingsButton] ✅ Component mounted and rendered!');
        console.log('[CookieSettingsButton] Button should be visible at bottom-left');
    }, []);

    const handleOpenSettings = () => {
        console.log('[CookieSettings] 🍪 BUTTON CLICKED! Opening cookie settings...');

        // Dispatch custom event to tell ConsentProvider to show the banner
        const event = new CustomEvent('open-cookie-settings', {
            detail: { timestamp: Date.now() }
        });
        window.dispatchEvent(event);
        console.log('[CookieSettings] ✅ Dispatched open-cookie-settings event');
    };

    return (
        <div className="fixed bottom-6 left-6 z-[9998]">
            {/* Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg shadow-lg whitespace-nowrap"
                    >
                        Cookie Settings
                        <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-700"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cookie Button */}
            <motion.button
                onClick={handleOpenSettings}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="group relative w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                aria-label="Open Cookie Settings"
            >
                {/* Cookie Icon */}
                <svg
                    className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.7.33 1.43.33 2.26 0 4.41-3.59 8-8 8z" />
                    <circle cx="8.5" cy="12.5" r="1.5" />
                    <circle cx="15" cy="12" r="1" />
                    <circle cx="12" cy="8" r="1" />
                    <circle cx="12" cy="16" r="1" />
                </svg>

                {/* Pulse Animation */}
                <span className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></span>
            </motion.button>
        </div>
    );
}
