import React, { useState } from "react";
import AuthService from "../../services/AuthService";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER"); // Default role is USER

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(username, password, role).then(() => {
      alert("Registration successful!");
    }).catch((err) => {
      alert("Registration failed!");
    });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username: </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Role: </label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
