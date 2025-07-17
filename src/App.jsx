import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import Layout from './Layout/Layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/quiz/:categoryId' element={<QuizPage />} />
        <Route path='/result' element={<ResultPage />} />
        </Route>
      </Routes>
    </Router>
  );
}