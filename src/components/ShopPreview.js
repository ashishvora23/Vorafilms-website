// src/components/ShopPreview.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopPreview() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: 'Premium Wedding Album', price: 299, image: 'https://images.unsplash.com/photo-1531061682485-98338ef3ff4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },
    { id: 2, name: 'Bridal Gown Collection', price: 499, image: 'https://images.unsplash.com/photo-1596453584022-61a638cfc5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },
    { id: 3, name: 'Premium Photo Prints', price: 49, image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80' }
  ];

  const handleViewDetails = (product) => {
    navigate('/shop', { state: { scrollToProduct: product.id } });
  };

  return (
    <section className="shop">
      <div className="container">
        <div className="section-title">
          <h2>Our Shop</h2>
          <p>Purchase our premium photography products and services</p>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-price">${product.price}</div>
                <button className="add-to-cart" onClick={() => handleViewDetails(product)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="cta-button" onClick={() => navigate('/shop')}>View All Products</button>
        </div>
      </div>
    </section>
  );
}

export default ShopPreview;