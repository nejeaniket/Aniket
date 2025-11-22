import React from 'react'
import { profile } from '../data'

export default function Footer(){
  return (
    <footer className="mt-12 py-8 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-500 dark:text-slate-400">Copyright ©{profile.name}. All Rights Reserved</div>
        <div className="flex items-center gap-3">
          {profile.socials.map((s,i)=> (
            <a key={i} href={s.url} className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">{s.name}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
