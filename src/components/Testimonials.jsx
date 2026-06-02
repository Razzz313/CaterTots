import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Unsplash portrait photos
const testimonials = [
  {
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    name: 'Layla Al Maktoum',
    role: 'Bride, Atlantis The Palm Wedding 2024',
    stars: 5,
    text: 'Cater Tots elevated our wedding beyond anything we imagined. The team managed a 400-guest sit-down dinner at Atlantis with the precision of a Michelin-starred kitchen. Every dish was a conversation starter. Our guests from London to Riyadh still message us about the food.',
    event: 'Wedding · 400 Guests · Palm Jumeirah',
  },
  {
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    name: 'Khalid Al Fardan',
    role: 'Managing Director, Al Fardan Group',
    stars: 5,
    text: 'We have hosted our annual executive gala at the Burj Al Arab terrace for three consecutive years — exclusively with Cater Tots. Their understanding of protocol, discretion, and culinary refinement is unmatched in the UAE. They are the only caterer we trust for our most important clients.',
    event: 'Corporate Gala · 250 Guests · Burj Al Arab',
  },
  {
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
    name: 'Sophia Andreou',
    role: 'Senior Events Director, DIFC Events',
    stars: 5,
    text: 'In Dubai\'s events industry, the bar is extraordinarily high. Cater Tots consistently clears it. For our DIFC anniversary gala, their live sushi masters and gold-dusted dessert stations became the talking point of the entire evening. I recommend them without hesitation.',
    event: 'Corporate Event · 600 Guests · DIFC',
  },
  {
    photo: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop&crop=face',
    name: 'Omar Bin Rashid',
    role: 'Founder, Rashid Ventures',
    stars: 5,
    text: 'My daughter\'s birthday celebration at our Downtown penthouse needed to feel like nothing Dubai had seen before. Cater Tots designed a custom tasting menu, a seven-tier dessert tower, and a live cooking station that had guests standing and watching. Pure theatre. Pure luxury.',
    event: 'Birthday Gala · 120 Guests · Downtown Dubai',
  },
]

function Stars({ n }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < n ? '#C9A227' : 'none'} stroke="#C9A227" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="testimonials" className="section noise relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0f0f0f 0%, #111309 100%)' }}>
      {/* Gold ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)', top: '20%', left: '10%' }} />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="eyebrow mb-5">Client Stories</div>
          <h2 className="display-lg text-ivory reveal">
            Words from Those<br />
            <em className="italic text-gold font-light">Who've Dined With Us.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 items-start">
          {/* Selector column */}
          <div className="reveal space-y-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setCurrent(i)}
                className={`w-full text-left p-4 border transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                  current === i
                    ? 'border-gold/40 bg-gold/[0.07]'
                    : 'border-gold/[0.08] bg-transparent hover:border-gold/20'
                }`}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover shrink-0"
                  style={{ border: current === i ? '1px solid rgba(201,162,39,0.5)' : '1px solid rgba(201,162,39,0.1)' }}
                />
                <div>
                  <div className="text-[13px] font-medium text-ivory/80" style={{ fontFamily: "'Jost', sans-serif" }}>{t.name}</div>
                  <div className="text-[11px] text-ivory/35" style={{ fontFamily: "'Jost', sans-serif" }}>{t.event}</div>
                </div>
                {current === i && (
                  <div className="ml-auto w-1 h-8 bg-gold rounded-full shrink-0" />
                )}
              </button>
            ))}
          </div>

          {/* Active testimonial */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-dark p-10 relative"
                style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }}
              >
                {/* Large quote */}
                <div className="font-display text-[140px] leading-none absolute -top-6 left-6 pointer-events-none select-none"
                  style={{ color: 'rgba(201,162,39,0.08)' }}>"</div>

                <div className="relative z-10">
                  <Stars n={testimonials[current].stars} />
                  <blockquote className="font-heading text-xl font-light text-ivory/85 leading-relaxed italic mt-5 mb-8">
                    "{testimonials[current].text}"
                  </blockquote>

                  <div className="divider mb-6" />

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].photo}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover"
                      style={{ border: '1px solid rgba(201,162,39,0.3)' }}
                    />
                    <div>
                      <div className="font-medium text-ivory" style={{ fontFamily: "'Jost', sans-serif" }}>
                        {testimonials[current].name}
                      </div>
                      <div className="text-[12px] text-gold/60" style={{ fontFamily: "'Jost', sans-serif" }}>
                        {testimonials[current].role}
                      </div>
                      <div className="eyebrow text-[9px] opacity-40 mt-1">{testimonials[current].event}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot nav */}
            <div className="flex gap-2 mt-5 justify-end">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 cursor-pointer border-none"
                  style={{
                    width: current === i ? '24px' : '8px',
                    height: '2px',
                    background: current === i ? '#C9A227' : 'rgba(201,162,39,0.25)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
