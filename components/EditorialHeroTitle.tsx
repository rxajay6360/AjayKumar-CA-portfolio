"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import InteractiveAvatar from "@/components/InteractiveAvatar";

export default function EditorialHeroTitle() {
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);
  const [frameCounter, setFrameCounter] = useState("0048");

  // Subtle real-time frame counter for authentic 35mm analog scan feel
  useEffect(() => {
    let frame = 48;
    const interval = setInterval(() => {
      frame = (frame + 1) % 9999;
      setFrameCounter(frame.toString().padStart(4, "0"));
    }, 125);
    return () => clearInterval(interval);
  }, []);

  // Mouse move tracking for dynamic light leak & matte shift
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = titleContainerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    el.style.setProperty("--matte-x", `${x.toFixed(1)}%`);
    el.style.setProperty("--matte-y", `${y.toFixed(1)}%`);
  }, []);

  return (
    <div
      ref={titleContainerRef}
      onMouseMove={handleMouseMove}
      className="editorial-poster-frame relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center select-none"
    >
      {/* Procedural 35mm Film Grain SVG Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="analog35mmGrain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.35 0"
              in="noise"
              result="coloredNoise"
            />
            <feComposite operator="in" in2="SourceGraphic" result="grainTexture" />
            <feBlend mode="overlay" in="grainTexture" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      {/* Swiss Editorial Corner Crosshair Registration Marks */}
      <div className="swiss-reg-mark top-left" aria-hidden="true">+</div>
      <div className="swiss-reg-mark top-right" aria-hidden="true">+</div>
      <div className="swiss-reg-mark bottom-left" aria-hidden="true">+</div>
      <div className="swiss-reg-mark bottom-right" aria-hidden="true">+</div>

      {/* Editorial Top Metadata Strip */}
      <div className="editorial-meta-strip w-full flex items-center justify-between text-[8px] sm:text-[10px] font-mono tracking-[0.2em] text-[#71717a] uppercase mb-3 sm:mb-4 px-2 sm:px-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a3b] animate-ping" />
          <span className="text-[#a1a1aa]">35MM REEL // ISO 400</span>
        </div>
        <div className="hidden sm:inline-block text-[#52525b]">
          VECTOR CUTOUT &bull; INVERTED ALPHA MASK
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[#a1a1aa]">FRAME [{frameCounter}]</span>
          <span className="text-[#ff2a3b] font-bold">24 FPS</span>
        </div>
      </div>

      {/* Interactive 3D Avatar Portrait (Directly on Top of HI THIS IS) */}
      <InteractiveAvatar />

      {/* Main Typographic Title Canvas */}
      <div className="editorial-title-canvas relative w-full flex flex-col items-center text-center">
        {/* Subtle Horizontal 35mm Analog Flatbed Scanline */}
        <div ref={scanlineRef} className="analog-scan-beam" aria-hidden="true" />

        {/* 1. Intro Line: HI THIS IS (Inverted Monochrome Matte Reveal) */}
        <div className="matte-curtain-intro overflow-hidden mb-1">
          <h2 className="editorial-intro-text">
            HI THIS IS
          </h2>
        </div>

        {/* 2. Hero Name: AJAY KUMAR (35mm Grain Windows, Counter-Spaces & Inverted Alpha Wipe) */}
        <div className="matte-curtain-hero relative overflow-visible w-full">
          {/* Active Inverted Monochrome Silhouette Blade Wipe */}
          <div className="inverted-alpha-blade" aria-hidden="true" />

          {/* Master Letterforms with Counter-Space Grain Windows */}
          <h1 className="editorial-hero-name" data-text="AJAY KUMAR">
            AJAY KUMAR
          </h1>

          {/* Negative Space Precision Under-Rules */}
          <div className="editorial-grid-rule-bottom" aria-hidden="true">
            <span className="rule-accent-marker" />
          </div>
        </div>
      </div>

      {/* Editorial Bottom Technical Footnote */}
      <div className="editorial-footnote-strip w-full flex items-center justify-between text-[8px] sm:text-[9px] font-mono tracking-[0.18em] text-[#52525b] uppercase mt-3 sm:mt-4 px-2 sm:px-4">
        <span>SWISS GROTESK // BRUTALIST</span>
        <span className="hidden sm:inline-block">RAZOR-SHARP VECTOR ALPHA CHANNEL</span>
        <span>HOLD 2.4S</span>
      </div>
    </div>
  );
}
