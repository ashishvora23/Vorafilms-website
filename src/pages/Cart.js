// src/pages/Cart.js
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Cart() {
  const { cartItems, removeFromCart, getCartTotal, clearCart, updateQuantity } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orderHistory, setOrderHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('cart');

  useEffect(() => {
    if (user) {
      const orders = JSON.parse(localStorage.getItem('purchaseHistory') || '[]');
      setOrderHistory(orders);
    }
  }, [user]);

  const handleCheckout = () => {
    if (!user) {
      alert('Please login to proceed to checkout');
      navigate('/login');
      return;
    }
    
    if (cartItems.length > 0) {
      navigate('/checkout');
    }
  };

  const handleQuantityChange = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(cartId, newQuantity);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="cart">
      <div className="container">
        <div className="section-title">
          <h2>Shopping Cart</h2>
          <p>Manage your purchases and view order history</p>
        </div>

        <div className="cart-tabs">
          <button 
            className={activeTab === 'cart' ? 'active' : ''}
            onClick={() => setActiveTab('cart')}
          >
            <i className="fas fa-shopping-cart"></i> Current Cart ({cartItems.length})
          </button>
          <button 
            className={activeTab === 'history' ? 'active' : ''}
            onClick={() => setActiveTab('history')}
          >
            <i className="fas fa-history"></i> Order History ({orderHistory.length})
          </button>
        </div>
        
        {activeTab === 'cart' ? (
          cartItems.length === 0 ? (
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
                      <p className="item-category">{item.category}</p>
                      <p className="item-price">${item.price}</p>
                      
                      <div className="quantity-selector">
                        <button 
                          onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
                        >-</button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
                        >+</button>
                      </div>
                      
                      <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
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
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="summary-line">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <div className="summary-line">
                  <span>Tax (10%)</span>
                  <span>${(getCartTotal() * 0.1).toFixed(2)}</span>
                </div>
                <div className="summary-line total">
                  <span>Total</span>
                  <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
                </div>
                
                <button className="cta-button" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
                
                <button className="clear-cart-btn" onClick={clearCart}>
                  <i className="fas fa-trash"></i> Clear Cart
                </button>
              </div>
            </div>
          )
        ) : (
          <div className="order-history">
            {orderHistory.length === 0 ? (
              <div className="empty-orders">
                <i className="fas fa-receipt"></i>
                <h3>No orders yet</h3>
                <p>You haven't placed any orders yet</p>
                <button className="cta-button" onClick={() => navigate('/shop')}>
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="orders-list">
                {orderHistory.map(order => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <div>
                        <h3>Order # {order.id}</h3>
                        <p className="order-date">{formatDate(order.date)}</p>
                        <span className={`order-status ${order.status}`}>{order.status}</span>
                      </div>
                      <div className="order-total-amount">
                        <p>Total: ${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <div className="order-items">
                      {order.items.map(item => (
                        <div key={item.cartId} className="order-item">
                          <img src={item.image} alt={item.name} />
                          <div className="item-details">
                            <h4>{item.name}</h4>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;