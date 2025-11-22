import React from 'react'
import { profile } from '../data'
import { motion } from 'framer-motion'

export default function Skills(){
  return (
    <motion.section id="skills" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="py-8">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {profile.skills.map((s,i)=> (
          <motion.span key={i} whileHover={{ scale:1.05 }} className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-600">{s}</motion.span>
        ))}
      </div>
    </motion.section>
  )
}
