const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C14 3 8 7 8 14s6 11 6 11 6-4 6-11S14 3 14 3z" stroke="#C9A227" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
        <path d="M7 10h14M7 18h14" stroke="#C9A227" strokeWidth="0.9" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: 'Wedding Catering',
    desc: 'Turn your most cherished day into a culinary love story. Our wedding specialists craft bespoke menus that honour your vision and delight every guest.',
    features: ['Multi-course sit-down dinners', 'Cocktail hour receptions', 'Wedding cake coordination', 'Dietary accommodation'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="14" rx="1.5" stroke="#C9A227" strokeWidth="1.1" fill="none"/>
        <path d="M9 8V6a5 5 0 0 1 10 0v2" stroke="#C9A227" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
        <line x1="4" y1="13" x2="24" y2="13" stroke="#C9A227" strokeWidth="0.9" opacity="0.5"/>
      </svg>
    ),
    title: 'Corporate Catering',
    desc: 'Make an impression at every business event. From board lunches to product launches, we deliver professional service that reflects your brand\'s standard.',
    features: ['Board & executive dining', 'Product launches & galas', 'Team building events', 'Branded presentation'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#C9A227" strokeWidth="1.1" fill="none"/>
        <path d="M9 14a5 5 0 0 1 10 0" stroke="#C9A227" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
        <circle cx="14" cy="14" r="2" fill="#C9A227" opacity="0.7"/>
      </svg>
    ),
    title: 'Private Events',
    desc: 'Your vision, our expertise. Private dinners, anniversary celebrations, and milestone events crafted with the utmost discretion and sophistication.',
    features: ['Intimate fine dining', 'Anniversary celebrations', 'Milestone dinner parties', 'Villa & estate events'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.4 7.4H24l-6.2 4.5 2.4 7.4L14 19l-6.2 4.3 2.4-7.4L4 11.4h7.6z" stroke="#C9A227" strokeWidth="1.1" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Birthday Celebrations',
    desc: 'Every milestone deserves a feast. We design lavish birthday experiences — from stylish brunches to extravagant evening banquets — tailored to your personality.',
    features: ['Themed menus & décor', 'Celebration cakes', 'Cocktail stations', 'Children & adult parties'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="12" width="18" height="8" rx="1" stroke="#C9A227" strokeWidth="1.1" fill="none"/>
        <path d="M8 12V9a6 6 0 0 1 12 0v3" stroke="#C9A227" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
        <line x1="14" y1="16" x2="14" y2="16" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Luxury Buffets',
    desc: 'Curated spreads that balance visual grandeur with gastronomic excellence. Our luxury buffets are a feast for the eyes before they become a feast for the palate.',
    features: ['International cuisine stations', 'Charcuterie & cheese boards', 'Seafood raw bars', 'Live carving stations'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 20h16M8 20V14M12 20V10M16 20V13M20 20V11" stroke="#C9A227" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
        <circle cx="14" cy="6" r="2.5" stroke="#C9A227" strokeWidth="1" fill="none"/>
      </svg>
    ),
    title: 'Live Cooking Stations',
    desc: 'Transform your event into an interactive culinary theatre. Our chefs perform live, crafting dishes with showmanship that wows guests and creates conversations.',
    features: ['Pasta & risotto live stations', 'Sushi & sashimi masters', 'Flambé dessert theatre', 'Molecular gastronomy'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5C9 5 6 9 6 13c0 5 8 11 8 11s8-6 8-11c0-4-3-8-8-8z" stroke="#C9A227" strokeWidth="1.1" fill="none"/>
        <circle cx="14" cy="13" r="3" stroke="#C9A227" strokeWidth="1" fill="none" opacity="0.6"/>
      </svg>
    ),
    title: 'Dessert Tables',
    desc: 'A breathtaking finale to any event. Our artisanal dessert tables are designed to be photographed and savoured — a symphony of sweetness and visual art.',
    features: ['Artisan pastry & cakes', 'Chocolate fountains', 'Macaron towers', 'Custom sugar sculptures'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="8" height="8" rx="1" stroke="#C9A227" strokeWidth="1.1" fill="none"/>
        <rect x="16" y="4" width="8" height="8" rx="1" stroke="#C9A227" strokeWidth="1.1" fill="none"/>
        <rect x="4" y="16" width="8" height="8" rx="1" stroke="#C9A227" strokeWidth="1.1" fill="none"/>
        <rect x="16" y="16" width="8" height="8" rx="1" stroke="#C9A227" strokeWidth="1.1" fill="none"/>
      </svg>
    ),
    title: 'Custom Packages',
    desc: 'No two events are alike. Our bespoke catering packages are built from scratch around your vision, budget, and guest profile — with zero compromise on quality.',
    features: ['Personalised menu design', 'Budget-conscious planning', 'Full event coordination', 'Dedicated account manager'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section noise relative" style={{ background: '#0d0d0d' }}>
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="eyebrow mb-5">What We Offer</div>
          <h2 className="display-lg text-ivory reveal mb-5">
            A World of Flavour,<br />
            <em className="italic text-gold font-light">One Destination.</em>
          </h2>
          <p className="body-text reveal">From intimate soirées to lavish galas — every occasion deserves extraordinary food and flawless service.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(201,162,39,0.07)' }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className="service-card reveal"
              style={{ transitionDelay: `${(i % 4) * 0.07}s`, background: '#0d0d0d' }}
            >
              <div className="mb-5">{s.icon}</div>
              <h3 className="font-display text-[18px] font-light text-ivory mb-3 leading-snug">{s.title}</h3>
              <p className="body-sm mb-5">{s.desc}</p>
              <ul className="space-y-1.5 mt-auto">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-[11px] font-light" style={{ color: 'rgba(201,162,39,0.5)' }}>
                    <span className="text-gold text-[8px]">◆</span>
                    <span style={{ color: 'rgba(250,248,244,0.4)' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#booking" className="btn-outline-gold">Request a Custom Quote</a>
        </div>
      </div>
    </section>
  )
}
