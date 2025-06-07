import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserIntro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    telegram: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.telegram || !formData.city) {
      alert("Заполни все поля, родной!");
      return;
    }

    // Пока просто лог, позже отправим в Supabase
    console.log("📝 Пользователь:", formData);

    // Переход к следующему экрану
    navigate('/quiz-intro');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-3xl font-bold mb-4">Давай познакомимся</h1>
      <p className="mb-6 text-center text-lg">Здесь ты заполнишь базовую информацию — имя, возраст и т.д.</p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 p-3 bg-gray-900 text-white rounded-xl border border-gray-700"
        />
        <input
          type="number"
          name="age"
          placeholder="Возраст"
          value={formData.age}
          onChange={handleChange}
          className="w-full mb-3 p-3 bg-gray-900 text-white rounded-xl border border-gray-700"
        />
        <input
          type="text"
          name="telegram"
          placeholder="@твой_ник"
          value={formData.telegram}
          onChange={handleChange}
          className="w-full mb-3 p-3 bg-gray-900 text-white rounded-xl border border-gray-700"
        />
        <input
          type="text"
          name="city"
          placeholder="Город"
          value={formData.city}
          onChange={handleChange}
          className="w-full mb-6 p-3 bg-gray-900 text-white rounded-xl border border-gray-700"
        />
        <button
          type="submit"
          className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition"
        >
          Далее →
        </button>
      </form>
    </div>
  );
};

export default UserIntro;
