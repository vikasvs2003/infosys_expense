import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthService from './services/AuthService';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import Analytics from './components/Analytics';
import AdminLogin from './components/auth/AdminLogin';
import UserLogin from './components/auth/UserLogin';
import Register from './components/auth/Register';
import AdminDashboard from './components/dashboard/AdminDashboard';
import UserDashboard from './components/dashboard/UserDashboard';
import HomePage from './components/HomePage/HomePage'; // Import HomePage component
import './styles/global.css'; // Import global styles

const App = () => {
  const userRole = AuthService.getUserRole(); // Get the user role dynamically

  return (
    <Router>
      <div>
        <h1>Expense Management System</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/user/login">User Login</a></li>
            <li><a href="/admin/login">Admin Login</a></li>
            {userRole === 'ADMIN' && <li><a href="/analytics">Analytics</a></li>}
          </ul>
        </nav>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Authentication Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/register" element={<Register />} />

          {/* Expense Management Pages */}
          <Route
            path="/expenses"
            element={
              <div>
                <AddExpenseForm />
                <ExpenseList />
              </div>
            }
          />

          {/* Role-Based Dashboards */}
          {userRole === 'ADMIN' && <Route path="/admin/dashboard" element={<AdminDashboard />} />}
          {userRole === 'USER' && <Route path="/user/dashboard" element={<UserDashboard />} />}

          {/* Analytics for Admin */}
          {userRole === 'ADMIN' && <Route path="/analytics" element={<Analytics />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
