import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './logsign.css';
import Navbar from '../Navbar/Navbar';
import API_URL from '../../config';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(`${API_URL}/api/auth/signup`, formData);
      if (response.status === 201) {
        console.log('Signup successful');
        alert("Signup successful");
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        console.error('Signup failed:', error.response.data.message);
        alert(`Signup failed: ${error.response.data.message}`);
      } else {
        console.error('Error signing up:', error.message);
        alert('Error signing up. Please try again later.');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
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
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
