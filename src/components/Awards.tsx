"use client";

import { FaTrophy, FaMedal, FaStar, FaAward, FaCertificate } from "react-icons/fa";
import AnimatedCounter from "./AnimatedCounter";

const awards = [
  {
    title: "Lolos Seleksi PKM Internal Fakultas Teknik",
    organization: "Fakultas Teknik Universitas Trunojoyo Madura",
    year: "2023",
    icon: FaTrophy,
    color: "#f59e0b",
  },
  {
    title: "Speakers Dutalks",
    organization: "Dutalks",
    year: "2023",
    subtitle: '"Menepis Stereotip: Menjawab Tantangan Manajemen Waktu dan Publik Speaking bagi Mahasiswa Fakultas Teknik"',
    icon: FaStar,
    color: "#3b82f6",
  },
  {
    title: "MC Diktat AMUNISI",
    organization: "UKM-FT Inovasi",
    year: "2023",
    icon: FaAward,
    color: "#8b5cf6",
  },
  {
    title: "Duta Public Speaking",
    organization: "Universitas Trunojoyo Madura",
    year: "2022",
    icon: FaMedal,
    color: "#f59e0b",
  },
  {
    title: "Nominasi Best Speech Duta Public Speaking",
    organization: "Universitas Trunojoyo Madura",
    year: "2022",
    icon: FaStar,
    color: "#10b981",
  },
  {
    title: "Member Duta Pendidikan Jawa Timur",
    organization: "Duta Pendidikan Jawa Timur",
    year: "2021",
    icon: FaCertificate,
    color: "#3b82f6",
  },
  {
    title: "AMUNISI Terbaik UKM-FT INOVASI",
    organization: "UKM-FT Inovasi",
    year: "2021",
    icon: FaTrophy,
    color: "#f59e0b",
  },
  {
    title: "Best Speech Webinar Nasional",
    organization: "Karang Taruna Surabaya",
    year: "2021",
    subtitle: "Diselenggarakan oleh Karang Taruna Surabaya",
    icon: FaAward,
    color: "#ef4444",
  },
  {
    title: "Peserta Terbaik Pelatihan Desain",
    organization: "HIMASI",
    year: "2021",
    subtitle: "Himpunan Mahasiswa Sistem Informasi",
    icon: FaMedal,
    color: "#22c55e",
  },
  {
    title: "Juara 2 Tournament MLBB",
    organization: "SMKN 7 Surabaya",
    year: "2020",
    subtitle: "Piala Kejujuran",
    icon: FaTrophy,
    color: "#f59e0b",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-20 sm:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Awards & Achievements</h2>
          <div className="flex-1 h-px bg-[#1f1f1f] max-w-xs" />
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                className="group bg-[#0a0a0a] rounded-xl p-5 border border-[#1f1f1f] hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2563eb]/5"
                style={{
                  borderColor: "transparent",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = award.color + "50";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 10px 30px -10px ${award.color}20`;
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
                      backgroundColor: `${award.color}15`,
                    }}
                  >
                    <IconComponent
                      size={24}
                      style={{ color: award.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-[#2563eb] transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-[#9ca3af] text-xs mb-1">{award.organization}</p>
                    {award.subtitle && (
                      <p className="text-gray-500 text-xs italic mb-1 line-clamp-2">
                        {award.subtitle}
                      </p>
                    )}
                    <span
                      className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                      style={{
                        backgroundColor: `${award.color}15`,
                        color: award.color,
                      }}
                    >
                      {award.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-[#0a0a0a] rounded-xl p-6 text-center border border-[#1f1f1f]">
            <p className="text-3xl font-bold text-[#f59e0b] mb-1">
              <AnimatedCounter end={10} suffix="+" />
            </p>
            <p className="text-[#9ca3af] text-sm">Total Awards</p>
          </div>
          <div className="bg-[#0a0a0a] rounded-xl p-6 text-center border border-[#1f1f1f]">
            <p className="text-3xl font-bold text-[#3b82f6] mb-1">
              <AnimatedCounter end={5} suffix="+" />
            </p>
            <p className="text-[#9ca3af] text-sm">Years Active</p>
          </div>
          <div className="bg-[#0a0a0a] rounded-xl p-6 text-center border border-[#1f1f1f]">
            <p className="text-3xl font-bold text-[#8b5cf6] mb-1">
              <AnimatedCounter end={3} />
            </p>
            <p className="text-[#9ca3af] text-sm">Championships</p>
          </div>
          <div className="bg-[#0a0a0a] rounded-xl p-6 text-center border border-[#1f1f1f]">
            <p className="text-3xl font-bold text-[#22c55e] mb-1">
              <AnimatedCounter end={2} />
            </p>
            <p className="text-[#9ca3af] text-sm">Duta Titles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
