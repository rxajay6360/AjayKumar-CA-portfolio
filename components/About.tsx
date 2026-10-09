"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ArrowUpRight, Check, Compass, Cpu, GraduationCap, Sparkles } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"approach" | "tools" | "interests" | "background">("approach");

  const tabs = [
    { id: "approach", label: "3D Approach", icon: Compass },
    { id: "tools", label: "Software & Tools", icon: Cpu },
    { id: "interests", label: "Creative Interests", icon: Sparkles },
    { id: "background", label: "Education & Focus", icon: GraduationCap },
  ] as const;

  return (
    <section id="about" className="relative py-24 px-4 sm:px-8 md:px-12 border-b border-[#171717] bg-[#070707] overflow-hidden">
      {/* Background Volumetric Bloom */}
      <div
        className="absolute left-0 top-1/3 w-[45vw] h-[45vh] bg-[#ff2a3b]/8 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#ff2a3b] font-mono text-xs tracking-[0.25em]">03</span>
          <div className="w-6 h-[1px] bg-[#ff2a3b]/40" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#888888]">
            BIOGRAPHY &bull; CREATIVE IDENTITY
          </span>
        </div>

        {/* 2-Column Layout matching Reference HTML .about */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline, Bio & Socials */}
          <div className="lg:col-span-7">
            <h2 className="chrome text-[clamp(44px,8vw,120px)] leading-[0.9] tracking-[-0.03em] mb-6">
              About me
            </h2>

            <p className="text-base sm:text-lg text-[#c9c9c9] leading-relaxed max-w-2xl font-normal mb-6">
              I am <strong className="text-white font-semibold">{siteConfig.name}</strong>, a creative artist focused on 3D modeling, texturing, materials, environments, and motion graphics. I enjoy transforming ideas into visually striking digital experiences through detailed modeling, cinematic lighting, material development, and creative presentation.
            </p>

            <p className="text-sm sm:text-base text-[#9a9a9a] leading-relaxed max-w-2xl font-normal mb-8">
              Whether building hero prop assets with clean sub-d quad topology in Autodesk Maya, crafting weathered physical PBR shaders in Substance 3D Painter, or sequencing punchy kinetic title cards in After Effects, my focus remains constant: built with precision, finished with impact.
            </p>

            {/* Social Links matching HTML .soc */}
            <div className="flex items-center gap-3 mb-10 flex-wrap">
              <a
                href="https://www.artstation.com"
                target="_blank"
                rel="noopener noreferrer"
                title="ArtStation"
                className="w-10 h-10 rounded-full bg-[#ff2a3b] text-white font-bold text-xs flex items-center justify-center shadow-[0_0_18px_rgba(255,42,59,0.4)] transition-transform hover:scale-110 hover:-translate-y-0.5"
              >
                As
              </a>
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
                title="Behance"
                className="w-10 h-10 rounded-full bg-[#ff2a3b] text-white font-bold text-xs flex items-center justify-center shadow-[0_0_18px_rgba(255,42,59,0.4)] transition-transform hover:scale-110 hover:-translate-y-0.5"
              >
                Be
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#ff2a3b] text-white font-bold text-xs flex items-center justify-center shadow-[0_0_18px_rgba(255,42,59,0.4)] transition-transform hover:scale-110 hover:-translate-y-0.5"
              >
                in
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-10 h-10 rounded-full bg-[#ff2a3b] text-white font-bold text-xs flex items-center justify-center shadow-[0_0_18px_rgba(255,42,59,0.4)] transition-transform hover:scale-110 hover:-translate-y-0.5"
              >
                ig
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube Showreels"
                className="w-10 h-10 rounded-full bg-[#ff2a3b] text-white font-bold text-xs flex items-center justify-center shadow-[0_0_18px_rgba(255,42,59,0.4)] transition-transform hover:scale-110 hover:-translate-y-0.5"
              >
                yt
              </a>
            </div>

            {/* Interactive Detail Tabs */}
            <div className="border border-white/10 rounded-2xl bg-[#0e0e12]/80 backdrop-blur-md p-6 max-w-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4 overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-colors shrink-0 ${
                        isActive
                          ? "bg-[#ff2a3b] text-white font-bold shadow-[0_0_12px_rgba(255,42,59,0.4)]"
                          : "text-[#888888] hover:text-white"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {activeTab === "approach" && (
                <div className="space-y-3 text-sm text-[#aaaaaa]">
                  <p className="text-white font-medium">
                    &ldquo;Details matter. Feeling matters more.&rdquo;
                  </p>
                  <p>
                    Every 3D project begins with strong silhouette studies and real-world reference analysis. I prioritize non-destructive subdivision modeling, clean edge loops around high-deformation areas, and dedicated texel density management.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono text-[#cccccc]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a3b]" />
                      <span>Clean Quad Geometry</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a3b]" />
                      <span>ACEScg Color Space</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a3b]" />
                      <span>PBR Energy Conservation</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a3b]" />
                      <span>Cinematic 3-Point Lighting</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tools" && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-2.5 rounded bg-black/40 border border-white/5">
                      <span className="text-xs font-bold text-white block">Autodesk Maya</span>
                      <span className="text-[10px] font-mono text-[#ff2a3b]">Modeling &amp; Topology</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/5">
                      <span className="text-xs font-bold text-white block">Substance Painter</span>
                      <span className="text-[10px] font-mono text-[#ff2a3b]">PBR Texturing</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/5">
                      <span className="text-xs font-bold text-white block">Arnold Renderer</span>
                      <span className="text-[10px] font-mono text-[#ff2a3b]">Shading &amp; Lighting</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/5">
                      <span className="text-xs font-bold text-white block">After Effects</span>
                      <span className="text-[10px] font-mono text-[#ff2a3b]">Motion Graphics</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/5">
                      <span className="text-xs font-bold text-white block">Blender</span>
                      <span className="text-[10px] font-mono text-[#ff2a3b]">Asset Prototyping</span>
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/5">
                      <span className="text-xs font-bold text-white block">Premiere Pro</span>
                      <span className="text-[10px] font-mono text-[#ff2a3b]">Cinematic Edits</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "interests" && (
                <div className="space-y-2 text-sm text-[#aaaaaa]">
                  <p>
                    Passionate about mythology-inspired environment architecture, ancient stone and weathered metal materials, hero weapon prop designs, and cinematic title sequences with dramatic typography.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-mono text-white border border-white/10">
                      Mythological Architecture
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-mono text-white border border-white/10">
                      Hero Prop Design
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-mono text-white border border-white/10">
                      Kinetic Typography
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-mono text-white border border-white/10">
                      Surface Weathering
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "background" && (
                <div className="space-y-3 text-sm text-[#aaaaaa]">
                  <div className="border-l-2 border-[#ff2a3b] pl-3 py-1">
                    <span className="text-xs font-mono text-[#ff2a3b] uppercase block">
                      Core Specialization
                    </span>
                    <span className="text-sm font-semibold text-white block">
                      3D Modeling, Texturing &amp; Motion Design
                    </span>
                    <p className="text-xs text-[#888888] mt-0.5">
                      Rigorous focus on high-fidelity hard-surface techniques, physical material science, and film-grade visual pacing.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Floating Badges Container matching Reference HTML .float */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px]">
            {/* Center Portrait Card with Monogram */}
            <div className="relative w-full max-w-xs aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#180406] via-[#0d0d10] to-[#050505] shadow-[0_20px_60px_rgba(0,0,0,0.8)] group z-10">
              <Image
                src="/images/hero-bg.jpeg"
                alt="C.A. Aajay Kumar — 3D Artist"
                fill
                className="object-cover object-top filter contrast-[1.05] opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                sizes="340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Monogram Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 font-syne text-xs font-bold text-[#ff2a3b]">
                CA
              </div>

              {/* Bottom Metadata Slate */}
              <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] font-mono">
                <span className="text-white font-medium">C.A. AAJAY KUMAR</span>
                <span className="text-[#ff2a3b] font-bold">3D ARTIST</span>
              </div>
            </div>

            {/* Floating Glassmorphism Tool Badges matching HTML .float i */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Badge 1: Maya */}
              <i
                className="animate-fl absolute w-14 h-14 rounded-2xl flex items-center justify-center font-syne font-bold text-lg not-italic bg-white/[0.08] border border-white/20 backdrop-blur-md text-[#ff2a3b] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                style={{ top: "4%", left: "10%", animationDelay: "0s" }}
              >
                Ma
              </i>

              {/* Badge 2: Substance Painter */}
              <i
                className="animate-fl absolute w-14 h-14 rounded-2xl flex items-center justify-center font-syne font-bold text-lg not-italic bg-white/[0.08] border border-white/20 backdrop-blur-md text-[#d49755] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                style={{ top: "12%", right: "8%", animationDelay: "-1.5s" }}
              >
                Pt
              </i>

              {/* Badge 3: After Effects */}
              <i
                className="animate-fl absolute w-14 h-14 rounded-2xl flex items-center justify-center font-syne font-bold text-lg not-italic bg-white/[0.08] border border-white/20 backdrop-blur-md text-[#3b9cff] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                style={{ top: "48%", left: "-4%", animationDelay: "-3s" }}
              >
                Ae
              </i>

              {/* Badge 4: Arnold */}
              <i
                className="animate-fl absolute w-14 h-14 rounded-2xl flex items-center justify-center font-syne font-bold text-lg not-italic bg-white/[0.08] border border-white/20 backdrop-blur-md text-[#10b981] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                style={{ bottom: "16%", right: "-2%", animationDelay: "-4.5s" }}
              >
                Ar
              </i>

              {/* Badge 5: 3D */}
              <i
                className="animate-fl absolute w-14 h-14 rounded-2xl flex items-center justify-center font-syne font-bold text-lg not-italic bg-white/[0.08] border border-white/20 backdrop-blur-md text-white shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                style={{ bottom: "4%", left: "18%", animationDelay: "-2.2s" }}
              >
                3D
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
