"use client";

import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";

const contactLinks = [
  {
    href: "https://github.com/FajarAnsh",
    icon: FaGithub,
    label: "GitHub",
    username: "mfajaranshori",
    color: "hover:text-[#f0f6fc]",
  },
  {
    href: "https://id.linkedin.com/in/mfajaranshori",
    icon: FaLinkedin,
    label: "LinkedIn",
    username: "mfajaranshori",
    color: "hover:text-[#0077b5]",
  },
  {
    href: "https://www.instagram.com/dagangturnitin01?igsh=ZGt3ZnRiZnA1bnVh",
    icon: FaInstagram,
    label: "Instagram",
    username: "@dagangturnitin01",
    color: "hover:text-[#e1306c]",
  },
  {
    href: "mailto:fajar25062002@gmail.com",
    icon: FaEnvelope,
    label: "Email",
    username: "fajar25062002@gmail.com",
    color: "hover:text-[#2563eb]",
  },
  {
    href: "https://wa.me/628990415500",
    icon: FaWhatsapp,
    label: "WhatsApp",
    username: "+62 899 041 5500",
    color: "hover:text-[#25d366]",
  },
  {
    href: "#",
    icon: FaMapMarkerAlt,
    label: "Location",
    username: "Surabaya, Indonesia",
    color: "hover:text-[#f59e0b]",
    isStatic: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold">08.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact</h2>
          <div className="flex-1 h-px bg-[#1f1f1f] max-w-xs" />
        </div>

        {/* Intro Text */}
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h3>
          <p className="text-[#9ca3af] max-w-xl mx-auto leading-relaxed">
            Meskipun saya saat ini mungkin tidak mencari pekerjaan baru, saya
            selalu terbuka untuk diskusi, kolaborasi, atau sekadar ngobrol
            tentang teknologi. Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((contact) => (
            contact.isStatic ? (
              <div
                key={contact.label}
                className="group bg-[#111111] rounded-xl p-6 border border-[#1f1f1f] hover:border-[#2563eb]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2563eb]/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-[#1f1f1f] rounded-lg group-hover:bg-[#2563eb]/10 transition-colors">
                    <contact.icon
                      size={24}
                      className={`text-[#9ca3af] ${contact.color} transition-colors`}
                    />
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-1">{contact.label}</h4>
                <p className="text-[#9ca3af] text-sm">{contact.username}</p>
              </div>
            ) : (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#111111] rounded-xl p-6 border border-[#1f1f1f] hover:border-[#2563eb]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2563eb]/10"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-[#1f1f1f] rounded-lg group-hover:bg-[#2563eb]/10 transition-colors">
                    <contact.icon
                      size={24}
                      className={`text-[#9ca3af] ${contact.color} transition-colors`}
                    />
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-1">{contact.label}</h4>
                <p className="text-[#9ca3af] text-sm truncate">{contact.username}</p>
              </a>
            )
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://wa.me/628990415500"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563eb] text-white rounded-lg font-medium hover:bg-[#3b82f6] hover:scale-105 transition-all duration-300 glow-blue"
          >
            <FaPaperPlane size={18} />
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  );
}