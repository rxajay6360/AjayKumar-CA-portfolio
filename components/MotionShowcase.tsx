"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Sparkles } from "lucide-react";

export default function MotionShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);

  const keyframes = [
    { text: "CINEMATIC VISUALS", color: "#ff2a3b", curve: "cubic-bezier(0.25, 1, 0.5, 1)" },
    { text: "KINETIC TYPOGRAPHY", color: "#ffffff", curve: "cubic-bezier(0.16, 1, 0.3, 1)" },
    { text: "SPEED GRAPH EASING", color: "#d49755", curve: "cubic-bezier(0.87, 0, 0.13, 1)" },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % keyframes.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying, keyframes.length]);

  return (
    <div className="w-full bg-[#060608] rounded border border-white/10 overflow-hidden flex flex-col">
      <div className="p-2.5 bg-[#09090c] border-b border-white/10 flex items-center justify-between z-10">
        <span className="text-[9px] font-mono text-[#ff2a3b] uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a3b] animate-beacon" />
          AFTER EFFECTS &bull; SPEED GRAPH ENGINE
        </span>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-[#888888] hover:text-white transition-colors"
          aria-label="Toggle motion animation"
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>
      </div>

      <div className="h-40 w-full relative flex items-center justify-center overflow-hidden p-6">
        {/* Animated Background Laser Grid Line */}
        <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff2a3b]/40 to-transparent" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentFrame}
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.15, y: -15 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-center z-10"
          >
            <span
              className="font-cinzel text-lg sm:text-xl font-bold tracking-widest block drop-shadow-[0_0_15px_rgba(255,42,59,0.5)]"
              style={{ color: keyframes[currentFrame].color }}
            >
              {keyframes[currentFrame].text}
            </span>
            <span className="text-[9px] font-mono text-[#666666] tracking-widest uppercase block mt-1">
              EASING PASS // FRAME 0{currentFrame + 1}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Speed Graph Graphic Indicator at Bottom */}
        <div className="absolute bottom-2 inset-x-4 flex items-center justify-between text-[8px] font-mono text-[#555555]">
          <span>IN: 85% SPEED</span>
          <div className="flex-1 mx-3 h-[2px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 bg-[#ff2a3b]"
              animate={{ left: ["0%", "100%"], width: ["20%", "40%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span>OUT: 15% SPEED</span>
        </div>
      </div>
    </div>
  );
}
