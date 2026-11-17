"use client";

import { useEffect, useState } from "react";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";

interface YouTubeModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  videoId?: string;
  videoTitle?: string;
}

export default function YouTubeModal({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  videoId = "WNWs30LTdTc",
  videoTitle = "C.A. AJAY KUMAR — 3D ARTIST REEL",
}: YouTubeModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isControlled = typeof controlledIsOpen === "boolean";
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    }
    if (!isControlled) {
      setInternalIsOpen(false);
    }
  };

  // Listen for global custom event "open-youtube-modal"
  useEffect(() => {
    const handleOpen = () => {
      if (isControlled && controlledOnClose) {
        // If controlled by parent, let parent handle or toggle internal
        window.dispatchEvent(new CustomEvent("trigger-parent-youtube-modal"));
      } else {
        setInternalIsOpen(true);
      }
    };
    window.addEventListener("open-youtube-modal", handleOpen);
    return () => window.removeEventListener("open-youtube-modal", handleOpen);
  }, [isControlled, controlledOnClose]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="showreel-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="YouTube Video Player Popup"
    >
      {/* Backdrop */}
      <div className="showreel-modal-backdrop" onClick={handleClose} />

      {/* Cinema Dialog Card */}
      <div className="showreel-modal-dialog">
        {/* Header Bar */}
        <div className="showreel-modal-header">
          <div className="showreel-modal-title-wrap">
            <div
              className="showreel-modal-badge"
              style={{
                background: "rgba(255, 0, 0, 0.15)",
                borderColor: "rgba(255, 42, 59, 0.5)",
                color: "#ff2a3b",
              }}
            >
              {/* YouTube Play Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="13"
                height="13"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>YOUTUBE SHOWCASE</span>
            </div>
            <h3 className="showreel-modal-title">{videoTitle}</h3>
            <span className="showreel-modal-specs">HD • Watch Video in Popup</span>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="showreel-modal-close"
            aria-label="Close video player"
            title="Close [ESC]"
          >
            <X size={16} />
            <span>Close</span>
          </button>
        </div>

        {/* Video Embed Frame */}
        <div className="showreel-modal-video-wrap relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        {/* Footer Bar */}
        <div className="showreel-modal-footer">
          <div className="showreel-modal-tools">
            {["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer", "Motion Design"].map((sw) => (
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
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-[#cccccc] hover:text-white bg-white/[0.06] hover:bg-[#ff2a3b] border border-white/10 hover:border-[#ff2a3b] transition-all"
            title="Open video directly on YouTube"
          >
            <span>Watch on YouTube</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
