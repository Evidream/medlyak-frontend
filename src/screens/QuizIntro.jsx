import React from "react";

export default function QuizIntro() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Анкета начинается</h1>
      <p className="text-lg max-w-md mb-6">
        Здесь не будет поверхностных вопросов. Мы постараемся понять, кто ты и кто тебе действительно подойдёт.
      </p>
      <p className="text-sm text-gray-500">
        Заполнение займёт 5–10 минут. Отвечай честно. Здесь всё по-настоящему.
      </p>
    </div>
  );
}
