"use client";

import { m } from "framer-motion";

// One-shot scroll-reveal: each block fades and rises once when it enters the
// viewport, then stays put.
// data-reveal lets the prefers-reduced-motion CSS force it visible.
export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
}: {
  as?: "div" | "li" | "section";
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  // The cast collapses the per-tag motion prop types; only tag-agnostic props
  // are passed below, so it is safe.
  const Tag = (as === "li" ? m.li : as === "section" ? m.section : m.div) as typeof m.div;
  return (
    <Tag
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
