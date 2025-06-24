import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';

function FloatingText() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <Text
      ref={ref}
      fontSize={1}
      color="#ffb300"
      anchorX="center"
      anchorY="middle"
    >
      3D Floating Text
    </Text>
  );
}

const Floating3DText = () => (
  <div style={{ width: '100%', height: '300px', background: '#222', borderRadius: '12px', margin: '2rem 0' }}>
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <FloatingText />
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
    </Canvas>
  </div>
);

export default Floating3DText; 