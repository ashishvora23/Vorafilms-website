// src/components/ConfirmationModal.js
import React, { useState } from 'react';

function ConfirmationModal({ isOpen, onConfirm, onCancel, product }) {
  const [isProcessing, setIsProcessing] = useState(false);
  
  if (!isOpen) return null;

  const handleConfirm = () => {
    setIsProcessing(true);
    // Simulate processing delay
    setTimeout(() => {
      onConfirm();
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-modal" onClick={onCancel}>
          <i className="fas fa-times"></i>
        </button>
        
        {!isProcessing ? (
          <>
            <h2>Confirm Purchase</h2>
            <div className="confirmation-content">
              <div className="product-summary">
                <img src={product?.image} alt={product?.name} />
                <div>
                  <h3>{product?.name}</h3>
                  <p>Quantity: 1</p>
                  <p className="product-price">${product?.price}</p>
                </div>
              </div>
              <p>Are you sure you want to purchase this item?</p>
              <div className="confirmation-actions">
                <button className="confirm-btn" onClick={handleConfirm}>
                  Yes, Proceed to Payment
                </button>
                <button className="cancel-btn" onClick={onCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="processing-payment">
            <div className="spinner"></div>
            <h3>Processing your payment...</h3>
            <p>Please wait while we securely process your transaction</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConfirmationModal;