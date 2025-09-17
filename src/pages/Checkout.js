// src/pages/Checkout.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });
  const [errors, setErrors] = useState({});

  if (!product) {
    navigate('/shop');
    return null;
  }

  const validateForm = () => {
    const newErrors = {};
    
    // Card number validation (16 digits)
    if (!paymentInfo.cardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    
    // Expiry date validation (MM/YY format)
    if (!paymentInfo.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      newErrors.expiryDate = 'Please use MM/YY format';
    } else {
      const [month, year] = paymentInfo.expiryDate.split('/');
      const now = new Date();
      const currentYear = now.getFullYear() % 100;
      const currentMonth = now.getMonth() + 1;
      
      if (parseInt(year) < currentYear || 
          (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        newErrors.expiryDate = 'Card has expired';
      }
    }
    
    // CVV validation (3 digits)
    if (!paymentInfo.cvv.match(/^\d{3}$/)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    
    // Name validation (letters and spaces only)
    if (!paymentInfo.name.match(/^[a-zA-Z\s]+$/)) {
      newErrors.name = 'Name can only contain letters and spaces';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Format card number (add spaces every 4 digits)
    if (name === 'cardNumber') {
      const formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setPaymentInfo(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      return;
    }
    
    // Format expiry date (add slash after 2 digits)
    if (name === 'expiryDate') {
      const formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .substring(0, 5);
      setPaymentInfo(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      return;
    }
    
    // Restrict CVV to 3 digits
    if (name === 'cvv') {
      const formattedValue = value.replace(/\D/g, '').substring(0, 3);
      setPaymentInfo(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      return;
    }
    
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate payment processing
      alert('Payment processed successfully! Thank you for your purchase.');
      
      // Add to purchase history
      const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
      purchases.push({
        id: Date.now(),
        product,
        date: new Date().toISOString()
      });
      localStorage.setItem('purchases', JSON.stringify(purchases));
      
      navigate('/');
    }
  };

  return (
    <section className="checkout">
      <div className="container">
        <div className="section-title">
          <h2>Checkout</h2>
          <p>Complete your purchase</p>
        </div>
        <div className="checkout-content">
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="product-details">
              <img src={product.image} alt={product.name} />
              <div>
                <h4>{product.name}</h4>
                <p>Price: ${product.price}</p>
              </div>
            </div>
            <div className="total">
              <h4>Total: ${product.price}</h4>
            </div>
          </div>
          <div className="payment-form">
            <h3>Payment Information <span className="required">* Required fields</span></h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Card Number <span className="required">*</span></label>
                <input 
                  type="text" 
                  name="cardNumber" 
                  value={paymentInfo.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required 
                />
                {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
              </div>
              <div className="form-group">
                <label>Expiry Date <span className="required">*</span></label>
                <input 
                  type="text" 
                  name="expiryDate" 
                  value={paymentInfo.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  required 
                />
                {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
              </div>
              <div className="form-group">
                <label>CVV <span className="required">*</span></label>
                <input 
                  type="text" 
                  name="cvv" 
                  value={paymentInfo.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="3"
                  required 
                />
                {errors.cvv && <span className="error">{errors.cvv}</span>}
              </div>
              <div className="form-group">
                <label>Cardholder Name <span className="required">*</span></label>
                <input 
                  type="text" 
                  name="name" 
                  value={paymentInfo.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required 
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <button type="submit" className="submit-btn">Pay Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;