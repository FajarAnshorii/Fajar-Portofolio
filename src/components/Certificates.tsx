"use client";

import { FaCertificate, FaAward, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import AnimatedCounter from "./AnimatedCounter";

const certificates = [
  {
    title: "Pelatihan Bootcamp UI/UX",
    issuer: "BPSDMP Kominfo Surabaya",
    year: "2024",
    icon: FaCertificate,
    color: "#f59e0b",
    category: "Bootcamp",
  },
  {
    title: "Back-End Developer for System Management Warehouse",
    issuer: "Studi Independen - PT Stechoq Robotika Indonesia",
    year: "2024",
    icon: FaLaptopCode,
    color: "#3b82f6",
    category: "Professional",
  },
  {
    title: "Learning Data Analytics",
    issuer: "Linkedin Learning",
    year: "2021",
    icon: FaGraduationCap,
    color: "#0077b5",
    category: "Online Course",
  },
  {
    title: "Unity Terrain Tutorial: Generate Terrain and Unique Worlds Quickly",
    issuer: "BitDegree",
    year: "2021",
    icon: FaAward,
    color: "#8b5cf6",
    category: "Game Development",
  },
  {
    title: "Complete Beginners Course to Master Microsoft Excel",
    issuer: "Eduonix Learning Solutions",
    year: "2021",
    icon: FaCertificate,
    color: "#21a366",
    category: "Professional Skills",
  },
  {
    title: "Converse, Collaborate, and Build Community in Teams",
    issuer: "Microsoft",
    year: "2021",
    icon: FaAward,
    color: "#00a4ef",
    category: "Professional Skills",
  },
  {
    title: "Pola Pikir Sukses",
    issuer: "HP LIFE",
    year: "2021",
    icon: FaGraduationCap,
    color: "#10b981",
    category: "Personal Development",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold">07.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Certificates</h2>
          <div className="flex-1 h-px bg-[#1f1f1f] max-w-xs" />
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-[#9ca3af] leading-relaxed max-w-3xl">
            Berikut adalah sertifikasi dan pelatihan yang telah saya ikuti untuk
            meningkatkan keahlian dan kompetensi di berbagai bidang teknologi dan
            pengembangan profesional.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="group bg-[#111111] rounded-xl p-5 border border-[#1f1f1f] hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  borderColor: "transparent",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = cert.color + "50";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 10px 30px -10px ${cert.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${cert.color}15`,
                    }}
                  >
                    <IconComponent
                      size={24}
                      style={{ color: cert.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-[#2563eb] transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                    <p className="text-[#9ca3af] text-xs mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                        style={{
                          backgroundColor: `${cert.color}15`,
                          color: cert.color,
                        }}
                      >
                        {cert.year}
                      </span>
                      <span className="text-gray-600 text-xs">•</span>
                      <span className="text-gray-500 text-xs">{cert.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-[#111111] rounded-xl p-6 text-center border border-[#1f1f1f] hover:border-[#f59e0b]/50 transition-colors">
            <p className="text-3xl font-bold text-[#f59e0b] mb-1">
              <AnimatedCounter end={7} suffix="+" />
            </p>
            <p className="text-[#9ca3af] text-sm">Total Certificates</p>
          </div>
          <div className="bg-[#111111] rounded-xl p-6 text-center border border-[#1f1f1f] hover:border-[#3b82f6]/50 transition-colors">
            <p className="text-3xl font-bold text-[#3b82f6] mb-1">
              <AnimatedCounter end={4} suffix="+" />
            </p>
            <p className="text-[#9ca3af] text-sm">Years Learning</p>
          </div>
          <div className="bg-[#111111] rounded-xl p-6 text-center border border-[#1f1f1f] hover:border-[#8b5cf6]/50 transition-colors">
            <p className="text-3xl font-bold text-[#8b5cf6] mb-1">
              <AnimatedCounter end={5} suffix="+" />
            </p>
            <p className="text-[#9ca3af] text-sm">Organizations</p>
          </div>
          <div className="bg-[#111111] rounded-xl p-6 text-center border border-[#1f1f1f] hover:border-[#22c55e]/50 transition-colors">
            <p className="text-3xl font-bold text-[#22c55e] mb-1">
              <AnimatedCounter end={100} suffix="+" />
            </p>
            <p className="text-[#9ca3af] text-sm">Hours Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
