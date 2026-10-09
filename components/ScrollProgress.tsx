"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-[#ff2a3b] z-50 transition-all duration-75 pointer-events-none"
      style={{
        width: `${progress}%`,
        boxShadow: "0 0 12px #ff2a3b, 0 0 24px rgba(255, 42, 59, 0.6)",
      }}
      aria-hidden="true"
    />
  );
}
