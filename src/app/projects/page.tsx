import type { Metadata } from "next";
import ProjectsContent from "@/components/pages/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore full-stack web applications, AI platforms, component libraries, and IoT systems built by Roshith Prakash — including Grid Manager, The Thought Journal, Quizzer AI, and Re-use-it!.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects — Roshith Prakash",
    description:
      "A curated collection of full-stack web applications, AI tools, and developer libraries built by Roshith Prakash.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
