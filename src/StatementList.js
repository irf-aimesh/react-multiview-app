import React, { useState } from "react";

function StatementList() {
  const [statements, setStatements] = useState([]);

  const sampleStatements = [
    "Life is what happens when you're busy making other plans.",
    "Stay hungry, stay foolish.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "React makes it painless to create interactive UIs.",
    "Success is not in what you have, but who you are.",
    "You miss 100% of the shots you don't take.",
    "The best way to get started is to quit talking and begin doing.",
    "In the middle of every difficulty lies opportunity.",
    "Creativity is intelligence having fun.",
    "Don't watch the clock; do what it does. Keep going."
  ];

  const getRandomStatement = () => {
    const randomIndex = Math.floor(Math.random() * sampleStatements.length);
    return sampleStatements[randomIndex];
  };

  const handleAdd = () => {
    const newStatement = getRandomStatement();
    setStatements(prev => [...prev, newStatement]);
  };

  const handleDelete = () => {
    setStatements(prev => prev.slice(0, -1));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Random Statement Generator</h1>

      <div style={styles.buttonRow}>
        <button onClick={handleAdd} style={{ ...styles.button, ...styles.addButton }}>
          ➕ Add Random Statement
        </button>
        <button onClick={handleDelete} style={{ ...styles.button, ...styles.deleteButton }}>
          ❌ Remove Last
        </button>
      </div>

      <ul style={styles.list}>
        {statements.map((statement, index) => (
          <li key={index} style={styles.listItem}>
            {statement}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 🎨 Styles
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    padding: "60px 20px",
    backgroundColor: "#1f1f2e",
    color: "#f0f0f0",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "40px",
    color: "#00d8ff",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  button: {
    padding: "14px 30px",
    fontSize: "16px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
  },
  addButton: {
    background: "linear-gradient(45deg, #00c6ff, #0072ff)",
    color: "#fff",
  },
  deleteButton: {
    background: "linear-gradient(45deg, #ff6e7f, #bfe9ff)",
    color: "#000",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    maxWidth: "600px",
    margin: "0 auto",
  },
  listItem: {
    backgroundColor: "#2c2c3a",
    padding: "12px 20px",
    marginBottom: "10px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
};

export default StatementList;
