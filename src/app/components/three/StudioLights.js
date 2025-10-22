import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

function StudioLights() {
  return (
    <group name='lights'>
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />

      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.8}
        color="#ffffff"
      />

      <Environment resolution={256}>
        <group>
          <Lightformer
            intensity={2}
            color="#ffffff"
            position={[-8, 3, 0]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={2}
            color="#ffffff"
            position={[8, 3, 0]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={1.5}
            color="#ffffff"
            position={[0, 8, 5]}
            scale={[12, 12, 1]}
          />
        </group>
      </Environment>

      <spotLight
        position={[0, 10, 5]}
        angle={0.25}
        intensity={Math.PI * 0.3}
        color="#ffffff"
      />
      <spotLight
        position={[-8, 0, 5]}
        angle={0.3}
        intensity={Math.PI * 0.2}
        color="#ffffff"
      />
      <spotLight
        position={[8, 0, 5]}
        angle={0.3}
        intensity={Math.PI * 0.2}
        color="#ffffff"
      />
    </group>
  )
}

export default StudioLights
