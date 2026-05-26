import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{ paddingTop: 'clamp(2rem,6vw,4rem)', paddingBottom: 'clamp(2.5rem,6vw,4.5rem)', overflow: 'hidden' }}>
      <div className="section-inner" style={{ textAlign: 'center', padding: '0 clamp(1rem,4vw,2rem)' }}>
      {/* Watercolor lotus */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
      >
        <img
          src="/lotus.png"
          alt="Lotus"
          style={{
            width: 220,
            height: 220,
            objectFit: 'contain',
            opacity: 0.82,
            filter: 'drop-shadow(0 8px 28px rgba(212,175,55,0.18))',
          }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      </motion.div>

      <div className="gold-divider" style={{ maxWidth: 300, margin: '0 auto 1.5rem' }} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ padding: '0 1.25rem' }}
      >
        <p
          style={{
            fontFamily: 'Tangerine, cursive',
            fontWeight: 700,
            fontSize: 'clamp(3rem, 10vw, 4.2rem)',
            color: 'var(--crimson)',
            lineHeight: 1.1,
            marginBottom: '0.4rem',
          }}
        >
          Anju &amp; Prajith
        </p>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '1.5rem' }}>
          June 25, 2026 &nbsp;·&nbsp; Guruvayoor
        </p>

        <div className="gold-divider" style={{ maxWidth: 260, margin: '0 auto 1.5rem' }} />

        <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
          Best Compliments :
        </p>
        <p
          style={{
            fontFamily: 'Tangerine, cursive',
            fontWeight: 700,
            fontSize: 'clamp(2.4rem, 8vw, 3.4rem)',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
          }}
        >
          Anjana Rajendran
        </p>

        <p style={{ fontFamily: 'Noto Sans Malayalam, sans-serif', fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)', color: 'var(--gold-dark)', opacity: 0.9 }}>
          ഓം നമഃ ഭഗവതേ വാസുദേവായ
        </p>
      </motion.div>

      {/* Powered-by credit */}
      <div style={{ marginTop: 'clamp(2rem,6vw,3.5rem)' }}>
        <div className="gold-divider" style={{ maxWidth: '100%', margin: '0 auto 1.25rem' }} />
        <p style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '0.68rem',
          letterSpacing: '0.08em',
          color: 'var(--text-secondary)',
          opacity: 0.7,
        }}>
          Website powered by{' '}
          <a
            href="https://zyrops.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--gold-dark)',
              textDecoration: 'none',
              fontWeight: 600,
              letterSpacing: '0.06em',
              borderBottom: '1px solid var(--gold)',
              paddingBottom: '1px',
              transition: 'opacity 0.18s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            ZyrOps
          </a>
        </p>
      </div>
      </div>
    </footer>
  )
}
