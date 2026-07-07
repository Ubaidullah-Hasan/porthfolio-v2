"use client";

import { useEffect, useState } from "react";

/**
 * Reusable typing animation component.
 *
 * @param {Object} props
 * @param {string[]} props.words - Array of words/phrases to cycle through
 * @param {"ltr" | "rtl"} props.direction - Text direction: "ltr" (left-to-right) or "rtl" (right-to-left)
 * @param {number} [props.typeSpeed=80] - Milliseconds per character when typing
 * @param {number} [props.deleteSpeed=50] - Milliseconds per character when deleting
 * @param {number} [props.pauseDuration=1500] - Pause after typing a word before deleting
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.cursorClassName] - Custom cursor styling
 */
export default function TypeWriter({
  words,
  direction = "ltr",
  typeSpeed = 80,
  deleteSpeed = 50,
  pauseDuration = 1500,
  className = "",
  cursorClassName = "",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = words[wordIndex];
  const displayText = isDeleting
    ? currentWord.slice(0, charIndex)
    : currentWord.slice(0, charIndex);

  useEffect(() => {
    if (isPaused) return;

    const speed = isDeleting ? deleteSpeed : typeSpeed;

    // Typing complete → pause then start deleting
    if (!isDeleting && charIndex === currentWord.length) {
      setIsPaused(true);
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    // Deleting complete → move to next word
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    isPaused,
    currentWord,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
    words.length,
  ]);

  const isRtl = direction === "rtl";

  return (
    <span
      className={`inline-block ${className}`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <span
        className={isRtl ? "inline-block text-right" : "inline-block text-left"}
      >
        {displayText}
      </span>
      <span
        className={`ml-0.5 inline-block h-[1em] w-[2px] animate-pulse align-middle ${
          cursorClassName || "bg-cyan-300"
        }`}
        style={{
          animationDuration: "1s",
        }}
      />
    </span>
  );
}
