import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  if (localStorage.getItem("isAdminLoggedIn") !== "true") {
    navigate("/admin/login");
    return null;
  }

  const styles = {
    container: {
      backgroundColor: "#ffffff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      maxWidth: "600px",
      margin: "20px auto",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    heading: {
      color: "#333",
      marginBottom: "20px",
    },
    actions: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    linkButton: {
      backgroundColor: "#007bff",
      color: "#ffffff",
      padding: "10px 20px",
      borderRadius: "5px",
      textDecoration: "none",
      margin: "10px 0",
      transition: "background-color 0.3s, transform 0.3s",
      fontSize: "16px",
      width: "200px",
      textAlign: "center",
    },
    linkButtonHover: {
      backgroundColor: "#0056b3",
      transform: "scale(1.05)",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Dashboard</h2>
      <div style={styles.actions}>
        <Link
          to="/admin/leaderboard"
          style={styles.linkButton}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.linkButtonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.linkButton.backgroundColor)}
        >
          View Leaderboard
        </Link>
        <Link
          to="/admin/user-scores"
          style={styles.linkButton}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.linkButtonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.linkButton.backgroundColor)}
        >
          View User Scores
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;