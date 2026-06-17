import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const GoldDot = () => (
  <div className="gold-dot-row" style={{ maxWidth: 260, margin: '0.75rem auto' }}>
    <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)' }} />
  </div>
)

function FamilyCard({ custom, role, name, parentLine, addressLine }) {
  return (
    <motion.div
      className="glass-card"
      variants={fadeUp}
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      style={{ padding: 'clamp(1.25rem,4vw,2rem) clamp(1rem,3.5vw,1.75rem)', textAlign: 'center' }}
    >
      <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '0.6rem' }}>
        {role}
      </p>
      <div className="gold-divider" style={{ marginBottom: '1rem' }} />
      <h3
        style={{
          fontFamily: 'Tangerine, cursive',
          fontWeight: 700,
          fontSize: 'clamp(3rem, 9vw, 4rem)',
          color: 'var(--crimson)',
          lineHeight: 1.1,
          marginBottom: '0.75rem',
        }}
      >
        {name}
      </h3>
      <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
        {parentLine}
      </p>
      <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.72rem', color: 'var(--gold-dark)', marginTop: '0.4rem', letterSpacing: '0.05em' }}>
        {addressLine}
      </p>
    </motion.div>
  )
}

export default function InvitationDetails() {
  return (
    <section className="section-pad">
      <div className="section-inner">

      {/* Section heading */}
      <motion.div
        style={{ textAlign: 'center', marginBottom: '3rem' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '0.5rem' }}>
          With the Blessings of the Almighty
        </p>
        <h2 style={{ fontFamily: 'Tangerine, cursive', fontWeight: 700, fontSize: 'clamp(3.5rem, 10vw, 5rem)', color: 'var(--text-primary)', lineHeight: 1.1 }}>
          The Wedding Invitation
        </h2>
        <GoldDot />
      </motion.div>

      {/* Host family banner */}
      <motion.div
        className="glass-card"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ textAlign: 'center', padding: 'clamp(1.25rem,4vw,1.75rem)', marginBottom: '2rem' }}
      >
        <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 'clamp(0.78rem,3vw,0.92rem)', color: 'var(--text-primary)', lineHeight: 1.6 }}>
          Mr. Rajendran Pillai B. &amp; Mrs. Resmi R.
        </p>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(0.68rem,2.2vw,0.76rem)', color: 'var(--gold-dark)', marginTop: '0.3rem', lineHeight: 1.6 }}>
          Raja Resmi, Changankulangara, Vavvakkavu P.O &nbsp;·&nbsp; Ph: 7306844268
        </p>
        <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
          Request your gracious presence at the wedding of our daughter
        </p>
      </motion.div>

      {/* Couple cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,260px), 1fr))',
          gap: 'clamp(1rem,3vw,1.5rem)',
          marginBottom: '3rem',
        }}
      >
        <FamilyCard
          custom={0}
          role="The Bride"
          name="Anju Rajendran"
          parentLine="D/o. Mr. Rajendran Pillai B. & Mrs. Resmi R."
          addressLine="Raja Resmi, Changankulangara, Vavvakkavu P.O"
        />
        <FamilyCard
          custom={1}
          role="The Groom"
          name="Prajith Kumar P.J."
          parentLine="S/o. Mr. Prasannakumar R (Late) & Mrs. Jayasree K."
          addressLine="Vysakham, Pada: North, Karunagappally"
        />
      </div>

      {/* Krishna devotional image */}
      <motion.div
        style={{ textAlign: 'center' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src="/krishna.png"
          alt="Baby Krishna"
          style={{ width: 120, height: 150, objectFit: 'contain', opacity: 0.88, margin: '0 auto', filter: 'drop-shadow(0 4px 16px rgba(212,175,55,0.18))' }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '0.78rem', color: 'var(--gold)', marginTop: '0.5rem' }}>
          Ohm namo Bhagavate Vasudevaya
        </p>
      </motion.div>
      </div>
    </section>
  )
}
