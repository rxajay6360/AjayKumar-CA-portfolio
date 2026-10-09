"use client";

import { useEffect, useRef } from "react";

export default function TiltedShowcase() {
  const showRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

    const handleScroll = () => {
      if (!showRef.current) return;
      const r = showRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = clamp(-r.top / (r.height - vh) * 1.6);
      showRef.current.style.setProperty("--p", p.toFixed(3));
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
    <div className="show" ref={showRef} data-p>
      <div className="stick">
        <div className="grid-3d">
          <div className="tile t1">Mjölnir</div>
          <div className="tile t2">3D✦</div>
          <div className="tile t3">
            <span>.</span>
          </div>
          <div className="tile t4">Maya</div>
          <div className="tile t5">Temple Art</div>
          <div className="tile t6">ONERA</div>
          <div className="tile t7">Substance</div>
          <div className="tile t8">Timeless</div>
        </div>
      </div>
    </div>
  );
}
