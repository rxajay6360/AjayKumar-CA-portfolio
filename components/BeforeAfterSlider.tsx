"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "WIREFRAME / TOPOLOGY",
  afterLabel = "BEAUTY / PBR RENDER",
  aspectRatio = "aspect-[16/10]",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-lg border border-white/10 bg-[#08080a] ${aspectRatio} ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* "After" Image (Underneath - Full Width: Beauty Render) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded bg-[#050505]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#eeeeee] uppercase z-10">
          {afterLabel}
        </div>
      </div>

      {/* "Before" Image (Clipped overlay: Wireframe) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded bg-[#050505]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#ff2a3b] uppercase z-10 whitespace-nowrap">
          {beforeLabel}
        </div>
      </div>

      {/* Vertical Splitter Divider Line & Thumb */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(255,42,59,0.8)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Glowing Splitter Thumb (From Stitch Spec: dual-arrow thumb glowing in #ff2a3b) */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#ff2a3b] text-white flex items-center justify-center text-[10px] font-bold shadow-[0_0_20px_#ff2a3b,0_0_35px_rgba(255,42,59,0.7)] border border-white">
          ⇄
        </div>
      </div>
    </div>
  );
}
