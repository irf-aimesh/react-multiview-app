import React from 'react';

const GlowEffect = ({ children, color = '#00d8ff', intensity = 1, className = '' }) => {
  const glowStyles = {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      background: `linear-gradient(45deg, ${color}88, transparent)`,
      borderRadius: 'inherit',
      filter: `blur(${4 * intensity}px)`,
      opacity: 0.7,
      zIndex: -1,
      animation: 'glowPulse 2s ease-in-out infinite'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-1px',
      left: '-1px',
      right: '-1px',
      bottom: '-1px',
      background: 'inherit',
      borderRadius: 'inherit',
      zIndex: -1
    }
  };

  return (
    <div className={`glow-wrapper ${className}`} style={glowStyles}>
      {children}
    </div>
  );
};

export default GlowEffect; 