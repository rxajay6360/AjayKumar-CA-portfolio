"use client";

import { useEffect, useState, useRef } from "react";

const NAMES = [
  "C.A. AJAY KUMAR",
  "ಸಿ.ಎ. ಅಜಯ್ ಕುಮಾರ್",       // Kannada
  "सी.ए. अजय कुमार",         // Hindi
  "சி.ஏ. அஜய் குமார்",       // Tamil
  "సి.ఏ. అజయ్ కుమార్",       // Telugu
  "সি.এ. অজয় কুমার",        // Bengali
  "シー・エー・アジャイ・クマール" // Japanese phonetic rendering
];

const HEADLINE = "What if your portfolio could speak for you?";
const INTRO_DURATION = 4200; // 4.2 seconds matching the script

export default function MultilingualIntro() {
  const [typedText, setTypedText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [showName, setShowName] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const hasExitedRef = useRef(false);

  useEffect(() => {
    // Prevent scrolling while intro is active
    document.body.style.overflow = "hidden";

    // 1. Typewriter headline (tick every 34ms matching the script)
    let i = 0;
    const typeTimer = setInterval(() => {
      i++;
      setTypedText(HEADLINE.slice(0, i));
      if (i >= HEADLINE.length) {
        clearInterval(typeTimer);
      }
    }, 34);

    // 2. Multilingual Name Cycle (matching the script)
    setShowName(true);
    let index = 0;
    const cycleTimer = setInterval(() => {
      index = (index + 1) % NAMES.length;
      setShowName(false);
      setTimeout(() => {
        setNameIndex(index);
        setShowName(true);
      }, 160);
    }, 470);

    const openHomepage = () => {
      if (hasExitedRef.current) return;
      hasExitedRef.current = true;

      clearInterval(typeTimer);
      clearInterval(cycleTimer);

      setIsLeaving(true);
      document.body.style.overflow = "";

      setTimeout(() => {
        setIsDone(true);
      }, 1100);
    };

    // 3. Auto-open homepage after INTRO_DURATION
    const exitTimer = setTimeout(openHomepage, INTRO_DURATION);

    return () => {
      clearInterval(typeTimer);
      clearInterval(cycleTimer);
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    if (hasExitedRef.current) return;
    hasExitedRef.current = true;
    setIsLeaving(true);
    document.body.style.overflow = "";
    setTimeout(() => {
      setIsDone(true);
    }, 1000);
  };

  if (isDone) return null;

  return (
    <section
      className={`intro ${isLeaving ? "is-leaving" : ""}`}
      id="intro"
      aria-label="Portfolio introduction"
      onClick={handleSkip}
    >
      <div className="intro-copy">
        <span id="typewriter">{typedText}</span>
      </div>

      <div className="center-mark">
        <div className="monogram">CA</div>
        <div className={`name-script ${showName ? "show" : ""}`} id="nameScript">
          {NAMES[nameIndex]}
        </div>
        <div className="intro-caption">A creative mind · A world of visuals</div>
      </div>

      <div className="intro-progress">
        <span />
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="intro-skip-pill"
        aria-label="Skip Introduction"
      >
        Skip ✕
      </button>
    </section>
  );
}
