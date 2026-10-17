"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function MayaLogoSvg({ idSuffix }: { idSuffix: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <path d="M4 29L12 7L18 20L11 29H4Z" fill={`url(#maya_f1_${idSuffix})`} />
      <path d="M18 20L24 7L32 29H25L18 20Z" fill={`url(#maya_f2_${idSuffix})`} />
      <path d="M12 7L18 20L24 7H12Z" fill={`url(#maya_f3_${idSuffix})`} />
      <path d="M11 29L18 20L25 29H11Z" fill={`url(#maya_f4_${idSuffix})`} />
      <defs>
        <linearGradient id={`maya_f1_${idSuffix}`} x1="4" y1="7" x2="18" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00F0FF" />
          <stop offset="1" stopColor="#0077B6" />
        </linearGradient>
        <linearGradient id={`maya_f2_${idSuffix}`} x1="32" y1="7" x2="18" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#48CAE4" />
          <stop offset="1" stopColor="#023E8A" />
        </linearGradient>
        <linearGradient id={`maya_f3_${idSuffix}`} x1="12" y1="7" x2="24" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#90E0EF" />
          <stop offset="1" stopColor="#0096C7" />
        </linearGradient>
        <linearGradient id={`maya_f4_${idSuffix}`} x1="18" y1="20" x2="18" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B4D8" />
          <stop offset="1" stopColor="#03045E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SubstanceLogoSvg({ idSuffix }: { idSuffix: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <defs>
        <linearGradient id={`sub_g_${idSuffix}`} x1="6" y1="6" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff5722" />
          <stop offset="1" stopColor="#d84315" />
        </linearGradient>
        <radialGradient id={`sub_glow_${idSuffix}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff7043" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1a0805" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="18" cy="18" r="16" fill="#140604" stroke="#ff5722" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="13" fill={`url(#sub_glow_${idSuffix})`} />
      <path
        d="M18 6.5L27.5 12V24L18 29.5L8.5 24V12L18 6.5Z"
        fill="#210a07"
        stroke="#ff7043"
        strokeWidth="1.2"
      />
      <path
        d="M13.2 13.5C13.2 12.1 14.3 11 15.7 11H20.5C21.9 11 23 12.1 23 13.5V15.5C23 16.9 21.9 18 20.5 18H15.5C14.1 18 13 19.1 13 20.5V22.5C13 23.9 14.1 25 15.5 25H20.3C21.7 25 22.8 23.9 22.8 22.5"
        stroke={`url(#sub_g_${idSuffix})`}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="18" r="1.4" fill="#ff7043" />
      <circle cx="26.5" cy="18" r="1.4" fill="#ff7043" />
    </svg>
  );
}

function PhotoshopLogoSvg() {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="2.5" y="2.5" width="31" height="31" rx="7.5" fill="#001e36" stroke="#31a8ff" strokeWidth="1.8" />
      <text
        x="8"
        y="24"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="16"
        fill="#31a8ff"
        letterSpacing="-0.5"
      >
        Ps
      </text>
    </svg>
  );
}

function PremiereLogoSvg() {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="2.5" y="2.5" width="31" height="31" rx="7.5" fill="#1b002c" stroke="#ea77ff" strokeWidth="1.8" />
      <text
        x="8.5"
        y="24"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="16"
        fill="#ea77ff"
        letterSpacing="-0.5"
      >
        Pr
      </text>
    </svg>
  );
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about html-section" id="about">
      {/* Background concept artwork centered with seamless edge fading */}
      <div className="about-bg-stage" aria-hidden="true">
        <div className="about-bg-aura" />
        <div className="about-bg-art-wrap">
          <Image
            src="/images/about/workspace-bg.jpg"
            alt="3D Artist Creative Studio"
            width={771}
            height={1024}
            priority
            className="about-bg-image"
          />
        </div>
      </div>

      <div className="about-content">
        <h2 className={`about-title ${isVisible ? "is-visible" : ""}`}>
          <span className="title-reveal-line">
            <span className="title-reveal-word">About</span>
          </span>
          <span className="title-reveal-line">
            <span className="title-reveal-word">Me</span>
          </span>
        </h2>
        <p>
          I am C.A. Ajay Kumar, a creative artist focused on 3D modeling, texturing, materials, environments, lighting and rendering. I enjoy transforming ideas into visually striking digital experiences through detailed modeling, cinematic lighting, material development, and creative presentation. Let&apos;s build something incredible together!
        </p>
        <div className="soc">
          <a href="https://www.artstation.com" target="_blank" rel="noopener noreferrer" title="ArtStation">
            As
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" title="Behance">
            Be
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            in
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            Ig
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
            Yt
          </a>
        </div>
      </div>
      <div className="float" aria-hidden="true">
        {/* Autodesk Maya — 3D Rotating Logo */}
        <div
          className="float-software-badge-wrap maya-wrap"
          style={{ top: "8%", right: "14%" }}
        >
          <div className="float-software-badge maya" title="Autodesk Maya">
            <div className="badge-rotator">
              <div className="badge-face badge-front">
                <MayaLogoSvg idSuffix="f" />
              </div>
              <div className="badge-face badge-back">
                <MayaLogoSvg idSuffix="b" />
              </div>
            </div>
            <div className="badge-orbital-ring" />
          </div>
          <span className="float-badge-label">Autodesk Maya</span>
        </div>

        {/* Substance 3D Painter — 3D Rotating Logo */}
        <div
          className="float-software-badge-wrap substance-wrap"
          style={{ top: "32%", right: "5%" }}
        >
          <div className="float-software-badge substance" title="Substance 3D Painter">
            <div className="badge-rotator">
              <div className="badge-face badge-front">
                <SubstanceLogoSvg idSuffix="f" />
              </div>
              <div className="badge-face badge-back">
                <SubstanceLogoSvg idSuffix="b" />
              </div>
            </div>
            <div className="badge-orbital-ring" />
          </div>
          <span className="float-badge-label">Substance Painter</span>
        </div>

        {/* Adobe Photoshop — 3D Rotating Logo */}
        <div
          className="float-software-badge-wrap photoshop-wrap"
          style={{ top: "58%", right: "16%" }}
        >
          <div className="float-software-badge photoshop" title="Adobe Photoshop">
            <div className="badge-rotator">
              <div className="badge-face badge-front">
                <PhotoshopLogoSvg />
              </div>
              <div className="badge-face badge-back">
                <PhotoshopLogoSvg />
              </div>
            </div>
            <div className="badge-orbital-ring" />
          </div>
          <span className="float-badge-label">Adobe Photoshop</span>
        </div>

        {/* Adobe Premiere Pro — 3D Rotating Logo */}
        <div
          className="float-software-badge-wrap premiere-wrap"
          style={{ top: "82%", right: "6%" }}
        >
          <div className="float-software-badge premiere" title="Adobe Premiere Pro">
            <div className="badge-rotator">
              <div className="badge-face badge-front">
                <PremiereLogoSvg />
              </div>
              <div className="badge-face badge-back">
                <PremiereLogoSvg />
              </div>
            </div>
            <div className="badge-orbital-ring" />
          </div>
          <span className="float-badge-label">Adobe Premiere Pro</span>
        </div>
      </div>
    </section>
  );
}
