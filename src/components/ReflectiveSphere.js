import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

const ReflectiveSphere = () => (
  <div style={{ width: '100%', height: '300px', background: '#222', borderRadius: '12px', margin: '2rem 0' }}>
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial metalness={1} roughness={0.1} envMapIntensity={1} color="#00d8ff" />
      </mesh>
      <Environment preset="sunset" background={false} />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  </div>
);

export default ReflectiveSphere; 