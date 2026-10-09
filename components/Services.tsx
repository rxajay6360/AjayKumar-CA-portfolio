"use client";

import { useEffect, useRef } from "react";

export default function Services() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

    const handleScroll = () => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll<HTMLElement>(".card");
      const vh = window.innerHeight;

      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        const p = clamp((vh * 0.95 - r.top) / (vh * 0.6));
        card.style.setProperty("--p", p.toFixed(3));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="services html-section" id="services">
      <h2 className="chrome section-heading">Services</h2>
      <div className="cards" ref={cardsRef}>
        <div className="card c1" data-p>
          <div className="in">
            <small>SERVICE 01</small>
            <h3>Autodesk Maya</h3>
            <p>
              3D modeling, environment modeling, product modeling, clean quad topology, lighting, and cinematic Arnold rendering.
            </p>
          </div>
          <div className="bar">3D Modeling • Environments • Arnold</div>
        </div>

        <div className="card c2" data-p>
          <div className="in">
            <small>SERVICE 02</small>
            <h3>Substance 3D Painter</h3>
            <p>
              PBR materials, texture painting, roughness and metallic workflows, edge wear, and high-fidelity surface detailing.
            </p>
          </div>
          <div className="bar">PBR Materials • Texture Painting • Detailing</div>
        </div>

        <div className="card c3" data-p>
          <div className="in">
            <small>SERVICE 03</small>
            <h3>Motion Graphics</h3>
            <p>
              Animated typography, visual storytelling, cinematic transitions, motion design, and broadcast title sequences.
            </p>
          </div>
          <div className="bar">Motion Design • Typography • After Effects</div>
        </div>
      </div>
    </section>
  );
}
