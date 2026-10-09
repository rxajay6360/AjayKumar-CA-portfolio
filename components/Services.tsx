"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Box, Layers, Film } from "lucide-react";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // Formula matching reference HTML: clamp((vh*0.95 - r.top) / (vh*0.6))
      const p = Math.min(1, Math.max(0, (vh * 0.95 - rect.top) / (vh * 0.6)));
      setScrollProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const services = [
    {
      num: "DISCIPLINE 01",
      icon: Box,
      title: "3D Modeling & Topology",
      desc: "Subdivision surface and hard-surface modeling in Autodesk Maya. Clean quad topology, prop design, and mythology-inspired environments built for AAA production pipelines.",
      barText: "Maya • Retopology • SubD Modeling",
      barBg: "bg-[#25080c] text-[#ff6b7a] border-t border-[#ff2a3b]/30",
      accent: "#ff2a3b",
    },
    {
      num: "DISCIPLINE 02",
      icon: Layers,
      title: "PBR Texturing & Shaders",
      desc: "Photorealistic physical material authoring in Substance 3D Painter. Micro-roughness variation, multi-layer oxidation, edge wear, and tactile grunge calibrated for Arnold and real-time engines.",
      barText: "Substance Painter • PBR Maps • Arnold",
      barBg: "bg-[#1f1406] text-[#e6b36a] border-t border-[#d49755]/30",
      accent: "#d49755",
    },
    {
      num: "DISCIPLINE 03",
      icon: Film,
      title: "Motion Graphics & Lighting",
      desc: "Kinetic typography, animated logo reveals, cinematic title sequences, and video work timed to perfection with dynamic speed graphs and atmospheric color grading in After Effects.",
      barText: "After Effects • Title Design • 3D Motion",
      barBg: "bg-[#0b1b17] text-[#5eead4] border-t border-[#14b8a6]/30",
      accent: "#14b8a6",
    },
  ];

  // 3D perspective fold-in formula from reference HTML:
  // rotateX((1 - p) * 35deg) translateY((1 - p) * 60px) opacity(0.3 + p * 0.7)
  const rotX = (1 - scrollProgress) * 35;
  const transY = (1 - scrollProgress) * 60;
  const opacity = 0.3 + scrollProgress * 0.7;

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-28 px-4 sm:px-8 md:px-12 bg-[#09090c] border-b border-[#171717] overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div
        className="absolute left-1/2 top-10 -translate-x-1/2 w-[60vw] h-[25vh] bg-[#ff2a3b]/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-[#ff2a3b] font-mono text-xs tracking-[0.25em]">04</span>
          <div className="w-6 h-[1px] bg-[#ff2a3b]/40" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#888888]">
            CORE SPECIALIZATIONS
          </span>
        </div>

        {/* Big Editorial Chrome Heading from HTML */}
        <h2 className="chrome text-center text-[clamp(44px,9vw,140px)] leading-[0.9] tracking-[-0.03em] mb-16">
          Services
        </h2>

        {/* 3D Fold Cards Grid matching HTML .cards & .card */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto [perspective:1200px]"
        >
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.num}
                className="group relative bg-[#101014] border-2 border-white/10 rounded-[28px] overflow-hidden min-h-[380px] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-[#ff2a3b]/60 hover:shadow-[0_25px_60px_rgba(255,42,59,0.2)] hover:-translate-y-2 will-change-transform"
                style={{
                  transform: `rotateX(${rotX.toFixed(2)}deg) translateY(${transY.toFixed(2)}px)`,
                  opacity: opacity,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* Card Inner Content */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#888888] uppercase">
                        {svc.num}
                      </span>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-black/40 group-hover:scale-110 transition-transform"
                        style={{ color: svc.accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-syne font-extrabold text-2xl text-white tracking-tight mb-4 group-hover:text-[#ff2a3b] transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-sm text-[#9e9ea6] leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="#projects"
                      className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#cccccc] group-hover:text-[#ff2a3b] transition-colors"
                    >
                      <span>VIEW PORTFOLIO WORK</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Bottom Bar matching HTML .card .bar */}
                <div className={`px-7 py-3.5 font-mono text-[11px] font-semibold tracking-wider uppercase ${svc.barBg}`}>
                  {svc.barText}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
