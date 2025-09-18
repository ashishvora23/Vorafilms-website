// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>VoraFilms</h3>
            <p>Capturing life's most precious moments with creativity and passion. Professional photography services for all occasions.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Wedding Photography</Link></li>
              <li><Link to="/services">Pre-Wedding Shoot</Link></li>
              <li><Link to="/services">Portrait Photography</Link></li>
              <li><Link to="/services">Fashion Photography</Link></li>
              <li><Link to="/services">Commercial Photography</Link></li>
              <li><Link to="/services">Product Photography</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter to get updates on our latest offers and promotions.</p>
            <form>
              <div className="form-group">
                <input type="email" placeholder="Your Email Address" required />
              </div>
              <button type="submit" className="submit-btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Vorafilms Photography Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;