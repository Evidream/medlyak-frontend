import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    birthdate: "",
    city: "",
    telegram: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Пока просто console.log, потом будет Supabase save
    console.log("Регистрационные данные:", formData);
    navigate("/intro");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>📝 Немного о себе</h1>
      <form onSubmit={handleSubmit}>
        <label>Имя:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />

        <label>Пол:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required style={inputStyle}>
          <option value="">Выберите</option>
          <option value="male">Мужчина</option>
          <option value="female">Женщина</option>
          <option value="other">Другое</option>
        </select>

        <label>Дата рождения:</label>
        <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required style={inputStyle} />

        <label>Город / регион:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required style={inputStyle} />

        <label>Telegram (ник):</label>
        <input type="text" name="telegram" value={formData.telegram} onChange={handleChange} required style={inputStyle} />

        <button type="submit" style={buttonStyle}>Продолжить</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "1rem",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};
