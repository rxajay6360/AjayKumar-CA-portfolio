"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040405] border-t border-white/[0.08] text-[#888888] py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Title */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#ff2a3b] text-xs">◆</span>
              <span className="font-cinzel text-lg text-white font-bold tracking-wider">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs font-mono text-[#777777] tracking-wider">
              {siteConfig.title}
            </p>
          </div>

          {/* Social Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            {siteConfig.socials.slice(0, 4).map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff2a3b] transition-colors flex items-center gap-1"
              >
                <span>{soc.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[#555555]" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#cccccc] hover:text-[#ff2a3b] transition-colors group"
          >
            <span>BACK TO TOP</span>
            <div className="w-8 h-8 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#ff2a3b] group-hover:bg-[#ff2a3b]/10 transition-all">
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>

        {/* Bottom Slate */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#555555] tracking-widest uppercase">
          <div>
            &copy; {currentYear} {siteConfig.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>AUTODESK MAYA</span>
            <span>&bull;</span>
            <span>SUBSTANCE 3D PAINTER</span>
            <span>&bull;</span>
            <span>MOTION GRAPHICS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
