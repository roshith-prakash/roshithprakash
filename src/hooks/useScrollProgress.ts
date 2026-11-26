"use client";

import { useState, useEffect } from "react";

export function useScrollProgress(runwayRatio = 1.5) {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (motionQuery.matches) {
            setProgress(1);
          } else {
            const runway = window.innerHeight * runwayRatio;
            const current = Math.min(1, Math.max(0, window.scrollY / runway));
            setProgress(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [runwayRatio]);

  return { progress, reducedMotion };
}
