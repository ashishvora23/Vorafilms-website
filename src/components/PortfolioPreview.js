import React from 'react';
import { useNavigate } from 'react-router-dom';

function PortfolioPreview() {
  const navigate = useNavigate();
  const portfolioItems = [
    { id: 1, title: 'Wedding Photography', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80' },
    { id: 2, title: 'Pre-Wedding Shoot', image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },
    { id: 3, title: 'Portrait Photography', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80' }
  ];

  return (
    <section className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Our Portfolio</h2>
          <p>Explore our collection of stunning photography work</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <img src={item.image} alt={item.title} />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <button className="cta-button">View Project</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="cta-button" onClick={() => navigate('/portfolio')}>View Full Portfolio</button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioPreview;