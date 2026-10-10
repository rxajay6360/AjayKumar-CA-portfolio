"use client";

import { useEffect, useState, useRef } from "react";

const NAMES = [
  { text: "C.A. AJAY KUMAR", lang: "English" },
  { text: "ಸಿ.ಎ. ಅಜಯ್ ಕುಮಾರ್", lang: "Kannada" },
  { text: "सी.ए. अजय कुमार", lang: "Hindi" },
  { text: "சி.ஏ. அஜய் குமார்", lang: "Tamil" },
  { text: "సి.ఏ. అజయ్ కుమార్", lang: "Telugu" },
  { text: "সি.এ. অজয় কুমার", lang: "Bengali" },
  { text: "シー・エー・アジャイ・クマール", lang: "Japanese" },
];

const HEADLINE = "What if your portfolio could speak for you?";
const INTRO_DURATION = 3800; // milliseconds

export default function MultilingualIntro() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [isNameVisible, setIsNameVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const hasExitedRef = useRef(false);

  useEffect(() => {
    // Check if user has already seen the intro during this browser session
    const hasSeen = sessionStorage.getItem("ajay_portfolio_intro_seen");
    if (hasSeen) {
      setIsFinished(true);
      return;
    }

    setMounted(true);
    document.body.style.overflow = "hidden";

    // 1. Typewriter effect
    let charIdx = 0;
    const typeInterval = setInterval(() => {
      charIdx++;
      setTypedText(HEADLINE.slice(0, charIdx));
      if (charIdx >= HEADLINE.length) {
        clearInterval(typeInterval);
      }
    }, 36);

    // 2. Multilingual Name Cycle
    const cycleInterval = setInterval(() => {
      setIsNameVisible(false);
      setTimeout(() => {
        setNameIndex((prev) => (prev + 1) % NAMES.length);
        setIsNameVisible(true);
      }, 140);
    }, 480);

    // 3. Exit Transition Timer
    const exitTimer = setTimeout(() => {
      triggerExit();
    }, INTRO_DURATION);

    const triggerExit = () => {
      if (hasExitedRef.current) return;
      hasExitedRef.current = true;

      clearInterval(typeInterval);
      clearInterval(cycleInterval);
      clearTimeout(exitTimer);

      setIsLeaving(true);
      document.body.style.overflow = "";
      sessionStorage.setItem("ajay_portfolio_intro_seen", "true");

      setTimeout(() => {
        setIsFinished(true);
      }, 950);
    };

    return () => {
      clearInterval(typeInterval);
      clearInterval(cycleInterval);
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    if (hasExitedRef.current) return;
    hasExitedRef.current = true;
    setIsLeaving(true);
    document.body.style.overflow = "";
    sessionStorage.setItem("ajay_portfolio_intro_seen", "true");
    setTimeout(() => {
      setIsFinished(true);
    }, 800);
  };

  if (!mounted || isFinished) {
    return null;
  }

  const currentItem = NAMES[nameIndex];

  return (
    <aside
      className={`multilingual-intro ${isLeaving ? "is-leaving" : ""}`}
      aria-label="Portfolio Introduction"
    >
      {/* Background radial gradient & cinematic noise */}
      <div className="intro-bg-gradient" />
      <div className="intro-noise-overlay" />

      {/* Top Typewriter headline */}
      <div className="intro-headline-wrap">
        <span className="intro-typewriter">
          {typedText}
          <span className="intro-caret" />
        </span>
      </div>

      {/* Center Monogram & Multilingual Name */}
      <div className="intro-center-stage">
        <div className="intro-monogram">
          <span>CA</span>
        </div>

        <div className="intro-name-container">
          <div className={`intro-name-display ${isNameVisible ? "visible" : "hidden"}`}>
            {currentItem.text}
          </div>
          <div className="intro-lang-badge">{currentItem.lang}</div>
        </div>

        <div className="intro-caption">
          A creative mind &bull; A world of visuals
        </div>
      </div>

      {/* Bottom Progress Bar & Skip Button */}
      <div className="intro-footer-controls">
        <div className="intro-progress-bar">
          <span className="intro-progress-fill" />
        </div>
        <button
          type="button"
          onClick={handleSkip}
          className="intro-skip-btn"
          aria-label="Skip Introduction"
        >
          Skip ✕
        </button>
      </div>
    </aside>
  );
}
