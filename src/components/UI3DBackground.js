import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Environment } from '@react-three/drei';

function FloatingIcons() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = Math.sin(t / 4) * 0.3;
    group.current.rotation.y = Math.sin(t / 2) * 0.2;
  });

  const IconCube = ({ position, scale = 1, rotationSpeed = 1 }) => {
    const meshRef = useRef();
    
    useFrame((state) => {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(t * rotationSpeed) * 0.3;
      meshRef.current.rotation.y = t * 0.5 * rotationSpeed;
    });

    return (
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef} position={position} scale={scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#00d8ff"
            metalness={0.8}
            roughness={0.2}
            emissive="#00d8ff"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
    );
  };

  return (
    <group ref={group}>
      <IconCube position={[-4, 2, -2]} scale={0.5} rotationSpeed={0.8} />
      <IconCube position={[4, -2, -1]} scale={0.3} rotationSpeed={1.2} />
      <IconCube position={[-3, -3, -2]} scale={0.4} rotationSpeed={1} />
      <IconCube position={[3, 3, -3]} scale={0.6} rotationSpeed={0.9} />
    </group>
  );
}

const UI3DBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <FloatingIcons />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default UI3DBackground; 