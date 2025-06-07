import React from "react";
import { useNavigate } from "react-router-dom";

export default function PsychologyBlock() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>🧠 Блок: Психология</h2>
      <p>
        Мы знаем, что настоящая совместимость — это не только вкус к пасте и фильмам. Это про характер, привычки, реакцию на стресс.
        Будь честен в ответах — это поможет найти того самого человека.
      </p>
      <button
        style={{ marginTop: "20px", padding: "10px 20px" }}
        onClick={() => navigate("/swipe-psychology")}
      >
        Поехали
      </button>
    </div>
  );
}
