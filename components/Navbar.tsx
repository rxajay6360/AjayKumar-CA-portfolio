"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "/#home", id: "home" },
    { label: "About", href: "/#about", id: "about" },
    { label: "Work", href: "/#projects", id: "projects" },
    { label: "Skills", href: "/#skills", id: "skills" },
    { label: "Workflow", href: "/#workflow", id: "workflow" },
    { label: "Contact", href: "/#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["home", "about", "projects", "skills", "workflow", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.06] py-3.5 shadow-2xl"
          : "bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Lockup */}
        <Link
          href="/#home"
          className="group flex items-center gap-2.5 text-white tracking-wider font-syne text-sm sm:text-base transition-colors"
        >
          <span className="text-[#ff2a3b] text-xs transition-transform duration-300 group-hover:scale-125">
            ◆
          </span>
          <span className="font-extrabold text-white/95">
            C.A. <span className="text-[#ff2a3b]">AAJAY KUMAR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`text-[11px] font-mono tracking-[0.2em] uppercase transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-[#ff2a3b] font-semibold"
                    : "text-[#888888] hover:text-[#eeeeee]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#ff2a3b] shadow-[0_0_8px_#ff2a3b]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action / Availability Badge */}
        <div className="hidden sm:flex items-center gap-5">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono tracking-widest uppercase text-[#aaaaaa]">
            <span className="w-2 h-2 rounded-full bg-[#ff2a3b] animate-beacon inline-block" />
            <span>Available for 3D Projects</span>
          </div>

          <Link
            href="/#contact"
            className="pill text-xs py-2 px-5 flex items-center gap-1.5"
          >
            <span>BOOK A CALL</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6 text-[#ff2a3b]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#070708]/98 backdrop-blur-xl border-b border-white/10 px-8 py-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/[0.03] border border-white/[0.08] text-[10px] tracking-widest uppercase text-[#aaaaaa] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#ff2a3b] animate-beacon inline-block" />
            <span>Available for 3D &amp; Motion Contracts</span>
          </div>

          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-[0.2em] uppercase font-cinzel transition-colors ${
                    isActive ? "text-[#ff2a3b] font-bold" : "text-[#888888] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-[#ff2a3b] text-white text-xs font-semibold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(255,42,59,0.4)]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
