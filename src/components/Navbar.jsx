import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const dropdownItems = [
  { label: 'Wedding Catering', icon: '♡', desc: 'Your perfect day, perfectly served' },
  { label: 'Corporate Catering', icon: '◈', desc: 'Impress clients and teams alike' },
  { label: 'Private Events', icon: '◇', desc: 'Intimate gatherings, grand impressions' },
  { label: 'Birthday Parties', icon: '✦', desc: 'Milestone celebrations elevated' },
  { label: 'Luxury Buffets', icon: '⊞', desc: 'Curated spreads of exceptional quality' },
  { label: 'Live Cooking Stations', icon: '◎', desc: 'Interactive culinary theatre' },
  { label: 'Dessert Tables', icon: '◉', desc: 'Artisanal sweet finales' },
  { label: 'Custom Packages', icon: '◈', desc: 'Bespoke menus for any vision' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openDrop = () => { clearTimeout(timerRef.current); setDropOpen(true) }
  const closeDrop = () => { timerRef.current = setTimeout(() => setDropOpen(false), 150) }

  const navLinks = ['Home', 'About', 'Gallery', 'Testimonials', 'Contact']

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-4' : 'py-6'}`}
        style={{ borderBottom: scrolled ? '1px solid rgba(201,162,39,0.1)' : 'none' }}
      >
        <div className="max-w-screen-xl mx-auto px-8 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex flex-col no-underline group">
            <div className="flex items-center gap-2.5">
              {/* Cloche SVG logo mark */}
              <svg width="30" height="28" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="18" cy="24" rx="15" ry="5.5" fill="none" stroke="#C9A227" strokeWidth="1.3"/>
                <path d="M3 24 Q18 6 33 24" fill="#1A1A1A" stroke="#C9A227" strokeWidth="1.3"/>
                <ellipse cx="18" cy="24" rx="15" ry="3" fill="#1A1A1A" stroke="#C9A227" strokeWidth="1"/>
                <line x1="10" y1="29" x2="26" y2="29" stroke="#C9A227" strokeWidth="1" strokeLinecap="round"/>
                <circle cx="18" cy="12" r="2" fill="#C9A227"/>
                <line x1="18" y1="7" x2="18" y2="10" stroke="#C9A227" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              <div>
                <div className="logo-text">Cater <span>Tots</span></div>
                <div className="logo-tagline">Fine Catering &amp; Events</div>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10 list-none">
            {navLinks.slice(0, 2).map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}
                  className="text-[11px] font-medium tracking-[0.18em] uppercase text-ivory/55 hover:text-ivory no-underline transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}

            {/* Services dropdown */}
            <li className="relative" ref={dropRef} onMouseEnter={openDrop} onMouseLeave={closeDrop}>
              <button
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-ivory/55 hover:text-gold no-underline transition-colors duration-300 flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
                onClick={() => setDropOpen(!dropOpen)}
              >
                Services
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </button>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-[200]"
                    style={{ minWidth: '560px' }}
                    onMouseEnter={openDrop}
                    onMouseLeave={closeDrop}
                  >
                    {/* Dropdown container */}
                    <div className="glass-dark rounded-sm overflow-hidden shadow-2xl"
                      style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,162,39,0.15)' }}>
                      {/* Top accent */}
                      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

                      <div className="p-6">
                        <div className="eyebrow text-[9px] mb-5 opacity-60">Our Services</div>
                        <div className="grid grid-cols-2 gap-1">
                          {dropdownItems.map((item, i) => (
                            <a
                              key={item.label}
                              href="#services"
                              className="flex items-start gap-3 p-3 rounded-sm no-underline group transition-all duration-200 hover:bg-gold/[0.07]"
                              onClick={() => setDropOpen(false)}
                            >
                              <span className="text-gold text-sm mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0">
                                {item.icon}
                              </span>
                              <div>
                                <div className="text-[12px] font-medium tracking-[0.06em] text-ivory/80 group-hover:text-ivory transition-colors">
                                  {item.label}
                                </div>
                                <div className="text-[10px] text-ivory/30 group-hover:text-ivory/50 transition-colors mt-0.5 font-light">
                                  {item.desc}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        {/* CTA inside dropdown */}
                        <div className="mt-5 pt-5 border-t border-gold/10 flex justify-between items-center">
                          <span className="body-sm text-[12px]">Ready to start planning?</span>
                          <a href="#booking" className="btn-gold text-[9px] py-2.5 px-5" onClick={() => setDropOpen(false)}>
                            Request a Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {navLinks.slice(2).map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}
                  className="text-[11px] font-medium tracking-[0.18em] uppercase text-ivory/55 hover:text-ivory no-underline transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#booking" className="hidden md:inline-flex btn-gold text-[9px] py-3 px-7">
            Book Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.div animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }} className="w-6 h-px bg-ivory" />
            <motion.div animate={{ opacity: mobileOpen ? 0 : 1 }} className="w-4 h-px bg-gold" />
            <motion.div animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }} className="w-6 h-px bg-ivory" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: 'rgba(15,15,15,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-6 px-8">
              {navLinks.slice(0, 2).map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl font-light text-ivory/80 hover:text-ivory no-underline transition-colors">
                  {link}
                </a>
              ))}
              <div className="w-full">
                <button
                  className="font-display text-3xl font-light text-gold w-full text-center bg-transparent border-none cursor-pointer flex items-center justify-center gap-2"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <span className="text-base">{mobileServicesOpen ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {dropdownItems.map(item => (
                          <a key={item.label} href="#services"
                            onClick={() => setMobileOpen(false)}
                            className="text-center text-[12px] text-ivory/50 hover:text-gold py-2 no-underline transition-colors">
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {navLinks.slice(2).map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl font-light text-ivory/80 hover:text-ivory no-underline transition-colors">
                  {link}
                </a>
              ))}
              <a href="#booking" onClick={() => setMobileOpen(false)} className="btn-gold mt-4">
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
