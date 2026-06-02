import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// All Unsplash — premium fine dining, luxury events, and opulent presentations
const gallery = [
  {
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=85&fit=crop',
    label: 'Grand Ballroom Wedding',
    category: 'Wedding',
  },
  {
    img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=85&fit=crop',
    label: 'Signature Plating',
    category: 'Fine Dining',
    tall: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&fit=crop',
    label: 'Luxury Buffet Spread',
    category: 'Buffet',
  },
  {
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85&fit=crop',
    label: 'Artisan Dessert Table',
    category: 'Desserts',
  },
  {
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85&fit=crop',
    label: 'Culinary Artistry',
    category: 'Fine Dining',
    tall: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800&q=85&fit=crop',
    label: 'Elegant Table Setting',
    category: 'Events',
  },
  {
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=85&fit=crop',
    label: 'Corporate Gala',
    category: 'Corporate',
  },
  {
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=85&fit=crop',
    label: 'Tasting Menu Course',
    category: 'Fine Dining',
  },
  {
    img: 'https://images.unsplash.com/photo-1540914124281-342587941389?w=800&q=85&fit=crop',
    label: 'VIP Private Dinner',
    category: 'Private Events',
  },
]

const categories = ['All', 'Wedding', 'Fine Dining', 'Buffet', 'Corporate', 'Desserts', 'Events', 'Private Events']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? gallery : gallery.filter(g => g.category === active)

  return (
    <section id="gallery" className="section" style={{ background: '#080808' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
          <div className="eyebrow mb-5">Our Portfolio</div>
          <h2 className="display-lg text-ivory reveal mb-5">
            A Feast for<br />
            <em className="italic text-gold font-light">the Eyes.</em>
          </h2>
          <p className="body-text reveal max-w-md mx-auto">Every photograph tells the story of a flawless event — a moment perfectly executed.</p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-[10px] font-medium tracking-[0.15em] uppercase border transition-all duration-300 cursor-pointer ${
                active === cat
                  ? 'bg-gold text-black border-gold'
                  : 'bg-transparent text-ivory/40 border-gold/20 hover:border-gold/50 hover:text-ivory/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.img}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className={`gallery-item cursor-pointer ${item.tall ? 'row-span-2' : ''}`}
                style={{ height: item.tall ? '520px' : '240px' }}
                onClick={() => setLightbox(item)}
              >
                <img src={item.img} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
                <div className="gallery-overlay">
                  <div>
                    <div className="eyebrow text-[9px] mb-1 opacity-70">{item.category}</div>
                    <div className="font-display text-base font-light text-ivory">{item.label}</div>
                  </div>
                </div>
                {/* Gold corner */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/40 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-8"
            style={{ background: 'rgba(0,0,0,0.93)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.img} alt={lightbox.label} className="w-full max-h-[80vh] object-contain" />
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <div className="eyebrow text-[9px] opacity-60 mb-1">{lightbox.category}</div>
                  <div className="font-display text-lg text-ivory">{lightbox.label}</div>
                </div>
                <button onClick={() => setLightbox(null)} className="text-ivory/40 hover:text-ivory transition-colors text-2xl bg-transparent border-none cursor-pointer">✕</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
