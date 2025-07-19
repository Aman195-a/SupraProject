import React, { useState } from 'react';
import { PiStudentBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <span id="footerlogo"><PiStudentBold /></span> EduEventHub
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu size={24} />
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signin">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
