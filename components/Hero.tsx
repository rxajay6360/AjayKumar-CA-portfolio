"use client";

import Link from "next/link";
import EditorialHeroTitle from "@/components/EditorialHeroTitle";

export default function Hero() {
  return (
    <header className="hero" id="home">
      {/* Minimalist Swiss Editorial Title with 35mm Grain & Negative Space Mask */}
      <EditorialHeroTitle />

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
