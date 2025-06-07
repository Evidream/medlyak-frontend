// index.js — основной роутинг
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

import Welcome from './screens/Welcome';
import UserIntro from './screens/UserIntro';
import QuizIntro from './screens/QuizIntro';
import PsychologyBlock from './screens/PsychologyBlock';
import SwipePsychology from './screens/SwipePsychology';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/user-intro',
    element: <UserIntro />,
  },
  {
    path: '/quiz-intro',
    element: <QuizIntro />,
  },
  {
    path: '/psychology-block',
    element: <PsychologyBlock />,
  },
  {
    path: '/swipe-psychology',
    element: <SwipePsychology />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
