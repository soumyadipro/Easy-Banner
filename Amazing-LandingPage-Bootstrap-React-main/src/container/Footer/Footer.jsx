import React from 'react';
import './Footer.css';
import { images, data } from '../../constants';

const Footer = () => {
  return (
    <footer className="compact-footer">
      <div className="footer-content">
        <div className="logo-container">
         
        </div>
        <nav className="footer-nav">
          {data.Menu.slice(0, -1).map((item, index) => (
            <a key={index} href={item.link} className="footer-link">{item.text}</a>
          ))}
        </nav>
        <div className="contact-info">
          <h3>Contact us:</h3>
          <p className="email">Email: easybanner@gmail.com</p>
          <p>Phone: 9620545548</p>
          <p>Bangalore, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 Easy Banner. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;