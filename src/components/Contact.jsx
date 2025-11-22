// src/components/Contact.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Contact() {
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  // 👉 Your Formspree endpoint
  const FORM_ENDPOINT = "https://formspree.io/f/xyzvwrqv"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    const formData = new FormData(e.target)

    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    })

    setLoading(false)

    if (response.ok) {
      setStatus("Message sent successfully! I will respond soon.")
      e.target.reset() // clear form
    } else {
      setStatus("Something went wrong. Please try again later.")
    }
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8"
    >
      <h2 className="text-2xl font-semibold">Contact</h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">

        <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm">

          <div>
            <label className="block text-sm">Name</label>
            <input
              name="name"
              required
              className="mt-1 w-full border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 bg-white dark:bg-slate-800 text-sm"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 bg-white dark:bg-slate-800 text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1 w-full border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 bg-white dark:bg-slate-800 text-sm"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-sm mt-2 text-green-600 dark:text-green-400">
              {status}
            </p>
          )}

        </form>

        {/* RIGHT SIDE INFO */}
        <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
          <h3 className="font-semibold">Get in touch</h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {profile.email} · {profile.phone}
          </p>

          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Or email me directly at:  
            <a href={`mailto:${profile.email}`} className="text-indigo-600 underline">
              {profile.email}
            </a>
          </p>
        </div>

      </div>
    </motion.section>
  )
}
