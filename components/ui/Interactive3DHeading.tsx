"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type ColorVariant = "prismatic" | "cyan" | "emerald" | "violet" | "amber";

interface Interactive3DHeadingProps {
  badge?: string;
  eyebrow?: string;
  badgeTelemetry?: string;
  badgeVariant?: ColorVariant;
  leadText?: string;
  title?: string;
  highlightText?: string;
  highlight?: string;
  tailText?: string;
  description?: string;
  variant?: ColorVariant;
  size?: "hero" | "section" | "compact";
  align?: "left" | "center";
  className?: string;
}

const variantClasses: Record<ColorVariant, string> = {
  prismatic: "text-gradient-prismatic",
  cyan: "text-gradient-cyan",
  emerald: "text-gradient-emerald",
  violet: "text-gradient-violet",
  amber: "text-gradient-amber",
};

const badgeStyles: Record<
  ColorVariant,
  {
    border: string;
    bg: string;
    text: string;
    dot: string;
    glow: string;
  }
> = {
  prismatic: {
    border: "border-sky-500/30",
    bg: "bg-sky-950/40",
    text: "text-sky-300",
    dot: "bg-sky-400",
    glow: "rgba(56, 189, 248, 0.4)",
  },
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-950/40",
    text: "text-cyan-300",
    dot: "bg-cyan-400",
    glow: "rgba(6, 182, 212, 0.4)",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-950/40",
    text: "text-emerald-300",
    dot: "bg-emerald-400",
    glow: "rgba(16, 185, 129, 0.4)",
  },
  violet: {
    border: "border-violet-500/30",
    bg: "bg-violet-950/40",
    text: "text-violet-300",
    dot: "bg-violet-400",
    glow: "rgba(168, 85, 247, 0.4)",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-950/40",
    text: "text-amber-300",
    dot: "bg-amber-400",
    glow: "rgba(245, 158, 11, 0.4)",
  },
};

const fontSizes = {
  hero: "text-4xl sm:text-5xl lg:text-[4.2rem] leading-[1.04]",
  section: "text-3xl sm:text-4xl lg:text-5xl leading-[1.08]",
  compact: "text-2xl sm:text-3xl lg:text-4xl leading-[1.12]",
};

export default function Interactive3DHeading({
  badge,
  eyebrow,
  badgeTelemetry,
  badgeVariant = "violet",
  leadText,
  title,
  highlightText,
  highlight,
  tailText,
  description,
  variant = "prismatic",
  size = "section",
  align = "left",
  className = "",
}: Interactive3DHeadingProps) {
  const activeBadge = badge || eyebrow;
  const activeLead = leadText || title || "";
  const activeHighlight = highlightText || highlight || "";

  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Subtle spring tilt for tactile responsiveness
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [4, -4]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    springConfig,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const currentBadge = badgeStyles[badgeVariant];
  const gradientClass = variantClasses[variant];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${
        align === "center"
          ? "items-center text-center mx-auto"
          : "items-start text-left"
      } ${className}`}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className="transition-transform duration-200 ease-out"
      >
        {/* Architectural Eyebrow Badge */}
        {activeBadge && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2.5 rounded-full border ${currentBadge.border} ${currentBadge.bg} px-3.5 py-1.5 text-xs font-tech tracking-wider ${currentBadge.text} backdrop-blur-md shadow-lg shadow-black/40 mb-3`}
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`absolute inline-flex h-full w-full animate-ping rounded-full ${currentBadge.dot} opacity-75`}
              />
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${currentBadge.dot}`}
              />
            </span>
            <span className="font-semibold tracking-wide uppercase">
              {activeBadge}
            </span>
            {badgeTelemetry && (
              <>
                <span className="opacity-30">/</span>
                <span className="text-zinc-400 font-normal">
                  {badgeTelemetry}
                </span>
              </>
            )}
          </motion.div>
        )}

        {/* Sculptural Headline */}
        <h2
          className={`font-display font-extrabold tracking-[-0.035em] ${fontSizes[size]} text-white`}
        >
          {/* Milled Titanium Base Lead Text */}
          <span className="text-chiseled-titanium block sm:inline">
            {activeLead}{" "}
          </span>

          {/* Vibrant Prismatic / Metallic Highlighted Phrase */}
          <span className="relative inline-block my-0.5 group cursor-default">
            <span className={`${gradientClass} font-black`}>
              {activeHighlight}
            </span>

            {/* Ambient Refractive Halo Glow */}
            <span
              className="pointer-events-none absolute -inset-3 -z-10 rounded-2xl opacity-35 blur-xl transition-opacity duration-500 group-hover:opacity-75"
              style={{
                background: `radial-gradient(circle, ${currentBadge.glow} 0%, transparent 70%)`,
              }}
            />
          </span>

          {/* Optional Tail Text */}
          {tailText && (
            <span className="text-chiseled-titanium block sm:inline">
              {" "}
              {tailText}
            </span>
          )}
        </h2>

        {/* Supporting Narrative / Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
