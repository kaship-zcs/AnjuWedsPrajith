import { motion } from 'framer-motion'
import CountdownTimer from '../ui/CountdownTimer'
import { IconLotus, IconOm } from '../ui/Icons'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: 'easeOut' },
})

const GoldDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', maxWidth: 300, margin: '0 auto' }}>
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,transparent,var(--gold))' }} />
    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,var(--gold),transparent)' }} />
  </div>
)

/* Left decorative panel — visible only on desktop via CSS class */
function LeftPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', opacity: 0.72 }}>
      <div style={{ width: 1, height: 90, background: 'linear-gradient(180deg,transparent,var(--gold))' }} />
      <p style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '0.6rem',
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: 'var(--gold-dark)',
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        lineHeight: 1,
      }}>
        Guruvayoor · Kerala · 2026
      </p>
      <div style={{ width: 1, height: 90, background: 'linear-gradient(180deg,var(--gold),transparent)' }} />
      <div style={{
        width: 46, height: 46, borderRadius: '50%',
        border: '1px solid var(--gold)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <IconLotus size={22} color="var(--gold-dark)" />
      </div>
      <p style={{
        fontFamily: 'Noto Sans Malayalam, sans-serif',
        fontSize: '0.65rem',
        color: 'var(--gold-dark)',
        lineHeight: 1.9,
        textAlign: 'center',
      }}>
        ഓം നമഃ<br />ഭഗവതേ<br />വാസുദേവായ
      </p>
    </div>
  )
}

/* Right decorative panel */
function RightPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', opacity: 0.72, maxWidth: 180, textAlign: 'center' }}>
      <p style={{
        fontFamily: 'Tangerine, cursive',
        fontWeight: 700,
        fontSize: 'clamp(2.4rem, 3.2vw, 3.2rem)',
        color: 'var(--gold)',
        lineHeight: 1.15,
      }}>
        A Sacred Union
      </p>
      <div style={{ width: 1, height: 36, background: 'var(--gold)' }} />
      <p style={{
        fontFamily: 'Playfair Display, serif',
        fontStyle: 'italic',
        fontSize: '0.73rem',
        lineHeight: 1.85,
        color: 'var(--text-secondary)',
      }}>
        Blessed by the grace of Guruvayoorappan, two hearts become one.
      </p>
      <div style={{ width: 1, height: 36, background: 'var(--gold)' }} />
      <div style={{
        width: 46, height: 46, borderRadius: '50%',
        border: '1px solid var(--gold)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <IconOm size={22} color="var(--gold-dark)" />
      </div>
      <p style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '0.6rem',
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: 'var(--gold-dark)',
        writingMode: 'vertical-rl',
        lineHeight: 1,
      }}>
        June 25 · Thursday · 2026
      </p>
    </div>
  )
}

export default function HeroScene3D() {
  return (
    <section className="hero-outer">

      {/* Opening mantra */}
      <motion.p
        {...fadeUp(0.45)}
        style={{
          fontFamily: 'Noto Sans Malayalam, sans-serif',
          fontSize: 'clamp(0.9rem,2.5vw,1.1rem)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--gold-dark)',
          marginBottom: '1.5rem',
        }}
      >
        ഓം ഗം ഗണപതയേ നമഃ
      </motion.p>

      {/* ── Desktop three-column / Mobile single-column ── */}
      <div className="hero-row">

        {/* Left decoration — CSS hides on mobile */}
        <motion.div
          className="hero-deco-col"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
        >
          <LeftPanel />
        </motion.div>

        {/* Center: Ganesh + invitation card */}
        <div className="hero-card-col">
          <motion.img
            src="/ganesh.png"
            alt="Ganesha"
            {...fadeUp(0.3)}
            style={{ width: 'clamp(48px,12vw,68px)', height: 'clamp(48px,12vw,68px)', objectFit: 'contain', marginBottom: '0.75rem', opacity: 0.88 }}
            onError={e => { e.currentTarget.style.display = 'none' }}
          />

          <motion.div
            className="glass-card"
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7, type: 'spring', stiffness: 75 }}
            style={{ width: '100%', padding: 'clamp(1.5rem,5vw,2.5rem) clamp(1rem,5vw,2rem)' }}
          >
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(0.7rem,2.2vw,0.82rem)', color: 'var(--text-secondary)', marginBottom: '0.2rem', lineHeight: 1.5 }}>
              Mr. Rajendran Pillai B. &amp; Mrs. Resmi R.
            </p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(0.65rem,2vw,0.76rem)', color: 'var(--text-secondary)', marginBottom: '1.1rem', lineHeight: 1.6 }}>
              request your gracious presence at the wedding of our daughter
            </p>

            <GoldDivider />

            <h1 style={{ fontFamily: 'Tangerine, cursive', fontWeight: 700, fontSize: 'clamp(3.6rem,12vw,5.5rem)', color: 'var(--crimson)', lineHeight: 1.05, marginTop: '0.5rem' }}>
              Adv. Anju Rajendran
            </h1>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.1rem,3.5vw,1.4rem)', color: 'var(--gold)', margin: '0.1rem 0' }}>
              &amp;
            </p>
            <h1 style={{ fontFamily: 'Tangerine, cursive', fontWeight: 700, fontSize: 'clamp(3.6rem,12vw,5.5rem)', color: 'var(--crimson)', lineHeight: 1.05, marginBottom: '0.6rem' }}>
              Prajith Kumar P.J.
            </h1>

            <GoldDivider />

            {/* Date row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(0.5rem,2.5vw,1rem)', marginTop: '1.2rem', flexWrap: 'nowrap' }}>
              <div style={{ textAlign: 'right', minWidth: 0 }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(0.52rem,1.6vw,0.62rem)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>2026</p>
                <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 'clamp(0.82rem,2.8vw,1.05rem)', color: 'var(--text-primary)' }}>June</p>
              </div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 'clamp(2.2rem,8vw,3.4rem)', color: 'var(--crimson)', padding: '0 clamp(0.5rem,2vw,1rem)', borderLeft: '1px solid var(--gold)', borderRight: '1px solid var(--gold)', lineHeight: 1, flexShrink: 0 }}>
                25
              </div>
              <div style={{ textAlign: 'left', minWidth: 0 }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 'clamp(0.82rem,2.8vw,1.05rem)', color: 'var(--text-primary)' }}>Thursday</p>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(0.52rem,1.6vw,0.62rem)', color: 'var(--text-secondary)' }}>1201 Midhunam 11</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right decoration — CSS hides on mobile */}
        <motion.div
          className="hero-deco-col"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
        >
          <RightPanel />
        </motion.div>
      </div>

      {/* Countdown — below row, full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        style={{ width: '100%', maxWidth: 460 }}
      >
        <CountdownTimer targetDate="2026-06-25T06:20:00" />
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.1 }}
        style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
      >
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)' }}>
          Scroll to Explore
        </span>
        <motion.div
          style={{ width: 1, height: 28, background: 'var(--gold)' }}
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

