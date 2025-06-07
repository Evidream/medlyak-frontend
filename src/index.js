import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./screens/Welcome";
import UserIntro from "./screens/UserIntro";
import QuizIntro from "./screens/QuizIntro";
import SwipePsychology from "./screens/SwipePsychology";

import "./App.css"; // или './index.css', если ты используешь index.css

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/user-intro" element={<UserIntro />} />
        <Route path="/quiz-intro" element={<QuizIntro />} />
        <Route path="/swipe-psychology" element={<SwipePsychology />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
