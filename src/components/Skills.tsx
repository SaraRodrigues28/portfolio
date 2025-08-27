"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type SkillItem = { name: string; logo: string };

const analysisViz: SkillItem[] = [
  { name: "Microsoft Excel", logo: "/logos/excel.svg" },
  { name: "Tableau", logo: "/logos/tableau.svg" },
  { name: "Power BI", logo: "/logos/powerbi.svg" },
  { name: "SQL", logo: "/logos/database.svg" },
  { name: "Python", logo: "/logos/python.svg" },
];

const cloudPlatforms: SkillItem[] = [
  { name: "Microsoft Azure", logo: "/logos/azure.svg" },
  { name: "Azure Data Fundamentals", logo: "/logos/azure.svg" },
];

const competencies = [
  "Statistical Analysis",
  "Data Modeling",
  "Business Intelligence",
  "ETL Processes",
  "Data Storytelling",
  "Process Optimization",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="container mt-16 md:mt-24" ref={ref}>
      <h2 className="text-2xl md:text-3xl font-bold">Skills Overview</h2>
      <p className="text-black/70 mt-1">Core tools, platforms, and competencies.</p>

      <SkillGroup title="Data Analysis & Visualization" items={analysisViz} inView={inView} color="var(--color-secondary)" />
      <SkillGroup title="Cloud & Data Platforms" items={cloudPlatforms} inView={inView} color="var(--color-teal)" />

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Core Competencies</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {competencies.map((c, idx) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.05 * idx }}
              className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, items, inView, color }: { title: string; items: SkillItem[]; inView: boolean; color: string }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="rounded-lg border border-black/10 bg-white/70 p-3 shadow-sm flex flex-col items-center gap-2 hover:shadow-md"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative h-10 w-10">
              <Image src={item.logo} alt={item.name} fill className="object-contain" />
            </div>
            <span className="text-sm text-center" style={{ color }}>{item.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


