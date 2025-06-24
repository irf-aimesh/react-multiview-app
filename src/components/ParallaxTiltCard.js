import React from 'react';
import Tilt from 'react-parallax-tilt';

const ParallaxTiltCard = () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.07}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      style={{ width: 300, height: 180, borderRadius: 16, background: 'linear-gradient(135deg, #4f8cff 0%, #00d8ff 100%)', boxShadow: '0 8px 32px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', padding: 20 }}>
        Parallax<br />3D Tilt Card
      </div>
    </Tilt>
  </div>
);

export default ParallaxTiltCard; 