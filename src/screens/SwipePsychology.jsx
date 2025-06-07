import React, { useState } from "react";

const questions = [
  "Ты чаще заряжаешься в одиночестве, чем в компании?",
  "Важно ли тебе проговаривать чувства в отношениях?",
  "Ты считаешь себя эмоционально устойчивым человеком?"
];

export default function SwipePsychology() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, { question: questions[index], answer }]);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      alert("Спасибо за ответы! (заглушка)");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>🧭 Вопрос {index + 1} из {questions.length}</h2>
      <p style={{ fontSize: "1.2rem" }}>{questions[index]}</p>
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => handleAnswer("Да")}
          style={{ marginRight: "20px", padding: "10px 20px" }}
        >
          👉 Да
        </button>
        <button
          onClick={() => handleAnswer("Нет")}
          style={{ padding: "10px 20px" }}
        >
          👈 Нет
        </button>
      </div>
    </div>
  );
}

