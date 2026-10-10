"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

export default function InteractiveAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headLayerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Target values from mouse position (-1 to 1)
  const targetRef = useRef({ x: 0, y: 0, angle: 0, isHovered: false });
  // Current interpolated values for silky smooth physics
  const currentRef = useRef({ x: 0, y: 0, angle: 0 });
  const animFrameRef = useRef<number | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth physics animation loop using Lerp
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    let idleTime = 0;

    const animate = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      // If user is hovering or moving, smoothly ease towards target
      if (target.isHovered) {
        current.x = lerp(current.x, target.x, 0.12);
        current.y = lerp(current.y, target.y, 0.12);
        current.angle = lerp(current.angle, target.angle, 0.15);
      } else {
        // When idle, add a subtle natural breathing oscillation
        idleTime += 0.028;
        const idleX = Math.sin(idleTime * 0.8) * 0.12;
        const idleY = Math.cos(idleTime * 1.2) * 0.08;

        current.x = lerp(current.x, idleX, 0.06);
        current.y = lerp(current.y, idleY, 0.06);
        current.angle = lerp(current.angle, 45, 0.05);
      }

      // Pronounced, realistic head turning angles (3D Yaw and Pitch)
      // Turning left/right: rotateY up to ±32 degrees
      const rotateY = current.x * 32;
      // Tilting up/down: rotateX up to ±24 degrees
      const rotateX = -current.y * 24;
      // Head lateral translation (parallax shifting inside the frame)
      const shiftX = current.x * 24;
      const shiftY = current.y * 18;

      // Frame 3D tilt & rotation
      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1000px) rotateX(${(
          rotateX * 0.35
        ).toFixed(2)}deg) rotateY(${(rotateY * 0.35).toFixed(
          2
        )}deg) scale3d(1.025, 1.025, 1.025)`;
      }

      // Inner head image 3D turning & translation
      if (headLayerRef.current) {
        headLayerRef.current.style.transform = `scale(1.26) translate3d(${shiftX.toFixed(
          2
        )}px, ${shiftY.toFixed(2)}px, 30px) rotateY(${rotateY.toFixed(
          2
        )}deg) rotateX(${rotateX.toFixed(2)}deg)`;
      }

      // Rotating cybernetic / neon ring pointing towards cursor
      if (ringRef.current) {
        ringRef.current.style.transform = `rotate(${current.angle.toFixed(1)}deg)`;
      }

      // Dynamic specular highlight reflection across the face
      if (glareRef.current) {
        const glarePercentX = (50 + current.x * 40).toFixed(1);
        const glarePercentY = (50 + current.y * 40).toFixed(1);
        glareRef.current.style.background = `radial-gradient(circle 160px at ${glarePercentX}% ${glarePercentY}%, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.06) 45%, transparent 75%)`;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Track mouse coordinates across the window/hero
  const handleMouseMove = useCallback((e: MouseEvent | React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    // Radius of influence (about 500px around the head for natural responsive tracking)
    const maxRadiusX = Math.max(window.innerWidth * 0.38, 380);
    const maxRadiusY = Math.max(window.innerHeight * 0.38, 320);

    const normX = Math.max(-1, Math.min(1, dx / maxRadiusX));
    const normY = Math.max(-1, Math.min(1, dy / maxRadiusY));

    // Calculate angle in degrees pointing from center to cursor
    const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;

    targetRef.current = {
      x: normX,
      y: normY,
      angle: angleDeg,
      isHovered: true,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    targetRef.current = {
      x: 0,
      y: 0,
      angle: 0,
      isHovered: false,
    };
  }, []);

  // Listen to window mouse events so the head tracks cursor anywhere in the hero viewport
  useEffect(() => {
    const onWindowMove = (e: MouseEvent) => {
      // Only track if mouse is within hero viewport range
      if (window.scrollY < window.innerHeight * 0.95) {
        handleMouseMove(e);
      } else {
        handleMouseLeave();
      }
    };

    window.addEventListener("mousemove", onWindowMove, { passive: true });
    return () => window.removeEventListener("mousemove", onWindowMove);
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div className="avatar-hero-container flex flex-col items-center justify-center mb-6 sm:mb-8 select-none z-10">
      {/* Outer Glow Halo & Interactive Group */}
      <div
        className="relative group cursor-pointer"
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Animated Neon Ambient Pulse Halo */}
        <div
          className="absolute -inset-4 rounded-full opacity-60 blur-2xl transition-all duration-700 group-hover:opacity-100 group-hover:blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 42, 59, 0.5) 0%, rgba(230, 180, 80, 0.25) 45%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* Outer Rotating Glowing Ring */}
        <div
          ref={ringRef}
          className="absolute -inset-1.5 rounded-full p-[2.5px] opacity-85 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              "conic-gradient(from 0deg, #ff2a3b 0%, rgba(255, 42, 59, 0.2) 25%, #e6b450 50%, rgba(0, 229, 255, 0.4) 75%, #ff2a3b 100%)",
            willChange: "transform",
          }}
          aria-hidden="true"
        />

        {/* 3D Perspective Card Container */}
        <div
          ref={containerRef}
          className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden p-1 shadow-[0_24px_60px_rgba(0,0,0,0.9)] bg-[#0d0e12] border border-white/15"
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {/* Internal Portrait Layer that moves & turns in 3D */}
          <div
            ref={headLayerRef}
            className="w-full h-full rounded-full overflow-hidden relative"
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <Image
              src="/images/hero/ajay-portrait.webp"
              alt="Ajay Kumar - 3D Artist Portrait with interactive head gaze tracking"
              fill
              sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 200px"
              className="object-cover object-top select-none pointer-events-none"
              priority
            />

            {/* Real-time Specular Glare Layer */}
            <div
              ref={glareRef}
              className="absolute inset-0 pointer-events-none mix-blend-overlay z-10"
              aria-hidden="true"
            />
          </div>

          {/* Inner Vignette / Rim Shadow for Depth */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_28px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(255,255,255,0.35)] z-20"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
