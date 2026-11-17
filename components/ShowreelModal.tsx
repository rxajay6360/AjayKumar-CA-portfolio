"use client";

import { useEffect } from "react";
import { X, Sparkles, CheckCircle2, ExternalLink } from "lucide-react";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
  title?: string;
}

export default function ShowreelModal({
  isOpen,
  onClose,
  videoId = "WNWs30LTdTc",
  title = "C.A. AJAY KUMAR — 3D ARTIST SHOWREEL",
}: ShowreelModalProps) {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="showreel-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="3D Artist Showreel Popup"
    >
      {/* Backdrop */}
      <div className="showreel-modal-backdrop" onClick={onClose} />

      {/* Cinema Dialog Card */}
      <div className="showreel-modal-dialog">
        {/* Header Bar */}
        <div className="showreel-modal-header">
          <div className="showreel-modal-title-wrap">
            <div className="showreel-modal-badge">
              <Sparkles size={12} />
              <span>OFFICIAL 3D SHOWREEL</span>
            </div>
            <h3 className="showreel-modal-title">{title}</h3>
            <span className="showreel-modal-specs">1080p HD • YouTube • Maya &amp; Substance</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="showreel-modal-close"
            aria-label="Close showreel video"
            title="Close [ESC]"
          >
            <X size={16} />
            <span>Close</span>
          </button>
        </div>

        {/* Video Player (YouTube Embed with Autoplay) */}
        <div className="showreel-modal-video-wrap relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        {/* Footer Bar */}
        <div className="showreel-modal-footer">
          <div className="showreel-modal-tools">
            {["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Photoshop", "Premiere Pro"].map((sw) => (
              <span key={sw} className="showreel-sw-badge">
                <CheckCircle2 size={11} className="showreel-sw-icon" />
                <span>{sw}</span>
              </span>
            ))}
          </div>

          <a
            href={`https://youtu.be/${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="showreel-modal-cta"
            title="Watch Showreel directly on YouTube"
          >
            <span>Watch on YouTube</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
