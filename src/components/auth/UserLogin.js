import React, { useState } from "react";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import "../../styles/UserLogin.css";  // Import CSS

function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(username, password).then((data) => {
      if (data.role === "USER") {
        navigate("/user/dashboard");
      } else {
        alert("Access denied! Only Users can log in here.");
      }
    }).catch((err) => {
      alert("Login failed! Please check your credentials.");
    });
  };

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;
