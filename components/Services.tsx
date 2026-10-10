"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Maximize2, X, ArrowUpRight, Sparkles } from "lucide-react";

interface ServiceItem {
  id: string;
  serviceName: string;
  tag: string;
  imageWebp: string;
  imageFallback: string;
  alt: string;
  accent: string;
  accentClass: string;
  targetService: string;
  barText: string;
  description: string;
  tags: string[];
  floatClass: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "01",
    serviceName: "Autodesk Maya",
    tag: "SERVICE 01",
    imageWebp: "/images/services/service-maya.webp",
    imageFallback: "/images/services/service-maya.png",
    alt: "Autodesk Maya 3D frosted glass card with metallic emblem",
    accent: "#00e5ff",
    accentClass: "service-card-c1",
    targetService: "3D Modeling",
    barText: "3D MODELING • ENVIRONMENTS • ARNOLD",
    description:
      "3D modeling, environment modeling, product modeling, clean quad topology, lighting, and cinematic Arnold rendering.",
    tags: ["Quad Topology", "Hard Surface", "Arnold Lights", "UV Unwrapping"],
    floatClass: "service-card-float-1",
  },
  {
    id: "02",
    serviceName: "Substance 3D Painter",
    tag: "SERVICE 02",
    imageWebp: "/images/services/service-substance.webp",
    imageFallback: "/images/services/service-substance.jpg",
    alt: "Substance 3D Painter frosted glass card with metallic Pt emblem",
    accent: "#ff7043",
    accentClass: "service-card-c2",
    targetService: "Texturing",
    barText: "PBR MATERIALS • TEXTURE PAINTING • DETAILING",
    description:
      "PBR materials, texture painting, roughness and metallic workflows, edge wear, and high-fidelity surface detailing.",
    tags: ["Smart Materials", "Curvature & AO", "4K Textures", "Roughness Maps"],
    floatClass: "service-card-float-2",
  },
  {
    id: "03",
    serviceName: "Motion Graphics",
    tag: "SERVICE 03",
    imageWebp: "/images/services/service-motion.webp",
    imageFallback: "/images/services/service-motion.jpg",
    alt: "Motion Graphics frosted glass card with metallic Ae emblem",
    accent: "#7c4dff",
    accentClass: "service-card-c3",
    targetService: "Motion Graphics",
    barText: "MOTION DESIGN • TYPOGRAPHY • AFTER EFFECTS",
    description:
      "Animated typography, visual storytelling, cinematic transitions, motion design, and broadcast title sequences.",
    tags: ["Kinetic Type", "Speed Graphs", "Camera Projections", "Audio Sync"],
    floatClass: "service-card-float-3",
  },
];

export default function Services() {
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModal(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelectService = (targetService: string) => {
    window.dispatchEvent(
      new CustomEvent("portfolio-select-service", { detail: targetService })
    );
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="services html-section" id="services">
      {/* Studio Atmosphere Ambient Orbs */}
      <div className="services-bg-orb-1" aria-hidden="true" />
      <div className="services-bg-orb-2" aria-hidden="true" />

      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#ff2a3b] font-mono text-xs tracking-[0.25em]">03</span>
            <div className="w-8 h-[1px] bg-[#ff2a3b]/40" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#888888]">
              SPECIALIZED DISCIPLINES &bull; SERVICES
            </span>
          </div>

          <h2 className="chrome section-heading">Services</h2>
          <p>
            Ultra-high fidelity 3D modeling, physically based texturing, and dynamic motion sequences tailored for games, cinematics, and digital production.
          </p>
        </div>

        {/* 3D Glassmorphic Cards Grid */}
        <div className="services-cards-grid">
          {SERVICES.map((item) => (
            <TiltCard
              key={item.id}
              item={item}
              onInspect={() => setActiveModal(item)}
              onSelect={() => handleSelectService(item.targetService)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / High-Resolution Zoom Modal */}
      {activeModal && (
        <div
          className="service-modal-backdrop"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="service-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0a0d13]">
              <div className="flex items-center gap-3">
                <span className="text-[#e6b450] font-mono text-xs tracking-widest uppercase">
                  {activeModal.tag}
                </span>
                <span className="text-white/20">|</span>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {activeModal.serviceName}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative w-full aspect-[4/3] bg-black">
              <Image
                src={activeModal.imageWebp}
                alt={activeModal.alt}
                fill
                sizes="(max-width: 960px) 100vw, 960px"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer Info & CTA */}
            <div className="p-6 bg-[#0a0d13] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {activeModal.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#94a3b8]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  setActiveModal(null);
                  handleSelectService(activeModal.targetService);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e6b450] to-[#c49132] text-[#0b0d11] font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span>Request {activeModal.targetService}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function TiltCard({
  item,
  onInspect,
  onSelect,
}: {
  item: ServiceItem;
  onInspect: () => void;
  onSelect: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalize coordinates (-1 to 1)
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    // Calculate 3D tilt angles (max ~10 degrees)
    const rotateX = (-normY * 9).toFixed(2);
    const rotateY = (normX * 9).toFixed(2);

    // Dynamic glare coordinates in percentage
    const glareX = ((x / rect.width) * 100).toFixed(1);
    const glareY = ((y / rect.height) * 100).toFixed(1);

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`;
    card.style.setProperty("--glare-x", `${glareX}%`);
    card.style.setProperty("--glare-y", `${glareY}%`);
    card.style.setProperty("--glare-opacity", "1");
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.setProperty("--glare-opacity", "0");
  };

  return (
    <div className={`service-card-wrapper ${!isHovered ? item.floatClass : ""}`}>
      <div
        ref={cardRef}
        className={`service-3d-card ${item.accentClass}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Dynamic Specular Glare Layer */}
        <div className="service-card-glare" aria-hidden="true" />

        {/* 3D Glass Artwork */}
        <div className="service-card-artwork" onClick={onInspect}>
          <Image
            src={item.imageWebp}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover"
            priority
          />
        </div>

        {/* Interactive Footer & Action Bar */}
        <div className="service-card-footer">
          <div className="service-card-meta">
            <span className="service-card-id-badge">
              <span className="service-card-id-dot" />
              {item.tag}
            </span>

            <button
              onClick={onInspect}
              className="service-card-hint"
              title="Inspect 3D Card Fullscreen"
              type="button"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>INSPECT</span>
            </button>
          </div>

          <div className="service-tags-row">
            {item.tags.map((t) => (
              <span key={t} className="service-tag-chip">
                {t}
              </span>
            ))}
          </div>

          <button
            type="button"
            className="service-action-btn"
            onClick={onSelect}
          >
            <span>Inquire for {item.targetService}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
