"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hero">
      {/* Center avatar with scroll parallax matching reference HTML */}
      <div
        className="avatar"
        style={{
          transform: `translate(-50%, calc(-62% + ${scrollY * 0.15}px))`,
        }}
      >
        <svg>
          <use href="#face" />
        </svg>
      </div>

      {/* Giant H1 matching reference HTML */}
      <h1>
        <span>Hi, I&apos;m</span> <b>C.A. Aajay</b>
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
