"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFolderOpen, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MedikaCare",
    description: "MedikaCare adalah platform digital rumah sakit untuk pasien booking appointment dan melihat dokter, serta panel admin untuk mengelola seluruh data rumah sakit.",
    tech: "Next.js, React, PostgreSQL, Prisma",
    github: "https://github.com/FajarAnsh/MedikaCare.git",
  },
  {
    title: "Soobin ChatBot",
    description: "Soobin Bot is an Indonesian chatbot with 45+ features including 14 AI providers.",
    tech: "Python, Discord.js, OpenAI, Claude API, Gemini",
    github: "https://github.com/FajarAnsh/ChatBot-Soobin.git",
  },
  {
    title: "E-Commerce Kebon Alam Ecoprint",
    description: "Perancangan Website E-Commerce untuk Toko Batik Kebon Alam Ecoprint Surabaya.",
    tech: "MongoDB, Express Js, React Js, Node Js",
    github: "https://github.com/FajarAnsh/Kebon-Alam-Ecoprint",
    image: "/kebon-alam-cover.png",
  },
  {
    title: "LMS SMAN 08 Surabaya",
    description: "Proyek Website LMS kolaborasi sama SMAN 08 untuk kebutuhan Tugas dan Ujian di SMAN 08 Surabaya.",
    tech: "Laravel, PHP, Node Js",
    github: "https://github.com/FajarAnsh/LMS-SMAN-08-Surabaya",
    image: "/lms-sman-8-cover.jpg",
  },
  {
    title: "Sekolah Pintar Laravel",
    description: "Website ini dibuat untuk kebutuhan ranking dan data mahasiswa Sekolah Pintar.",
    tech: "Laravel, PHP, MySQL, Bootstrap",
    github: "https://github.com/FajarAnsh/Sekolah-Pintar-Laravel.git",
    image: "/sekolah-pintar-cover.jpg",
  },
  {
    title: "YuGi Pedia",
    description: "Koleksi kartu Yu-Gi-Oh! terlengkap di Indonesia dengan fitur lengkap meliputi album kartu, filter Monster/Spell/Trap, cek harga real-time dari berbagai marketplace, dan dark mode. Didukung database PostgreSQL dan API YGOPRODeck.",
    tech: "Next.js, React, PostgreSQL, API YGOPRODeck",
    github: "https://github.com/FajarAnsh/YuGi-Pedia.git",
    image: "/yugi-pedia-cover.jpg",
  },
  {
    title: "Stechoq Academy Platform",
    description: "Platform pembelajaran online dengan fitur kursus dan quiz interaktif.",
    tech: "React, Node.js, PostgreSQL",
    github: "https://github.com/FajarAnsh",
  },
  {
    title: "Bank Timur Dashboard",
    description: "Dashboard UI/UX design untuk sistem informasi perbankan.",
    tech: "Figma, React, Tailwind CSS",
    github: "https://github.com/FajarAnsh",
  },
  {
    title: "BYL Services Website",
    description: "Website company profile untuk digital agency BYL Services.",
    tech: "Next.js, TypeScript, Framer Motion",
    github: "https://github.com/FajarAnsh",
  },
  {
    title: "E-Commerce Platform",
    description: "Platform e-commerce dengan fitur keranjang dan pembayaran.",
    tech: "React, Node.js, MongoDB, Stripe",
    github: "https://github.com/FajarAnsh",
  },
  {
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan fitur kolaborasi tim.",
    tech: "Next.js, Prisma, PostgreSQL",
    github: "https://github.com/FajarAnsh",
  },
];

const displayedProjects = projects.slice(0, 6);

export default function Projects() {
  const totalProjects = projects.length;
  const remainingCount = totalProjects - displayedProjects.length;
  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold">05.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-[#1f1f1f] max-w-xs" />
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group h-full flex flex-col bg-[#111111] rounded-xl border border-[#1f1f1f] hover:border-[#2563eb]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Content - Header, Title, Description */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <FaFolderOpen className="text-[#2563eb] w-8 h-8" />
                  <div className="flex gap-2">
                    <a
                      href={project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#9ca3af] hover:text-[#2563eb] hover:bg-[#1f1f1f] rounded-lg transition-all duration-300"
                      aria-label="View on GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#2563eb] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed min-h-24 line-clamp-4">
                  {project.description}
                </p>
              </div>

              {/* Bottom Content - Image & Tech Stack (mt-auto pushes to bottom) */}
              <div className="mt-auto p-6 pt-0">
                {/* Project Image */}
                {project.image ? (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#1f1f1f]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#2563eb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ) : (
                  <div className="bg-[#0a0a0a] border-2 border-dashed border-[#1f1f1f] rounded-lg aspect-video flex items-center justify-center hover:border-[#2563eb]/30 transition-colors group-hover:border-[#2563eb]/50">
                    <div className="text-center">
                      <FaFolderOpen
                        size={40}
                        className="text-[#1f1f1f] mx-auto mb-2 group-hover:text-[#2563eb]/30 transition-colors"
                      />
                      <p className="text-[#1f1f1f] text-xs group-hover:text-[#2563eb]/30 transition-colors">
                        Image coming soon
                      </p>
                    </div>
                  </div>
                )}

                {/* Tech Stack Footer */}
                <p className="text-xs text-[#9ca3af] font-mono mt-4">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#1f1f1f] text-[#9ca3af] rounded-lg hover:border-[#2563eb] hover:text-white transition-all duration-300"
          >
            See All Projects ({remainingCount}+)
            <FaExternalLinkAlt size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}