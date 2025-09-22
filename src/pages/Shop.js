import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { productsAPI } from '../services/api';
import ConfirmationModal from '../components/ConfirmationModal';

function Shop() {
  const { user } = useAuth();
  const { addToCart, setCartToProduct } = useCart();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await productsAPI.getAll();
      setProducts(response.data);
      
      // Initialize quantities
      const quantities = {};
      response.data.forEach(product => {
        quantities[product.id] = 1;
      });
      setProductQuantities(quantities);
    } catch (error) {
      setError('Failed to load products');
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setProductQuantities(prev => ({
      ...prev,
      [productId]: newQuantity
    }));
  };

  const handleAddToCart = async (product) => {
    if (!user) {
      alert('Please login to add items to cart');
      navigate('/login');
      return;
    }
    
    const productWithQuantity = {
      ...product,
      quantity: productQuantities[product.id],
      cartId: Date.now()
    };
    
    const result = await addToCart(productWithQuantity);
    
    if (result.success) {
      alert('Product added to cart!');
    } else {
      alert(result.message);
    }
  };

  const handleBuyNow = async (product) => {
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
    
    const result = await setCartToProduct(productWithQuantity);
    
    if (result.success) {
      setSelectedProduct(productWithQuantity);
      setShowConfirmation(true);
    } else {
      alert(result.message);
    }
  };

  const confirmPurchase = () => {
    setShowConfirmation(false);
    navigate('/checkout');
  };

  const cancelPurchase = () => {
    setShowConfirmation(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <section className="shop">
        <div className="container">
          <div className="section-title">
            <h2>Our Shop</h2>
            <p>Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="shop">
        <div className="container">
          <div className="section-title">
            <h2>Our Shop</h2>
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

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
                <span className="product-category">{product.category}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
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
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </button>
                  <button 
                    className="buy-now" 
                    onClick={() => handleBuyNow(product)}
                  >
                    <i className="fas fa-bolt"></i> Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ConfirmationModal 
          isOpen={showConfirmation}
          onConfirm={confirmPurchase}
          onCancel={cancelPurchase}
          product={selectedProduct}
        />
      </div>
    </section>
  );
}

export default Shop;