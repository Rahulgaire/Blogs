import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer_1">
      <div className="footer-container">
        
        <div className="footer-section brand">
          <h2>📚 RGBlog</h2>
          <p>Sharing thoughts, stories, and ideas with the world.</p>
        </div>

        
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/rahulgaire_" target='blank'><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rahul's Blog. All rights reserved.</p>
      </div>
    </footer>
   
   
  );
};

export default Footer;
