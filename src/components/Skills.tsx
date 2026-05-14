"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
  SiNpm,
  SiGit,
  SiGithub,
  SiFigma,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiVscodium,
  SiVite,
} from "react-icons/si";

interface SkillItem {
  name: string;
  percentage: number;
  years: string;
  projects: string;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  color: string;
  colorDark: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "FULLSTACK DEVELOPER",
    subtitle: "Complete Solutions",
    color: "#22c55e",
    colorDark: "#16a34a",
    skills: [
      { name: "JavaScript", percentage: 65, years: "2", projects: "11", icon: SiJavascript },
      { name: "TypeScript", percentage: 80, years: "2", projects: "8", icon: SiTypescript },
      { name: "React/Next.js", percentage: 65, years: "2", projects: "9", icon: SiReact },
      { name: "Node.js", percentage: 65, years: "2", projects: "7", icon: SiNodedotjs },
    ],
  },
  {
    title: "FRONTEND",
    subtitle: "User Experience",
    color: "#3b82f6",
    colorDark: "#2563eb",
    skills: [
      { name: "HTML/CSS", percentage: 100, years: "2", projects: "11", icon: SiHtml5 },
      { name: "Tailwind CSS", percentage: 65, years: "2", projects: "9", icon: SiTailwindcss },
      { name: "Responsive Design", percentage: 100, years: "2", projects: "11", icon: SiVite },
      { name: "UI/UX Design", percentage: 20, years: "2", projects: "3", icon: SiFigma },
    ],
  },
  {
    title: "BACKEND",
    subtitle: "Server & Database",
    color: "#a855f7",
    colorDark: "#9333ea",
    skills: [
      { name: "REST API", percentage: 35, years: "2", projects: "5", icon: SiExpress },
      { name: "Database", percentage: 100, years: "2", projects: "7", icon: SiPostgresql },
      { name: "Authentication", percentage: 0, years: "2", projects: "2", icon: SiFirebase },
      { name: "Express.js", percentage: 65, years: "2", projects: "5", icon: SiExpress },
    ],
  },
  {
    title: "TOOLS & DEVOPS",
    subtitle: "Development Stack",
    color: "#f59e0b",
    colorDark: "#d97706",
    skills: [
      { name: "Git/GitHub", percentage: 100, years: "2", projects: "11", icon: SiGit },
      { name: "Docker", percentage: 35, years: "1", projects: "2", icon: SiDocker },
      { name: "VS Code", percentage: 100, years: "2", projects: "11", icon: SiVscodium },
      { name: "Figma", percentage: 35, years: "1", projects: "3", icon: SiFigma },
    ],
  },
];

// Animated counter component
function AnimatedNumber({
  target,
  duration = 2000,
  prefix = "",
  suffix = "",
  active,
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!active) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (target - startValue) * easeOut);

      setCount(current);

      // Create coding effect with random intermediate numbers
      if (progress < 1) {
        const randomOffset = Math.random() > 0.7 ? Math.floor(Math.random() * 3) : 0;
        setDisplayValue(`${prefix}${current + randomOffset}${suffix}`);
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(`${prefix}${target}${suffix}`);
      }
    };

    animate();
  }, [active, target, duration, prefix, suffix]);

  return (
    <span className="font-mono tabular-nums">
      {displayValue}
    </span>
  );
}

// Progress bar with animation
function SkillBar({
  percentage,
  color,
  active,
}: {
  percentage: number;
  color: string;
  active: boolean;
}) {
  return (
    <div className="relative h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
        style={{
          width: active ? `${percentage}%` : "0%",
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}40, 0 0 20px ${color}20`,
        }}
      />
      {/* Animated shine effect */}
      <div
        className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          opacity: active ? 1 : 0,
          animation: active ? "shine 2s ease-in-out infinite" : "none",
        }}
      />
    </div>
  );
}

// Single skill item with icon
function SkillItemComponent({
  skill,
  color,
  index,
  active,
}: {
  skill: SkillItem;
  color: string;
  index: number;
  active: boolean;
}) {
  const IconComponent = skill.icon;

  return (
    <div
      className="group"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Skill name with icon and percentage */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <IconComponent
            className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            style={{ color: color }}
          />
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span
          className="text-xs font-mono px-2 py-0.5 rounded"
          style={{
            color: color,
            backgroundColor: `${color}15`,
          }}
        >
          <AnimatedNumber
            target={skill.percentage}
            suffix="%"
            active={active}
            duration={1500}
          />
        </span>
      </div>

      {/* Progress bar */}
      <SkillBar percentage={skill.percentage} color={color} active={active} />

      {/* Stats below bar */}
      <div className="flex gap-4 mt-2 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <span
            className="font-mono"
            style={{ color: color }}
          >
            <AnimatedNumber target={parseInt(skill.years)} active={active} duration={1200} />
          </span>
          Years Exp
        </span>
        <span className="flex items-center gap-1">
          <span
            className="font-mono"
            style={{ color: color }}
          >
            <AnimatedNumber target={parseInt(skill.projects)} active={active} duration={1400} />
          </span>
          Projects
        </span>
      </div>
    </div>
  );
}

// Category card
function SkillCategoryCard({
  category,
  index,
  active,
}: {
  category: SkillCategory;
  index: number;
  active: boolean;
}) {
  return (
    <div
      className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5 hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 group relative"
      style={{
        borderColor: active ? category.color + "40" : "#1a1a1a",
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Category header */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-xs font-mono opacity-60"
            style={{ color: category.color }}
          >
            {String(index + 1).padStart(2, "0")}.
          </span>
          <h3
            className="text-base font-bold tracking-wide"
            style={{ color: category.color }}
          >
            {category.title}
          </h3>
        </div>
        <p className="text-xs text-gray-500 ml-8">{category.subtitle}</p>
      </div>

      {/* Skills list */}
      <div className="space-y-5">
        {category.skills.map((skill, skillIndex) => (
          <SkillItemComponent
            key={skill.name}
            skill={skill}
            color={category.color}
            index={skillIndex}
            active={active}
          />
        ))}
      </div>

      {/* Decorative corner */}
      <div
        className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(225deg, ${category.color}20 0%, transparent 50%)`,
        }}
      />
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#0d0d0d] relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0d0d0d] via-[#0a0a0a] to-[#0d0d0d]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold font-mono">
            03.
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#1a1a1a] to-transparent max-w-xs" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              index={index}
              active={active}
            />
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Years Coding", value: 2, suffix: "+" },
            { label: "Projects Done", value: 11, suffix: "+" },
            { label: "Technologies", value: 8, suffix: "+" },
            { label: "Happy Clients", value: 10, suffix: "+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-500">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Code decorative element */}
        <div className="mt-12 font-mono text-xs text-gray-600">
          <div className="flex gap-2 mb-2">
            <span className="text-purple-500">const</span>
            <span className="text-blue-400">skills</span>
            <span className="text-white">=</span>
            <span className="text-yellow-400">{"{"}</span>
          </div>
          <div className="pl-4 space-y-1">
            <div>
              <span className="text-purple-500">frontend</span>
              <span className="text-gray-500">:</span>
              <span className="text-emerald-400 ml-2">mastering</span>
              <span className="text-gray-500">,</span>
            </div>
            <div>
              <span className="text-purple-500">backend</span>
              <span className="text-gray-500">:</span>
              <span className="text-emerald-400 ml-2">expert</span>
              <span className="text-gray-500">,</span>
            </div>
            <div>
              <span className="text-purple-500">passion</span>
              <span className="text-gray-500">:</span>
              <span className="text-emerald-400 ml-2">{"continuous learning"}</span>
            </div>
          </div>
          <div className="text-yellow-400">{"}"}</div>
        </div>
      </div>

      {/* CSS for shine animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
      `}</style>
    </section>
  );
}
