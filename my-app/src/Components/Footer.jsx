
import { PiStudentBold } from "react-icons/pi";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section">
          <h1 className="footer-title"><span id="footerlog"><PiStudentBold /></span>EduEventHub</h1>
          <p className="footer-text">
            Discover courses and events that inspire learning and growth. Join
            us and explore new opportunities!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h2 className="footer-heading">Follow Us</h2>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} EduEventHub. All Rights Reserved.
      </div>
    </footer>
  );
};



