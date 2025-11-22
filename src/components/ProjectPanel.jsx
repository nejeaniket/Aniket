// src/components/ProjectPanel.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectPanel({ project }) {
  // placeholder SVG (data URI)
  const PLACEHOLDER =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700">
         <rect width="100%" height="100%" fill="#e6eef8"/>
         <g fill="#9aa8b6" font-family="Arial, Helvetica, sans-serif" font-size="28">
           <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">No Image</text>
         </g>
       </svg>`
    )

  // Resolve image source robustly:
  // - If project.image is falsy -> placeholder
  // - If project.image is a string and starts with http(s) or '/' -> use directly
  // - If project.image is an imported module (object/string handled by bundler) -> use it
  // - Otherwise try to require from ../assets/<filename>
  const resolveImageSrc = () => {
    const img = project?.image
    if (!img) return PLACEHOLDER

    // If it's already an absolute/URL (http or begins with /), use directly
    if (typeof img === 'string' && (img.startsWith('http') || img.startsWith('/'))) {
      return img
    }

    // If it's an object (webpack import returns a string but cover the case)
    if (typeof img === 'string' && img.includes('data:')) {
      // it's already a data URI
      return img
    }

    // If user passed an imported module (bundler resolves to string), just return it:
    if (typeof img === 'string' && img.match(/^\/?[\w\-_./]+(\.(png|jpg|jpeg|svg|webp|gif))$/i)) {
      // attempt to require from assets if it's only a filename (no path)
      try {
        // If img contains directory separators (../assets/...), let require use it
        if (img.includes('../') || img.includes('./') || img.includes('/assets/')) {
          // try require directly (rare case)
          // eslint-disable-next-line global-require, import/no-dynamic-require
          return require(`${img}`)
        } else {
          // require from project's src/assets directory
          // eslint-disable-next-line global-require, import/no-dynamic-require
          return require(`../assets/${img}`)
        }
      } catch (err) {
        // fallback to placeholder
        return PLACEHOLDER
      }
    }

    // Fallback to placeholder
    return PLACEHOLDER
  }

  const imgSrc = resolveImageSrc()

  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      className="bg-white dark:bg-slate-900 rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row"
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Image side */}
      <div className="w-full sm:w-1/2 flex-shrink-0 overflow-hidden">
        <motion.img
          src={imgSrc}
          alt={project.title || 'Project image'}
          loading="lazy"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="object-cover w-full h-56 sm:h-full"
        />
      </div>

      {/* Details side */}
      <div className="p-6 flex flex-col justify-between w-full">
        <div>
          <h3 id={`project-${project.id}-title`} className="text-lg font-semibold">
            {project.title}
          </h3>

          {project.desc && (
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.desc}</p>
          )}

          {project.tech?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-800 text-sm hover:opacity-90"
            >
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:opacity-90"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
