"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ExternalLink } from "lucide-react";

export interface GalleryImageItem {
  url: string;
  caption: string;
  label: string;
}

interface ProjectGalleryViewerProps {
  images: GalleryImageItem[];
  projectTitle?: string;
}

export default function ProjectGalleryViewer({
  images,
  projectTitle,
}: ProjectGalleryViewerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;
  const currentImage = activeIndex !== null ? images[activeIndex] : null;

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  }, [images.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose, handlePrev, handleNext]);

  return (
    <>
      {/* Grid of gallery cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIndex(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveIndex(idx);
              }
            }}
            aria-label={`Open full view of ${img.label}: ${img.caption}`}
            className="bg-[#0a0a0c] border border-white/10 rounded-lg overflow-hidden group cursor-pointer hover:border-[#ff2a3b]/50 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(255,42,59,0.15)] flex flex-col focus:outline-none focus:ring-2 focus:ring-[#ff2a3b]"
          >
            <div className="relative aspect-[16/10] bg-[#0d0d10] overflow-hidden">
              <Image
                src={img.url}
                alt={img.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Label Badge */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm border border-white/10 text-[9px] font-mono text-[#cccccc] z-10">
                {img.label}
              </div>

              {/* Hover Overlay with Click Hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="px-3.5 py-1.5 rounded-full bg-black/85 border border-[#ff2a3b]/60 text-white text-xs font-mono flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-3.5 h-3.5 text-[#ff2a3b]" />
                  <span>VIEW POPUP</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#0a0a0c] flex-1 flex flex-col justify-between">
              <p className="text-xs text-[#888888] group-hover:text-[#bbbbbb] leading-snug transition-colors">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen View Popup Modal */}
      {isOpen && currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={handleClose}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full px-4 sm:px-8 py-4 flex items-center justify-between border-b border-white/10 bg-black/60 backdrop-blur-md z-30"
          >
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded bg-[#ff2a3b]/20 border border-[#ff2a3b]/40 text-[10px] font-mono tracking-widest text-[#ff2a3b] uppercase">
                {currentImage.label}
              </span>
              {projectTitle && (
                <span className="text-xs font-cinzel text-white/80 hidden sm:inline truncate max-w-xs md:max-w-md">
                  {projectTitle}
                </span>
              )}
              <span className="text-xs font-mono text-white/50">
                {activeIndex + 1} / {images.length}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={currentImage.url}
                target="_blank"
                rel="noreferrer"
                title="Open high-resolution file"
                className="px-2.5 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-white/80 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#ff2a3b]" />
                <span className="hidden sm:inline">Original</span>
              </a>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close viewer"
                className="px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-[#ff2a3b] border border-white/15 hover:border-[#ff2a3b] text-white text-xs font-mono flex items-center gap-1.5 transition-all duration-200"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Close</span>
                <span className="text-[10px] text-white/50 hidden md:inline">[Esc]</span>
              </button>
            </div>
          </div>

          {/* Center Showcase Area */}
          <div className="relative flex-1 w-full flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Prev Button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous render"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#ff2a3b] border border-white/20 hover:border-[#ff2a3b] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-2xl hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Main Full-Size Image Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-h-[75vh] flex items-center justify-center"
            >
              <Image
                src={currentImage.url}
                alt={currentImage.caption}
                fill
                priority
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Next Button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next render"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#ff2a3b] border border-white/20 hover:border-[#ff2a3b] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-2xl hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Caption & Thumbnail Strip */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full px-4 sm:px-8 py-3.5 border-t border-white/10 bg-black/70 backdrop-blur-md z-30 flex flex-col items-center gap-2.5"
          >
            <p className="text-xs sm:text-sm text-[#cccccc] text-center font-normal max-w-3xl leading-snug">
              {currentImage.caption}
            </p>

            {images.length > 1 && (
              <div className="flex items-center justify-center gap-2 overflow-x-auto max-w-full py-1 px-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(idx);
                    }}
                    className={`relative w-16 h-11 sm:w-20 sm:h-12 rounded-md overflow-hidden border transition-all duration-200 shrink-0 ${
                      idx === activeIndex
                        ? "border-[#ff2a3b] ring-2 ring-[#ff2a3b]/60 scale-105"
                        : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/60"
                    }`}
                    aria-label={`Switch to ${img.label}`}
                  >
                    <Image
                      src={img.url}
                      alt={img.label}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
