"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, Box } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ModelViewerModal from "./3d/ModelViewerModal";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [is3DModalOpen, setIs3DModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group bg-[#0a0a0c] border border-white/[0.08] transition-all duration-300 hover:border-[#ff2a3b]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,42,59,0.25)] flex flex-col justify-between overflow-hidden relative rounded"
        data-cursor="VIEW"
      >
        {/* Dynamic Light Sheen on Pointer Hover */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-gradient-to-tr from-transparent via-white/[0.03] to-[#ff2a3b]/10"
          aria-hidden="true"
        />

        {/* Project Visual Container */}
        <Link
          href={`/work/${project.slug}`}
          className="block relative aspect-[16/10] overflow-hidden bg-[#0d0d10]"
        >
          {/* Project Thumbnail Image */}
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              className="object-cover transition-opacity duration-300"
            />
          </div>

          {/* Ambient Dark Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

          {/* Top Floating Category Badge */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#050505]/80 backdrop-blur-md border border-white/10 text-[9px] font-mono tracking-widest text-[#cccccc] uppercase z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a3b]" />
            <span>{project.category}</span>
          </div>

          {/* Top Right Year Pill */}
          <div className="absolute top-3.5 right-3.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-[9px] font-mono text-[#888888] z-10">
            {project.year}
          </div>

          {/* Hover Action Flare Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/45 backdrop-blur-[2px] z-10">
            <span className="px-4 py-2 border border-[#ff2a3b] bg-[#ff2a3b]/20 text-white font-cinzel text-xs font-semibold tracking-[0.2em] uppercase flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,42,59,0.5)]">
              VIEW CASE STUDY <ArrowUpRight className="w-3.5 h-3.5 text-[#ff2a3b]" />
            </span>
          </div>
        </Link>

        {/* Card Content Footer */}
        <div className="p-6 flex flex-col flex-1 justify-between bg-gradient-to-b from-[#0a0a0c] to-[#070708] z-10">
          <div>
            {/* Software Badges */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.software.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[9px] font-mono tracking-wider text-[#999999]"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Project Title */}
            <h3 className="font-cinzel text-xl text-white font-semibold tracking-wide mb-2 group-hover:text-[#ff2a3b] transition-colors">
              <Link href={`/work/${project.slug}`}>{project.title}</Link>
            </h3>

            {/* Short Description */}
            <p className="text-xs text-[#888888] leading-relaxed line-clamp-2 mb-4">
              {project.shortDescription}
            </p>
          </div>

          {/* Card Footer Actions */}
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <Link
              href={`/work/${project.slug}`}
              className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#ff2a3b] flex items-center gap-1 transition-colors hover:text-white"
            >
              <span>CASE STUDY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Real-time 3D Inspection Trigger */}
            <button
              onClick={() => setIs3DModalOpen(true)}
              className="px-2.5 py-1 rounded bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 text-[10px] font-mono text-white flex items-center gap-1.5 hover:bg-[#ff2a3b] hover:shadow-[0_0_15px_rgba(255,42,59,0.4)] transition-all"
              data-cursor="3D VIEW"
            >
              <Box className="w-3 h-3 text-[#ff2a3b] group-hover:text-white" />
              <span>3D VIEW</span>
            </button>
          </div>
        </div>
      </motion.article>

      {/* Real-time 3D Modal Viewer */}
      <ModelViewerModal
        isOpen={is3DModalOpen}
        onClose={() => setIs3DModalOpen(false)}
        projectTitle={project.title}
        category={project.category}
      />
    </>
  );
}
