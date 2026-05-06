import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField({ count = 180 }) {
  const meshRef = useRef()

  const { positions, velocities, phases, initialX } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count)
    const phases = new Float32Array(count)
    const initialX = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 24
      const y = (Math.random() - 0.5) * 18
      const z = (Math.random() - 0.5) * 10 - 3
      positions[i * 3 + 0] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      velocities[i] = 0.006 + Math.random() * 0.01
      phases[i] = Math.random() * Math.PI * 2
      initialX[i] = x
    }
    return { positions, velocities, phases, initialX }
  }, [count])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3))
    return geo
  }, [positions])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.elapsedTime
    const pos = meshRef.current.geometry.attributes.position
    for (let i = 0; i < count; i++) {
      let y = pos.getY(i)
      y -= velocities[i]
      if (y < -10) y = 10 + Math.random() * 3
      pos.setY(i, y)
      const x = initialX[i] + Math.sin(t * 0.25 + phases[i]) * 0.9
      pos.setX(i, x)
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        color="#D4AF37"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
