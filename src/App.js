import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from 'react-parallax-tilt';

import BulbSwitch from "./components/BulbSwitch";
import Counter from "./components/Counter";
import StatementList from "./components/StatementList";
import Accordion from "./components/Accordion";
import ImageCarousel from "./components/ImageCarousel";
import ParticleBackground from "./components/ParticleBackground";
import GlowEffect from "./components/GlowEffect";
import UI3DBackground from "./components/UI3DBackground";
import Starfield from "./components/Starfield";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "bulb":
        return (
          <motion.div
            key="bulb"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <BulbSwitch />
          </motion.div>
        );
      case "counter":
        return (
          <motion.div
            key="counter"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Counter />
          </motion.div>
        );
      case "statements":
        return (
          <motion.div
            key="statements"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <StatementList />
          </motion.div>
        );
      case "accordion":
        return (
          <motion.div
            key="accordion"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Accordion />
          </motion.div>
        );
      case "carousel":
        return (
          <motion.div
            key="carousel"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            style={styles.centeredContainer}
          >
            <ImageCarousel />
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={styles.menuContainer}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
              <GlowEffect color="#4f8cff" intensity={1.5}>
                <h1 className="gradient-bg neon-text" style={{
                  ...styles.title,
                  background: "linear-gradient(45deg, #ffffff, #00d8ff)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  padding: '20px',
                  borderRadius: '15px',
                  textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                }}>
                  🚀 React Showcase
                </h1>
              </GlowEffect>
            </Tilt>
            <p className="neon-text" style={{...styles.subtitle}}>Choose a component to explore:</p>
            <div style={styles.buttonGroup}>
              {[
                { label: "💡 Bulb Switch", key: "bulb", style: styles.glowBlue, color: "#4f8cff" },
                { label: "🔢 Counter", key: "counter", style: styles.glowGreen, color: "#10b981" },
                { label: "📜 Statement List", key: "statements", style: styles.glowPurple, color: "#8b5cf6" },
                { label: "📂 Accordion", key: "accordion", style: styles.glowYellow, color: "#fbbf24" },
                { label: "🖼️ Image Carousel", key: "carousel", style: styles.glowPink, color: "#ec4899" },
              ].map(({ label, key, style, color }) => (
                <Tilt
                  key={key}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  scale={1.05}
                  transitionSpeed={2000}
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  glareColor="#ffffff"
                  glarePosition="all"
                >
                  <GlowEffect color={color}>
                    <motion.button
                      className="glass-effect neon-border intense-glow"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ ...styles.menuButton, ...style }}
                      onClick={() => setActiveComponent(key)}
                    >
                      {label}
                    </motion.button>
                  </GlowEffect>
                </Tilt>
              ))}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div style={styles.appContainer}>
      {/* 3D UI Background */}
      <UI3DBackground />
      {/* Professional Starfield background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.35, filter: 'blur(0.5px)' }}>
        <Starfield isBackground={true} />
      </div>
      {/* Particle background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <ParticleBackground />
      </div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        {activeComponent && (
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={2000}
            perspective={1000}
          >
            <GlowEffect>
              <motion.button
                className="glass-effect neon-button neon-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.backButton}
                onClick={() => setActiveComponent(null)}
              >
                ← Back to Menu
              </motion.button>
            </GlowEffect>
          </Tilt>
        )}
        <AnimatePresence mode="wait">
          {renderComponent()}
        </AnimatePresence>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#111827",
    color: "#f9fafb",
    minHeight: "100vh",
    padding: "40px 20px",
    boxSizing: "border-box",
    position: "relative",
    overflow: 'hidden',
    background: 'linear-gradient(135deg, rgba(13,17,23,0.95) 0%, rgba(0,20,40,0.95) 100%)',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    padding: '2rem',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255,255,255,0.03)',
    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
  },
  menuButton: {
    padding: '1rem 1.5rem',
    margin: '0.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    color: '#ffffff',
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    textShadow: '0 0 10px rgba(255,255,255,0.5)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2), 0 0 20px rgba(0,216,255,0.1), inset 0 0 20px rgba(0,216,255,0.05)',
    transform: 'translateZ(20px)',
  },
  buttonGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '1200px',
    perspective: '1000px',
    transformStyle: 'preserve-3d',
    padding: '2rem',
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: '2px',
    transform: 'translateZ(50px)',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#00d8ff',
    textAlign: 'center',
    marginBottom: '2rem',
    textShadow: '0 0 10px rgba(0,216,255,0.5)',
    transform: 'translateZ(30px)',
  },
  backButton: {
    position: 'fixed',
    top: '20px',
    left: '20px',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    color: '#ffffff',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    zIndex: 10,
  },
  centeredContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 100px)',
    width: '100%',
    padding: '2rem',
  },
  glowBlue: {
    boxShadow: '0 0 15px rgba(79,140,255,0.5)',
  },
  glowGreen: {
    boxShadow: '0 0 15px rgba(16,185,129,0.5)',
  },
  glowPurple: {
    boxShadow: '0 0 15px rgba(139,92,246,0.5)',
  },
  glowYellow: {
    boxShadow: '0 0 15px rgba(251,191,36,0.5)',
  },
  glowPink: {
    boxShadow: '0 0 15px rgba(236,72,153,0.5)',
  },
};

export default App;
