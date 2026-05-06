import { useState, useEffect } from 'react'
import { IconMapPin, IconCalendar, IconMessageCircle } from './Icons'

const NAV = [
  { href: '#hero',       label: 'Home',    Icon: HomeIcon },
  { href: '#invitation', label: 'Invite',  Icon: InviteIcon },
  { href: '#events',     label: 'Events',  Icon: IconMapPin },
  { href: '#rsvp',       label: 'RSVP',    Icon: IconMessageCircle },
]

function HomeIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M7 18v-6h6v6" />
    </svg>
  )
}

function InviteIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="14" height="13" rx="2" />
      <path d="M3 8l7 5 7-5" />
    </svg>
  )
}

export default function BottomNav() {
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const ids = ['hero', 'invitation', 'events', 'rsvp']
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      return obs
    }).filter(Boolean)
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav className="bottom-nav" aria-label="Section navigation">
      {NAV.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          className={active === href ? 'active' : ''}
          onClick={() => setActive(href)}
          aria-current={active === href ? 'page' : undefined}
        >
          <Icon size={20} color={active === href ? 'var(--crimson)' : 'var(--text-secondary)'} />
          {label}
        </a>
      ))}
    </nav>
  )
}
