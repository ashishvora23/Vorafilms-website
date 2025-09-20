// src/pages/Login.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Hardcoded seller account
    if (formData.email === 'seller@vorafilms.com' && formData.password === 'seller123') {
      login({
        email: formData.email,
        name: 'Vorafilms Seller',
        role: 'seller'
      });
      navigate('/dashboard');
      return;
    }

    // Check for regular users in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === formData.email && u.password === formData.password);
    
    if (user) {
      login({
        email: user.email,
        name: user.name,
        role: 'customer'
      });
      navigate('/');
    } else {
      setError('Invalid email or password. Please try again or sign up if you don\'t have an account.');
    }
  };

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-form">
          <h2>Login to Your Account</h2>
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
            <button type="submit" className="submit-btn">Login</button>
          </form>
          <p className="auth-link">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
          <div className="demo-account">
            <p>Seller Demo Account:</p>
            <p>Email: seller@vorafilms.com</p>
            <p>Password: seller123</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;