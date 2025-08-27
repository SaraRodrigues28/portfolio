"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

type Milestone = { label: string; value: number; date: string };

const data: Milestone[] = [
  { label: "Education Consultant", value: 10, date: "2019" },
  { label: "Skills Development", value: 25, date: "2021" },
  { label: "JustIT Bootcamp", value: 60, date: "2025" },
  { label: "Career Goals", value: 90, date: "2026" },
];

export default function GrowthChart() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const points = useMemo(() => {
    // Map values to viewBox coords (x spaced, y inverted)
    const xStep = 100 / (data.length - 1);
    return data.map((d, i) => ({ x: i * xStep, y: 100 - d.value }));
  }, []);

  const pathD = useMemo(() => {
    if (points.length < 2) return "";
    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1];
      const p1 = points[i];
      const cx = (p0.x + p1.x) / 2;
      d += ` C ${cx},${p0.y} ${cx},${p1.y} ${p1.x},${p1.y}`;
    }
    return d;
  }, [points]);

  const areaD = `${pathD} L 100,100 L 0,100 Z`;

  return (
    <div ref={ref} className="rounded-xl border border-black/10 bg-white/70 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Growth Trajectory</h3>
        <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-sm text-black/60">
          Progress {data[data.length - 1].value}%
        </motion.span>
      </div>
      <svg viewBox="0 0 100 100" className="w-full h-48">
        <defs>
          <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-teal)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-purple)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="growthLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-teal)" />
            <stop offset="100%" stopColor="var(--color-purple)" />
          </linearGradient>
        </defs>
        <motion.path d={areaD} fill="url(#growthArea)" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} />
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#growthLine)"
          strokeWidth={2.5}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={1.8}
            fill="var(--color-success)"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 + i * 0.15, type: "spring", bounce: 0.4 }}
          />
        ))}
      </svg>
      <div className="mt-2 grid grid-cols-4 text-xs text-black/60">
        {data.map((d) => (
          <div key={d.label} className="text-center">
            <div className="font-medium text-black/80">{d.date}</div>
            <div>{d.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


