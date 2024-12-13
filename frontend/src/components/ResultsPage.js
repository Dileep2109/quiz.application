import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, score } = location.state || {};

  const pageStyles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
      padding: '20px',
      backgroundColor: '#f4f4f4',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '2rem',
      color: '#333',
    },
    paragraph: {
      fontSize: '1.2rem',
      marginTop: '10px',
      color: '#555',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#4caf50',
      color: 'white',
      cursor: 'pointer',
      marginTop: '20px',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={pageStyles.container}>
  <h2 style={pageStyles.heading}>Quiz completed!</h2>
  <h3 style={pageStyles.heading}>Thank you for participating, {name}!</h3>
  <p style={pageStyles.paragraph}>Your score: {score}</p>
  <button
    style={pageStyles.button}
    onClick={handleGoHome}
    onMouseOver={(e) => e.target.style.backgroundColor = pageStyles.buttonHover.backgroundColor}
    onMouseOut={(e) => e.target.style.backgroundColor = pageStyles.button.backgroundColor}
  >
    Go Home
  </button>
</div>

  );
}

export default ResultsPage;
