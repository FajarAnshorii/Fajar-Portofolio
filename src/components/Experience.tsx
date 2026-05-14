"use client";

import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

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

// Only show first 3 experiences on main page
const displayExperiences = allExperiences.slice(0, 3);

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold">06.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Experience</h2>
          <div className="flex-1 h-px bg-[#1f1f1f] max-w-xs" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#1f1f1f] transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {displayExperiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#2563eb] rounded-full transform -translate-x-1.5 md:-translate-x-1/2 border-4 border-[#111111] z-10" />

                {/* Content Card */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-[#0a0a0a] rounded-xl p-6 border border-[#1f1f1f] hover:border-[#2563eb]/30 transition-all duration-300 hover:-translate-y-1">
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
                          className="px-3 py-1 text-xs bg-[#1f1f1f] text-[#9ca3af] rounded-full"
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

        {/* See All Button */}
        <div className="text-center mt-12">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#1f1f1f] text-[#9ca3af] rounded-lg hover:border-[#2563eb] hover:text-white transition-all duration-300"
          >
            See All Experience
            <FaExternalLinkAlt size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Export all experiences for the experience page
export { allExperiences };
