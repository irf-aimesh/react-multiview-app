import React from "react";

const statements = [
  "React is awesome!",
  "Framer Motion makes animations easy.",
  "Accessibility matters.",
  "Keep components small and reusable.",
  "Use hooks for state management.",
];

function StatementList() {
  return (
    <div style={{ maxWidth: 600, margin: "60px auto", color: "#e0e7ff" }}>
      <h2 style={{ textAlign: "center", marginBottom: 30, color: "#a78bfa" }}>
        Statement List
      </h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {statements.map((statement, i) => (
          <li
            key={i}
            style={{
              backgroundColor: "#4c1d95",
              padding: "14px 20px",
              marginBottom: 14,
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              fontSize: 18,
            }}
          >
            {statement}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatementList;
