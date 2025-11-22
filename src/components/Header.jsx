// FILE: src/components/Header.jsx
import React from "react";
import { profile } from "../data";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 
                        flex items-center justify-center text-white font-bold"
        >
          {profile.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div>
          <div className="font-semibold">{profile.name}</div>
          <div className="text-xs text-slate-500 dark:text-slate-300">
            {profile.title}
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="hidden md:flex gap-6 text-sm text-slate-600 dark:text-slate-300">
        <a href="#about" className="hover:text-slate-900 dark:hover:text-white">
          About
        </a>
        <a
          href="#experience"
          className="hover:text-slate-900 dark:hover:text-white"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="hover:text-slate-900 dark:hover:text-white"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="hover:text-slate-900 dark:hover:text-white"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="hover:text-slate-900 dark:hover:text-white"
        >
          Contact
        </a>
      </nav>

      {/* Actions: Resume + Email + Theme Toggle */}
      <div className="flex items-center gap-3">
        {/* RESUME BUTTON (GREEN) */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-4 py-2 rounded-lg bg-green-600 text-white text-sm shadow-md"
        >
          Resume
        </motion.a>

        {/* EMAIL BUTTON */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="hidden md:inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm shadow-md"
          href={`mailto:${profile.email}`}
        >
          Email
        </motion.a>

        {/* DARK MODE TOGGLE */}
        <ThemeToggle />
      </div>
    </header>
  );
}
