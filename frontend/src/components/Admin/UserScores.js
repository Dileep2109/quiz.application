import React from "react";

function UserScores() {

  const userScores = [
    { name: "John", score: 10 },
    { name: "Jason", score: 8 },
    { name: "Alex", score: 7 },
    { name: "Dileep", score: 10}
  ];

  const styles = {
    container: {
      backgroundColor: "#f9f9f9",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      maxWidth: "400px",
      margin: "20px auto",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      textAlign: "center",
      color: "#333",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
      display: "flex",
      justifyContent: "space-between",
      color: "#555",
      cursor: "pointer",
    },
    lastListItem: {
      borderBottom: "none",
    },
    hoverEffect: {
      backgroundColor: "#f1f1f1",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User  Scores</h2>
      <ul style={styles.list}>
        {userScores.map((user, index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
              ...(index === userScores.length - 1 ? styles.lastListItem : {}),
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.hoverEffect.backgroundColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
          >
            {user.name} - Score: {user.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserScores;