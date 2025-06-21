import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
      }}
    >
      <h1>React Counter</h1>
      <h2 style={{ fontSize: "48px", margin: "20px" }}>{count}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button
          onClick={increment}
          style={buttonStyle("#2ecc71")}
        >
          + Increase
        </button>

        <button
          onClick={decrement}
          style={buttonStyle("#e74c3c")}
        >
          - Decrease
        </button>

        <button
          onClick={reset}
          style={buttonStyle("#95a5a6")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

const buttonStyle = (bgColor) => ({
  padding: "12px 24px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: bgColor,
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  transition: "0.3s ease",
});

export default Counter;
