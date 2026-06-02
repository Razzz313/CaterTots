import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Marquee from './components/Marquee'
import DubaiVenues from './components/DubaiVenues'
import Services from './components/Services'
import Gallery from './components/Gallery'
import DubaiDifference from './components/DubaiDifference'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  // Global scroll-reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <div style={{ background: '#0F0F0F', color: '#FAF8F4', minHeight: '100vh' }}>
        <Navbar />
        <Hero />

        {/* Gold divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.25), transparent)', margin: '0 64px' }} />

        <About />

        {/* Dubai venues prestige strip — right after About for maximum positioning impact */}
        <DubaiVenues />

        <Marquee />

        <Services />

        {/* Dubai Difference — between services and gallery */}
        <DubaiDifference />

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.15), transparent)', margin: '0 64px' }} />

        <Gallery />

        <Testimonials />

        <Booking />

        <Footer />
      </div>
    </>
  )
}
