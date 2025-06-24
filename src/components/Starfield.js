import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Stars() {
  const ref = useRef();
  const starCount = 5000;
  const positions = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < starCount; i++) {
      arr.push((Math.random() - 0.5) * 100);
      arr.push((Math.random() - 0.5) * 100);
      arr.push((Math.random() - 0.5) * 100);
    }
    return new Float32Array(arr);
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0007;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.15} />
    </points>
  );
}

const Starfield = ({ isBackground = false }) => {
  const containerStyle = isBackground
    ? { width: '100vw', height: '100vh', background: '#000' }
    : { width: '100%', height: '300px', background: '#000', borderRadius: '12px', margin: '2rem 0' };

  return (
    <div style={containerStyle}>
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default Starfield; 