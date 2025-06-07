import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Welcome from './screens/Welcome';
import UserIntro from './screens/UserIntro';
import QuizIntro from './screens/QuizIntro';
import PsychologyBlock from './screens/PsychologyBlock'; // 💡 новый импорт

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/user-intro" element={<UserIntro />} />
        <Route path="/quiz-intro" element={<QuizIntro />} />
        <Route path="/block/psychology" element={<PsychologyBlock />} /> {/* ✅ новый маршрут */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
