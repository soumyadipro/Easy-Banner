import React from 'react';
import './Footer.css';
import { images, data } from '../../constants';

const Footer = () => {
  return (
    <footer className="compact-footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src={images.logo} alt="logo" className="footer-logo" />
        </div>
        <nav className="footer-nav">
          {data.Menu.slice(0, -1).map((item, index) => (
            <a key={index} href="#" className="footer-link">{item.text}</a>
          ))}
        </nav>
        <div className="contact-info">
          <h3>Contact us:</h3>
          <p>Email: cancercopilot@gmail.com</p>
          <p>Phone: 9620545548</p>
          <p>Bangalore, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Cancer Copilot. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;