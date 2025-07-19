import React from 'react';
import { PiStudentBold } from "react-icons/pi";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><span id="footerlogo"><PiStudentBold /></span>EduEventHub</div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
