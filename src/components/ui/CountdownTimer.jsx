import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function getTimeLeft(target) {
  const diff = new Date(target) - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000)  / 60000),
    seconds: Math.floor((diff % 60000)    / 1000),
  }
}

function Unit({ value, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
      <div className="countdown-circle">
        <motion.span
          key={value}
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.22 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            color: 'var(--gold-dark)',
            fontSize: 'clamp(0.95rem,3.5vw,1.35rem)',
            lineHeight: 1,
          }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(0.52rem,1.8vw,0.62rem)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
        }}
      >
        {label}
      </span>
    </div>
  )
}

const Sep = () => (
  <span
    style={{
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
      fontSize: 'clamp(1rem,3.5vw,1.25rem)',
      color: 'var(--gold)',
      marginBottom: '1.4rem',
      flexShrink: 0,
    }}
  >
    :
  </span>
)

export default function CountdownTimer({ targetDate }) {
  const [time, setTime] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 'clamp(0.3rem,2vw,0.75rem)',
        marginTop: '1.75rem',
        flexWrap: 'nowrap',
        width: '100%',
      }}
    >
      <Unit value={time.days}    label="Days" />
      <Sep />
      <Unit value={time.hours}   label="Hours" />
      <Sep />
      <Unit value={time.minutes} label="Mins" />
      <Sep />
      <Unit value={time.seconds} label="Secs" />
    </div>
  )
}

