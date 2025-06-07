import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserIntro() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>👋 Давай познакомимся</h2>
      <p>Здесь ты заполнишь базовую информацию: имя, возраст и т.д.</p>
      <button
        style={{ marginTop: "20px", padding: "10px 20px" }}
        onClick={() => navigate("/quiz-intro")}
      >
        Далее
      </button>
    </div>
  );
}
