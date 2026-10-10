"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn, ExternalLink } from "lucide-react";

interface HeroShowcaseImageProps {
  src: string;
  alt: string;
  title?: string;
}

export default function HeroShowcaseImage({
  src,
  alt,
  title,
}: HeroShowcaseImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, handleClose]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        aria-label="Click to enlarge hero render"
        className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#0d0d10] group cursor-pointer hover:border-[#ff2a3b]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff2a3b]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover group-hover:scale-102 transition-transform duration-500"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-30" />

        {/* Hover Hint */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
          <div className="px-4 py-2 rounded-full bg-black/85 border border-[#ff2a3b]/60 text-white text-xs font-mono flex items-center gap-2 shadow-2xl transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
            <ZoomIn className="w-4 h-4 text-[#ff2a3b]" />
            <span>CLICK TO ENLARGE</span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged hero image"
          onClick={handleClose}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Header */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full px-4 sm:px-8 py-4 flex items-center justify-between border-b border-white/10 bg-black/60 backdrop-blur-md z-30"
          >
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded bg-[#ff2a3b]/20 border border-[#ff2a3b]/40 text-[10px] font-mono tracking-widest text-[#ff2a3b] uppercase">
                HERO RENDER
              </span>
              {title && (
                <span className="text-xs font-cinzel text-white/80 hidden sm:inline">
                  {title}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={src}
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

          {/* Center Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 w-full flex items-center justify-center p-4 overflow-hidden"
          >
            <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
              <Image
                src={src}
                alt={alt}
                fill
                priority
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Footer */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full px-4 sm:px-8 py-3.5 border-t border-white/10 bg-black/70 text-center"
          >
            <p className="text-xs text-[#aaaaaa] font-mono">{alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
