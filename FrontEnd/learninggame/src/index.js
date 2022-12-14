import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Compo/Menu";
import App from "./Pages/App";
import LessonPage from "./Pages/LessonPage.Js";
import LoadingQuestions from "./Pages/LoadingQuestions.js"
import QuestionPage from "./Pages/QuestionPage"
import AnswerPage from "./Pages/AnswerPage"
import EndLessonPage from "./Pages/EndLessonPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Menu />} />
              <Route index element={<App />} />
              <Route path="Lessons" element={<LessonPage />} />
              <Route path="LoadingQuestions" element={<LoadingQuestions />} />
              <Route path="Questions" element={<QuestionPage />} />
              <Route path="Answer" element={<AnswerPage />} />
              <Route path="EndLesson" element={<EndLessonPage />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
