"use client";

import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const allExperiences = [
  {
    company: "Stechoq Academy",
    role: "Fullstack Developer",
    period: "2024",
    location: "Indonesia",
    description:
      "Mengembangkan dan memelihara platform pembelajaran online. Bertanggung jawab penuh pada development end-to-end, dari frontend interface hingga backend API.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express.js"],
  },
  {
    company: "Bank Jatim",
    role: "UI/UX Designer",
    period: "2025",
    location: "Surabaya, Indonesia",
    description:
      "Merancang antarmuka pengguna untuk sistem informasi perbankan. Berkolaborasi dengan tim developer untuk implementasi desain yang responsif dan aksesibel.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  },
  {
    company: "BYL Services",
    role: "CEO - Digital Agency",
    period: "2024 - Present",
    location: "Indonesia",
    description:
      "Memimpin dan mengelola agensi digital yang fokus pada pengembangan web dan solusi digital. Mengelola tim, proyek, dan hubungan klien.",
    technologies: ["Leadership", "Project Management", "Web Development", "Strategy"],
  },
  {
    company: "PT P.E.P.C.Media",
    role: "Content Creator",
    period: "2025",
    location: "Indonesia",
    description:
      "Membuat konten visual menggunakan Canva dan Capcut untuk berbagai platform media sosial. Fokus pada konten kreatif dan engaging untuk meningkatkan brand awareness.",
    technologies: ["Canva", "CapCut", "Content Creation", "Social Media"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 text-[#9ca3af] hover:text-white transition-colors"
            >
              <FaArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>

            <Link
              href="/"
              className="relative flex items-center justify-center w-28 h-28 -mt-2 -mb-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt="JarDev Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              My Experience
            </h1>
            <p className="text-[#9ca3af] max-w-2xl mx-auto">
              Berikut adalah semua pengalaman kerja dan perjalanan profesional saya.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#1f1f1f] transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {allExperiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#2563eb] rounded-full transform -translate-x-1.5 md:-translate-x-1/2 border-4 border-[#0a0a0a] z-10" />

                  {/* Content Card */}
                  <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-[#111111] rounded-xl p-6 border border-[#1f1f1f] hover:border-[#2563eb]/30 transition-all duration-300 hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-white font-bold text-lg mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-[#2563eb] font-medium">{exp.company}</p>
                        </div>
                        <FaBriefcase className="text-[#9ca3af] w-5 h-5" />
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-[#9ca3af] text-sm">
                          <FaCalendarAlt size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#9ca3af] text-sm">
                          <FaMapMarkerAlt size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-[#0a0a0a] text-[#9ca3af] rounded-full border border-[#1f1f1f]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
