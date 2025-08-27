"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-black/10 bg-background/70">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          <span className="text-primary">Sara</span> • Data Analyst
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-1 py-1"
              >
                <span className="transition-colors hover:text-primary">
                  {item.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}
          {/* <Link
            href="/resume.pdf"
            className="rounded-md bg-primary text-white px-3 py-2 text-sm font-medium hover:opacity-90"
          >
            Download Resume
          </Link> */}
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-black/10 px-3 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="i-[hamburger]">☰</span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-black/10 bg-background"
          >
            <div className="container py-3 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-1 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              {/* <Link
                href="/resume.pdf"
                className="rounded-md bg-primary text-white px-3 py-2 text-sm font-medium text-center"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </Link> */}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;


