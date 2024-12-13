import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuizSelection = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    setQuizzes([
      { id: 1, name: 'General Knowledge' },
      { id: 2, name: 'Science' },
      { id: 3, name: 'History' }
    ]);
  }, []);

  return (
    <div>
      <h2>Select a Quiz</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizSelection;
