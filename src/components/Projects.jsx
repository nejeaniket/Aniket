import React, { useRef, useEffect, useState } from 'react'
import ProjectPanel from './ProjectPanel'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { profile } from '../data'

export default function Projects(){
  const containerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    function refresh() {
      setCanScrollLeft(el.scrollLeft > 0)
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
    }
    refresh()
    el.addEventListener('scroll', refresh)
    window.addEventListener('resize', refresh)
    return () => {
      el.removeEventListener('scroll', refresh)
      window.removeEventListener('resize', refresh)
    }
  }, [])

  function scrollBy(amount){
    if(!containerRef.current) return
    containerRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="py-10 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scrollBy(-740)}
            aria-hidden={!canScrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow ${canScrollLeft ? 'bg-white dark:bg-slate-800' : 'opacity-40 pointer-events-none'}`}
            title="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollBy(740)}
            aria-hidden={!canScrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow ${canScrollRight ? 'bg-white dark:bg-slate-800' : 'opacity-40 pointer-events-none'}`}
            title="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slider container - hidden scrollbar */}
          <div
            ref={containerRef}
            tabIndex={0}
            className="project-scroll mt-2 flex gap-6 overflow-x-auto no-scrollbar py-4 px-2 snap-x snap-mandatory"
            // allow keyboard left/right to scroll
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') scrollBy(360)
              if (e.key === 'ArrowLeft') scrollBy(-360)
            }}
          >
            {/* use profile.projects from data.js or inline custom list */}
            {profile.projects.map(p => (
              // each slide uses a fixed width to look like cards in a carousel
              <div key={p.id} className="snap-start flex-shrink-0 w-full sm:w-[720px]">
                <ProjectPanel project={{
                  ...p,
                  // if your data.js uses filenames, you can override to uploaded absolute paths:
                  image: p.imageAbsolute || p.image
                }} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
