"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="about html-section" id="about">
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
        <h2 className="chrome">
          About<br />me
        </h2>
        <p>
          I am C.A. Aajay Kumar, a creative artist focused on 3D modeling, texturing, materials, environments, and motion graphics. I enjoy transforming ideas into visually striking digital experiences through detailed modeling, cinematic lighting, material development, and creative presentation. Let&apos;s build something incredible together!
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
      <div className="float">
        <i style={{ top: "10%", right: "12%", left: "auto", color: "#ff2a3b" }}>Ma</i>
        <i style={{ top: "28%", right: "4%", left: "auto", color: "#ffffff" }}>3D</i>
        <i style={{ top: "50%", right: "16%", left: "auto", color: "#3b9cff" }}>Ae</i>
        <i style={{ top: "70%", right: "6%", left: "auto", color: "#d49755" }}>Pt</i>
        <i style={{ top: "86%", right: "18%", left: "auto", color: "#aaa" }}>Ar</i>
      </div>
    </section>
  );
}
