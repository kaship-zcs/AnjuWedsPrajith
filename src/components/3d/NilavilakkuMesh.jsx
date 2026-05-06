import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function NilavilakkuMesh() {
  const groupRef = useRef()
  const flameRef = useRef()

  // Lathe points for a traditional Kerala brass lamp silhouette
  const lathePts = useMemo(() => [
    new THREE.Vector2(0.04, -1.20),
    new THREE.Vector2(0.10, -1.00),
    new THREE.Vector2(0.18, -0.70),
    new THREE.Vector2(0.28, -0.30),
    new THREE.Vector2(0.42,  0.00),
    new THREE.Vector2(0.60,  0.20),
    new THREE.Vector2(0.70,  0.40),
    new THREE.Vector2(0.65,  0.58),
    new THREE.Vector2(0.50,  0.72),
    new THREE.Vector2(0.30,  0.84),
    new THREE.Vector2(0.15,  0.98),
    new THREE.Vector2(0.05,  1.20),
  ], [])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.55
      groupRef.current.position.y = Math.sin(t * 1.1) * 0.12
    }
    if (flameRef.current) {
      flameRef.current.scale.y = 0.9 + Math.sin(t * 4.5 + 1) * 0.13
      flameRef.current.scale.x = 0.9 + Math.cos(t * 3.2) * 0.09
    }
  })

  const goldMat = (
    <meshStandardMaterial
      color="#D4AF37"
      metalness={0.92}
      roughness={0.14}
      envMapIntensity={1.4}
    />
  )

  return (
    <group ref={groupRef} scale={0.72}>
      {/* Lamp body */}
      <mesh castShadow>
        <latheGeometry args={[lathePts, 40]} />
        {goldMat}
      </mesh>
      {/* Base disc */}
      <mesh position={[0, -1.38, 0]}>
        <cylinderGeometry args={[0.68, 0.78, 0.13, 32]} />
        {goldMat}
      </mesh>
      {/* Flame */}
      <group ref={flameRef} position={[0, 1.46, 0]}>
        <mesh>
          <coneGeometry args={[0.075, 0.32, 10]} />
          <meshStandardMaterial
            color="#FF9030"
            emissive="#FF5500"
            emissiveIntensity={2.8}
            transparent
            opacity={0.88}
          />
        </mesh>
        <pointLight color="#FF8C00" intensity={2.2} distance={4.5} decay={2} />
      </group>
    </group>
  )
}
