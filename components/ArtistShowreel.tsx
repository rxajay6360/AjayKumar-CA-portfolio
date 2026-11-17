"use client";

import { Sparkles, CheckCircle2, ExternalLink } from "lucide-react";

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
          <h2 className="chrome showreel-heading">3D ARTIST SHOWREEL</h2>
          <p className="showreel-subtitle">
            Cinematic turntable breakdowns highlighting precision hard-surface topology, 
            sub-division modeling, photorealistic PBR material authoring, and lookdev lighting by C.A. Ajay Kumar.
          </p>
        </div>

        {/* Master Showcase Cinema Player */}
        <div className="showreel-cinema-stage">
          <div className="showreel-player-halo" aria-hidden="true" />
          <div className="showreel-player-card">
            {/* Embedded YouTube Player */}
            <div className="relative w-full aspect-[16/9] bg-black overflow-hidden rounded-t-[20px]">
              <iframe
                src="https://www.youtube.com/embed/WNWs30LTdTc?rel=0&modestbranding=1&playsinline=1"
                title="C.A. AJAY KUMAR — 3D ARTIST SHOWREEL"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* Showcase Details Metadata Bar */}
            <div className="showreel-meta-bar">
              <div className="showreel-meta-info">
                <div className="showreel-meta-tags">
                  <span className="showreel-cat-pill">OFFICIAL REEL</span>
                  <span className="showreel-specs-pill">1080p HD • 03:41 • Arnold & PBR Lookdev</span>
                </div>
                <h3 className="showreel-reel-title">C.A. AJAY KUMAR — 3D ARTIST SHOWREEL</h3>
                <p className="showreel-reel-desc">
                  Official 2026 master showreel featuring high-fidelity hard-surface modeling, 
                  production-ready topology, procedural textures, and cinematic lookdev lighting.
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

              {/* Action Buttons */}
              <div className="showreel-meta-actions">
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-showreel-modal"))}
                  className="showreel-case-btn"
                  title="Watch Showreel in Cinema Lightbox Popup"
                >
                  <Sparkles size={14} />
                  <span>Popup Cinema Mode ↗</span>
                </button>

                <a
                  href="https://youtu.be/WNWs30LTdTc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showreel-case-btn"
                  title="Watch Showreel on YouTube"
                >
                  <ExternalLink size={14} />
                  <span>YouTube ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
