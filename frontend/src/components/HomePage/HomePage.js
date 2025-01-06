import React from "react";
import { Link } from "react-router-dom";
import "../../styles/HomePage.css";  // Import CSS

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1>Welcome to the Expense Management System</h1>
        <p>A platform to manage your expenses efficiently.</p>
        <div className="buttons">
          <Link to="/admin/login">
            <button className="btn-admin">Admin Login</button>
          </Link>
          <Link to="/user/login">
            <button className="btn-user">User Login</button>
          </Link>
          <Link to="/register">
            <button className="btn-register">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
