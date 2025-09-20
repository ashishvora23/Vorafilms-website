// src/components/PortfolioModal.js
import React from 'react';

function PortfolioModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <img src={image} alt="Full size" />
      </div>
    </div>
  );
}

export default PortfolioModal;