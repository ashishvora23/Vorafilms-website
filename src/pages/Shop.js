import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Premium Wedding Album', price: 299, image: 'https://images.unsplash.com/photo-1531061682485-98338ef3ff4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80' },
  { id: 2, name: 'Bridal Gown Collection', price: 499, image: 'https://images.unsplash.com/photo-1596453584022-61a638cfc5cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80' },
  { id: 3, name: 'Premium Photo Prints', price: 49, image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80' },
  { id: 4, name: 'Groom Suit Collection', price: 399, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80' },
  { id: 5, name: 'Digital Photo Package', price: 199, image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80' },
  { id: 6, name: 'Custom Framed Photos', price: 129, image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80' }
];

function Shop() {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (!user) {
      alert('Please login to add items to cart');
      navigate('/login');
      return;
    }

    addToCart(product);
    alert('Product added to cart!');
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
                <button 
                  className="add-to-cart" 
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
