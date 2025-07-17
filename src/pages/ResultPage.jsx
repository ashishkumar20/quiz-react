import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state || {correct: 0, unanswered: 0};

  const feedback = result.correct >= 2 ? 'Great job!' : 'Keep practicing!';

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="container text-center">
      <h1>Quiz Complete!</h1>
      <p>Correct Answers: {result.correct}</p>
      <p>Unanswered: {result.unanswered}</p>
      <p>Score: {result.score}</p>
      <h3>{feedback}</h3>
      <button onClick={handleRestart} className="btn">Restart</button>
    </div>
  );
};

export default ResultPage;
