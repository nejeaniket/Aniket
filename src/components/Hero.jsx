// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

// Import your image from assets
import myPhoto from "../assets/myphoto.png";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55 }}
          >
            {/* Name + Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              {profile.name}
            </h1>

            {/* Bio */}
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-prose">
              {profile.bio}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm shadow hover:bg-indigo-700"
              >
                View Projects
              </a>

              <a
                href="#experience"
                className="px-5 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Experience
              </a>
            </div>

            {/* Info Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow">
                <div className="text-xs uppercase text-slate-400">Location</div>
                <div className="mt-1 font-medium">{profile.location}</div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow">
                <div className="text-xs uppercase text-slate-400">Email</div>
                <div className="mt-1 font-medium">
                  <a href={`mailto:${profile.email}`} className="text-indigo-600">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow">
                <div className="text-xs uppercase text-slate-400">Phone</div>
                <div className="mt-1 font-medium">{profile.phone}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — PROFILE IMAGE */}
        <aside className="flex justify-center md:justify-end">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.55 }}
            className="
              w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64
              rounded-full overflow-hidden shadow-2xl
              ring-1 ring-slate-200 dark:ring-slate-700
            "
          >
            <img
              src={myPhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </aside>

      </div>
    </section>
  );
}
