'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  date: string
  message: string
  isEmergency: boolean
}

interface Errors {
  name?: string
  phone?: string
  email?: string
  service?: string
  date?: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
    isEmergency: false,
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Enter a valid phone number'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.service) e.service = 'Please select a service'
    if (!form.date) e.date = 'Please select a preferred date'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')
      setSubmitted(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-colors ${
      errors[field]
        ? 'border-emergency focus:ring-emergency/30 bg-red-50'
        : 'border-gray-200 focus:ring-gold/40 focus:border-gold'
    }`

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center gap-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>
        <h3 className="font-extrabold text-navy text-2xl">Request Sent!</h3>
        <p className="text-gray-600 max-w-xs">
          We&apos;ll call you within 30 minutes. For emergencies, call us directly at{' '}
          <a href="tel:6175550192" className="text-gold font-semibold">(617) 555-0192</a>.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="font-extrabold text-navy text-2xl mb-6">Request a Free Quote</h2>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Smith"
            className={inputClass('name')}
          />
          {errors.name && <p className="mt-1 text-xs text-emergency">{errors.name}</p>}
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="(617) 000-0000"
              className={inputClass('phone')}
            />
            {errors.phone && <p className="mt-1 text-xs text-emergency">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="john@example.com"
              className={inputClass('email')}
            />
            {errors.email && <p className="mt-1 text-xs text-emergency">{errors.email}</p>}
          </div>
        </div>

        {/* Service + Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed *</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className={`${inputClass('service')} bg-white`}
            >
              <option value="">Select a service...</option>
              <option>Drain Cleaning</option>
              <option>Leak Repair</option>
              <option>Water Heater</option>
              <option>Emergency</option>
              <option>Pipe Work</option>
              <option>Bathroom/Kitchen</option>
              <option>Other</option>
            </select>
            {errors.service && <p className="mt-1 text-xs text-emergency">{errors.service}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Date *</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              className={inputClass('date')}
            />
            {errors.date && <p className="mt-1 text-xs text-emergency">{errors.date}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Describe the Problem <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us what's going on..."
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors resize-none"
          />
        </div>

        {/* Emergency checkbox */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.isEmergency}
            onChange={(e) => setForm({ ...form, isEmergency: e.target.checked })}
            className="mt-0.5 w-4 h-4 accent-emergency rounded"
          />
          <span className="text-sm text-gray-700">
            <span className="font-semibold text-emergency">This is an emergency</span> â€” please call me ASAP
          </span>
        </label>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-brick text-white font-bold py-4 rounded-md text-base hover:bg-brick/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
              Sending...
            </>
          ) : (
            'Send Request â†’'
          )}
        </motion.button>

        {submitError && (
          <p className="text-sm text-center text-emergency font-medium">
            {submitError}
          </p>
        )}

        <p className="text-center text-sm text-gray-500">
          Or call us directly:{' '}
          <a href="tel:6175550192" className="font-bold text-dark-bg dark:text-white hover:text-brick transition-colors">
            (617) 555-0192
          </a>
        </p>
      </form>
    </div>
  )
}
