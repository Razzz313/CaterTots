// Unsplash: luxury fine dining setup — Dubai-grade opulence
const CHEF_IMG = 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=900&q=85&fit=crop'

export default function About() {
  return (
    <section id="about" className="section max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
      {/* Images side */}
      <div className="reveal-left relative">
        <div className="relative">
          <img src={CHEF_IMG} alt="Luxury fine dining presentation" className="w-full h-[500px] object-cover" style={{ filter: 'brightness(0.9) contrast(1.05)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(201,162,39,0.08) 0%, transparent 60%)' }} />
        </div>
        {/* Floating card */}
        <div className="absolute -bottom-8 -right-8 glass-dark p-6 shadow-2xl w-56"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,162,39,0.15)' }}>
          <div className="eyebrow text-[9px] mb-3">Our Philosophy</div>
          <p className="text-[13px] font-light italic leading-relaxed text-ivory/70">
            "In Dubai, excellence is the baseline. We exist to surpass it."
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="gold-rule" />
            <span className="text-[10px] text-gold/60 font-medium tracking-widest">CHEF FOUNDER</span>
          </div>
        </div>
        {/* Gold corner accent */}
        <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l" style={{ borderColor: 'var(--gold)' }} />
      </div>

      {/* Text side */}
      <div className="reveal">
        <div className="eyebrow mb-6">About Cater Tots</div>
        <h2 className="display-lg text-ivory mb-6">
          Dubai's Most Trusted<br />
          <em className="italic text-gold font-light">Luxury Caterer</em>
        </h2>
        <div className="gold-rule mb-8" />

        <p className="body-text mb-5">
          Born in the heart of Dubai, Cater Tots was founded with a singular obsession: to create culinary experiences worthy of the world's most ambitious city. In a place where every detail is held to an extraordinary standard, we raise the bar further.
        </p>
        <p className="body-text mb-10">
          From intimate penthouse dinners overlooking the Burj Khalifa to grand galas at Madinat Jumeirah, our team of internationally trained chefs and dedicated event specialists deliver flawless service to Dubai's most discerning hosts.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-10 pt-8" style={{ borderTop: '1px solid rgba(201,162,39,0.12)' }}>
          {[
            { num: '500+', label: 'Events Catered' },
            { num: '12', label: 'Chef Specialists' },
            { num: '100%', label: 'Fresh Ingredients' },
          ].map(s => (
            <div key={s.label}>
              <div className="font-display text-3xl font-light text-gold leading-none">{s.num}</div>
              <div className="eyebrow text-[9px] opacity-50 mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        <a href="#booking" className="btn-gold group">
          Work With Us
          <svg className="transition-transform duration-300 group-hover:translate-x-1" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
