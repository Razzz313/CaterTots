const items = [
  'Wedding Catering', '◆', 'Corporate Events', '◆', 'Private Dining', '◆',
  'Luxury Buffets', '◆', 'Live Cooking Stations', '◆', 'Dessert Tables', '◆',
  'Birthday Galas', '◆', 'Custom Packages', '◆',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-5" style={{ background: '#C9A227' }}>
      <div className="flex gap-8 items-center marquee whitespace-nowrap select-none">
        {doubled.map((item, i) => (
          <span key={i} className={`text-black font-medium ${
            item === '◆' ? 'text-[8px] opacity-50' : 'text-[11px] tracking-[0.18em] uppercase'
          }`} style={{ fontFamily: "'Jost', sans-serif" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
