import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h2 style={{ fontSize: 48, marginBottom: 20 }}>{count}</h2>

      <div>
        <button
          onClick={() => setCount(count - 1)}
          style={buttonStyle}
          aria-label="Decrease count"
        >
          ➖
        </button>

        <button
          onClick={() => setCount(0)}
          style={{ ...buttonStyle, margin: "0 20px" }}
          aria-label="Reset count"
        >
          🔄
        </button>

        <button
          onClick={() => setCount(count + 1)}
          style={buttonStyle}
          aria-label="Increase count"
        >
          ➕
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "12px 24px",
  fontSize: 24,
  borderRadius: 8,
  border: "none",
  backgroundColor: "#2563eb",
  color: "#f9fafb",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.3s",
};

export default Counter;
