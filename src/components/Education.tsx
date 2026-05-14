"use client";

import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import StaggeredItem from "./StaggeredItem";

const educationData = [
  {
    school: "Universitas Trunojoyo Madura",
    degree: "Sarjana (S1) - Sistem Informasi",
    period: "2022 - Sekarang",
    location: "Bangkalan, Madura",
    description:
      "Fokus pada pengembangan sistem informasi, analisis data, dan teknologi informasi. Aktif dalam berbagai kegiatan organisasi dan proyek pengembangan aplikasi.",
    status: " ongoing",
  },
  {
    school: "SMKN 7 Surabaya",
    degree: "Teknik Komputer dan Jaringan",
    period: "2019 - 2022",
    location: "Surabaya, Indonesia",
    description:
      "Mempelajari dasar-dasar jaringan komputer, troubleshooting, dan administrasi sistem. Serta belajar dasar programming dan IT infrastructure.",
    status: "graduate",
  },
  {
    school: "SMP Mujahidin Surabaya",
    degree: "Pendidikan Menengah Pertama",
    period: "2016 - 2019",
    location: "Surabaya, Indonesia",
    description:
      "Pendidikan menengah pertama dengan fokus pada dasar-dasar akademik.",
    status: "graduate",
  },
  {
    school: "SDN Tandes Kidul II",
    degree: "Pendidikan Dasar",
    period: "2010 - 2016",
    location: "Surabaya, Indonesia",
    description:
      "Pendidikan dasar yang membangun fondasi akademik dan karakter.",
    status: "graduate",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <StaggeredItem animation="fade" delay={0}>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold">02.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Education</h2>
            <div className="flex-1 h-px bg-[#1f1f1f] max-w-xs" />
          </div>
        </StaggeredItem>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <StaggeredItem key={index} animation="up" delay={index * 100}>
              <div className="group bg-[#0a0a0a] rounded-xl p-6 border border-[#1f1f1f] hover:border-[#2563eb]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2563eb]/5">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#2563eb]/10 rounded-lg group-hover:bg-[#2563eb]/20 transition-colors">
                    <FaGraduationCap className="text-[#2563eb] w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-bold text-lg group-hover:text-[#2563eb] transition-colors">
                        {edu.school}
                      </h3>
                      {edu.status === "ongoing" && (
                        <span className="px-2 py-0.5 text-xs bg-[#2563eb]/20 text-[#2563eb] rounded-full">
                          Ongoing
                        </span>
                      )}
                    </div>
                    <p className="text-[#2563eb] text-sm font-medium">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 ml-[4.5rem]">
                  <div className="flex items-center gap-2 text-[#9ca3af] text-sm">
                    <FaCalendarAlt size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#9ca3af] text-sm">
                    <FaMapMarkerAlt size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#9ca3af] text-sm leading-relaxed ml-[4.5rem]">
                  {edu.description}
                </p>
              </div>
            </StaggeredItem>
          ))}
        </div>
      </div>
    </section>
  );
}