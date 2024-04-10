import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page main">
      <header>
        <h1>Welcome to Ingress Regulator</h1>
        <p>A simple solution to manage your visitors efficiently</p>
      </header>
      <main>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Visitor check-in and check-out</li>
            <li>Real-time notifications</li>
            <li>Visitor logs and history</li>
            <li>Customizable settings</li>
          </ul>
        </section>
        <section className="cta">
          <h2>Ready to get started?</h2>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          <Link to="/login" className="btn btn-secondary">Log In</Link>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Visitor Management System</p>
      </footer>
    </div>
  );
}

export default LandingPage;
