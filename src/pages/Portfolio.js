// src/pages/Portfolio.js
import React, { useState } from 'react';
import PortfolioModal from '../components/PortfolioModal';

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const portfolioCategories = [
    {
      id: 1,
      title: 'Wedding Photography',
      images: [
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
        'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'
      ]
    },
    // Add other categories with their images
  ];

  return (
    <section className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Our Portfolio</h2>
          <p>Explore our collection of stunning photography work</p>
        </div>
        
        {portfolioCategories.map(category => (
          <div key={category.id} className="portfolio-category">
            <h3>{category.title}</h3>
            <div className="portfolio-grid">
              {category.images.map((image, index) => (
                <div 
                  key={index} 
                  className="portfolio-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image} alt={category.title} />
                  <div className="portfolio-overlay">
                    <button className="cta-button">View Image</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <PortfolioModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      </div>
    </section>
  );
}

export default Portfolio;