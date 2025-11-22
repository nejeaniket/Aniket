import React, { useState } from 'react'
import { profile } from '../data'
import { motion } from 'framer-motion'

export default function Contact(){
  const [status, setStatus] = useState('')
  return (
    <motion.section id="contact" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="py-8">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={(e)=>{ e.preventDefault(); setStatus('Message sent (demo)') }} className="space-y-4 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm">
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-300">Name</label>
            <input required className="mt-1 w-full border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-300">Email</label>
            <input required type="email" className="mt-1 w-full border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-600 dark:text-slate-300">Message</label>
            <textarea required className="mt-1 w-full border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm bg-white dark:bg-slate-800" rows={4} placeholder="Say hi — what can I help with?" />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">Send message</button>
            <button type="button" onClick={()=>setStatus('')} className="px-4 py-2 rounded-md border dark:border-slate-700 text-sm">Clear</button>
          </div>
          {status && <div className="text-sm text-green-600 mt-2">{status}</div>}
        </form>

        <div className="p-6 rounded-lg bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{profile.email} · {profile.phone}</p>

            <div className="mt-4 flex gap-3">
              {profile.socials.map((s,i)=> (
                <a key={i} href={s.url} className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white underline">{s.name}</a>
              ))}
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">Or email me directly at <a href={`mailto:${profile.email}`} className="text-indigo-600 underline">{profile.email}</a></div>
        </div>
      </div>
    </motion.section>
  )
}
