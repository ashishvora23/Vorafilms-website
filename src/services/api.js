import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (userData) => api.put('/auth/profile', userData),
  logout: () => api.post('/auth/logout'),
};

// Products API
export const productsAPI = {
  getAll: () => api.get('/products'),
  getById: (id) => api.get(`/products/${id}`),
  create: (productData) => api.post('/products', productData),
  update: (id, productData) => api.put(`/products/${id}`, productData),
  delete: (id) => api.delete(`/products/${id}`),
  getByCategory: (category) => api.get(`/products/category/${category}`),
};

// Cart API
export const cartAPI = {
  getCart: () => api.get('/cart'),
  addToCart: (itemData) => api.post('/cart', itemData),
  updateCartItem: (id, quantity) => api.put(`/cart/${id}`, { quantity }),
  removeFromCart: (id) => api.delete(`/cart/${id}`),
  clearCart: () => api.delete('/cart'),
};

// Orders API
export const ordersAPI = {
  getAll: () => api.get('/orders'),
  getById: (id) => api.get(`/orders/${id}`),
  create: (orderData) => api.post('/orders', orderData),
  updateStatus: (id, status) => api.put(`/orders/${id}/status`, { status }),
};

// Blog API
export const blogAPI = {
  getAll: () => api.get('/blogs'),
  getById: (id) => api.get(`/blogs/${id}`),
  create: (blogData) => api.post('/blogs', blogData),
  update: (id, blogData) => api.put(`/blogs/${id}`, blogData),
  delete: (id) => api.delete(`/blogs/${id}`),
  getByCategory: (category) => api.get(`/blogs/category/${category}`),
};

// Portfolio API
export const portfolioAPI = {
  getAll: () => api.get('/portfolio'),
  getById: (id) => api.get(`/portfolio/${id}`),
  getByCategory: (category) => api.get(`/portfolio/category/${category}`),
  create: (portfolioData) => api.post('/portfolio', portfolioData),
  update: (id, portfolioData) => api.put(`/portfolio/${id}`, portfolioData),
  delete: (id) => api.delete(`/portfolio/${id}`),
};

// Upload API
export const uploadAPI = {
  uploadImage: (formData) => api.post('/upload/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  uploadMultiple: (formData) => api.post('/upload/multiple', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
};

export default api;