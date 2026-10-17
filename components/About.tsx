"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
        {/* Autodesk Maya Logo Badge */}
        <div
          className="float-software-badge maya"
          style={{ top: "8%", right: "12%" }}
          title="Autodesk Maya"
        >
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <path d="M4 26L11 6L16 18L10 26H4Z" fill="url(#maya_f1)" />
            <path d="M16 18L21 6L28 26H22L16 18Z" fill="url(#maya_f2)" />
            <path d="M11 6L16 18L21 6H11Z" fill="url(#maya_f3)" />
            <path d="M10 26L16 18L22 26H10Z" fill="url(#maya_f4)" />
            <defs>
              <linearGradient id="maya_f1" x1="4" y1="6" x2="16" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F0FF" />
                <stop offset="1" stopColor="#0077B6" />
              </linearGradient>
              <linearGradient id="maya_f2" x1="28" y1="6" x2="16" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#48CAE4" />
                <stop offset="1" stopColor="#023E8A" />
              </linearGradient>
              <linearGradient id="maya_f3" x1="11" y1="6" x2="21" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#90E0EF" />
                <stop offset="1" stopColor="#0096C7" />
              </linearGradient>
              <linearGradient id="maya_f4" x1="16" y1="18" x2="16" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00B4D8" />
                <stop offset="1" stopColor="#03045E" />
              </linearGradient>
            </defs>
          </svg>
          <span className="float-badge-label">Maya</span>
        </div>

        {/* Substance 3D Painter Logo Badge */}
        <div
          className="float-software-badge substance"
          style={{ top: "33%", right: "4%" }}
          title="Substance 3D Painter"
        >
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <rect x="2.5" y="2.5" width="27" height="27" rx="6.5" fill="#1b120c" stroke="#ff7043" strokeWidth="1.8" />
            <text x="6" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" fill="#ff7043" letterSpacing="-0.5">Pt</text>
          </svg>
          <span className="float-badge-label">Substance</span>
        </div>

        {/* Adobe Photoshop Logo Badge */}
        <div
          className="float-software-badge photoshop"
          style={{ top: "58%", right: "16%" }}
          title="Adobe Photoshop"
        >
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <rect x="2.5" y="2.5" width="27" height="27" rx="6.5" fill="#001e36" stroke="#31a8ff" strokeWidth="1.8" />
            <text x="5.5" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" fill="#31a8ff" letterSpacing="-0.5">Ps</text>
          </svg>
          <span className="float-badge-label">Photoshop</span>
        </div>

        {/* Adobe Premiere Pro Logo Badge */}
        <div
          className="float-software-badge premiere"
          style={{ top: "82%", right: "7%" }}
          title="Adobe Premiere Pro"
        >
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <rect x="2.5" y="2.5" width="27" height="27" rx="6.5" fill="#1b002c" stroke="#ea77ff" strokeWidth="1.8" />
            <text x="6" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" fill="#ea77ff" letterSpacing="-0.5">Pr</text>
          </svg>
          <span className="float-badge-label">Premiere</span>
        </div>
      </div>
    </section>
  );
}
