import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8"
    >
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-prose">
        {profile.about} I focus on clear UI and ship production-ready front-end
        code.
      </p>
    </motion.section>
  );
}
