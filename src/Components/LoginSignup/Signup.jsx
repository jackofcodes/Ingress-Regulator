// Signup.js
import React from 'react';
import './logsign.css'
import Navbar from '../Navbar/Navbar';

const Signup = () => {
  return (
    <div>
        <Navbar />
    <div className="auth-container">
        
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
