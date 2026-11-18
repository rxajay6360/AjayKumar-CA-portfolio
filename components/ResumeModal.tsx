"use client";

import { useEffect, useState } from "react";
import { X, FileText, Download, ExternalLink, CheckCircle2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
  fileName?: string;
}

export default function ResumeModal({
  isOpen,
  onClose,
  pdfUrl = "/AJAY_3D_ARTIST_RESUME.pdf",
  fileName = "AJAY_3D_ARTIST_RESUME.pdf",
}: ResumeModalProps) {
  const [downloading, setDownloading] = useState(false);

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

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) throw new Error("Failed to fetch resume PDF");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1500);
    } catch {
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
    } finally {
      setTimeout(() => setDownloading(false), 600);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="showreel-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="C.A. Ajay Kumar Resume Popup"
    >
      {/* Backdrop */}
      <div className="showreel-modal-backdrop" onClick={onClose} />

      {/* Cinema Dialog Card */}
      <div
        className="showreel-modal-dialog"
        style={{ maxWidth: "960px", height: "min(90dvh, 880px)" }}
      >
        {/* Header Bar */}
        <div className="showreel-modal-header">
          <div className="showreel-modal-title-wrap">
            <div className="showreel-modal-badge">
              <FileText size={12} />
              <span>OFFICIAL RESUME</span>
            </div>
            <h3 className="showreel-modal-title">C.A. AJAY KUMAR — 3D ARTIST CV</h3>
            <span className="showreel-modal-specs">PDF Document • Ready to Download</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleDownload}
              className="showreel-modal-cta !py-1.5 !px-3.5 cursor-pointer border-0"
              title="Download Resume PDF"
            >
              <Download size={13} />
              <span className="hidden sm:inline">
                {downloading ? "Downloading..." : "Download"}
              </span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="showreel-modal-close"
              aria-label="Close resume preview"
              title="Close [ESC]"
            >
              <X size={16} />
              <span className="hidden sm:inline">Close</span>
            </button>
          </div>
        </div>

        {/* Embedded PDF Preview Area */}
        <div className="relative flex-1 w-full bg-[#111116] overflow-hidden min-h-0">
          <object
            data={`${pdfUrl}#view=FitH`}
            type="application/pdf"
            className="w-full h-full border-0 block"
            aria-label="C.A. Ajay Kumar Resume PDF Preview"
          >
            {/* Fallback for mobile browsers that don't render inline PDF plugins */}
            <div className="flex flex-col items-center justify-center h-full p-8 text-center gap-4 bg-[#0b0b0f]">
              <div className="w-16 h-16 rounded-2xl bg-[#ff2a3b]/15 border border-[#ff2a3b]/40 flex items-center justify-center text-[#ff2a3b]">
                <FileText size={30} />
              </div>
              <h4 className="font-cinzel text-lg font-bold text-white tracking-wider">
                AJAY 3D ARTIST RESUME (PDF)
              </h4>
              <p className="text-xs text-[#9a9aa6] max-w-sm leading-relaxed">
                Your mobile browser prefers viewing PDFs natively. Tap below to download the PDF directly or open it full screen.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs mt-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="showreel-modal-cta w-full justify-center cursor-pointer border-0"
                >
                  <Download size={14} />
                  <span>{downloading ? "Downloading..." : "Download PDF"}</span>
                </button>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
                >
                  <span>Open PDF</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Footer Bar */}
        <div className="showreel-modal-footer">
          <div className="showreel-modal-tools">
            {["3D Modeling", "PBR Texturing", "Arnold Lighting", "Motion Graphics"].map((tag) => (
              <span key={tag} className="showreel-sw-badge">
                <CheckCircle2 size={11} className="showreel-sw-icon" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#d4d4dc] hover:text-white bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 transition-all"
              title="Open PDF in a new browser tab"
            >
              <span>Open Full Tab</span>
              <ExternalLink size={12} />
            </a>

            <button
              type="button"
              onClick={handleDownload}
              className="showreel-modal-cta justify-center cursor-pointer border-0"
              title="Download AJAY_3D_ARTIST_RESUME.pdf"
            >
              <Download size={13} />
              <span>{downloading ? "Downloading..." : "Download Resume PDF"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
