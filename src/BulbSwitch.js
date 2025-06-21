import React, { useState } from "react";

function BulbSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#1a1a1a",
        height: "100vh",
        color: "#eee",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      {/* Bulb */}
      <div
        style={{
          margin: "0 auto",
          width: "120px",
          height: "180px",
          borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%",
          background: isOn
            ? "radial-gradient(circle at center, #fff973, #f1c40f 60%, #b7950b)"
            : "radial-gradient(circle at center, #555555, #333333 60%)",
          boxShadow: isOn
            ? `0 0 30px 12px rgba(241, 196, 15, 0.8),
               0 0 50px 20px rgba(241, 196, 15, 0.5),
               inset 0 -5px 15px rgba(255, 255, 255, 0.7)`
            : "inset 0 0 10px rgba(0,0,0,0.6)",
          position: "relative",
          transition: "all 0.5s ease",
          filter: isOn ? "drop-shadow(0 0 10px #f1c40f)" : "none",
        }}
      >
        {/* Bulb base */}
        <div
          style={{
            position: "absolute",
            bottom: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "40px",
            background:
              "linear-gradient(145deg, #4d4d4d, #1a1a1a)",
            borderRadius: "12px",
            boxShadow:
              "inset 2px 2px 5px rgba(255,255,255,0.2), inset -2px -2px 5px rgba(0,0,0,0.7)",
          }}
        />
        {/* Bulb screw lines */}
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "40px",
            height: "25px",
            background:
              "repeating-linear-gradient(45deg, #999 0, #999 2px, #555 2px, #555 6px)",
            borderRadius: "6px",
            boxShadow: "inset 0 2px 3px rgba(0,0,0,0.8)",
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={() => setIsOn(true)}
          style={{
            padding: "14px 32px",
            fontSize: "18px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            background:
              "linear-gradient(45deg, #f39c12, #d35400)",
            color: "#fff",
            fontWeight: "600",
            boxShadow:
              "0 6px 12px rgba(243, 156, 18, 0.6), 0 4px 8px rgba(211, 84, 0, 0.8)",
            transition: "all 0.3s ease",
            userSelect: "none",
          }}
          onMouseEnter={e =>
            (e.currentTarget.style.background =
              "linear-gradient(45deg, #d35400, #f39c12)")
          }
          onMouseLeave={e =>
            (e.currentTarget.style.background =
              "linear-gradient(45deg, #f39c12, #d35400)")
          }
        >
          Switch On
        </button>

        <button
          onClick={() => setIsOn(false)}
          style={{
            padding: "14px 32px",
            fontSize: "18px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            background:
              "linear-gradient(45deg, #7f8c8d, #34495e)",
            color: "#ecf0f1",
            fontWeight: "600",
            boxShadow:
              "0 6px 12px rgba(127, 140, 141, 0.6), 0 4px 8px rgba(52, 73, 94, 0.8)",
            transition: "all 0.3s ease",
            userSelect: "none",
          }}
          onMouseEnter={e =>
            (e.currentTarget.style.background =
              "linear-gradient(45deg, #34495e, #7f8c8d)")
          }
          onMouseLeave={e =>
            (e.currentTarget.style.background =
              "linear-gradient(45deg, #7f8c8d, #34495e)")
          }
        >
          Switch Off
        </button>
      </div>
    </div>
  );
}

export default BulbSwitch;
