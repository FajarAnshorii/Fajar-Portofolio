"use client";

import { useEffect, useState, ReactNode } from "react";

interface StaggeredItemProps {
  children: ReactNode;
  animation?: "up" | "left" | "right" | "fade" | "scale";
  delay?: number;
  className?: string;
}

export default function StaggeredItem({
  children,
  animation = "up",
  delay = 0,
  className = "",
}: StaggeredItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, delay]);

  const animationClass = {
    up: "stagger-up",
    left: "stagger-left",
    right: "stagger-right",
    fade: "stagger-fade",
    scale: "stagger-scale",
  }[animation];

  return (
    <div
      ref={setRef}
      className={`stagger-item ${isVisible ? animationClass : ""} ${className}`}
    >
      {children}
    </div>
  );
}

// Container for multiple staggered items
interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggeredContainer({
  children,
  className = "",
  staggerDelay = 100,
}: StaggeredContainerProps) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <StaggeredItem
              key={index}
              animation="up"
              delay={index * staggerDelay}
            >
              {child}
            </StaggeredItem>
          ))
        : children}
    </div>
  );
}