"use client";

import { motion } from "framer-motion";

export default function AnimatedShieldLogo() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Outer Glow Ring */}
            <motion.div
                className="absolute w-96 h-96 rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Rotating Orbit Rings */}
            {[0, 1, 2].map((index) => (
                <motion.div
                    key={index}
                    className="absolute border border-primary/20 rounded-full"
                    style={{
                        width: `${280 - index * 40}px`,
                        height: `${280 - index * 40}px`,
                    }}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 20 + index * 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Orbit Particles */}
                    <motion.div
                        className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2"
                        animate={{
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                        }}
                    />
                </motion.div>
            ))}

            {/* Central Shield */}
            <motion.div
                className="relative z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <svg
                    width="160"
                    height="180"
                    viewBox="0 0 160 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Shield Outline */}
                    <motion.path
                        d="M80 10 L140 40 L140 90 Q140 140 80 170 Q20 140 20 90 L20 40 Z"
                        stroke="url(#shieldGradient)"
                        strokeWidth="3"
                        fill="rgba(59, 130, 246, 0.1)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />

                    {/* Inner Shield Glow */}
                    <motion.path
                        d="M80 25 L125 47 L125 85 Q125 120 80 145 Q35 120 35 85 L35 47 Z"
                        fill="url(#innerGlow)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* AI Circuit Pattern */}
                    <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none">
                        {/* Vertical Lines */}
                        <motion.line
                            x1="80"
                            y1="50"
                            x2="80"
                            y2="130"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 1 }}
                        />

                        {/* Horizontal Lines */}
                        <motion.line
                            x1="50"
                            y1="70"
                            x2="110"
                            y2="70"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                        />
                        <motion.line
                            x1="55"
                            y1="90"
                            x2="105"
                            y2="90"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 1.4 }}
                        />
                        <motion.line
                            x1="60"
                            y1="110"
                            x2="100"
                            y2="110"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 1.6 }}
                        />
                    </g>

                    {/* Circuit Nodes */}
                    {[
                        { cx: 80, cy: 50, delay: 1.8 },
                        { cx: 50, cy: 70, delay: 2 },
                        { cx: 80, cy: 70, delay: 2.2 },
                        { cx: 110, cy: 70, delay: 2.4 },
                        { cx: 55, cy: 90, delay: 2.6 },
                        { cx: 80, cy: 90, delay: 2.8 },
                        { cx: 105, cy: 90, delay: 3 },
                        { cx: 60, cy: 110, delay: 3.2 },
                        { cx: 80, cy: 110, delay: 3.4 },
                        { cx: 100, cy: 110, delay: 3.6 },
                        { cx: 80, cy: 130, delay: 3.8 },
                    ].map((node, i) => (
                        <motion.circle
                            key={i}
                            cx={node.cx}
                            cy={node.cy}
                            r="3"
                            fill="#3b82f6"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0, 1.2, 1],
                                opacity: [0, 1, 1],
                            }}
                            transition={{ duration: 0.5, delay: node.delay }}
                        >
                            <animate
                                attributeName="opacity"
                                values="1;0.3;1"
                                dur="2s"
                                repeatCount="indefinite"
                                begin={`${node.delay}s`}
                            />
                        </motion.circle>
                    ))}

                    {/* Lock Icon in Center */}
                    <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 4 }}
                    >
                        <circle
                            cx="80"
                            cy="95"
                            r="15"
                            fill="url(#lockGradient)"
                            stroke="#3b82f6"
                            strokeWidth="2"
                        />
                        <path
                            d="M72 95 L78 101 L88 89"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                        <path
                            d="M73 85 V80 Q73 75 80 75 Q87 75 87 80 V85"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            fill="none"
                        />
                        <circle cx="80" cy="95" r="2" fill="white" />
                    </motion.g>

                    {/* Gradients */}
                    <defs>
                        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                        <radialGradient id="innerGlow">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                        <linearGradient id="lockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#1e40af" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Data Flow Particles */}
            {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const radius = 150;
                return (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                        style={{
                            left: "50%",
                            top: "50%",
                        }}
                        animate={{
                            x: [
                                0,
                                Math.cos((angle * Math.PI) / 180) * radius,
                                0,
                            ],
                            y: [
                                0,
                                Math.sin((angle * Math.PI) / 180) * radius,
                                0,
                            ],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.25,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}

            {/* Scanning Line Effect */}
            <motion.div
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{
                    left: 0,
                    top: "50%",
                }}
                animate={{
                    y: [-100, 100],
                    opacity: [0, 0.6, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
}
