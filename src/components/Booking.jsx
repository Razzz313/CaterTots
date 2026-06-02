import { useState } from 'react'
import { motion } from 'framer-motion'

const BG_IMG = 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=1400&q=80&fit=crop'

export default function Booking() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', eventType: '', date: '', guests: '', details: ''
  })
  const [sent, setSent] = useState(false)

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => { e.preventDefault(); setSent(true) }

  const eventTypes = [
    'Wedding Catering', 'Corporate Catering', 'Private Event', 'Birthday Party',
    'Luxury Buffet', 'Live Cooking Station', 'Dessert Table', 'Custom Package'
  ]

  return (
    <section id="booking" className="relative overflow-hidden noise">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={BG_IMG} alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.2) contrast(1.1)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,15,15,0.9) 0%, rgba(26,26,16,0.85) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(201,162,39,0.07) 0%, transparent 60%)' }} />
      </div>

      <div className="relative z-10 section max-w-screen-xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-16 md:gap-24 items-start">
        {/* Left info */}
        <div className="reveal">
          <div className="eyebrow mb-6">Begin Your Journey</div>
          <h2 className="display-lg text-ivory mb-6">
            Let's Create<br />
            Something <em className="italic text-gold font-light">Extraordinary.</em>
          </h2>
          <div className="gold-rule mb-8" />
          <p className="body-text mb-8">
            Every unforgettable event starts with a conversation. Share your vision with us and our team of specialists will craft a bespoke proposal within 24 hours.
          </p>

          {/* Promise cards */}
          <div className="space-y-4">
            {[
              { icon: '◆', title: 'Response within 24 hours', desc: 'We take every inquiry seriously and respond promptly with a personalised proposal.' },
              { icon: '◈', title: 'No obligation consultation', desc: 'Our discovery call is completely free — a chance for us to understand your vision.' },
              { icon: '◉', title: 'Bespoke menu creation', desc: 'Every menu is designed specifically for your event, guests, and preferences.' },
            ].map(p => (
              <div key={p.title} className="flex gap-4 items-start p-4 glass-gold">
                <span className="text-gold text-sm mt-0.5 shrink-0">{p.icon}</span>
                <div>
                  <div className="text-[13px] font-medium text-ivory/80 mb-1" style={{ fontFamily: "'Jost', sans-serif" }}>{p.title}</div>
                  <div className="body-sm text-[12px]">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-dark p-14 text-center"
              style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,162,39,0.2)' }}
            >
              {/* Gold cloche icon */}
              <svg width="48" height="44" viewBox="0 0 48 44" fill="none" className="mx-auto mb-6">
                <ellipse cx="24" cy="32" rx="20" ry="7" fill="none" stroke="#C9A227" strokeWidth="1.4"/>
                <path d="M4 32 Q24 8 44 32" fill="rgba(201,162,39,0.06)" stroke="#C9A227" strokeWidth="1.4"/>
                <ellipse cx="24" cy="32" rx="20" ry="4" fill="rgba(15,15,15,0.8)" stroke="#C9A227" strokeWidth="1.2"/>
                <circle cx="24" cy="16" r="2.5" fill="#C9A227"/>
              </svg>
              <h3 className="font-display text-2xl font-light text-ivory mb-3">Your Inquiry Has Been Received</h3>
              <p className="body-text">Our events team will be in touch within 24 hours with a personalised proposal for your event.</p>
              <div className="gold-rule mx-auto mt-6" />
            </motion.div>
          ) : (
            <div
              className="glass-dark p-10 relative"
              style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,162,39,0.12)' }}
            >
              <div className="h-px w-full mb-8" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
              <div className="eyebrow text-[9px] mb-6">Request a Quote</div>

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="field-label">Full Name *</label>
                    <input name="name" value={form.name} onChange={onChange} required placeholder="Your full name" className="luxury-field" />
                  </div>
                  <div>
                    <label className="field-label">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="your@email.com" className="luxury-field" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="field-label">Phone Number</label>
                    <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+971 50 XXX XXXX" className="luxury-field" />
                  </div>
                  <div>
                    <label className="field-label">Number of Guests *</label>
                    <input name="guests" type="number" value={form.guests} onChange={onChange} required placeholder="e.g. 150" className="luxury-field" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="field-label">Event Type *</label>
                    <select name="eventType" value={form.eventType} onChange={onChange} required className="luxury-field">
                      <option value="">Select service</option>
                      {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="field-label">Event Date</label>
                    <input name="date" type="date" value={form.date} onChange={onChange} className="luxury-field" />
                  </div>
                </div>

                <div>
                  <label className="field-label">Tell Us About Your Event</label>
                  <textarea name="details" value={form.details} onChange={onChange} rows={4}
                    placeholder="Share your vision, venue, theme, dietary requirements, and any special requests..."
                    className="luxury-field resize-none" />
                </div>

                <button type="submit" className="btn-gold w-full justify-center mt-2 group">
                  Send Inquiry
                  <svg className="transition-transform duration-300 group-hover:translate-x-1" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
                <p className="eyebrow text-[9px] text-center opacity-25 mt-2">We respond within 24 hours · No commitment required</p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
