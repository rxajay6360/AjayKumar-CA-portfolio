"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight, Box } from "lucide-react";

// Dynamically load the interactive 3D hero scene
const HeroScene3D = dynamic(() => import("@/components/3d/HeroScene3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-[10px] font-mono text-[#888888] tracking-widest">
      INITIALIZING 3D ENGINE...
    </div>
  ),
});

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [activePreviewMode, setActivePreviewMode] = useState<"render" | "wireframe">("render");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-12 pt-24 pb-16 overflow-hidden bg-[#070707] select-none"
    >
      {/* Background Subtle Portrait Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-bg.jpeg"
          alt="C.A. Aajay Kumar — 3D Artist"
          fill
          priority
          quality={90}
          className="object-cover object-[75%_25%] opacity-20 filter contrast-125 saturate-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/90 to-[#070707]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070707]/50 to-[#070707]" />
      </div>

      {/* Atmospheric Crimson Volumetric Backlight */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] rounded-full bg-[#ff2a3b]/12 blur-[140px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Center 3D Focal Artifact with Parallax (HTML .avatar position & behavior) */}
      <div
        className="absolute left-1/2 top-1/2 w-[clamp(260px,32vw,440px)] aspect-square z-[1] pointer-events-auto transition-transform duration-100 ease-out flex items-center justify-center"
        style={{
          transform: `translate(-50%, calc(-58% + ${scrollY * 0.12}px))`,
        }}
      >
        {/* Soft Ambient Rim Halo */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff2a3b]/25 via-transparent to-[#d49755]/15 blur-2xl"
          aria-hidden="true"
        />

        {/* 3D Canvas Viewport */}
        <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-[0_0_80px_rgba(255,42,59,0.25)] group">
          <HeroScene3D
            wireframe={activePreviewMode === "wireframe"}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          />

          {/* Micro Shader Mode Pill Floating At Bottom of 3D Orb */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-black/80 backdrop-blur-md px-2 py-1 rounded-full border border-white/15 opacity-80 hover:opacity-100 transition-opacity">
            <button
              onClick={() => setActivePreviewMode("render")}
              className={`px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider uppercase transition-colors ${
                activePreviewMode === "render"
                  ? "bg-[#ff2a3b] text-white font-bold shadow-[0_0_8px_#ff2a3b]"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              PBR
            </button>
            <button
              onClick={() => setActivePreviewMode("wireframe")}
              className={`px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider uppercase transition-colors ${
                activePreviewMode === "wireframe"
                  ? "bg-[#ff2a3b] text-white font-bold shadow-[0_0_8px_#ff2a3b]"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              Wire
            </button>
          </div>
        </div>
      </div>

      {/* Massive Editorial Headline (Directly preserving HTML .hero h1) */}
      <div className="relative z-[2] text-center pointer-events-none mt-8 md:mt-0">
        <span className="block text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-[#ff2a3b] mb-2 sm:mb-4">
          3D ARTIST &bull; MAYA &bull; SUBSTANCE &bull; MOTION GRAPHICS
        </span>

        <h1 className="font-syne font-extrabold text-[clamp(44px,11.5vw,190px)] leading-[0.88] tracking-[-0.04em] uppercase">
          <span className="block bg-gradient-to-b from-white via-[#d0d0d0] to-[#777777] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            Hi, I&apos;m
          </span>
          <b className="block text-[#ff2a3b] drop-shadow-[0_0_45px_rgba(255,42,59,0.45)]">
            C.A. AAJAY KUMAR
          </b>
        </h1>
      </div>

      {/* Bottom Subtitle & Badges (HTML .hero .sub) */}
      <div className="relative z-10 mt-12 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-7xl mx-auto w-full px-2">
        <div className="max-w-xs sm:max-w-sm">
          <p className="text-xs sm:text-sm text-[#cfcfcf] leading-relaxed">
            <em className="text-[#ff2a3b] not-italic font-bold block mb-1 tracking-wider uppercase text-xs font-mono">
              &ldquo;BUILT IN 3D. FINISHED WITH IMPACT.&rdquo;
            </em>
            Transforming creative concepts into cinematic 3D models, photorealistic PBR materials, and dynamic motion graphics.
          </p>

          {/* Software Dots / Badges from reference HTML */}
          <div className="flex items-center gap-2 mt-3.5">
            <span className="text-[10px] font-mono text-[#888888] mr-1 uppercase tracking-widest">
              SUITE:
            </span>
            <div className="flex gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#151518] border border-white/10 flex items-center justify-center font-mono text-[10px] font-bold text-white shadow-inner" title="Autodesk Maya">
                Ma
              </span>
              <span className="w-7 h-7 rounded-lg bg-[#151518] border border-white/10 flex items-center justify-center font-mono text-[10px] font-bold text-[#ff2a3b] shadow-inner" title="Substance 3D Painter">
                Pt
              </span>
              <span className="w-7 h-7 rounded-lg bg-[#151518] border border-white/10 flex items-center justify-center font-mono text-[10px] font-bold text-[#3b9cff] shadow-inner" title="Adobe After Effects">
                Ae
              </span>
              <span className="w-7 h-7 rounded-lg bg-[#151518] border border-white/10 flex items-center justify-center font-mono text-[10px] font-bold text-[#f59e0b] shadow-inner" title="Blender">
                Bl
              </span>
              <span className="w-7 h-7 rounded-lg bg-[#151518] border border-white/10 flex items-center justify-center font-mono text-[10px] font-bold text-[#10b981] shadow-inner" title="Arnold Renderer">
                Ar
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Pill Buttons from reference HTML */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <Link
            href="#projects"
            data-cursor="EXPLORE"
            className="pill"
          >
            <span>VIEW MY WORK</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="#contact"
            data-cursor="CONTACT"
            className="pill o"
          >
            CONTACT ME
          </Link>
        </div>
      </div>
    </header>
  );
}
