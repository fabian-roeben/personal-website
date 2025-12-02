"use client";

import { useEffect, useState } from "react";

export function WaveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    // Only track mouse if reduced motion is not preferred
    if (!mediaQuery.matches) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);

      window.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseenter", handleMouseEnter);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
        mediaQuery.removeEventListener("change", handleMotionChange);
      };
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none bg-white dark:bg-[hsl(215,50%,4%)]"
      aria-hidden="true"
    >
      {/* Base dot grid - always visible at low opacity */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(215 25% 50%) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Enhanced dots near cursor - adds depth (disabled for reduced motion) */}
      {!prefersReducedMotion && (
        <div
          className="absolute inset-0 opacity-[0.7] dark:opacity-[0.45] transition-opacity duration-200"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(215 25% 50%) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            maskImage: isHovering
              ? `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`
              : `radial-gradient(circle 100px at 50% 50%, transparent 0%, transparent 100%)`,
            WebkitMaskImage: isHovering
              ? `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`
              : `radial-gradient(circle 100px at 50% 50%, transparent 0%, transparent 100%)`,
          }}
        />
      )}
    </div>
  );
}
