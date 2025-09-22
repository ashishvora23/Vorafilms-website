import React, { createContext, useContext, useState, useEffect } from 'react';
import { cartAPI } from '../services/api';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await cartAPI.getCart();
      setCartItems(response.data.items || []);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await cartAPI.addToCart({
        productId: product.id,
        quantity: product.quantity,
        price: product.price,
        name: product.name,
        image: product.image,
        category: product.category
      });
      
      setCartItems(response.data.items);
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to add to cart';
      return { success: false, message };
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await cartAPI.removeFromCart(itemId);
      setCartItems(prev => prev.filter(item => item.id !== itemId));
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to remove from cart';
      return { success: false, message };
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    try {
      const response = await cartAPI.updateCartItem(itemId, newQuantity);
      setCartItems(response.data.items);
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to update quantity';
      return { success: false, message };
    }
  };

  const clearCart = async () => {
    try {
      await cartAPI.clearCart();
      setCartItems([]);
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to clear cart';
      return { success: false, message };
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const setCartToProduct = async (product) => {
    try {
      // Clear cart first
      await clearCart();
      
      // Add single product
      const result = await addToCart(product);
      return result;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to set cart';
      return { success: false, message };
    }
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    setCartToProduct,
    loading
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}