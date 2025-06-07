import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif",
      backgroundColor: "#fdf6f0",
      padding: "20px",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        🕯 Добро пожаловать в Медляк
      </h1>
      <p style={{
        maxWidth: "500px",
        fontSize: "1.1rem",
        marginBottom: "2rem",
        color: "#444"
      }}>
        Здесь тебя не оценивают по внешности. Только голос, душа и совпадение смыслов. Один чат. Один день. По-настоящему.
      </p>
      <button
        onClick={handleStart}
        style={{
          padding: "12px 24px",
          fontSize: "1rem",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Заполнить анкету
      </button>
    </div>
  );
}
