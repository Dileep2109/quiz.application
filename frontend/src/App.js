import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import Leaderboard from './components/Admin/Leaderboard';
import UserScores from './components/Admin/UserScores';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(null);
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setIsDarkMode(savedMode === 'dark');
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
      localStorage.setItem('theme', prefersDarkMode ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode === null) return;

    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  if (isDarkMode === null) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
        <header>
          <button onClick={toggleDarkMode}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/results" element={<ResultsPage />} />

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/leaderboard" element={<Leaderboard />} />
            <Route path="/admin/user-scores" element={<UserScores />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
