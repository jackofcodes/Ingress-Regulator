import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Import your CSS file
import logo from '../../images/logo2.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldHideNavbar = currentScrollPos > prevScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(!shouldHideNavbar);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`sticky-navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="logo"><img src={logo} alt="Logo" /></div>
        <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
