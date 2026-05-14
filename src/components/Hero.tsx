"use client";

import Image from "next/image";
import Particles from "./Particles";
import TypingText from "./TypingText";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://id.linkedin.com/in/mfajaranshori",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/dagangturnitin01?igsh=ZGt3ZnRiZnA1bnVh",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://github.com/FajarAnsh",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "mailto:fajar25062002@gmail.com",
    icon: FaEnvelope,
    label: "Email",
  },
  {
    href: "https://wa.me/628990415500",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

export default function Hero() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setIsLightMode(document.documentElement.classList.contains("light"));

    const observer = new MutationObserver(() => {
      setIsLightMode(document.documentElement.classList.contains("light"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particles Animation Background - HIGHEST z-index among backgrounds */}
      <Particles />

      {/* Background gradient - TRANSPARENT to let particles show through */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/80 via-[#0f172a]/80 to-[#0a0a0a]/80 backdrop-blur-[1px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Avatar Photo */}
        <div className="mb-8 flex justify-center animate-fade-in-up">
          <div className="relative">
            <div className="absolute inset-0 bg-[#2563eb] rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#2563eb]/30 shadow-lg">
              <Image
                src="/fajar-profile.jpg"
                alt="Muhammad Fajar Anshori"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Greeting */}
        <p className="text-[#9ca3af] text-sm uppercase tracking-[0.3em] mb-4 animate-fade-in-up font-medium" style={{ animationDelay: "0.1s" }}>
          Hi, my name is
        </p>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up tracking-tight"
          style={{ animationDelay: "0.2s" }}
        >
          <span
            className="transition-colors duration-300"
            style={{
              color: isLightMode ? "#0f172a" : "#ffffff",
            }}
          >
            Muhammad Fajar Anshori
          </span>
        </h1>

        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-[#9ca3af]">I build </span>
          <TypingText
            texts={[
              "web experiences",
              "innovative solutions",
              "modern applications",
              "user interfaces",
            ]}
            className="gradient-text"
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={2000}
          />
        </h2>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-[#9ca3af] text-lg mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Merancang serta mengimplementasikan aplikasi web secara menyeluruh
          dengan pendekatan modern dan efisien. Berfokus pada pengembangan
          Fullstack dan Frontend menggunakan teknologi seperti{" "}
          <span className="text-white">React</span> dan{" "}
          <span className="text-white">Node.js</span> untuk menghadirkan
          tampilan yang responsif, performa optimal, serta pengalaman pengguna
          yang intuitif.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#projects");
            }}
            className="px-8 py-4 bg-[#2563eb] text-white rounded-lg font-medium hover:bg-[#3b82f6] hover:scale-105 transition-all duration-300 glow-blue-hover"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact");
            }}
            className="px-8 py-4 border border-[#1f1f1f] text-white rounded-lg font-medium hover:bg-[#1f1f1f] hover:border-[#2563eb] transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-[#9ca3af] hover:text-[#2563eb] hover:bg-[#1f1f1f] rounded-lg transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("#about");
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#9ca3af] hover:text-white transition-colors animate-bounce"
        >
          <FaChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
