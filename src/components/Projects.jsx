import React, { useRef } from "react";
import { profile } from "../data";
import ProjectPanel from "./ProjectPanel";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const containerRef = useRef(null);

  function scrollLeft() {
    containerRef.current.scrollBy({ left: -720, behavior: "smooth" });
  }
  function scrollRight() {
    containerRef.current.scrollBy({ left: 720, behavior: "smooth" });
  }

  return (
    <section id="projects" className="py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 relative"
      >
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-slate-200 dark:bg-slate-700 p-2 rounded-full shadow hover:scale-105"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-slate-200 dark:bg-slate-700 p-2 rounded-full shadow hover:scale-105"
        >
          <ChevronRight size={22} />
        </button>

        {/* Project Container */}
        <div
          ref={containerRef}
          className="mt-4 flex gap-6 overflow-x-hidden py-4 px-2 snap-x snap-mandatory"
        >
          {profile.projects.map((p) => (
            <div
              key={p.id}
              className="snap-start flex-shrink-0 w-full sm:w-[720px]"
            >
              <ProjectPanel project={p} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
