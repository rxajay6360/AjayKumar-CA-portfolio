"use client";

import { Eye, Box, Grid, Palette, Sun, Film } from "lucide-react";
import { motion } from "framer-motion";

export default function WorkflowTimeline() {
  const steps = [
    {
      step: "01",
      title: "Concept & References",
      tool: "Moodboard & Silhouettes",
      desc: "Gathering visual references, architectural studies, and sketching proportions.",
      icon: Eye,
    },
    {
      step: "02",
      title: "3D Modeling in Maya",
      tool: "SubD & Hard-Surface",
      desc: "Blocking out shapes, refining edge loops, and maintaining clean quad topology.",
      icon: Box,
    },
    {
      step: "03",
      title: "UV Mapping",
      tool: "UDIM Unwrapping",
      desc: "Unwrapping UV shells, balancing texel density, and hiding seams.",
      icon: Grid,
    },
    {
      step: "04",
      title: "Texturing in Substance",
      tool: "PBR Material Authoring",
      desc: "Baking mesh maps, procedural curvature masks, roughness variation, and hand wear.",
      icon: Palette,
    },
    {
      step: "05",
      title: "Lighting & Rendering",
      tool: "Arnold Shading",
      desc: "Setting key, fill, and rim lights with atmospheric volumetric fog in ACEScg.",
      icon: Sun,
    },
    {
      step: "06",
      title: "Motion & Presentation",
      tool: "After Effects & Grading",
      desc: "Camera sequencing, kinetic typography, turntables, and final editorial cut.",
      icon: Film,
    },
  ];

  return (
    <section id="workflow" className="py-24 border-b border-[#171717] relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[#ff2a3b] font-mono text-xs tracking-[0.25em]">05</span>
              <div className="w-6 h-[1px] bg-[#ff2a3b]/40" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#888888]">
                PRODUCTION PIPELINE
              </span>
            </div>
            <h2 className="chrome text-[clamp(40px,7.5vw,100px)] leading-[0.9] tracking-[-0.03em] mb-2">
              Workflow
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#888888] max-w-md">
            A methodical six-stage pipeline ensuring high-fidelity visual results from initial blockout
            to the polished final frame.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Hidden on Mobile) */}
        <div className="hidden lg:block relative">
          {/* Animated Connecting Line */}
          <div className="absolute top-[42px] left-[5%] right-[5%] h-[2px] bg-white/[0.08] z-0 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-[#ff2a3b]/30 via-[#ff2a3b] to-[#d49755] shadow-[0_0_12px_#ff2a3b]"
            />
          </div>

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <motion.div
                  key={st.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Node */}
                  <div className="w-20 h-20 rounded bg-[#0a0a0c] border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-[#ff2a3b] group-hover:shadow-[0_0_25px_rgba(255,42,59,0.5)] group-hover:scale-105 transition-all duration-300 relative">
                    <Icon className="w-7 h-7 text-[#ff2a3b] transition-transform group-hover:rotate-6" />
                    <span className="absolute -top-2.5 bg-[#050505] px-1.5 font-mono text-[10px] text-[#888888] border border-white/10 group-hover:text-white group-hover:border-[#ff2a3b]">
                      {st.step}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-cinzel text-sm text-white font-semibold tracking-wider mb-1 group-hover:text-[#ff2a3b] transition-colors">
                    {st.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#d49755] uppercase tracking-wider block mb-2">
                    {st.tool}
                  </span>
                  <p className="text-[11px] text-[#777777] leading-relaxed">
                    {st.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline (Hidden on Desktop) */}
        <div className="lg:hidden relative border-l-2 border-[#ff2a3b]/40 ml-4 pl-6 space-y-10">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-[#0a0a0c] border-2 border-[#ff2a3b] flex items-center justify-center text-[9px] font-mono font-bold text-white shadow-[0_0_10px_#ff2a3b]">
                  {st.step.substring(1)}
                </div>

                <div className="bg-[#0a0a0c] border border-white/[0.08] p-5 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-[#ff2a3b]" />
                    <h3 className="font-cinzel text-base text-white font-semibold">
                      {st.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#d49755] uppercase tracking-wider block mb-2">
                    {st.tool}
                  </span>
                  <p className="text-xs text-[#888888] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
