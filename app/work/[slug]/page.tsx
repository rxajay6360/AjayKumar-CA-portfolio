import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site-config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectGalleryViewer from "@/components/ProjectGalleryViewer";
import HeroShowcaseImage from "@/components/HeroShowcaseImage";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Box,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Cpu,
  CheckCircle,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: `Project Not Found — ${siteConfig.name}`,
    };
  }

  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: `${project.subtitle}. ${project.shortDescription}`,
    openGraph: {
      title: `${project.title} | ${siteConfig.name} 3D Portfolio`,
      description: project.shortDescription,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 675,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject =
    projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#eee]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Back Link Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#888888] hover:text-[#ff2a3b] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>
        </div>

        {/* Project Header Banner */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-2.5 py-1 rounded bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 text-[10px] font-mono tracking-widest text-[#ff2a3b] uppercase">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono tracking-widest text-[#888888]">
              YEAR {project.year}
            </span>
          </div>

          <h1 className="font-cinzel text-4xl sm:text-6xl text-white font-bold tracking-tight mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="font-cinzel text-lg sm:text-xl text-[#d49755] mb-8 max-w-3xl">
            {project.subtitle}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#0a0a0d] border border-white/[0.08] rounded-lg">
            <div>
              <span className="block text-[10px] font-mono tracking-widest uppercase text-[#666666] mb-1">
                SOFTWARE
              </span>
              <span className="text-xs font-semibold text-white">
                {project.software.join(" • ")}
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono tracking-widest uppercase text-[#666666] mb-1">
                DISCIPLINE
              </span>
              <span className="text-xs font-semibold text-white">
                {project.category}
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono tracking-widest uppercase text-[#666666] mb-1">
                PIPELINE
              </span>
              <span className="text-xs font-semibold text-[#ff2a3b]">
                PBR / ACEScg
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono tracking-widest uppercase text-[#666666] mb-1">
                ASSET STATUS
              </span>
              <span className="text-xs font-semibold text-green-400">
                Production Ready
              </span>
            </div>
          </div>
        </section>

        {/* Hero Render / Showcase Image */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <HeroShowcaseImage
            src={project.heroImage}
            alt={project.title}
            title={project.title}
          />
        </section>

        {/* Objective & Concept Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ff2a3b] block mb-2">
                THE BRIEF
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl text-white font-semibold">
                OBJECTIVE &amp; CONCEPT
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#aaaaaa] leading-relaxed">
              <p className="text-lg text-white font-medium">
                {project.shortDescription}
              </p>
              <p>{project.objective}</p>

              {/* Key Highlights */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-[#ff2a3b] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#cccccc]">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Before & After: Wireframe vs Beauty Render */}
        {project.wireframeImage && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ff2a3b] block mb-1">
                TOPOLOGY BREAKDOWN
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl text-white font-semibold">
                WIREFRAME VS. BEAUTY RENDER
              </h2>
              <p className="text-xs text-[#888888] font-mono mt-1">
                Drag the slider to inspect quad flow, support loops, and surface displacement.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage={project.wireframeImage}
              afterImage={project.heroImage}
              beforeLabel="WIREFRAME TOPOLOGY (MAYA)"
              afterLabel="FINAL ARNOLD BEAUTY RENDER"
              aspectRatio="aspect-[16/9]"
            />
          </section>
        )}

        {/* Texture Breakdown (If present) */}
        {project.textureBreakdown && project.textureBreakdown.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className="mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d49755] block mb-1">
                SUBSTANCE 3D PAINTER
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl text-white font-semibold">
                PBR TEXTURE MAPS &amp; MATERIAL LAYERS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.textureBreakdown.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded bg-[#0a0a0c] border border-white/[0.08] hover:border-[#d49755]/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-cinzel text-sm text-white font-semibold">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#d49755] px-1.5 py-0.5 rounded bg-[#d49755]/10 border border-[#d49755]/20">
                      {item.resolution}
                    </span>
                  </div>
                  <p className="text-xs text-[#888888] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4-Stage Production Process Breakdown */}
        {project.processStages && project.processStages.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className="mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ff2a3b] block mb-1">
                PIPELINE WALKTHROUGH
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl text-white font-semibold">
                EXECUTION &amp; CRAFTSMANSHIP
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.processStages.map((stage) => (
                <div
                  key={stage.phase}
                  className="p-6 rounded bg-[#09090c] border border-white/[0.06] hover:border-[#ff2a3b]/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-[#ff2a3b] bg-[#ff2a3b]/10 border border-[#ff2a3b]/30 px-2 py-0.5 rounded">
                      PHASE {stage.phase}
                    </span>
                    <h3 className="font-cinzel text-base text-white font-semibold">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#aaaaaa] leading-relaxed mb-4">
                    {stage.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {stage.techniques.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono text-[#777777] bg-white/[0.03] px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Gallery Views (Filtered to supplied assets only) */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
            <div className="mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ff2a3b] block mb-1">
                CAMERA ANGLES &amp; DETAILS
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl text-white font-semibold">
                ADDITIONAL RENDERS &amp; SHOTS
              </h2>
            </div>

            <ProjectGalleryViewer
              images={project.galleryImages}
              projectTitle={project.title}
            />
          </section>
        )}

        {/* Previous / Next Project Navigation Bar */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Prev Project */}
            <Link
              href={`/work/${prevProject.slug}`}
              className="p-6 rounded bg-[#0a0a0c] border border-white/[0.06] hover:border-[#ff2a3b] transition-all group flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#888888] group-hover:text-[#ff2a3b] transition-colors shrink-0">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[10px] font-mono tracking-widest uppercase text-[#666666]">
                  PREVIOUS PROJECT
                </span>
                <span className="font-cinzel text-base text-white font-semibold group-hover:text-[#ff2a3b] transition-colors truncate block">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="p-6 rounded bg-[#0a0a0c] border border-white/[0.06] hover:border-[#ff2a3b] transition-all group flex items-center justify-end text-right gap-4"
            >
              <div className="overflow-hidden">
                <span className="block text-[10px] font-mono tracking-widest uppercase text-[#666666]">
                  NEXT PROJECT
                </span>
                <span className="font-cinzel text-base text-white font-semibold group-hover:text-[#ff2a3b] transition-colors truncate block">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#888888] group-hover:text-[#ff2a3b] transition-colors shrink-0">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
