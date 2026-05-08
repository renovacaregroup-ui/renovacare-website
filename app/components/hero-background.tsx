"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { id: 0, x: 8, y: 18, size: 12, delay: 0.1, duration: 5.4 },
  { id: 1, x: 17, y: 62, size: 18, delay: 1.4, duration: 7.2 },
  { id: 2, x: 24, y: 34, size: 10, delay: 0.9, duration: 5.9 },
  { id: 3, x: 31, y: 78, size: 16, delay: 2.2, duration: 6.5 },
  { id: 4, x: 39, y: 14, size: 14, delay: 0.4, duration: 7.8 },
  { id: 5, x: 46, y: 52, size: 20, delay: 1.8, duration: 6.9 },
  { id: 6, x: 54, y: 86, size: 11, delay: 0.7, duration: 5.2 },
  { id: 7, x: 61, y: 27, size: 15, delay: 2.5, duration: 8.1 },
  { id: 8, x: 69, y: 67, size: 13, delay: 1.1, duration: 6.1 },
  { id: 9, x: 76, y: 41, size: 17, delay: 2.8, duration: 7.4 },
  { id: 10, x: 83, y: 12, size: 9, delay: 0.3, duration: 5.7 },
  { id: 11, x: 88, y: 58, size: 19, delay: 1.6, duration: 8.4 },
  { id: 12, x: 12, y: 88, size: 14, delay: 2.1, duration: 6.3 },
  { id: 13, x: 72, y: 84, size: 12, delay: 0.6, duration: 5.8 },
  { id: 14, x: 92, y: 32, size: 16, delay: 1.9, duration: 7.1 },
];

function Particle({ delay, x, y, size, duration }: { delay: number; x: number; y: number; size: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ width: size, height: size, left: `${x}%`, top: `${y}%`, backgroundColor: "rgba(200, 151, 62, 0.35)" }}
      animate={{
        y: [-25, 25, -25],
        x: [-15, 15, -15],
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.4, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function DNAStrand() {
  return (
    <motion.svg
      className="absolute right-[5%] top-[10%] w-48 h-80 opacity-[0.3]"
      viewBox="0 0 100 300"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(12)].map((_, i) => (
        <motion.circle
          key={i}
          cx={50 + Math.sin(i * 0.8) * 25}
          cy={i * 25 + 10}
          r={4}
          fill="var(--primary-gold)"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
      {[...Array(11)].map((_, i) => (
        <motion.line
          key={`line-${i}`}
          x1={50 + Math.sin(i * 0.8) * 25}
          y1={i * 25 + 10}
          x2={50 + Math.sin((i + 1) * 0.8) * 25}
          y2={(i + 1) * 25 + 10}
          stroke="var(--primary-gold)"
          strokeWidth={1}
          opacity={0.5}
        />
      ))}
    </motion.svg>
  );
}

function WaveLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-40 opacity-[0.06]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,100 C360,150 720,50 1080,100 C1260,125 1440,75 1440,100 L1440,200 L0,200 Z"
          fill="var(--primary-gold)"
          animate={{
            d: [
              "M0,100 C360,150 720,50 1080,100 C1260,125 1440,75 1440,100 L1440,200 L0,200 Z",
              "M0,120 C360,70 720,150 1080,80 C1260,60 1440,130 1440,100 L1440,200 L0,200 Z",
              "M0,100 C360,150 720,50 1080,100 C1260,125 1440,75 1440,100 L1440,200 L0,200 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-32 opacity-[0.04]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,120 C360,70 720,160 1080,90 C1260,70 1440,140 1440,120 L1440,200 L0,200 Z"
          fill="var(--primary-gold)"
          animate={{
            d: [
              "M0,120 C360,70 720,160 1080,90 C1260,70 1440,140 1440,120 L1440,200 L0,200 Z",
              "M0,90 C360,140 720,60 1080,130 C1260,150 1440,80 1440,120 L1440,200 L0,200 Z",
              "M0,120 C360,70 720,160 1080,90 C1260,70 1440,140 1440,120 L1440,200 L0,200 Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.svg>
    </div>
  );
}

function GradientOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-[10%] left-[10%] w-80 h-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(200,151,62,0.25) 0%, transparent 70%)" }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-[28rem] h-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(212,197,181,0.3) 0%, transparent 70%)" }}
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-[40%] right-[30%] w-64 h-64 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(200,151,62,0.2) 0%, transparent 70%)" }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <GradientOrbs />
      <WaveLines />
      <DNAStrand />
      {PARTICLES.map((p) => (
        <Particle key={p.id} {...p} />
      ))}
    </div>
  );
}
