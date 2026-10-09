"use client";

import dynamic from "next/dynamic";
import { Box, Layers, Film, CheckCircle2 } from "lucide-react";

const MayaWireframe3D = dynamic(
  () => import("@/components/3d/MayaWireframe3D"),
  {
    ssr: false,
    loading: () => (
      <div className="h-44 w-full bg-[#0a0a0c] rounded border border-white/10 flex items-center justify-center text-xs font-mono text-[#666]">
        LOADING MAYA WIREFRAME...
      </div>
    ),
  }
);

const MaterialShaderSphere3D = dynamic(
  () => import("@/components/3d/MaterialShaderSphere3D"),
  {
    ssr: false,
    loading: () => (
      <div className="h-44 w-full bg-[#0a0a0c] rounded border border-white/10 flex items-center justify-center text-xs font-mono text-[#666]">
        LOADING MATERIAL SHADER...
      </div>
    ),
  }
);

const MotionShowcase = dynamic(() => import("@/components/MotionShowcase"), {
  ssr: false,
});

export default function SkillsArsenal() {
  const disciplines = [
    {
      id: "01",
      name: "AUTODESK MAYA",
      role: "3D Asset Creation & Lighting Pipeline",
      icon: Box,
      accent: "#ff2a3b",
      component: <MayaWireframe3D />,
      skills: [
        "3D modeling",
        "Environment modeling",
        "Product modeling",
        "Lighting and rendering",
        "SubD hard-surface topology",
        "UV unwrapping & packing",
      ],
      deliverables: ["Quad Topology", "SubD Assets", "Arnold Shaders"],
    },
    {
      id: "02",
      name: "SUBSTANCE 3D PAINTER",
      role: "PBR Material Authoring & Texturing",
      icon: Layers,
      accent: "#d49755",
      component: <MaterialShaderSphere3D />,
      skills: [
        "PBR materials",
        "Texture painting",
        "Roughness and metallic workflows",
        "Edge wear and surface detailing",
        "Procedural masks & grunge",
        "High-to-low texture baking",
      ],
      deliverables: ["4K PBR Maps", "Curvature Masks", "Normal Bakes"],
    },
    {
      id: "03",
      name: "MOTION GRAPHICS",
      role: "Kinetic Design & Broadcast Animation",
      icon: Film,
      accent: "#ff2a3b",
      component: <MotionShowcase />,
      skills: [
        "Animated typography",
        "Visual storytelling",
        "Cinematic transitions",
        "Motion design",
        "Speed graph easing",
        "Title sequences & reveals",
      ],
      deliverables: ["Speed Curves", "Audio Syncing", "Color Grading"],
    },
  ];

  return (
    <section id="skills" className="py-28 px-4 sm:px-8 md:px-12 border-b border-[#171717] relative bg-[#070709] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#ff2a3b] font-mono text-xs tracking-[0.25em]">04</span>
            <div className="w-6 h-[1px] bg-[#ff2a3b]/40" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#888888]">
              CORE TOOLSET &bull; SKILLS
            </span>
          </div>
          <h2 className="chrome text-center text-[clamp(44px,9vw,130px)] leading-[0.9] tracking-[-0.03em] mb-4">
            Skills
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] max-w-xl">
            Animated visual presentation of core disciplines across Autodesk Maya, Substance 3D Painter, and Motion Graphics.
          </p>
        </div>

        {/* 3 Discipline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {disciplines.map((disc) => {
            const Icon = disc.icon;
            return (
              <div
                key={disc.id}
                className="bg-[#0a0a0c] border border-white/[0.08] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#ff2a3b]/40 hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)] relative group rounded"
              >
                {/* Accent top stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] transition-colors"
                  style={{ backgroundColor: disc.accent }}
                />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded bg-white/[0.03] border border-white/10 flex items-center justify-center text-white group-hover:text-[#ff2a3b] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs tracking-widest text-[#555555]">
                      {disc.id}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg text-white font-semibold tracking-wider mb-1">
                    {disc.name}
                  </h3>
                  <p className="font-mono text-[10px] text-[#888888] tracking-wider mb-5">
                    {disc.role}
                  </p>

                  {/* Real-time Interactive Component Preview */}
                  <div className="mb-6">{disc.component}</div>

                  {/* Skills Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {disc.skills.map((skill) => (
                      <div key={skill} className="flex items-start gap-2.5 text-xs text-[#cccccc]">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: disc.accent }}
                        />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables Footer */}
                <div className="pt-5 border-t border-white/[0.06]">
                  <span className="block text-[9px] font-mono tracking-widest uppercase text-[#666666] mb-2">
                    KEY DELIVERABLES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {disc.deliverables.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded bg-[#121215] border border-white/[0.06] text-[9px] font-mono text-[#aaaaaa]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
