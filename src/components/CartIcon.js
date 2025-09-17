// src/components/CartIcon.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CartIcon() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-icon" onClick={() => navigate('/cart')}>
      <i className="fas fa-shopping-bag"></i>
      {cartItems.length > 0 && (
        <span className="cart-count">{cartItems.length}</span>
      )}
    </div>
  );
}

export default CartIcon;