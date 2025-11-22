import React from 'react'
import { motion } from 'framer-motion'

// Project card with light background and subtle shadow
export default function ProjectPanel({ project }){
  // resolve image: allow absolute path, import, or filename in src/assets
  let imgSrc = project?.image || project?.imageAbsolute || null

  // if image appears to be filename only, try require from assets
  if (typeof imgSrc === 'string' && !imgSrc.startsWith('/') && !imgSrc.startsWith('http')) {
    try {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      imgSrc = require(`../assets/${imgSrc}`)
    } catch (e) {
      imgSrc = null
    }
  }

  const placeholder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect width="100%" height="100%" fill="%23f8fafc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="sans-serif" font-size="20">No Image</text></svg>'

  return (
    <motion.article whileHover={{ y: -6 }} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        {/* image side */}
        <div className="w-full sm:w-1/2 flex-shrink-0">
          <div className="h-56 sm:h-full w-full bg-slate-100 dark:bg-slate-900">
            <img
              src={imgSrc || placeholder}
              alt={project.title}
              className="object-cover w-full h-full"
              style={{ display: 'block' }}
            />
          </div>
        </div>

        {/* details side */}
        <div className="p-6 flex flex-col justify-between w-full">
          <div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.desc}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech?.map((t,i)=> (
                <span key={i} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-700 text-sm hover:opacity-90">
                GitHub
              </a>
            )}

            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:opacity-90">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
