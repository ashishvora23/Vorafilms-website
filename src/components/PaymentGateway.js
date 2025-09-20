// src/components/PaymentGateway.js
import React, { useState } from 'react';

function PaymentGateway({ order, onSuccess, onCancel }) {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    saveCard: false
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Remove spaces from card number before validation
    const cleanCardNumber = paymentInfo.cardNumber.replace(/\s/g, '');
    if (!cleanCardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    
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
    
    if (!paymentInfo.cvv.match(/^\d{3}$/)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    
    if (!paymentInfo.name.match(/^[a-zA-Z\s]+$/)) {
      newErrors.name = 'Name can only contain letters and spaces';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'cardNumber') {
      // Remove non-digit characters and format with spaces
      const cleanValue = value.replace(/\D/g, '');
      const formattedValue = cleanValue.replace(/(\d{4})/g, '$1 ').trim();
      setPaymentInfo(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      return;
    }
    
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
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsProcessing(true);
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        // Save order to purchase history
        const orders = JSON.parse(localStorage.getItem('purchaseHistory') || '[]');
        orders.push({
          id: Date.now(),
          date: new Date().toISOString(),
          items: order.items,
          total: order.total,
          status: 'completed'
        });
        localStorage.setItem('purchaseHistory', JSON.stringify(orders));
        
        onSuccess();
      }, 3000);
    }
  };

  return (
    <div className="payment-gateway">
      <div className="payment-header">
        <h2>Secure Payment Gateway</h2>
        <p>Complete your purchase with our secure payment system</p>
      </div>
      
      <div className="order-summary">
        <h3>Order Summary</h3>
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
          <h4>Total: ${order.total.toFixed(2)}</h4>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="payment-form">
        <h3>Payment Information</h3>
        
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
            disabled={isProcessing}
          />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>
        
        <div className="form-row">
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
              disabled={isProcessing}
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
              disabled={isProcessing}
            />
            {errors.cvv && <span className="error">{errors.cvv}</span>}
          </div>
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
            disabled={isProcessing}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        
        <div className="form-group checkbox">
          <label>
            <input 
              type="checkbox" 
              name="saveCard" 
              checked={paymentInfo.saveCard}
              onChange={handleInputChange}
              disabled={isProcessing}
            />
            Save card for future purchases
          </label>
        </div>
        
        <div className="payment-actions">
          <button 
            type="submit" 
            className="pay-now-btn"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : `Pay Now $${order.total.toFixed(2)}`}
          </button>
          <button 
            type="button" 
            className="cancel-payment"
            onClick={onCancel}
            disabled={isProcessing}
          >
            Cancel
          </button>
        </div>
        
        <div className="security-notice">
          <i className="fas fa-lock"></i>
          <span>Your payment information is encrypted and secure</span>
        </div>
      </form>
    </div>
  );
}

export default PaymentGateway;