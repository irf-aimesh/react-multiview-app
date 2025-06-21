import React, { useState } from "react";

function BulbSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <div
        style={{
          width: 100,
          height: 150,
          margin: "0 auto 20px",
          borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
          backgroundColor: isOn ? "#facc15" : "#6b7280",
          boxShadow: isOn ? "0 0 20px 8px #fbbf24" : "none",
          transition: "background-color 0.3s, box-shadow 0.3s",
        }}
        aria-label={`Light bulb is ${isOn ? "on" : "off"}`}
      />

      <button
        onClick={() => setIsOn((prev) => !prev)}
        style={{
          padding: "12px 24px",
          fontSize: 18,
          borderRadius: 8,
          border: "none",
          backgroundColor: isOn ? "#fbbf24" : "#374151",
          color: "#f9fafb",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: isOn ? "0 0 10px #fbbf24" : "none",
          transition: "background-color 0.3s, box-shadow 0.3s",
        }}
        aria-pressed={isOn}
      >
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

export default BulbSwitch;
