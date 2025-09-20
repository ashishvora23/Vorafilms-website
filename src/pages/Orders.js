// src/pages/Orders.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Orders() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    if (user) {
      const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory') || '[]');
      setOrders(purchaseHistory);
    }
  }, [user]);

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <section className="orders">
      <div className="container">
        <div className="section-title">
          <h2>Order History</h2>
          <p>Your past purchases and orders</p>
        </div>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <i className="fas fa-shopping-bag"></i>
            <h3>No orders yet</h3>
            <p>You haven't placed any orders yet</p>
            <button className="cta-button" onClick={() => navigate('/shop')}>
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div>
                    <h3>Order # {order.id}</h3>
                    <p className="order-date">{new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div className="order-status">
                    <span className={`status ${order.status}`}>{order.status}</span>
                    <p className="order-total">${order.total.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="order-items">
                  {order.items.map(item => (
                    <div key={item.cartId} className="order-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Orders;