import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IconMusic, IconMusicOff } from './Icons'

const AUDIO_SRC = '/audio/agam-walk_of_bride.mp3'

/* Module-level singleton — survives re-renders & StrictMode double-invoke */
let _audio = null
function getAudio() {
  if (!_audio) {
    _audio = new Audio(AUDIO_SRC)
    _audio.loop = true
    _audio.volume = 0.45
  }
  return _audio
}

export default function GlobalControls() {
  const [playing, setPlaying] = useState(false)
  /* intentPlaying ref lets us read latest intent synchronously (no stale closure) */
  const intentRef = useRef(false)

  /* Try autoplay once on mount; fall back to first user gesture */
  useEffect(() => {
    const audio = getAudio()

    const tryPlay = () => {
      if (intentRef.current) return
      audio.play()
        .then(() => {
          intentRef.current = true
          setPlaying(true)
          cleanUpListeners()
        })
        .catch(() => {})
    }

    // Try immediately on mount (if browser allows autoplay)
    tryPlay()

    /* If autoplay was blocked, listen to any valid user gesture */
    const gestures = ['touchstart', 'touchend', 'click', 'mousedown', 'keydown', 'pointerdown']
    const onGesture = () => {
      if (intentRef.current) {
        cleanUpListeners()
      } else {
        tryPlay()
      }
    }

    const cleanUpListeners = () => {
      gestures.forEach(evt => {
        window.removeEventListener(evt, onGesture)
      })
    }

    gestures.forEach(evt => {
      window.addEventListener(evt, onGesture, { passive: true })
    })

    return () => {
      cleanUpListeners()
      /* Don't pause on unmount — audio should keep playing through navigations */
    }
  }, [])

  const toggleAudio = () => {
    const audio = getAudio()
    if (intentRef.current) {
      audio.pause()
      intentRef.current = false
      setPlaying(false)
    } else {
      audio.play()
        .then(() => {
          intentRef.current = true
          setPlaying(true)
        })
        .catch(() => {})
    }
  }

  return (
    <div style={{
      position: 'fixed',
      top: 'calc(1rem + env(safe-area-inset-top, 0px))',
      right: '1rem',
      left: 'auto',
      zIndex: 50,
    }}>
      <motion.button
        className="neu-btn"
        style={{
          width: 48,
          height: 48,
          minWidth: 48,
          minHeight: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'visible',
        }}
        whileTap={{ scale: 0.88 }}
        onClick={(e) => {
          e.stopPropagation()
          toggleAudio()
        }}
        onPointerDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        aria-label={playing ? 'Mute music' : 'Unmute music'}
        title={playing ? 'Mute music' : 'Unmute music'}
      >
        {playing && <span className="audio-fab__pulse" aria-hidden="true" />}
        {playing
          ? <IconMusic size={18} color="var(--gold-dark)" />
          : <IconMusicOff size={18} color="var(--text-secondary)" />
        }
      </motion.button>
    </div>
  )
}
