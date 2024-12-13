import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './QuizPage.css';
function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state || {};

  const questions = [
    {
      type: 'mcq',
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      type: 'mcq',
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      type: 'truefalse',
      question: "The Earth is flat.",
      options: ["True", "False"],
      correctAnswer: "False"
    },
    {
      type: 'mcq',
      question: "Who is the president of the United States?",
      options: ["Donald Trump", "Joe Biden", "Barack Obama", "George Bush"],
      correctAnswer: "Joe Biden"
    },
    {
      type: 'fillintheblank',
      question: "The capital of Japan is ___ .",
      correctAnswer: "Tokyo"
    },
    {
      type: 'mcq',
      question: "Which of these is a programming language?",
      options: ["HTML", "CSS", "JavaScript", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      type: 'truefalse',
      question: "Water boils at 100°C at sea level.",
      options: ["True", "False"],
      correctAnswer: "True"
    },
    {
      type: 'mcq',
      question: "What is the square root of 16?",
      options: ["2", "4", "8", "16"],
      correctAnswer: "4"
    },
    {
      type: 'truefalse',
      question: "Humans can breathe underwater without equipment.",
      options: ["True", "False"],
      correctAnswer: "False"
    },
    {
      type: 'fillintheblank',
      question: "The currency of the United Kingdom is ___ .",
      correctAnswer: "Pound"
    }
  ];

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
    document.body.classList.toggle('dark-mode', prefersDarkMode);
    document.body.classList.toggle('light-mode', !prefersDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  const handleAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.type === 'mcq' || currentQuestion.type === 'truefalse') {
      if (selectedOption === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
    } else if (currentQuestion.type === 'fillintheblank' && userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
      setUserAnswer('');
    } else {
      navigate('/results', { state: { name, score } });
    }
  };

  const handleUserInput = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.type === 'mcq' || currentQuestion.type === 'truefalse') {
      return (
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`${isDarkMode ? 'dark-option-button' : 'option-button'} ${selectedOption === option ? 'selected' : ''} ${selectedOption && selectedOption === option && option === currentQuestion.correctAnswer ? 'correct' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      );
    } else if (currentQuestion.type === 'fillintheblank') {
      return (
        <div className="input-container">
          <input
            type="text"
            value={userAnswer}
            onChange={handleUserInput}
            placeholder="Type your answer"
            className="input-field"
          />
        </div>
      );
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <h2 className={isDarkMode ? 'question-title dark' : 'question-title light'}>
        Question {currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}
      </h2>

      {renderQuestion()}

      <div>
        <button onClick={handleAnswer} className={isDarkMode ? 'dark-submit-button' : 'submit-button'}>
          Submit Answer
        </button>
      </div>
    </div>
  );
}

export default QuizPage;
