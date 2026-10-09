"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleInteractiveEnter = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      if (target) {
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else if ((e.target as HTMLElement).closest("a, button, input, select, textarea")) {
        setIsHovered(true);
        setCursorText("");
      }
    };

    const handleInteractiveLeave = () => {
      setIsHovered(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor], input, select, textarea"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractiveEnter as EventListener);
      el.addEventListener("mouseleave", handleInteractiveLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter as EventListener);
        el.removeEventListener("mouseleave", handleInteractiveLeave);
      });
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isMounted || !isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Smooth Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center border border-[#ff2a3b]/60 bg-[#ff2a3b]/10 backdrop-blur-[1px] pointer-events-none z-50"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 84 : 46) : 28,
          height: isHovered ? (cursorText ? 84 : 46) : 28,
          borderColor: isHovered ? "rgba(255, 42, 59, 0.9)" : "rgba(255, 42, 59, 0.4)",
          boxShadow: isHovered
            ? "0 0 25px rgba(255, 42, 59, 0.4)"
            : "0 0 10px rgba(255, 42, 59, 0.15)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-white uppercase text-center select-none px-1">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Red Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#ff2a3b] pointer-events-none z-50 shadow-[0_0_8px_#ff2a3b]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
