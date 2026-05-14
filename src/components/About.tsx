"use client";

import Image from "next/image";
import DownloadCV from "./DownloadCV";
import StaggeredItem from "./StaggeredItem";
import AnimatedCounter from "./AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <StaggeredItem animation="fade" delay={0}>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold">01.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">About Me</h2>
            <div className="flex-1 h-px bg-[#1f1f1f] max-w-xs" />
          </div>
        </StaggeredItem>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <StaggeredItem animation="left" delay={100}>
              <p className="text-[#9ca3af] leading-relaxed">
                Halo! Nama saya{" "}
                <span className="text-white font-medium">Muhammad Fajar Anshori</span>,
                seorang Fullstack Developer yang passionate dalam membangun aplikasi web
                modern dan efisien.
              </p>
            </StaggeredItem>

            <StaggeredItem animation="left" delay={200}>
              <p className="text-[#9ca3af] leading-relaxed">
                Merancang serta mengimplementasikan aplikasi web secara menyeluruh dengan
                pendekatan modern dan efisien. Berfokus pada pengembangan Fullstack dan
                Frontend menggunakan teknologi seperti React, Next.js, Node.js, dan TypeScript
                untuk menghadirkan tampilan yang responsif, performa optimal, serta
                pengalaman pengguna yang intuitif.
              </p>
            </StaggeredItem>

            <StaggeredItem animation="left" delay={300}>
              <p className="text-[#9ca3af] leading-relaxed">
                Telah mengerjakan berbagai proyek including platform digital rumah sakit
                (MedikaCare), chatbot dengan 14 AI providers (Soobin ChatBot), e-commerce,
                dan LMS. Dengan pengalaman di berbagai teknologi seperti PostgreSQL, Prisma,
                Docker, dan integrasi API AI, saya selalu berusaha menciptakan solusi yang
                fungsional dan memberikan pengalaman pengguna yang luar biasa.
              </p>
            </StaggeredItem>

            {/* Quick Facts */}
            <StaggeredItem animation="left" delay={400}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-[#111111] rounded-lg border border-[#1f1f1f]">
                  <p className="text-[#2563eb] font-bold text-2xl">
                    <AnimatedCounter end={2} suffix="+" />
                  </p>
                  <p className="text-[#9ca3af] text-sm">Years Experience</p>
                </div>
                <div className="p-4 bg-[#111111] rounded-lg border border-[#1f1f1f]">
                  <p className="text-[#2563eb] font-bold text-2xl">
                    <AnimatedCounter end={11} suffix="+" />
                  </p>
                  <p className="text-[#9ca3af] text-sm">Projects Completed</p>
                </div>
              </div>
            </StaggeredItem>
          </div>

          {/* Profile Photo & CV Button */}
          <div className="flex flex-col items-center lg:items-end mt-[-80px]">
            <StaggeredItem animation="right" delay={100}>
              {/* Profile Photo */}
              <div className="relative group">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-[#2563eb] rounded-2xl blur-2xl opacity-20 animate-pulse" />

                {/* Main photo container with hover effects */}
                <div className="relative w-72 h-80 sm:w-100 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#1f1f1f] shadow-lg transition-all duration-500 group-hover:border-[#2563eb] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  <Image
                    src="/fajar-profile.jpg"
                    alt="Muhammad Fajar Anshori"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Animated decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2563eb] rounded-lg opacity-50 animate-bounce" style={{ animationDuration: "2s" }} />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#3b82f6] rounded-lg opacity-30 animate-bounce" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />

                {/* Additional floating decorative elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#2563eb]/30 rounded-full animate-ping" style={{ animationDuration: "4s" }} />
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#3b82f6]/40 rounded-full animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
              </div>
            </StaggeredItem>

            <StaggeredItem animation="right" delay={200}>
              {/* Download CV Button */}
              <div className="w-full flex justify-center lg:justify-end mt-6 pr-25">
                <DownloadCV />
              </div>
            </StaggeredItem>
          </div>
        </div>
      </div>
    </section>
  );
}