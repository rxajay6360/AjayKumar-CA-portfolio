"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Box, Layers, Film } from "lucide-react";

interface ShowcaseTile {
  id: string;
  title: string;
  category: string;
  tag: string;
  software: string;
  image?: string;
  bgClass: string;
  accentColor: string;
  link: string;
}

const tiles: ShowcaseTile[] = [
  {
    id: "t1",
    title: "Mjölnir",
    category: "Hero Prop",
    tag: "MAYA • SUBSTANCE",
    software: "Autodesk Maya / Substance Painter",
    image: "/images/projects/thors-hammer/hero.svg",
    bgClass: "from-[#250307] via-[#100608] to-[#050505]",
    accentColor: "#ff2a3b",
    link: "/#projects",
  },
  {
    id: "t2",
    title: "Ancient Shrine",
    category: "Environment",
    tag: "MYTHOLOGY ARCHITECTURE",
    software: "Maya / Arnold / PBR",
    image: "/images/projects/temple-environment/hero.svg",
    bgClass: "from-[#1a1408] via-[#0d0a05] to-[#040404]",
    accentColor: "#d49755",
    link: "/#projects",
  },
  {
    id: "t3",
    title: "1920 Gramophone",
    category: "Product Visualization",
    tag: "BRASS & MAHOGANY PBR",
    software: "Substance Painter / Maya",
    image: "/images/projects/vintage-gramophone/hero.svg",
    bgClass: "from-[#1d160c] via-[#0b0805] to-[#040405]",
    accentColor: "#e6b36a",
    link: "/#projects",
  },
  {
    id: "t4",
    title: "Banana Car",
    category: "Stylized 3D",
    tag: "HIGH-POLY CURVATURE",
    software: "Autodesk Maya",
    image: "/images/projects/banana-car/hero.svg",
    bgClass: "from-[#221c03] via-[#0d0b02] to-[#040405]",
    accentColor: "#facc15",
    link: "/#projects",
  },
  {
    id: "t5",
    title: "PBR Material Studies",
    category: "Substance Lab",
    tag: "4K TEXTURE SUITE",
    software: "Substance 3D Painter",
    image: "/images/projects/material-studies/hero.svg",
    bgClass: "from-[#160c1d] via-[#09050d] to-[#030205]",
    accentColor: "#a855f7",
    link: "/#projects",
  },
  {
    id: "t6",
    title: "Title Sequences",
    category: "Motion Graphics",
    tag: "KINETIC TYPOGRAPHY",
    software: "After Effects / Premiere",
    image: "/images/projects/motion-graphics/hero.svg",
    bgClass: "from-[#1d060b] via-[#0a0204] to-[#020202]",
    accentColor: "#ff2a3b",
    link: "/#projects",
  },
  {
    id: "t7",
    title: "Arnold Lookdev",
    category: "Lighting & ACEScg",
    tag: "VOLUMETRIC GOD RAYS",
    software: "Arnold Renderer",
    bgClass: "from-[#081a17] via-[#030c0b] to-[#020505]",
    accentColor: "#2dd4bf",
    link: "/#projects",
  },
  {
    id: "t8",
    title: "Clean Quads",
    category: "Wireframe Topology",
    tag: "SUBD PRODUCTION READY",
    software: "Maya Modeling",
    bgClass: "from-[#151518] via-[#0a0a0c] to-[#020202]",
    accentColor: "#ffffff",
    link: "/#projects",
  },
];

export default function TiltedShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalDist = rect.height - vh;
      if (totalDist <= 0) return;

      const p = Math.min(1, Math.max(0, -rect.top / totalDist * 1.5));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Compute smooth 3D transform formula matching reference HTML:
  // rotateX(58deg - p*58deg) rotateZ(-10deg + p*10deg) scale(0.85 + p*0.2)
  const rotX = 58 - progress * 58;
  const rotZ = -10 + progress * 10;
  const scale = 0.85 + progress * 0.2;

  return (
    <section
      ref={containerRef}
      className="relative h-[170vh] bg-[#050505] border-b border-[#171717] select-none"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden [perspective:1100px] px-4">
        {/* Ambient Overhead Light */}
        <div
          className="absolute top-10 w-[60vw] h-[20vh] bg-[#ff2a3b]/10 blur-[120px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        {/* Section Watermark / Label */}
        <div className="absolute top-8 left-6 md:left-12 flex items-center gap-3 z-10">
          <span className="text-[#ff2a3b] font-mono text-xs tracking-[0.25em]">02</span>
          <div className="w-6 h-[1px] bg-[#ff2a3b]/40" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#888888]">
            3D PORTFOLIO SHOWCASE &bull; SCROLL TO EXPLORE
          </span>
        </div>

        {/* The 3D Tilted Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 w-[min(1300px,120vw)] transition-transform duration-75 ease-linear will-change-transform"
          style={{
            transform: `rotateX(${rotX.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
          }}
        >
          {tiles.map((tile, i) => (
            <Link
              key={tile.id}
              href={tile.link}
              data-cursor="VIEW"
              className="group relative aspect-[16/10] rounded-2xl p-4 md:p-5 flex flex-col justify-between overflow-hidden border border-white/10 bg-gradient-to-br shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-[#ff2a3b]/70 hover:scale-[1.03] hover:shadow-[0_25px_60px_rgba(255,42,59,0.25)]"
            >
              {/* Tile Image Background if available */}
              {tile.image ? (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                    sizes="350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tile.bgClass} opacity-80 group-hover:opacity-100 transition-opacity`}
                />
              )}

              {/* Wireframe Grid Texture for Tile 8 */}
              {tile.id === "t8" && (
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"
                  aria-hidden="true"
                />
              )}

              {/* Top Tag & Number */}
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className="px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider font-semibold"
                  style={{
                    backgroundColor: `${tile.accentColor}25`,
                    color: tile.accentColor,
                    border: `1px solid ${tile.accentColor}40`,
                  }}
                >
                  {tile.tag}
                </span>
                <span className="text-[10px] font-mono text-white/50 group-hover:text-white transition-colors">
                  0{i + 1}
                </span>
              </div>

              {/* Bottom Title & Category */}
              <div className="relative z-10">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-white/70 mb-1">
                  {tile.category}
                </span>
                <h3 className="font-syne text-lg md:text-2xl font-bold tracking-tight text-white group-hover:text-[#ff2a3b] transition-colors leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  {tile.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Scroll Progress Indicator Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 z-10">
          <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase">
            3D PERSPECTIVE
          </span>
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ff2a3b] transition-all duration-75"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-[#ff2a3b] font-bold">
            {Math.round(progress * 100)}%
          </span>
        </div>
      </div>
    </section>
  );
}
