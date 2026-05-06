import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader3D({ onComplete }) {
  const [minTimeDone, setMinTimeDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMinTimeDone(true), 2800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (minTimeDone) onComplete()
  }, [minTimeDone, onComplete])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--ivory)',
      }}
    >
      {/* CSS wave loader */}
      <span className="loader" role="status" aria-label="Loading" />

      {/* Brand */}
      <p
        style={{
          fontFamily: 'Great Vibes, cursive',
          fontSize: '2.4rem',
          color: 'var(--gold)',
          marginTop: '2rem',
          lineHeight: 1.1,
        }}
      >
        Anju &amp; Prajith
      </p>
      <p
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '0.7rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
          marginTop: '0.35rem',
        }}
      >
        June 25 · 2026
      </p>

      {/* Progress bar */}
      <div
        style={{
          marginTop: '1.8rem',
          width: 180,
          height: 2,
          borderRadius: 99,
          background: 'rgba(174,152,110,0.25)',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            borderRadius: 99,
            background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light))',
          }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.6, ease: 'easeInOut' }}
        />
      </div>

      {/* Mantra */}
      <p
        style={{
          marginTop: '1.2rem',
          fontFamily: 'Noto Sans Malayalam, sans-serif',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          color: 'var(--gold-dark)',
        }}
      >
        ഓം നമഃ ഭഗവതേ വാസുദേവായ
      </p>
    </motion.div>
  )
}
