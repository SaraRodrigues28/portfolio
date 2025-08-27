"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { ProjectMeta } from "@/components/ProjectCard";

export default function ProjectFilterClient({ projects }: { projects: ProjectMeta[] }) {
  const [filter, setFilter] = useState<string>("All");
  const techs = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
  }, [projects]);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.technologies.includes(filter))),
    [projects, filter]
  );

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-2">
        {techs.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`rounded-full px-3 py-1 text-sm border ${
              filter === t ? "bg-primary text-white border-primary" : "border-black/10 hover:bg-black/5"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <motion.div
        layout
        className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}


