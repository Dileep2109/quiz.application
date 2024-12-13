import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleAdminLoginRedirect = () => {
    navigate("/admin/login");
  };

  const handleStartQuiz = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    navigate("/quiz", { state: { name } });
  };

  return (
    <div className="home-page">
      <div className="home-page-content">
        <h1>Welcome to the Quiz</h1>
        <p>Enter your name to begin:</p>


        <div className="input-container">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="name-input"
          />
        </div>

        <div className="button-container">
          <button
            onClick={handleStartQuiz}
            disabled={!name.trim()}
            className="start-btn"
          >
            Start Quiz
          </button>
        </div>
      </div>

      <div className="admin-login-container">
        <button
          onClick={handleAdminLoginRedirect}
          className="admin-login-button"
        >
          Admin Login
        </button>
      </div>
    </div>
  );
};

export default HomePage;
