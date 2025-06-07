import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuizIntro() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>📋 Анкета начинается</h2>
      <p>
        Здесь не будет поверхностных вопросов. Мы постараемся понять, кто ты и кто тебе действительно подойдёт.<br />
        Заполнение займёт 5–10 минут. Отвечай честно. Здесь всё по-настоящему.
      </p>
      <button
        style={{ marginTop: "20px", padding: "10px 20px" }}
        onClick={() => navigate("/psychology-block")}
      >
        Начать
      </button>
    </div>
  );
}
