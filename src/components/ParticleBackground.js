import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Particles({ count = 200 }) {
  const mesh = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 50;
      pos[i + 1] = (Math.random() - 0.5) * 50;
      pos[i + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00d8ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

const ParticleBackground = () => {
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
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleBackground; 