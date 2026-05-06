import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence } from 'framer-motion'

import ParticleField from './components/3d/ParticleField'
import Preloader3D from './components/sections/Preloader3D'
import GlobalControls from './components/ui/GlobalControls'
import BottomNav from './components/ui/BottomNav'
import HeroScene3D from './components/sections/HeroScene3D'
import InvitationDetails from './components/sections/InvitationDetails'
import EventItinerary from './components/sections/EventItinerary'
import RSVPSection from './components/sections/RSVPSection'
import Footer from './components/sections/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* ── Fixed 3D particle background (z-index: -1) ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'hidden',
          background:
            'radial-gradient(ellipse at 30% 20%, #F8F0D8 0%, #FDFBF7 55%, #F5EDD8 100%)',
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 9], fov: 52 }}
          style={{ width: '100%', height: '100%' }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.9} />
          <pointLight position={[6, 9, 5]} intensity={0.9} color="#D4AF37" />
          <Suspense fallback={null}>
            <ParticleField count={260} />
          </Suspense>
        </Canvas>
      </div>

      {/* ── Preloader overlay ── */}
      <AnimatePresence>
        {!loaded && <Preloader3D onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {/* ── Persistent floating controls ── */}
      <GlobalControls />

      {/* ── Mobile bottom navigation (hidden on desktop) ── */}
      <BottomNav />

      {/* ── Scrollable page content ── */}
      <main>
        <section id="hero"><HeroScene3D /></section>
        <section id="invitation"><InvitationDetails /></section>
        <section id="events"><EventItinerary /></section>
        <section id="rsvp"><RSVPSection /></section>
        <Footer />
      </main>
    </>
  )
}

