import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "🌐 AI Breakthroughs",
    content:
      "Artificial Intelligence continues to evolve with advances in generative models, automation, and ethical AI development shaping the future.",
  },
  {
    title: "💻 Web3 & Blockchain",
    content:
      "Decentralized finance, NFTs, and the metaverse are redefining ownership and digital interactions on the internet.",
  },
  {
    title: "🌱 Climate Action",
    content:
      "Innovations in clean energy, sustainable tech, and global policies are driving the movement towards net-zero emissions.",
  },
  {
    title: "🚀 Space Exploration",
    content:
      "Private companies and government agencies push boundaries with missions to the Moon, Mars, and beyond.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Trending Topics</h1>
      <div style={styles.accordion}>
        {sections.map((section, i) => (
          <div key={i} style={styles.accordionItem}>
            <button
              aria-expanded={activeIndex === i}
              onClick={() => toggleAccordion(i)}
              style={{
                ...styles.accordionHeader,
                ...(activeIndex === i ? styles.activeHeader : {}),
              }}
            >
              {section.title}
              <span style={styles.icon}>{activeIndex === i ? "▲" : "▼"}</span>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === i && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: 8 },
                    collapsed: { opacity: 0, height: 0, marginTop: 0 },
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  style={styles.accordionBody}
                >
                  <p style={{ margin: 0 }}>{section.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "2rem",
    fontWeight: "900",
    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
  accordion: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    overflow: "hidden",
  },
  accordionItem: {
    borderBottom: "1px solid rgba(255,255,255,0.2)",
  },
  accordionHeader: {
    width: "100%",
    padding: "18px 24px",
    background: "transparent",
    border: "none",
    outline: "none",
    textAlign: "left",
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.3s ease",
    userSelect: "none",
  },
  activeHeader: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  icon: {
    fontSize: "1rem",
    marginLeft: 10,
  },
  accordionBody: {
    overflow: "hidden",
    padding: "0 24px 16px 24px",
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "#e0e0e0",
    userSelect: "text",
  },
};

export default Accordion;
