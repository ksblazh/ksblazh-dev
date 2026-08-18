"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

// LazyMotion + m keeps only the DOM-animation slice of Framer Motion in the
// bundle (the site animates transform/opacity, nothing more).
// reducedMotion="user" is the engine-level half of the reduced-motion promise;
// the CSS kill switch in globals.css is the other half.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
