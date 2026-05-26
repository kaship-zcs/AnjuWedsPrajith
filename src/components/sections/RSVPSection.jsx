import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { IconCheck, IconX, IconMessageCircle } from '../ui/Icons'

function buildWhatsAppUrl(name, guestCount, attending) {
  const trimmedName = name.trim()
  const msg =
    attending === 'yes'
      ? `Namaskaram!\n\nI, *${trimmedName}*, will be joyfully attending the wedding of *Anju & Prajith* on *June 25, 2026* with *${guestCount}* guest(s).\n\nLooking forward to celebrating this beautiful occasion with your family!`
      : `Namaskaram!\n\nI, *${trimmedName}*, regret that I will not be able to attend the wedding of *Anju & Prajith*.\n\nWishing them a blessed and joyful married life!`
  return `https://wa.me/?text=${encodeURIComponent(msg)}`
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.75, delay: i * 0.12, ease: 'easeOut' } }),
}

const GoldDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', maxWidth: 260, margin: '0.75rem auto' }}>
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,transparent,var(--gold))' }} />
    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,var(--gold),transparent)' }} />
  </div>
)

const labelStyle = {
  display: 'block',
  fontFamily: 'Playfair Display, serif',
  fontSize: '0.63rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--text-secondary)',
  marginBottom: '0.5rem',
}

const inputStyle = {
  width: '100%',
  fontFamily: 'Playfair Display, serif',
  fontSize: '0.9rem',
  color: 'var(--text-primary)',
  background: 'transparent',
  outline: 'none',
  border: 'none',
  padding: '0.75rem 1rem',
}

/* ── Decorative left panel for desktop ── */
function RSVPDeco() {
  return (
    <div className="rsvp-deco">
      <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '0.5rem' }}>
          Your Presence Matters
        </p>
        <h2 style={{ fontFamily: 'Tangerine, cursive', fontWeight: 700, fontSize: 'clamp(3.8rem,9vw,5.5rem)', color: 'var(--text-primary)', lineHeight: 1.05 }}>
          RSVP
        </h2>
        <GoldDivider />
      </motion.div>

      <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
        style={{ marginTop: '1.75rem' }}>
        <p style={{ fontFamily: 'Tangerine, cursive', fontWeight: 700, fontSize: 'clamp(2.4rem,6vw,3.6rem)', color: 'var(--crimson)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
          Anju &amp; Prajith
        </p>
        <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
          Thursday, June 25, 2026
        </p>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          Thalikettu · Guruvayoor Sree Krishna Swami Temple<br />
          Muhurtham: 6:20 am – 7:40 am
        </p>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.65 }}>
          Reception · June 27, Saturday<br />
          Al-Hana Auditorium · from 3:00 pm
        </p>
      </motion.div>

      <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
        style={{ marginTop: '2rem' }}>
        <div style={{ width: '100%', maxWidth: 240, height: 1, background: 'linear-gradient(90deg,var(--gold),transparent)', margin: '0 auto 1.25rem' }} />
        <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '0.78rem', lineHeight: 1.85, color: 'var(--text-secondary)', maxWidth: 300, margin: '0 auto' }}>
          "Your presence would be the greatest blessing on this sacred occasion. We look forward to celebrating this joyous union with you."
        </p>
        <div style={{ width: '100%', maxWidth: 240, height: 1, background: 'linear-gradient(90deg,transparent,var(--gold))', margin: '1.25rem auto 0' }} />
      </motion.div>

      <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
        style={{ marginTop: '1.5rem' }}>
        <img
          src="/krishna.png"
          alt="Baby Krishna"
          style={{ width: 100, height: 125, objectFit: 'contain', opacity: 0.85, margin: '0 auto', display: 'block', filter: 'drop-shadow(0 4px 14px rgba(212,175,55,0.2))' }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '0.72rem', color: 'var(--gold)', marginTop: '0.6rem' }}>
          Ohm namo Bhagavate Vasudevaya
        </p>
      </motion.div>
    </div>
  )
}

export default function RSVPSection() {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState('1')
  const [attending, setAttending] = useState('yes')
  const [errors, setErrors] = useState({})

  const validate = useCallback(() => {
    const e = {}
    if (!name.trim()) e.name = 'Please enter your name'
    const g = parseInt(guests, 10)
    if (isNaN(g) || g < 1 || g > 20) e.guests = 'Enter a valid guest count (1–20)'
    return e
  }, [name, guests])

  const handleSend = useCallback(() => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setErrors({})
    window.open(buildWhatsAppUrl(name, guests, attending), '_blank', 'noopener,noreferrer')
  }, [name, guests, attending, validate])

  return (
    <section className="section-pad">
      <div className="rsvp-outer">
        <div className="rsvp-grid">

          {/* ── Left: decorative info panel ── */}
          <RSVPDeco />

          {/* ── Right: form card ── */}
          <motion.div
            className="glass-card"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ padding: 'clamp(1.5rem,5vw,2.5rem) clamp(1rem,4vw,2rem)' }}
          >
            {/* Name field */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Your Name</label>
              <div className="neu-inset">
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Enter your full name"
                  style={inputStyle}
                  maxLength={80}
                  autoComplete="name"
                />
              </div>
              {errors.name && <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.7rem', color: 'var(--crimson)', marginTop: '0.35rem' }}>{errors.name}</p>}
            </div>

            {/* Guest count */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Number of Guests (incl. yourself)</label>
              <div className="neu-inset">
                <input type="number" value={guests} onChange={e => setGuests(e.target.value)} min="1" max="20" style={inputStyle} />
              </div>
              {errors.guests && <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.7rem', color: 'var(--crimson)', marginTop: '0.35rem' }}>{errors.guests}</p>}
            </div>

            {/* Attendance toggle */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={labelStyle}>Will you attend?</label>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { val: 'yes', Icon: IconCheck, label: 'Accept' },
                  { val: 'no',  Icon: IconX,     label: 'Decline' },
                ].map(({ val, Icon, label }) => (
                  <motion.button
                    key={val}
                    className="neu-btn"
                    style={{
                      flex: 1, padding: '0.75rem 0.5rem', minHeight: 48,
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(0.72rem,2.8vw,0.84rem)', fontWeight: 600,
                      color: attending === val ? 'var(--gold-dark)' : 'var(--text-secondary)',
                      boxShadow: attending === val
                        ? 'inset 4px 4px 8px var(--neu-shadow-dark),inset -4px -4px 8px var(--neu-shadow-light)'
                        : '6px 6px 12px var(--neu-shadow-dark),-6px -6px 12px var(--neu-shadow-light)',
                      transition: 'box-shadow 0.2s,color 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                    onClick={() => setAttending(val)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={13} color={attending === val ? 'var(--gold-dark)' : 'var(--text-secondary)'} />
                    {label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.button
              className="neu-btn"
              style={{
                width: '100%', padding: '0.9rem 1rem', minHeight: 54,
                fontFamily: 'Playfair Display, serif', fontWeight: 700,
                fontSize: 'clamp(0.88rem,3.5vw,1rem)', letterSpacing: '0.06em',
                color: 'var(--crimson)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
              }}
              onClick={handleSend}
              whileTap={{ scale: 0.96 }}
            >
              <IconMessageCircle size={18} color="var(--crimson)" />
              Confirm via WhatsApp
            </motion.button>

            <p style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Opens WhatsApp with a pre-filled message for you to send.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

