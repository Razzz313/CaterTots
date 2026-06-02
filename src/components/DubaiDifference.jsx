// The Dubai Difference — a prestige section that speaks to the Dubai market
const pillars = [
  {
    arabic: '٠١',
    title: 'Halal Certified',
    desc: 'Every kitchen, every ingredient, every preparation meets the highest UAE halal standards. We serve Dubai\'s diverse community with full confidence and transparency.',
  },
  {
    arabic: '٠٢',
    title: 'Multi-Cultural Menus',
    desc: 'Dubai demands the world on one table. Our chefs are trained across Arabic, Emirati, Mediterranean, Asian, and Continental cuisines — every palate honoured.',
  },
  {
    arabic: '٠٣',
    title: 'UAE-Licensed Operations',
    desc: 'Fully licensed by Dubai Municipality and compliant with all DTCM and UAE food safety regulations. You host with complete peace of mind.',
  },
  {
    arabic: '٠٤',
    title: 'Discreet VIP Service',
    desc: 'We serve royalty, executives, and dignitaries regularly. Our teams are trained in protocol, discretion, and the white-glove standards expected at the highest levels.',
  },
  {
    arabic: '٠٥',
    title: 'Citywide Reach',
    desc: 'From Palm Jumeirah to Business Bay, DIFC to Dubai Hills — our operations cover every corner of the emirate. We also serve Abu Dhabi and across the GCC.',
  },
  {
    arabic: '٠٦',
    title: 'Bespoke by Default',
    desc: 'In Dubai, standard is never enough. Every menu, every table arrangement, every presentation is custom-designed for your event — no templates, no shortcuts.',
  },
]

export default function DubaiDifference() {
  return (
    <section className="section section-warm dubai-ambient relative overflow-hidden">
      {/* Subtle geometric bg */}
      <div className="absolute inset-0 dubai-pattern opacity-30 pointer-events-none" />

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="eyebrow mb-5">The Dubai Difference</div>
          <h2 className="display-lg text-ivory reveal">
            Why Dubai's Elite<br />
            <em className="italic text-gold font-light">Choose Us.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: 'rgba(201,162,39,0.07)' }}>
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="service-card reveal"
              style={{ transitionDelay: `${(i % 3) * 0.08}s`, background: '#0f0e09' }}
            >
              <div className="font-display text-4xl font-light mb-4" style={{ color: 'rgba(201,162,39,0.2)', fontVariantNumeric: 'normal' }}>
                {p.arabic}
              </div>
              <h3 className="font-display text-[19px] font-light text-ivory mb-3 leading-snug">{p.title}</h3>
              <p className="body-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Arabic calligraphy-inspired decorative element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6">
            <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.4))' }} />
            <span className="font-display text-2xl font-light italic text-gold/40" style={{ letterSpacing: '0.1em' }}>
              مرحباً بكم
            </span>
            <div className="h-px w-20" style={{ background: 'linear-gradient(90deg, rgba(201,162,39,0.4), transparent)' }} />
          </div>
          <div className="eyebrow text-[9px] opacity-25 mt-2">You Are Welcome</div>
        </div>
      </div>
    </section>
  )
}
