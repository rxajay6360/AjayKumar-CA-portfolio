"use client";

import Link from "next/link";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import ProjectVideoPlayer from "@/components/ProjectVideoPlayer";

export default function ArtistShowreel() {
  return (
    <section className="showreel-section html-section" id="showreel">
      {/* Background Ambient Glow */}
      <div className="showreel-ambient-glow" aria-hidden="true" />

      <div className="showreel-container">
        {/* Section Header */}
        <div className="showreel-header">
          <div className="showreel-badge">
            <Sparkles size={14} className="showreel-badge-icon" />
            <span>OFFICIAL DEMO REEL</span>
          </div>
          <h2 className="chrome section-heading">3D ARTIST SHOWREEL</h2>
          <p className="showreel-subtitle">
            Cinematic turntable breakdowns highlighting precision hard-surface topology, 
            sub-division modeling, photorealistic PBR material authoring, and lookdev lighting by C.A. Ajay Kumar.
          </p>
        </div>

        {/* Master Showcase Cinema Player */}
        <div className="showreel-cinema-stage">
          <div className="showreel-player-halo" aria-hidden="true" />
          
          <div className="showreel-player-card">
            <ProjectVideoPlayer
              src="/videos/projects/hanuman-gadha/hanuman-showreel.mp4"
              poster="/videos/projects/hanuman-gadha/poster.jpg"
              title="C.A. AJAY KUMAR — 3D ARTIST SHOWREEL"
              aspectRatio="aspect-[16/9]"
              className="showreel-main-player"
            />

            {/* Showcase Details Metadata Bar */}
            <div className="showreel-meta-bar">
              <div className="showreel-meta-info">
                <div className="showreel-meta-tags">
                  <span className="showreel-cat-pill">FEATURED REEL</span>
                  <span className="showreel-specs-pill">1080p 60fps • Arnold & PBR Lookdev</span>
                </div>
                <h3 className="showreel-reel-title">C.A. AJAY KUMAR — 3D ARTIST DEMO REEL</h3>
                <p className="showreel-reel-desc">
                  Featuring production-ready game and cinematic assets with clean edge flow, 
                  custom procedural wear, 4K multi-channel PBR textures, and studio lighting setups.
                </p>

                {/* Software tags */}
                <div className="showreel-software-tags">
                  {["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop", "Premiere Pro"].map((sw) => (
                    <span key={sw} className="showreel-sw-badge">
                      <CheckCircle2 size={11} className="showreel-sw-icon" />
                      <span>{sw}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="showreel-meta-actions">
                <Link
                  href="/#contact"
                  className="showreel-case-btn"
                  title="Collaborate with C.A. Ajay Kumar"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
