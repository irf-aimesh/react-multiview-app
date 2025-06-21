import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BulbSwitch from "./components/BulbSwitch";
import Counter from "./components/Counter";
import StatementList from "./components/StatementList";
import Accordion from "./components/Accordion";
import ImageCarousel from "./components/ImageCarousel";

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
            style={styles.centeredContainer} // <-- Center the carousel here
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
            <h1 style={styles.title}>🚀 React Showcase</h1>
            <p style={styles.subtitle}>Choose a component to explore:</p>
            <div style={styles.buttonGroup}>
              {[
                { label: "💡 Bulb Switch", key: "bulb", style: styles.glowBlue },
                { label: "🔢 Counter", key: "counter", style: styles.glowGreen },
                { label: "📜 Statement List", key: "statements", style: styles.glowPurple },
                { label: "📂 Accordion", key: "accordion", style: styles.glowYellow },
                { label: "🖼️ Image Carousel", key: "carousel", style: styles.glowPink },
              ].map(({ label, key, style }) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ ...styles.menuButton, ...style }}
                  onClick={() => setActiveComponent(key)}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div style={styles.appContainer}>
      {activeComponent && (
        <motion.button
          style={styles.backButton}
          onClick={() => setActiveComponent(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⬅ Back to Menu
        </motion.button>
      )}

      <AnimatePresence mode="wait">{renderComponent()}</AnimatePresence>
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
  },
  menuContainer: {
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
  },
  centeredContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
  },
  title: {
    fontSize: "42px",
    marginBottom: "20px",
    color: "#00d8ff",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "30px",
    color: "#cbd5e1",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  menuButton: {
    padding: "18px",
    fontSize: "18px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#fff",
    transition: "transform 0.2s ease",
  },
  glowBlue: {
    background: "linear-gradient(45deg, #0ea5e9, #3b82f6)",
    boxShadow: "0 0 16px rgba(59, 130, 246, 0.6)",
  },
  glowGreen: {
    background: "linear-gradient(45deg, #10b981, #059669)",
    boxShadow: "0 0 16px rgba(16, 185, 129, 0.6)",
  },
  glowPurple: {
    background: "linear-gradient(45deg, #8b5cf6, #6d28d9)",
    boxShadow: "0 0 16px rgba(139, 92, 246, 0.6)",
  },
  glowYellow: {
    background: "linear-gradient(45deg, #fbbf24, #f59e0b)",
    boxShadow: "0 0 16px rgba(251, 191, 36, 0.6)",
  },
  glowPink: {
    background: "linear-gradient(45deg, #ec4899, #db2777)",
    boxShadow: "0 0 16px rgba(236, 72, 153, 0.6)",
  },
  backButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    background: "#374151",
    color: "#f9fafb",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
};

export default App;
