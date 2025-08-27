import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import ProjectFilterClient from "@/components/ProjectFilterClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio projects across Excel, Tableau, Power BI, Python, SQL, and Azure.",
};

export default async function ProjectsPage() {
  const projects = getAllProjects().map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    technologies: p.technologies,
    thumbnail: p.thumbnail,
  }));

  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
      <p className="mt-2 text-black/70 max-w-prose">
        Explore projects by technology. Filter to view Excel dashboards, Tableau stories, Power BI visuals,
        Python notebooks, SQL work, and Azure data pipelines.
      </p>
      <ProjectFilterClient projects={projects} />
    </div>
  );
}


