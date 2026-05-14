"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorClassName?: string;
}

export default function TypingText({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  cursorClassName = "",
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setDisplayText(currentText.substring(0, displayText.length + 1));

          // Finished typing current text
          if (displayText.length === currentText.length) {
            // Wait, then start deleting
            setTimeout(() => setIsDeleting(true), pauseDuration);
            return;
          }
        } else {
          // Deleting
          setDisplayText(currentText.substring(0, displayText.length - 1));

          // Finished deleting
          if (displayText.length === 0) {
            setIsDeleting(false);
            // Move to next text
            setTextIndex((prev) => (prev + 1) % texts.length);
            return;
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-block ${className}`}>
      <span>{displayText}</span>
      <span
        className={`inline-block w-0.5 h-[1em] bg-[#2563eb] ml-1 animate-pulse ${cursorClassName}`}
      />
    </span>
  );
}
