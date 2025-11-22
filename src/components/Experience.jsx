import React from "react";
import { profile } from "../data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8"
    >
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-4 space-y-4">
        {profile.experience.map((exp) => (
          <article
            key={exp.id}
            className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">
                  {exp.role} — {exp.company}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {exp.period}
                </div>
              </div>
            </div>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
              {exp.desc}
            </p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
