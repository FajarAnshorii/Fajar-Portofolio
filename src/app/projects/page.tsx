import ProjectsPage from "@/components/ProjectsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Muhammad Fajar Anshori",
  description: "All projects portfolio of Muhammad Fajar Anshori - Fullstack Developer.",
};

export default function Projects() {
  return <ProjectsPage />;
}