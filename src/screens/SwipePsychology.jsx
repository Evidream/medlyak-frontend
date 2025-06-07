import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  'Ты интроверт?',
  'Тебе важно обсуждать эмоции в отношениях?',
  'Ты склонен к ревности?',
  'Ты умеешь прощать?',
  'Тебе важно чувствовать постоянный контакт с партнёром?'
];

const SwipePsychology = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (value) => {
    const newAnswers = [...answers, { question: questions[currentIndex], answer: value }];
    setAnswers(newAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Позже можно будет сохранить ответы в Supabase или context
      navigate('/block/physiology'); // пример перехода на следующий блок
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-4">🧠 Вопрос {currentIndex + 1} из {questions.length}</h2>
      <p className="text-xl mb-6 max-w-md">{questions[currentIndex]}</p>
      <div className="flex space-x-6">
        <button
          onClick={() => handleAnswer(false)}
          className="bg-gray-200 text-black px-6 py-3 rounded-full hover:bg-gray-300 transition"
        >
          Нет
        </button>
        <button
          onClick={() => handleAnswer(true)}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Да
        </button>
      </div>
    </div>
  );
};

export default SwipePsychology;
