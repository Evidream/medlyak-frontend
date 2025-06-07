import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fefaf6",
      color: "#000",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1>🕯️ Добро пожаловать в Медляк</h1>
      <p style={{ maxWidth: "500px", fontSize: "1.1rem" }}>
        Здесь тебя не оценивают по внешности. Только голос, душа и совпадение смыслов.
        Один чат. Один день. По-настоящему.
      </p>
      <button
        style={{ marginTop: "20px", padding: "10px 20px" }}
        onClick={() => navigate("/user-intro")}
      >
        Заполнить анкету
      </button>
    </div>
  );
}
