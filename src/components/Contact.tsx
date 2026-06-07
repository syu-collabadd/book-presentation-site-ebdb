import { useState } from 'react'
import { Send, CheckCircle, Mail, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Valid email is required'
    }
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="py-24 px-6 bg-[#1c1a17]">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle size={48} className="text-[#c8922a] mx-auto mb-6" />
          <h3 className="font-serif text-3xl text-[#e8e0d4] font-medium mb-4">
            Message received.
          </h3>
          <p className="text-[#9a9285] text-lg">
            Thank you for reaching out. We'll be in touch within 48 hours.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#1c1a17]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#c8922a]" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#c8922a]">
                Get in Touch
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#e8e0d4] font-medium mb-6 leading-tight">
              Inquire About the Work
            </h2>
            <p className="text-[#9a9285] text-lg leading-relaxed mb-12">
              Whether you're interested in speaking engagements, publishing rights, media appearances,
              or simply want to share a reflection prompted by the book — this is the place to begin.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-[#2e2b26] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={16} className="text-[#c8922a]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#e8e0d4] mb-1">Media & Press</div>
                  <div className="text-sm text-[#6b6258]">
                    Interview requests, review copies, feature pitches
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-[#2e2b26] flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare size={16} className="text-[#c8922a]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#e8e0d4] mb-1">Speaking & Events</div>
                  <div className="text-sm text-[#6b6258]">
                    Keynotes, book clubs, university lectures, conference appearances
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#0f0e0c] border border-[#2e2b26] rounded-xl p-8 space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium tracking-wide text-[#9a9285] uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={`w-full bg-[#1c1a17] border rounded px-4 py-3 text-sm text-[#e8e0d4] placeholder-[#6b6258] outline-none focus:border-[#c8922a]/60 transition-colors ${
                    errors.name ? 'border-red-500/60' : 'border-[#2e2b26]'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wide text-[#9a9285] uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={`w-full bg-[#1c1a17] border rounded px-4 py-3 text-sm text-[#e8e0d4] placeholder-[#6b6258] outline-none focus:border-[#c8922a]/60 transition-colors ${
                    errors.email ? 'border-red-500/60' : 'border-[#2e2b26]'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium tracking-wide text-[#9a9285] uppercase mb-2">
                Subject
              </label>
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-[#1c1a17] border border-[#2e2b26] rounded px-4 py-3 text-sm text-[#e8e0d4] outline-none focus:border-[#c8922a]/60 transition-colors appearance-none"
              >
                <option value="" disabled>Select a subject…</option>
                <option value="media">Media & Press Inquiry</option>
                <option value="speaking">Speaking Engagement</option>
                <option value="rights">Publishing / Translation Rights</option>
                <option value="reader">Reader Message</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium tracking-wide text-[#9a9285] uppercase mb-2">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what's on your mind…"
                className={`w-full bg-[#1c1a17] border rounded px-4 py-3 text-sm text-[#e8e0d4] placeholder-[#6b6258] outline-none focus:border-[#c8922a]/60 transition-colors resize-none ${
                  errors.message ? 'border-red-500/60' : 'border-[#2e2b26]'
                }`}
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#c8922a] text-[#0f0e0c] font-semibold rounded hover:bg-[#e0aa45] transition-all duration-200 hover:scale-[1.02] active:scale-100"
            >
              <Send size={15} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
