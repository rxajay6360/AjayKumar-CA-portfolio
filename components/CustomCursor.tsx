"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isWhatsApp, setIsWhatsApp] = useState(false);
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

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const waTarget = target.closest(
        "[data-cursor='whatsapp'], .direct-action-card.wa, .connect-chip.wa"
      );
      if (waTarget) {
        setIsWhatsApp(true);
        setIsHovered(true);
        setCursorText("");
        return;
      }
      setIsWhatsApp(false);

      const cursorTarget = target.closest("[data-cursor]");
      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        if (text && text !== "whatsapp") {
          setCursorText(text);
          setIsHovered(true);
          return;
        }
      }

      if (target.closest("a, button, input, select, textarea")) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isMounted || !isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Smooth Trailing Ring / WhatsApp Icon */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center border pointer-events-none z-50 overflow-hidden"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isWhatsApp ? 44 : isHovered ? (cursorText ? 84 : 46) : 28,
          height: isWhatsApp ? 44 : isHovered ? (cursorText ? 84 : 46) : 28,
          backgroundColor: isWhatsApp
            ? "#25D366"
            : isHovered
            ? "rgba(255, 42, 59, 0.1)"
            : "rgba(255, 42, 59, 0.05)",
          borderColor: isWhatsApp
            ? "#128C7E"
            : isHovered
            ? "rgba(255, 42, 59, 0.9)"
            : "rgba(255, 42, 59, 0.4)",
          boxShadow: isWhatsApp
            ? "0 0 25px rgba(37, 211, 102, 0.85), 0 0 45px rgba(37, 211, 102, 0.45)"
            : isHovered
            ? "0 0 25px rgba(255, 42, 59, 0.4)"
            : "0 0 10px rgba(255, 42, 59, 0.15)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      >
        {isWhatsApp ? (
          <div className="w-full h-full flex items-center justify-center text-white">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c0 4.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        ) : cursorText ? (
          <span className="text-[9px] font-mono font-bold tracking-widest text-white uppercase text-center select-none px-1">
            {cursorText}
          </span>
        ) : null}
      </motion.div>

      {/* Center Dot (hidden when hovered or whatsapp) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#ff2a3b] pointer-events-none z-50 shadow-[0_0_8px_#ff2a3b]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered || isWhatsApp ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}

