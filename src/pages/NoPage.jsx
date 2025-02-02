import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.description}>
        Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>
      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
      
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "120px",
    fontWeight: "bold",
    color: "#4a90e2",
    marginBottom: "10px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "#4a90e2",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "12px 24px",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  buttonHover: {
    backgroundColor: "#357ab7",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    marginTop: "20px",
    borderRadius: "12px",
  },
};

export default NotFoundPage;
