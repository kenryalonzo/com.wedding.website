"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import React from "react";

type RevealVariant =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "fade-scale"
  | "fade-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  const variantClasses: Record<
    RevealVariant,
    { hidden: string; visible: string }
  > = {
    "fade-up": {
      hidden: "opacity-0 translate-y-12",
      visible: "opacity-100 translate-y-0",
    },
    "fade-left": {
      hidden: "opacity-0 -translate-x-12",
      visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
      hidden: "opacity-0 translate-x-12",
      visible: "opacity-100 translate-x-0",
    },
    "fade-scale": {
      hidden: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
    "fade-in": {
      hidden: "opacity-0",
      visible: "opacity-100",
    },
  };

  const v = variantClasses[variant];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? v.visible : v.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
