// A premium "As Seen At" strip showcasing iconic Dubai venues — signals market positioning instantly
const venues = [
  { name: 'Burj Al Arab', icon: '◆' },
  { name: 'Atlantis The Palm', icon: '◆' },
  { name: 'Madinat Jumeirah', icon: '◆' },
  { name: 'Armani Hotel', icon: '◆' },
  { name: 'Four Seasons DIFC', icon: '◆' },
  { name: 'Palazzo Versace', icon: '◆' },
  { name: 'One&Only Royal Mirage', icon: '◆' },
  { name: 'Address Downtown', icon: '◆' },
]

export default function DubaiVenues() {
  const doubled = [...venues, ...venues]

  return (
    <div className="dubai-pattern dubai-ambient border-t border-b py-10 overflow-hidden relative"
      style={{ borderColor: 'rgba(201,162,39,0.1)' }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #0F0F0F, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #0F0F0F, transparent)' }} />

      <div className="text-center mb-6">
        <div className="eyebrow text-[9px] opacity-40">Trusted at Dubai's Most Prestigious Venues</div>
      </div>

      <div className="flex gap-12 items-center marquee whitespace-nowrap select-none">
        {doubled.map((v, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0">
            <span className="text-[8px] text-gold/30">{v.icon}</span>
            <span
              className="text-[11px] font-light tracking-[0.18em] uppercase transition-colors duration-300 hover:text-gold/80 cursor-default"
              style={{ color: 'rgba(250,248,244,0.25)', fontFamily: "'Jost', sans-serif" }}
            >
              {v.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
