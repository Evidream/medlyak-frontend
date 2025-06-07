import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './index.css';

// Экраны
import Welcome from './screens/Welcome';
import UserIntro from './screens/UserIntro';
import QuizIntro from './screens/QuizIntro';
import SwipePsychology from './screens/SwipePsychology';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/intro" element={<UserIntro />} />
        <Route path="/quiz-intro" element={<QuizIntro />} />
        <Route path="/block/psychology" element={<SwipePsychology />} />
        {/* Добавляй сюда другие блоки по мере создания */}
      </Routes>
    </Router>
  </React.StrictMode>
);
