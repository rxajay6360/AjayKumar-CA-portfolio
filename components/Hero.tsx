"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InteractiveAvatar from "@/components/InteractiveAvatar";

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [lensState, setLensState] = useState({ isHovered: false });
  const animFrameRef = useRef<number | null>(null);

  // Continuous video-like hovering drift across the title,
  // seamlessly transitioning to silky interactive cursor tracking on hover!
  useEffect(() => {
    let t = 0;
    let currentX = 50;
    let currentY = 50;
    let targetX = 50;
    let targetY = 50;
    let isHovering = false;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      if (!isHovering) {
        // Video-like smooth cinematic harmonic drift across the letters
        t += 0.022;
        // Smoothly glides across from left to right (20% to 80%)
        targetX = 50 + Math.sin(t * 1.15) * 32;
        // Subtle vertical breathing between 42% and 58%
        targetY = 50 + Math.cos(t * 2.3) * 12;

        currentX = lerp(currentX, targetX, 0.06);
        currentY = lerp(currentY, targetY, 0.06);
      } else {
        // Responsive spring interpolation to cursor
        currentX = lerp(currentX, targetX, 0.16);
        currentY = lerp(currentY, targetY, 0.16);
      }

      if (stageRef.current) {
        stageRef.current.style.setProperty("--lens-x", `${currentX.toFixed(2)}%`);
        stageRef.current.style.setProperty("--lens-y", `${currentY.toFixed(2)}%`);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    const stageEl = stageRef.current;
    if (!stageEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = stageEl.getBoundingClientRect();
      const x = Math.max(8, Math.min(92, ((e.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(12, Math.min(88, ((e.clientY - rect.top) / rect.height) * 100));
      targetX = x;
      targetY = y;
      isHovering = true;
      setLensState({ isHovered: true });
    };

    const handleMouseLeave = () => {
      isHovering = false;
      setLensState({ isHovered: false });
    };

    stageEl.addEventListener("mousemove", handleMouseMove);
    stageEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      stageEl.removeEventListener("mousemove", handleMouseMove);
      stageEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <header className="hero" id="home">
      {/* Cinematic Hero Background Showcase (50% Opacity with Smooth Entry) */}
      <div className="hero-bg-container" aria-hidden="true">
        <Image
          src="/images/hero/hero-showcase-bg.png"
          alt="Ajay Kumar 3D Artist Background Showcase"
          fill
          priority
          sizes="100vw"
          className="hero-bg-image"
          quality={90}
        />
        <div className="hero-bg-vignette" />
      </div>

      {/* Animated Hero Title with Interactive 3D Avatar */}
      <h1 className="hero-title">
        <InteractiveAvatar />
        <span className="hero-intro">HI THIS IS</span>

        {/* Optical Magnifier Lens Stage */}
        <div
          ref={stageRef}
          className={`magnifier-stage ${lensState.isHovered ? "is-hovered" : ""}`}
        >
          {/* Base Layer: Radiant Crimson Neon Typography */}
          <div className="magnifier-base-layer">
            <span className="hero-name-typography">AJAY KUMAR</span>
          </div>

          {/* Inverted Magnified Lens Portal: Clipped strictly to circular magnifier */}
          <div className="magnifier-lens-portal" aria-hidden="true">
            {/* High-contrast solid monochrome disc fill */}
            <div className="lens-monochrome-disc" />

            {/* Magnified Refracted Letterforms */}
            <div className="lens-refracted-wrapper">
              <span className="hero-name-typography lens-inverted-typography">
                AJAY KUMAR
              </span>
            </div>
          </div>

          {/* Physical Optical Glass Bevel Rim Ring at Lens Center */}
          <div className="lens-glass-beveled-rim" aria-hidden="true" />
        </div>
      </h1>

      {/* Subtitle with dots badges matching reference HTML */}
      <div className="sub">
        <em>A 3D artist</em> with deep focus in Maya modeling, Substance Painter texturing &amp; motion graphics.
        <div className="dots">
          <i>Ma</i>
          <i>Pt</i>
          <i>Ae</i>
          <i>Bl</i>
        </div>
      </div>

      {/* Pill button matching reference HTML */}
      <Link className="pill" href="#contact">
        Book a call
      </Link>
    </header>
  );
}
