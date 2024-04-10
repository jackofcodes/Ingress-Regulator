import React, { useState } from 'react';
import './logsign.css';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
      if (response.status === 200) {
        // Login successful
        console.log('Login successful');
        navigate('/admin-landing');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Login failed:', error.response.data.message);
        alert(`Login failed: ${error.response.data.message}`);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error logging in:', error.message);
        alert('Error logging in. Please try again later.');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
