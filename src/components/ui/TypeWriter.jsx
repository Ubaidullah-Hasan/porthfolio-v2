"use client";

import { useEffect, useState } from "react";

function normalizeEntry(entry) {
  if (typeof entry === "string") {
    return { text: entry, direction: "ltr" };
  }
  return { text: entry.text, direction: entry.direction || "ltr" };
}

/**
 * Reusable typing animation — multiple words on one row, continuous loop.
 *
 * @param {Object} props
 * @param {(string | { text: string, direction: "ltr" | "rtl" })[]} props.words
 * @param {number} [props.typeSpeed=70]
 * @param {number} [props.deleteSpeed=40]
 * @param {number} [props.pauseDuration=2000]
 * @param {string} [props.divider="|"]
 * @param {string} [props.className]
 */
export default function TypeWriter({
  words = [],
  typeSpeed = 70,
  deleteSpeed = 40,
  pauseDuration = 2000,
  divider = "|",
  className = "",
}) {
  const entries = words.map(normalizeEntry);
  const [charIndices, setCharIndices] = useState(entries.map(() => 0));

  useEffect(() => {
    if (entries.length === 0) return;

    let mounted = true;
    let timerIds = [];

    function delay(ms) {
      return new Promise((resolve) => {
        const id = setTimeout(() => {
          if (mounted) resolve();
        }, ms);
        timerIds.push(id);
      });
    }

    async function runLoop() {
      while (mounted) {
        // --- TYPE phase ---
        let indices = entries.map(() => 0);

        while (mounted) {
          let allDone = true;
          indices = indices.map((count, i) => {
            if (count < entries[i].text.length) {
              allDone = false;
              return count + 1;
            }
            return count;
          });
          setCharIndices([...indices]);
          if (allDone) break;
          await delay(typeSpeed + 30);
        }

        // --- PAUSE phase ---
        await delay(pauseDuration);
        if (!mounted) break;

        // --- DELETE phase ---
        while (mounted) {
          let allEmpty = true;
          indices = indices.map((count) => {
            if (count > 0) {
              allEmpty = false;
              return count - 1;
            }
            return count;
          });
          setCharIndices([...indices]);
          if (allEmpty) break;
          await delay(deleteSpeed);
        }

        // --- Short gap before restart ---
        await delay(400);
      }
    }

    runLoop();

    return () => {
      mounted = false;
      timerIds.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {entries.map((entry, i) => {
        const isRtl = entry.direction === "rtl";
        const charCount = charIndices[i] || 0;
        const text = isRtl
          ? entry.text.slice(entry.text.length - charCount)
          : entry.text.slice(0, charCount);

        return (
          <span key={i} className="inline-flex items-center gap-3">
            <span className="inline-block whitespace-nowrap">
              <span dir={isRtl ? "rtl" : "ltr"} className="inline-block">
                {text}
              </span>
            </span>
            {i < entries.length - 1 && (
              <span className="text-cyan-400/60">{divider}</span>
            )}
          </span>
        );
      })}
    </span>
  );
}
