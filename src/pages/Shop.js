// src/pages/Shop.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Premium Wedding Album', price: 299, image: 'https://images.unsplash.com/photo-1531061682485-98338ef3ff4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', quantity: 1 },
  { id: 2, name: 'Bridal Gown Collection', price: 499, image: 'https://images.unsplash.com/photo-1596453584022-61a638cfc5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', quantity: 1 },
  { id: 3, name: 'Premium Photo Prints', price: 49, image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80', quantity: 1 },
  { id: 4, name: 'Groom Suit Collection', price: 399, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80', quantity: 1 },
  { id: 5, name: 'Digital Photo Package', price: 199, image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', quantity: 1 },
  { id: 6, name: 'Custom Framed Photos', price: 129, image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', quantity: 1 }
];

function Shop() {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [productQuantities, setProductQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setProductQuantities(prev => ({
      ...prev,
      [productId]: newQuantity
    }));
  };

  const handleAddToCart = (product) => {
    if (!user) {
      alert('Please login to add items to cart');
      navigate('/login');
      return;
    }
    
    const productWithQuantity = {
      ...product,
      quantity: productQuantities[product.id],
      cartId: Date.now() // Unique ID for cart item
    };
    
    addToCart(productWithQuantity);
    alert('Product added to cart!');
  };

  const handleBuyNow = (product) => {
    if (!user) {
      alert('Please login to purchase items');
      navigate('/login');
      return;
    }
    
    const productWithQuantity = {
      ...product,
      quantity: productQuantities[product.id],
      cartId: Date.now()
    };
    
    addToCart(productWithQuantity);
    navigate('/checkout');
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
                
                <div className="quantity-selector">
                  <button 
                    onClick={() => handleQuantityChange(product.id, productQuantities[product.id] - 1)}
                  >-</button>
                  <span>{productQuantities[product.id]}</span>
                  <button 
                    onClick={() => handleQuantityChange(product.id, productQuantities[product.id] + 1)}
                  >+</button>
                </div>
                
                <div className="product-actions">
                  <button 
                    className="add-to-cart" 
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="buy-now" 
                    onClick={() => handleBuyNow(product)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;