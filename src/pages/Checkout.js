// src/pages/Checkout.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import PaymentGateway from '../components/PaymentGateway';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState('form'); // 'form', 'processing', 'success'

  if (!user) {
    navigate('/login');
    return null;
  }

  if (cartItems.length === 0 && paymentStatus !== 'success') {
    navigate('/shop');
    return null;
  }

  const order = {
    items: cartItems,
    total: getCartTotal() * 1.1, // Including 10% tax
    date: new Date().toISOString()
  };

  const handlePaymentSuccess = () => {
    setPaymentStatus('success');
    clearCart();
  };

  const handlePaymentCancel = () => {
    navigate('/cart');
  };

  if (paymentStatus === 'success') {
    return (
      <section className="checkout">
        <div className="container">
          <div className="payment-success">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Payment Successful!</h2>
            <p>Thank you for your purchase. Your order has been confirmed.</p>
            <div className="order-details">
              <h3>Order Details</h3>
              {order.items.map(item => (
                <div key={item.cartId} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
              ))}
              <div className="order-total">
                <p>Total: ${order.total.toFixed(2)}</p>
              </div>
            </div>
            <div className="success-actions">
              <button className="cta-button" onClick={() => navigate('/')}>
                Continue Shopping
              </button>
              <button className="view-orders" onClick={() => navigate('/orders')}>
                View Order History
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout">
      <div className="container">
        <PaymentGateway 
          order={order}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
        />
      </div>
    </section>
  );
}

export default Checkout;