"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ModelViewerModal from "./3d/ModelViewerModal";
import { ArrowRight, Box, Layers, LayoutGrid, Eye, Sparkles } from "lucide-react";

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "modeling" | "texturing" | "environments" | "motion"
  >("all");
  const [viewMode, setViewMode] = useState<"stack" | "grid">("stack");
  const [selected3DProject, setSelected3DProject] = useState<Project | null>(null);
  const [wireframeToggles, setWireframeToggles] = useState<Record<string, boolean>>({});

  const filterButtons = [
    { label: "ALL PROJECTS", value: "all" },
    { label: "3D MODELING", value: "modeling" },
    { label: "PBR TEXTURING", value: "texturing" },
    { label: "ENVIRONMENTS", value: "environments" },
    { label: "MOTION GRAPHICS", value: "motion" },
  ] as const;

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.filterCategory === activeFilter;
  });

  const toggleWireframe = (slug: string) => {
    setWireframeToggles((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-8 md:px-12 bg-[#050505] border-b border-[#171717] overflow-hidden select-none">
      {/* Background Volumetric Glow */}
      <div
        className="absolute right-10 top-1/4 w-[50vw] h-[50vh] bg-[#ff2a3b]/8 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-[#ff2a3b] font-mono text-xs tracking-[0.25em]">05</span>
          <div className="w-6 h-[1px] bg-[#ff2a3b]/40" />
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#888888]">
            PORTFOLIO SHOWCASE &bull; MAYA &bull; SUBSTANCE &bull; MOTION
          </span>
        </div>

        {/* Big Editorial Chrome Heading from Reference HTML */}
        <h2 className="chrome text-center text-[clamp(44px,9.5vw,140px)] leading-[0.9] tracking-[-0.03em] mb-12">
          Projects
        </h2>

        {/* Filter Toolbar & View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {filterButtons.map((btn) => {
              const isActive = activeFilter === btn.value;
              return (
                <button
                  key={btn.value}
                  onClick={() => setActiveFilter(btn.value)}
                  className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#ff2a3b] text-white font-bold shadow-[0_0_16px_rgba(255,42,59,0.4)]"
                      : "bg-[#111114] text-[#888888] border border-white/10 hover:text-white hover:border-white/20"
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle: Stack Deck vs 3D Grid */}
          <div className="flex items-center gap-1 bg-[#101014] p-1 rounded-full border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setViewMode("stack")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                viewMode === "stack"
                  ? "bg-[#ff2a3b] text-white font-semibold shadow-[0_0_10px_#ff2a3b]"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>STACK DECK</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[#ff2a3b] text-white font-semibold shadow-[0_0_10px_#ff2a3b]"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>GRID VIEW</span>
            </button>
          </div>
        </div>

        {/* 1. CINEMATIC STACK VIEW (Directly faithfully recreating HTML .stack .proj) */}
        {viewMode === "stack" && (
          <div className="max-w-[1150px] mx-auto pb-[15vh]">
            {filteredProjects.map((project, idx) => {
              const isWireframeActive = !!wireframeToggles[project.slug];
              const displayImage =
                isWireframeActive && project.wireframeImage
                  ? project.wireframeImage
                  : project.heroImage;

              return (
                <article
                  key={project.slug}
                  className="sticky bg-[#0a0a0d] border-2 border-white/10 rounded-[30px] p-6 sm:p-8 min-h-[560px] lg:h-[72vh] mb-[12vh] shadow-[0_-12px_45px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#ff2a3b]/50 group"
                  style={{
                    top: `calc(90px + ${idx * 26}px)`,
                  }}
                >
                  {/* Card Header matching Reference HTML .proj header */}
                  <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <b className="font-syne font-extrabold text-4xl sm:text-5xl text-[#ff2a3b] drop-shadow-[0_0_15px_rgba(255,42,59,0.4)]">
                        0{idx + 1}
                      </b>
                      <div>
                        <small className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#888888]">
                          {project.category}
                        </small>
                        <h3 className="font-syne font-bold text-xl sm:text-2xl text-white group-hover:text-[#ff2a3b] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelected3DProject(project)}
                        className="pill o text-xs py-2 px-4 flex items-center gap-1.5"
                      >
                        <Box className="w-3.5 h-3.5" />
                        <span>3D TURNTABLE</span>
                      </button>

                      <Link
                        href={`/work/${project.slug}`}
                        className="pill text-xs py-2 px-5 flex items-center gap-1.5"
                      >
                        <span>CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </header>

                  {/* Dual Split Shots Layout matching Reference HTML .shots */}
                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5 min-h-0">
                    {/* Left Shot: 1/3 (Metadata, Specs & Shaders) */}
                    <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-[#121216] p-5 sm:p-6 flex flex-col justify-between shadow-inner">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#ff2a3b] block mb-2">
                          ASSET SPECIFICATIONS
                        </span>
                        <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed mb-4">
                          {project.shortDescription}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono">
                          <div className="flex justify-between text-[#888888]">
                            <span>SOFTWARE:</span>
                            <span className="text-white font-medium">
                              {project.software.slice(0, 2).join(" & ")}
                            </span>
                          </div>
                          <div className="flex justify-between text-[#888888]">
                            <span>RENDERER:</span>
                            <span className="text-white font-medium">
                              {project.software.find((s) => s.includes("Arnold")) || "Arnold ACEScg"}
                            </span>
                          </div>
                          <div className="flex justify-between text-[#888888]">
                            <span>PIPELINE YEAR:</span>
                            <span className="text-[#d49755] font-semibold">{project.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Wireframe Switcher for projects with wireframe */}
                      {project.wireframeImage && (
                        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase text-[#888888]">
                            TOPOLOGY INSPECTION:
                          </span>
                          <button
                            onClick={() => toggleWireframe(project.slug)}
                            className={`px-3 py-1 rounded text-[10px] font-mono font-semibold uppercase tracking-wider transition-colors ${
                              isWireframeActive
                                ? "bg-[#ff2a3b] text-white shadow-[0_0_8px_#ff2a3b]"
                                : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                          >
                            {isWireframeActive ? "Show Render" : "Show Wireframe"}
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Right Shot: 2/3 (High-Detail Hero Render / SVG / Turntable teaser) */}
                    <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-black/60 overflow-hidden relative group/shot min-h-[260px] sm:min-h-[340px]">
                      <Image
                        src={displayImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/shot:scale-105"
                        sizes="(max-width: 1024px) 100vw, 800px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Overlay Badge */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white tracking-wider">
                          {isWireframeActive ? "TOPOLOGY: SUBD QUAD MESH" : "PBR MATERIAL PASS"}
                        </span>
                        <span className="text-[10px] font-mono text-[#ff2a3b] font-bold tracking-widest uppercase">
                          4K ULTRA DETAIL &bull; ACEScg
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* 2. GRID OVERVIEW VIEW */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} priority={idx < 3} />
            ))}
          </div>
        )}

        {/* Replacement Note / Clean workflow hint */}
        <div className="mt-8 p-4 rounded-xl bg-[#0a0a0e] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-[#777777] font-mono gap-2">
          <span>
            DATA FILE: <code className="text-[#ff2a3b]">data/projects.ts</code> &bull; ALL ASSETS MODULAR &amp; EDITABLE
          </span>
          <span className="text-[#d49755]">CLICK &ldquo;3D TURNTABLE&rdquo; TO ROTATE MODELS IN REAL-TIME</span>
        </div>
      </div>

      {/* Interactive 3D Model Modal */}
      {selected3DProject && (
        <ModelViewerModal
          isOpen={!!selected3DProject}
          onClose={() => setSelected3DProject(null)}
          projectTitle={selected3DProject.title}
          category={selected3DProject.category}
        />
      )}
    </section>
  );
}
