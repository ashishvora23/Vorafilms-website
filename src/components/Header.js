// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CartIcon from './CartIcon'; // Add this import

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">Vora<span>Films</span></Link>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              {user && user.role === 'seller' && (
                <li><Link to="/dashboard">Dashboard</Link></li>
              )}
            </ul>
          </nav>
          <div className="header-right">
            <CartIcon /> {/* Add CartIcon here */}
            <div className="auth-buttons">
              {user ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <>
                  <button onClick={() => navigate('/login')}>Login</button>
                  <button onClick={() => navigate('/signup')}>Sign Up</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;