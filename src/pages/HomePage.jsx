import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData } from '../quizData';
import { useAuth } from '../context/AuthContext';

export default function HomePage() {
  const navigate = useNavigate();
  const {name, setName: setAuthName} = useAuth();

  const handleCategorySelect = (categoryId) => {
    navigate(`/quiz/${categoryId}`);
  };

  const handleNameChange = (newName) => {
    if(newName.trim() !== '' && newName !== name) {
      setAuthName(newName);
    }
  }

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