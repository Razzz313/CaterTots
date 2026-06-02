const navGroups = {
  'Services': ['Wedding Catering', 'Corporate Catering', 'Private Events', 'Birthday Parties', 'Luxury Buffets', 'Live Cooking', 'Dessert Tables'],
  'Company': ['About Us', 'Gallery', 'Testimonials', 'Contact'],
}

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>)
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>)
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>)
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/971502345678',
    icon: (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>)
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(201,162,39,0.1)' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-12 py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1.2fr] gap-12 mb-14">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <svg width="30" height="28" viewBox="0 0 36 32" fill="none">
                <ellipse cx="18" cy="24" rx="15" ry="5.5" fill="none" stroke="#C9A227" strokeWidth="1.3"/>
                <path d="M3 24 Q18 6 33 24" fill="#1A1A1A" stroke="#C9A227" strokeWidth="1.3"/>
                <ellipse cx="18" cy="24" rx="15" ry="3" fill="#1A1A1A" stroke="#C9A227" strokeWidth="1"/>
                <line x1="10" y1="29" x2="26" y2="29" stroke="#C9A227" strokeWidth="1" strokeLinecap="round"/>
                <circle cx="18" cy="12" r="2" fill="#C9A227"/>
              </svg>
              <div>
                <div className="logo-text">Cater <span>Tots</span></div>
                <div className="logo-tagline">Fine Catering &amp; Events</div>
              </div>
            </div>
            <p className="body-sm text-[13px] max-w-xs mb-6">
              Crafting extraordinary culinary experiences for life's most important moments — with elegance, passion, and impeccable service.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center no-underline transition-all duration-300 hover:-translate-y-0.5 hover:text-gold"
                  style={{
                    border: '1px solid rgba(201,162,39,0.15)',
                    color: 'rgba(250,248,244,0.35)',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(navGroups).map(([title, links]) => (
            <div key={title}>
              <div className="eyebrow text-[9px] mb-5 opacity-50">{title}</div>
              <ul className="space-y-3 list-none">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#services"
                      className="body-sm text-[13px] no-underline hover:text-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Hours */}
          <div>
            <div className="eyebrow text-[9px] mb-5 opacity-50">Contact</div>
            <div className="space-y-4">
              {[
                { label: 'Email', val: 'hello@catertots.com' },
                { label: 'Phone', val: '+971 4 234 5678' },
                { label: 'WhatsApp', val: '+971 50 234 5678' },
                { label: 'Location', val: 'Dubai, UAE' },
              ].map(c => (
                <div key={c.label}>
                  <div className="eyebrow text-[8px] opacity-30 mb-0.5">{c.label}</div>
                  <div className="body-sm text-[13px] text-ivory/55">{c.val}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(201,162,39,0.1)' }}>
              <div className="eyebrow text-[9px] mb-3 opacity-50">Business Hours</div>
              <div className="space-y-1">
                <div className="body-sm text-[12px]">Mon – Sat: 9:00 AM – 8:00 PM</div>
                <div className="body-sm text-[12px]">Sunday: By Appointment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="eyebrow text-[9px] opacity-20">© {new Date().getFullYear()} Cater Tots. All Rights Reserved.</p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
              <a key={t} href="#" className="eyebrow text-[9px] opacity-20 hover:opacity-50 transition-opacity no-underline">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
