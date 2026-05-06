import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IconFlame, IconBlossom, IconMapPin, IconCalendar } from '../ui/Icons'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const GCal_BASE = 'https://calendar.google.com/calendar/render?action=TEMPLATE'

const EVENTS = [
  {
    icon: IconFlame,
    badge: 'Thalikettu · Wedding Ceremony',
    title: 'Guruvayoor Sree Krishna Swami Temple',
    date: 'Thursday, June 25, 2026',
    time: 'Muhurtham between 6:20 am & 7:40 am',
    place: 'Guruvayur, Thrissur District, Kerala',
    mapUrl: 'https://maps.google.com/?q=Guruvayur+Sree+Krishna+Swami+Temple,+Guruvayur,+Kerala',
    calUrl:
      GCal_BASE +
      '&text=Anju+%26+Prajith+Wedding+%E2%80%93+Thalikettu' +
      '&dates=20260625T012000Z/20260625T021000Z' +
      '&details=Thalikettu+at+Guruvayoor+Sree+Krishna+Swami+Temple' +
      '&location=Guruvayoor+Sree+Krishna+Swami+Temple%2C+Guruvayur%2C+Kerala',
  },
  {
    icon: IconBlossom,
    badge: 'Wedding Reception',
    title: 'Al-Hana Auditorium',
    date: 'Saturday, June 27, 2026',
    time: 'From 3:00 pm onwards',
    place: 'Al-Hana Auditorium, Karunagappally, Kerala',
    mapUrl: 'https://maps.google.com/?q=Al-Hana+Auditorium+Karunagappally+Kerala',
    calUrl:
      GCal_BASE +
      '&text=Anju+%26+Prajith+Wedding+Reception' +
      '&dates=20260627T093000Z/20260627T160000Z' +
      '&details=Reception+at+Al-Hana+Auditorium' +
      '&location=Al-Hana+Auditorium%2C+Karunagappally%2C+Kerala',
  },
]

function EventCard({ custom, icon, badge, title, date, time, place, mapUrl, calUrl }) {
  return (
    <motion.div
      className="neu-card"
      variants={fadeUp}
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      style={{ padding: 'clamp(1.25rem,4vw,2rem)', display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--gold-dark)' }}>
          {icon({ size: 18, color: 'var(--gold-dark)' })}
        </div>
        <div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-dark)' }}>
            {badge}
          </p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.25, marginTop: '0.2rem' }}>
            {title}
          </h3>
        </div>
      </div>

      <div className="gold-divider" />

      <div>
        <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '0.88rem', color: 'var(--crimson)' }}>{date}</p>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{time}</p>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{place}</p>
      </div>

      <div className="event-card-btns">
        <motion.a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="neu-btn"
          style={{
            padding: '0.75rem 1.25rem',
            minHeight: 48,
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(0.76rem,2.5vw,0.84rem)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: 'var(--gold-dark)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
          whileTap={{ scale: 0.95 }}
        >
          <IconMapPin size={15} color="var(--gold-dark)" />
          Get Directions
        </motion.a>
        <motion.a
          href={calUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="neu-btn"
          style={{
            padding: '0.75rem 1.25rem',
            minHeight: 48,
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(0.76rem,2.5vw,0.84rem)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: 'var(--crimson)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
          whileTap={{ scale: 0.95 }}
        >
          <IconCalendar size={15} color="var(--crimson)" />
          Add to Calendar
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function EventItinerary() {
  const scrollRef = useRef(null)
  const [activeDot, setActiveDot] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const card = el.firstElementChild
      if (!card) return
      // snap unit = card width + gap (1rem = 16px)
      const snapUnit = card.offsetWidth + 16
      const idx = Math.min(
        Math.round(el.scrollLeft / snapUnit),
        EVENTS.length - 1
      )
      setActiveDot(idx)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="section-pad">
      <div className="section-inner">
      {/* Heading */}
      <motion.div
        style={{ textAlign: 'center', marginBottom: '3rem' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '0.5rem' }}>
          Mark Your Calendar
        </p>
        <h2 style={{ fontFamily: 'Great Vibes, cursive', fontSize: 'clamp(2.4rem, 8vw, 3.8rem)', color: 'var(--text-primary)' }}>
          Event Details
        </h2>
        <div className="gold-dot-row" style={{ maxWidth: 260, margin: '0.75rem auto 0' }}>
          <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)' }} />
        </div>
      </motion.div>

      {/* Scroll-snap cards on mobile, grid on desktop */}
      <div className="cards-scroll" ref={scrollRef}>
        {EVENTS.map((ev, i) => (
          <EventCard key={ev.title} custom={i} {...ev} />
        ))}
      </div>

      {/* Dot indicators (mobile only) */}
      <div className="scroll-dots" aria-hidden="true">
        {EVENTS.map((_, i) => (
          <span key={i} className={activeDot === i ? 'active' : ''} />
        ))}
      </div>
      </div>
    </section>
  )
}
