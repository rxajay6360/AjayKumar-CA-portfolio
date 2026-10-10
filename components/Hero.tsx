"use client";

import Link from "next/link";
import InteractiveAvatar from "@/components/InteractiveAvatar";

export default function Hero() {
  return (
    <header className="hero" id="home">
      {/* Animated Hero Title with Interactive 3D Avatar */}
      <h1 className="hero-title">
        <InteractiveAvatar />
        <span className="hero-intro">HI THIS IS</span>
        <b className="hero-name" data-text="AJAY KUMAR">
          {/* Inverted Monochrome Silhouette Blade Cutting Through Solid Tones */}
          <span className="inverted-alpha-blade" aria-hidden="true" />
          AJAY KUMAR
        </b>
      </h1>

      {/* Subtitle with dots badges matching reference HTML */}
      <div className="sub">
        <em>A 3D artist</em> with deep focus in Maya modeling, Substance Painter texturing &amp; motion graphics.
        <div className="dots">
          <i>Ma</i>
          <i>Pt</i>
          <i>Ae</i>
          <i>Bl</i>
        </div>
      </div>

      {/* Pill button matching reference HTML */}
      <Link className="pill" href="#contact">
        Book a call
      </Link>
    </header>
  );
}
