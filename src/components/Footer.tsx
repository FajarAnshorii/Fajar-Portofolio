"use client";

import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
    href: "https://github.com",
    icon: FaGithub,
    label: "GitHub",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#111111] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-[#9ca3af] text-sm">
            <span>&copy; {currentYear} Muhammad Fajar Anshori.</span>
            <span className="flex items-center gap-1">
              Built with <FaHeart size={14} className="text-[#2563eb]" /> using
              Next.js
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#9ca3af] hover:text-[#2563eb] hover:bg-[#1f1f1f] rounded-lg transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}