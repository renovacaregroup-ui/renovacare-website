"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  void delay;
  void direction;
  return <div className={className}>{children}</div>;
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }: StaggerContainerProps) {
  void staggerDelay;
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function ScaleIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  void delay;
  return <div className={className}>{children}</div>;
}

export function FloatingElement({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PulseGlow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{ boxShadow: ["0 0 0 0 rgba(200, 151, 62, 0)", "0 0 0 12px rgba(200, 151, 62, 0.1)", "0 0 0 0 rgba(200, 151, 62, 0)"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ target, suffix = "", className = "" }: { target: number; suffix?: string; className?: string }) {
  return <span className={className}>{target}{suffix}</span>;
}

export function ParallaxSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
