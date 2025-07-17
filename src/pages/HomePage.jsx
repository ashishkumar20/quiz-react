import React from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData } from '../quizData';

export default function HomePage() {
  const navigate = useNavigate();

  const handleCategorySelect = (categoryId) => {
    navigate(`/quiz/${categoryId}`);
  };

  return (
    <div className="container">
      <h1>Select a Category</h1>
      <div className="category-list">
        {quizData.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategorySelect(cat.id)}
            className="btn"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}