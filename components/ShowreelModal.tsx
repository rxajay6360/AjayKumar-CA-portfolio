"use client";

import { useEffect, useRef, useState } from "react";
import { X, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  posterSrc?: string;
}

export default function ShowreelModal({
  isOpen,
  onClose,
  videoSrc = "/videos/showreel/artist-showreel.mp4",
  posterSrc = "/videos/showreel/poster.jpg",
}: ShowreelModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  // Autoplay video on modal open and pause on close
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isOpen) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If browser blocks unmuted autoplay, mute and resume playback
            video.muted = true;
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          });
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="showreel-modal-overlay" role="dialog" aria-modal="true" aria-label="3D Artist Showreel Popup">
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
            <h3 className="showreel-modal-title">C.A. AJAY KUMAR — 3D ARTIST SHOWREEL</h3>
            <span className="showreel-modal-specs">1080p HD • 03:41 • Maya &amp; Substance</span>
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

        {/* Video Player */}
        <div className="showreel-modal-video-wrap">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            controls
            autoPlay
            playsInline
            className="showreel-modal-video"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
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

          <Link
            href="/#contact"
            onClick={onClose}
            className="showreel-modal-cta"
            title="Get in touch with C.A. Ajay Kumar"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
