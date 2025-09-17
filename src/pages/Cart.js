// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout', { state: { products: cartItems } });
    }
  };

  return (
    <section className="cart">
      <div className="container">
        <div className="section-title">
          <h2>Shopping Cart</h2>
          <p>Review your items</p>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <i className="fas fa-shopping-bag"></i>
            <h3>Your cart is empty</h3>
            <p>Add some products to your cart</p>
            <button className="cta-button" onClick={() => navigate('/shop')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.cartId} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(item.cartId)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Subtotal</span>
                <span>${getCartTotal()}</span>
              </div>
              <div className="summary-line">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="summary-line total">
                <span>Total</span>
                <span>${getCartTotal()}</span>
              </div>
              
              <button className="cta-button" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
              
              <button className="clear-cart" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;