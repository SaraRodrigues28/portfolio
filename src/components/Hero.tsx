"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const roles = ["Data Analyst", "BI Specialist", "Storyteller with Data"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const current = roles[index % roles.length];
    setDisplay("");
    let i = 0;
    const id = setInterval(() => {
      setDisplay(current.slice(0, i + 1));
      i++;
      if (i === current.length) clearInterval(id);
    }, 60);
    const next = setTimeout(() => setIndex((v) => (v + 1) % roles.length), 2800);
    return () => {
      clearInterval(id);
      clearTimeout(next);
    };
  }, [index]);

  return (
    <section className="container pt-16 md:pt-24">
      <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Hi, I’m Sara.
            <br />
            <span className="text-primary">{display}</span>
            <span className="blink ml-1">▍</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-black/70 max-w-prose"
          >
            I turn raw data into clear, actionable insights and interactive dashboards.
            Skilled across Excel, Tableau, Power BI, Python, SQL, and Azure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/projects"
              className="rounded-md bg-primary text-white px-5 py-3 text-sm font-medium shadow hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-black/10 px-5 py-3 text-sm font-medium hover:bg-black/5"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="justify-self-center"
        >
          <div className="relative h-48 w-64 md:h-64 md:w-80">
            <DataFlowVisual />
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .blink { animation: blink 1s steps(2, start) infinite; }
        @keyframes blink { to { visibility: hidden; } }
      `}</style>
    </section>
  );
}

function DataFlowVisual() {
  const nodes = [
    { x: 10, y: 40, color: "var(--color-teal)" },
    { x: 25, y: 25, color: "var(--color-teal)" },
    { x: 25, y: 55, color: "var(--color-teal)" },
    { x: 45, y: 40, color: "var(--color-purple)" },
    { x: 65, y: 40, color: "var(--color-secondary)" },
    { x: 85, y: 40, color: "var(--color-accent)" },
  ];
  return (
    <svg viewBox="0 0 100 70" className="w-full h-full">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-teal)" />
          <stop offset="50%" stopColor="var(--color-purple)" />
          <stop offset="100%" stopColor="var(--color-secondary)" />
        </linearGradient>
        <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-teal)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-purple)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Area under line */}
      <motion.path
        d="M10,40 C25,25 45,40 65,40 C75,40 90,30 90,30 L90,60 L10,60 Z"
        fill="url(#areaGrad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      {/* Pipeline curve */}
      <motion.path
        d="M10,40 C25,25 45,40 65,40 C75,40 90,30 90,30"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={2.8}
          fill={n.color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 220, damping: 12 }}
        />
      ))}
      {/* Output box representing transformed data */}
      <motion.rect
        x="82"
        y="20"
        width="12"
        height="16"
        rx="2"
        fill="var(--color-accent)"
        initial={{ opacity: 0, y: -2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      />
    </svg>
  );
}


