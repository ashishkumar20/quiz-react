import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { quizData } from '../quizData';

const QuizPage = () => {
  const params = useParams();
  const category = params.categoryId;
  const navigate = useNavigate();

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [unansweredCount, setUnansweredCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(()=>{
      const questions_temp = quizData.categories.find(cat=> cat.id === category)?.questions || [];
      setQuestions(questions_temp);
  }, [category]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    setShowAnswer(true);
    if (answer[0] === questions[currentQuestionIdx].correctAnswer) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      setUnansweredCount((prev) => prev + 1);
    }
    if (currentQuestionIdx + 1 < questions.length) {
      setCurrentQuestionIdx((idx) => idx + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
      setTimeLeft(questions[currentQuestionIdx].timeLimit);
    } else {
      navigate('/result', {
        state: { correct: correctCount, incorrect: questions?.length - correctCount, unanswered: unansweredCount, score: `${Math.round((correctCount / questions.length) * 100)}%` }
      });
    }
  };

  if (!category) return <p>No category selected.</p>;

  return (
    <div className="container">
      <div className="header">
        <h2>Question {currentQuestionIdx + 1} of {questions?.length}</h2>
        <span className="timer">⏱ {timeLeft}s</span>
      </div>
      <p className="question">{questions[currentQuestionIdx]?.question}</p>
      <div className="options">
        {questions[currentQuestionIdx]?.options?.map((option) => {
          const isCorrect = option[0] === questions[currentQuestionIdx]?.correctAnswer;
          const isSelected = selectedAnswer === option;
          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className={`option-btn ${isSelected ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
              disabled={!!selectedAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div style={{display: 'flex'}}>
        <button onClick={handleNext} className="btn next-btn">Next</button>
        <button onClick={handleNext} className="btn skip-btn">Skip this Question</button>
      </div>
    </div>
  );
};

export default QuizPage;
