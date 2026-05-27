"use client";

import { useMemo } from "react";

interface ParticlesProps {
  count?: number;
  className?: string;
}

export function Particles({ count = 28, className }: ParticlesProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        duration: 14 + Math.random() * 18,
        delay: -Math.random() * 30,
        opacity: 0.25 + Math.random() * 0.55,
      })),
    [count],
  );

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-ff-cyan"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: "0 0 8px rgba(0, 229, 199, 0.85)",
            animation: `ff-particle-rise ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
