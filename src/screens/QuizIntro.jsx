import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizIntro = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/block/psychology');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f8f4ec] px-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Это не просто анкета.
      </h1>
      <p className="text-lg text-center max-w-md mb-6">
        Мы постарались создать шанс. Не по лайкам, не по фоткам — а по тебе.
        <br /><br />
        Сейчас будут 5 блоков: психология, физиология, повадки, привычки и бытовуха.
        Отвечай честно. Это займет 10 минут, но поможет найти кого-то по-настоящему тебе подходящего.
      </p>
      <button
        className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
        onClick={handleStart}
      >
        Начать с психологии
      </button>
    </div>
  );
};

export default QuizIntro;
