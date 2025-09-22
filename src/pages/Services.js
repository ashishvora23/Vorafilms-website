import React, { useState } from 'react';

function Services() {
  const [activeCategory, setActiveCategory] = useState('weddings');
  
  const categories = {
    weddings: {
      title: 'Wedding Photography',
      description: 'Capture your special day with our professional wedding photography services. We specialize in candid moments, traditional poses, and creative shots that tell your unique love story. Our team will work with you to create a personalized package that meets all your needs.',
      images: [
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
        'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      ],
      video: 'https://www.youtube.com/embed/videoseries?list=UUVorafilmsPhotography'
    },
    preWeddings: {
      title: 'Pre-Wedding Photography',
      description: 'Beautiful pre-wedding shoots that capture the essence of your relationship before the big day. Choose from various locations and themes to create memorable images. Our photographers will help you feel comfortable and natural in front of the camera.',
      images: [
        'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        'https://images.unsplash.com/photo-1606778303242-8787b2b45be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
      ],
      video: 'https://www.youtube.com/embed/videoseries?list=UUVorafilmsPhotography'
    },
    modelling: {
      title: 'Model Portfolio',
      description: 'Professional modeling portfolio photography that highlights your unique features and helps you stand out in the competitive modeling industry. We work with aspiring and experienced models to create stunning portfolios that showcase their versatility and range.',
      images: [
        'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
        'https://images.unsplash.com/photo-1596453584022-61a638cfc5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
        'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1569176412694-3d7c2c4c91bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
      ],
      video: 'https://www.youtube.com/embed/videoseries?list=UUVorafilmsPhotography'
    },
    products: {
      title: 'Product Photography',
      description: 'High-quality product photography that makes your items stand out. Perfect for e-commerce, catalogs, and marketing materials. We use professional lighting and composition techniques to showcase your products in the best possible way.',
      images: [
        'https://images.unsplash.com/photo-1606778303242-8787b2b45be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
        'https://images.unsplash.com/photo-1584305574647-0cc949a2bb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        'https://images.unsplash.com/photo-1603728352876-0f6bf3192e6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1611010344444-5f9e4d86a6e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
        'https://images.unsplash.com/photo-1611859266516-31b2b35d4e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
      ],
      video: 'https://www.youtube.com/embed/videoseries?list=UUVorafilmsPhotography'
    },
    events: {
      title: 'Event Photography',
      description: 'Comprehensive event photography services for corporate events, parties, and special occasions. We capture the essence and energy of your event, ensuring you have lasting memories of all the important moments.',
      images: [
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1501281667305-0d4ebdb585eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ],
      video: 'https://www.youtube.com/embed/videoseries?list=UUVorafilmsPhotography'
    }
  };

  const currentCategory = categories[activeCategory];

  return (
    <section className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Professional photography services for all occasions</p>
        </div>
        
        <div className="services-navigation">
          <div className="services-categories">
            <button 
              className={activeCategory === 'weddings' ? 'active' : ''}
              onClick={() => setActiveCategory('weddings')}
            >
              <i className="fas fa-ring"></i>
              Weddings
            </button>
            <button 
              className={activeCategory === 'preWeddings' ? 'active' : ''}
              onClick={() => setActiveCategory('preWeddings')}
            >
              <i className="fas fa-heart"></i>
              Pre-Weddings
            </button>
            <button 
              className={activeCategory === 'modelling' ? 'active' : ''}
              onClick={() => setActiveCategory('modelling')}
            >
              <i className="fas fa-user"></i>
              Modelling
            </button>
            <button 
              className={activeCategory === 'products' ? 'active' : ''}
              onClick={() => setActiveCategory('products')}
            >
              <i className="fas fa-box"></i>
              Products
            </button>
            <button 
              className={activeCategory === 'events' ? 'active' : ''}
              onClick={() => setActiveCategory('events')}
            >
              <i className="fas fa-calendar"></i>
              Events
            </button>
          </div>
        </div>
        
        <div className="service-content">
          <div className="service-info">
            <h3>{currentCategory.title}</h3>
            <p>{currentCategory.description}</p>
            
            <div className="service-gallery">
              {currentCategory.images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${currentCategory.title} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="service-video">
            <h4>Watch Our Work</h4>
            <div className="video-container">
              <iframe 
                width="100%" 
                height="315" 
                src={currentCategory.video}
                title={`${currentCategory.title} Video`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-description">
              <p>Check out our YouTube channel for more videos:</p>
              <a href="https://www.youtube.com/@VorafilmsPhotography" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i> Vorafilms Photography Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;