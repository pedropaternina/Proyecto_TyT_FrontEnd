'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Book from '../models/Book'
import StudioLights from './StudioLights'

export default function BookCanvas({ scale_book = 0.6 }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.5], fov: 45 }} 
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <StudioLights />
      <Book scale={scale_book} position={[0, -0.2, 0]} /> 
      <OrbitControls
        enableZoom={false}
        enablePan={false}       
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.6}
        minAzimuthAngle={-Math.PI}  
        maxAzimuthAngle={Math.PI}
        />
    </Canvas>
  )
}
