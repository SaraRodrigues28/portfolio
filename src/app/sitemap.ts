import { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://your-domain.com";
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/projects`, priority: 0.9 },
    { url: `${base}/contact`, priority: 0.7 },
  ];
  const projectRoutes = getAllProjects().map((p) => ({ url: `${base}/projects/${p.slug}`, priority: 0.7 }));
  return [...staticRoutes, ...projectRoutes];
}


