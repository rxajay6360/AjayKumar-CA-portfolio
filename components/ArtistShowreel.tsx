"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Film, Play, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import ProjectVideoPlayer from "@/components/ProjectVideoPlayer";

interface ShowreelItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  videoSrc: string;
  poster: string;
  projectSlug: string;
  software: string[];
  specs: string;
}

const SHOWREELS: ShowreelItem[] = [
  {
    id: "hanuman-gadha",
    num: "01",
    title: "HANUMAN GADHA",
    subtitle: "Mythological divine hero prop with ornate filigree gold engravings and battle-tested bronze wear.",
    category: "3D HERO PROP",
    videoSrc: "/videos/projects/hanuman-gadha/hanuman-showreel.mp4",
    poster: "/videos/projects/hanuman-gadha/poster.jpg",
    projectSlug: "hanuman-gadha",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop"],
    specs: "1080p 60fps • 4K PBR Lookdev",
  },
  {
    id: "kgf-narachi-gate",
    num: "02",
    title: "KGF NARACHI GATE",
    subtitle: "Massive industrial gate environment inspired by K.G.F aesthetics featuring heavy rusted steel.",
    category: "ENVIRONMENT ART",
    videoSrc: "/videos/projects/kgf-narachi-gate/kgf-show-reel.mp4",
    poster: "/videos/projects/kgf-narachi-gate/poster.jpg",
    projectSlug: "kgf-narachi-gate",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop"],
    specs: "1080p 60fps • Hard Surface Environment",
  },
  {
    id: "futuristic-bike",
    num: "03",
    title: "FUTURISTIC SINGLE WHEEL BIKE",
    subtitle: "Cyberpunk monowheel vehicle with complex mechanical suspension, disc brakes, and neon telemetry.",
    category: "HARD SURFACE VEHICLE",
    videoSrc: "/videos/projects/futuristic-single-wheel-bike/bike-showreel.mp4",
    poster: "/videos/projects/futuristic-single-wheel-bike/poster.jpg",
    projectSlug: "futuristic-single-wheel-bike",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop"],
    specs: "1080p 60fps • Complex Mechanical Rig",
  },
  {
    id: "banana-car",
    num: "04",
    title: "BANANA BUGGY CAR",
    subtitle: "Whimsical stylized concept vehicle combining an organic curved hull with all-terrain chassis.",
    category: "STYLIZED VEHICLE",
    videoSrc: "/videos/projects/banana-car/banana-buggy-showreel.mp4",
    poster: "/videos/projects/banana-car/poster.jpg",
    projectSlug: "banana-car",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop"],
    specs: "1080p 60fps • Stylized Lookdev",
  },
  {
    id: "vintage-gramophone",
    num: "05",
    title: "VINTAGE GRAMOPHONE",
    subtitle: "Turn-of-the-century acoustic phonograph featuring hand-hammered brass horn and mahogany wood.",
    category: "HERITAGE PROP",
    videoSrc: "/videos/projects/vintage-gramophone/gramophone-showreel.mp4",
    poster: "/videos/projects/vintage-gramophone/poster.jpg",
    projectSlug: "vintage-gramophone",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop"],
    specs: "1080p 60fps • Ornate Brass & Wood PBR",
  },
  {
    id: "after-dark",
    num: "06",
    title: "AFTER DARK LOUNGE",
    subtitle: "Atmospheric nightclub bar interior with refractive glass bottles, plush velvet, and neon tube lighting.",
    category: "INTERIOR ENVIRONMENT",
    videoSrc: "/videos/projects/after-dark/after-dark-showreel.mp4",
    poster: "/videos/projects/after-dark/poster.jpg",
    projectSlug: "after-dark",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop"],
    specs: "1080p 60fps • Volumetric Cinematic Lighting",
  },
  {
    id: "radio",
    num: "07",
    title: "VINTAGE TRANSISTOR RADIO",
    subtitle: "Mid-century analog portable radio with tactile dials, textured speaker cloth, and stitched leather.",
    category: "AUDIO PROP",
    videoSrc: "/videos/projects/radio/radio-showreel.mp4",
    poster: "/videos/projects/radio/poster.jpg",
    projectSlug: "radio",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop"],
    specs: "1080p 60fps • Multi-material PBR Shading",
  },
  {
    id: "the-street-skate",
    num: "08",
    title: "THE STREET SKATEBOARD",
    subtitle: "Urban street deck with custom top grip tape wear, scuffed aluminum trucks, and street wheels.",
    category: "URBAN CULTURE PROP",
    videoSrc: "/videos/projects/the-street-skate/skate-showreel.mp4",
    poster: "/videos/projects/the-street-skate/poster.jpg",
    projectSlug: "the-street-skate",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop"],
    specs: "1080p 60fps • Photorealistic Distress & Scuffs",
  },
  {
    id: "cookie-jar",
    num: "09",
    title: "VINTAGE COOKIE JAR",
    subtitle: "Ceramic confectionery container with glazed ceramic micro-cracks and embossed glass badge.",
    category: "STILL LIFE PROP",
    videoSrc: "/videos/projects/cookie-jar/cookies-showreel.mp4",
    poster: "/videos/projects/cookie-jar/poster.jpg",
    projectSlug: "cookie-jar",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop"],
    specs: "1080p 60fps • Subsurface & Glaze Shading",
  },
  {
    id: "frag-grenade",
    num: "10",
    title: "MILITARY FRAG GRENADE",
    subtitle: "Tactical defense explosive with serrated cast iron fragmentation body, pin mechanism, and paint chips.",
    category: "MILITARY HARD SURFACE",
    videoSrc: "/videos/projects/frag-grenade/grenade-showreel.mp4",
    poster: "/videos/projects/frag-grenade/poster.jpg",
    projectSlug: "frag-grenade",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop"],
    specs: "1080p 60fps • Heavy Industrial Weathering",
  },
  {
    id: "thors-hammer",
    num: "11",
    title: "MJÖLNIR — THOR'S HAMMER",
    subtitle: "Legendary Norse war weapon forged in cosmic metal with etched Norse runic glyphs and leather strap.",
    category: "MYTHOLOGICAL WEAPON",
    videoSrc: "/videos/projects/thors-hammer/thors-hammer-showreel.mp4",
    poster: "/videos/projects/thors-hammer/poster.jpg",
    projectSlug: "thors-hammer",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop"],
    specs: "1080p 60fps • Weathered Uru Metal Lookdev",
  },
];

export default function ArtistShowreel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentReel = SHOWREELS[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? SHOWREELS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === SHOWREELS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="showreel-section html-section" id="showreel">
      {/* Background Ambient Glow */}
      <div className="showreel-ambient-glow" aria-hidden="true" />

      <div className="showreel-container">
        {/* Section Header */}
        <div className="showreel-header">
          <div className="showreel-badge">
            <Sparkles size={14} className="showreel-badge-icon" />
            <span>CINEMATIC MASTER SHOWCASE</span>
          </div>
          <h2 className="chrome section-heading">3D ARTIST SHOWREEL</h2>
          <p className="showreel-subtitle">
            Explore 1080p cinematic turntable breakdowns showcasing hard-surface topology, 
            sub-division modeling, photorealistic PBR material authoring, and volumetric lookdev.
          </p>
        </div>

        {/* Master Showcase Cinema Player */}
        <div className="showreel-cinema-stage">
          <div className="showreel-player-halo" aria-hidden="true" />
          
          <div className="showreel-player-card">
            {/* Key ensures video element reinitializes cleanly on reel change */}
            <ProjectVideoPlayer
              key={currentReel.id}
              src={currentReel.videoSrc}
              poster={currentReel.poster}
              title={`${currentReel.title} — ${currentReel.category}`}
              aspectRatio="aspect-[16/9]"
              className="showreel-main-player"
            />

            {/* Active Reel Details Metadata Bar */}
            <div className="showreel-meta-bar">
              <div className="showreel-meta-info">
                <div className="showreel-meta-tags">
                  <span className="showreel-num-pill">{currentReel.num} / 11</span>
                  <span className="showreel-cat-pill">{currentReel.category}</span>
                  <span className="showreel-specs-pill">{currentReel.specs}</span>
                </div>
                <h3 className="showreel-reel-title">{currentReel.title}</h3>
                <p className="showreel-reel-desc">{currentReel.subtitle}</p>

                {/* Software tags */}
                <div className="showreel-software-tags">
                  {currentReel.software.map((sw) => (
                    <span key={sw} className="showreel-sw-badge">
                      <CheckCircle2 size={11} className="showreel-sw-icon" />
                      <span>{sw}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="showreel-meta-actions">
                <Link
                  href={`/work/${currentReel.projectSlug}`}
                  className="showreel-case-btn"
                  title={`View ${currentReel.title} full breakdown`}
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight size={15} />
                </Link>

                <div className="showreel-nav-steppers">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="showreel-step-btn"
                    aria-label="Previous showreel"
                    title="Previous showreel"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="showreel-step-counter">
                    {selectedIndex + 1} of {SHOWREELS.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="showreel-step-btn"
                    aria-label="Next showreel"
                    title="Next showreel"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Showreel Carousel Tray */}
        <div className="showreel-tray-header">
          <div className="showreel-tray-title-wrap">
            <Film size={16} className="showreel-tray-icon" />
            <h4 className="showreel-tray-title">Select Showreel Breakdown ({SHOWREELS.length} Project Reels)</h4>
          </div>
          <p className="showreel-tray-hint">Click any reel to play instantly</p>
        </div>

        <div className="showreel-tray-grid">
          {SHOWREELS.map((reel, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={reel.id}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`showreel-thumb-card ${isSelected ? "selected" : ""}`}
                aria-label={`Play ${reel.title} showreel`}
              >
                <div className="showreel-thumb-img-wrap">
                  <Image
                    src={reel.poster}
                    alt={`${reel.title} poster thumbnail`}
                    fill
                    sizes="(max-width: 640px) 140px, (max-width: 1024px) 200px, 240px"
                    className="showreel-thumb-img"
                  />
                  <div className="showreel-thumb-overlay">
                    <div className="showreel-thumb-play-btn">
                      <Play size={12} fill="#ffffff" />
                    </div>
                  </div>
                  <span className="showreel-thumb-badge">{reel.num}</span>
                </div>
                <div className="showreel-thumb-content">
                  <span className="showreel-thumb-cat">{reel.category}</span>
                  <h5 className="showreel-thumb-name">{reel.title}</h5>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
