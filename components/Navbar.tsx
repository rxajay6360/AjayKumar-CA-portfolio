"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Workflow", href: "#workflow" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section scroll spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const top = sec.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If not on homepage (e.g. /work/[slug]), standard navigation
    if (window.location.pathname !== "/") {
      return;
    }

    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: Math.max(0, topOffset),
        behavior: "smooth",
      });
      setActiveSection(targetId);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`cinematic-navbar-container ${scrolled ? "scrolled" : ""}`}>
        <nav className="cinematic-nav" aria-label="Main Navigation">
          {/* Brand Monogram */}
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="nav-brand"
            aria-label="Ajay Kumar Portfolio Home"
          >
            <span className="brand-text">AJAY</span>
            <span className="brand-star">✦</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav-links-desktop">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={`/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  <span className="nav-link-text">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action: Resume & Let's Talk CTA */}
          <div className="nav-actions">
            <a
              href="/Ajay_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Ajay_Kumar_Resume.pdf"
              className="nav-resume-btn"
              title="Download C.A. Ajay Kumar's Resume"
            >
              <FileText className="nav-resume-icon" size={13} />
              <span>Resume</span>
            </a>

            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="nav-cta"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="nav-cta-icon" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Cinematic Mobile Drawer Modal */}
      <div className={`cinematic-mobile-drawer ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="mobile-drawer-backdrop" onClick={() => setMobileOpen(false)} />
        <div className="mobile-drawer-panel">
          <div className="mobile-drawer-header">
            <div className="mobile-brand">
              <span>AJAY</span>
              <span className="brand-star">✦</span>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-links-list">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={`/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`mobile-nav-link ${isActive ? "active" : ""}`}
                >
                  <span className="mobile-link-idx">0{idx + 1}</span>
                  <span className="mobile-link-title">{item.name}</span>
                  <span className="mobile-link-glow">✦</span>
                </a>
              );
            })}
          </div>

          <div className="mobile-drawer-footer">
            <a
              href="/Ajay_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Ajay_Kumar_Resume.pdf"
              className="mobile-resume-btn"
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mobile-cta-btn"
            >
              Book a Call ✦
            </a>
            <p className="mobile-drawer-tagline">3D Artist • Maya • Substance • Motion</p>
          </div>
        </div>
      </div>
    </>
  );
}
