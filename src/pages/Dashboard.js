import React, { useState } from 'react';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('orders');
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'orders':
        return (
          <div>
            <h3>Recent Orders</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ddd' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Order ID</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Customer</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Product</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Amount</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>#12345</td>
                  <td style={{ padding: '12px' }}>John Doe</td>
                  <td style={{ padding: '12px' }}>Premium Wedding Album</td>
                  <td style={{ padding: '12px' }}>$299</td>
                  <td style={{ padding: '12px' }}><span style={{ color: 'green' }}>Completed</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px' }}>#12346</td>
                  <td style={{ padding: '12px' }}>Jane Smith</td>
                  <td style={{ padding: '12px' }}>Bridal Gown Collection</td>
                  <td style={{ padding: '12px' }}>$499</td>
                  <td style={{ padding: '12px' }}><span style={{ color: 'orange' }}>Processing</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'products':
        return (
          <div>
            <h3>Your Products</h3>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1531061682485-98338ef3ff4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Product" />
                </div>
                <div className="product-info">
                  <h3>Premium Wedding Album</h3>
                  <div className="product-price">$299</div>
                  <button className="add-to-cart">Edit Product</button>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1596453584022-61a638cfc5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Product" />
                </div>
                <div className="product-info">
                  <h3>Bridal Gown Collection</h3>
                  <div className="product-price">$499</div>
                  <button className="add-to-cart">Edit Product</button>
                </div>
              </div>
            </div>
            <button className="cta-button" style={{ marginTop: '20px' }}>Add New Product</button>
          </div>
        );
      case 'analytics':
        return (
          <div>
            <h3>Sales Analytics</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
                <h4>Total Revenue</h4>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$5,243</p>
              </div>
              <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
                <h4>Total Orders</h4>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>42</p>
              </div>
              <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
                <h4>Products Sold</h4>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>28</p>
              </div>
              <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
                <h4>Customer Satisfaction</h4>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>98%</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="dashboard">
      <div className="container">
        <div className="section-title">
          <h2>Seller Dashboard</h2>
          <p>Manage your products and view analytics</p>
        </div>
        <div className="dashboard-tabs">
          <div className={`tab ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>Orders</div>
          <div className={`tab ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>Products</div>
          <div className={`tab ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>Analytics</div>
        </div>
        <div className="dashboard-content">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;