import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizIntro = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/block/psychology');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-center">
      <h1 className="text-3xl font-bold mb-4">💬 Психология</h1>
      <p className="text-lg mb-6 max-w-md">
        Очень важно, чтобы люди не только нравились друг другу внешне, но и подходили психологически.
        Этот блок поможет понять, кто тебе действительно подойдёт.
      </p>
      <button
        onClick={handleStart}
        className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
      >
        Начать
      </button>
    </div>
  );
};

export default QuizIntro;
