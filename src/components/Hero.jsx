import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Unsplash — opulent Dubai-style banquet hall / luxury dining
const HERO_IMG = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85&fit=crop'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Hero image with parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Luxury catering event"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,15,15,0.65) 0%, rgba(15,15,15,0.35) 40%, rgba(15,15,15,0.8) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(201,162,39,0.06) 0%, transparent 65%)' }} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center max-w-5xl mx-auto px-8 pt-24">

        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex items-center justify-center gap-5 mb-10"
        >
          <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
          <span className="eyebrow text-[10px]">Est. 2018 — Dubai, UAE</span>
          <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="display-hero text-ivory"
          >
            Crafted for Royalty.<br />
            <em className="gold-shimmer italic">Served</em> to the World.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="body-text text-lg max-w-xl mx-auto mb-12"
        >
          From the towers of Downtown to the shores of the Palm — we orchestrate culinary
          experiences that match Dubai's relentless pursuit of the extraordinary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#booking" className="btn-gold group">
            Request a Quote
            <svg className="transition-transform duration-300 group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#about" className="btn-outline-gold">
            Book a Consultation
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-12 md:gap-20 mt-20 pt-10"
          style={{ borderTop: '1px solid rgba(201,162,39,0.15)' }}
        >
          {[
            { num: '500+', label: 'Events Catered' },
            { num: '15K+', label: 'Guests Served' },
            { num: '98%', label: 'Client Satisfaction' },
            { num: '7', label: 'Years of Excellence' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-light" style={{ color: 'var(--gold)' }}>{s.num}</div>
              <div className="eyebrow text-[9px] opacity-50 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
            <rect x="1" y="1" width="12" height="18" rx="6" stroke="rgba(201,162,39,0.4)" strokeWidth="1"/>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <rect x="6" y="4" width="2" height="4" rx="1" fill="rgba(201,162,39,0.7)"/>
            </motion.div>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
