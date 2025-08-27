"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  thumbnail?: string;
};

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-xl border border-black/10 bg-white/70 shadow-sm overflow-hidden flex flex-col"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-40 w-full bg-black/5">
          <Image
            src={project.thumbnail || "/next.svg"}
            alt={project.title}
            fill
            className="object-contain p-6"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="font-semibold text-lg leading-tight">
            <Link href={`/projects/${project.slug}`} className="hover:text-primary">
              {project.title}
            </Link>
          </h3>
          <p className="text-sm text-black/70 mt-1">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((t) => (
            <span key={t} className="text-xs rounded-full bg-accent/10 text-accent px-2 py-1">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80"
          >
            View Details →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}


